<template>
  <div>
    <div class="hot-filter-area">
      <h2>Título 1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum non urna a finibus. Vestibulum ornare posuere arcu, ac finibus.</p>
      <router-link to="#">Na Campo Livre, nós garantimos a entrega do seu pedido ou o seu dinheiro de volta!</router-link>

      <h3>Principais ofertas de legumes recomendadas para você</h3>

      <div class="home-card-offers-area">
        <CardOffer v-for="offer in offers" :key="offer.id" :offer="offer" />
      </div>
      <router-link to="/buscaOferta"><button class="btn-main-filter hot-filter-button">Ver mais ofertas de legumes</button></router-link>

      <h2>Título 2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum non urna a finibus. Vestibulum ornare posuere arcu, ac finibus.</p>
      <router-link to="#">Saiba mais como comprar no Campo Livre!</router-link>

      <h3>Principais ofertas de outras categorias</h3>

      <div class="home-card-offers-area">
        <CardOffer v-for="offer in offersCat" :key="offer.id" :offer="offer" />
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
      offers: [
        {
          id: 1,
          image: 'card-offer-tomato.png',
          imageAlt: 'Imagem de tomates vermelhos na árvore de tomateiro de uma fazenda, prontas para serem colhidas.', 
          category: 'LEGUMES',
          title: 'Tomate Caqui',
          city: 'Rio Claro',
          state: 'SP',
          quantity: 80,
          transportation: 'Próprio',
          transportationPrice: 0.00,
          price: 80.00,
          unity: 'Caixa'
        },
        {
          id: 2,
          image: 'card-offer-bell-pepper.png',
          imageAlt: 'Imagem de um pimentão verde na mão de uma colhetora na fazenda.', 
          category: 'LEGUMES',
          title: 'Pimentão Verde',
          city: 'Bauru',
          state: 'SP',
          quantity: 180,
          transportation: 'Próprio',
          transportationPrice: 0.00,
          price: 120.00,
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
          quantity: 120,
          transportation: 'Para retirar',
          transportationPrice: 50.00,
          price: 55.00,
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
          quantity: 80,
          transportation: 'Próprio',
          transportationPrice: 0.00,
          price: 40.00,
          unity: 'Caixa'
        },
      ],
      offersCat: [
        {
          id: 5,
          image: 'card-offer-cabbage.png',
          imageAlt: 'Quatro folhas de couve manteiga dispostas em um prato de madeira sobre uma mesa azul escura.', 
          category: 'VERDURAS',
          title: 'Couve Manteiga',
          city: 'Jacareí',
          state: 'SP',
          quantity: 80,
          transportation: 'Próprio',
          transportationPrice: 0.00,
          price: 40.00,
          unity: 'Caixa'
        },
        {
          id: 6,
          image: 'card-offer-lemon.png',
          imageAlt: 'Uma composição de limões sicilianos amontoados com um destaque para um deles aberto pela metade, enaltecendo a qualidade da fruta.', 
          category: 'FRUTAS',
          title: 'Limão Siciliano',
          city: 'Bragança Paulista',
          state: 'SP',
          quantity: 80,
          transportation: 'Próprio',
          transportationPrice: 0.00,
          price: 30.00,
          unity: 'Saco'
        },
        {
          id: 7,
          image: 'card-offer-cayenne-pepper.png',
          imageAlt: 'Uma bacia de pedra cheia de pimentas caienas que transbordou, e algumas delas estão espalhadas sobre uma mesa cinza.', 
          category: 'TEMPEROS',
          title: 'Pimenta Caiena',
          city: 'Atibaia',
          state: 'SP',
          quantity: 160,
          transportation: 'Próprio',
          transportationPrice: 0.00,
          price: 40.00,
          unity: 'Quilo'
        },
        {
          id: 8,
          image: 'card-offer-pitaya.png',
          imageAlt: 'Uma pitaya vermelha em um fundo rosa fosco envolvida por um tecido da mesma cor de fundo porém com um tom mais claro.', 
          category: 'FRUTAS',
          title: 'Pitaya Importada',
          city: 'Mogi das Cruzes',
          state: 'SP',
          quantity: 150,
          transportation: 'Próprio',
          transportationPrice: 0.00,
          price: 800.00,
          unity: 'Caixa'
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