<template>
  <div>
    <!-- MENU -->
    <NavBar />

    <!-- ÁREA DE FILTROS PRINCIPAL -->
    <HomeFilterArea />

    <!-- ÁREA DE FILTROS RÁPIDOS -->
    <HotSearch />

    <!-- CTA -->
    <HomeCTA />

    <!-- ÁREA DE AJUDA RÁPIDA -->
    <HomeQuickHelp />

    <!-- ÁREA DE DEPOIMENTOS -->
    <HomeTestimonials />

    <!-- ÁREA DO RODAPÉ -->
    <MainFooter />

  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HomeFilterArea from "@/components/HomeFilterArea.vue";
import HotSearch from "@/components/HotSearch.vue";
import HomeCTA from "@/components/HomeCTA.vue";
import HomeQuickHelp from "@/components/HomeQuickHelp.vue";
import HomeTestimonials from "@/components/HomeTestimonials.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  components: {
    NavBar,
    HomeFilterArea,
    HotSearch,
    HomeCTA,
    HomeQuickHelp,
    HomeTestimonials,
    MainFooter
  }
}
</script>

<style scoped>
@media (max-width: 80rem) {
}

@media (max-width: 32rem) {
}
</style>
