<template>
  <div id="model-account">
    <div class="model-account-top">
      <div class="model-account-icon">
        <i class="far fa-user"></i>
        <b>Account</b>
      </div>
      <div class="model-setting">
        <i class="fas fa-cog"></i>
        <b>Settings</b>
      </div>
    </div>
    <div class="border-color"></div>
    <div class="model-logout"><b>Log out</b></div>
    <div class="border-color"></div>
    <div class="model-logo">
      <img src="@/assets/images/account.jpg" alt="" />
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
#model-account {
  position: absolute;
  background: #fff;
  top: 79px;
  left: 8px;
  border-radius: 4px;
  z-index: 9999;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 19%);
  border: 1px solid #e1e4ea;
  width: 250px;
  text-align: left;
  font-size: 14px;
  color: #001a33;

  .model-account-top {
    margin-top: 20px;
    .model-account-icon {
      padding: 7px 10px 5px 20px;
      &:hover {
        background: rgb(243, 243, 243);
      }
      i {
        color: #001a33;
        margin-right: 19px;
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
      padding: 7px 10px 5px 18px;
      &:hover {
        background: rgb(243, 243, 243);
      }
      i {
        color: #001a33;
        margin-right: 19px;
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
}
</style>