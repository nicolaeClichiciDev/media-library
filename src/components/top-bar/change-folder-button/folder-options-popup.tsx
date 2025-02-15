import { MediaFolder } from "#/service";

interface Props {
  options: MediaFolder[];
  onChange: (id: string) => void;
  open: boolean;
}

export const FolderOptionsPopup = ({ options, onChange, open }: Props) => {
  if (!open) {
    return null;
  }

  return (
    <div
      className={
        "z-10 rounded-sm rounded-t-none border border-t-0 absolute top-full left-0 bg-white border border-[#C9CDD1] w-full max-h-20"
      }
    >
      {options.map((x) => (
        <div
          key={x.id}
          className={
            "pt-0.5 pb-0.5 pl-4.5 pr-1.5 font-normal text-[14px] leading-[22px] cursor-pointer hover:bg-[rgba(0,0,0,0.05)]"
          }
          onClick={() => onChange(x.id)}
        >
          {x.name}
        </div>
      ))}
    </div>
  );
};
