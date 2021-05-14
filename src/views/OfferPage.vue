<template>
  <div>
    <!-- MENU -->
    <NavBar />

    <div class="offer-gallery-area">
      <!-- ÁREA DE GALERIA DE FOTOS -->
      <div v-if="photoGallery" class="offer-gallery-area-photos">
        <img src="@/assets/campolivre-galeria-foto01.jpg" />
        <img src="@/assets/campolivre-galeria-foto02.jpg" />
        <img src="@/assets/campolivre-galeria-foto03.jpg" />
      </div>

      <!-- ÁREA DE VIDEO -->
      <div v-if="videoGallery">
        <div class="offer-gallery-area-video">
          <iframe src="https://www.youtube.com/embed/Li4Qm3QEdl0?rel=0" title="Apresentação do Campo Livre" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

      <!-- ÁREA DE MAPA -->
      <div v-if="mapGallery">
        <div class="offer-gallery-area-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29404.620921447073!2d-47.085413731897795!3d-22.892056526055768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c61de74b6325%3A0x17e53a6a2178c22a!2sCampinas%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1620311906930!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>

    <!-- ÁREA PRINCIPAL DA OFERTA -->
    <div class="offer-page-main">
      <div class="offer-page-main-description">
        <!-- ÁREA DO BREADCRUMB -->
        <span class="offer-page-main-breadcrumbs"><router-link to="#">Início</router-link> <span class="offer-page-main-breadcrumbs-separator">></span> <router-link to="#">Rio Claro / SP</router-link> <span class="offer-page-main-breadcrumbs-separator">></span> <router-link to="#">Legumes</router-link> <span class="offer-page-main-breadcrumbs-separator">></span> <router-link to="#">Oferta #12475187</router-link></span>

        <!-- ÁREA DOS BOTÕES DE CONTROLE DAS GALERIAS -->
        <div class="offer-page-main-buttons">
          <button @click="togglePhotoGallery()" v-bind:class="{ 'btn-color-green': photoGallery, 'btn-color-white': !photoGallery }" class="btn-main-default"><i class="fas fa-images"></i> Fotos</button>
          <button @click="toggleVideoGallery()" v-bind:class="{ 'btn-color-green': videoGallery, 'btn-color-white': !videoGallery }" class="btn-main-default"><i class="fas fa-video"></i> Video</button>
          <button @click="toggleMapGallery()" v-bind:class="{ 'btn-color-green': mapGallery, 'btn-color-white': !mapGallery }" class="btn-main-default"><i class="fas fa-map-marked-alt"></i> Mapa</button>
        </div>

        <!-- ÁREA DO TÍTULO + ENDEREÇO -->
        <div class="offer-page-main-title">
          <h1>Pimentão Verde</h1>
          <p>Endereço do produtor rural, 000, Cidade / UF<br />CEP 00000-000</p>
          <p><i class="fas fa-clock"></i> Coletado há 2 dias <i class="fas fa-box"></i> 80 caixas em estoque</p>
        </div>

        <!-- ÁREA DAS TAGS -->
        <div class="offer-page-main-tags">
          <div class="offer-page-main-tags-content">
            <i class="fas fa-truck"></i>
            <p>Transporte Próprio</p>
          </div>
          <div class="offer-page-main-tags-content">
            <i class="fas fa-shipping-fast"></i>
            <p>Entrega Imediata</p>
          </div>
          <div class="offer-page-main-tags-content">
            <i class="fas fa-leaf"></i>
            <p>Produto Orgânico</p>
          </div>
          <div class="offer-page-main-tags-content">
            <i class="fas fa-users"></i>
            <p>Agricultura Familiar</p>
          </div>
          <div class="offer-page-main-tags-content">
            <i class="fas fa-recycle"></i>
            <p>Fazenda Sustentável</p>
          </div>
        </div>

        <!-- ÁREA DA AVALIAÇÃO -->
        <div class="offer-page-main-ratings">
          <h2>Avaliação do Produtor</h2>
          <div>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <p>de 12 avaliações</p>
          </div>
        </div>

        <!-- ÁREA DA DESCRIÇÃO DO PRODUTO -->
        <div class="offer-page-main-product">
          <h2>Descrição do Produto</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet dictum risus. Sed et nisl risus. Maecenas tincidunt tempus gravida. Fusce nec dictum augue. Donec fringilla scelerisque erat, non pellentesque ligula suscipit tristique. Praesent venenatis, lectus at volutpat vulputate, lacus quam sodales nulla, et pellentesque metus diam elementum risus. Maecenas venenatis eros at nulla molestie posuere. Duis mollis nisi mi.</p>

          <p>Fusce sed tortor eu arcu lobortis tincidunt vitae et lorem. Ut et lacinia dui, sit amet bibendum mi. Fusce finibus turpis non turpis pharetra maximus. Etiam at sagittis dui. Donec non nibh tempus, sodales eros id, aliquet ligula. Fusce ultricies vulputate rhoncus. Phasellus ipsum tellus, eleifend eu varius at, tristique nec orci. Duis magna orci, ullamcorper sed est et, mattis pellentesque ante. Mauris ornare nisl nec felis rhoncus, vitae suscipit enim porttitor. Mauris hendrerit sit amet lorem et feugiat. Suspendisse consectetur dolor in nisi blandit tincidunt.</p>
        </div>

        <!-- ÁREA DA DESCRIÇÃO DO PRODUTOR -->
        <div class="offer-page-main-producer">
          <h2>Descrição do Produtor Rural</h2>

          <p>In hac habitasse platea dictumst. Mauris vestibulum interdum risus sit amet congue. Pellentesque augue augue, varius at nisi pharetra, interdum consectetur diam. Morbi ultricies nunc ut nisl accumsan, nec efficitur mauris ultrices. Sed sit amet gravida nisi. Aenean venenatis, magna vitae posuere consectetur, lectus elit lobortis nibh, ut bibendum augue enim in orci. Phasellus nec mattis justo.</p>

          <p>Proin urna sapien, facilisis quis nisi quis, porta lacinia metus. Integer finibus, nibh sit amet sagittis molestie, ligula nunc eleifend justo, vitae iaculis orci orci quis enim. Fusce eu sapien felis. Mauris finibus mi eget quam rhoncus pellentesque. Etiam sed nunc urna. Etiam pellentesque dapibus velit nec eleifend. Nam dapibus ornare malesuada. Nulla facilisi. Nam ut risus eu massa condimentum imperdiet eget eu purus.</p>
        </div>
      </div>

      <!-- ÁREA DA CALCULADORA -->
      <div class="offer-page-main-calculator-area">
        <div>
          <p>Preço da Caixa</p><p class="paragraph-bold">R$ 80,00</p>
        </div>
        <div>
          <p>Quantidade</p><div><button class="btn-control-cart">-</button><p class="paragraph-bold">1</p><button class="btn-control-cart">+</button></div>
        </div>
        <div>
          <p>Frete</p><p class="paragraph-bold">grátis</p>
        </div>
        <div>
          <p>Taxa de Serviço</p><p class="paragraph-bold">R$ 4,00</p>
        </div>
        <div>
          <p class="paragraph-bold">TOTAL</p><p class="paragraph-bold">R$ 84,00</p>
        </div>
        <div>
          <button class="btn-main-default btn-color-green">Adicionar ao Carrinho</button>
        </div>
        <div></div>
        <div>
          <p class="offer-page-main-calculator-availability">Disponibilidade imediata</p>
        </div>
        <div>
          <p>Esta oferta está disponível para entrega imediata. Efetue a compra para garantir o produto.</p>
        </div>
        <div>
          <router-link to="/buscaOferta"><button class="btn-main-default btn-color-white">Ver ofertas similares</button></router-link><button @click="toggleLoveIt()" class="btn-love-it"><i v-bind:class=" { 'far fa-heart': !showLoveIt, 'fas fa-heart': showLoveIt, 'btn-love-it-red': showLoveIt }"></i></button>
        </div>
      </div>
    </div>

    <!-- ÁREA DE PRODUTOS SIMILARES -->
    <div class="offer-page-similar-offers">
      <h3>Ofertas similares</h3>
      <div>
        <CardOffer v-for="offer in offers" :key="offer.id" :offer="offer" />
      </div>
    </div>

    <!-- ÁREA DO RODAPÉ -->
    <MainFooter />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MainFooter from "@/components/MainFooter.vue";
