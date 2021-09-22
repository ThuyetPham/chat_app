<template>
  <div id="avatar">
    <div
      class="img-avatar"
      @click="optionAvatar = true"
      v-click-outside="handleClickOutsideAvatar"
    >
      <Avatar :img="$store.state.AUTH.user.avatar" :online="true"/>
    </div>
    <div>
      <OptionAvatar v-show="optionAvatar" @handleAccount="showAccount=true"/>
    </div>
    <div class="box-account" v-show="showAccount">
      <div class="base-account">
        <BaseAccount @closeAccount="showAccount=false" />
      </div>
    </div>
    <div class="iconsTop">
      <div class="icon-item iconsTop01">
        <BaseIcon
          :icon="iconsTop01.icon"
          :activeIcon="iconsTop01.activeIcon"
          :route="iconsTop01.route"
        />
      </div>
      <div class="icon-item iconsTop02">
        <BaseIcon
          :icon="iconsTop02.icon"
          :activeIcon="iconsTop02.activeIcon"
          :route="iconsTop02.route"
        />
      </div>
      <div class="icon-item iconsTop03">
        <BaseIcon
          :icon="iconsTop03.icon"
          :activeIcon="iconsTop03.activeIcon"
          :route="iconsTop03.route"
        />
      </div>
      <div class="icon-item iconsTop04">
        <BaseIcon
          :icon="iconsTop04.icon"
          :activeIcon="iconsTop04.activeIcon"
          :route="iconsTop04.route"
        />
      </div>
      <div class="icon-item moresidebar">
        <div
          @click="
            ($store.state.showSideBar = true),
              ($store.state.showMore = true),
              (iconMore = true)
          "
          :class="{
            activeMore: $store.state.showSideBar && $store.state.showMore,
          }"
          v-click-outside="handleClickOutsideMore"
        >
          <i class="fas fa-ellipsis-h"></i>
        </div>
        <div class="reponsiveHeight" v-show="iconMore">
          <div class="icon-item iconsMore01">
            <BaseIconReponsive
              :icon="iconsTop01.icon"
              :activeIcon="iconsTop01.activeIcon"
              :route="iconsTop01.route"
              :title="iconsTop01.title"
            />
          </div>
          <div class="icon-item iconsMore02">
            <BaseIconReponsive
              :icon="iconsTop02.icon"
              :activeIcon="iconsTop02.activeIcon"
              :route="iconsTop02.route"
              :title="iconsTop02.title"
            />
          </div>
          <div class="icon-item iconsMore03">
            <BaseIconReponsive
              :icon="iconsTop03.icon"
              :activeIcon="iconsTop03.activeIcon"
              :route="iconsTop03.route"
              :title="iconsTop03.title"
            />
          </div>
          <div class="icon-item iconsMore04">
            <BaseIconReponsive
              :icon="iconsTop04.icon"
              :activeIcon="iconsTop04.activeIcon"
              :route="iconsTop04.route"
              :title="iconsTop04.title"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="iconsBottom">
      <div
        class="icon-item"
        @click="optionSetting = true"
        v-click-outside="handleClickOutsideSetting"
      >
        <div
          @click="
            ($store.state.showSideBar = true), ($store.state.showSetting = true)
          "
          :class="{
            activeDiv: $store.state.showSideBar && $store.state.showSetting,
          }"
        >
          <i class="fas fa-cog"></i>
        </div>
      </div>

      <OptionSetting v-show="optionSetting" />
      <div></div>
    </div>
  </div>
