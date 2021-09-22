import axios from 'axios'

const state = {
  roomID: null,
  rooms: [],
}

const getters = {
  room(state) {
    const room = state.rooms.find((room) => room.room._id === state.roomID)
    if (!room) return {}
    return {
      _id: room.room._id,
      name: room.name,
      avatar: room.avatar[0]
    }
  },
  rooms(state) {
    return state.rooms.map((room) => ({
      img: room.avatar[0],
      name: room.name,
      lastMessage: room.room.messages.length > 0 && room.room.messages[room.room.messages.length - 1].content,
      id: room.room._id,
      button: room.room._id,
    }))
  },
  messagesCurrentRoom(state) {
    const room = state.rooms.find((room) => room.room._id === state.roomID)
    if (!room) {
      return []
    }
    return room.room.messages.map((m) => ({
      message: m.content,
      sender: m.user,
    }))
  },
  messagesWithRoom(state) {
    return (roomID) => {
      const room = state.rooms.find((room) => room.room._id === roomID)
      if (!room) {
        return []
      }
      return room.room.messages.map((m) => ({
        message: m.content,
        sender: m.user,
      }))
    }
  },
}

const mutations = {
  setRoom(state, roomID) {
    state.roomID = roomID
  },
  setRooms(state, rooms) {
    state.rooms = rooms
  },
  receiveMessage(state, { room, callback }) {
    const rooms = [...state.rooms]
    const senderIndex = rooms.findIndex((r) => r.room._id == room._id)
    if (senderIndex > -1) {
      rooms[senderIndex].room = room
      state.rooms = rooms
    } else callback()
  },
}

const actions = {
  async SET_ROOM_BY_FRIEND_ID({ commit }, friendID) {
    var res = await axios.get(
      process.env.VUE_APP_API + '/rooms?friendID=' + friendID
    )
    if (res.data) {
      commit('setRoom', res.data._id)
    } else commit('setRoom', null)
  },
  async SET_ROOM_ID({ commit }, roomID) {
    commit('setRoom', roomID)
  },
  async SET_ROOMS({ commit }) {
    let res = await axios.get(process.env.VUE_APP_API + '/rooms')
    if (res.data) {
      commit('setRooms', res.data)
    } else commit('setRooms', [])
  },
  SEND_MESSAGE(_, data) {
    // console.log('SEND_MESSAGE', data, this.$socket)
    this.$socket.emit('SEND_MESSAGE', data)
  },
  async RECEIVE_MESSAGE({ commit, dispatch, rootState }, room) {
    // console.log('RECEIVE_MESSAGE', room)
    const callback = async () => {
      if (rootState.friend._id)
        await dispatch('SET_ROOM_BY_FRIEND_ID', rootState.friend._id)
      await dispatch('SET_ROOMS')
    }
    commit('receiveMessage', { room, callback })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