import CardOffer from "@/components/CardOffer.vue";

export default {
  components: {
    NavBar,
    MainFooter,
    CardOffer
  },
  data() {
    return {
      photoGallery: true,
      videoGallery: false,
      mapGallery: false,
      showLoveIt: false,
      offers: [
        {
          id: 1,
          image: 'card-offer-tomato.png',
          imageAlt: 'Imagem de tomates vermelhos na árvore de tomateiro de uma fazenda, prontas para serem colhidas.', 
          category: 'LEGUMES',
          title: 'Tomate Caqui',
          city: 'Rio Claro',
          state: 'SP',
          quantity: '80',
          transportation: 'Próprio',
          price: '80,00',
          unity: 'Caixa'
        },
        {
          id: 3,
          image: 'card-offer-carrot.png',
          imageAlt: 'Imagem de um maço de cenouras na mão do agricultor.', 
          category: 'LEGUMES',
          title: 'Cenoura',
          city: 'Americana',
          state: 'SP',
          quantity: '120',
          transportation: 'Sem transporte',
          price: '55,00',
          unity: 'Caixa'
        },
        {
          id: 4,
          image: 'card-offer-courgette.png',
          imageAlt: 'Uma composição de abobrinhas dispostas em formato de pirâmide.', 
          category: 'LEGUMES',
          title: 'Abobrinha',
          city: 'Rio Claro',
          state: 'SP',
          quantity: '80',
          transportation: 'Próprio',
          price: '40,00',
          unity: 'Caixa'
        },
        {
          id: 5,
          image: 'card-offer-cabbage.png',
          imageAlt: 'Quatro folhas de couve manteiga dispostas em um prato de madeira sobre uma mesa azul escura.', 
          category: 'VERDURAS',
          title: 'Couve Manteiga',
          city: 'Jacareí',
          state: 'SP',
          quantity: '80',
          transportation: 'Próprio',
          price: '40,00',
          unity: 'Caixa'
        },
        {
          id: 7,
          image: 'card-offer-cayenne-pepper.png',
          imageAlt: 'Uma bacia de pedra cheia de pimentas caienas que transbordou, e algumas delas estão espalhadas sobre uma mesa cinza.', 
          category: 'TEMPEROS',
          title: 'Pimenta Caiena',
          city: 'Atibaia',
          state: 'SP',
          quantity: '160',
          transportation: 'Próprio',
          price: '40,00',
          unity: 'Quilo'
        },
      ]
    }
  },
  methods: {
    toggleLoveIt() {
      this.showLoveIt = !this.showLoveIt
    },
    togglePhotoGallery() {
      this.photoGallery = true, this.videoGallery = false, this.mapGallery = false
    },
    toggleVideoGallery() {
      this.photoGallery = false, this.videoGallery = true, this.mapGallery = false
    },
    toggleMapGallery() {
      this.photoGallery = false, this.videoGallery = false, this.mapGallery = true
    }
  }
}
</script>

