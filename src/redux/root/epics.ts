import { combineEpics } from "redux-observable";

// import * as product from "~/redux/epics/product";
import * as seller from "~/redux/epics/seller";

export default combineEpics(
  // ...Object.values(product),
  ...Object.values(seller)
);
