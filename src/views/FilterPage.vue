<template>
  <div>

    <!-- ÁREA DOS PARÂMETROS DE FILTRO -->
    <div v-bind:class="{ 'filter-fade-in': showFilterBox, 'filter-fade-out': !showFilterBox }" class="main-filter-params-modal">
      <div class="main-filter-params-box">
        <div><i @click="toggleFilterBox()" class="fas fa-times"></i> Filtros</div>
        <div>
          <div>
            <div>Preço</div>
            <div>
              <button
                v-for="(listButtonPrice, index) in listButtonsPrice"
                :class="listButtonPrice.buttonPriceStyle"
                :key="index"
                @click="activateButtonPrice(index)"
              >{{ listButtonPrice.buttonPriceText }}</button>
            </div>
          </div>
          <div>
            <div>Transporte</div>
            <div>
              <button
                v-for="(listButtonTransportation, index) in listButtonsTransportation"
                :class="listButtonTransportation.buttonTransportationStyle"
                :key="index"
                @click="activateButtonTransportation(index)"
              >{{ listButtonTransportation.buttonTransportationText }}</button>
            </div>  
          </div>
          <div>
            <div>Produto Orgânico?</div>
            <div>
              <button
                v-for="(listButtonOrganic, index) in listButtonsOrganic"
                :class="listButtonOrganic.buttonOrganicStyle"
                :key="index"
                @click="activateButtonOrganic(index)"
              >{{ listButtonOrganic.buttonOrganicText }}</button>
            </div>
          </div>
          <div>
            <div>Produto Transformado?</div>
            <div>
              <button
                v-for="(listButtonTransformed, index) in listButtonsTransformed"
                :class="listButtonTransformed.buttonTransformedStyle"
                :key="index"
                @click="activateButtonTransformed(index)"
              >{{ listButtonTransformed.buttonTransformedText }}</button>
            </div>
          </div>
          <div>
            <div>Tipo de Medida</div>
            <div>
              <button
                v-for="(listButtonMeasure, index) in listButtonsMeasure"
                :class="listButtonMeasure.buttonMeasureStyle"
                :key="index"
                @click="activateButtonMeasure(index)"
              >{{ listButtonMeasure.buttonMeasureText }}</button>
            </div>
          </div>
          <div>
            <div>Volume</div>
            <div>
              <button
                v-for="(listButtonVolume, index) in listButtonsVolume"
                :class="listButtonVolume.buttonVolumeStyle"
                :key="index"
                @click="activateButtonVolume(index)"
              >{{ listButtonVolume.buttonVolumeText }}</button>
            </div>
          </div>
          <div>
            <div>Disponibilidade</div>
            <div>
              <button
                v-for="(listButtonAvailability, index) in listButtonsAvailability"
                :class="listButtonAvailability.buttonAvailabilityStyle"
                :key="index"
                @click="activateButtonAvailability(index)"
              >{{ listButtonAvailability.buttonAvailabilityText }}</button>
            </div>
          </div>
        </div>
        <div>
          <div><button class="btn-filter-box btn-color-white">Limpar Filtros</button></div>
          <div><button @click="toggleFilterBox()" class="btn-filter-box btn-color-green">Aplicar Filtros</button></div>
        </div>
      </div>      
    </div>

    <div class="main-filter-page">
      <!-- MENU -->
      <NavBar />

      <div class="main-filter-body">
        <div class="filter-content">

          <!-- ÁREA DO FILTRO -->
          <div class="filter-content-header">
            <p>Ofertas de legumes em <br /><span class="city-highlight">Rio Claro / SP</span></p>
            <div>
              <button @click="toggleFilterBox()" class="btn-filter"><i class="fas fa-sliders-h"></i> Filtrar</button>
            </div>
          </div>

          <!-- ÁREA DO BREADCRUMB -->
          <span class="filter-breadcrumbs"><router-link to="#">Início</router-link> <span class="filter-breadcrumbs-separator">></span> <router-link to="#">Rio Claro / SP</router-link></span>

          <!-- ÁREA DOS RESULTADOS E ORDENAÇÃO -->
          <div class="filter-content-ordering">
            <p>1.500 ofertas encontradas com esses parâmetros</p>
            <div class="group-filter-price">
              <select class="form-filter-price" name="slcPrice" id="slcPrice" form="filterOffers" placeholder="Escolha o preço">
                <option value="preco-1">Mais relevantes</option>
                <option value="preco-1">Mais recentes</option>
                <option value="preco-2">Menor custo total</option>
                <option value="preco-3">Melhor classificação</option>
              </select>
            </div>
          </div>

          <!-- ÁREA DOS INDICADORES DE FILTRO -->
          <div class="filter-content-tags-area">
            <div
              v-for="(tag, index) in tags"
              v-show="tag.tagShow"
              :key="index"
              class="filter-content-tags">
              <span>{{ tag.tagText }}</span>
              <span @click="clearTag(index)">X</span>
            </div>
          </div>

          <!-- ÁREA DOS CARDS DE OFERTAS -->
          <div class="filter-content-offers-area">
            <div class="filter-content-offers">
              <CardOffer />
              <CardOffer />
              <CardOffer />
              <CardOffer />
              <CardOffer />
              <CardOffer />
              <CardOffer />
              <CardOffer />
              <CardOffer />
              <CardOffer />
              <CardOffer />
            </div>

            <!-- ÁREA DA MENSAGEM "NÃO ENCONTROU O QUE QUERIA?" -->
            <div class="filter-content-offers-message" v-bind:style="{ 'margin-top': marginFooter }">
              <h2>Não encontrou o que queria? :/</h2>
              <p>Não se preocupe! Todos os dias novas ofertas são cadastradas no sistema e você pode receber novas ofertas por email.</p>
              <div>
                <button class="btn-filter-box btn-color-green">Avise-me</button>
              </div>
            </div>
            
            <!-- ÁREA DA MENSAGEM "NÃO EXISTEM OFERTAS PARA APRESENTAR" -->
            <div class="filter-content-no-offers">
              <div><i class="fas fa-search"></i></div>
              <p>Ops! Nenhuma oferta encontrada com esses parâmetros de filtro.</p>
            </div>

            <div>
              <!-- ÁREA DO RODAPÉ -->
              <MainFooter />
            </div>
          </div>

        </div>
        <div class="filter-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29404.620921447073!2d-47.085413731897795!3d-22.892056526055768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c61de74b6325%3A0x17e53a6a2178c22a!2sCampinas%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1620311906930!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MainFooter from "@/components/MainFooter.vue";
