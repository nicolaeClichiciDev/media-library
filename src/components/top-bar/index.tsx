import { RemoveSelectedButton } from "./remove-selected-button.tsx";
import { SearchBar } from "./search-bar.tsx";
import { SelectedItemsCount } from "./selected-items-count.tsx";
import { ChangeFolderButton } from "./change-folder-button";

export const TopBar = () => {
  return (
    <>
      <div className={"h-4"}>
        <div className={"flex justify-between"}>
          <div className={"flex gap-2 items-center"}>
            <SearchBar />
            <SelectedItemsCount />
            <ChangeFolderButton />
          </div>
          <RemoveSelectedButton />
        </div>
      </div>
      <div className={"w-full bg-[#E1E3E6] h-[1px] mt-3"} />
    </>
  );
};
