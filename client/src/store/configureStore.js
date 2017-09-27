import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '@src/rootReducer'
import rootSaga from '@src/rootSaga'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory()
const historyMiddleware = routerMiddleware(history)

export function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, historyMiddleware)
    )
  )
  store.runSaga = sagaMiddleware.run(rootSaga)
  return store
}
