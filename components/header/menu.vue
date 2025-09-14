<template>
    <div id="main-menu" class="wsmainfull menu clearfix">
        <div class="wsmainwp clearfix">
            <div class="desktoplogo">
                <NuxtLink to="/" class="logo-black"><img src="/assets/images/logo.png" alt="logo" /></NuxtLink>
            </div>
            <div class="desktoplogo">
                <NuxtLink to="/" class="logo-white"><img src="/assets/images/logo.png" alt="logo" /></NuxtLink>
            </div>
            <nav class="wsmenu clearfix">
                <ul class="wsmenu-list nav-theme">
                    <template v-if="route.path === '/'">
                        <li aria-haspopup="true" class="mg_link">
                            <a 
                                href="#home" 
                                class="h-link menu-item"
                                :class="{ 'active': activeSection === 'home' }"
                            >
                                Inicio
                            </a>
                        </li>
                        <li aria-haspopup="true" class="mg_link">
                            <a 
                                href="#nuestro-lugar" 
                                class="h-link menu-item"
                                :class="{ 'active': activeSection === 'nuestro-lugar' }"
                            >
                                Nuestro lugar
                            </a>
                        </li>
                        <li aria-haspopup="true" class="mg_link">
                            <nuxt-link 
                                to="/imagenes" 
                                class="h-link menu-item"
                                :class="{ 'active': route.path === '/imagenes' }"
                            >
                                Imágenes
                        </nuxt-link>
                        </li>
                        <li aria-haspopup="true" class="mg_link">
                            <a 
                                href="#mapa" 
                                class="h-link menu-item"
                                :class="{ 'active': activeSection === 'mapa' }"
                            >
                                Ubicación
                            </a>
                        </li>
                    </template>
                    
                    <li v-else aria-haspopup="true" class="mg_link">
                        <nuxt-link to="/" class="h-link menu-item">Inicio</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { useRoute } from 'vue-router'; // Usa `vue-router` para `useRoute`

const route = useRoute();
const activeSection = ref('home');

const handleScroll = () => {
    const menu = document.getElementById("main-menu");
    const header = document.getElementById("header");
    
    // Cambiar la clase del menú al hacer scroll
    if (window.pageYOffset > 100) {
        menu?.classList.add("scroll");
        header?.classList.add("scroll");
    } else {
        menu?.classList.remove("scroll");
        header?.classList.remove("scroll");
    }

    // Detectar la sección activa solo si estamos en la página de inicio
    if (route.path === '/') {
        detectActiveSection();
    }
};

const detectActiveSection = () => {
    const sections = ['home', 'nuestro-lugar', 'cabanias', 'mapa'];
    const scrollPosition = window.scrollY + 150;

    for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetBottom = offsetTop + element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                activeSection.value = sectionId;
                break;
            }
        }
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Detectar sección inicial al cargar si estamos en la página de inicio
    if (route.path === '/') {
        nextTick(() => {
            detectActiveSection();
        });
    }
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Mejoras para móviles */
.menu-item {
    position: relative;
    transition: all 0.3s ease;
    -webkit-tap-highlight-color: transparent; /* Quitar highlight en iOS */
    touch-action: manipulation; /* Mejorar respuesta táctil */
}

/* Área táctil más grande en móviles */
@media (max-width: 768px) {
    .menu-item {
        padding: 15px 10px;
        display: block;
        min-height: 44px; /* Mínimo recomendado por Apple */
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

/* Estado activo */
.menu-item.active {
    color: #007bff; /* Cambia por tu color primario */
    font-weight: bold;
}

/* Suavizar transiciones */
html {
    scroll-behavior: smooth;
}

/* Para navegadores que soportan scroll-padding */
html {
    scroll-padding-top: 80px; /* Altura de tu header. Ajusta este valor. */
}
</style>