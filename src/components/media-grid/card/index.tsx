import { MediaFile } from "#/service";
import { MediaName } from "./media-name.tsx";
import { MediaThumb } from "./media-thumb.tsx";
import { Draggable } from "#/components/shared";

export const Card = (data: MediaFile) => {
  return (
    <Draggable key={data.id} id={data.id}>
      <div className={"flex flex-col items-center"}>
        <MediaThumb {...data} />
        <MediaName {...data} />
      </div>
    </Draggable>
  );
};
