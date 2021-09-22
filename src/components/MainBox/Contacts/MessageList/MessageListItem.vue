<template>
  <div
    class="user-chat"
    :class="indexUser == user.user._id && 'active-user-chat'"
  >
    <div class="user-chat-avatar">
      <img :src="user.user.avatar" />
      <span v-if="user.user.online"></span>
    </div>
    <div class="infoChat">
      <div class="nameUser">
        <b>{{ user.user.firstName + " " + user.user.lastName }}</b>
      </div>
      <div class="timeMessage">
        <button
          @click="clickButton = true"
          v-click-outside="handleClickOutside"
        >
          <i class="fas fa-ellipsis-h"></i>
        </button>
        <div class="NoteChat" v-show="clickButton">
          <ul>
            <li>Ghim hội thoại</li>
            <li>Thêm vào nhóm</li>
            <li>Tắt thông báo</li>
            <li @click="deleteFriend(user.user._id), $emit('deleteFriend')">
              Xóa bạn
            </li>
            <li>Báo xấu</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  emits: ["deleteFriend"],
  props: {
    user: Object,
    indexUser: String,
  },
  data() {
    return {
      clickButton: false,
    };
  },
  methods: {
    handleClickOutside() {
      this.clickButton = false;
    },
    async deleteFriend(friendID) {
      await axios.delete(process.env.VUE_APP_API + "/friends", {
        data: {
          friendID,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.user-chat {
  display: flex;
  height: 70px;
  background: #ffffff;
  align-items: center;
  cursor: pointer;
  &.active-user-chat {
    background: #e5efff;
  }
  .user-chat-avatar {
    position: relative;
    img {
      position: relative;
      width: 55px;
      height: 55px;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      border: 1px solid #ffffff;
      margin: 10px 12px;
    }
    span {
      border: 2px solid white;
      position: absolute;
      width: 15px;
      margin-top: 47px;
      height: 15px;
      background: #50a350;
      border-radius: 50%;
      margin-left: -26px;
    }
  }

  .infoChat {
    position: relative;
    width: calc(100% - 84px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nameUser {
      b {
        font-size: 16px;
        color: #001a33;
        font-weight: 400;
      }
      .lastMessage {
        color: #72808e;
        font-size: 14px;
        margin-bottom: 0.5rem !important;
      }
    }
    .timeMessage {
      position: relative;
      display: inline-grid;
      span {
        color: #72808e;
        font-size: 12px;
      }

      button {
        background: transparent;
        border: none;
        i {
          font-size: 13px;
          color: #72808e;
        }
      }

      .NoteChat {
        top: 30px;
        position: absolute;
        color: #001a33;
        position: absolute;
        width: 200px;
        right: 0;
        box-shadow: 0px 1px 5px #ddd;
        font-size: 13px;
        background: #ffffff;
        padding-right: 25px;
        z-index: 99;
        ul {
          list-style: none;
          li {
            line-height: 40px;
            &:hover {
              background: rgb(247, 247, 247);
              cursor: pointer;
            }
          }

          .Border {
            border-bottom: 1px solid #ddd;
          }
        }
      }
    }
  }

  button {
    opacity: 0;
  }
  &:hover {
    button {
      opacity: 1;
      &:hover {
        i {
          color: black;
        }
      }
    }
  }
}
</style>