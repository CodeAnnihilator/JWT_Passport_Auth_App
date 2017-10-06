import { take, call, put, fork, select } from 'redux-saga/effects'
import { batchActions } from 'redux-batched-actions'

import { GET_CATEGORY_PRODUCTS } from '@src/components/CategoryProducts/categoryProductsActions'
import { requestCategoryProducts } from '@src/components/CategoryProducts/categoryProductsApi'
import {
  getCategoryProductsSuccess,
  setCurrentPrice,
  setPrice
} from '@src/components/CategoryProducts/categoryProductsActions'

import findMin from '@src/utils/findMin'
import findMax from '@src/utils/findMax'

const DAEMON = true

export default function* categoryProductsSaga() {
  while(DAEMON) {
    const { payload: { catId } } = yield take(GET_CATEGORY_PRODUCTS)
    const { data: { products } } = yield call(requestCategoryProducts, catId)
    const min = parseInt(findMin(products, 'price'), 10)
    const max = parseInt(findMax(products, 'price'), 10)
    yield put(batchActions([
      setPrice(min, 'minPrice'),
      setPrice(max, 'maxPrice'),
      setCurrentPrice(min, 'currentMinPrice'),
      setCurrentPrice(max, 'currentMaxPrice'),
      getCategoryProductsSuccess(products, min, max)
    ]))
  }
}
