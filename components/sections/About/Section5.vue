<template>
    <section class="bg--04 bg--fixed py-100 ct-01 content-section division">
        <div class="container">

            <!-- <div class="content-block mb-5" id="cabanias_1">
                <div class="row d-flex align-items-center min-vh-50">
                    <div class="col-12 order-md-1">
                        <div class="img-block wow fadeInLeft h-100 d-flex align-items-center justify-content-center">
                            <div class="w-100">
                                <ElementsImageCarousel :images="dos_personas_vertical" class="rounded shadow-lg" object-fit="contain" />
                            </div>
                        </div>
                    </div>
                    </div>
            </div> -->

            <div class="content-block mb-5" id="cabanias">
                <div class="row d-flex align-items-center min-vh-50">
                    <div class="col-12 order-md-1">
                        <div class="img-block wow fadeInLeft h-100 d-flex align-items-center justify-content-center">
                            <div class="w-100">
                                <ElementsImageCarousel :images="dos_personas" class="rounded shadow-lg" object-fit="contain" />
                            </div>
                        </div>
                    </div>
                    </div>
            </div>

            

            <div class="row">
                <div class="col-12">
                    <hr class="divider-elegant my-1">
                </div>
            </div>

            <div class="content-block">
                <div class="row d-flex align-items-center min-vh-50">
                    <div class="col-md-6 order-md-2">
                        <div class="img-block wow fadeInLeft h-100 d-flex align-items-center">
                            <div class="w-100">
                                <a href="https://www.google.com/local/place/fid/0x95d2e401e05e1475:0xf06e36c61088462d/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/AC9h4npqVfry4kzL3xpKfmY80Nu9DdaEQ564c3RP8lnDYrY26UFOTBFd_3ONxr7KZlwlJhVOxfnRQzD4H59grkko3mdsTR5As7iI2T_lbC6LdIvhOnZ_82anwjF9Prx1FTm5jFeVSGYm%3Dw160-h106-k-no-pi-10-ya3.7866724-ro-0-fo100&ik=CAoSF0NJSE0wb2dLRUlDQWdJREVnUDdteHdF"
                                   target="_blank"
                                   class="image-360-link">
                                    <div class="image-360-container">
                                        <img src="/cabanias/interior/dp/horizontal/dp1.jpg" 
                                             alt="Interior cabaña - Vista 360°" 
                                             class="img-fluid rounded shadow-lg">
                                        <div class="overlay-360">
                                            <div class="icon-360">
                                                <i class="fas fa-360-degrees"></i>
                                                <span>360°</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="txt-block right-column wow fadeInRight h-100 d-flex align-items-center">
                            <div>
                                <p class="p-lg">&quot;Explora cada detalle de nuestros espacios interiores. Un ambiente cálido y acogedor te espera, diseñado pensando en tu comodidad y bienestar durante tu estadía en las sierras.&quot;</p>
                                <div class="mt-3">
                                    <small class="text-muted">
                                        <i class="fas fa-mouse-pointer me-2"></i>
                                        Haz clic en la imagen para ver en 360°
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    </section>
</template>

<script setup lang="ts">
// Array de imágenes exteriores
const dos_personas = [
    { src: '/cabanias/interior/dp/horizontal/dp1.jpg', alt: 'Cabaña interior dp1' },
    { src: '/cabanias/interior/dp/horizontal/dp4.jpg', alt: 'Cabaña interior dp4' },
    { src: '/cabanias/interior/dp/horizontal/dp5.jpg', alt: 'Cabaña interior dp5' },
    { src: '/cabanias/interior/dp/horizontal/dp10.jpg', alt: 'Cabaña interior dp10' },
    { src: '/cabanias/interior/dp/horizontal/dp16.jpg', alt: 'Cabaña interior dp16' },
    { src: '/cabanias/interior/dp/horizontal/dp18.jpg', alt: 'Cabaña interior dp18' },
    { src: '/cabanias/interior/dp/horizontal/DSCN8733.webp', alt: 'Cabaña interior DSCN8733' },
    { src: '/cabanias/interior/dp/horizontal/unnamed(9).webp', alt: 'Cabaña interior unnamed 9' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0024.jpg', alt: 'Cabaña interior dp1' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0023.jpg', alt: 'Cabaña interior dp4' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0022.jpg', alt: 'Cabaña interior dp5' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0021.jpg', alt: 'Cabaña interior dp10' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0020.jpg', alt: 'Cabaña interior dp16' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0019.jpg', alt: 'Cabaña interior dp18' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0018.jpg', alt: 'Cabaña interior dp18' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0017.jpg', alt: 'Cabaña interior dp18' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0016.jpg', alt: 'Cabaña interior dp18' },
];

const dos_personas_vertical = [
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0024.jpg', alt: 'Cabaña interior dp1' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0023.jpg', alt: 'Cabaña interior dp4' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0022.jpg', alt: 'Cabaña interior dp5' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0021.jpg', alt: 'Cabaña interior dp10' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0020.jpg', alt: 'Cabaña interior dp16' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0019.jpg', alt: 'Cabaña interior dp18' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0018.jpg', alt: 'Cabaña interior dp18' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0017.jpg', alt: 'Cabaña interior dp18' },
    { src: '/cabanias/interior/dp/vertical/IMG-20250914-WA0016.jpg', alt: 'Cabaña interior dp18' },
];
</script>

<style scoped>
/* Estilos para mejorar la alineación y elegancia */
.content-block {
    position: relative;
}

.min-vh-50 {
    min-height: 50vh;
}

.divider-elegant {
    border: none;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ddd, transparent);
    margin: 3rem 0;
}

.txt-block {
    padding: 2rem;
}

.img-block {
    position: relative;
}

/* Estilos para las imágenes 360° */
.image-360-container {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    transition: transform 0.3s ease;
}

.image-360-container:hover {
    transform: scale(1.02);
}

.overlay-360 {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 5px;
}

.icon-360 {
    display: flex;
    align-items: center;
    gap: 5px;
}

.image-360-link {
    text-decoration: none;
    display: block;
}

.image-360-link:hover .overlay-360 {
    background: rgba(0, 0, 0, 0.9);
}

/* Mejoras responsivas */
@media (max-width: 768px) {
    .txt-block {
        padding: 1rem;
        margin-bottom: 2rem;
    }
    
    .min-vh-50 {
        min-height: auto;
    }
    
    .content-block {
        margin-bottom: 3rem !important;
    }

    /* Regla para los divs dentro de row en móviles */
    .row > [class*="col-"] {
        order: unset !important; /* Resetea el orden para que sigan el flujo del documento */
    }
}

/* Animaciones suaves */
.wow {
    animation-duration: 1s;
    animation-fill-mode: both;
}

/* Sombras elegantes */
.shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}
</style>