import CardOffer from "@/components/CardOffer.vue";

export default {
  data () {
    return {
      listButtonsPrice: [
        { buttonPriceId: 1, buttonPriceText: '$', buttonPriceStyle: 'btn-filter-box btn-color-white' },
        { buttonPriceId: 2, buttonPriceText: '$$', buttonPriceStyle: 'btn-filter-box btn-color-white' },
        { buttonPriceId: 3, buttonPriceText: '$$$', buttonPriceStyle: 'btn-filter-box btn-color-white' },
        { buttonPriceId: 4, buttonPriceText: '$$$$', buttonPriceStyle: 'btn-filter-box btn-color-white' },
        { buttonPriceId: 5, buttonPriceText: '$$$$$', buttonPriceStyle: 'btn-filter-box btn-color-white' },
      ],
      listButtonsTransportation: [
        { buttonTransportationId: 1, buttonTransportationText: 'Próprio', buttonTransportationStyle: 'btn-filter-box btn-color-white' },
        { buttonTransportationId: 2, buttonTransportationText: 'Indiferente', buttonTransportationStyle: 'btn-filter-box btn-color-white' },
      ],
      listButtonsOrganic: [
        { buttonOrganicId: 1, buttonOrganicText: 'Sim', buttonOrganicStyle: 'btn-filter-box btn-color-white' },
      ],
      listButtonsTransformed: [
        { buttonTransformedId: 1, buttonTransformedText: 'Sim', buttonTransformedStyle: 'btn-filter-box btn-color-white' },
      ],
      listButtonsMeasure: [
        { buttonMeasureId: 1, buttonMeasureText: 'Caixas', buttonMeasureStyle: 'btn-filter-box btn-color-white' },
        { buttonMeasureId: 1, buttonMeasureText: 'Sacos', buttonMeasureStyle: 'btn-filter-box btn-color-white' },
        { buttonMeasureId: 1, buttonMeasureText: 'Quilos', buttonMeasureStyle: 'btn-filter-box btn-color-white' },
      ],
      listButtonsVolume: [
        { buttonVolumeId: 1, buttonVolumeText: '10+', buttonVolumeStyle: 'btn-filter-box btn-color-white' },
        { buttonVolumeId: 1, buttonVolumeText: '25+', buttonVolumeStyle: 'btn-filter-box btn-color-white' },
        { buttonVolumeId: 1, buttonVolumeText: '50+', buttonVolumeStyle: 'btn-filter-box btn-color-white' },
        { buttonVolumeId: 1, buttonVolumeText: '100+', buttonVolumeStyle: 'btn-filter-box btn-color-white' },
      ],
      listButtonsAvailability: [
        { buttonAvailabilityId: 1, buttonAvailabilityText: 'Imediata', buttonAvailabilityStyle: 'btn-filter-box btn-color-white' },
        { buttonAvailabilityId: 1, buttonAvailabilityText: 'Até 15 dias', buttonAvailabilityStyle: 'btn-filter-box btn-color-white' },
        { buttonAvailabilityId: 1, buttonAvailabilityText: 'Mais de 15 dias', buttonAvailabilityStyle: 'btn-filter-box btn-color-white' },
      ],
      tags: [
        { tagId: 1, tagText: 'caixas', tagShow: true },
        { tagId: 2, tagText: '$$$', tagShow: true },
        { tagId: 3, tagText: 'imediata', tagShow: true },
      ],
      showFilterBox: false,
      countShowFilterBox: 0,
      vizFilterBox: 'hidden',
      marginFooter: 36*3+'px'
    }
  },
  methods: {
    toggleFilterBox() {
      this.showFilterBox = !this.showFilterBox,
      this.countShowFilterBox++
    },
    activateButtonPrice(index){
      if(this.listButtonsPrice[index].buttonPriceStyle == 'btn-filter-box btn-color-white'){
        this.listButtonsPrice[index].buttonPriceStyle = 'btn-filter-box btn-color-white-active'
      } else {
        this.listButtonsPrice[index].buttonPriceStyle = 'btn-filter-box btn-color-white'
      }
    },
    activateButtonTransportation(index){
      if(this.listButtonsTransportation[index].buttonTransportationStyle == 'btn-filter-box btn-color-white'){
        this.listButtonsTransportation[index].buttonTransportationStyle = 'btn-filter-box btn-color-white-active'
      } else {
        this.listButtonsTransportation[index].buttonTransportationStyle = 'btn-filter-box btn-color-white'
      }
    },
    activateButtonOrganic(index){
      if(this.listButtonsOrganic[index].buttonOrganicStyle == 'btn-filter-box btn-color-white'){
        this.listButtonsOrganic[index].buttonOrganicStyle = 'btn-filter-box btn-color-white-active'
      } else {
        this.listButtonsOrganic[index].buttonOrganicStyle = 'btn-filter-box btn-color-white'
      }
    },
    activateButtonTransformed(index){
      if(this.listButtonsTransformed[index].buttonTransformedStyle == 'btn-filter-box btn-color-white'){
        this.listButtonsTransformed[index].buttonTransformedStyle = 'btn-filter-box btn-color-white-active'
      } else {
        this.listButtonsTransformed[index].buttonTransformedStyle = 'btn-filter-box btn-color-white'
      }
    },
    activateButtonMeasure(index){
      if(this.listButtonsMeasure[index].buttonMeasureStyle == 'btn-filter-box btn-color-white'){
        this.listButtonsMeasure[index].buttonMeasureStyle = 'btn-filter-box btn-color-white-active'
      } else {
        this.listButtonsMeasure[index].buttonMeasureStyle = 'btn-filter-box btn-color-white'
      }
    },
    activateButtonVolume(index){
      if(this.listButtonsVolume[index].buttonVolumeStyle == 'btn-filter-box btn-color-white'){
        this.listButtonsVolume[index].buttonVolumeStyle = 'btn-filter-box btn-color-white-active'
      } else {
        this.listButtonsVolume[index].buttonVolumeStyle = 'btn-filter-box btn-color-white'
      }
    },
    activateButtonAvailability(index){
      if(this.listButtonsAvailability[index].buttonAvailabilityStyle == 'btn-filter-box btn-color-white'){
        this.listButtonsAvailability[index].buttonAvailabilityStyle = 'btn-filter-box btn-color-white-active'
      } else {
        this.listButtonsAvailability[index].buttonAvailabilityStyle = 'btn-filter-box btn-color-white'
      }
    },
    clearTag(index){
      this.tags[index].tagShow = false
    },
  },
  components: {
    NavBar,
    MainFooter,
    CardOffer
  }
}
</script>