</template>
<script>
import Avatar from "../BaseComponent/BaseAvatar.vue";
import OptionAvatar from "./OptionAvatar.vue";
import OptionSetting from "./OptionSetting.vue";
import BaseIcon from "../BaseComponent/BaseIcon.vue";
import BaseIconReponsive from "../BaseComponent/BaseIconReponsive.vue";
import BaseAccount from "../BaseComponent/BaseAccount.vue";
export default {
  data() {
    return {
      setting: false,
      optionSetting: false,
      optionAvatar: false,
      iconMore: false,
      showAccount:false,
      img:'',
      iconsTop01: {
        icon: "far fa-comment-dots",
        activeIcon: "fas fa-comment-dots",
        route: "messages",
        title: "messages",
      },
      iconsTop02: {
        icon: "far fa-address-book",
        activeIcon: "fas fa-address-book",
        route: "contacts",
        title: "contacts",
      },
      iconsTop03: {
        icon: "far fa-bell",
        activeIcon: "fas fa-bell",
        route: "notification",
        title: "notification",
      },
      iconsTop04: {
        icon: "far fa-check-square",
        activeIcon: "fas fa-check-square",
        route: "todo",
        title: "todo",
      },
    };
  },
  components: {
    Avatar,
    OptionAvatar,
    OptionSetting,
    BaseIcon,
    BaseIconReponsive,
    BaseAccount,
  },

  methods: {
    handleClickOutsideAvatar() {
      this.optionAvatar = false;
    },
    handleClickOutsideSetting() {
      this.optionSetting = false;
      this.$store.state.showSetting = false;
    },
    handleClickOutsideMore() {
      this.$store.state.showMore = false;
      this.iconMore = false;
    },
  },

  
};
</script>
<style lang="scss" scoped>
#avatar {
  text-align: center;
  .box-account {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #7f7f7f71;
    top: 0;
    z-index: 9999;
    .base-account {
      width: 400px;
      margin: auto;
      background: #ffffff;
      position: absolute;
      top: 0;
      bottom: 0;
      height: 415px;
      left: 0;
      right: 0;
    }
  }
  .img-avatar {
    margin-bottom: 20px;
  }
  .iconsTop {
    width: 80px;
    text-align: center;
    align-items: center;
    .icon-item {
      transition: all 0.25s;
      cursor: pointer;
    }

    i {
      color: white;
      font-size: 30px;
    }
    .icon-item:hover {
      background: #6a89cc;
    }
    .icon-item:hover {
      background: #6a89cc;
    }
    span {
      border: 2px solid white;
      position: absolute;
      width: 18px;
      margin-top: 19px;
      height: 18px;
      background: red;
      border-radius: 50%;
      margin-left: -6px;
    }
  }
  .iconsBottom {
    position: absolute;
    bottom: 0;
    margin: auto;
    left: 0;
    width: 80px;
    .activeDiv {
      background-color: #1e3799;
    }
    i {
      font-size: 30px;
      padding: 26px 0px;
      color: white;
    }
  }
}

.moresidebar {
  position: relative;
  display: none;
  i {
    padding: 26px 0px;
  }
  .activeMore {
    background-color: #1e3799;
  }
  .reponsiveHeight {
    z-index: 9999;
    position: absolute;
    background: #e5efff;
    left: 100%;
    top: 0;
    box-shadow: 2px 2px 2px #ddd;
    .icon-item {
      width: 80px;
    }
  }
}
@media (max-width:776px) {
  #avatar {
  text-align: center;
  display: flex;
  .box-account {
    background: #4a69bd;
    position: absolute;
    z-index: 9999;
    bottom: 0;
    height: auto;
    .base-account {
      width: 100%;
      margin: auto;
      background: #ffffff;
      position: absolute;
      top:-538px;
      bottom: 0;
      height: 415px;
      left: 0;
      right: 0;
    }
  }
  .img-avatar {
    margin-bottom: 0px;
    margin-top: 5px;
    margin-right: 7px;
    margin-left: 7px;
  }
  .iconsTop {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .icon-item {
      transition: all 0.25s;
      cursor: pointer;
      width: 25% ;
    }

    i {
      color: white;
      font-size: 30px;
    }
    .icon-item:hover {
      background: #6a89cc;
    }
    .icon-item:hover {
      background: #6a89cc;
    }
    span {
      border: 2px solid white;
      position: absolute;
      width: 18px;
      margin-top: 19px;
      height: 18px;
      background: red;
      border-radius: 50%;
      margin-left: -6px;
    }
  }
  .iconsBottom {
    display: none;
    position: absolute;
    bottom: 0;
    margin: auto;
    left: 0;
    width: 80px;
    .activeDiv {
      background-color: #1e3799;
    }
    i {
      font-size: 30px;
      padding: 26px 0px;
      color: white;
    }
  }
}

.moresidebar {
  position: relative;
  display: none;
  i {
    padding: 26px 0px;
  }
  .activeMore {
    background-color: #1e3799;
  }
  .reponsiveHeight {
    z-index: 9999;
    position: absolute;
    background: #e5efff;
    left: 100%;
    top: 0;
    box-shadow: 2px 2px 2px #ddd;
    .icon-item {
      width: 80px;
    }
  }
}
}