<style scoped>
/* Área de Galerias: Flex C */
.offer-gallery-area {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 60px;
}

.offer-gallery-area > * {
  width: 100%;
  flex: 1;
}

/* Área de Galeria de Fotos: Flex C&I */
.offer-gallery-area-photos {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-height: 40vh;
  visibility: visible;
}

.offer-gallery-area-photos > * {
  width: 33.3%;
}

/* Área de Video: Flex C&I */
.offer-gallery-area-video {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  height: 40vh;
  max-height: 40vh;
  background-color: #363636;
}

.offer-gallery-area-video > iframe {
  width: 35.2%;
  height: 100%;
}

/* Área de Mapa: Flex C&I */
.offer-gallery-area-map {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100% !important;
  min-width: 100%;
  height: 40vh;
  max-height: 40vh;
  background-color: #363636;
  visibility: visible;
}

.offer-gallery-area-map > iframe {
  width: 100%;
  height: 100%;
}

/* Área Principal da Oferta: Flex C&I */
.offer-page-main {
  display: flex;
  align-items: flex-start;
  width: calc(100% - 20rem);
  padding: 2rem 10rem 5rem;
}

.offer-page-main .offer-page-main-description {
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  width: calc(100% - 4rem);
  padding-right: 2rem;
  justify-content: flex-start;
}

