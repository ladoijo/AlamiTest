import type { AppState } from '~/redux/store/configureStore'

export const selectData = ({ seller }: AppState) => ({
  isLoading: seller.detail.isLoading,
  seller: seller.detail.data,
})

export type PropsFromSelector = ReturnType<typeof selectData>
