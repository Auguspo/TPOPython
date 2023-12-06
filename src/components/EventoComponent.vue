<template>
  <div class="evento">
    <div class="live-badge bg-danger text-white">LIVE</div>
    <a :href="eventoLink">
      <img :src="require(`@/assets/${eventoImagenSrc}`)" :alt="`Evento ${eventoNumero}`" class="img-fluid rounded" />
    </a>
    <h3>{{ eventoTitulo }}</h3>
    <p>{{ eventoDescripcion }}</p>
  </div>
</template>

<script>
export default {
  props: {
    eventoNumero: {
      type: Number,
      required: true,
    },
    eventoTitulo: {
      type: String,
      required: true,
    },
    eventoDescripcion: {
      type: String,
      required: true,
    },
    eventoImagenSrc: {
      type: String,
      required: true,
    },
    eventoLink: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para el componente si es necesario */
.evento {
  position: relative;
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
}

.live-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: red;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  z-index: 1;
}

.evento img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
