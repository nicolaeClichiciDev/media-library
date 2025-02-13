import { useState } from "react";
import { FolderSvg } from "./folder-svg.tsx";

const mock = [
  { name: "Test1", count: 30, id: 1 },
  { name: "Test2", count: 0, id: 2 },
  { name: "Test3", count: 2, id: 3 },
];

export const Folders = () => {
  const [selectedFolder, setSelectedFolder] = useState(mock[0].id);

  return (
    <div className={"flex flex-col gap-2"}>
      <p className={"font-medium text-[14px] leading-[22px] tracking-[-0.2px]"}>
        Folders
      </p>
      <div className={"flex flex-col gap-0.5"}>
        {mock.map(({ name, count, id }) => (
          <button
            className={`flex gap-2 rounded-md pt-0.5 pb-0.5 pl-1 pr-1`}
            style={
              selectedFolder === id
                ? { backgroundColor: "rgba(0, 0, 0, 0.05)" }
                : undefined
            }
            key={id}
            onClick={() => setSelectedFolder(id)}
          >
            <FolderSvg />
            <p
              className={
                "font-normal text-[14px] leading-[22px] tracking-[-0.05px]"
              }
            >
              {name}
            </p>
            <p
              className={
                "font-normal text-[14px] text-[#9FA4AB] leading-[22px] tracking-[-0.05px]"
              }
            >
              {count}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
