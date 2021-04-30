<template>
  <div>
    <div class="home-quick-help-area">
      <h2>Como podemos te ajudar?</h2>
      <div class="home-btn-quick-help-area">
        <button class="btn-main-filter btn-quick-help">Quero vender meus produtos</button>
        <button class="btn-main-filter btn-quick-help">Quero comprar produtos</button>
        <button class="btn-main-filter btn-quick-help">Quero prestar serviços</button>
      </div>
      <router-link to="#">Acesse a nossa área de suporte</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* Ajuda Rápida: Flex Container */
.home-quick-help-area {
  display: flex;
  flex-direction: column;
  width: calc(100% - 85px);
  justify-content: center;
  align-items: center;
  margin: 25px 0px 0px;
  padding: 25px 40px 25px 45px;
  background-color: #F7971C;
}

.home-quick-help-area h2 {
  color: #FFFFFF;
}

.home-quick-help-area > a {
  color: #FFFFFF;
  font-size: 1.3rem;
  text-decoration: underline;
}

.home-quick-help-area > a:hover {
  color: #138A36;
}

/* Ajuda Rápida: Flex Items */
.home-btn-quick-help-area {
  display: flex;
  width: calc(100% - 40%);
  padding: 0 20% 0 20%;
}

.btn-quick-help {
  background-color: #FFFFFF;
  color: #363636;
  margin: 20px 10px;
  flex: 1;
}

.btn-quick-help:hover {
  background-color: #00A51C;
  color: #FFFFFF;
}

@media (max-width: 80rem) {
  /* Ajuda Rápida: Flex Container */
  .home-quick-help-area {
    display: flex;
    flex-direction: column;
    width: calc(100% - 20px);
    justify-content: center;
    align-items: center;
    margin: 20px 0px 0px;
    padding: 25px 10px 25px 10px;
    background-color: #F7971C;
  }

  /* Ajuda Rápida: Flex Items */
  .home-btn-quick-help-area {
    display: flex;
    width: calc(100% - 20px);
    padding: 0 10px 0 10px;
  }
 
  .btn-quick-help {
    flex: 1;
  }
}

@media (max-width: 32rem) {
  /* Ajuda Rápida: Flex Container */
  .home-quick-help-area {
    display: flex;
    flex-direction: column;
    width: calc(100% - 20px);
    justify-content: center;
    align-items: center;
    margin: 20px 0px 0px;
    padding: 25px 10px 25px 10px;
    background-color: #F7971C;
  }

  .home-quick-help-area > a {
    font-size: 1.5rem;
  }

  /* Ajuda Rápida: Flex Items */
  .home-btn-quick-help-area {
    display: flex;
    flex-direction: column;
    width: calc(100% - 80px);
    padding: 0 40px 0 40px;
  }

  .btn-quick-help {
    margin: 10px 0px;
  }

  .btn-quick-help:first-child {
    margin-top: 30px;
  }

  .btn-quick-help:last-child {
    margin-bottom: 30px;
  }
}
</style>