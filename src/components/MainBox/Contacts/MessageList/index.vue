<template>
  <div>
    <div id="UserChat">
      <div class="scroll-Chat">
        <MessageListItem
          v-for="(user, index) in users"
          :user="user"
          :key="index"
          @click="
            indexUser = user.user._id;
            $emit('handleFriend', user);
            $emit('handleView');
            $store.commit('CHANGE_FRIEND', user.user);
          "
          :indexUser="indexUser"
          @deleteFriend="deleteFriend(index)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import MessageListItem from "./MessageListItem.vue";
import axios from "axios";
export default {
  components: {
    MessageListItem,
  },
  emits: ["handleFriend", "handleView"],
  data() {
    return {
      noteChat: false,
      indexUser: "",
      showUserItem: false,
      users: [],
    };
  },
  async created() {
    await this.getListFriend();
  },

  methods: {
    async getListFriend() {
      let res = await axios.get(
        process.env.VUE_APP_API + "/friends?status=ACCEPTED"
      );
      this.users = res.data;
    },
    deleteFriend(index) {
      this.users.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
#UserChat {
  width: auto;
  position: relative;

  .scroll-Chat {
    overflow-y: scroll;
    height: calc(100vh - 235px);
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
    .activeUserCHat {
      background: #e5efff;
    }
  }
}
</style>