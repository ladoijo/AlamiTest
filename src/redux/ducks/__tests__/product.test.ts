import reducer, * as productDuck from '~/redux/ducks/product'
import type {} from '~/redux/ducks/product'

const createPayload = {
  sellerId: 4,
  nama: 'Alpukat',
  satuan: 'kg',
  hargaSatuan: 35000,
  deskripsi: 'Alpukat Mentega',
}

const fetchBySellerIdPayload = { sellerId: 4 }
const fetchByKeywordPayload = { keyword: 'jeruk' }

const resFetchProductList = {
  code: 200,
  status: 'Success',
  message: '',
  data: [
    {
      code: 200,
      status: 'Success',
      message: '',
      data: [
        {
          id: 1,
          nama: 'Anggur',
          satuan: 'kg',
          hargaSatuan: 90000.0,
          sellerId: 4,
          deskripsi: 'Anggur Merah',
        },
        {
          id: 2,
          nama: 'Alpukat',
          satuan: 'kg',
          hargaSatuan: 35000.0,
          sellerId: 4,
          deskripsi: 'Alpukat Mentega',
        },
      ],
    },
  ],
}

describe('Action', () => {
  it('creates action to create product', () => {
    const expectAction = {
      type: productDuck.PRODUCT_CREATE,
      payload: createPayload,
    }
    expect(productDuck.productCreate(createPayload)).toEqual(expectAction)
  })
  it('creates action when create product failed', () => {
    const expectAction = {
      type: productDuck.PRODUCT_CREATE_FINISH,
    }
    expect(productDuck.productCreateFinish()).toEqual(expectAction)
  })
  it('creates action when create product success', () => {
    const expectAction = {
      type: productDuck.PRODUCT_CREATE_FINISH,
    }
    expect(productDuck.productCreateFinish()).toEqual(expectAction)
  })
  it('creates action to fetch product by seller id', () => {
    const expectAction = {
      type: productDuck.PRODUCT_LIST_FETCH,
      payload: fetchBySellerIdPayload,
    }
    expect(productDuck.productListFetch(fetchBySellerIdPayload)).toEqual(expectAction)
  })
  it('creates action when fetch product by seller id failed', () => {
    const expectAction = {
      type: productDuck.PRODUCT_LIST_FETCH_FAILED,
    }
    expect(productDuck.productListFetchFailed()).toEqual(expectAction)
  })
  it('creates action when fetch product by seller id success', () => {
    const expectAction = {
      type: productDuck.PRODUCT_LIST_FETCH_SUCCESS,
      payload: resFetchProductList,
    }
    expect(productDuck.productListFetchSuccess(resFetchProductList)).toEqual(expectAction)
  })
  it('creates action to fetch product by keyword', () => {
    const expectAction = {
      type: productDuck.PRODUCT_LIST_FETCH,
      payload: fetchByKeywordPayload,
    }
    expect(productDuck.productListFetch(fetchByKeywordPayload)).toEqual(expectAction)
  })
  it('creates action when fetch product by keyword failed', () => {
    const expectAction = {
      type: productDuck.PRODUCT_LIST_FETCH_FAILED,
    }
    expect(productDuck.productListFetchFailed()).toEqual(expectAction)
  })
  it('creates action when fetch product by keyword success', () => {
    const expectAction = {
      type: productDuck.PRODUCT_LIST_FETCH_SUCCESS,
      payload: resFetchProductList,
    }
    expect(productDuck.productListFetchSuccess(resFetchProductList)).toEqual(expectAction)
  })
})

describe('Reducer:', () => {
  it('handles action to create product', () => {
    const action = {
      type: productDuck.PRODUCT_CREATE,
      payload: createPayload,
    }
    const expectedState = {
      ...productDuck.INITIAL_STATE,
      create: {
        ...productDuck.INITIAL_STATE.create,
        isLoading: true,
      },
    }
    expect(reducer(productDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action when create product failed', () => {
    const action = {
      type: productDuck.PRODUCT_CREATE_FINISH,
    }
    const expectedState = {
      ...productDuck.INITIAL_STATE,
      create: {
        ...productDuck.INITIAL_STATE.create,
        isLoading: false,
      },
    }
    expect(reducer(productDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action when create product success', () => {
    const action = {
      type: productDuck.PRODUCT_CREATE_FINISH,
    }
    const expectedState = {
      ...productDuck.INITIAL_STATE,
      create: {
        isLoading: false,
      },
    }
    expect(reducer(productDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action to fetch product by seller id', () => {
    const action = {
      type: productDuck.PRODUCT_LIST_FETCH,
      payload: fetchBySellerIdPayload,
    }
    const expectedState = {
      ...productDuck.INITIAL_STATE,
      list: {
        ...productDuck.INITIAL_STATE.list,
        isLoading: true,
      },
    }
    expect(reducer(productDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action when fetch product by seller id failed', () => {
    const action = {
      type: productDuck.PRODUCT_LIST_FETCH_FAILED,
    }
    const expectedState = {
      ...productDuck.INITIAL_STATE,
      list: {
        ...productDuck.INITIAL_STATE.list,
        isLoading: false,
      },
    }
    expect(reducer(productDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action when fetch product by seller id success', () => {
    const action = {
      type: productDuck.PRODUCT_LIST_FETCH_SUCCESS,
      payload: resFetchProductList.data,
    }
    const expectedState = {
      ...productDuck.INITIAL_STATE,
      list: {
        items: resFetchProductList.data,
        isLoading: false,
      },
    }
    expect(reducer(productDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action to fetch product by keyword', () => {
    const action = {
      type: productDuck.PRODUCT_LIST_FETCH,
      payload: fetchByKeywordPayload,
    }
    const expectedState = {
      ...productDuck.INITIAL_STATE,
      list: {
        ...productDuck.INITIAL_STATE.list,
        isLoading: true,
      },
    }
    expect(reducer(productDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action when fetch product by keyword failed', () => {
    const action = {
      type: productDuck.PRODUCT_LIST_FETCH_FAILED,
    }
    const expectedState = {
      ...productDuck.INITIAL_STATE,
      list: {
        ...productDuck.INITIAL_STATE.list,
        isLoading: false,
      },
    }
    expect(reducer(productDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action when fetch product by keyword success', () => {
    const action = {
      type: productDuck.PRODUCT_LIST_FETCH_SUCCESS,
      payload: resFetchProductList.data,
    }
    const expectedState = {
      ...productDuck.INITIAL_STATE,
      list: {
        items: resFetchProductList.data,
        isLoading: false,
      },
    }
    expect(reducer(productDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
})
