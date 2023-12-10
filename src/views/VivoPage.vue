<template>
  <div class="container mt-5 min-vh-100">
    <h2 class="mb-4">Eventos en Vivo</h2>

    <button @click="abrirModalAgregar" class="btn btn-primary mb-4">Agregar Evento</button>

    <div v-if="eventos && eventos.length > 0" class="grid-container">
      <EventoComponent v-for="evento in eventos" :evento="evento" :key="evento.id" @editar="abrirModalEditar"
        @eliminar="eliminarEvento" />
    </div>

    <ModalEvento :evento="eventoEditando" @guardar-evento="guardarEvento" @cerrar="cerrarModal" />
  </div>
</template>

<script>
import EventoComponent from "@/components/EventoComponent.vue";
import ModalEvento from "@/components/ModalEvento.vue";
import axios from "axios";

export default {
  components: {
    EventoComponent,
    ModalEvento,
  },
  data() {
    return {
      eventos: [],
      eventoEditando: null,
      loading: false,
      error: null,
    };
  },
  mounted() {
    this.obtenerEventos();
  },
  methods: {
    obtenerEventos() {
      this.loading = true;
      axios
        .get("https://multitude6788.pythonanywhere.com/events")
        .then((response) => {
          this.eventos = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          this.error = "Error al obtener la lista de eventos";
          console.error(this.error, error);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    abrirModalAgregar() {
      this.eventoEditando = {};
    },

    cerrarModal() {
      this.eventoEditando = null;
    },

    abrirModalEditar(evento) {
      this.eventoEditando = { ...evento };
    },

    guardarEvento(eventoEditado) {
      console.log("Guardando en VivoPage:", eventoEditado);

      axios
        .post('https://multitude6788.pythonanywhere.com/events', eventoEditado)
        .then((response) => {
          console.log("Evento creado exitosamente", response);
          this.obtenerEventos();
          this.cerrarModal();
        })
        .catch((error) => {
          console.error("Error al crear el nuevo evento", error);
        });
    },

    eliminarEvento(id) {
      axios
        .delete(`https://multitude6788.pythonanywhere.com/events/${id}`)
        .then((response) => {
          console.log("Evento eliminado exitosamente", response);
          this.obtenerEventos();
        })
        .catch((error) => {
          console.error("Error al eliminar el evento", error);
        });
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
</style>
