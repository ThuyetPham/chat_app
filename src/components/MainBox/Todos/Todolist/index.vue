<template>
  <div>
    <div id="UserChat">
      <TodoTab @handleTodo="modeltodo = true" @changecompleted="changecompleted" @changedoing="changedoing" @todotask="todotask"/>
      <div class="scroll-Chat" >
        <div v-if="showTodo">
          <TodolistItem
            v-for="(user, index) in Users"
            :user="user"
            :key="index"
            @click="
              indexUser = user.id;
              $emit('handleView');
              $store.commit('CHANGE_FRIEND', user);
            "
            :indexUser="indexUser"
          />
        </div>
        <TodoCreate v-else />
      </div>
    </div>
    <ModelTodo v-show="modeltodo" @closeHandleTodo="modeltodo = false" />
  </div>
</template>
<script>
import TodolistItem from "./TodolistItem.vue";
import TodoTab from "./TodoTab.vue";
import ModelTodo from "./ModelTodo.vue";
import TodoCreate from "./TodoCreate.vue";
export default {
  components: {
    TodoTab,
    TodolistItem,
    ModelTodo,
    TodoCreate,
  },
  emits: [ "handleView"],
  data() {
    return {
      modeltodo: false,
      indexUser: 0,
      showTodo: true,
      Users: [
        {
          img: require("@/assets/images/user06.png"),
          name: "Tom Hiddleston.",
          lastMessage: "hi",
          id: 6,
          button: 6,
        },
        {
          img: require("@/assets/images/user07.jpg"),
          name: "Emily",
          lastMessage: "hello",
          id: 7,
          button: 7,
        },
        {
          img: require("@/assets/images/user10.jpg"),
          name: "Sarah",
          lastMessage: "hello",
          id: 10,
          button: 10,
        },
      ],
    };
  },

  methods: {

    changedoing(doing) {
      if (doing == 0) {
        this.showTodo = false;
      }else {
        this.showTodo = true;
      }
    },
    changecompleted(completed) {
      if (completed == 0) {
        this.showTodo = false;
      }
      else{
        this.showTodo = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>