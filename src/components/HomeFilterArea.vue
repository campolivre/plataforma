<template>
  <div>
    <div class="main-filter-home-desktop">
      <h1>Um novo jeito de comprar direto do campo</h1>
      <form>
        <div>
          <label class="label-filter-city"><i class="fas fa-map-marker-alt"></i> Cidade</label>
          <select class="form-filter-city" name="slcCity" id="slcCity" form="filterOffers" placeholder="Escolha a cidade">
            <option value="0">Escolha a cidade</option>
            <option value="bauru-sp">Bauru, SP</option>
            <option value="arealva-sp">Arealva, SP</option>
            <option value="jacarei-sp">Jacareí, SP</option>
            <option value="rioclaro-sp">Rio Claro, SP</option>
          </select>
        </div>
        <div style="display: flex;">
          <div class="group-filter-category">
            <label class="label-filter-category"><i class="fas fa-tags"></i> Categoria</label>
            <select class="form-filter-category" name="slcCategory" id="slcCategory" form="filterOffers" placeholder="Escolha a categoria">
              <option value="0">Escolha a categoria</option>
              <option value="legumes">Legumes</option>
              <option value="verduras">Verduras</option>
              <option value="temperos">Temperos</option>
              <option value="sementes">Sementes</option>
            </select>
          </div>
          <div class="group-filter-price">
            <label class="label-filter-price"><i class="fas fa-dollar-sign"></i> Preço</label>
            <select class="form-filter-price" name="slcPrice" id="slcPrice" form="filterOffers" placeholder="Escolha o preço">
              <option value="0">Escolha o preço</option>
              <option value="preco-1">$</option>
              <option value="preco-2">$$</option>
              <option value="preco-3">$$$</option>
              <option value="preco-4">$$$$</option>
            </select>
          </div>
        </div>
      </form>
      <button class="btn-main-filter">Encontrar Ofertas</button>
      <router-link to="#">Produtor, anuncie grátis a sua produção</router-link>
    </div>

    <div class="video-container">
      <video autoplay muted loop>
        <source src="@/assets/greenhouse-fullhd02.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* Área de Filtro Principal: Flex Container */
.video-container {
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #01295F44;
}

/* Área de Filtro Principal: Flex Items */
.video-container video {
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
  z-index: -1;
}

.main-filter-home-desktop {
  position: absolute;
  display: flex;
  top: 60px;
  flex: 1;
  width: calc(100% - 50px);
  height: calc(90% - 100px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 25px;
  z-index: 0;
}

.main-filter-home-desktop h1 {
  color: #FFFFFF;
}

.main-filter-home-desktop a {
  color: #FFFFFF;
  font-size: 1.3rem;
  text-decoration: underline;
}

.main-filter-home-desktop a:hover {
  color: #FCAB10;
}

.btn-main-filter {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  background-color: #00A51C;
  border-radius: 8px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #FFFFFF;
  margin: 10px 0px;
  padding: 10px 40px;
  cursor: pointer;
  border: none;
  outline: none;
}

.btn-main-filter:hover {
  background-color: #FCAB10;
}

/* Área de Filtro Principal: Formulário Flex Container */
form {
  display: flex;
  width: 800px;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 40px 0px 20px;
}

form > div {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  width: 800px;
}

form .label-filter-city {
  position: absolute;
  padding: 12px 16px 6px 18px;
  font-size: 1.1rem;  
}

form .label-filter-city i {
  font-size: 1.2rem;
  margin-right: 4px;  
}

.form-filter-city {
  color: #707070;
  border-top: 1px solid #707070;
  border-right: 1px solid #707070;
  border-left: 1px solid #707070;
  border-bottom: 1px solid #707070;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  font-size: 1.6rem;
  padding: 25px 16px 10px 14px;
  flex-basis: 100%;
  outline: 0;
  background: url(https://campolivre.com.br/chevron-down-select.png) no-repeat right #FFF;
  -webkit-appearance: none;
  background-position-x: 768px;
}

select option {
  font-size: 1.6rem;
  color: #363636;
}

form .label-filter-category {
  position: absolute;
  padding: 12px 16px 6px 18px;
  font-size: 1.1rem;  
}

form .label-filter-category i {
  font-size: 1.2rem;
  margin-right: 4px;  
}

form .group-filter-category, form .group-filter-price {
  display: flex;
  width: 100%;
  flex: 1;
}

form .form-filter-category {
  color: #707070;
  border-top: none;
  border-right: 1px solid #707070;
  border-left: 1px solid #707070;
  border-bottom: 1px solid #707070;
  border-bottom-left-radius: 8px;
  width: calc(50% - 32px);
  font-size: 1.6rem;
  padding: 25px 16px 10px 16px;
  background: url(https://campolivre.com.br/chevron-down-select.png) no-repeat right #FFF;
  -webkit-appearance: none;
  background-position-x: 368px;
  flex-basis: 50%;
  flex: 1;
  outline: 0;
}

form .label-filter-price {
  position: absolute;
  padding: 12px 16px 6px 18px;
  font-size: 1.1rem;  
}

form .label-filter-price i {
  font-size: 1.2rem;
  margin-right: 4px;  
}

form .form-filter-price {
  color: #707070;
  border-top: none;
  border-left: none;
  border-right: 1px solid #707070;
  border-bottom: 1px solid #707070;
  border-bottom-right-radius: 8px;
  width: calc(50% - 32px);
  font-size: 1.6rem;
  padding: 25px 16px 10px 16px;
  background: url(https://campolivre.com.br/chevron-down-select.png) no-repeat right #FFF;
  -webkit-appearance: none;
  background-position-x: 368px;
  flex-basis: 50%;
  flex: 1;
  outline: 0;
}

@media (max-width: 80rem) {
  form {
    width: 600px;
  }

  form .form-filter-category, form .form-filter-price {
    background: url(https://campolivre.com.br/chevron-down-select.png) no-repeat right #FFF;
    -webkit-appearance: none;
    background-position-x: 266px;
  }

  form .form-filter-city {
    background: url(https://campolivre.com.br/chevron-down-select.png) no-repeat right #FFF;
    -webkit-appearance: none;
    background-position-x: 566px;
  }
}

@media (max-width: 32rem) {
  form {
    width: 320px;
  }

  form .form-filter-city, form .form-filter-category, form .form-filter-price {
    padding: 30px 16px 10px 16px;
    font-size: 1.3rem;
  }

  form .form-filter-category, form .form-filter-price {
    background: url(https://campolivre.com.br/chevron-down-select.png) no-repeat right #FFF;
    -webkit-appearance: none;
    background-position-x: 132px;
  }

  form .form-filter-city {
    background: url(https://campolivre.com.br/chevron-down-select.png) no-repeat right #FFF;
    -webkit-appearance: none;
    background-position-x: 290px;
  }

  select option {
    font-size: 1.2rem;
    color: #363636;
  }
}
</style>