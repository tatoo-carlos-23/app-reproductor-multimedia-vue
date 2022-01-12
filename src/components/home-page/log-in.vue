<template>
  <div class="container-login">
    <div class="img">
      <img class="img-style" src="@/assets/img/reproductor.png" alt="" />
    </div>
    <div class="sub-container">
      <h1 class="title">Reproductor <span>de musica</span></h1>
      <form action="" @submit.prevent="log_in()">
        <div class="inputs-style">
          <input
            class="input-email"
            type="email"
            placeholder="Correo electronico"
            v-model="email"
          />
          <input
            class="input-password"
            type="password"
            placeholder="Contraseña"
            v-model="password"
          />
        </div>
        <div class="button-login">
          <button class="btn-button" type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api_reproductor from "@/apis/api.js";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login_ok(token) {
      localStorage.setItem("token", token);
      this.$router.push({ name: "hear" });
    },
    async log_in() {
      const data = {
        email: this.email,
        password: this.password,
      };
      console.log(9);
      await api_reproductor
        .login(data)
        .then((res) => {
          console.log(res);
          res.data.status === "success"
            ? this.login_ok(res.data.token)
            : alert("no sirve pa ni mrd");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}

.container-login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.img-style {
  height: 200px;
}
.sub-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title {
  text-align: center;
  /* font-family: Arial, Helvetica, sans-serif; */
  font-size: 40px;
  color: #ffff;
}
span {
  color: red;
}
.inputs-style {
  display: flex;
  flex-direction: column;
}
.input-email {
  width: 250px;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  border: 1px solid black;
  box-shadow: 1px 4px 4px rgba(255, 247, 0, 0.5);
  margin: 0 0 15px 0;
}
.input-password {
  width: 250px;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  border: 1px solid black;
  box-shadow: 1px 4px 4px rgba(223, 216, 0, 0.5);
  margin: 0 0 25px 0;
}
.button-login {
  text-align: center;
  border: none;
}
.btn-button {
  width: 100px;
  padding: 6px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #f13903;
  color: white;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
@media (min-width: 768px) {
  .container-login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 90vh;
  }
  .img {
    margin: 0 70px 0 0;
  }
  .img-style {
    height: 350px;
  }
  .sub-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .title {
    text-align: center;
    /* font-family: Arial, Helvetica, sans-serif; */
    font-size: 40px;
  }
  span {
    color: red;
  }
  .inputs-style {
    display: flex;
    flex-direction: column;
  }
  .input-email {
    width: 250px;
    padding: 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid black;
    box-shadow: 1px 4px 4px rgba(255, 247, 0, 0.5);
    margin: 0 0 15px 0;
  }
  .input-password {
    width: 250px;
    padding: 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid black;
    box-shadow: 1px 4px 4px rgba(223, 216, 0, 0.5);
    margin: 0 0 25px 0;
  }
  .button-login {
    text-align: center;
    border: none;
  }
  .btn-button {
    width: 100px;
    padding: 6px;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: #f13903;
    color: white;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
}
</style>
