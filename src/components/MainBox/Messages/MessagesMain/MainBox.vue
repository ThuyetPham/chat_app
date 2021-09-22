<template>
  <div id="main-box">
    <div class="main-box">
      <MainBoxMessageItem
        v-for="(mess, index) in $store.getters['SOCKET/messagesCurrentRoom']"
        :key="index"
        :mess="mess"
      />
    </div>
  </div>
</template>
<script>
import MainBoxMessageItem from "./MainBoxMessageItem.vue";

export default {
  components: {
    MainBoxMessageItem,
  },
  data() {
    return {
      socket: null,
    };
  },
  methods: {
    scrollToEnd: function () {
      // scroll to the start of the last message
      var container = this.$el.querySelector(".main-box");
      if (container && container.lastElementChild)
        container.parentNode.scrollTop = container.lastElementChild.offsetTop;
    },
  },
  mounted() {
    this.scrollToEnd();
  },
  updated() {
    // whenever data changes and the component re-renders, this is called.
    this.$nextTick(() => this.scrollToEnd());
  },
};
</script>
<style lang='scss' scoped>
#main-box {
  overflow-y: auto;
  padding: 0px 0px 0px 27px;
  height: calc(100vh - 200px);
  background: #ffebeb;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    width: 8px;
    position: absolute;
    background: rgb(173, 153, 153);
    opacity: 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(226, 226, 226);
    border-radius: 3px;
    opacity: 0.5;
    opacity: 0;
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
}
.main-box {
  display: block;
  width: 90%;
  margin: auto;
}
</style>