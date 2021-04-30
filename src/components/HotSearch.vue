<template>
  <div>
    <div class="hot-filter-area">
      <h2>Título 1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum non urna a finibus. Vestibulum ornare posuere arcu, ac finibus.</p>
      <router-link to="#">Na Campo Livre, nós garantimos a entrega do seu pedido ou o seu dinheiro de volta!</router-link>

      <h3>Principais ofertas de legumes recomendadas para você</h3>

      <div class="home-card-offers-area">
        <div class="card-offer">
          <img src="@/assets/card-offer-tomato.png" alt="Imagem de tomates vermelhos na árvore de tomateiro de uma fazenda, prontas para serem colhidas." />
          <div class="card-offer-info">
            <p>LEGUMES</p>
            <p>Tomate Caqui</p>
            <p>Rio Claro / SP</p>
            <div class="card-offer-features"><i class="fas fa-box"></i><span>60</span><i class="fas fa-truck"></i><span>Próprio</span></div>
            <div class="card-offer-price">
              <p>R$ 80,00 / caixa</p>
              <button @click="toggleLoveIt()" class="btn-love-it"><i v-bind:class=" { 'far fa-heart': !showLoveIt, 'fas fa-heart': showLoveIt, 'btn-love-it-red': showLoveIt }"></i></button>
            </div>
          </div>
        </div>
        <div class="card-offer">
          <img src="@/assets/card-offer-bell-pepper.png" alt="Imagem de um pimentão verde na mão de uma colhetora na fazenda." />
          <div class="card-offer-info">
            <p>LEGUMES</p>
            <p>Pimentão Verde</p>
            <p>Bauru / SP</p>
            <div class="card-offer-features"><i class="fas fa-box"></i><span>180</span><i class="fas fa-truck"></i><span>Próprio</span></div>
            <div class="card-offer-price">
              <p>R$ 120,00 / caixa</p>
              <button @click="toggleLoveIt()" class="btn-love-it"><i v-bind:class=" { 'far fa-heart': !showLoveIt, 'fas fa-heart': showLoveIt, 'btn-love-it-red': showLoveIt }"></i></button>
            </div>
          </div>
        </div>
        <div class="card-offer">
          <img src="@/assets/card-offer-carrot.png" alt="Imagem de um maço de cenouras na mão do agricultor." />
          <div class="card-offer-info">
            <p>LEGUMES</p>
            <p>Cenoura</p>
            <p>Americana / SP</p>
            <div class="card-offer-features"><i class="fas fa-box"></i><span>120</span><i class="fas fa-truck"></i><span>Sem transporte</span></div>
            <div class="card-offer-price">
              <p>R$ 55,00 / caixa</p>
              <button @click="toggleLoveIt()" class="btn-love-it"><i v-bind:class=" { 'far fa-heart': !showLoveIt, 'fas fa-heart': showLoveIt, 'btn-love-it-red': showLoveIt }"></i></button>
            </div>
          </div>
        </div>
        <div class="card-offer">
          <img src="@/assets/card-offer-courgette.png" alt="Uma composição de abobrinhas dispostas em formato de pirâmide." />
          <div class="card-offer-info">
            <p>LEGUMES</p>
            <p>Abobrinha</p>
            <p>Rio Claro / SP</p>
            <div class="card-offer-features"><i class="fas fa-box"></i><span>80</span><i class="fas fa-truck"></i><span>Próprio</span></div>
            <div class="card-offer-price">
              <p>R$ 40,00 / caixa</p>
              <button @click="toggleLoveIt()" class="btn-love-it"><i v-bind:class=" { 'far fa-heart': !showLoveIt, 'fas fa-heart': showLoveIt, 'btn-love-it-red': showLoveIt }"></i></button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn-main-filter hot-filter-button">Ver mais ofertas de legumes</button>

      <h2>Título 2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum non urna a finibus. Vestibulum ornare posuere arcu, ac finibus.</p>
      <router-link to="#">Saiba mais como comprar no Campo Livre!</router-link>

      <h3>Principais ofertas de outras categorias</h3>

      <div class="home-card-offers-area">
        <div class="card-offer">
          <img src="@/assets/card-offer-cabbage.png" alt="Quatro folhas de couve manteiga dispostas em um prato de madeira sobre uma mesa azul escura." />
          <div class="card-offer-info">
            <p>VERDURAS</p>
            <p>Couve Manteiga</p>
            <p>Jacareí / SP</p>
            <div class="card-offer-features"><i class="fas fa-box"></i><span>80</span><i class="fas fa-truck"></i><span>Próprio</span></div>
            <div class="card-offer-price">
              <p>R$ 40,00 / caixa</p>
              <button @click="toggleLoveIt()" class="btn-love-it"><i v-bind:class=" { 'far fa-heart': !showLoveIt, 'fas fa-heart': showLoveIt, 'btn-love-it-red': showLoveIt }"></i></button>
            </div>
          </div>
        </div>
        <div class="card-offer">
          <img src="@/assets/card-offer-lemon.png" alt="Uma composição de limões sicilianos amontoados com um destaque para um deles aberto pela metade, enaltecendo a qualidade da fruta." />
          <div class="card-offer-info">
            <p>FRUTAS</p>
            <p>Limão Siciliano</p>
            <p>Bragança Paulista / SP</p>
            <div class="card-offer-features"><i class="fas fa-box"></i><span>80</span><i class="fas fa-truck"></i><span>Próprio</span></div>
            <div class="card-offer-price">
              <p>R$ 30,00 / saco</p>
              <button @click="toggleLoveIt()" class="btn-love-it"><i v-bind:class=" { 'far fa-heart': !showLoveIt, 'fas fa-heart': showLoveIt, 'btn-love-it-red': showLoveIt }"></i></button>
            </div>
          </div>
        </div>
        <div class="card-offer">
          <img src="@/assets/card-offer-cayenne-pepper.png" alt="Uma bacia de pedra cheia de pimentas caienas que transbordou, e algumas delas estão espalhadas sobre uma mesa cinza." />
          <div class="card-offer-info">
            <p>TEMPEROS</p>
            <p>Pimenta Caiena</p>
            <p>Atibaia / SP</p>
            <div class="card-offer-features"><i class="fas fa-box"></i><span>80</span><i class="fas fa-truck"></i><span>Próprio</span></div>
            <div class="card-offer-price">
              <p>R$ 40,00 / quilo</p>
              <button @click="toggleLoveIt()" class="btn-love-it"><i v-bind:class=" { 'far fa-heart': !showLoveIt, 'fas fa-heart': showLoveIt, 'btn-love-it-red': showLoveIt }"></i></button>
            </div>
          </div>
        </div>
        <div class="card-offer">
          <img src="@/assets/card-offer-pitaya.png" alt="Uma pitaya vermelha em um fundo rosa fosco envolvida por um tecido da mesma cor de fundo porém com um tom mais claro." />
          <div class="card-offer-info">
            <p>FRUTAS</p>
            <p>Pitaya Importada</p>
            <p>Mogi das Cruzes / SP</p>
            <div class="card-offer-features"><i class="fas fa-box"></i><span>150</span><i class="fas fa-truck"></i><span>Próprio</span></div>
            <div class="card-offer-price">
              <p>R$ 800,00 / caixa</p>
              <button @click="toggleLoveIt()" class="btn-love-it"><i v-bind:class=" { 'far fa-heart': !showLoveIt, 'fas fa-heart': showLoveIt, 'btn-love-it-red': showLoveIt }"></i></button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn-main-filter hot-filter-button">Ver mais ofertas</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLoveIt: false
    }
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

