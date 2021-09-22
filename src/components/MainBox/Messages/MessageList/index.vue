<template>
  <div>
    <MessageSort />
    <div id="UserChat">
      <div class="scroll-Chat">
        <MessageListItem
          v-for="(user, index) in $store.getters['SOCKET/rooms']"
          :user="user"
          :key="index"
          @click="
            indexUser = user.id;
            $emit('handleFriend', user);
            $emit('handleView');
            $store.commit('SOCKET/setRoom', user.id);
          "
          :indexUser="indexUser"
        />
      </div>
    </div>
  </div>
</template>
<script>
import MessageSort from "./MessageSort.vue";
import MessageListItem from "./MessageListItem.vue";

export default {
  components: {
    MessageSort,
    MessageListItem,
  },
  emits: ["handleFriend", "handleView"],
  data() {
    return {
      noteChat: false,
      indexUser: "",
      showUserItem: false,
    };
  },
  async created() {
    await this.$store.dispatch("SOCKET/SET_ROOMS");
  },
};
</script>

<style lang="scss" scoped>
#UserChat {
  width: auto;
  position: relative;
  overflow-y: scroll;
  .scroll-Chat {
    height: calc(100vh - 217px);
    .activeUserCHat {
      background: #e5efff;
    }
  }
  &::-webkit-scrollbar {
    width: 8px;
    position: absolute;
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #72808e75;
    border-radius: 3px;
    opacity: 0.5;
  }
}
</style>