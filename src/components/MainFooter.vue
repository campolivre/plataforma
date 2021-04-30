<template>
  <div>
    <div class="main-footer">
      <div class="main-footer-company-info">
        <img src="@/assets/campolivre-logo.png" /><br />
        <p>CNPJ: 00.000.000/0000-00<br />
        Rua Endereço, 000 - Bairro - Cidade / UF<br />
        CEP 00000-000</p>
      </div>
      <div class="main-footer-social">
        <span><i class="fab fa-facebook-square"></i> <i class="fab fa-instagram"></i> <i class="fab fa-youtube"></i></span>
      </div>
    </div>
    <div class="main-copyright">
      <ul>
        <li class="footer-mobile-links-items"><router-link to="#">Política de Privacidade</router-link></li>
        <li class="footer-mobile-links-items"><router-link to="#">Termos de Uso</router-link></li>
        <li class="footer-mobile-links-items"><router-link to="#">Política de Cookies</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
/* Rodapé: Flex Container */
.main-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F0F0F0;
  padding: 20px 30px;
}

/* Rodapé: Flex Items */
.main-footer-company-info {
  text-align: left;
}
.main-footer-company-info img {
  padding-bottom: 15px;
}
.main-footer-company-info p {
  font-size: 1.3rem;
}
.main-footer-social i {
  color: #363636;
  font-size: 3.6rem;
  padding-left: 10px;
}

/* Copyright: Flex Container */
.main-copyright {
  display: flex;
  padding: 15px 30px 15px;
  background-color: #F0F0F0;
  border-top: 1px solid #D2D2D2;
}

/* Copyright: Flex Items */
.main-copyright ul {
  list-style-type: none;
  display: flex;
  align-items: flex-start;
}
.main-copyright li a {
  color: #363636;
  text-decoration: none;
  width: 100%;
  font-size: 1.3rem;
  padding-right: 25px; 
}
.main-copyright li a:hover {
  text-decoration: underline;
}

@media (max-width: 32rem) {
  /* Rodapé: Flex Container */
  .main-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F0F0F0;
    padding: 20px 30px;
    border-top: 1px solid #D2D2D2;
  }

  /* Rodapé: Flex Items */
  .main-footer-company-info {
    text-align: center;
    padding-bottom: 15px;
  }
  .main-footer-company-info img {
    padding-bottom: 15px;
  }
  .main-footer-company-info p {
    font-size: 1.3rem;
  }

  .main-copyright {
    display: none;
  }
}
</style>