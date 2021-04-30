<template>
  <div>
    <!-- MODAL DARKEN -->
    <div @click="toggleLoginMobile()" v-bind:class="{ 'nao-apresenta': !showLoginMobile, 'apresenta': showLoginMobile }" class="bg-modal-darken">
      <div v-bind:class="{ 'menu-mobile-slide-in': showLoginMobile, 'menu-mobile-slide-out': !showLoginMobile }" class="menu-mobile-show-login">
        <span>Entre para comprar insumos agrícolas com melhor qualidade e preço, direto do produtor.</span>
        <button class="btn-show-login">Entrar</button>
        <hr class="divider-line" />
        <ul>
          <li class="menu-mobile-links-items"><router-link to="#">Para vender</router-link></li>
          <li class="menu-mobile-links-items"><router-link to="#">Para comprar</router-link></li>
          <li class="menu-mobile-links-items"><router-link to="#">Para prestar serviço</router-link></li>
          <li class="menu-mobile-links-items"><router-link to="#">Para anunciar</router-link></li>
          <li class="menu-mobile-links-items"><router-link to="#">Sobre o Campo Livre</router-link></li>
          <li class="menu-mobile-links-items"><router-link to="#">Política de Privacidade</router-link></li>
          <li class="menu-mobile-links-items"><router-link to="#">Política de Cookies</router-link></li>
          <li class="menu-mobile-links-items"><router-link to="#">Termos de Uso</router-link></li>
          <li class="menu-mobile-links-items"><router-link to="#">Ajuda</router-link></li>
        </ul>
      </div>
    </div>

    <!-- MENU DESKTOP -->
    <div class="menu-desktop">
      <router-link to="/">
        <img id="campolivre-logo" src="@/assets/campolivre-logo.png" alt="Logotipo da empresa Campo Livre que possui círculos conectados em rede com ícones do campo, indicando a área de atuação que é auxiliar produtores rurais a vender seus produtos diretamente para varejistas e atacadistas." />
      </router-link>
      <div class="menu-desktop-links">
        <ul>
          <li class="menu-desktop-links-items"><router-link to="#">Para vender</router-link></li>
          <li class="menu-desktop-links-items"><router-link to="#">Para comprar</router-link></li>
          <li class="menu-desktop-links-items"><router-link to="#">Para prestar serviço</router-link></li>
          <li class="menu-desktop-links-items"><router-link to="#">Para anunciar</router-link></li>
          <li class="menu-desktop-links-items"><router-link to="#">Sobre o Campo Livre</router-link></li>
        </ul>
      </div>
      <span class="menu-desktop-help"><router-link to="#">Ajuda</router-link></span>
      <div class="menu-desktop-btn-account">
        <button @click="toggleLogin()" class="btn-account">
          <i class="far fa-user btn-account-icon"></i> 
          <span>Conta</span>
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
    <div v-bind:class="{'fadeOut': !showLoginTrigger, 'apresenta': showLoginTrigger, 'fadeIn': showLoginTrigger }" class="menu-desktop-show-login">
      <div
        @mouseleave="hideLogin()">
        <span>Entre para comprar insumos agrícolas com melhor qualidade e preço, direto do produtor.</span>
        <button class="btn-show-login">Entrar</button>  
      </div>
    </div>

    <!-- MENU MOBILE -->
    <div class="menu-mobile">
      <i @click="toggleLoginMobile()" class="fas fa-bars btn-hamburger-menu"></i>
      <img id="campolivre-logo" src="@/assets/campolivre-logo.png" alt="Logotipo da empresa Campo Livre que possui círculos conectados em rede com ícones do campo, indicando a área de atuação que é auxiliar produtores rurais a vender seus produtos diretamente para varejistas e atacadistas." />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLoginTrigger: false,
      fadeOutLoginTrigger: false,
      showLoginMobile: false
    }
  },
  methods: {
    toggleLogin() {
      this.showLoginTrigger = !this.showLoginTrigger,
      console.log(this.showLoginTrigger)
    },
    toggleLoginMobile() {
      this.showLoginMobile = !this.showLoginMobile
    },
    hideLogin() {
      this.showLoginTrigger = false
      this.fadeOutLoginTrigger = true
    }
  }
}
</script>

<style>
.apresenta { visibility: visible; }
.nao-apresenta { visibility: hidden; }

/* Menu Desktop: Flex Container */
.menu-desktop {
  display: flex;
  position: fixed;
  width: calc(100% - 40px);
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 0.5px solid #D2D2D2;
  background-color: #FFFFFF;
  z-index: 50;
}

.menu-desktop > * {
  flex: 0;
}

/* Menu Desktop: Flex Items */
#campolivre-logo {
  width: 177px;
  height: 30px;
  padding: 0px 20px 0px 0px;
}

.menu-desktop-help a {
  color: #363636;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 10px 10px;
}

.menu-desktop-help a:hover {
  background-color: #EEEEEE;
  padding: 10px 10px;
  border-radius: 10px;
}

.menu-desktop-btn-account {
  padding: 0px 0px 0px 10px;
  outline: none;
}

.menu-desktop-help a.router-link-exact-active {
  color: #00A51C;
}

.btn-account {
  width: 110px;
  background-color: #FFFFFF;
  padding: 10px;
  border: 1px solid #707070;
  border-radius: 32px;
  font-size: 1.5rem;
  color: #363636;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
}

.btn-account:hover {
  background-color: #FAFAFA;
}

.btn-account span {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  padding: 0px 6px;
}

.btn-account-icon {
  background-color: #EEEEEE;
  border-radius: 24px;
  font-size: 1.2rem;
  color: #363636;
  padding: 6px;
}

