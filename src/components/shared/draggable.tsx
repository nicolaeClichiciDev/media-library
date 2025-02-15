import { useDraggable } from "@dnd-kit/core";
import { PropsWithChildren } from "react";

export const Draggable = ({
  id,
  children,
}: PropsWithChildren<{ id: string }>) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
  });

  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </div>
  );
};
