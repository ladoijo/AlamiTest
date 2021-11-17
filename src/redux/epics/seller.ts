import { Epic, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'

import { ADD_SELLER_POST } from '~/constants/endpoints'

import { SELLER_CREATE, sellerCreateFinish } from '~/redux/ducks/seller'

export const sellerCreateEpic: Epic = (action$, state$, { api, alert }) =>
  action$.pipe(
    ofType(SELLER_CREATE),
    mergeMap(({ payload }) =>
      api({
        endpoint: ADD_SELLER_POST,
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
