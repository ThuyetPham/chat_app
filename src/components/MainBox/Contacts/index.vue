<template>
  <div class="left" :class="{'reponsive-left': !$store.state.showSideBar}">
    <div class="search-add">
      <Search />
    </div>
    <div class="add-friend">
      <div class="add-friends"  @click="addFriend = true">Add friend by phone number</div>
      <div class="add-groups-number" @click="id=2">
        <div class="icon-add" @click="handleView"><i class="fas fa-user-plus"></i></div>
        <div @click="handleView">Friend Request</div>
      </div>

      <div class="add-groups-number" @click="id=3; handleView">
        <div class="icon-add" @click="handleView"><i class="fas fa-users"></i></div>
        <div @click="handleView">Joined Groups</div>
      </div>

    </div>
    <div>
      <MessageList @click="id=1" @handleView="handleView" ref="listfriend"/>
    </div>
  </div>
  <div class="right" :class="{'reponsive-right': !$store.state.showSideBar}">
    <MessagesMain v-if="$store.state.friend._id && id==1"/>
    <FriendRequest v-else-if="id==2" @acceptUser="$refs.listfriend.getListFriend()" />
    <CreateGroup v-else-if="id==3" />
  </div>
</template>
<script>
import Search from "@/components/BaseComponent/SearchInput";
import MessageList from "./MessageList";
import MessagesMain from "../Messages/MessagesMain";
import FriendRequest from "./FriendRequest"
import CreateGroup from "./CreateGroup"
export default {
  components: {
    Search,
    MessageList,
    MessagesMain,
    FriendRequest,
    CreateGroup
  },

  data() {
    return {
      mainCheckBox:true,
       reponsive:true,
       reponsiveMain:true,
      id:1,
      contactFriend:[],
      requestIcon:false
    };
  },

  methods: {
    handleView() {
      if(window.innerWidth < 990){
        this.$store.commit('HIDE_SIDEBAR')
        
      }
    },
    handleFr() {
      if(window.innerWidth < 990){
        this.$store.commit('HIDE_SIDEBAR')
        
      }
    },
  },
};
</script>
<style lang="scss" scoped>

.left {
  border-right: 1px solid #ddd;
  padding-right: 5px;
  width: 370px;
}


.right {
  width: calc(100% - 300px);
}

.add-friend {
  .add-friends {
    font-weight: 700;
    font-size: 15px;
    margin: 15px;
    cursor: pointer;
  }

  .icon-add {
    width: 40px;
    height: 40px;
    border: 1px solid black;
    border-radius: 50%;
    text-align: center;
    margin: 0px 10px;
    i {
      color: black;
      margin-top: 10px;
    }
  }

  .add-groups-number {
    display: flex;
    margin: 10px 0px;
    align-items: center;
    cursor: pointer;
  }
}

@media (max-width:990px) {
    .left {
        width: 100%;
    }
    .reponsive-left {
        display: none;
    }
    .right {
        display: none;
    }
    .right.reponsive-right {
        width: 100%;
        display: block;
    }
}
</style>