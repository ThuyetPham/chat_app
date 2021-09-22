<template>
  <div class="main-login" v-if="result">
    <div class="main-login-form">
      <div class="login-prev">
        <h2>Luna</h2>
        <p>Create new account</p>
      </div>

      <form class="form-login-user" @submit.prevent="register">
        <div class="form-name">
          <div class="form-first-name">
            <input
              type="text"
              name=""
              id="first"
              placeholder="First name"
              v-model="firstName"
              required
            />
          </div>
          <div class="form-last-name">
            <input
              type="text"
              name=""
              id="last"
              placeholder="Last name"
              v-model="lastName"
              required
            />
          </div>
        </div>
        <div>
          <input
            type="email"
            name=""
            id="number"
            placeholder="Email"
            v-model="email"
            required
          />
        </div>
        <div>
          <input
            :type="passLogin ? 'password' : 'text'"
            name=""
            id="pass"
            placeholder="Password"
            v-model="password"
            required
          />
          <i class="far fa-eye" @click="passLogin = false" v-if="passLogin"></i>
          <i class="far fa-eye-slash" @click="passLogin = true" v-else></i>
        </div>
        <div class="notifiErrors">
          <span v-if="errors">{{ errors }}</span>
        </div>
        <div><button class="btn-signin">Create New Account</button></div>
      </form>
    </div>
  </div>
  <LoginGroup v-else />
</template>
<script>
import LoginGroup from "./LoginGroup.vue";
import axios from "axios";
export default {
  components: {
    LoginGroup,
  },
  data() {
    return {
      result: true,
      passLogin: true,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      errors: "",
    };
  },
  methods: {
    register() {
      axios
        .post(process.env.VUE_APP_API + "/auth/signup", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log("RES", res), (this.result = false);
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
    .form-name {
      display: flex;
      .form-first-name {
        margin-right: 5px;
      }
      .form-last-name {
        margin-left: 5px;
      }
    }
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
        background: #5277c7;
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
      .form-name {
        display: flex;
        .form-first-name {
          margin-right: 5px;
        }
        .form-last-name {
          margin-left: 5px;
        }
      }
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
          background: #5277c7;
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