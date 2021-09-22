import Socket from '@/socket'

function createWebSocketPlugin() {
  return async (store) => {
    // const socket = connect()
    // store.$socket = socket
    store.subscribe(async (mutation) => {
      switch (mutation.type) {
        case 'CHANGE_FRIEND':
          if (mutation.payload) {
            await store.dispatch('SOCKET/SET_ROOM_BY_FRIEND_ID', mutation.payload._id)
          }
          break

        case 'AUTH/SET_TOKEN':
          if (mutation.payload) {
            const socket = Socket.connect(mutation.payload)
            store.$socket = socket
            socket.on('RECEIVE_MESSAGE', async (room) => {
              await store.dispatch('SOCKET/RECEIVE_MESSAGE', room)
            })
          }
          break
      }
    })
  }
}

export default createWebSocketPlugin()
