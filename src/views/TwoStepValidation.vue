<template>
  <div class="container-login">
    <!-- CONTEÚDO RECUPERA SENHA -->
    <div class="content-twostep">
      <router-link to="/"
        ><img
          src="@/assets/campolivre-logo.png"
          alt="Logotipo da empresa Campo Livre que possui círculos conectados em rede com ícones do campo, indicando a área de atuação que é auxiliar produtores rurais a vender seus produtos diretamente para varejistas e atacadistas."
      /></router-link>

      <h2>Validação de Acesso</h2>

      <p class="twostep-text">
        Digite abaixo o código de validação enviado para seu e-mail com 6
        dígitos.<br />O código expira em 10 minutos.
      </p>

      <p v-show="showError" class="alert-message red">
        Esse código está errado ou expirado.
        <router-link to="/login">Solicite novo código de acesso!</router-link>
      </p>

      <p v-show="showSuccess" class="alert-message green">
        Correto! Aguarde, que você será redirecionado em instantes.
      </p>

      <form>
        <div class="form-numbers">
          <input
            autofocus
            @keypress="checkCode($event)"
            @keyup="toggleFocus($event)"
            maxlength="1"
            class="twostep-input-login"
            type="text"
            autocomplete="off"
            list="autocompleteOff"
            v-model="twoStepnumber1"
            :disabled="validationSucess"
          />
          <input
            @keypress="checkCode($event)"
            @keyup="toggleFocus($event)"
            maxlength="1"
            class="twostep-input-login"
            type="text"
            autocomplete="off"
            list="autocompleteOff"
            v-model="twoStepnumber2"
            :disabled="validationSucess"
          />
          <input
            @keypress="checkCode($event)"
            @keyup="toggleFocus($event)"
            maxlength="1"
            class="twostep-input-login"
            type="text"
            autocomplete="off"
            list="autocompleteOff"
            v-model="twoStepnumber3"
            :disabled="validationSucess"
          />
          <input
            @keypress="checkCode($event)"
            @keyup="toggleFocus($event)"
            maxlength="1"
            class="twostep-input-login"
            type="text"
            autocomplete="off"
            list="autocompleteOff"
            v-model="twoStepnumber4"
            :disabled="validationSucess"
          />
          <input
            @keypress="checkCode($event)"
            @keyup="toggleFocus($event)"
            maxlength="1"
            class="twostep-input-login"
            type="text"
            autocomplete="off"
            list="autocompleteOff"
            v-model="twoStepnumber5"
            :disabled="validationSucess"
          />
          <input
            @keypress="checkCode($event)"
            @keyup="toggleFocus($event)"
            maxlength="1"
            class="twostep-input-login"
            type="text"
            autocomplete="off"
            list="autocompleteOff"
            v-model="twoStepnumber6"
            :disabled="validationSucess"
          />
        </div>
      </form>

      <button
        v-show="showError"
        @click="checkEmailRecovery()"
        class="btn-login btn-color-green"
      >
        Voltar para o login
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";

export default {
  data() {
    return {
      emailLogin: null,
      showError: false,
      showSuccess: false,
      triggerFocus: false,
      twoStepnumber1: null,
      twoStepnumber2: null,
      twoStepnumber3: null,
      twoStepnumber4: null,
      twoStepnumber5: null,
      twoStepnumber6: null,
      validationCode: null,
      validationSucess: false,
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
    checkCode(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;

      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        this.triggerFocus = true;
        return true;
      }
    },
    fnTeste() {
      this.$router.push("login");
    },
    toggleFocus(e) {
      var ref = this;

      if (this.triggerFocus == true) {
        this.triggerFocus = false;

        const inputs = Array.from(
          e.target.form.querySelectorAll('input[type="text"]')
        );
        const index = inputs.indexOf(e.target);

        if (index < inputs.length) {
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          } else {
            inputs[0].focus();
          }
        }

        this.validationCode =
          this.twoStepnumber1 +
          this.twoStepnumber2 +
          this.twoStepnumber3 +
          this.twoStepnumber4 +
          this.twoStepnumber5 +
          this.twoStepnumber6;

        if (
          (this.twoStepnumber1 != null && this.twoStepnumber2 != null,
          this.twoStepnumber3 != null,
          this.twoStepnumber4 != null,
          this.twoStepnumber5 != null,
          this.twoStepnumber6 != null)
        ) {
          if (this.validationCode == 159753) {
            this.showError = false;
            this.showSuccess = true;
            this.validationSucess = true;

            setTimeout(function () {
              ref.fnTeste();
            }, 3000);
          } else {
            this.showError = true;
            this.showSuccess = false;
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.container-login {
  width: calc(100vw - 50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding: 0rem 25%;
}

.content-twostep {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10rem 0rem;
}

.content-twostep img {
  padding-bottom: 4rem;
}

.twostep-text {
  padding-top: 1rem;
}

.alert-message {
  max-width: 58rem;
  text-align: left;
  padding: 1rem;
  width: calc(100% - 2rem);
  font-size: 1.3rem;
  border-radius: 0.8rem;
  margin: 2rem 0rem;
}

.alert-message a {
  color: #363636;
  font-weight: 600;
  font-size: 1.3rem;
  text-decoration: underline;
}

.content-twostep > form {
  width: calc(100% - 4rem);
  padding: 0rem 2rem;
}

.content-twostep > form .form-numbers {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.form-numbers > .twostep-input-login {
  width: 8%;
  height: 100px;
  font-size: 6rem;
  padding: 1rem 1.6rem 1rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid #707070;
  outline: 0;
  text-align: center;
}

.form-numbers > .twostep-input-login:focus {
  border: 0.1rem solid #fcab10;
}

.form-numbers > .twostep-input-login:disabled {
  border: 0.1rem solid #00a51c;
  background-color: #d6ffdd;
}

.alert-message a:hover {
  color: #707070;
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
  .container-login {
    width: calc(100vw - 30%);
    padding: 0rem 15%;
  }

  .form-numbers > .twostep-input-login {
    width: 8%;
    height: 100px;
    font-size: 4rem;
    padding: 1rem 1.6rem 1rem 1.6rem;
    border-radius: 0.8rem;
    border: 0.1rem solid #707070;
    outline: 0;
    text-align: center;
  }
}
@media (max-width: 32rem) {
  .container-login {
    justify-content: center;
    width: calc(100vw - 8rem);
    padding: 0rem 4rem;
  }

  .content-twostep > form {
    width: 100%;
    padding: 0rem;
  }

  .form-numbers > .twostep-input-login {
    width: 14px;
    height: 60px;
    font-size: 2.4rem;
  }
}
</style>
