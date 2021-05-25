<template>
  <div class="container-login">
    <!-- NAVEGAÇÃO LOGIN -->
    <NavBarLogin />

    <!-- CONTEÚDO LOGIN -->
    <div class="content-login">
      <img
        src="@/assets/campolivre-logo.png"
        alt="Logotipo da empresa Campo Livre que possui círculos conectados em rede com ícones do campo, indicando a área de atuação que é auxiliar produtores rurais a vender seus produtos diretamente para varejistas e atacadistas."
      />
      <h2>Acesse ou crie sua conta</h2>

      <p class="content-login-text">
        Digite suas credenciais abaixo para avançar:
      </p>

      <form>
        <p v-show="showErrorLogin" class="alert-message red">
          O email e senha informados estão incorretos. Tente novamente!
        </p>

        <input
          class="content-input-login"
          type="text"
          placeholder="Login"
          @change="toggleErrorLogin()"
          v-model="dataLogin"
        />
        <input
          class="content-input-password"
          type="password"
          placeholder="Senha"
        />
        <p class="content-input-info">
          Você receberá um código em seu e-mail cadastrado para seguir o acesso
        </p>
      </form>

      <button class="btn-login btn-color-green">
        Receber código de acesso
      </button>

      <router-link class="content-login-forgot-password" to="/esqueceuSenha"
        >Esqueceu a sua senha?</router-link
      >
    </div>

    <!-- RODAPÉ LOGIN -->
    <FooterLogin />
  </div>
</template>

<script>
import NavBarLogin from "@/components/NavBarLogin.vue";
import FooterLogin from "@/components/FooterLogin.vue";

export default {
  data() {
    return {
      dataLogin: null,
      showErrorLogin: false,
    };
  },
  methods: {
    toggleErrorLogin() {
      if (this.dataLogin == "erro") {
        this.showErrorLogin = true;
      } else {
        this.showErrorLogin = false;
      }
    },
  },
  components: {
    NavBarLogin,
    FooterLogin,
  },
};
</script>

<style scoped>
/* Container da Página de Login: Flex C&I */
.container-login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

/* Formulário da Página de Login: Flex C&I */
.content-login {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.content-login > form {
  width: 28%;
  text-align: left;
}

.content-login > form .content-input-info {
  text-align: left;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.content-login > form .alert-message {
  text-align: left;
  padding: 1rem;
  width: 100%;
  font-size: 1.3rem;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
}

.content-login > form > .content-input-login {
  width: 100%;
  font-size: 1.6rem;
  padding: 1rem 1.6rem 1rem 1.6rem;
  border-radius: 0.8rem 0.8rem 0 0;
  border: 0.1rem solid #707070;
  outline: 0;
}

.content-login > form > input::placeholder {
  color: #999999;
}

.content-login > form > .content-input-password {
  width: 100%;
  font-size: 1.6rem;
  padding: 1rem 1.6rem 1rem 1.6rem;
  border-radius: 0 0 0.8rem 0.8rem;
  border: 0.1rem solid #707070;
  border-top: 0;
  outline: 0;
}

/* Corpo da Página de Login: Flex C&I */
.content-login {
  flex: 1;
  width: calc(100% - 4rem);
  padding: 4rem 2rem;
}

.content-login img {
  padding-bottom: 4rem;
}

.content-login-text {
  padding-top: 1rem;
}

.content-login-forgot-password {
  margin-top: 1rem;
  font-size: 1.3rem;
  color: #707070;
  text-decoration: none;
}

.content-login-forgot-password:hover {
  color: #fcab10;
  text-decoration: underline;
}

.btn-login {
  padding: 10px;
  border-radius: 8px;
  font-size: 1.5rem;
  cursor: pointer;
  justify-content: center;
  font-weight: 600;
  align-items: center;
  outline: none;
}

.btn-color-green {
  background-color: #00a51c;
  border: 1px solid #00a51c;
  color: #ffffff;
}

.btn-color-green:hover {
  background-color: #fcab10;
  border: 1px solid #fcab10;
  color: #ffffff;
}

.red {
  background-color: #fab7b2;
  border: 0.1rem solid #f24236;
  color: #363636;
}

@media (max-width: 80rem) {
  .content-login > form {
    width: 60%;
  }
}

@media (max-width: 32rem) {
  .content-login > form {
    width: 90%;
  }
}
</style>
