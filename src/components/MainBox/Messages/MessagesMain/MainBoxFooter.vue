<template>
  <div id="message-chat">
    <div class="MainBoxIcon">
      <MainBoxIcon
        v-for="(icon, index) in iconFooter"
        :key="index"
        :icon="icon"
      />
    </div>
    <form class="send-message" @submit.prevent="sendMessage">
      <input type="text" placeholder="Message..." v-model="message" />
      <div class="MainBoxIcon">
        <MainBoxIcon :icon="'far fa-smile-beam'" />
        <MainBoxIcon
          type="submit"
          v-if="message"
          :icon="'fas fa-paper-plane'"
        />
        <MainBoxIcon v-else :icon="'fas fa-thumbs-up'" />
      </div>
    </form>
  </div>
</template>
<script>
import MainBoxIcon from "./MainBoxIcon.vue";
export default {
  emits: ["sendMessageFooter"],
  components: {
    MainBoxIcon,
  },
  data() {
    return {
      message: "",
      iconFooter: [
        "fas fa-cat",
        "far fa-file-image",
        "fas fa-paperclip",
        "far fa-clock",
      ],
    };
  },
  methods: {
    sendMessage() {
      let data = {
        message: this.message,
      };
      if (this.$store.state.SOCKET.roomID)
        data.roomID = this.$store.state.SOCKET.roomID;
      else data.userID = this.$store.state.friend._id;
      this.$store.dispatch("SOCKET/SEND_MESSAGE", data);
      this.message = "";
    },
  },
};
</script>
<style lang="scss" scoped>
#message-chat {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  .MainBoxIcon {
    display: flex;
    padding: 10px 0px;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
  }

  .send-message {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .MainBoxIcon {
      border-bottom: none;
    }
    input {
      width: 100%;
      padding-left: 10px;
      border: none;
      outline: none;
      &:focus {
        border-top: 1px solid rgb(135, 183, 238);
      }
    }
  }
}
</style>