<style>
/* Filtro Principal: Flex Container */
.main-filter-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
}

/* Filtro Principal: Flex Items */
.main-filter-body {
  display: flex;
  width: 100%;
  padding-top: 60px;
  flex: 1;
}

.main-filter-body > * {
  flex: 1;
}

.filter-content {
  display: flex;
  flex-direction: column;
  width: 77%;
  height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
}

.filter-content span:nth-child(4){
  flex: 1;
}

/* Filtro Área do Conteúdo: Flex C&I */
.filter-content-header {
  display: flex;
  width: calc(100% - 40px);
  padding: 12px 20px;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 0.5px solid #D2D2D2;
}

.filter-content-header > p {
  text-align: left;
  flex: 1;
}

.filter-content-header > div {
  text-align: right;
}

.filter-content-header > div > button {
  text-align: center;
}

.cat-highlight {
  font-weight: 600;
}

.city-highlight {
  font-size: 1.7rem;
  font-weight: 600;
}

.btn-filter {
  width: 100px;
  background-color: #FFFFFF;
  padding: 10px;
  border: 1px solid #707070;
  border-radius: 8px;
  font-size: 1.5rem;
  color: #363636;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-weight: 600;
  align-items: center;
  outline: none;
}

.btn-filter:hover {
  background-color: #FCAB10;
  border: 1px solid #FCAB10;
  color: #FFFFFF;
}

