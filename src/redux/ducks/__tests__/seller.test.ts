import reducer, * as sellerDuck from '~/redux/ducks/seller'
import type {} from '~/redux/ducks/seller'

const createPayload = { nama: 'Toko Agus', kota: 'Depok' }

describe('Action', () => {
  it('creates action to create seller', () => {
    const expectAction = {
      type: sellerDuck.SELLER_CREATE,
      payload: createPayload,
    }
    expect(sellerDuck.sellerCreate(createPayload)).toEqual(expectAction)
  })
  it('creates action when create seller failed', () => {
    const expectAction = {
      type: sellerDuck.SELLER_CREATE_FINISH,
    }
    expect(sellerDuck.sellerCreateFinish()).toEqual(expectAction)
  })
  it('creates action when create seller success', () => {
    const expectAction = {
      type: sellerDuck.SELLER_CREATE_FINISH,
    }
    expect(sellerDuck.sellerCreateFinish()).toEqual(expectAction)
  })
})

describe('Reducer:', () => {
  it('handles action to create seller', () => {
    const action = {
      type: sellerDuck.SELLER_CREATE,
      payload: createPayload,
    }
    const expectedState = {
      ...sellerDuck.INITIAL_STATE,
      create: {
        ...sellerDuck.INITIAL_STATE.create,
        isLoading: true,
      },
    }
    expect(reducer(sellerDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action when create seller failed', () => {
    const action = {
      type: sellerDuck.SELLER_CREATE_FINISH,
    }
    const expectedState = {
      ...sellerDuck.INITIAL_STATE,
      create: {
        ...sellerDuck.INITIAL_STATE.create,
        isLoading: false,
      },
    }
    expect(reducer(sellerDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action when create seller success', () => {
    const action = {
      type: sellerDuck.SELLER_CREATE_FINISH,
    }
    const expectedState = {
      ...sellerDuck.INITIAL_STATE,
      create: {
        isLoading: false,
      },
    }
    expect(reducer(sellerDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
})
