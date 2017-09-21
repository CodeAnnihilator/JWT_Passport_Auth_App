import { take, call, put } from 'redux-saga/effects'
import { browserHistory } from 'react-router'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

import { LOGIN } from 'src/components/auth/login/LoginActions'
import { loginSuccess } from 'src/components/auth/login/LoginActions'
import { authorizeUser } from 'src/components/auth/login/LoginApi'

export default function* authorizeUserSaga() {
  while (true) {
    const { payload: { username, email, password } } = yield take(LOGIN)
    try {
      const { data: { token, user } } = yield call(authorizeUser, email, password)
      yield put(loginSuccess(user))
      cookies.set('token', token, { path: '/' })
      browserHistory.push('/')
    } catch (e) {
      console.log(e)
    }
  }
}
