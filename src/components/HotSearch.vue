<template>
  <div>
    <div class="hot-filter-area">
      <h2>Título 1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum non urna a finibus. Vestibulum ornare posuere arcu, ac finibus.</p>
      <router-link to="#">Na Campo Livre, nós garantimos a entrega do seu pedido ou o seu dinheiro de volta!</router-link>

      <h3>Principais ofertas de legumes recomendadas para você</h3>

      <div class="home-card-offers-area">
        <CardOffer/>
        <CardOffer/>
        <CardOffer/>
        <CardOffer/>
      </div>
      <router-link to="/buscaOferta"><button class="btn-main-filter hot-filter-button">Ver mais ofertas de legumes</button></router-link>

      <h2>Título 2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum non urna a finibus. Vestibulum ornare posuere arcu, ac finibus.</p>
      <router-link to="#">Saiba mais como comprar no Campo Livre!</router-link>

      <h3>Principais ofertas de outras categorias</h3>

      <div class="home-card-offers-area">
        <CardOffer/>
        <CardOffer/>
        <CardOffer/>
        <CardOffer/>
      </div>
      <router-link to="/buscaOferta"><button class="btn-main-filter hot-filter-button">Ver mais ofertas</button></router-link>
    </div>
  </div>
</template>

<script>
import CardOffer from "@/components/CardOffer.vue";

export default {
  data() {
    return {
      showLoveIt: false,
      offers: [
        {
          offerId: 1,
          offerImage: '@/assets/card-offer-tomato.png',
          offerImageAlt: 'Imagem de tomates vermelhos na árvore de tomateiro de uma fazenda, prontas para serem colhidas.', 
          offerCategory: 'Legumes',
          offerTitle: 'Tomate Caqui',
          offerCity: 'Rio Claro',
          offerState: 'SP',
          offerQuantity: '80',
          offerTransportation: 'Próprio',
          offerPrice: '80,00',
          offerUnity: 'Caixa'
        },
        {
          offerId: 2,
          offerImage: '@/assets/card-offer-bell-pepper.png',
          offerImageAlt: 'Imagem de um pimentão verde na mão de uma colhetora na fazenda.', 
          offerCategory: 'Legumes',
          offerTitle: 'Pimentão Verde',
          offerCity: 'Bauru',
          offerState: 'SP',
          offerQuantity: '180',
          offerTransportation: 'Próprio',
          offerPrice: '120,00',
          offerUnity: 'Caixa'
        },
        {
          offerId: 3,
          offerImage: '@/assets/card-offer-carrot.png',
          offerImageAlt: 'Imagem de um maço de cenouras na mão do agricultor.', 
          offerCategory: 'Legumes',
          offerTitle: 'Cenoura',
          offerCity: 'Americana',
          offerState: 'SP',
          offerQuantity: '120',
          offerTransportation: 'Sem transporte',
          offerPrice: '55,00',
          offerUnity: 'Caixa'
        },
        {
          offerId: 4,
          offerImage: '@/assets/card-offer-courgette.png',
          offerImageAlt: 'Uma composição de abobrinhas dispostas em formato de pirâmide.', 
          offerCategory: 'Legumes',
          offerTitle: 'Abobrinha',
          offerCity: 'Rio Claro',
          offerState: 'SP',
          offerQuantity: '80',
          offerTransportation: 'Próprio',
          offerPrice: '40,00',
          offerUnity: 'Caixa'
        },
        {
          offerId: 5,
          offerImage: '@/assets/card-offer-cabbage.png',
          offerImageAlt: 'Quatro folhas de couve manteiga dispostas em um prato de madeira sobre uma mesa azul escura.', 
          offerCategory: 'Verduras',
          offerTitle: 'Couve Manteiga',
          offerCity: 'Jacareí',
          offerState: 'SP',
          offerQuantity: '80',
          offerTransportation: 'Próprio',
          offerPrice: '40,00',
          offerUnity: 'Caixa'
        },
        {
          offerId: 6,
          offerImage: '@/assets/card-offer-lemon.png',
          offerImageAlt: 'Uma composição de limões sicilianos amontoados com um destaque para um deles aberto pela metade, enaltecendo a qualidade da fruta.', 
          offerCategory: 'Frutas',
          offerTitle: 'Limão Siciliano',
          offerCity: 'Bragança Paulista',
          offerState: 'SP',
          offerQuantity: '80',
          offerTransportation: 'Próprio',
          offerPrice: '30,00',
          offerUnity: 'Saco'
        },
        {
          offerId: 7,
          offerImage: '@/assets/card-offer-cayenne-pepper.png',
          offerImageAlt: 'Uma bacia de pedra cheia de pimentas caienas que transbordou, e algumas delas estão espalhadas sobre uma mesa cinza.', 
          offerCategory: 'Temperos',
          offerTitle: 'Pimenta Caiena',
          offerCity: 'Atibaia',
          offerState: 'SP',
          offerQuantity: '160',
          offerTransportation: 'Próprio',
          offerPrice: '40,00',
          offerUnity: 'Quilo'
        },
        {
          offerId: 8,
          offerImage: '@/assets/card-offer-pitaya.png',
          offerImageAlt: 'Uma pitaya vermelha em um fundo rosa fosco envolvida por um tecido da mesma cor de fundo porém com um tom mais claro.', 
          offerCategory: 'Frutas',
          offerTitle: 'Pitaya Importada',
          offerCity: 'Mogi das Cruzes',
          offerState: 'SP',
          offerQuantity: '150',
          offerTransportation: 'Próprio',
          offerPrice: '800,00',
          offerUnity: 'Caixa'
        },
      ]
    }
  },
  components: {
    CardOffer
  },
  methods: {
    toggleLoveIt() {
      this.showLoveIt = !this.showLoveIt
    }
  }
}
</script>

