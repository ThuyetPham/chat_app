<template>
  <div id="chat">
    <div
      class="sidebar"
      :class="{ 'reponsive-left': !$store.state.showSideBar }"
    >
      <Siderbar />
    </div>
    <div class="messages">
      <Messages v-if="$store.state.route == 'messages'" />
      <Contacts v-else-if="$store.state.route == 'contacts'" />
      <Notification v-else-if="$store.state.route == 'notification'" />
      <Todos v-else-if="$store.state.route == 'todo'" />
    </div>
  </div>
</template>

<script>
import Siderbar from "../components/Sidebar";
import Messages from "../components/MainBox/Messages";
import Contacts from "../components/MainBox/Contacts";
import Notification from "../components/MainBox/Notification";
import Todos from "../components/MainBox/Todos";

export default {
  components: {
    Siderbar,
    Messages,
    Contacts,
    Notification,
    Todos,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#chat {
  display: flex;
  .sidebar {
    width: 80px;
    height: 100vh;
    background: #4a69bd;
    #avatar {
      text-align: center;
      margin: 20px 0px;
      .iconsTop {
        ul {
          list-style: none;
          li {
            list-style: none;
          }
        }
      }
    }
  }

  .messages {
    background: #ffffff;
    display: flex;
    width: 100%;
    border-right: 1px solid #394e60;
  }
}

@media (max-width: 776px) {
  #chat {
    display: flex;
    .sidebar {
      width: 100%;
      height: auto;
      background: #4a69bd;
      position: absolute;
      z-index: 9999;
      bottom: 0;
      #avatar {
        text-align: center;
        margin: 0px;
        .iconsTop {
          ul {
            list-style: none;
            li {
              list-style: none;
            }
          }
        }
      }
    }

    .messages {
      background: #ffffff;
      display: flex;
      width: 100%;
      border-right: 1px solid #394e60;
    }
  }
  .reponsive-left {
    display: none;
  }
}
</style>
