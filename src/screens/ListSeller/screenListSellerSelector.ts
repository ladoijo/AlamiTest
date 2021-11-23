import type { AppState } from '~/redux/store/configureStore'

export const selectData = ({ seller }: AppState) => ({
  isLoading: seller.list.isLoading,
  sellers: seller.list.items,
})

export type PropsFromSelector = ReturnType<typeof selectData>
