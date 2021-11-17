import { combineReducers } from 'redux'

import product from '~/redux/ducks/product'
import seller from '~/redux/ducks/seller'

const rootReducers = combineReducers({
  product,
  seller,
})

export default rootReducers