/* Card de Ofertas: Flex Container */
.card-offer {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 1px 1px 6px #D2D2D2;
  background-color: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #D2D2D2;
  width: 23%;
  max-height: 300px;
  cursor: pointer;
}

.card-offer:hover {
  transform: scale(1.025);
}

.card-offer > * {
  flex: 1;
  flex-basis: 50%;
}

.card-offer img {
  width: 100%;
  height: 50%;
  border-radius: 8px 8px 0 0;
}

.card-offer-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: calc(100% - 30px);
  padding: 15px 15px;
}

.card-offer-info p {
  margin: 0;
}

.card-offer-info p:nth-child(1){
  width: calc(100% - 16px);
  text-align: left;
  font-size: 1rem;
  margin-bottom: 8px;
}

.card-offer-info p:nth-child(2){
  width: calc(100% - 16px);
  text-align: left;
  font-size: 1.4rem;
  font-weight: 600;
}

.card-offer-info p:nth-child(3){
  width: calc(100% - 16px);
  text-align: left;
  font-size: 1.2rem;
  margin-bottom: 12px;
}

.card-offer-features {
  display: flex;
  align-items: center;
  width: calc(100% - 16px);
  height: 20px;
  margin-bottom: 12px;
}

.card-offer-features span {
  padding-right: 12px;
  font-size: 1.4rem;
}

