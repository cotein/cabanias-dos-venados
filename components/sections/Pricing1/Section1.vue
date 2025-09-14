<template>
    <section id="pricing-1" class="gr--whitesmoke pb-40 inner-page-hero pricing-section">
        <div class="container">
            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-10">
                    <div class="section-title mb-70">
                        <!-- Title -->
                        <h4 class="s-52 w-500">Nuestras cabañas</h4>
                    </div>
                </div>
            </div>
            <!-- END SECTION TITLE -->
            <!-- PRICING TABLES -->
            <div class="pricing-1-wrapper">
                <div class="row ">
                    <!-- STARTER PLAN -->
                    <div class="col">
                        <div id="pt-1-1" class="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                            <!-- TABLE HEADER -->
                            <div class="pricing-table-header">
                                <!-- Title -->
                                <h5 class="s-24 w-600">4 Personas</h5>
                                <SectionsAboutSection4 />
                                
                            </div>
                            <!-- END TABLE HEADER -->
                            <!-- PRICING FEATURES -->
                            
                        </div>
                    </div>
                   
                </div>
            </div>
            <!-- PRICING TABLES -->
        </div>
        <!-- End container -->
        <div class="container">
            <!-- SECTION TITLE -->
            
            <!-- END SECTION TITLE -->
            <!-- PRICING TABLES -->
            <div class="pricing-1-wrapper">
                <div class="row ">
                    <!-- STARTER PLAN -->
                    <div class="col">
                        <div id="pt-1-1" class="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                            <!-- TABLE HEADER -->
                            <div class="pricing-table-header">
                                <!-- Title -->
                                <h5 class="s-24 w-600">2 Personas</h5>
                                <SectionsAboutSection5 />
                                
                            </div>
                            <!-- END TABLE HEADER -->
                            <!-- PRICING FEATURES -->
                            
                        </div>
                    </div>
                   
                </div>
            </div>
            <!-- PRICING TABLES -->
        </div>
        <!-- End container -->
    </section>
</template>

<script>
export default {
    data() {
        return {
            showPrice1: false,
            showPrice2: true
        };
    },
    methods: {
        togglePrices() {
            this.showPrice1 = !this.showPrice1;
            this.showPrice2 = !this.showPrice2;
        }
    }
};
</script>
