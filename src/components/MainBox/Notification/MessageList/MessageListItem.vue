<template>
<div class="notification-home">
  <div class="notifi-time">
  </div>
    <div class="user-chat" :class="indexUser == user.id && 'active-user-chat'">
      <img :src="user.img" />
      <div class="infoChat">
        <div class="nameUser">
          <b>{{ user.name }}</b>
          <p class="lastMessage">{{user.lastMessage}}</p>
        </div>
        <div class="timeMessage">
          <span>{{user.time}}</span>
          <button><i :class="user.icon"></i></button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    user: Object,
    indexUser: Number,
  },
  data() {
    return {
      time: 'Today'
    };
  },
  methods: {
    handleClickOutside() {
      this.clickButton = false
    },
  },
};
</script>
<style lang="scss" scoped>
.notification-home {
 
.user-chat {
  display: flex;
  height: 70px;
  background: #ffffff;
  align-items: center;
  cursor: pointer;
  &.active-user-chat {
    background: #e5efff;
  }
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
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
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
}
}

</style>