.card-offer-features i {
  padding-right: 6px;
  font-size: 1.7rem;
}

.card-offer-price {
  display: flex;
  align-items: baseline;
  width: 100%;
}

.card-offer-price > p {
  margin: 0;
  padding: 0;
  font-size: 1.5rem !important;
  font-weight: 600;
  color: #00A51C;
}

.btn-love-it {
  width: 35px;
  padding: 6px 6px 6px 6px;
  background-color: #FFFFFF;
  border: 1px solid #D2D2D2;
  border-radius: 60px;
  text-align: center;
  font-size: 3rem;
  color: #363636;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  z-index: 10;
}

.btn-love-it:hover {
  background-color: #FAFAFA;
  transform: scale(1.05);
}

.far .fa-heart {
  color: #707070;  
}

.btn-love-it-red {
  color: #FF0000;
}

.hot-filter-button {
  margin-bottom: 70px;
}

.hot-filter-button:last-child {
  margin-bottom: 20px;
}

/* Card de Ofertas: Flex Items */

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

  .card-offer {
    box-shadow: 1px 1px 6px #D2D2D2;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #D2D2D2;
    width: 23%;
    max-height: 300px;
    cursor: pointer;
  }

  .card-offer-info p:nth-child(1){
    font-size: 1.1rem;
    margin-bottom: 8px;
  }

  .card-offer-info p:nth-child(2){
    font-size: 1.4rem;
    font-weight: 600;
  }

  .card-offer-info p:nth-child(3){
    font-size: 1.2rem;
    margin-bottom: 12px;
  }

  .card-offer-features {
    height: 20px;
    margin-bottom: 12px;
  }

  .card-offer-features span {
    padding-right: 12px;
    font-size: 1.4rem;
  }

  .card-offer-features i {
    padding-right: 6px;
    font-size: 1.6rem;
  }

  .card-offer-price > p {
    font-size: 1.25rem !important;
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

  .card-offer {
    width: 100%;
    height: 100%;
    min-height: 340px;
    margin-bottom: 25px;
  }

  .card-offer:last-child {
    margin-bottom: 0px;
  }

  .card-offer-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: calc(100% - 30px);
    padding: 15px 15px;
  }

  .card-offer-info p:nth-child(1){
    font-size: 1.2rem;
    margin-bottom: 8px;
  }

  .card-offer-info p:nth-child(2){
    font-size: 1.6rem;
    font-weight: 600;
  }

  .card-offer-info p:nth-child(3){
    font-size: 1.4rem;
    margin-bottom: 12px;
  }

  .card-offer-features {
    height: 20px;
    margin-bottom: 12px;
  }

  .card-offer-features span {
    padding-right: 12px;
    font-size: 1.6rem;
  }

  .card-offer-features i {
    padding-right: 6px;
    font-size: 2rem;
  }

  .card-offer-price > p {
    font-size: 1.7rem !important;
  }

  .hot-filter-button:last-child {
    margin-bottom: 25px;
  }
}
</style>