import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'src/rootReducer'
import rootSaga from 'src/rootSaga'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  )
  store.runSaga = sagaMiddleware.run(rootSaga)
  return store
}
