import { PropsWithChildren } from "react";
import { store } from "#/store";
import { Provider as StoreProvider } from "react-redux";

export const AppProviders = ({ children }: PropsWithChildren) => {
  return <StoreProvider store={store}>{children}</StoreProvider>;
};