.btn-filter i {
  font-size: 1.6rem;
  padding-right: 10px;
}

/* Filtro Área do Mapa: Flex C */
.filter-breadcrumbs {
  display: flex;
  width: 100%;
  padding: 12px 20px 6px;
  font-size: 1.4rem;
}

.filter-breadcrumbs a {
  font-size: 1.4rem;
  text-decoration: none;
  color: #363636;
}

.filter-breadcrumbs a:hover {
  text-decoration: underline;
  color: #00A51C;
}

.filter-breadcrumbs-separator {
  padding: 0px 5px;
  font-size: 1.5rem;
}

/* Filtro Área da Ordenação: Flex C&I */
.filter-content-ordering {
  display: flex;
  width: calc(100% - 40px);
  padding: 0px 20px 30px;
  justify-content: space-between;
  align-items: center;
}

.filter-content-ordering > div {
  flex: 1;
  text-align: right;
}

.form-filter-price {
  color: #363636;
  border: 1px solid #707070;
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 4px;
  outline: 0;
}

/* Filtro Área de Indicadores de Filtro: Flex C */
.filter-content-tags-area {
  display: flex;
  width: calc(100% - 40px);
  padding: 0px 20px;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

/* Filtro Área de Indicadores de Filtro: Flex I */
.filter-content-tags {
  display: flex;
  align-items: center;
  background-color: #00A51C;
  padding: 0px 8px;
  border-radius: 6px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.filter-content-tags span:nth-child(1) {
  font-size: 1.3rem;
  font-weight: 600;
  padding: 6px 6px 6px 0px;
  color: #FFFFFF;
}

.filter-content-tags span:nth-child(2) {
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  padding: 3px 6px 4px 6px;
  color: #FFFFFF;
  cursor: pointer;
}

/* Filtro Área de Ofertas: Flex C&I */
.filter-content-offers-area {
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: auto;
  justify-content: space-between;
}

.filter-content-offers-area > * {
  margin-bottom: 0px;
}

.filter-content-offers-area > *:last-child {
  margin-bottom: 0px;
}

/* Filtro Área de Ofertas: Flex C&I */
.filter-content-offers {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 40px);
  align-content: left;
  justify-content: flex-start;
  text-align: left;
  padding: 10px 20px 0px;
}

.filter-content-offers > * {
  width: 22.8%;
  max-width: 23%;
  margin-right: 2.4%;
  margin-bottom: 26px;
}

.filter-content-offers > *:nth-child(4n) {
  margin-right: 0;
}

/* Filtro Área da Mensagem: Flex C */
.filter-content-offers-message {
  display: flex;
  flex-direction: column;
  padding: 40px 26% 40px;
  background-color: #FBFBFB;
}

/* Filtro Área da Mensagem: Flex I */
.filter-content-offers-message > * {
  padding: 10px 0px;
}

.filter-content-offers-message > *:last-child {
  padding: 0;
}

/* Filtro Mensagem "Sem Resultados": Flex C */
.filter-content-no-offers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 26% 40px;
  background-color: #FBFBFB;
  flex: 1;
  display: none;
}

