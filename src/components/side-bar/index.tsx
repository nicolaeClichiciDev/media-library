import { Folders } from "./folders";
import { Filters } from "./filters";
import { Logo } from "./logo";

export const SideBar = () => {
  return (
    <div className={"flex flex-col gap-4 max-w-[200px] min-w-[200px]"}>
      <Logo />
      <Folders />
      <Filters />
    </div>
  );
};
