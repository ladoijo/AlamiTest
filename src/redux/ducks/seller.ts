import createReducer from "~/utils/createReducer";

export const SELLER_CREATE = "seller/CREATE";
export const SELLER_CREATE_FINISH = "seller/CREATE_FINISH";

export interface SellertState {
  create: {
    isLoading: boolean;
  };
}

export const INITIAL_STATE: SellertState = {
  create: {
    isLoading: false,
  },
};

export default createReducer(INITIAL_STATE, {
  [SELLER_CREATE]: (state) => {
    state.create.isLoading = true;
  },
  [SELLER_CREATE_FINISH]: (state) => {
    state.create.isLoading = INITIAL_STATE.create.isLoading;
  },
});

interface SellerCreatePayload {
  nama: string;
  kota: string;
}

export const sellerCreate = (payload: SellerCreatePayload) => {
  return {
    type: SELLER_CREATE,
    payload,
  };
};

export const sellerCreateFinish = () => {
  return {
    type: SELLER_CREATE_FINISH,
  };
};
