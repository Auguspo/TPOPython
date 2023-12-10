<template>
  <div class="modal" v-if="evento">
    <div class="modal-content">
      <form @submit.prevent="guardar">
        <h3>{{ eventoEditado.id ? 'Editar Evento' : 'Agregar Nuevo Evento' }}</h3>

        <label for="titulo">Título:</label>
        <input id="titulo" v-model="eventoEditado.nombre" required>

        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" v-model="eventoEditado.descripcion" required></textarea>

        <label for="imagen">URL de la Imagen:</label>
        <input id="imagen" v-model="eventoEditado.imagen" type="url" required>

        <label for="fecha_horario">Fecha/Hora:</label>
        <input id="fecha_horario" v-model="eventoEditado.fecha_horario" type="datetime-local" required>

        <button type="submit">Guardar</button>
        <button @click="cerrar">Cancelar</button>
      </form>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    evento: Object,
  },
  data() {
    return {
      eventoEditado: {
        id: null,
        nombre: '',
        descripcion: '',
        imagen: '',
        fecha_horario: '',
      },
      error: null,
    };
  },
  watch: {
    evento: {
      handler(nuevoEvento) {
  
        this.eventoEditado = { ...nuevoEvento };
      },
      immediate: true,
    },
  },
  methods: {
    guardar() {
      console.log("Guardando evento:", this.eventoEditado);
      this.error = null;

      if (this.eventoEditado.id) {
    
        axios
          .put(
            `https://multitude6788.pythonanywhere.com/events/${this.eventoEditado.id}`,
            this.eventoEditado
          )
          .then((response) => {
            console.log("Evento editado exitosamente", response);
            this.$emit("guardar", this.eventoEditado);
            this.$emit("cerrar");
          })
          .catch((error) => {
            console.error("Error al editar el evento:", error.message);
            this.error = "Error al editar el evento. Verifica la consola para más detalles.";
          });
      } else {
      
        axios
          .post('https://multitude6788.pythonanywhere.com/events', this.eventoEditado)
          .then((response) => {
            console.log("Evento creado exitosamente", response);
            this.$emit("guardar", this.eventoEditado);
            this.$emit("cerrar");
          })
          .catch((error) => {
            console.error("Error al crear el nuevo evento:", error.message);
            this.error = "Error al crear el nuevo evento. Verifica la consola para más detalles.";
          });
      }
    },
    cerrar() {
      console.log("Cerrando modal");
      this.error = null;
      this.$emit("cerrar");
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.error-message {
  color: red;
  margin-top: 10px;
}

</style>
