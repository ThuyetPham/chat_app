<template>
  <div>
    <div id="UserChat">
     <div class="scroll-Chat">
        <div class="notifi-days" v-for="(days, index) in notis" :key="index">
        <span>{{index}}</span>
        <MessageListItem 
          v-for="(user, index) in days"
          :key="index"       
          :user="user"
          :indexUser = indexUser
          @click="$store.commit('CHANGE_FRIEND', user)" 
        />
      </div>
     </div>
    </div>
  </div>
</template>
<script>
import MessageListItem from "./MessageListItem.vue";
export default {
  components: {
    MessageListItem,
  },
 
  data() {
    return {
      noteChat: false,
      indexUser: 0,
      showUserItem: false,
      time:'',
      notis: {
       "Today": [
          {
          img: require("@/assets/images/user10.jpg"),
          name: "Thuyết Phạm",
          lastMessage: "@cat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus justo, vulputate sed dolor sit amet, fermentum luctus sapien. Aliquam sed posuere eros, sit amet vehicula enim.",
          id: 1,
          icon: 'fas fa-thumbs-up',
          time:'01:00'
        },
        {
          img: require("@/assets/images/user09.jpg"),
          name: "Hà Hạnh",
          lastMessage: "@cat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus justo, vulputate sed dolor sit amet, fermentum luctus sapien. Aliquam sed posuere eros, sit amet vehicula enim.",
          id: 2,
          icon: 'fas fa-heart',
          time:'11:30'
        },
        {
          img: require("@/assets/images/user08.jpg"),
          name: "Đoàn Thương",
          lastMessage: "@cat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus justo, vulputate sed dolor sit amet, fermentum luctus sapien. Aliquam sed posuere eros, sit amet vehicula enim.",
          id: 3,
          icon: 'far fa-smile-beam',
          time:'02:20'
        },
       ],
       '28/08/2021': [
         {
          img: require("@/assets/images/user07.jpg"),
          name: "Lê Trang",
          lastMessage: "@cat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus justo, vulputate sed dolor sit amet, fermentum luctus sapien. Aliquam sed posuere eros, sit amet vehicula enim.",
          id: 4,
          icon: 'far fa-grin-stars',
          time:'13:43'
        },
        {
          img: require("@/assets/images/user05.jpg"),
          name: "Lê Lý",
          lastMessage: "@cat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus justo, vulputate sed dolor sit amet, fermentum luctus sapien. Aliquam sed posuere eros, sit amet vehicula enim.",
          id: 5,
          icon: 'far fa-kiss-wink-heart',
          time:'12:42'
        },
        {
          img: require("@/assets/images/user06.png"),
          name: "Tom Hiddleston.",
          lastMessage: "@cat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus justo, vulputate sed dolor sit amet, fermentum luctus sapien. Aliquam sed posuere eros, sit amet vehicula enim.",
          id: 6,        
          icon: 'fas fa-thumbs-up',
          time:'00:30'
        },
       ],
       '30/08/2021': [
          {
          img: require("@/assets/images/user07.jpg"),
          name: "Emily",
          lastMessage: "hello",
          id: 7,
          icon: 'fas fa-thumbs-up',
          time:'11:30'
        },
        {
          img: require("@/assets/images/user08.jpg"),
          name: "Jessica",
          lastMessage: "hello",
          id: 8,         
          icon: 'fas fa-thumbs-up',
          time:'21:43'
        },
        {
          img: require("@/assets/images/user09.jpg"),
          name: "A Cường",
          lastMessage: "hello",
          id: 9,
          icon: 'fas fa-thumbs-up',
          time:'09:46'
        },
        {
          img: require("@/assets/images/user10.jpg"),
          name: "Sarah",
          lastMessage: "hello",
          id: 10,
          icon: 'fas fa-thumbs-up',
          time:'00:30'
        },
       ]
      },
    };
  },

};
</script>

<style lang="scss" scoped>
#UserChat {
  width: auto;
  position: relative;
  overflow-y: scroll;
  .scroll-Chat {
    height: calc(100vh - 164px);
    .notifi-days {
      border-bottom: 8px solid #ddd;
      span {
    color: rgb(104, 114, 114);
    font-size: 13px;
    margin: 20px 20px 0px 20px;
  }
    }
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