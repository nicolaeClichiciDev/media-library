export const EmptyFolder = () => {
  return (
    <div
      className={
        "h-full bg-[#F5F6F7] border border-[#C9CDD1] rounded-xl border-dashed flex justify-center items-center"
      }
    >
      <div className={"flex flex-col items-center gap-3"}>
        <img src="./no-data.png" alt="Empty folder" className={"w-[152px]"} />
        <div className={"flex flex-col items-center gap-1"}>
          <p className={"font-medium text-[30px] leading-[38px]"}>
            This folder is empty
          </p>
          <p className={"font-normal text-[16px] leading-[24px]"}>
            Add images, videos and GIFs.
          </p>
        </div>
      </div>
    </div>
  );
};
