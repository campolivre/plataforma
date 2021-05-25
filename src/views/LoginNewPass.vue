<template>
  <div class="container-login">
    <!-- CONTEÚDO RECUPERA SENHA -->
    <div class="content-newpass">
      <router-link to="/">
        <img
          src="@/assets/campolivre-logo.png"
          alt="Logotipo da empresa Campo Livre que possui círculos conectados em rede com ícones do campo, indicando a área de atuação que é auxiliar produtores rurais a vender seus produtos diretamente para varejistas e atacadistas."
        />
      </router-link>
      <h2>Cadastrar Nova Senha</h2>

      <p class="newpass-login-text">
        Finalize o processo de Recuperação de Acesso cadastrando uma nova senha:
      </p>

      <form>
        <p v-show="showError" class="alert-message red">
          As senhas informadas não correspondem. Tente novamente!
        </p>

        <p v-show="showMiss" class="alert-message red">
          Você deve atender as critérios mínimos da senha para continuar.
        </p>

        <p v-show="showSuccess" class="alert-message green">
          Nova senha registrada com sucesso!
        </p>

        <input
          class="newpass-input-login"
          type="password"
          placeholder="Nova senha"
          v-model="newPassword"
          style="margin-bottom: 1rem"
        />
        <input
          class="newpass-input-login"
          type="password"
          placeholder="Repetir nova senha"
          v-model="newPasswordRepeated"
        />
        <p class="newpass-input-info">
          A senha deve conter no mínimo 6 caracteres, incluindo números e
          especiais
        </p>
      </form>

      <button
        v-show="!showSuccess"
        @click="checkNewPass($event)"
        class="btn-login btn-color-green"
      >
        {{ newPasswordBtnText }}
      </button>

      <router-link v-show="showSuccess" :to="newPasswordUrl">
        <button @click="checkNewPass($event)" class="btn-login btn-color-green">
          {{ newPasswordBtnText }}
        </button>
      </router-link>

      <router-link
        v-show="!showSuccess"
        class="newpass-login-forgot-password"
        to="/"
        >Voltar para a Home</router-link
      >
    </div>

    <FooterLogin />
  </div>
</template>

<script>
import FooterLogin from "@/components/FooterLogin.vue";

export default {
  data() {
    return {
      newPassword: null,
      newPasswordRepeated: null,
      showError: false,
      showMiss: false,
      showSuccess: false,
      newPasswordBtnText: "Registrar nova senha",
      newPasswordUrl: "novaSenha",
    };
  },
  methods: {
    checkNewPass(evt) {
      var ref = this;

      if (this.newPassword == null || this.newPassword.length < 6) {
        this.showSuccess = false;
        this.showError = false;
        this.showMiss = true;
        return false;
      }

      if (
        this.newPasswordRepeated == null ||
        this.newPasswordRepeated.length < 6
      ) {
        this.showSuccess = false;
        this.showError = false;
        this.showMiss = true;
        return false;
      }

      if (this.newPassword === this.newPasswordRepeated) {
        this.showSuccess = true;
        this.showError = false;
        this.showMiss = false;
        this.newPasswordBtnText = "Voltar para o Login";
        setTimeout(function () {
          ref.generateUrl();
        }, 1000);
      } else {
        this.showSuccess = false;
        this.showError = true;
        this.showMiss = false;
      }
    },
    generateUrl() {
      this.newPasswordUrl = "/login";
    },
  },
  components: {
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
.content-newpass {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  width: calc(100% - 4rem);
  padding: 10rem 2rem;
}

.content-newpass img {
  padding-bottom: 4rem;
}

.newpass-login-text {
  padding-top: 1rem;
}

.content-newpass > form {
  width: 28%;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.content-newpass > form .alert-message {
  text-align: left;
  padding: 1rem;
  width: calc(100% - 2rem);
  font-size: 1.3rem;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
}

.content-newpass > form > .newpass-input-login {
  width: calc(100% - 3.2rem);
  font-size: 1.6rem;
  padding: 1rem 1.6rem 1rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid #707070;
  outline: 0;
}

.content-newpass > form > input::placeholder {
  color: #999999;
}

.newpass-login-forgot-password {
  margin-top: 1rem;
  font-size: 1.3rem;
  color: #707070;
  text-decoration: none;
}

.content-newpass > form .newpass-input-info {
  text-align: left;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.newpass-login-forgot-password:hover {
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

.green {
  background-color: #61c972;
  border: 0.1rem solid #00a51c;
  color: #ffffff;
}

@media (max-width: 80rem) {
  .content-newpass > form {
    width: 60%;
  }
}

@media (max-width: 32rem) {
  .content-newpass > form {
    width: 90%;
  }
}
</style>
