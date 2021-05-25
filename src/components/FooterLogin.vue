<template>
  <div class="footer-login">
    <p>
      Ao continuar você concorda com os
      <router-link to="/">Termos de Uso</router-link> e
      <router-link to="/">Política de Privacidade</router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Rodapé da Página de Login: Flex C&I */
.footer-login {
  align-self: center;
  width: 18%;
  padding: 2rem 0rem;
}

.footer-login a {
  font-size: 1.6rem;
  color: #00a51c;
  text-decoration: underline;
}

.footer-login a:hover {
  color: #fcab10;
}

@media (max-width: 80rem) {
  .footer-login {
    width: 33%;
  }
}

@media (max-width: 32rem) {
  .footer-login {
    width: 75%;
  }
}
</style>
