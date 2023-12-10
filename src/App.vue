<template>
  <div id="app"  >
    <NavBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  components: {
    NavBar,
    FooterBar,
  },
};
</script>

<style>
#app {
  font-family: 'Kanit', sans-serif;
  padding: 60px 0 0 0;
}

.router-link-exact-active {
  font-weight: bold;
}
</style>