<style scoped>
/* Área de Hot Filter: Flex Container */
.hot-filter-area {
  display: flex;
  flex-direction: column;
  width: calc(100% - 80px);
  min-height: calc(90% - 90px);
  justify-content: center;
  padding: 45px 40px 25px 40px;
  align-items: center;
  background: url(https://campolivre.com.br/bg-doodles-farm.png) no-repeat top #FFF;
  background-size: 100%;
}

/* Área de Hot Filter: Flex Items */
.hot-filter-area h3 {
  display: flex;
  width: 70%;
  justify-content: flex-start;
  margin-top: 50px;
}

.hot-filter-area p {
  text-align: center;
  width: 25%;
  margin: 10px 0px;
}

.hot-filter-area > a {
  color: #00A51C;
  font-size: 1.3rem;
  text-decoration: underline;
}

.hot-filter-area > a:hover {
  color: #FCAB10;
}

.home-card-offers-area {
  display: flex;
  width: 70%;
  min-height: 35%;
  margin: 20px 0px;
  justify-content: space-between;
}

@media (max-width: 80rem) {  
  /* Área de Hot Filter: Flex Container */
  .hot-filter-area {
    display: flex;
    flex-direction: column;
    width: calc(100% - 60px);
    min-height: calc(90% - 90px);
    justify-content: center;
    padding: 45px 30px 25px 30px;
    align-items: center;
    background: url(https://campolivre.com.br/bg-doodles-farm.png) repeat-y top #FFF;
    background-size: 120%;  
  }

  /* Área de Hot Filter: Flex Items */
  .hot-filter-area h3 {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-top: 50px;
  }

  .hot-filter-area p {
    width: 40%;
  }

  .home-card-offers-area {
    display: flex;
    width: 100%;
    min-height: 35%;
    margin: 20px 0px;
    justify-content: space-between;
  }
}

@media (max-width: 32rem) {
  /* Área de Hot Filter: Flex Container */
  .hot-filter-area {
    display: flex;
    flex-direction: column;
    width: calc(100% - 60px);
    min-height: 90%;
    justify-content: center;
    padding: 45px 30px 0px 30px;
    align-items: center;
    background-image: none;
  }

  /* Área de Hot Filter: Items */
  .hot-filter-area p {
    width: 80%;
  }

  .hot-filter-area > a {
    width: 80%;
    font-size: 1.5rem;
    text-decoration: underline;
  }

  .home-card-offers-area {
    display: flex;
    flex-direction: column;
  }
}
</style>