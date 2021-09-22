<template>
  <div class="main-login">
    <div class="main-login-model">
      <img src="@/assets/images/login.png" alt="" />
      <div class="btn-login">
        <router-link to="/login"
          ><button class="btn-log">Login</button></router-link
        >
        <router-link to="/register"
          ><button class="btn-regis">Register</button></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.main-login {
  background: cornsilk;
  width: 100vw;
  height: 100vh;
}
.main-login-model {
  height: 500px;
  width: 400px;
  margin: auto;
  background-size: 70%;
  background-position: center;
  border: 1px solid #ddd;
  background: white;
  box-shadow: 0px 2px 5px #ddd;
  text-align: center;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 0px;
  img {
    width: 100%;
    height: 270px;
    object-fit: cover;
  }

  .btn-login {
    display: inline-grid;
    margin-top: 20px;
    button {
      height: 50px;
      width: 200px;
      border-radius: 40px;
      outline: none;
      margin: 10px 0px;
      border: none;
      text-transform: uppercase;
    }

    .btn-log {
      background: #6a89cc;
      color: white;
      &:hover {
        background: #6a89cc;
      }
    }
    .btn-regis {
      background: #ddd;
      color: rgb(22, 22, 22);
      &:hover {
        background: rgb(194, 194, 194);
      }
    }
  }
}

@media (max-width: 776px) {
  .main-login {
    background: cornsilk;
    width: auto;
    height: 100vh;
  }
  .main-login-model {
    height: 100vh;
    width: 100vw;
    margin: auto;
    background-size: 70%;
    background-position: center;
    border: 1px solid #ddd;
    background: white;
    box-shadow: 0px 2px 5px #ddd;
    text-align: center;
    border-radius: 4px;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px 0px;
    img {
      width: 100%;
      height: 270px;
      object-fit: cover;
      margin-top: 80px;
    }

    .btn-login {
      display: inline-grid;
      margin-top: 20px;
      button {
        height: 50px;
        width: 200px;
        border-radius: 40px;
        outline: none;
        margin: 10px 0px;
        border: none;
        text-transform: uppercase;
      }

      .btn-log {
        background: #6a89cc;
        color: white;
        &:hover {
          background: #6a89cc;
        }
      }
      .btn-regis {
        background: #ddd;
        color: rgb(22, 22, 22);
        &:hover {
          background: rgb(194, 194, 194);
        }
      }
    }
  }
}
</style>