import createReducer from "~/utils/createReducer";

export const PRODUCT_CREATE = "product/CREATE";
export const PRODUCT_CREATE_FINISH = "product/CREATE_FINISH";
export const PRODUCT_LIST_FETCH = "product/LIST_FETCH";
export const PRODUCT_LIST_FETCH_FAILED = "product/LIST_FETCH_FAILED";
export const PRODUCT_LIST_FETCH_SUCCESS = "product/LIST_FETCH_SUCCESS";
export const PRODUCT_SEARCH = "product/SEARCH";
export const PRODUCT_SEARCH_FAILED = "product/SEARCH_FAILED";
export const PRODUCT_SEARCH_SUCCESS = "product/SEARCH_SUCCESS";

interface Product {
  id: number;
  sellerId: number;
  nama: string;
  satuan: string;
  hargaSatuan: number;
  deskripsi: string;
}

export interface ProductState {
  create: {
    isLoading: boolean;
  };
  list: {
    items: Product[];
    isLoading: boolean;
  };
}

export const INITIAL_STATE: ProductState = {
  create: {
    isLoading: false,
  },
  list: {
    items: [],
    isLoading: false,
  },
};

export default createReducer(INITIAL_STATE, {
  [PRODUCT_CREATE]: (state) => {
    state.create.isLoading = true;
  },
  [PRODUCT_CREATE_FINISH]: (state) => {
    state.create.isLoading = INITIAL_STATE.create.isLoading;
  },
});

export const productCreate = (payload: Omit<Product, "id">) => {
  return {
    type: PRODUCT_CREATE,
    payload,
  };
};

export const productCreateFinish = () => {
  return {
    type: PRODUCT_CREATE_FINISH,
  };
};

export const productListFetch = (sellerId: number) => {
  return {
    type: PRODUCT_LIST_FETCH,
    payload: sellerId,
  };
};

export const productListFetchFailed = () => {
  return {
    type: PRODUCT_LIST_FETCH_FAILED,
  };
};

export const productListFetchSuccess = (payload: ApiResponse) => {
  return {
    type: PRODUCT_LIST_FETCH_SUCCESS,
    payload,
  };
};

export const productSearch = (keyword: string) => {
  return {
    type: PRODUCT_SEARCH,
    payload: keyword,
  };
};

export const productSearchFailed = () => {
  return {
    type: PRODUCT_SEARCH_FAILED,
  };
};

export const productSearchSuccess = (payload: ApiResponse) => {
  return {
    type: PRODUCT_SEARCH_SUCCESS,
    payload,
  };
};