.menu-desktop .menu-desktop-links {
  flex: 1;
}

/* Menu Desktop: Flex Container - Menu Links */
.menu-desktop-links {
  display: flex;
  height: 40px;
  align-items: center;
}

/* Menu Desktop: Flex Items - Menu Links */
.menu-desktop-links ul {
  flex: 1;
  list-style-type: none;
  display: flex;
}

.menu-desktop-links li a {
  color: #363636;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 10px 20px;
}

.menu-desktop-links li a:hover {
  background-color: #EEEEEE;
  padding: 10px 20px;
  border-radius: 10px;
}

.menu-desktop-links li a.router-link-exact-active {
  color: #00A51C;
}

.menu-mobile {
  display: none;
}

/* Menu Desktop Show: Flex Container */
.menu-desktop-show-login {
  display: flex;
  position: fixed;
  visibility: hidden; 
  top: 60px;
  width: calc(100% - 30px);
  flex: 1;
  justify-content: flex-end;
  padding: 10px 20px 0px 10px;
  -webkit-animation-duration: 1s; animation-duration: 1s;
  -webkit-animation-fill-mode: both; animation-fill-mode: both;
  z-index: 10;
}

/* Menu Desktop Show: Flex Items + Container */
.menu-desktop-show-login div {
  background-color: #FFFFFF;
  box-shadow: 10px 10px 8px #888888;
  -webkit-box-shadow: 0px 1px 6px #969696;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  padding: 16px;
}

/* Menu Desktop Show: Flex Items */
.menu-desktop-show-login span {
  text-align: left;
  color: #707070;
  font-size: 1.3rem;
}

.btn-show-login {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  background-color: #00A51C;
  border-radius: 8px;
  width: 100%;
  font-size: 2rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
  border: none;
  outline: none;
}

.btn-show-login:hover {
  background-color: #FCAB10;
}

/* Menu Mobile: Flex Container */
.bg-modal-darken {
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  z-index: 20;
}

/* Menu Mobile: Flex Items */
.menu-mobile-show-login {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(320px - 50px);
  min-height: 100%;
  padding: 80px 25px 25px; 
  background-color: #FFFFFF;
}

.menu-mobile-show-login span {
  text-align: left;
  color: #707070;
  font-size: 1.3rem;
}

.divider-line {
  width: 100%;
  border: none;
  border-top: 0.1rem solid #E0E0E0;
  margin: 20px 0px;
}

.menu-mobile-show-login ul {
  flex: 1;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.menu-mobile-show-login li a {
  color: #363636;
  text-decoration: none;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 0px;
}

.menu-mobile-show-login li a:hover {
  background-color: #EEEEEE;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
}

/* Menu Mobile: Efeitos */
.menu-mobile-slide-in {
  position: absolute;
  left: -320px;
  width: 320px;
  -webkit-animation: efeito-menu-mobile-slideIn 0.5s forwards;
  -webkit-animation-delay: 0s;
  animation: efeito-menu-mobile-slideIn 0.5s forwards;
  animation-delay: 0s;
}

@-webkit-keyframes efeito-menu-mobile-slideIn { 100% { left: 0; } }
@-o-keyframes efeito-menu-mobile-slideIn { 100% { left: 0; } }
@-ms-keyframes efeito-menu-mobile-slideIn { 100% { left: 0; } }
@-moz-keyframes efeito-menu-mobile-slideIn { 100% { left: 0; } }
@keyframes efeito-menu-mobile-slideIn { 100% { left: 0; } }

.menu-mobile-slide-out {
  position: absolute;
  left: 0px;
  width: 320px;
  -webkit-animation: efeito-menu-mobile-slideOut 0.5s forwards;
  -webkit-animation-delay: 0s;
  animation: efeito-menu-mobile-slideOut 0.5s forwards;
  animation-delay: 0s;
}

@-webkit-keyframes menu-mobile-slideOut { 100% { left: -320px; visibility: hidden; } }
@-o-keyframes menu-mobile-slideOut { 100% { left: -320px; visibility: hidden; } }
@-ms-keyframes menu-mobile-slideOut { 100% { left: -320px; visibility: hidden; } }
@-moz-keyframes menu-mobile-slideOut { 100% { left: -320px; visibility: hidden; } }
@keyframes menu-mobile-slideOut { 100% { left: -320px; visibility: hidden; } }

@media (max-width: 80rem) {
  /* Menu Desktop: Flex Container */
  .menu-desktop {
    display: none;
  }

  /* Menu Mobile: Flex Container */
  .menu-mobile {
    display: flex;
    position: fixed;
    width: calc(100% - 40px);
    height: 40px;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 0.5px solid #D2D2D2;
    background-color: #FFFFFF;
    z-index: 50;
  }

  /* Menu Mobile: Flex Items */
  .btn-hamburger-menu {
    font-size: 1.8rem;
    color: #363636;
    padding-right: 20px;
    cursor: pointer;
  }
}

@media (max-width: 32rem) {
  /* Menu Desktop: Flex Container */
  .menu-desktop {
    display: none;
  }

  /* Menu Mobile: Flex Container */
  .menu-mobile {
    display: flex;
    position: fixed;
    width: calc(100% - 40px);
    height: 40px;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 0.5px solid #D2D2D2;
    background-color: #FFFFFF;
    z-index: 50;
  }

  /* Menu Mobile: Flex Items */
  .btn-hamburger-menu {
    font-size: 1.8rem;
    color: #363636;
    padding-right: 20px;
    cursor: pointer;
  }
}
</style>