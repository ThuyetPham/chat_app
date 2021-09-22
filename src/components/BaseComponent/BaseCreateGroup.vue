<template>
  <div class="model-add-friend">
    <div class="model-add-friend-name">
      <b>Create group</b>
      <i class="fas fa-times" @click="$emit('closeGroup')"></i>
    </div>
    <div class="model-add-friend-input">
      <div>
        <p>Group name</p>
        <input type="text" placeholder="Enter group name..." v-model="groupname"/>
      </div>
      <div class="invite-friend">
        <p>Invite friends to this group conversation</p>
        <div class="invite-friend-input">
          <input
            type="text"
            placeholder="Search friend by name or phonenumber"
          />
          <i class="fas fa-search"></i>
        </div>
      </div>

      <div
        class="model-info"
        v-for="(friend, index) in friendGroup"
        :key="index"
      >
        <input
          type="checkbox"
          :id="friend.user._id"
          :value="friend.user"
          v-model="checkedFriend"
        />
        <label :for="friend.user._id" class="model-info-name">
          <img :src="friend.user.avatar" alt="" />
          <p>{{ friend.user.firstName + " " + friend.user.lastName }}</p>
        </label>
      </div>
    </div>
    <div class="model-cancel-search">
      <button class="model-cancel" @click="$emit('closeGroup')">Cancel</button>
      <button
        class="model-search"
        @click="addGroup"
      >
        Create Group
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  emits: ["closeGroup", "joinGroup"],
  data() {
    return {
      friendGroup: [],
      checkedFriend: [],
      groupname:''
    };
  },
  async created() {
    let res = await axios.get(process.env.VUE_APP_API + "/friends?status=ACCEPTED");
    this.friendGroup = res.data;
  },
  updated() {
    return this.addGroup;
  },
  methods: {
    addGroup() {
      this.$emit('joinGroup', this.checkedFriend)
    },
  },
};
</script>
<style lang="scss" scoped>
.model-add-friend {
  position: absolute;
  background: #ffffff;
  z-index: 9999;
  left: 0;
  top: 0;
  height: 90vh;
  bottom: 0;
  right: 0;
  width: 400px;
  margin: auto;
  box-shadow: 0px 0px 2px #ddd;
  border: 1px solid #ddd;
  .model-add-friend-name {
    margin: 20px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 15px;
    i {
      position: absolute;
      right: 20px;
      top: 22px;
      font-size: 20px;
      color: rgb(80, 80, 80);
    }
  }
  .model-add-friend-input {
    margin: 20px;
    margin: 20px;
    overflow-y: scroll;
    height: 52vh;
    padding: 0px 10px;
    &::-webkit-scrollbar {
      width: 8px;
      position: absolute;
      background: rgb(255, 255, 255);
    }
    &::-webkit-scrollbar-thumb {
      background-color: #72808e75;
      border-radius: 3px;
      opacity: 0.5;
    }
    input {
      width: 100%;
      height: 50px;
      padding-left: 20px;
      border: none;
      outline: none;
      border: 1px solid rgb(189, 189, 189);
      border-radius: 4px;
      &:focus {
        border: 1px solid rgb(218, 218, 255);
      }
    }
    .model-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;
      .model-info-name {
        align-items: center;
        display: flex;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #ffffff;
          object-fit: cover;
        }
        p {
          margin: 0px 0px 0px 10px !important;
        }
      }
      button {
        border-radius: 4px;
        background: #6a89cc;
        height: 35px;
        width: 100px;
        color: white;
        border: none;
        outline: none;
      }
    }

    .invite-friend {
      margin-top: 30px;
      .invite-friend-input {
        position: relative;
        input {
          padding-left: 35px;
        }
        i {
          position: absolute;
          color: #5f5f5f;
          left: 13px;
          top: 18px;
          font-size: 17px;
        }
      }
    }
    .model-info {
      justify-content: left;
      input {
        width: 15px;
        height: 15px;
        margin-right: 10px;
        border: none;
        outline: none;
        border: 1px solid #bdbdbd;
        border-radius: 4px;
      }
    }
  }
  .model-cancel-search {
    float: right;
    margin-bottom: 20px;
    button {
      border: none;
      outline: none;
      height: 40px;
      padding: 0px 5px;
      border-radius: 5px;
    }
    .model-cancel {
      margin-right: 10px;
      background: rgb(212, 212, 212);
      width: 70px;
    }
    .model-search {
      margin-right: 20px;
      background: #6a89cc;
      color: white;
      width: 110px;
    }
  }
}

@media (max-width:776px) {
  .model-add-friend {
  position: absolute;
  background: #ffffff;
  z-index: 9999;
  left: 0;
  top: 0;
  height: 90vh;
  bottom: 0;
  right: 0;
  width: 100%;
  margin: auto;
  box-shadow: 0px 0px 2px #ddd;
  border: 1px solid #ddd;
  }
}
</style>
