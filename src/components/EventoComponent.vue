<template>
  <div class="evento-component">
    <div class="evento-info text-center">
      <h3>{{ evento && evento.nombre }}</h3>
      <img v-if="evento" :src="evento.imagen" :alt="evento.nombre" class="evento-imagen" />
      <div v-if="eventoEnVivo" class="live-cartel">LIVE</div>
      <p v-if="evento">{{ evento.descripcion }}</p>
      <p v-if="evento"> {{ formatearFecha(evento.fecha_horario) }}</p>
    </div>
    <div class="evento-actions text-center mt-3">
      <button @click="editarEvento" class="btn btn-primary mr-2">Editar</button>
      <button @click="eliminarEvento" class="btn btn-danger">Eliminar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    evento: Object,
  },
  computed: {
    eventoEnVivo() {
    
      const horaEvento = new Date(this.evento.fecha_horario).getTime();
      const horaActual = new Date().getTime();
      const unaHoraEnMilisegundos = 60 * 60 * 1000;

      return horaActual >= horaEvento && horaActual <= horaEvento + unaHoraEnMilisegundos;
    },
  },
  methods: {
    editarEvento() {
     
      this.$emit("editar", this.evento);
    },
    eliminarEvento() {
    
      this.$emit("eliminar", this.evento.id);
    },
    formatearFecha(fecha) {
   
      const fechaFormateada = new Date(fecha).toLocaleString();
      return fechaFormateada;
    },
  },
};
</script>

<style scoped>
.evento-component {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.evento-info {
  flex: 1;
  width: 100%;
}

.evento-imagen {
  max-width: 100%;
  max-height: 200px;
  height: auto;
  margin: auto;
}

.live-cartel {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  color: white;
  padding: 5px;
  border-radius: 5px;
}

.evento-actions {
  width: 100%;
}
</style>
