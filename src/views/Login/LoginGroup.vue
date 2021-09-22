<template>
  <div class="main-login">
    <div class="main-login-form">
      <div class="login-prev">
        <h2>Luna</h2>
        <p>Log in account</p>
        <form class="form-login-user" @submit.prevent="logIn">
          <div>
            <input
              type="email"
              name=""
              id="number"
              v-model="username"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              :type="passLogin ? 'password' : 'text'"
              name=""
              id="pass"
              v-model="password"
              placeholder="Password"
              required
            />
            <i
              class="far fa-eye"
              @click="passLogin = false"
              v-if="passLogin"
            ></i>
            <i class="far fa-eye-slash" @click="passLogin = true" v-else></i>
          </div>
          <div class="notifiErrors">
            <span v-if="errors">{{ errors }}</span>
          </div>
          <div>
            <button type="submit" class="btn-signin">Log in</button>
          </div>
          <p class="forget">Forgotten password?</p>
        </form>
        <!-- <div class="next-login"><i class="fas fa-arrow-right"></i></div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      passLogin: true,
      username: "",
      password: "",
      errors: "",
    };
  },

  methods: {
    logIn() {
      this.$store
        .dispatch("AUTH/logIn", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.replace({
            name: "Home",
          });
        })
        .catch((error) => {
          if (error.response.data.details) {
            error.response.data.details.forEach((element) => {
              this.errors = element.message;
            });
          } else {
            error.response.data = "Unauthorized";
            this.errors = "Wrong password";
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.main-login {
  background: cornsilk;
  width: 100vw;
  height: 100vh;
}

.main-login-form {
  height: 500px;
  width: 400px;
  margin: auto;
  background-size: 70%;
  background-position: center;
  border: 1px solid #ddd;
  background: white;
  box-shadow: 0px 2px 5px #ddd;
  text-align: left;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;

  .login-prev {
    margin-top: 30px;
    background: white;
    align-items: center;
    text-align: center;
    h2 {
      color: #6a89cc;
      font-family: sans-serif;
    }
    p {
      color: rgb(17, 17, 17);
      margin-top: 15px;
      font-weight: 600;
    }
  }
  .login-note {
    background: #6a89cc;
    height: 30px;
    align-items: center;
    p {
      font-size: 13px;
      color: black;
      margin: 0px 0px 0px 20px;
      padding-top: 4px;
    }
  }
  .form-login-user {
    display: grid;
    padding: 0px 20px;
    i {
      color: black;
      position: absolute;
      right: 31px;
      margin-top: 38px;
    }
    label {
      margin: 15px 0px 7px 0px;
    }
    input {
      width: 100%;
      height: 50px;
      padding-left: 15px;
      outline: none;
      border: none;
      border: 1px solid rgb(158, 158, 158);
      border-radius: 10px;
      margin-top: 20px;
      &:focus {
        border: 1px solid #6a89cc;
      }
    }
    .btn-signin {
      width: 100%;
      height: 50px;
      border: none;
      background: #6a89cc;
      color: white;
      border-radius: 7px;
      margin-top: 20px;
      font-size: 16px;
      text-transform: uppercase;
      &:hover {
        background: #4d73c4;
      }
    }
    .forget {
      font-size: 13px;
      color: #6a89cc;
      cursor: pointer;
      margin-top: 8px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.notifiErrors {
   text-align: left;
   padding-top: 10px;
  span {
    font-size: 14px;
    color: red;
    text-align: left;
  }
}

@media (max-width: 776px) {
  .main-login {
  background: cornsilk;
  width: auto;
  height: 100vh;
}
.main-login-form {
  height: 100vh;
  width: 100vw;
  margin: auto;
  background-size: 70%;
  background-position: center;
  border: 1px solid #ddd;
  background: white;
  box-shadow: 0px 2px 5px #ddd;
  text-align: left;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;

  .login-prev {
    margin-top: 30px;
    background: white;
    align-items: center;
    text-align: center;
    h2 {
      color: #6a89cc;
      font-family: sans-serif;
    }
    p {
      color: rgb(17, 17, 17);
      margin-top: 15px;
      font-weight: 600;
    }
  }
  .login-note {
    background: #6a89cc;
    height: 30px;
    align-items: center;
    p {
      font-size: 13px;
      color: black;
      margin: 0px 0px 0px 20px;
      padding-top: 4px;
    }
  }
  .form-login-user {
    display: grid;
    padding: 0px 20px;
    i {
      color: black;
      position: absolute;
      right: 31px;
      margin-top: 38px;
    }
    label {
      margin: 15px 0px 7px 0px;
    }
    input {
      width: 100%;
      height: 50px;
      padding-left: 15px;
      outline: none;
      border: none;
      border: 1px solid rgb(158, 158, 158);
      border-radius: 10px;
      margin-top: 20px;
      &:focus {
        border: 1px solid #6a89cc;
      }
    }
    .btn-signin {
      width: 100%;
      height: 50px;
      border: none;
      background: #6a89cc;
      color: white;
      border-radius: 7px;
      margin-top: 20px;
      font-size: 16px;
      text-transform: uppercase;
      &:hover {
        background: #4d73c4;
      }
    }
    .forget {
      font-size: 13px;
      color: #6a89cc;
      cursor: pointer;
      margin-top: 8px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
}
</style>