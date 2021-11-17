import createReducer from '~/utils/createReducer'

export const PRODUCT_CREATE = 'product/CREATE'
export const PRODUCT_CREATE_FINISH = 'product/CREATE_FINISH'
export const PRODUCT_LIST_FETCH = 'product/LIST_FETCH'
export const PRODUCT_LIST_FETCH_FAILED = 'product/LIST_FETCH_FAILED'
export const PRODUCT_LIST_FETCH_SUCCESS = 'product/LIST_FETCH_SUCCESS'
export const PRODUCT_LIST_RESET = 'product/LIST_RESET'

export interface Product {
  id: number
  sellerId: number
  nama: string
  satuan: string
  hargaSatuan: number
  deskripsi: string
}

export interface ProductState {
  create: {
    isLoading: boolean
  }
  list: {
    items: Product[]
    isLoading: boolean
  }
}

export const INITIAL_STATE: ProductState = {
  create: {
    isLoading: false,
  },
  list: {
    items: [],
    isLoading: false,
  },
}

export default createReducer(INITIAL_STATE, {
  [PRODUCT_CREATE]: (state) => {
    state.create.isLoading = true
  },
  [PRODUCT_CREATE_FINISH]: (state) => {
    state.create.isLoading = INITIAL_STATE.create.isLoading
  },
  [PRODUCT_LIST_FETCH]: (state) => {
    state.list.isLoading = true
  },
  [PRODUCT_LIST_FETCH_FAILED]: (state) => {
    state.list.isLoading = INITIAL_STATE.list.isLoading
  },
  [PRODUCT_LIST_FETCH_SUCCESS]: (state, action) => {
    state.list.isLoading = INITIAL_STATE.list.isLoading
    state.list.items = action.payload || INITIAL_STATE.list.items
  },
  [PRODUCT_LIST_RESET]: (state) => {
    state.list = INITIAL_STATE.list
  },
})

export const productCreate = (payload: Omit<Product, 'id'>) => {
  return {
    type: PRODUCT_CREATE,
    payload,
  }
}

export const productCreateFinish = () => {
  return {
    type: PRODUCT_CREATE_FINISH,
  }
}

interface PayloadListFetch {
  sellerId?: number
  keyword?: string
}

export const productListFetch = (payload: PayloadListFetch) => {
  return {
    type: PRODUCT_LIST_FETCH,
    payload: payload,
  }
}

export const productListFetchFailed = () => {
  return {
    type: PRODUCT_LIST_FETCH_FAILED,
  }
}

export const productListFetchSuccess = (payload: ApiResponse) => {
  return {
    type: PRODUCT_LIST_FETCH_SUCCESS,
    payload,
  }
}

export const productListReset = () => {
  return {
    type: PRODUCT_LIST_RESET,
  }
}
