<template>
  <div>
    <div class="home-cta-area">
      <h2>Campo Livre:<br />bom para todo mundo!</h2>
      <iframe src="https://www.youtube.com/embed/Li4Qm3QEdl0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <router-link to="#">Produtor rural, cadastre-se grátis!</router-link>
    </div>  
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
@media (min-width: 80.5rem) {
  /* CTA: Flex Container */
  .home-cta-area {
    display: flex;
    flex-direction: column;
    width: calc(100% - 85px);
    min-height: calc(70% - 90px);
    justify-content: center;
    padding: 0px 40px 25px 45px;
    align-items: center;
  }

  /* CTA: Flex Items */
  .home-cta-area > iframe {
    min-width: 1030px;
    min-height: 579px;
    padding: 20px 40px;
  }

  .home-cta-area > a {
    color: #00A51C;
    font-size: 1.3rem;
    text-decoration: underline;
  }

  .home-cta-area > a:hover {
    color: #FCAB10;
  }
}

@media (max-width: 80rem) {
  /* CTA: Flex Container */
  .home-cta-area {
    display: flex;
    flex-direction: column;
    width: calc(100% - 20px);
    padding: 15px 10px 25px 10px;
    justify-content: center;
    align-items: center;
  }

  /* CTA: Flex Items */
  .home-cta-area > iframe {
    min-width: 700px;
    min-height: 312px;
    padding: 20px 0px;
  }

  .home-cta-area > a {
    color: #00A51C;
    font-size: 1.3rem;
    text-decoration: underline;
  }

  .home-cta-area > a:hover {
    color: #FCAB10;
  }
}

@media (max-width: 32rem) {
  /* CTA: Flex Container */
  .home-cta-area {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px 0px 25px 0px;
    justify-content: center;
    align-items: center;
  }

  /* CTA: Flex Items */
  .home-cta-area > iframe {
    min-width: 323px !important;
    max-width: 323px !important;
    min-height: 140px !important;
    max-height: 140px !important;
    padding: 20px 0px;
  }

  .home-cta-area > a {
    color: #00A51C;
    font-size: 1.5rem;
    text-decoration: underline;
  }

  .home-cta-area > a:hover {
    color: #FCAB10;
  }
}
</style>
