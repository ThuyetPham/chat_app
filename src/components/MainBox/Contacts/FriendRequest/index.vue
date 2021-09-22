<template>
  <div>
    <div class="friend-request-main">
      <div class="friend-request-icon" @click="$store.state.showSideBar = true">
        <i class="fas fa-angle-left"></i>
      </div>
      <div class="friend-request-title">
        <i class="fas fa-user-plus"></i>
        <b>Friend Request</b>
      </div>
    </div>
    <div
      class="model-friend-request"
      v-for="(addfriend, index) in addFriends"
      :key="index"
    >
      <div class="friend-request">
        <div class="friend-request-img">
          <img :src="addfriend.img || require('@/assets/images/user01.jpg')" alt="" />
          <div class="friend-request-name">
            <b class="name">{{
              addfriend.firstName + " " + addfriend.lastName
            }}</b>
            <p>{{ addfriend.friendrequest }}</p>
          </div>
        </div>
        <div class="friend-request-button">
          <button class="delete">Xóa</button>
          <button class="accept" @click="acceptFriend(addfriend._id, index)">
            Kết bạn
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  emits: ["acceptUser"],
  data() {
    return {
      addFriends: [],
    };
  },

  async created() {
    let response = await axios.get(
      process.env.VUE_APP_API + "/friends?status=PENDING"
    );
    try {
      for (let i = 0; i < response.data.length; i++) {
        this.addFriends.push(response.data[i].user);
      }
    } catch (arror) {
      console.log(arror);
    }
  },

  methods: {
    async acceptFriend(friendID, index) {
      await axios.patch(process.env.VUE_APP_API + "/friends", {
        friendID,
      });
      this.addFriends.splice(index, 1);
      this.$emit("acceptUser");
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
.model-friend-request {
  margin-top: 10px;
  .friend-request {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: auto;
    height: 100px;
    padding: 0px 10px;
    &:hover {
      background: rgb(231, 233, 236);
    }
    .friend-request-img {
      align-items: center;
      display: flex;
      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid white;
        margin-right: 10px;
      }

      .friend-request-name {
        .name {
          font-size: 20px;
        }
      }
    }

    .friend-request-button {
      button {
        height: 40px;
        width: 80px;
        border: none;
        outline: none;
        border-radius: 4px;
        margin: 0px 5px;
      }
      .accept {
        background: #6a89cc;
        color: white;
      }
    }
  }
}
@media (min-width: 990px) and (max-width: 1200px) {
  .model-friend-request {
    margin-top: 10px;
    .friend-request {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: auto;
      height: 100px;
      padding: 0px 10px;
      &:hover {
        background: rgb(231, 233, 236);
      }
      .friend-request-img {
        align-items: center;
        display: flex;
        width: 60%;
        img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 50%;
          border: 1px solid white;
          margin-right: 10px;
        }

        .friend-request-name {
          .name {
            font-size: 16px;
          }
          p {
            font-size: 14px;
            display: -webkit-box;
            -webkit-box-align: inherit;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }

      .friend-request-button {
        button {
          height: 30px;
          width: 65px;
          border: none;
          outline: none;
          border-radius: 4px;
          margin: 2px 5px;
          font-size: 13px;
        }
        .accept {
          background: #6a89cc;
          color: white;
        }
      }
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
  .model-friend-request {
    margin-top: 10px;
    .friend-request {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: auto;
      height: 100px;
      padding: 0px 10px;
      &:hover {
        background: rgb(231, 233, 236);
      }
      .friend-request-img {
        align-items: center;
        display: flex;
        width: 60%;
        img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 50%;
          border: 1px solid white;
          margin-right: 10px;
        }

        .friend-request-name {
          .name {
            font-size: 16px;
          }
          p {
            font-size: 14px;
            display: -webkit-box;
            -webkit-box-align: inherit;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }

      .friend-request-button {
        button {
          height: 30px;
          width: 65px;
          border: none;
          outline: none;
          border-radius: 4px;
          margin: 2px 5px;
          font-size: 13px;
        }
        .accept {
          background: #6a89cc;
          color: white;
        }
      }
    }
  }
}
</style>