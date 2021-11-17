import { Epic, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { ToastAndroid } from 'react-native'

import { ADD_SELLER_POST } from '~/constants/endpoints'

import { SELLER_CREATE, sellerCreateFinish } from '~/redux/ducks/seller'

export const sellerCreateEpic: Epic = (action$, state$, { api }) =>
  action$.pipe(
    ofType(SELLER_CREATE),
    mergeMap(({ payload }) =>
      api({
        endpoint: ADD_SELLER_POST,
        body: payload,
      }).pipe(
        map(({ response }) => {
          if (response.code === 200) {
            ToastAndroid.show('Berhasil Menambah Penjual', ToastAndroid.SHORT)
          } else {
            ToastAndroid.show(response.message, ToastAndroid.SHORT)
          }
          return sellerCreateFinish()
        }),
        catchError((error) => {
          ToastAndroid.show(error.message, ToastAndroid.SHORT)
          return of(sellerCreateFinish())
        }),
      ),
    ),
  )
