import axios from 'axios'

export default function authPlugin(store) {
  store.subscribe((mutation) => {
    switch (mutation.type) {
      case 'AUTH/SET_TOKEN':
        if (mutation.payload) {
          axios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${mutation.payload}`
          localStorage.setItem('token', mutation.payload)
        } else {
          axios.defaults.headers.common['Authorization'] = null
          localStorage.removeItem('token')
          store.commit('SOCKET/setRoom', null)
          store.commit('SOCKET/setRooms', [])
        }
        break
    }
  })
}
