import { take, call, put, fork, select } from 'redux-saga/effects'
import { push  } from 'react-router-redux'

const DAEMON = true

import Cookies from 'universal-cookie'
const cookies = new Cookies()

import { LOGIN, AUTH_TOKEN_SUCCESS } from 'src/components/Auth/Login/loginActions'
import { loginPending, loginSuccess } from 'src/components/Auth/Login/loginActions'
import { authorizeUser, authenticateToken } from 'src/components/Auth/Login/loginApi'

function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms))
}

function* authorizeTokenSaga() {
  while (DAEMON) {
    const { token } = yield take(AUTH_TOKEN_SUCCESS)
    yield put(loginPending(true, 'Authorization is in progress', 'Checking user data'))
    const pathName = yield select(state => state.routing.location.pathname)
    // if (['/login', '/registration'].some(str => str === pathName)) yield put(push('/'))
    try {
      const { data: { user } } = yield call(authenticateToken, token)
      yield call(delay, 2000)
      yield put(loginSuccess(user))
      yield put(loginPending(false, 'success', 'Wow, you have successfully logged in!'))
    } catch (e) {
      console.log(e)
    }
  }
}

export default function* authorizeUserSaga() {
  yield fork(authorizeTokenSaga)
  while (DAEMON) {
    const { payload: { username, email, password } } = yield take(LOGIN)
    try {
      yield put(loginPending(true, 'Authorization is in progress', 'Checking user data'))
      const { data: { token, user } } = yield call(authorizeUser, email, password)
      yield put(loginSuccess(user))
      yield put(loginPending(false, 'success', 'Wow, you have successfully logged in!'))
      cookies.set('token', token, { path: '/' })
      yield put(push('/'))
    } catch (e) {
      console.log(e)
    }
  }
}
