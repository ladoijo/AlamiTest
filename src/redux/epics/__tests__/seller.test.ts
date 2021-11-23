import { ofType } from 'redux-observable'
import { of, throwError } from 'rxjs'
import { toArray } from 'rxjs/operators'
import * as sellerDuck from '~/redux/ducks/seller'
import * as sellerEpic from '~/redux/epics/seller'
const error = {
  status: 403,
  response: {
    message: 'forbidden',
  },
}
const resSuccess = {
  code: 200,
  status: 'Success',
  message: '',
  data: { id: 4, nama: 'Toko Agus', kota: 'Depok' },
}
describe('Observable:', () => {
  describe('sellerCreateEpic', () => {
    const action$ = () =>
      ofType({
        type: sellerDuck.SELLER_CREATE,
      })
    const state$: any = {}
    it('dispatches action when fetch client detail failed', (done) => {
      const api = () => throwError(() => new Error(error.response.message))
      const expectedAction = [
        {
          type: sellerDuck.SELLER_CREATE_FINISH,
        },
      ]
      sellerEpic
        .sellerCreateEpic(action$, state$, { api })
        .pipe(toArray())
        .subscribe((actualOutputs) => {
          expect(actualOutputs).toEqual(expectedAction)
          done()
        })
    })
    it('dispatches action when fetch client detail success', (done) => {
      const api = () => of({ response: resSuccess })
      const expectedAction = [
        {
          type: sellerDuck.SELLER_CREATE_FINISH,
        },
      ]
      sellerEpic
        .sellerCreateEpic(action$, state$, { api })
        .pipe(toArray())
        .subscribe((actualOutputs) => {
          expect(actualOutputs).toEqual(expectedAction)
          done()
        })
    })
  })
})
