import api from '~/utils/api'
import * as alert from '~/utils/alert'

const dependencies = {
  api,
  alert,
}

export type EpicDependencies = typeof dependencies

export default dependencies
