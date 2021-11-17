import type { AppState } from '~/redux/store/configureStore'

export const selectData = ({ product }: AppState) => ({
  isLoading: product.list.isLoading,
  products: product.list.items,
})

export type PropsFromSelector = ReturnType<typeof selectData>
