<template>
  <div class="modal" v-if="evento">
     <div class="modal-content">
       <form @submit.prevent="guardar" class="form">
         <h3>{{ eventoEditado.id ? 'Editar Evento' : 'Agregar Nuevo Evento' }}</h3>
 
         <div class="mb-3">
           <label for="titulo" class="form-label">Título:</label>
           <input id="titulo" v-model="eventoEditado.nombre" class="form-control" required>
         </div>
 
         <div class="mb-3">
           <label for="descripcion" class="form-label">Descripción:</label>
           <textarea id="descripcion" v-model="eventoEditado.descripcion" class="form-control" required></textarea>
         </div>
 
         <div class="mb-3">
           <label for="imagen" class="form-label">URL de la Imagen:</label>
           <input id="imagen" v-model="eventoEditado.imagen" type="url" class="form-control" required>
         </div>
 
         <div class="mb-3">
           <label for="fecha_horario" class="form-label">Fecha/Hora:</label>
           <input id="fecha_horario" v-model="eventoEditado.fecha_horario" type="datetime-local" class="form-control" required>
         </div>
 
         <div class="mb-3">
          <button type="submit" class="btn btn-primary" @click="guardarEvento">Guardar</button>
           <button @click="cerrar" class="btn btn-secondary">Cancelar</button>
         </div>
 
       </form>
       <div v-if="error" class="error-message">{{ error }}</div>
     </div>
   </div>
 </template>
 
 <script>

 
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
    guardarEvento() {
      this.$emit("guardar-evento", this.eventoEditado);
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
 