import type { AppState } from '~/redux/store/configureStore'

export const selectData = ({ product }: AppState) => ({
  isLoading: product.create.isLoading,
})

export type PropsFromSelector = ReturnType<typeof selectData>
