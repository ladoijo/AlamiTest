import type { AppState } from "~/redux/store/configureStore";

export const selectData = ({ seller }: AppState) => ({
  isLoading: seller.create.isLoading,
});

export type PropsFromSelector = ReturnType<typeof selectData>;
