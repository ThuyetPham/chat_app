<template>
   <div class="left" :class="{'reponsive-left': !$store.state.showSideBar}">
        <div class="search-add">
            <Search />
        </div>
        <div class="classify-add">
            <ListClassify />            
        </div>
        <div>
            <MessageList @handleView="handleView"/>
        </div>
   </div>
   <div class="right" :class="{'reponsive-right': !$store.state.showSideBar}">
       <MessagesMain v-if="$store.state.friend.id || $store.state.SOCKET.roomID"/>
   </div>
</template>
<script>
import Search from '@/components/BaseComponent/SearchInput'
import ListClassify from "./MessageLabel"
import MessageList from "./MessageList"
import MessagesMain from "./MessagesMain"

export default {
    components: {
        Search,
        ListClassify,
        MessageList,
        MessagesMain,
      
    },

    data() {
        return {
        }
    },
       methods: {
        handleView(){
            if (window.innerWidth <= 990) this.$store.commit('HIDE_SIDEBAR')
        }
    }
}
</script>
<style scoped>
.left {
    border-right: 1px solid #ddd;
    padding-right: 5px;
    width: 370px;
}

.right {
    width: calc(100% - 300px);
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