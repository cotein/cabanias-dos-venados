<template>
    <div class="hero-wrapper" id="home">
        <div class="hero-image-bg">
            <img class="img-fluid" src="/assets/images/bg_header.jpg" alt="Vista de las sierras de Merlo" />
        </div>

        <div class="hero-text-overlay">
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-9">
                        <h1 class="titulo-principal">
                            Respira Merlo.
                            <span class="subtitulo">Renová tu energía en las sierras.</span>
                        </h1>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Contenedor principal que posiciona todo */
.hero-wrapper {
  position: relative; /* Esencial para que el posicionamiento absoluto del texto funcione */
  width: 100%;
  overflow: hidden; /* Evita que la imagen se desborde si es más grande */
}

/* Capa de la imagen de fondo */
.hero-image-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Hace que la imagen cubra todo el contenedor sin deformarse. ¡Muy importante! */
  object-position: 50% 80%; /* Centra la imagen */
}

/* Capa de texto superpuesta */
.hero-text-overlay {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* El truco para centrar perfectamente */
  color: white; /* Color del texto, asegúrate de que sea legible */
}

/* Estilos para el título principal */
.titulo-principal {
  font-size: 6rem; /* Ajusta el tamaño de la fuente principal */
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0); /* Sombra para que el texto resalte sobre la imagen */
  line-height: 1.2;
  color: #ffffff;
  margin-top: -31%;
}

/* Estilos para la segunda línea (subtítulo) */
.titulo-principal .subtitulo {
  display: block; /* Fuerza el salto de línea */
  font-size: 2rem; /* Tamaño de fuente más pequeño para la segunda línea */
  font-weight: 400; /* Fuente más ligera para crear jerarquía */
}

/* Media Query para celulares: ajusta el tamaño de la fuente en pantallas pequeñas */
@media (max-width: 768px) {
  .hero-wrapper {
    height: 60vh; /* Un poco menos de altura en móviles */
  }
  .titulo-principal {
    font-size: 2.5rem;
  }
  .titulo-principal .subtitulo {
    font-size: 1.3rem;
    font-weight: 800;
  }
}
</style>