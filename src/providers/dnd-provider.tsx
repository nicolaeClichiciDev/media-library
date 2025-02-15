import { PropsWithChildren } from "react";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  pointerWithin,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { isNullish } from "remeda";
import { useDispatch } from "react-redux";
import { changeFileFolder } from "#/store/media-slice.ts";

export const DndProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useDispatch();

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5,
    },
  });
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, keyboardSensor);

  const handleOnDragEnd = ({ active, over }: DragEndEvent) => {
    if (isNullish(over)) return;
    dispatch(
      changeFileFolder({
        fileId: active.id as string,
        folderId: over.id as string,
      }),
    );
  };

  return (
    <DndContext
      collisionDetection={pointerWithin}
      onDragEnd={handleOnDragEnd}
      sensors={sensors}
    >
      {children}
    </DndContext>
  );
};
