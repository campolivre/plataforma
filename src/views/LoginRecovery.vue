<template>
  <div class="container-login">
    <NavBarLogin />

    <!-- CONTEÚDO RECUPERA SENHA -->
    <div class="content-recovery">
      <img
        src="@/assets/campolivre-logo.png"
        alt="Logotipo da empresa Campo Livre que possui círculos conectados em rede com ícones do campo, indicando a área de atuação que é auxiliar produtores rurais a vender seus produtos diretamente para varejistas e atacadistas."
      />
      <h2>Recuperação de Senha</h2>

      <p class="recovery-login-text">
        Digite seu e-mail cadastrado para recuperar a senha:
      </p>

      <form>
        <p v-show="showError" class="alert-message red">
          Esse e-mail não está registrado em nossa plataforma. Crie a sua!
        </p>

        <p v-show="showSuccess" class="alert-message green">
          E-mail enviado com sucesso!
        </p>

        <input
          class="recovery-input-login"
          type="text"
          placeholder="E-mail cadastrado"
          v-model="emailLogin"
        />
        <p class="recovery-input-info">
          Você receberá um link em seu e-mail cadastrado para registrar uma nova
          senha
        </p>
      </form>

      <button @click="checkEmailRecovery()" class="btn-login btn-color-green">
        Recuperar senha
      </button>

      <router-link class="recovery-login-forgot-password" to="/login"
        >Voltar para o Login</router-link
      >
    </div>

    <FooterLogin />
  </div>
</template>

<script>
import NavBarLogin from "@/components/NavBarLogin.vue";
import FooterLogin from "@/components/FooterLogin.vue";

export default {
  data() {
    return {
      emailLogin: null,
      showError: false,
      showSuccess: false,
    };
  },
  methods: {
    checkEmailRecovery() {
      if (this.emailLogin != null) {
        if (this.emailLogin == "walther@plannmarketing.com.br") {
          this.showError = false;
          this.showSuccess = true;
        } else {
          this.showError = true;
          this.showSuccess = false;
        }
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
.content-recovery {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  width: calc(100% - 4rem);
  padding: 4rem 2rem;
}

.content-recovery img {
  padding-bottom: 4rem;
}

.recovery-login-text {
  padding-top: 1rem;
}

.content-recovery > form {
  width: 28%;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.content-recovery > form .recovery-input-info {
  text-align: left;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.content-recovery > form .alert-message {
  text-align: left;
  padding: 1rem;
  width: calc(100% - 2rem);
  font-size: 1.3rem;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
}

.content-recovery > form > .recovery-input-login {
  width: calc(100% - 3.2rem);
  font-size: 1.6rem;
  padding: 1rem 1.6rem 1rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid #707070;
  outline: 0;
}

.content-recovery > form > input::placeholder {
  color: #999999;
}

.recovery-login-forgot-password {
  margin-top: 1rem;
  font-size: 1.3rem;
  color: #707070;
  text-decoration: none;
}

.recovery-login-forgot-password:hover {
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
  .content-recovery > form {
    width: 60%;
  }
}

@media (max-width: 32rem) {
  .content-recovery > form {
    width: 90%;
  }
}
</style>
