import { take, call, put, fork, select } from 'redux-saga/effects'

import { GET_CATEGORY_PRODUCTS } from '@src/components/CategoryProducts/categoryProductsActions'
import { getCategoryProductsSuccess } from '@src/components/CategoryProducts/categoryProductsActions'
import { requestCategoryProducts } from '@src/components/CategoryProducts/categoryProductsApi'

const DAEMON = true

export default function* categoryProductsSaga() {
  while(DAEMON) {
    const { payload: { catId } } = yield take(GET_CATEGORY_PRODUCTS)
    const { data: { products } } = yield call(requestCategoryProducts, catId)
    yield put(getCategoryProductsSuccess(products))
  }
}
