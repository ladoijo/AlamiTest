import { Epic, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'

import { ADD_SELLER_V2_POST, LIST_SELLER_GET, SELLER_DETAIL_VIEW_GET } from '~/constants/endpoints'

import {
  SELLER_CREATE,
  SELLER_DETAIL_GET,
  SELLER_LIST_GET,
  sellerCreateFinish,
  sellerDetailGetFailed,
  sellerDetailGetSuccess,
  sellerListGetFailed,
  sellerListGetSuccess,
} from '~/redux/ducks/seller'

export const sellerCreateEpic: Epic = (action$, state$, { api, alert }) =>
  action$.pipe(
    ofType(SELLER_CREATE),
    mergeMap(({ payload }) =>
      api({
        endpoint: ADD_SELLER_V2_POST,
        body: payload,
      }).pipe(
        map(({ response }) => {
          if (response.code === 200) {
            alert.show({ type: 'success', message: 'Berhasil Menambah Penjual' })
          } else {
            alert.show({ type: 'error', message: response.message })
          }
          return sellerCreateFinish()
        }),
        catchError((error) => {
          alert.show({ type: 'error', message: error.message })
          return of(sellerCreateFinish())
        }),
      ),
    ),
  )

export const sellerListFetchEpic: Epic = (action$, state$, { api, alert }) =>
  action$.pipe(
    ofType(SELLER_LIST_GET),
    mergeMap(() => {
      return api({
        endpoint: LIST_SELLER_GET,
      }).pipe(
        map(({ response }) => {
          if (response.code !== 200) {
            alert.show({ type: 'error', message: response.message })
          }
          return sellerListGetSuccess(response.data)
        }),
        catchError((error) => {
          alert.show({ type: 'error', message: error.message })
          return of(sellerListGetFailed())
        }),
      )
    }),
  )

export const sellerDetailFetchEpic: Epic = (action$, state$, { api, alert }) =>
  action$.pipe(
    ofType(SELLER_DETAIL_GET),
    mergeMap(({ payload }) => {
      return api({
        endpoint: SELLER_DETAIL_VIEW_GET,
        query: {
          seller_id: payload,
        },
      }).pipe(
        map(({ response }) => {
          if (response.code !== 200) {
            alert.show({ type: 'error', message: response.message })
          }
          return sellerDetailGetSuccess(response.data)
        }),
        catchError((error) => {
          alert.show({ type: 'error', message: error.message })
          return of(sellerDetailGetFailed())
        }),
      )
    }),
  )
