<template>
  <div class="model-add-friend">
    <div class="model-add-friend-name">
      <p>Add friend</p>
      <i
        class="fas fa-times"
        @click="$emit('closeAddFriend'), (emailUser = ''), (searchData = [])"
      ></i>
    </div>
    <div class="model-add-friend-input">
      <input type="email" placeholder="email" v-model="emailUser" />
      <div>
        <div
          class="model-info"
          v-for="(item, index) in searchData"
          :key="index"
        >
          <div class="model-info-name">
            <img src="@/assets/images/user10.jpg" alt="" />
            <p>{{ item.firstName + " " + item.lastName }}</p>
          </div>
          <div>
            <button
              class="add-friend"
              v-if="!item.friendStatus"
              @click="addFriend(item._id)"
            >
              Add friend
            </button>
            <button class="undo-request" v-else @click="deleteFriend(item._id)">
              {{
                item.friendStatus == "REQUESTED"
                  ? "Undo request"
                  : "Delete friend"
              }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="model-cancel-search">
      <button
        class="model-cancel"
        @click="$emit('closeAddFriend'), (emailUser = ''), (searchData = [])"
      >
        Cancel
      </button>
      <button class="model-search" @click="searchUser">Search</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      emailUser: "",
      id: "",
      searchData: [],
    };
  },
  emits: ["closeAddFriend"],
  methods: {
    async searchUser() {
      let response = await axios.get(
        process.env.VUE_APP_API + "/users?email=" + this.emailUser
      );
      try {
        this.searchData = response.data.users;
      } catch (error) {
        console.error();
      }
    },

    async addFriend(friendID) {
      await axios.post(process.env.VUE_APP_API + "/friends", {
        friendID,
      });
      await this.searchUser();
    },

    async deleteFriend(friendID) {
      await axios.delete(process.env.VUE_APP_API + "/friends", {
        data: {
          friendID,
        },
      });
      await this.searchUser();
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
  height: 276px;
  bottom: 0;
  right: 0;
  width: 400px;
  margin: auto;
  box-shadow: 0px 0px 2px #ddd;
  border: 1px solid #ddd;
  .model-add-friend-name {
    margin: 20px;
    border-bottom: 1px solid #ddd;
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
    input {
      width: 100%;
      height: 40px;
      padding-left: 20px;
      border: none;
      outline: none;
      border-bottom: 1px solid rgb(189, 189, 189);
      &:focus {
        border-bottom: 1px solid rgb(218, 218, 255);
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
        color: white;
        border: none;
        outline: none;
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
      width: 70px;
    }
    .model-cancel {
      margin-right: 10px;
      background: rgb(204, 204, 204);
    }
    .model-search {
      margin-right: 20px;
      background: #6a89cc;
      color: white;
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
  height: 276px;
  bottom: 0;
  width: 100%;
  }
}
</style>