<template>
  <div class="account-user">
    <div class="update-info">
      <b>Update info</b>
      <i class="fas fa-times" @click="$emit('closeAccount')"></i>
    </div>
    <div class="img-background">
      <img src="@/assets/images/anhbia.jpg" alt="" />
    </div>
    <div type="file" class="img-avatar">
      <input type="file" name="img" id="imgavatar" @change="onFileChange" />
      <label for="imgavatar">
        <img v-if="url" :src="url" alt="" />
        <img v-else :src="changeName.avatar" alt="" />
        <i class="fas fa-camera"></i>
      </label>
    </div>
    <div class="name-user" v-if="nameUser">
      <b>{{ firstname + " " + lastname }}</b>
      <i class="fas fa-pen-fancy" @click="nameUser = false"></i>
    </div>
    <div class="update-user" v-else v-click-outside="showNameUser">
      <input type="text" placeholder="First name" v-model="firstname" />
      <input type="text" placeholder="Last name" v-model="lastname" />
    </div>
    <div class="cancel-update">
      <div class="cancel" @click="$emit('closeAccount')">Cancel</div>
      <div class="update" @click="submit">Update</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  emits: ["closeAccount", "changeAvatar"],
  data() {
    return {
      nameUser: true,
      firstname: "",
      lastname: "",
      changeName: {},
      file: null,
      url: null,
    };
  },
  mounted() {
    this.changeName = this.$store.state.AUTH.user;
    this.firstname = this.changeName.firstName;
    this.lastname = this.changeName.lastName;

    // console.log(this.$store.commit('AUTH/SET_USER'))
  },

  methods: {
    showNameUser() {
      this.nameUser = true;
    },

    onFileChange(e) {
      this.file = e.target.files[0];
      this.url = URL.createObjectURL(this.file);
    },
    async submit() {
      let formData = new FormData();
      formData.append("avatar", this.file);
      formData.append("firstName", this.firstname);
      formData.append("lastName", this.lastname);
      let res = await axios.patch(process.env.VUE_APP_API + "/users", formData);
      this.$store.commit("AUTH/SET_USER", res.data);
      this.$emit('closeAccount')
    },
  },
};
</script>
<style lang="scss" scoped>
.account-user {
  padding: 0px 0px 40px 0px;
  .update-info {
    text-align: left;
    position: relative;
    padding: 20px 20px;
    b {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 17px;
      font-weight: 600;
      display: block;
    }
    i {
      position: absolute;
      right: 21px;
      top: 23px;
      color: #abb4bc;
      font-size: 18px;
      cursor: pointer;
    }
  }
  .img-background {
    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
  }
  .img-avatar {
    position: relative;
    top: -41px;
    input {
      display: none;
    }
    img {
      border-radius: 50%;
      width: 80px;
      height: 80px;
      object-fit: cover;
      cursor: pointer;
    }
    i {
      position: absolute;
      color: #9ca5ae;
      position: absolute;
      bottom: 3px;
      margin-left: -23px;
      width: 22px;
      height: 22px;
      background: #ffffff;
      border-radius: 50%;
      font-size: 14px;
      padding-top: 3px;
      border: 1px solid #e7e8e9;
      cursor: pointer;
    }
  }

  .update-user {
    position: relative;
    width: 350px;
    margin: auto;
    top: -30px;
    input {
      width: 150px;
      height: 40px;
      outline: none;
      margin: 0px 5px;
      border-radius: 4px;
      padding-left: 10px;
      border: 1px solid rgb(175, 175, 175);
      &::placeholder {
        font-size: 15px;
      }
    }
  }
  .name-user {
    position: relative;
    top: -30px;
    b {
      margin: 0 auto;
      font-size: 17px;
      font-weight: 500;
      color: #001a33;
    }

    i {
      position: absolute;
      color: #abb4bc;
      font-size: 14px;
      right: 33px;
      top: 4px;
      border-bottom: 1px solid;
      width: 17px;
      padding-bottom: 1px;
      cursor: pointer;
    }
  }
  .cancel-update {
    display: flex;
    float: right;
    .cancel {
      height: 40px;
      width: 80px;
      border: 1px solid #ddd;
      padding-top: 6px;
      font-size: 15px;
      font-weight: 600;
      color: black;
      background: #e8eaef;
      border-radius: 4px;
      margin-right: 10px;
      cursor: pointer;
    }
    .update {
      height: 40px;
      width: 80px;
      border: 1px solid #ddd;
      padding-top: 6px;
      font-size: 15px;
      font-weight: 600;
      color: white;
      background: #0068ff;
      border-radius: 4px;
      margin-right: 20px;
      cursor: pointer;
    }
  }
}
</style>