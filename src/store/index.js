import { createStore } from "vuex";
import AuthStore from "./modules/auth";
import SocketStore from "./modules/socket";
import authPlugin from "./plugins/authPlugin";
import socketPlugin from "./plugins/socketPlugin";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      route: "messages",
      friend: {},
      showSideBar: true,
      showSetting: false,
      showMore: false,
    };
  },
  getters: {
    isActive: (state) => (route) => {
      return state.route == route;
    },
  },
  mutations: {
    CHANGE_ROUTE(state, route) {
      state.route = route;
      state.showSideBar = true;
    },
    HIDE_SIDEBAR(state) {
      state.showSideBar = false;
    },
    CHANGE_FRIEND(state, friend) {
      state.friend = friend;
    },
  },
  modules: {
    AUTH: AuthStore,
    SOCKET: SocketStore,
  },
  plugins: [authPlugin, socketPlugin],
});

export default store;
