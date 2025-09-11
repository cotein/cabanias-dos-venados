<template>
    <section class="bg--04 bg--fixed py-100 ct-01 content-section division">
        <div class="container">
            <div class="content-block mb-5">
                <div class="row d-flex align-items-center min-vh-50">
                    <div class="col-md-6 order-md-1">
                        <div class="txt-block left-column wow fadeInRight h-100 d-flex align-items-center">
                            <div>
                                <p class="p-lg">&quot;Descubre un refugio de serenidad y confort, donde el verde de nuestro parque se encuentra con el imponente paisaje de las sierras. Tus días de descanso junto a la piscina de aguas cristalinas, un oasis perfecto para renovar energías bajo el sol y disfrutar de momentos inolvidables. Nuestras cabañas te esperan para brindarte una experiencia única de desconexión y tranquilidad en un entorno natural privilegiado.&quot;</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 order-md-2">
                        <div class="img-block j-img video-preview right-column wow fadeInLeft h-100 d-flex align-items-center">
                            <video src="/videos/cbs1.mp4" width="100%" height="auto" autoplay loop controls
                                poster="/videos/cbs1.png" class="rounded shadow-lg"></video>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <hr class="divider-elegant my-1">
                </div>
            </div>

            <div class="content-block mb-5" id="cabanias">
                <div class="row d-flex align-items-center min-vh-50">
                    <div class="col-md-6 order-md-1">
                        <div class="img-block wow fadeInLeft h-100 d-flex align-items-center">
                            <div class="w-100">
                                <ElementsImageCarousel :images="imagesExterior" class="rounded shadow-lg" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 order-md-2">
                        <div class="txt-block right-column wow fadeInRight h-100 d-flex align-items-center">
                            <div>
                                <p class="p-lg">&quot;Sumérgete en el abrazo acogedor de la naturaleza. Descubre nuestras cabañas, donde la calidez y la serenidad de las sierras te esperan.&quot;</p>
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

            <div class="content-block mb-5">
                <div class="row d-flex align-items-center min-vh-50">
                    <div class="col-md-6 order-md-1">
                        <div class="txt-block left-column wow fadeInRight h-100 d-flex align-items-center">
                            <div>
                                <p class="p-lg">&quot;Embárcate en un recorrido virtual y siente la magia de nuestras cabañas. Haz clic y explora en 360° cada rincón de este espacio diseñado para cuatro personas, donde la comodidad se une con el encanto de la naturaleza.&quot;</p>
                                <div class="mt-3">
                                    <small class="text-muted">
                                        <i class="fas fa-mouse-pointer me-2"></i>
                                        Haz clic en la imagen para ver en 360°
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 order-md-2">
                        <div class="img-block wow fadeInLeft h-100 d-flex align-items-center">
                            <div class="w-100">
                                <a href="https://www.google.com/local/place/fid/0x95d2e401e05e1475:0xf06e36c61088462d/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/AC9h4npLVBrwHzVxqtwW1xTO_WsarL3KF47nHTo91t7Ov-KT4YIsvYo6v4QCX0AKc8L_aiwVCHWqdFKf7ZWKm0rAnFIQlVtkj4ShpECdsUBbA05xAFVbFN2eo1k88dUuVglEfYTXjtg%3Dw160-h106-k-no-pi-10-ya311.94666-ro-0-fo100&ik=CAoSFkNJSE0wb2dLRUlDQWdJREVnSUhnUVE%3D"
                                   target="_blank"
                                   class="image-360-link">
                                    <div class="image-360-container">
                                        <img src="/cabanias/interior/DSCN8698.JPG" 
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
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <hr class="divider-elegant my-1">
                </div>
            </div>

            <div class="content-block">
                <div class="row d-flex align-items-center min-vh-50">
                    <div class="col-md-6 order-md-1">
                        <div class="img-block wow fadeInLeft h-100 d-flex align-items-center">
                            <div class="w-100">
                                <a href="https://www.google.com/local/place/fid/0x95d2e401e05e1475:0xf06e36c61088462d/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/AC9h4npqVfry4kzL3xpKfmY80Nu9DdaEQ564c3RP8lnDYrY26UFOTBFd_3ONxr7KZlwlJhVOxfnRQzD4H59grkko3mdsTR5As7iI2T_lbC6LdIvhOnZ_82anwjF9Prx1FTm5jFeVSGYm%3Dw160-h106-k-no-pi-10-ya3.7866724-ro-0-fo100&ik=CAoSF0NJSE0wb2dLRUlDQWdJREVnUDdteHdF"
                                   target="_blank"
                                   class="image-360-link">
                                    <div class="image-360-container">
                                        <img src="/cabanias/interior/DSCN8684.webp" 
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
                    <div class="col-md-6 order-md-2">
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
const imagesExterior = [    
    { src: '/cabanias/exterior/unnamed(1).webp', alt: 'Exterior 3' },
    { src: '/cabanias/exterior/dosvenadosmerlo.webp', alt: 'Exterior Cabaña Dos Venados Merlo' },
    { src: '/cabanias/exterior/unnamed.webp', alt: 'Exterior 2' },
    { src: '/cabanias/exterior/unnamed(2).webp', alt: 'Exterior 4' },
    { src: '/cabanias/exterior/unnamed(3).webp', alt: 'Exterior 5' },
    { src: '/cabanias/exterior/unnamed(4).webp', alt: 'Exterior 6' },
    { src: '/cabanias/exterior/unnamed(5).webp', alt: 'Exterior 7' },
    { src: '/cabanias/exterior/unnamed(6).webp', alt: 'Exterior 8' },
    { src: '/cabanias/exterior/unnamed(10).webp', alt: 'Exterior 9' },
    { src: '/cabanias/exterior/unnamed(11).webp', alt: 'Exterior 10' },
    { src: '/cabanias/exterior/unnamed(12).webp', alt: 'Exterior 11' },
    { src: '/cabanias/exterior/unnamed(13).webp', alt: 'Exterior 12' },
    { src: '/cabanias/exterior/unnamed(14).webp', alt: 'Exterior 13' },
    { src: '/cabanias/exterior/unnamed(16).webp', alt: 'Exterior 14' },
    { src: '/cabanias/exterior/unnamed(17).webp', alt: 'Exterior 15' },
    { src: '/cabanias/exterior/unnamed(18).webp', alt: 'Exterior 16' },
    { src: '/cabanias/exterior/unnamed(19).webp', alt: 'Exterior 17' },
    { src: '/cabanias/exterior/unnamed(20).webp', alt: 'Exterior 18' },
    { src: '/cabanias/exterior/unnamed(21).webp', alt: 'Exterior 19' },
    { src: '/cabanias/exterior/unnamed(23).webp', alt: 'Exterior 20' },
    { src: '/cabanias/exterior/unnamed(24).webp', alt: 'Exterior 21' },
    { src: '/cabanias/exterior/unnamed(25).webp', alt: 'Exterior 22' },
    { src: '/cabanias/exterior/unnamed(26).webp', alt: 'Exterior 23' },
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