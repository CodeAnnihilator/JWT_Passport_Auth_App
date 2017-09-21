import { take, call, put } from 'redux-saga/effects'
import { browserHistory } from 'react-router'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

import { LOGIN } from 'src/components/auth/login/LoginActions'
import { loginPending, loginSuccess } from 'src/components/auth/login/LoginActions'
import { authorizeUser } from 'src/components/auth/login/LoginApi'

export default function* authorizeUserSaga() {
  while (true) {
    const { payload: { username, email, password } } = yield take(LOGIN)
    try {
      yield put(loginPending(true, 'Validation is in progress', 'Checking user data'))
      const { data: { token, user } } = yield call(authorizeUser, email, password)
      yield put(loginSuccess(user))
      yield put(loginPending(false, 'success', 'Wow, you have successfully logged in!'))
      cookies.set('token', token, { path: '/' })
      browserHistory.push('/')
    } catch (e) {
      console.log(e)
    }
  }
}
