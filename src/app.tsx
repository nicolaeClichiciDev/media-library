import { MediaGrid, SideBar, TopBar } from "#/components";

export const App = () => {
  return (
    <div className={"flex gap-2 h-full w-full"}>
      <SideBar />
      <div className={"w-full flex flex-col"}>
        <TopBar />
        <MediaGrid />
      </div>
    </div>
  );
};
