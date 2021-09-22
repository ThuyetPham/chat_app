<template>
    <div id="model-account-setting">
    <div class="model-account-top">
      <div class="model-account-icon">
        <i class="far fa-user"></i>
        <b>Account</b>
      </div>
      <div class="model-setting">
        <i class="fas fa-globe"></i>
        <b>Language</b>
        <div class="language">
          <div>Tiếng Việt</div>
          <div>English</div>
        </div>
      </div>
    </div>
    <div class="border-color"></div>
    <div class="model-logout" @click="logOut"><b>Log out</b></div>
  </div>
</template>
<script>
export default {
    methods: {
        logOut() {
            this.$store.commit('AUTH/SET_TOKEN',null)
            this.$router.replace({
                name:'Login'
            })
        }
    }
}
</script>
<style lang="scss" scoped>
#model-account-setting {
  position: absolute;
  background: #fff;
  bottom: 70px;
  left: 8px;
  border-radius: 4px;
  z-index: 9999;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 19%);
  border: 1px solid #e1e4ea;
  width: 150px;
  text-align: left;
  font-size: 14px;
  color: #001a33;
  padding: 10px 0px;
  .model-account-top {
    .model-account-icon {
      cursor: pointer;
      padding: 7px 10px 5px 20px;
      &:hover {
        background: rgb(243, 243, 243);
      }
      i {
        color: #001a33;
        margin-right: 19px;
        font-size: 15px;
      }
      b {
        line-height: normal;
        font-weight: 400;
        text-align: left;
        font-size: 13px;
        color: #001a33;
      }
    }
    .model-setting {
      cursor: pointer;
      padding: 7px 10px 5px 18px;
      &:hover {
        background: rgb(243, 243, 243);
      }
      i {
        color: #001a33;
        margin-right: 18px;
        font-size: 15px;
        margin-left: 1px;
      }
      b {
        line-height: normal;
        font-weight: 400;
        text-align: left;
        font-size: 13px;
        color: #001a33;
      }
    }
  }
  .border-color {
    height: 1px;
    background: #e1e4ea;
    margin: 4px 20px;
  }
  .model-logout {
    cursor: pointer;
    font-size: 14px;
    padding: 7px 10px 5px 50px;
    &:hover {
      background: rgb(243, 243, 243);
    }
    b {
      font-weight: 400;
      color: #db342e;
    }
  }
  .model-logo {
    margin-bottom: 7px;
    position: relative;
    img {
      width: 100%;
      height: 100px;
      object-fit: contain;
    }
  }
  .model-setting {
    .language {
      display: none;
    bottom: 0;
    position: absolute;
    left: 90%;
    background: #ffffff;
    width: 150px;
     border-radius: 4px;
  z-index: 9999;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 19%);
  border: 1px solid #e1e4ea;
  font-size: 13px;
  div {
    padding: 10px 20px;
    &:hover {
      background: rgb(243, 243, 243);
    }
  }
  }
    &:hover {
      .language {
      display: block;
      }
    }
  }
 
}
</style>