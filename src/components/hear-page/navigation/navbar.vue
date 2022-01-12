<template>
  <div class="navbar">
    <span class="data-navbar data-navbar-span">
      ¡Hola Carlos Abramonte! <i class="fas fa-user"></i>
    </span>
    <i
      class="fas fa-bars data-navbar data-navbar-i"
      v-on:click="open_menu_drop_down(true)"
    ></i>
  </div>
  <!-- ESTO ES UN MENU DESPLEGABLE-->
  <div class="menu-drop-down" v-if="open_menu == true">
    <i
      class="fas fa-times close-menu"
      v-on:click="open_menu_drop_down(false)"
    ></i>
    <div class="sub-menu-drop-down">
      <menudropdown v-on:close_menu_ch="receive_value"></menudropdown>
    </div>
  </div>
</template>
<!-- .................................................. -->
<script>
import menudropdown from "@/components/hear-page/navigation/menu-drop-down.vue";
export default {
  name: "navbar",
  components: {
    menudropdown,
  },
  data() {
    return {
      open_menu: false,
    };
  },
  mounted() {},
  methods: {
    open_menu_drop_down(valor) {
      this.open_menu = valor;
    },
    receive_value(valor) {
      console.log("Variable recivida", valor);
      this.open_menu = valor;
    },
  },
};
</script>
<!-- .................................................. -->
<style scoped>
.navbar {
  background-color: #09092f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
}

.data-navbar-i {
  color: #ffff;
  font-size: 28px;
  padding: 8px;
  cursor: pointer;
}

.data-navbar-i:hover {
  color: #22d8c9;
}

.data-navbar-span {
  color: #ffff;
  font-size: 18px;
  padding: 8px;
  cursor: pointer;
}

.data-navbar-span > i {
  color: #22d8c9;
  margin-left: 5px;
}

.close-menu {
  color: #ffff;
  position: fixed;
  right: 0;
  top: 0;
  margin: 5px;
  padding: 8px;
  font-size: 28px;
  cursor: pointer;
}

.menu-drop-down {
  z-index: 90;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: left;
}

.sub-menu-drop-down {
  width: 80%;
  height: 100%;
  background-color: #09072c;
}
</style>