@media (max-height: 550px) {
  #avatar {
    text-align: center;
    .img-avatar {
      margin-bottom: 20px;
    }
    .iconsTop {
      width: 80px;
      text-align: center;
      align-items: center;
      .icon-item {
        transition: all 0.25s;
        cursor: pointer;
      }

      i {
        color: white;
        font-size: 30px;
      }
      .icon-item:hover {
        background: #6a89cc;
      }
      .icon-item:hover {
        background: #6a89cc;
      }
      span {
        border: 2px solid white;
        position: absolute;
        width: 18px;
        margin-top: 19px;
        height: 18px;
        background: red;
        border-radius: 50%;
        margin-left: -6px;
      }

      .icon-item.iconsTop01 {
      }
      .icon-item.iconsTop02 {
      }
      .icon-item.iconsTop03 {
        display: none;
      }
      .icon-item.iconsTop04 {
        display: none;
      }
    }
    .iconsBottom {
      position: absolute;
      bottom: 0;
      margin: auto;
      left: 0;
      width: 80px;
      .activeDiv {
        background-color: #1e3799;
      }
      i {
        font-size: 30px;
        padding: 26px 0px;
        color: white;
      }
    }
  }

  .moresidebar {
    position: relative;
    display: block;
    i {
      padding: 26px 0px;
    }
    .activeMore {
      background-color: #1e3799;
    }
    .reponsiveHeight {
      z-index: 9999;
      position: absolute;
      background: #e5efff;
      left: 100%;
      top: 0;
      box-shadow: 2px 2px 2px #ddd;
      .icon-item {
        width: 80px;
      }
      .icon-item.iconsMore01 {
        display: none;
      }
      .icon-item.iconsMore02 {
        display: none;
      }
      .icon-item.iconsMore03 {
        display: block;
      }
      .icon-item.iconsMore04 {
        display: block;
      }
    }
  }
}

@media (max-height: 500px) {
  #avatar {
    text-align: center;
    .img-avatar {
      margin-bottom: 20px;
    }
    .iconsTop {
      width: 80px;
      text-align: center;
      align-items: center;
      .icon-item {
        transition: all 0.25s;
        cursor: pointer;
      }

      i {
        color: white;
        font-size: 30px;
      }
      .icon-item:hover {
        background: #6a89cc;
      }
      .icon-item:hover {
        background: #6a89cc;
      }
      span {
        border: 2px solid white;
        position: absolute;
        width: 18px;
        margin-top: 19px;
        height: 18px;
        background: red;
        border-radius: 50%;
        margin-left: -6px;
      }

      .icon-item.iconsTop01 {
      }
      .icon-item.iconsTop02 {
        display: none;
      }
      .icon-item.iconsTop03 {
        display: none;
      }
      .icon-item.iconsTop04 {
        display: none;
      }
    }
    .iconsBottom {
      position: absolute;
      bottom: 0;
      margin: auto;
      left: 0;
      width: 80px;
      .activeDiv {
        background-color: #1e3799;
      }
      i {
        font-size: 30px;
        padding: 26px 0px;
        color: white;
      }
    }
  }

  .moresidebar {
    position: relative;
    display: block;
    i {
      padding: 26px 0px;
    }
    .activeMore {
      background-color: #1e3799;
    }
    .reponsiveHeight {
      z-index: 9999;
      position: absolute;
      background: #e5efff;
      left: 100%;
      top: 0;
      box-shadow: 2px 2px 2px #ddd;
      .icon-item {
        width: 80px;
      }
      .icon-item.iconsMore01 {
        display: none;
      }
      .icon-item.iconsMore02 {
        display: block;
      }
      .icon-item.iconsMore03 {
        display: block;
      }
      .icon-item.iconsMore04 {
        display: block;
      }
    }
  }
}
@media (max-height: 450px) {
  #avatar {
    text-align: center;
    .img-avatar {
      margin-bottom: 20px;
    }
    .iconsTop {
      width: 80px;
      text-align: center;
      align-items: center;
      .icon-item {
        transition: all 0.25s;
        cursor: pointer;
      }

      i {
        color: white;
        font-size: 30px;
      }
      .icon-item:hover {
        background: #6a89cc;
      }
      .icon-item:hover {
        background: #6a89cc;
      }
      span {
        border: 2px solid white;
        position: absolute;
        width: 18px;
        margin-top: 19px;
        height: 18px;
        background: red;
        border-radius: 50%;
        margin-left: -6px;
      }

      .icon-item.iconsTop01 {
        display: none;
      }
      .icon-item.iconsTop02 {
        display: none;
      }
      .icon-item.iconsTop03 {
        display: none;
      }
      .icon-item.iconsTop04 {
        display: none;
      }
    }
    .iconsBottom {
      position: absolute;
      bottom: 0;
      margin: auto;
      left: 0;
      width: 80px;
      .activeDiv {
        background-color: #1e3799;
      }
      i {
        font-size: 30px;
        padding: 26px 0px;
        color: white;
      }
    }
  }

  .moresidebar {
    position: relative;
    display: block;
    i {
      padding: 26px 0px;
    }
    .activeMore {
      background-color: #1e3799;
    }
    .reponsiveHeight {
      z-index: 9999;
      position: absolute;
      background: #e5efff;
      left: 100%;
      top: 0;
      box-shadow: 2px 2px 2px #ddd;
      .icon-item {
        width: 80px;
      }
      .icon-item.iconsMore01 {
        display: block;
      }
      .icon-item.iconsMore02 {
        display: block;
      }
      .icon-item.iconsMore03 {
        display: block;
      }
      .icon-item.iconsMore04 {
        display: block;
      }
    }
  }
}
</style>
