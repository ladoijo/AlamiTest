import createReducer from '~/utils/createReducer'

export const SELLER_CREATE = 'seller/CREATE'
export const SELLER_CREATE_FINISH = 'seller/CREATE_FINISH'
export const SELLER_LIST_GET = 'seller/LIST_GET'
export const SELLER_LIST_GET_FAILED = 'seller/LIST_GET_FAILED'
export const SELLER_LIST_GET_SUCCESS = 'seller/LIST_GET_SUCCESS'
export const SELLER_DETAIL_GET = 'seller/DETAIL_GET'
export const SELLER_DETAIL_GET_FAILED = 'seller/DETAIL_GET_FAILED'
export const SELLER_DETAIL_GET_SUCCESS = 'seller/DETAIL_GET_SUCCESS'

export interface Seller {
  id: number
  nama: string
  kota: string
  jenis: string | null
  tahunBerdiri: number | null
}
export interface SellertState {
  create: {
    isLoading: boolean
  }
  list: {
    isLoading: boolean
    items: Seller[]
  }
  detail: {
    isLoading: boolean
    data: Seller
  }
}

export const INITIAL_STATE: SellertState = {
  create: {
    isLoading: false,
  },
  list: {
    isLoading: false,
    items: [],
  },
  detail: {
    isLoading: false,
    data: {
      id: 0,
      nama: '',
      kota: '',
      jenis: null,
      tahunBerdiri: null,
    },
  },
}

export default createReducer(INITIAL_STATE, {
  [SELLER_CREATE]: (state) => {
    state.create.isLoading = true
  },
  [SELLER_CREATE_FINISH]: (state) => {
    state.create.isLoading = INITIAL_STATE.create.isLoading
  },
  [SELLER_LIST_GET]: (state) => {
    state.list.isLoading = true
  },
  [SELLER_LIST_GET_FAILED]: (state) => {
    state.list.isLoading = INITIAL_STATE.list.isLoading
  },
  [SELLER_LIST_GET_SUCCESS]: (state, action) => {
    state.list.isLoading = INITIAL_STATE.list.isLoading
    state.list.items = action.payload
  },
  [SELLER_DETAIL_GET]: (state) => {
    state.detail.isLoading = true
  },
  [SELLER_DETAIL_GET_FAILED]: (state) => {
    state.detail.isLoading = INITIAL_STATE.detail.isLoading
  },
  [SELLER_DETAIL_GET_SUCCESS]: (state, action) => {
    state.detail.isLoading = INITIAL_STATE.detail.isLoading
    state.detail.data = action.payload
  },
})

interface SellerCreatePayload {
  nama: string
  kota: string
}

export const sellerCreate = (payload: SellerCreatePayload) => {
  return {
    type: SELLER_CREATE,
    payload,
  }
}

export const sellerCreateFinish = () => {
  return {
    type: SELLER_CREATE_FINISH,
  }
}

export const sellerListGet = () => {
  return {
    type: SELLER_LIST_GET,
  }
}

export const sellerListGetFailed = () => {
  return {
    type: SELLER_LIST_GET_FAILED,
  }
}

export const sellerListGetSuccess = (payload: Seller[]) => {
  return {
    type: SELLER_LIST_GET_SUCCESS,
    payload,
  }
}

export const sellerDetailGet = (sellerId: number) => {
  return {
    type: SELLER_DETAIL_GET,
    payload: sellerId,
  }
}

export const sellerDetailGetFailed = () => {
  return {
    type: SELLER_DETAIL_GET_FAILED,
  }
}

export const sellerDetailGetSuccess = (payload: Seller[]) => {
  return {
    type: SELLER_DETAIL_GET_SUCCESS,
    payload,
  }
}