/* Área Principal da Oferta (Breadcrumbs): Flex C&I */
.offer-page-main-breadcrumbs {
  display: flex;
  width: calc(100% - 10px);
  padding: 0;
  font-size: 1.4rem;
  text-align: left;
}

.offer-page-main-breadcrumbs a {
  font-size: 1.4rem;
  text-decoration: none;
  color: #363636;
}

.offer-page-main-breadcrumbs a:hover {
  text-decoration: underline;
  color: #00A51C;
}

.offer-page-main-breadcrumbs-separator {
  padding: 0px 5px;
  font-size: 1.5rem;
}

/* Área Principal da Oferta (Botões de Controle): Flex C&I */
.offer-page-main-buttons {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  padding-top: 1rem;
  text-align: left;
}

.offer-page-main-buttons > * {
  margin-right: 1rem;
}

.offer-page-main-buttons > *:last-child {
  margin-right: 0rem;
}

/* Área Principal da Oferta (Título): Flex C&I */
.offer-page-main-title {
  display: flex;
  max-width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 4rem;
  text-align: left;
}

.offer-page-main-title > *:last-child {
  font-size: 1.3rem;
  color: #707070;
}

.offer-page-main-title > *:last-child > i {
  font-size: 1.3rem;
  padding-top: 1rem;
  padding-right: 0.25rem;
}

.offer-page-main-title > *:last-child > i:last-child {
  padding-left: 1rem;
}

/* Área Principal da Oferta (Tags): Flex C&I */
.offer-page-main-tags {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
}

.offer-page-main-tags-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 3rem 3rem 0rem;
}

.offer-page-main-tags-content > i {
  font-size: 2.25rem;
  color: #00A51C;
}

.offer-page-main-tags-content > p {
  font-size: 1.25rem;
  padding-top: 0.75rem;
}

/* Área Principal da Oferta (Avaliações): Flex C&I */
.offer-page-main-ratings {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.offer-page-main-ratings > div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0rem;
}

.offer-page-main-ratings > div i {
  font-size: 1.3rem;
  padding-right: 0.5rem;
  color: #FFD300;
}

.offer-page-main-ratings div p {
  font-size: 1.3rem;
}

/* Área Principal da Oferta (Descrição do Produto): Flex C&I */
.offer-page-main-product {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  width: 100%;
  padding-top: 3rem;
}

.offer-page-main-product p {
  text-align: left;
  padding-bottom: 1.5rem;
}

.offer-page-main-product p:last-child {
  padding-bottom: 0rem;
}

/* Área Principal da Oferta (Descrição do Produtor): Flex C&I */
.offer-page-main-producer {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  width: 100%;
  padding-top: 3rem;
}

.offer-page-main-producer p {
  text-align: left;
  padding-bottom: 1.5rem;
}

.offer-page-main-producer p:last-child {
  padding-bottom: 0rem;
}

/* Área de Ofertas Similares: Flex C&I */
.offer-page-similar-offers {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 20rem);
  padding: 5rem 10rem 7rem;
  background-color: #FBFBFB;
}

