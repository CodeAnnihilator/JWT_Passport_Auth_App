import { take, call, fork, put } from 'redux-saga/effects'
import { browserHistory } from 'react-router'

const DAEMON = true

import Cookies from 'universal-cookie'
const cookies = new Cookies()

import { REGISTRATE } from 'src/components/auth/registration/RegistrationActions'
import { registratePending } from 'src/components/auth/registration/RegistrationActions'
import { registrateUser } from 'src/components/auth/registration/RegistrationApi'

import { authorizeUser } from 'src/components/auth/login/LoginApi'
import { loginSuccess, loginPending } from 'src/components/auth/login/LoginActions'

function* authorizeUserSaga(username, email, password) {
  try {
    yield put(loginPending(true, 'Login is in progress', 'Checking user data'))
    const { data: { token } } = yield call(authorizeUser, email, password)
    cookies.set('token', token, { path: '/' })
    yield put(loginSuccess(username, email))
    yield put(loginPending(false, 'success', `Wow, you have successfully logged in, ${username}!`))
    browserHistory.push('/')
  } catch (e) {
    console.log(e)
  }
}

export default function* registrateUserSaga() {
  while (DAEMON) {
    const { username, email, password } = yield take(REGISTRATE)
    try {
      yield put(registratePending(true, 'Registration is in progress', `Saving User with email: ${email}`))
      yield call(registrateUser, username, email, password)
      yield fork(authorizeUserSaga, username, email, password)
    } catch (e) {
      console.log(e)
    }
  }
}
