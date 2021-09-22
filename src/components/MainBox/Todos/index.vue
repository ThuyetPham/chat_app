<template>
  <div class="left" :class="{'reponsive-left': !$store.state.showSideBar}">
    <div class="search-add">
      <Search/>
    </div>

    <div>
      <Todolist @handleView="handleView"/>
    </div>
  </div>
  <div class="right" :class="{'reponsive-right': !$store.state.showSideBar}">
    <MessagesMain />
   
  </div>
</template>
<script>
import Search from "@/components/BaseComponent/SearchInput";
import Todolist from "./Todolist";
import MessagesMain from "../Messages/MessagesMain";
export default {
  components: {
    Search,
    Todolist,
    MessagesMain,
  },

  data() {
    return {
      mainCheckBox:true,
       reponsive:true,
       reponsiveMain:true,
      id:1,
    };
  },

  methods: {
    handleView() {
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