import { PropsWithChildren } from "react";
import { store } from "#/store";
import { Provider as StoreProvider } from "react-redux";
import { DndProvider } from "./dnd-provider.tsx";

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <StoreProvider store={store}>
      <DndProvider>{children}</DndProvider>
    </StoreProvider>
  );
};
