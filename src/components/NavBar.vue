<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <img :src="require('@/assets/logo.png')" alt="logo" class="icono-navbar"> <router-link class="navbar-brand" to="/">DeporNET</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact>Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/vivo" class="nav-link">Vivo</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacto" class="nav-link">Contacto</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/equipos" class="nav-link">Equipos</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.icono-navbar {
  max-height: 30px; /* Ajusta el tamaño máximo de la imagen según tus necesidades */
  margin-right: 10px; /* Espaciado entre el icono y el texto */
}
</style>
