<template>
  <div class="header-login">
    <i @click="$router.go(-1)" class="fas fa-arrow-left"></i>
    <router-link to="/"><i class="fas fa-times"></i></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Cabeçalho da Página de Login: Flex C&I */
.header-login {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  border-bottom: 0.1rem solid #d2d2d2;
}

.header-login i {
  font-size: 1.8rem;
  margin: 0rem 2rem;
  padding: 1rem;
  cursor: pointer;
}

.header-login i:hover {
  background-color: #eeeeee;
  padding: 1rem;
  border-radius: 1rem;
}

.header-login i:active {
  color: #fcab10;
}
</style>
