<template>
  <div class="container-login">
    <div class="img">
      <img class="img-style" src="@/assets/img/reproductor.png" alt="" />
    </div>
    <div class="sub-container">
      <h1 class="title">Reproductor <span>de musica</span></h1>
      <form action="">
        <div class="inputs-style">
          <input
            class="input-email"
            type="email"
            placeholder="Correo electronico"
          />
          <input
            class="input-password"
            type="password"
            placeholder="Contraseña"
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
export default {
  name: "login",
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
  height: 90vh;
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
  font-family: Arial, Helvetica, sans-serif;
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
    font-family: Arial, Helvetica, sans-serif;
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
