import { take, call, put, fork, select } from 'redux-saga/effects'
import { browserHistory } from 'react-router'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

import { LOGIN, AUTH_TOKEN_SUCCESS } from 'src/components/auth/login/LoginActions'
import { loginPending, loginSuccess } from 'src/components/auth/login/LoginActions'
import { authorizeUser, authenticateToken } from 'src/components/auth/login/LoginApi'

function* authorizeTokenSaga() {
  while (true) {
    const { token } = yield take(AUTH_TOKEN_SUCCESS)
    const pathName = yield select(state => state.routing.locationBeforeTransitions.pathname)
    if (['/login', '/registration'].some(str => str === pathName)) browserHistory.push('/')
    try {
      const { data: { user } } = yield call(authenticateToken, token)
      yield put(loginSuccess(user))
    } catch (e) {
      console.log(e)
    }
  }
}

export default function* authorizeUserSaga() {
  yield fork(authorizeTokenSaga)
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
