import { take, call, put } from 'redux-saga/effects'

import { GET_CURRENT_PRODUCT } from './currentProductActions'
import { requestCurrentProductApi } from './currentProductApi'
import {
  getCurrentProduct,
  getCurrentProductSuccess
} from './currentProductActions'

const DAEMON = true

export default function* categoryProductsSaga() {
  while(DAEMON) {
    const { payload: { id } } = yield take(GET_CURRENT_PRODUCT)
    const { data: { product } } = yield call(requestCurrentProductApi, id)
    const productToSave = { ...product, price: parseInt(product.price, 10) }
    yield put(getCurrentProductSuccess(productToSave))
  }
}
