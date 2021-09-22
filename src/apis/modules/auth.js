import Api from '../../apis'

export default {
  logIn(credentials) {
    return Api().post('auth/signin', {
        email: credentials.username,
        password: credentials.password
    })
  },
  register() {
    return Api().post('auth/signup')
  },
}
