<template>
  <div class="card-offer">
    <img :src="require('../assets/' + offer.image)" :alt="offer.imageAlt" />
    <div class="card-offer-info">
      <p>{{ offer.category }}</p>
      <p>{{ offer.title }}</p>
      <p>{{ offer.city }} / {{ offer.state }}</p>
      <div class="card-offer-features"><i class="fas fa-box"></i><span>{{ offer.quantity }}</span><i class="fas fa-truck"></i><span>{{ offer.transportation }}</span></div>
      <div class="card-offer-price">
        <p>R$ {{ offer.price }} / {{ offer.unity }}</p>
        <button @click="toggleLoveIt()" class="btn-love-it"><i v-bind:class=" { 'far fa-heart': !showLoveIt, 'fas fa-heart': showLoveIt, 'btn-love-it-red': showLoveIt }"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    offer: Object
  },
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

<style>
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

/* Card de Ofertas: Flex Items */
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

@media (max-width: 80rem) {
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