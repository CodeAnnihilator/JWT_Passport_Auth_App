import { take, call, put } from 'redux-saga/effects'
import { browserHistory } from 'react-router'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

import { AUTHORIZE } from 'src/components/auth/login/LoginActions'
import { authorizeSuccess } from 'src/components/auth/login/LoginActions'
import { authorizeUser } from 'src/components/auth/login/LoginApi'

export default function* authorizeUserSaga() {
  while (true) {
    const { payload: { username, email, password } } = yield take(AUTHORIZE)
    const { data: { token } } = yield call(authorizeUser, email, password)
    yield put(authorizeSuccess('asd', email))
    cookies.set('token', token, { path: '/' })
    browserHistory.push('/')
  }
}
