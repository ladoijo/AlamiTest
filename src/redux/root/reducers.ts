import { combineReducers } from "redux";

import product from "~/redux/ducks/product";
import seller from "~/redux/ducks/seller";

function reducer() {
  return combineReducers({
    product,
    seller,
  });
}

export default reducer;
