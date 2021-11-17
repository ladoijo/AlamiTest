import 'rxjs'
// import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import dependencies from '~/redux/root/dependencies'
import epics from '~/redux/root/epics'
import reducers from '~/redux/root/reducers'

export type AppState = ReturnType<typeof reducers>

export default function configureStore(initialState?: AppState) {
  const epicMiddleware = createEpicMiddleware<CustomAction, CustomAction, AppState>({
    dependencies: dependencies,
  })
  const middlewares = [epicMiddleware]
  let composeEnhancers = compose
  composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  epicMiddleware.run(epics)

  return store
}
