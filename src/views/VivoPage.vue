<!-- VivoPage.vue -->
<template >
  <div class=" container mt-5 min-vh-100">
    <h2 class="mb-4">Eventos en Vivo</h2>
    <div class="grid-container">
      <EventoComponent
        v-for="evento in eventos"
        :key="evento.numero"
        :eventoNumero="evento.numero"
        :eventoTitulo="evento.titulo"
        :eventoDescripcion="evento.descripcion"
        :eventoImagenSrc="evento.imagenSrc"
        :eventoLink="evento.link"
        
      />
    </div>
  </div>
</template>

<script>
import EventoComponent from "@/components/EventoComponent.vue";

export default {
  components: {
    EventoComponent,
  },
  data() {
    return {
      eventos: [
        {
          numero: 1,
          titulo: "Torneo de Tenis",
          descripcion: "El torneo de tenis más importante del año te espera.",
          imagenSrc: "tenis.jpg",
          link: "tenisvivo.html",
        },
        {
          numero: 2,
          titulo: "Lo mejor de la F1",
          descripcion: "Presencia la velocidad en esta emocionante carrera de F1.",
          imagenSrc: "F1.jpeg",
          link: "f1vivo.html",
        },
        {
          numero: 3,
          titulo: "Partido de Basquet",
          descripcion: "Acción en la cancha con este partido de basquet en vivo.",
          imagenSrc: "basquet.jpg",
          link: "basquetvivo.html",
        },
        {
          numero: 4,
          titulo: "Torneo de Golf",
          descripcion: "Los mejores golfistas compiten en este torneo en vivo.",
          imagenSrc: "Golf.jpg",
          link: "golfvivo.html",
        },
        {
          numero: 5,
          titulo: "Partido de Hockey",
          descripcion: "Vive el apasionante torneo nacional de Hockey en vivo.",
          imagenSrc: "hockey.jpg",
          link: "hockeyvivo.html",
        },
      ],
    };
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

