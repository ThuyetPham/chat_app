<template>
  <div id="search-user">
    <div class="search-user">
      <div class="search-input" @click="showSearch = true">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search menu" v-model="filterFriend" />
      </div>
      <div class="search-close" v-if="filterFriend" @click="filterFriend = ''">
        <b>Close</b>
      </div>
      <div id="add-Friend" v-else>
        <div class="addFriend" @click="addFriend = true">
          <i class="far fa-user"></i>
          <i class="fas fa-plus"></i>
        </div>
        <div class="addFriend" @click="createGroup = true">
          <i class="fas fa-users"></i>
          <i class="fas fa-plus"></i>
        </div>
      </div>
    </div>
    <div class="list-search-friend" v-if="filterFriend">
      <div
        class="list-search-item"
        v-for="(item, index) in nameFriend"
        :key="index"
        @click="$store.commit('CHANGE_FRIEND', item.user)"
      >
        <img :src="item.user.avatar" alt="" />
        <b>{{ item.user.firstName + " " + item.user.lastName }}</b>
      </div>
    </div>
  </div>
  <BaseAddFriendModel v-show="addFriend" @closeAddFriend="addFriend = false" />
  <BaseCreateGroup v-show="createGroup" @closeGroup="createGroup = false" />
</template>
<script>
import BaseCreateGroup from "@/components/BaseComponent/BaseCreateGroup";
import BaseAddFriendModel from "@/components/BaseComponent/BaseAddFriendModel";
import axios from "axios";
export default {
  components: {
    BaseCreateGroup,
    BaseAddFriendModel,
  },
  data() {
    return {
      addFriend: false,
      createGroup: false,
      showSearch: false,
      filterFriend: "",
      searchFriends: [],
    };
  },

  async created() {
    let res = await axios.get(process.env.VUE_APP_API + "/friends?status=ACCEPTED");
    this.searchFriends = res.data.slice(0, 10);
  },
  computed: {
    nameFriend: function () {
      return this.searchFriends.filter((item) => {
        return (item.user.firstName + ' ' + item.user.lastName).match(
          this.filterFriend
        );
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#search-user {
  position: relative;
  z-index: 999;
  .search-user {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 26px 10px 10px 10px;
    align-items: center;
    .search-close {
      margin-right: 14px;
      cursor: pointer;
    }
    .search-input {
      input {
        height: 40px;
        border-radius: 40px;
        border: none;
        background: rgb(226, 226, 226);
        padding-left: 40px;
        outline: none;
        margin: auto;
        width: 250px;
      }
      input:focus {
        border: 1px solid #6a89cc;
        background: white;
      }

      i {
        position: absolute;
        margin-top: 13px;
        margin-left: 15px;
        color: rgb(99, 99, 99);
      }
    }
    #add-Friend {
      display: flex;
      .addFriend {
        position: relative;
        margin-left: 20px;
        cursor: pointer;
      }

      .addFriend i {
        color: #394e60;
      }

      .addFriend i.fas.fa-plus {
        position: absolute;
        font-size: 8px;
      }
    }
  }
  .list-search-friend {
    position: absolute;
    background: #ffffff;
    width: 100%;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 19%);
    border: 1px solid #e1e4ea;
    .list-search-item {
      padding: 10px;
      &:hover {
        background: #f3f3f3;
      }
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0px 10px;
      }
      b {
        font-weight: 500;
      }
    }
  }
}
</style>