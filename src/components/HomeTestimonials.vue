<template>
  <div>
    <div class="home-testimonial-area">
      <h2>Depoimentos</h2>
      <p class="home-testimonial-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum non urna a finibus. Vestibulum ornare posuere arcu, ac finibus.</p>
      <div class="home-card-testimonial-area">
        <div class="card-testimonial">
          <i class="fas fa-user-circle"></i>
          <p class="card-testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum non urna a finibus. Vestibulum ornare posuere arcu, ac finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum non urna a finibus."</p>
          <span><strong>Silvio Piroli, Comprador</strong></span>
        </div>
        <div class="card-testimonial">
          <i class="fas fa-user-circle"></i>
          <p class="card-testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum non urna a finibus. Vestibulum ornare posuere arcu, ac finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum non urna a finibus."</p>
          <span><strong>Walther Fornaciari, Produtor Rural</strong></span>
        </div>
        <div class="card-testimonial">
          <i class="fas fa-user-circle"></i>
          <p class="card-testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum non urna a finibus. Vestibulum ornare posuere arcu, ac finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum non urna a finibus."</p>
          <span><strong>Diego Melo, Engenheiro</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
/* Depoimentos: Flex Container */
.home-testimonial-area {
  display: flex;
  flex-direction: column;
  width: calc(100% - 85px);
  justify-content: center;
  padding: 25px 40px 25px 45px;
  align-items: center;
}

/* Depoimentos: Flex Items */
.home-testimonial-subtitle {
  width: 25%;
}

.home-testimonial-area p {
  text-align: center;
  margin: 10px 0px;
}

.home-card-testimonial-area {
  display: flex;
  width: 70%;
  min-height: 35%;
  margin: 20px 0px;
  justify-content: space-between;
}

.card-testimonial {
  display: flex;
  background-color: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #D2D2D2;
  box-shadow: 1px 1px 6px #D2D2D2;
  width: calc(31% - 60px);
  min-height: 25%;
  justify-content: space-between;
  flex-direction: column;
  padding: 30px;
}

.card-testimonial-text {
  font-style: italic;
  padding-bottom: 30px;
}

.card-testimonial > i {
  font-size: 7rem;
  margin-bottom: 20px;
}

.card-testimonial > p {
  margin: 0;
  padding: 0 0 20px 0;  
}

.card-testimonial > span > strong {
  font-size: 1.7rem;
}

@media (max-width: 80rem) {
  /* Depoimentos: Flex Container */
  .home-testimonial-area {
    display: flex;
    flex-direction: column;
    width: calc(100% - 20px);
    justify-content: center;
    padding: 25px 10px 25px 10px;
    align-items: center;
  }

  /* Depoimentos: Flex Items */
  .home-testimonial-subtitle {
    width: 80%;
  }

  .home-card-testimonial-area {
    display: flex;
    width: calc(100% - 40px);
    margin: 20px 0px;
    padding: 0px 20px;
    justify-content: space-between;
  }

  .card-testimonial {
    display: flex;
    background-color: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #D2D2D2;
    box-shadow: 1px 1px 6px #D2D2D2;
    width: calc(31% - 60px);
    min-height: 25%;
    justify-content: space-between;
    flex-direction: column;
    padding: 30px;
  }
}

@media (max-width: 32rem) {
  /* Depoimentos: Flex Container */
  .home-testimonial-area {
    display: flex;
    flex-direction: column;
    width: calc(100% - 20px);
    justify-content: center;
    padding: 25px 10px 25px 10px;
    align-items: center;
  }

  /* Depoimentos: Flex Items */
  .home-testimonial-subtitle {
    width: 80%;
  }

  .home-card-testimonial-area {
    display: flex;
    flex-direction: column;
    width: calc(100% - 40px);
    margin: 0;
    padding: 0px 20px;
  }

  .card-testimonial {
    display: flex;
    background-color: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #D2D2D2;
    box-shadow: 1px 1px 6px #D2D2D2;
    width: calc(100% - 60px);
    min-height: 25%;
    justify-content: space-between;
    flex-direction: column;
    margin: 20px 0px;
    padding: 30px;
  }
}
</style>