.offer-page-similar-offers > h3 {
  padding-bottom: 1rem;
}

.offer-page-similar-offers > div {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.offer-page-similar-offers > div > * {
  flex-basis: 18%;
}

/* Área da Calculadora */
.offer-page-main .offer-page-main-calculator-area {
  flex-basis: calc(30% - 10rem);
  margin-right: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #FFFFFF;
  box-shadow: 10px 10px 8px #888888;
  -webkit-box-shadow: 0px 1px 6px #969696;
  border-radius: 6px;
  align-items: center;
}

/* Área da Calculadora: Preço da Caixa */
.offer-page-main-calculator-area > div:nth-child(1) {
  display: flex;
  width: calc(100% - 3rem);
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0rem 1.5rem;
}

/* Área da Calculadora: Quantidade */
.offer-page-main-calculator-area > div:nth-child(2) {
  display: flex;
  width: calc(100% - 3rem);
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 0rem 1.5rem;
}

.offer-page-main-calculator-area > div:nth-child(2) > div {
  display: flex;
  align-items: center;
}

.offer-page-main-calculator-area > div:nth-child(2) > div > p {
  padding: 0rem 0.6rem;
}

/* Área da Calculadora: Frete */
.offer-page-main-calculator-area > div:nth-child(3) {
  display: flex;
  width: calc(100% - 3rem);
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0rem 1.5rem;
}

/* Área da Calculadora: Taxa de Serviço */
.offer-page-main-calculator-area > div:nth-child(4) {
  display: flex;
  width: calc(100% - 3rem);
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0rem 1.5rem;
}

/* Área da Calculadora: Total */
.offer-page-main-calculator-area > div:nth-child(5) {
  display: flex;
  width: calc(100% - 3rem);
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0rem 1.5rem;
}

/* Área da Calculadora: Botão Adicionar */
.offer-page-main-calculator-area > div:nth-child(6) {
  display: flex;
  width: calc(100% - 3rem);
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  justify-content: flex-end;
}

/* Área da Calculadora: Divisória */
.offer-page-main-calculator-area > div:nth-child(7) {
  width: 100%;
  border-bottom: 0.5px solid #D2D2D2;
}

/* Área da Calculadora: Disponibilidade */
.offer-page-main-calculator-area > div:nth-child(8) {
  display: flex;
  width: calc(100% - 3rem);
  padding: 1.5rem 1.5rem 0rem 1.5rem;
  justify-content: flex-start;
}

.offer-page-main-calculator-availability {
  font-weight: 600;
  color: #707070;
  background-color: #FBFBFB;
  padding: 1rem;
  border-radius: 0.8rem;
}

/* Área da Calculadora: Texto */
.offer-page-main-calculator-area > div:nth-child(9) {
  display: flex;
  width: calc(100% - 3rem);
  padding: 1.5rem 1.5rem 0rem 1.5rem;
  justify-content: flex-start;
  text-align: left;
}

/* Área da Calculadora: Ofertas Similares + LoveIt */
.offer-page-main-calculator-area > div:nth-child(10) {
  display: flex;
  width: calc(100% - 3rem);
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
}

/* Padrão: Texto */
.paragraph-bold {
  font-weight: 600;
}

/* Padrão: Botões */
.btn-love-it {
  padding-left: 0.7rem;
}

.btn-main-default {
  padding: 10px;
  border-radius: 8px;
  font-size: 1.5rem;
  cursor: pointer;
  justify-content: center;
  font-weight: 600;
  align-items: center;
  outline: none;
}

.btn-main-default i {
  font-size: 1.6rem;
  padding-right: 10px;
}

.btn-color-white {
  background-color: #FFFFFF;
  border: 1px solid #707070;
  color: #363636;
}

.btn-color-white:hover {
  background-color: #F0F0F0;
  border: 1px solid #707070;
  color: #363636;
}

.btn-color-white-active {
  background-color: rgba(0, 165, 28, 0.15);
  border: 1px solid rgba(0, 165, 28, 0.35);
  color: #00A51C;
}

.btn-color-white-active:hover {
  background-color: rgba(0, 165, 28, 0.25);
  border: 1px solid rgba(0, 165, 28, 0.45);
  color: #00A51C;
}

.btn-color-green {
  background-color: #00A51C;
  border: 1px solid #00A51C;
  color: #FFFFFF;
}

.btn-color-green:hover {
  background-color: #FCAB10;
  border: 1px solid #FCAB10;
  color: #FFFFFF;
}

.btn-control-cart {
  padding: 0.2rem 0.6rem;
  font-size: 1.5rem;
  cursor: pointer;
  justify-content: center;
  font-weight: 600;
  align-items: center;
  outline: none;
  background-color: #FFFFFF;
  border: 1px solid #707070;
  color: #363636;
}

.btn-control-cart:hover {
  background-color: #F0F0F0;
  border: 1px solid #707070;
  color: #363636;
}


@media (max-width: 80rem) {
  /* Área Principal da Oferta: Flex C&I */
  .offer-page-main {
    display: flex;
    width: calc(100% - 4rem);
    padding: 2rem 2rem 3rem;
  }

  .offer-page-main .offer-page-main-description {
    flex-basis: 60%;
  }

  .offer-page-main .offer-page-main-calculator-area {
    flex-basis: 40%;
    margin-right: 0rem;
  }

  /* Área de Ofertas Similares: Flex C&I */
  .offer-page-similar-offers {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - 4rem);
    padding: 3rem 2rem;
    background-color: #FBFBFB;
  }

  .offer-page-similar-offers > h3 {
    padding-bottom: 1rem;
  }

  .offer-page-similar-offers > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .offer-page-similar-offers > div > * {
    flex-basis: 30%;
  }

  .offer-page-similar-offers > div > *:nth-child(4) {
    display: none;
  }

  .offer-page-similar-offers > div > *:nth-child(5) {
    display: none;
  }
}

