<template>
  <div class="friend-request-main">
    <div class="friend-request-icon" @click="$store.state.showSideBar = true">
      <i class="fas fa-angle-left"></i>
    </div>
    <div class="friend-request-title">
      <i class="fas fa-user-plus"></i>
      <b>Joined Groups</b>
    </div>
  </div>
  <div class="buttonCreate" v-if="showgroup">
    <div><p>You don't have any group.</p></div>
    <div><button @click="createGroup = true">Create Group</button></div>
    <BaseCreateGroup
      v-show="createGroup"
      @closeGroup="createGroup = false"
      @joinGroup="joinGroup"
    />
  </div>
  <div v-else>
    <div class="name-group">
      <i class="fas fa-ellipsis-v" @click="iconGroup = !iconGroup"></i>
      <div class="delete-leave" v-show="iconGroup">
        <p>Delete</p>
        <p>Leave group</p>
      </div>
      <div class="img-group">
        <img src="@/assets/images/user02.jpg" alt="" />
        <img src="@/assets/images/user04.jpg" alt="" />
        <img src="@/assets/images/user01.jpg" alt="" />
      </div>
      <div class="member-group">
        <p>Group01</p>
        <span>3 members</span>
      </div>
    </div>
  </div>
</template>
<script>
import BaseCreateGroup from "@/components/BaseComponent/BaseCreateGroup";
export default {
  components: {
    BaseCreateGroup,
  },

  data() {
    return {
      iconGroup: false,
      createGroup: false,
      group: {},
      showgroup: true,
    };
  },
  methods: {
    joinGroup(element) {
      this.group = element;
      if (this.group) {
        this.showgroup = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.friend-request-main {
  height: 70px;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #ddd;
  .friend-request-icon {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #ddd;
    text-align: center;
    margin: 0px 10px;
    cursor: pointer;
    display: none;
    i {
      color: black;
      margin-top: 12px;
    }
  }
  .friend-request-title {
    display: flex;
    align-items: center;
    font-size: 17px;
    i {
      color: rgb(44, 44, 44);
      margin: 0px 7px 0px 30px;
    }
  }
}
.buttonCreate {
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  button {
    width: 150px;
    height: 50px;
    border: none;
    background: #6a89cc;
    color: white;
    border-radius: 4px;
  }
}
.name-group {
  width: 250px;
  border: 1px solid #ddd;
  text-align: center;
  height: 250px;
  position: relative;
  i {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #5d5d5d;
    &:hover {
      color: rgb(49, 49, 255);
    }
  }
  .delete-leave {
    text-align: left;
    position: absolute;
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 2px 2px 2px #ddd;
    right: -55px;
    top: 39px;
    width: 120px;
    height: 100px;
    padding: 15px;
    p {
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color: rgb(83, 83, 255);
      }
    }
  }
  .img-group {
    width: 50%;
    margin: auto;
    margin-top: 30px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin: 0px 2px;
    }
  }
  .member-group {
    margin-top: 20px;
    p {
      font-weight: 700;
    }
    span {
      color: rgb(116, 116, 116);
      font-size: 14px;
    }
  }
}

@media (max-width: 990px) {
  .friend-request-main {
    height: 70px;
    align-items: center;
    display: flex;
    border-bottom: 1px solid #ddd;
    .friend-request-icon {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background: #ddd;
      text-align: center;
      margin: 0px 10px;
      cursor: pointer;
      display: block;
      i {
        color: black;
        margin-top: 12px;
      }
    }
    .friend-request-title {
      display: flex;
      align-items: center;
      font-size: 17px;
      i {
        color: rgb(44, 44, 44);
        margin: 0px 7px;
      }
    }
  }
}
</style>