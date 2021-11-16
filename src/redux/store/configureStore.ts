import "rxjs";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { createEpicMiddleware } from "redux-observable";

import dependencies from "~/redux/root/dependencies";
import epics from "~/redux/root/epics";
import reducers from "~/redux/root/reducers";

const rootReducer = reducers();

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(initialState?: AppState) {
  const epicMiddleware = createEpicMiddleware<
    CustomAction,
    CustomAction,
    AppState
  >({
    dependencies: dependencies,
  });
  const logger = createLogger({ collapsed: true });

  const middlewares = [thunkMiddleware, epicMiddleware, logger];

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
  );

  epicMiddleware.run(epics);

  return store;
}
