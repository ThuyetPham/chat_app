import { io } from 'socket.io-client'

const connect = (token) => {
  const socket = io(process.env.VUE_APP_API, {
    reconnection: false,
    extraHeaders: {
      Authorization: 'Bearer ' + token,
    },
  })
  return socket
}

export default {
  connect,
}
