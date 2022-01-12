<template>
  <div style="color: #ffff" v-on:click="close_menu()">sadgashu</div>

  <button type="submit" v-on:click="open_route('player')">Abirir reproductor</button>
   <button type="submit" v-on:click="open_route('login')">Cerrar seccion</button>
</template>
<!-- .................................................. -->
<script>
export default {
  methods: {
    close_menu() {
      this.$emit("close_menu_ch", false);
    },

    open_route(ruta_name){
      this.close_menu()
       this.$router.push({ name: ruta_name});
    }
  },
};
</script>
<!-- .................................................. -->