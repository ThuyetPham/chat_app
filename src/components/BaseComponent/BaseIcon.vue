<template>
  <div
    class="iconsidebar"
    @click="changeRoute"
    :class="isActive(route) && 'activeDiv'"
  >
    <i :class="isActive(route) ? activeIcon : icon"></i>
    <!-- <span></span> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: {
    icon: String,
    activeIcon: String,
    route: String,
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
<style scoped>
.iconsidebar {
  padding: 28px 0px;
}
i {
  font-size: 30px;
  color: white;
}
span {
  border: 2px solid white;
  position: absolute;
  width: 18px;
  margin-top: -4px;
  height: 18px;
  background: red;
  border-radius: 50%;
  margin-left: -6px;
}

.activeDiv {
  background-color: #1e3799;
}

@media (max-width: 776px) {
  .iconsidebar {
    padding: 18px 16px;
  }
  i {
    font-size: 23px;
    color: white;
  }
  span {
    border: 2px solid white;
    position: absolute;
    width: 18px;
    margin-top: -4px;
    height: 18px;
    background: red;
    border-radius: 50%;
    margin-left: -6px;
  }

  .activeDiv {
    background-color: #1e3799;
  }
}
</style>