/* Filtro Mensagem "Sem Resultados": Flex I */
.filter-content-no-offers i {
  font-size: 4rem;
  background-color: #D2D2D2;
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 50%;
}

/* Filtro Área do Mapa: Flex I */
.filter-map {
  max-width: 33%;
}

/* Filtro Topo: Flex Container */
.filter-top {
  display: flex;
  padding: 70px 20px 0px;
}

/* Filtro Modal da Área dos Parâmetros: Flex C */
.main-filter-params-modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: hidden !important;
}

/* Filtro Box da Área dos Parâmetros: Flex C */
.main-filter-params-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  width: 50%;
  height: 90vh;
  border-radius: 20px;
}

.main-filter-params-box > div:nth-child(1) {
  display: flex;
  background-color: #00A51C;
  min-height: 60px;
  border-radius: 20px 20px 0 0;
  align-items: center;
  font-size: 2.2rem;
  font-weight: 600;
  color: #FFFFFF;
  padding: 0px 26px;
}

.main-filter-params-box > div:nth-child(1) > i {
  font-size: 2.5rem;
  padding-right: 10px;
  cursor: pointer;
}

.main-filter-params-box > div:nth-child(2) {
  display: flex;
  flex-direction: column;
  width: calc(100% - 52px);
  height: 100%; 
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
  font-size: 4rem;
  font-weight: 600;
  padding: 26px 26px 26px;
}

/* Parâmetros */
.main-filter-params-box > div:nth-child(2) > * {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  height: 40px;
  padding: 26px 20px 26px 20px;
  border-bottom: 0.5px solid #D2D2D2;
}

