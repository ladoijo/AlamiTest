import { Epic, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'

import { ADD_PRODUCT_POST, LIST_PRODUCT_GET, SEARCH_PRODUCT_GET } from '~/constants/endpoints'

import {
  PRODUCT_CREATE,
  PRODUCT_LIST_FETCH,
  productCreateFinish,
  productListFetchFailed,
  productListFetchSuccess,
} from '~/redux/ducks/product'

export const productCreateEpic: Epic = (action$, state$, { api, alert }) =>
  action$.pipe(
    ofType(PRODUCT_CREATE),
    mergeMap(({ payload }) => {
      return api({
        endpoint: ADD_PRODUCT_POST,
        body: payload,
      }).pipe(
        map(({ response }) => {
          if (response.code === 200) {
            alert.show({ type: 'success', message: 'Berhasil Menambah Produk' })
          } else {
            alert.show({ type: 'error', message: response.message })
          }
          return productCreateFinish()
        }),
        catchError((error) => {
          alert.show({ type: 'error', message: error.message })
          return of(productCreateFinish())
        }),
      )
    }),
  )

interface ProductListFetchQuery {
  seller_id?: number
  keyword?: string
}

export const productListFetchEpic: Epic = (action$, state$, { api, alert }) =>
  action$.pipe(
    ofType(PRODUCT_LIST_FETCH),
    mergeMap(({ payload }) => {
      let endpoint: string[] = []
      const query: ProductListFetchQuery = {}
      if (payload.sellerId) {
        endpoint = LIST_PRODUCT_GET
        query.seller_id = payload.sellerId
      } else if (typeof payload.keyword === 'string') {
        endpoint = SEARCH_PRODUCT_GET
        query.keyword = payload.keyword
      }
      return api({
        endpoint,
        query,
      }).pipe(
        map(({ response }) => {
          if (response.code !== 200) {
            alert.show({ type: 'error', message: response.message })
          }
          return productListFetchSuccess(response.data)
        }),
        catchError((error) => {
          alert.show({ type: 'error', message: error.message })
          return of(productListFetchFailed())
        }),
      )
    }),
  )
