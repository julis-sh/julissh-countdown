<template>
  <div class="app">
    <div class="navbar">
      <div class="navbar-logo">
        <router-link to="/">
          <img src="./assets/logo.png">
        </router-link>
      </div>
      <ul>
          <li><router-link to="/countdown/">Home</router-link></li>
          <li><router-link to="/countdown/impressum">Impressum</router-link></li>
          <li><router-link to="/countdown/datenschutz">Datenschutz</router-link></li>
      </ul>
      <a href="mailto:info@julis-sh.de">
        <button class="hire-btn">Kontakt aufnehmen</button>
      </a>
    </div>
    <router-view/>
  </div>
</template>

<style>
@font-face {
    font-family: Anybody;
    src: url(assets/Anybody-ExtraBold.ttf);
    font-weight:400;
}
.app {
  text-align: center;
}
.flex-container {
  display: flex;
  justify-content: center;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
}
img {
  max-width: 33%;
  height: auto;
}
.logo {
  height: auto;
}
body {
  background: linear-gradient(to bottom right, #FFFFFF, #FFF7B2);
}
font {
  font-family: Anybody;
  color: #E6007E;
  font-size: 40px;
}
*{
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
}
.textpage {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container {
    position: relative;
    width: 85%;
    height: 65%;
    background: #fff;
    padding: 28px 32px;
    overflow: hidden;
    border-radius: 18px;
    color: #E6007E;
    transition: 0.6s ease-out;
    overflow-y: scroll;
}
.navbar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 50px;
}

.navbar ul{
    display: flex;
}

.navbar ul li{
    list-style: none;
}

.navbar ul li a{
    text-decoration: none;
    color: #E6007E;
    font-size: 16px;
    margin-right: 25px;
    transition: color 0.3s ease;
}

.navbar ul li:hover a{
    color: #E6007E;
}

.navbar ul li:last-child a{
    margin: 0;
}

.navbar-logo{
    max-width: 200px;
}


.hire-btn{
    background: #E6007E;
    padding: 6px 30px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 6px;
    transition: background-color 0.3s ease;
    color: #FFF7B2;
}

.hire-btn:hover{
    background: #E6008E;
}

@media screen and (max-width: 780px) {
    
  .navbar button{
      display: none;
  }
  
  .navbar img {
      display: none;
  }
}

@media screen and (max-width: 650px) {
    
  .navbar{
      justify-content: center;
  }

  .navbar img{
      display: none;
  }

  .navbar ul li a{
      font-size: 14px;
  }
}
</style>
