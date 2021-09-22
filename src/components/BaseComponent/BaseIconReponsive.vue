<template>
  <div
    class="iconsidebar"
    @click="changeRoute"
    :class="isActive(route) && 'activeDiv'"
  >
    <i :class="isActive(route) ? activeIcon : icon"></i>
    <!-- <span></span> -->
    <p>{{title}}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: {
    icon: String,
    activeIcon: String,
    route: String,
    title:String
  },
  data() {
    return {};
  },
  // created() {
  //     console.log(this.$store.state.route);
  // },
  methods: {
    changeRoute() {
      this.$store.commit("CHANGE_ROUTE", this.route),
        (this.$store.state.showSetting = false);
    },
  },
  computed: {
    ...mapGetters(["isActive"]),
  },
};
</script>
<style lang="scss" scoped>
.iconsidebar {
  padding: 10px 0px;
  background: #ffffff;
  &.activeDiv {
  background-color: #e5efff;
}
}
i {
  font-size: 20px;
  color: #4a69bd;
}
span {
  border: 2px solid white;
  position: absolute;
  width: 13px;
  margin-top: -4px;
  height: 13px;
  background: red;
  border-radius: 50%;
  margin-left: -6px;
}

p {
  color: black;
  font-size: 13px;
  color: #001a33;
      margin-bottom: 0px;
}
</style>