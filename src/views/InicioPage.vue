<template>
  <div class="container mt-5 min-vh-100">
    <h2 class="mb-4">Canales Deportivos en Argentina</h2>
    <ul class="canales-deportivos list-unstyled d-flex flex-wrap justify-content-between m-0 p-0">
      <li v-for="(canal, index) in canales" :key="index" class="col-md-4 mb-4">
        <a :href="canal.url" class="text-decoration-none">
          <img :src="require(`@/assets/${canal.imgSrc}`)" :alt="`Canal ${index + 1}`" class="img-fluid rounded" />
          <h3 class="h5 mt-3">{{ canal.nombre }}</h3>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canales: [
        {
          nombre: "ESPN Premium",
          imgSrc: "ESPNPremium.png",
          url: "https://sfndeportes.com/ver/espn-premium",
        },
        {
          nombre: "TNT Sports HD",
          imgSrc: "TNTSportV2.png",
          url: "https://sfndeportes.com/ver/tnt-sports",
        },
        {
          nombre: "TyC Sports",
          imgSrc: "TyCSports.png",
          url: "https://sfndeportes.com/ver/tyc-sports",
        },
        {
          nombre: "Fox Sports",
          imgSrc: "FOXSport.png",
          url: "https://sfndeportes.com/ver/fox-sports",
        },
        {
          nombre: "DSPORTS",
          imgSrc: "DSports.png",
          url: "https://sfndeportes.com/ver/dsports-1",
        },
        {
          nombre: "GOLTV",
          imgSrc: "GOLTV.png",
          url: "https://sfndeportes.com/ver/goltv",
        },
      ],
    };
  },
};
</script>

<style scoped>
.canales-deportivos {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 5%;
}

.canales-deportivos li {
  width: calc(33.33% - 10px);
  margin-bottom: 20px;
  background-color: #bdb5b5;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.canales-deportivos img {
  max-width: 100%;
  width: 100px;
  height: auto;
}

.canales-deportivos a {
  text-decoration: none;
  color: #333;
}

.canales-deportivos h3 {
  font-size: 18px;
  margin-top: 10px;
}
</style>
