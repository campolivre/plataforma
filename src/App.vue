<template>
  <div id="app">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div-->
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap');

* {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 62.5%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

/* Insere os CSSs de Fade In */
@-webkit-keyframes fadeIn { 0% {opacity: 0; } 1% { visibility: visible; opacity: 0; } 100% { opacity: 1; visibility: visible; } }
@-o-keyframes fadeIn { 0% {opacity: 0; } 1% { visibility: visible; opacity: 0; } 100% { opacity: 1; visibility: visible; } }
@-ms-keyframes fadeIn { 0% {opacity: 0; } 1% { visibility: visible; opacity: 0; } 100% { opacity: 1; visibility: visible; } }
@-moz-keyframes fadeIn { 0% {opacity: 0; } 1% { visibility: visible; opacity: 0; } 100% { opacity: 1; visibility: visible; ;} }
@keyframes fadeIn { 0% {opacity: 0; } 1% { visibility: visible; opacity: 0; } 100% { opacity: 1; visibility: visible; } }

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

/* Insere os CSSs de Fade Out */
@-webkit-keyframes fadeOut { 0% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }
@-o-keyframes fadeOut { 0% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }
@-ms-keyframes fadeOut { 0% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }
@-moz-keyframes fadeOut { 0% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }
@keyframes fadeOut { 0% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  font-size: 3.6rem;
  color: #363636;
}

h2 {
  font-size: 2.8rem;
  color: #363636;
}

h3 {
  font-size: 2.2rem;
  color: #363636;
}

p {
  color: #363636;
  font-size: 1.6rem;
}
</style>
