<template>
  <div class="hear-page">
    <navbar></navbar>
    <!-- AQUI VA IR EL CONTENIDO DE TODAS LAS RUTAS ALA QUE INGRESE CUANDO YA ESTA LOGUEADO -->
    <div class="container-player">
      <router-view />
    </div>
  </div>
</template>
 
<script>
import navbar from "@/components/hear-page/navigation/navbar.vue";
export default {
  name: "hearpage",
  components: {
    navbar,
  },
};
</script>

<style scoped>
.hear-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.container-player {
  padding: 10px;
  box-sizing: border-box;
  background-color: #282864;
  margin: 0 20px 20px 20px;
  border-radius: 10px;
  box-sizing: border-box;
}
</style>