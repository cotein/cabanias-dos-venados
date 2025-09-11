<template>
  <div class="carousel-wrapper">
    <div 
      :id="carouselId" 
      class="carousel slide" 
      :data-bs-ride="autoPlay ? 'carousel' : false"
      :data-bs-interval="interval"
    >
      <!-- Indicadores -->
      <div v-if="showIndicators" class="carousel-indicators">
        <button
          v-for="(image, index) in images"
          :key="`indicator-${index}`"
          type="button"
          :data-bs-target="`#${carouselId}`"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : 'false'"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner">
        <div
          v-for="(image, index) in images"
          :key="`slide-${index}`"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img
            :src="image.src"
            class="d-block w-100"
            :alt="image.alt || `Slide ${index + 1}`"
            :style="{ height: imageHeight, objectFit: objectFit }"
          >
          
          <!-- Caption opcional -->
          <div v-if="image.caption || image.title" class="carousel-caption d-none d-md-block">
            <h5 v-if="image.title">{{ image.title }}</h5>
            <p v-if="image.caption">{{ image.caption }}</p>
          </div>
        </div>
      </div>

      <!-- Controles de navegación -->
      <button
        v-if="showControls"
        class="carousel-control-prev"
        type="button"
        :data-bs-target="`#${carouselId}`"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        v-if="showControls"
        class="carousel-control-next"
        type="button"
        :data-bs-target="`#${carouselId}`"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Props del componente
const props = defineProps({
  images: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(img => 
        typeof img === 'object' && 
        'src' in img
      )
    }
    // Formato esperado:
    // [
    //   {
    //     src: 'url-de-imagen',
    //     alt: 'texto alternativo',
    //     title: 'título opcional',
    //     caption: 'descripción opcional'
    //   },
    //   ...
    // ]
  },
  showIndicators: {
    type: Boolean,
    default: true
  },
  showControls: {
    type: Boolean,
    default: true
  },
  autoPlay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 5000 // 5 segundos
  },
  imageHeight: {
    type: String,
    default: '500px'
  },
  objectFit: {
    type: String,
    default: 'cover',
    validator: (value) => {
      return ['cover', 'contain', 'fill', 'none', 'scale-down'].includes(value)
    }
  },
  fade: {
    type: Boolean,
    default: false
  }
})

// ID único para el carousel
const carouselId = ref(`carousel-${Math.random().toString(36).substr(2, 9)}`)

// Referencia al carousel de Bootstrap
let carouselInstance = null

// Emit eventos
const emit = defineEmits(['slide', 'slid'])

// Función para cargar Bootstrap JS
const loadBootstrapJS = () => {
  return new Promise((resolve) => {
    // Verificar si Bootstrap ya está cargado
    if (typeof window !== 'undefined' && window.bootstrap && window.bootstrap.Carousel) {
      resolve(window.bootstrap)
      return
    }

    // Si no está cargado, agregarlo al head
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
    script.onload = () => {
      resolve(window.bootstrap)
    }
    document.head.appendChild(script)
  })
}

onMounted(async () => {
  // Solo ejecutar en el cliente
  if (process.client) {
    try {
      // Asegurarse de que Bootstrap JS esté cargado
      const bootstrap = await loadBootstrapJS()
      
      const carouselElement = document.getElementById(carouselId.value)
      if (carouselElement && bootstrap) {
        // Crear instancia del carousel con Bootstrap global
        carouselInstance = new bootstrap.Carousel(carouselElement, {
          interval: props.autoPlay ? props.interval : false,
          ride: props.autoPlay ? 'carousel' : false,
          wrap: true,
          keyboard: true,
          pause: 'hover',
          touch: true
        })

        // Agregar clase fade si es necesario
        if (props.fade) {
          carouselElement.classList.add('carousel-fade')
        }

        // Escuchar eventos del carousel
        carouselElement.addEventListener('slide.bs.carousel', (event) => {
          emit('slide', {
            from: event.from,
            to: event.to,
            direction: event.direction
          })
        })

        carouselElement.addEventListener('slid.bs.carousel', (event) => {
          emit('slid', {
            from: event.from,
            to: event.to,
            direction: event.direction
          })
        })
      }
    } catch (error) {
      console.error('Error inicializando el carousel:', error)
    }
  }
})

onUnmounted(() => {
  // Limpiar la instancia del carousel
  if (carouselInstance) {
    carouselInstance.dispose()
  }
})

// Métodos expuestos para control manual
const next = () => {
  if (carouselInstance) {
    carouselInstance.next()
  }
}

const prev = () => {
  if (carouselInstance) {
    carouselInstance.prev()
  }
}

const to = (index) => {
  if (carouselInstance) {
    carouselInstance.to(index)
  }
}

const pause = () => {
  if (carouselInstance) {
    carouselInstance.pause()
  }
}

const cycle = () => {
  if (carouselInstance) {
    carouselInstance.cycle()
  }
}

// Exponer métodos
defineExpose({
  next,
  prev,
  to,
  pause,
  cycle
})
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}

/* Personalización opcional de los controles */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
}

/* Mejora la legibilidad de las captions */
.carousel-caption {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  padding: 20px;
  border-radius: 10px;
}

.carousel-caption h5 {
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.carousel-caption p {
  font-size: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Transición suave para el efecto fade */
.carousel-fade .carousel-item {
  transition: opacity 0.6s ease-in-out;
}

/* Responsividad */
@media (max-width: 768px) {
  .carousel-caption {
    padding: 10px;
  }
  
  .carousel-caption h5 {
    font-size: 1.2rem;
  }
  
  .carousel-caption p {
    font-size: 0.9rem;
  }
}
</style>