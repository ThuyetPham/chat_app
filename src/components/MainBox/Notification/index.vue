<template>
  <div class="left" :class="{'reponsive-left' : !$store.state.showSideBar}">
    <div class="search-add">
      <Search />
    </div>
   <div class="title-notifi">
     <h2>Notification</h2>
   </div>
   <div class="notifi-choose">
     <div class="notifi-choose-title" @click="notifiRead=true" >{{title}} <i class="fas fa-caret-down"></i></div>
      <div class="notifi-sort" v-show="notifiRead">
        <div class="notifi-sort-item" 
            v-for="(item, index) in chosse" 
            :key="index" 
            @click="numbercheck = item.number, 
            title= item.title, 
            notifiRead=false"
          >
          {{item.title}}
          <i :class="numbercheck == item.number && ' fas fa-check'"></i>
        </div>
      </div>
   </div>
    <div>
      <MessageList @click="handleView"/>
    </div>
  </div>
  <div class="right" :class="{'reponsive-right' : !$store.state.showSideBar}">
    <MessagesMain v-if="$store.state.friend.id" />
  </div>
</template>
<script>
import Search from "@/components/BaseComponent/SearchInput";
import MessageList from "./MessageList";
import MessagesMain from "../Messages/MessagesMain";

export default {
  components: {
    Search,
    MessageList,
    MessagesMain,
  },

  data() {
    return {
      placeholder: "Tìm kiếm",
      notifiRead: false,
      mainCheckBox:true,
      numbercheck:1,
      chosse: [
       {
         title: 'All',
         number:1
       },
       {
         title: 'Unread',
         number:2
       },
      ],
      title:'',
    };
  },

  methods: {
    handleView() {
      if(window.innerWidth < 990) {
        this.$store.commit('HIDE_SIDEBAR')
      }
    }
  },

  created() {
    this.title = this.chosse[0].title
  }
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
  }
}
.title-notifi {
  margin: 0px 20px;
  h2 {
    color: rgb(94, 94, 94);
  }
}
.notifi-choose {
  position: relative;
  margin: 10px 20px;
  .notifi-choose-title {
    font-weight: 600;
    cursor: pointer;
    i{
      color: black;
    }
  }
  .notifi-sort {
    background: #ffffff;
    border: 1px solid #ddd;
    width: 120px;
    cursor: pointer;
    position: absolute;
    top: 31px;
    z-index: 999;
    .notifi-sort-item {
      padding: 7px;
      &:hover {
        background: rgb(233, 233, 255);
      }

       i {
      color: black;
      font-size: 13px;
    }
    }
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