.main-filter-params-box > div:nth-child(2) > *:first-child {
  padding-top: 0px;
}

.main-filter-params-box > div:nth-child(2) > *:last-child {
  padding-bottom: 0px;
  border-bottom: none;
}

.main-filter-params-box > div:nth-child(2) > * > div:nth-child(2) > button {
  margin-left: 10px;
}

.main-filter-params-box > div:nth-child(3) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 52px);
  min-height: 80px;
  border-radius: 0 0 20px 20px;
  padding: 0px 26px;
  border-top: 0.5px solid #D2D2D2;
  background-color: #FBFBFB;
}

.btn-filter-box {
  padding: 10px;
  border-radius: 8px;
  font-size: 1.5rem;
  cursor: pointer;
  justify-content: center;
  font-weight: 600;
  align-items: center;
  outline: none;
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
  border: 1px solid rgba(0, 165, 28, 0.35);;
  color: #00A51C;
}

.btn-color-white-active:hover {
  background-color: rgba(0, 165, 28, 0.25);
  border: 1px solid rgba(0, 165, 28, 0.45);;
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

/* Menu Mobile: Efeitos */
.filter-fade-in {
  -webkit-animation: efeito-fade-in 0.5s forwards;
  -webkit-animation-delay: 0s;
  animation: efeito-fade-in 0.5s forwards;
  animation-delay: 0s;
  visibility: visible !important; 
}

@-webkit-keyframes efeito-fade-in { 0% { visibility: visible !important; opacity: 0; } 100% { visibility: visible; opacity: 1; } }
@-o-keyframes efeito-fade-in { 0% { visibility: visible !important; opacity: 0; } 100% { visibility: visible; opacity: 1; } }
@-ms-keyframes efeito-fade-in { 0% { visibility: visible !important; opacity: 0; } 100% { visibility: visible; opacity: 1; } }
@-moz-keyframes efeito-fade-in { 0% { visibility: visible !important; opacity: 0; } 100% { visibility: visible; opacity: 1; } }
@keyframes efeito-fade-in { 0% { visibility: visible !important; opacity: 0; } 100% { visibility: visible; opacity: 1; } }

.filter-fade-out {
  -webkit-animation: efeito-fade-out 0.5s forwards;
  -webkit-animation-delay: 0s;
  animation: efeito-fade-out 0.5s forwards;
  animation-delay: 0s;
}

@-webkit-keyframes efeito-fade-out { 0% { visibility: visible !important; opacity: 1; } 100% { visibility: hidden !important; opacity: 0; } }
@-o-keyframes efeito-fade-out { 0% { visibility: visible !important; opacity: 1; } 100% { visibility: hidden !important; opacity: 0; } }
@-ms-keyframes efeito-fade-out { 0% { visibility: visible !important; opacity: 1; } 100% { visibility: hidden !important; opacity: 0; } }
@-moz-keyframes efeito-fade-out { 0% { visibility: visible !important; opacity: 1; } 100% { visibility: hidden !important; opacity: 0; } }
@keyframes efeito-fade-out { 0% { visibility: visible !important; opacity: 1; } 100% { visibility: hidden !important; opacity: 0; } }

@media (max-width: 80rem) {
  .filter-content-offers > * {
    width: 47%;
    max-width: 47%;
    margin-right: 4.5%;
    margin-bottom: 26px;
  }

  .filter-content-offers > *:nth-child(2n) {
    margin-right: 0;
  }
}

@media (max-width: 32rem) {
  /* Filtro Principal: Flex Container */
  .main-filter-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100vw;
    height: 100%;
  }

  /* Filtro Principal: Flex Items */
  .main-filter-body {
    display: flex;
    width: 100%;
    max-width: 100vw;
    padding-top: 60px;
    flex: 1;
  }

  .main-filter-body > * {
    flex: 1;
  }

  .filter-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100vw;
    height: calc(100% - 60px);
  }

  .filter-content span:nth-child(4){
    flex: 1;
  }

  /* Filtro Área do Conteúdo: Flex C&I */
  .filter-content-header {
    display: flex;
    width: calc(100% - 40px);
    max-width: 100vw;
    padding: 12px 20px;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 0.5px solid #D2D2D2;
  }

  .filter-content-header > p {
    text-align: left;
    flex: 1;
  }

  .filter-content-header > div {
    text-align: right;
  }

  .filter-content-header > div > button {
    text-align: center;
  }

  .cat-highlight {
    font-weight: 600;
  }

  .city-highlight {
    font-size: 1.7rem;
    font-weight: 600;
  }

  .btn-filter {
    width: 100px;
    background-color: #FFFFFF;
    padding: 10px;
    border: 1px solid #707070;
    border-radius: 8px;
    font-size: 1.5rem;
    color: #363636;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-weight: 600;
    align-items: center;
    outline: none;
  }

  .btn-filter:hover {
    background-color: #FCAB10;
    border: 1px solid #FCAB10;
    color: #FFFFFF;
  }

  .btn-filter i {
    font-size: 1.6rem;
    padding-right: 10px;
  }

  /* Filtro Área do Mapa: Flex C */
  .filter-breadcrumbs {
    display: flex;
    width: 100%;
    max-width: 100vw;
    padding: 12px 20px 6px;
    font-size: 1.4rem;
  }

  .filter-breadcrumbs a {
    font-size: 1.4rem;
    text-decoration: none;
    color: #363636;
  }

  .filter-breadcrumbs a:hover {
    text-decoration: underline;
    color: #00A51C;
  }

  .filter-breadcrumbs-separator {
    padding: 0px 5px;
    font-size: 1.5rem;
  }

  /* Filtro Área da Ordenação: Flex C&I */
  .filter-content-ordering {
    display: flex;
    width: calc(100% - 40px);
    max-width: 100vw;
    padding: 0px 20px 30px;
    justify-content: space-between;
    align-items: center;
  }

  .filter-content-ordering p {
    text-align: left;
    flex-basis: 40%;
    font-size: 1.2rem;
  }

  .filter-content-ordering > div {
    flex: 1;
    text-align: right;
  }

  .form-filter-price {
    color: #363636;
    border: 1px solid #707070;
    border-radius: 8px;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 4px;
    outline: 0;
  }

  /* Filtro Área de Indicadores de Filtro: Flex C */
  .filter-content-tags-area {
    display: flex;
    width: calc(100% - 40px);
    max-width: 100vw;
    padding: 0px 20px;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  /* Filtro Área de Indicadores de Filtro: Flex I */
  .filter-content-tags {
    display: flex;
    align-items: center;
    background-color: #00A51C;
    padding: 0px 8px;
    border-radius: 6px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .filter-content-tags span:nth-child(1) {
    font-size: 1.3rem;
    font-weight: 600;
    padding: 6px 6px 6px 0px;
    color: #FFFFFF;
  }

  .filter-content-tags span:nth-child(2) {
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    padding: 3px 6px 4px 6px;
    color: #FFFFFF;
    cursor: pointer;
  }

  /* Filtro Área de Ofertas: Flex C&I */
  .filter-content-offers-area {
    display: flex;
    max-width: 100vw;
    height: 100%;
    flex-direction: column;
    overflow: auto;
    justify-content: space-between;
  }

  .filter-content-offers-area > * {
    margin-bottom: 0px;
  }

  .filter-content-offers-area > *:last-child {
    margin-bottom: 0px;
  }

  /* Filtro Área de Ofertas: Flex C&I */
  .filter-content-offers {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% - 40px);
    max-width: 100vw;
    align-content: left;
    justify-content: flex-start;
    text-align: left;
    padding: 10px 20px 0px;
  }

  .filter-content-offers > * {
    width: 100%;
    max-width: 100%;
    margin-right: 0%;
    margin-bottom: 26px;
    max-width: 100vw;
  }

  .filter-content-offers > *:nth-child(1n) {
    margin-right: 0;
  }

  /* Filtro Área da Mensagem: Flex C */
  .filter-content-offers-message {
    display: flex;
    flex-direction: column;
    padding: 40px 26% 40px;
    background-color: #FBFBFB;
  }

  /* Filtro Área da Mensagem: Flex I */
  .filter-content-offers-message > * {
    padding: 10px 0px;
  }

  .filter-content-offers-message > *:last-child {
    padding: 0;
  }

  /* Filtro Mensagem "Sem Resultados": Flex C */
  .filter-content-no-offers {
    display: flex;
    max-width: 100vw;
    flex-direction: column;
    justify-content: center;
    padding: 40px 26% 40px;
    background-color: #FBFBFB;
    flex: 1;
    display: none;
  }

  /* Filtro Mensagem "Sem Resultados": Flex I */
  .filter-content-no-offers i {
    font-size: 4rem;
    background-color: #D2D2D2;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 50%;
  }

  /* Filtro Área do Mapa: Flex I */
  .filter-map {
    display: none;
  }

  /* Filtro Topo: Flex Container */
  .filter-top {
    display: flex;
    padding: 70px 20px 0px;
  }

  /* Filtro Modal da Área dos Parâmetros: Flex C */
  .main-filter-params-modal {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100vw;
    height: calc(100% - 60px);
    max-height: 100vh;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
    visibility: hidden;
  }

  /* Filtro Box da Área dos Parâmetros: Flex C */
  .main-filter-params-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    width: 90%;
    max-width: 100vw;
    height: 90%;
    border-radius: 20px;
  }

  .main-filter-params-box > div:nth-child(1) {
    display: flex;
    background-color: #00A51C;
    border-radius: 20px 20px 0 0;
    align-items: center;
    font-size: 2.2rem;
    font-weight: 600;
    color: #FFFFFF;
    padding: 0px 26px;
  }

  .main-filter-params-box > div:nth-child(1) > i {
    font-size: 2.5rem;
    padding-right: 10px;
    cursor: pointer;
  }

  .main-filter-params-box > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    width: calc(100% - 52px);
    max-width: 100vw;
    height: 100%; 
    justify-content: flex-start;
    align-items: flex-start;
    overflow: auto;
    font-size: 4rem;
    font-weight: 600;
    padding: 26px 26px 26px;
  }

  /* Parâmetros */
  .main-filter-params-box > div:nth-child(2) > * {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 40px);
    max-width: 100vw;
    height: auto;
    padding: 26px 20px 26px 20px;
    border-bottom: 0.5px solid #D2D2D2;
  }

  .main-filter-params-box > div:nth-child(2) > *:first-child {
    padding-top: 0px;
  }

  .main-filter-params-box > div:nth-child(2) > *:last-child {
    padding-bottom: 0px;
    border-bottom: none;
  }

  .main-filter-params-box > div:nth-child(2) > * > div:nth-child(2) > button {
    margin: 10px 0px 0px 10px;
  }

  .main-filter-params-box > div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 52px);
    max-width: 100vw;
    border-radius: 0 0 20px 20px;
    padding: 0px 26px;
    border-top: 0.5px solid #D2D2D2;
    background-color: #FBFBFB;
  }

  .btn-filter-box {
    padding: 10px;
    border-radius: 8px;
    font-size: 1.5rem;
    cursor: pointer;
    justify-content: center;
    font-weight: 600;
    align-items: center;
    outline: none;
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
    border: 1px solid rgba(0, 165, 28, 0.35);;
    color: #00A51C;
  }

  .btn-color-white-active:hover {
    background-color: rgba(0, 165, 28, 0.25);
    border: 1px solid rgba(0, 165, 28, 0.45);;
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
}
</style>