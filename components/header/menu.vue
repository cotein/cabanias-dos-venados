<template>
    <div id="main-menu" class="wsmainfull menu clearfix">
        <div class="wsmainwp clearfix">
            <!-- HEADER BLACK LOGO -->
            <div class="desktoplogo">
                <NuxtLink to="/" class="logo-black"><img src="/assets/images/logo.png" alt="logo" /></NuxtLink>
            </div>
            <!-- HEADER WHITE LOGO -->
            <div class="desktoplogo">
                <NuxtLink to="/" class="logo-white"><img src="/assets/images/logo.png" alt="logo" /></NuxtLink>
            </div>
            <!-- MAIN MENU -->
            <nav class="wsmenu clearfix">
                <ul class="wsmenu-list nav-theme">
                    <!-- DROPDOWN SUB MENU -->
                    <li aria-haspopup="true" class="mg_link" >
                        <!-- <NuxtLink to="#" class="h-link">Home </NuxtLink> -->
                       <a @click.prevent="scrollToSection('home')" href="#nuestro-lugar" class="h-link">Inicio</a>
                    </li>
                    <li aria-haspopup="true" class="mg_link" >
                        <!-- <NuxtLink to="#"  class="h-link">Nuestro lugar </NuxtLink> -->
                        <a @click.prevent="scrollToSection('nuestro-lugar')" href="#nuestro-lugar" class="h-link">Nuestro lugar</a>
                    </li>
                    <li aria-haspopup="true" class="mg_link" >
                        <!-- <NuxtLink to="#"  class="h-link">Nuestro lugar </NuxtLink> -->
                        <a @click.prevent="scrollToSection('cabanias')" href="#nuestro-lugar" class="h-link">Cabañas</a>
                    </li>
                    <li aria-haspopup="true" class="mg_link" >
                        <!-- <NuxtLink to="#"  class="h-link">Nuestro lugar </NuxtLink> -->
                        <a @click.prevent="scrollToSection('mapa')" href="#nuestro-lugar" class="h-link">Ubicación</a>
                    </li>
                </ul>
            </nav>
            <!-- END MAIN MENU -->
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue';
export default {
    setup() {
        const state = reactive({
        isOpen: [false, false]
        });
        const toggle = (index) => {
        state.isOpen[index] = !state.isOpen[index];
        };
        return {
        toggle,
        isOpen: state.isOpen
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const menu = document.getElementById("main-menu");
            const header = document.getElementById("header");
            if (window.pageYOffset > 100) {
                menu.classList.add("scroll");
                header.classList.add("scroll");
            } else {
                menu.classList.remove("scroll");
                header.classList.remove("scroll");
            }
        },

        scrollToSection(id) {
            const targetElement = document.getElementById(id);

            if (targetElement) {
                const startPosition = window.pageYOffset; // Posición actual del scroll
                const targetPosition = targetElement.getBoundingClientRect().top + startPosition; // Posición final
                const distance = targetPosition - startPosition;
                const duration = 1200; // Duración de la animación en milisegundos (1.2 segundos)
                let startTime = null;

                function animateScroll(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    
                    // Usar una función de easing para una animación más natural
                    const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);

                    window.scrollTo(0, startPosition + distance * easeProgress);

                    if (timeElapsed < duration) {
                        requestAnimationFrame(animateScroll);
                    }
                }
                requestAnimationFrame(animateScroll);
            }
        }
        /* scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } */
    }
};
</script>
