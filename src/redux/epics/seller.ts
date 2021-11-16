import { Epic, ofType } from "redux-observable";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";

import { ADD_SELLER_POST } from "~/constants/endpoints";

import { SELLER_CREATE, sellerCreateFinish } from "~/redux/ducks/seller";

export const sellerCreateEpic: Epic = (action$, state$, { api }) =>
  action$.pipe(
    ofType(SELLER_CREATE),
    mergeMap(({ payload }) => {
      return api({
        endpoint: SELLER_CREATE,
        body: payload,
      }).pipe(
        mergeMap(() => of(sellerCreateFinish())),
        catchError((error) => of(sellerCreateFinish()))
      );
    })
  );