@media (max-width: 32rem) {
  /* Área Principal da Oferta: Flex C&I */
  .offer-page-main {
    display: flex;
    flex-direction: column;
    width: calc(100% - 4rem);
    padding: 2rem 2rem 3rem;
  }

  .offer-page-main .offer-page-main-description {
    flex-basis: 100%;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    order: 0;
  }

  /* Área da Calculadora */
  .offer-page-main .offer-page-main-calculator-area {
    flex-basis: 100%;
    margin-right: 0rem;
    display: flex;
    justify-content: flex-start;
    order: 1;
    margin-top: 2rem;
  }

  /* Área Principal da Oferta (Título): Flex C&I */
  .offer-page-main-title {
    display: flex;
    max-width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2rem;
    text-align: left;
  }

  /* Área Principal da Oferta (Tags): Flex C&I */
  .offer-page-main-tags-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0rem;
    width: 33.3333333%;
  }

  /* Área Principal da Oferta (Descrição do Produto): Flex C&I */
  .offer-page-main-product {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    width: 100%;
    padding-top: 2rem;
  }

  .offer-page-main-product h2 {
    padding-bottom: 0.75rem;
  }

  /* Área Principal da Oferta (Descrição do Produtor): Flex C&I */
  .offer-page-main-producer {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    width: 100%;
    padding-top: 2rem;
  }

  .offer-page-main-producer h2 {
    padding-bottom: 0.75rem;
  }

  /* Área de Ofertas Similares: Flex C&I */
  .offer-page-similar-offers {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - 4rem);
    padding: 3rem 2rem;
    background-color: #FBFBFB;
  }

  .offer-page-similar-offers > h3 {
    padding-bottom: 1rem;
  }

  .offer-page-similar-offers > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .offer-page-similar-offers > div > * {
    flex-basis: 100%;
    margin-bottom: 2rem;
  }

  .offer-page-similar-offers > div > *:last-child {
    margin-bottom: 0rem;
  }
}
</style>