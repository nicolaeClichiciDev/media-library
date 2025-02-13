import { EmptyFolder } from "./empty-folder.tsx";
import { isEmpty } from "remeda";
import { Card } from "#/components/media-grid/card.tsx";

const mock = [
  {
    name: "test1.png",
    url: "https://picsum.photos/200/400/?random=1",
    id: "1",
  },
  {
    name: "test2.png",
    url: "https://picsum.photos/400/200/?random=2",
    id: "2",
  },
  {
    name: "test3.png",
    url: "https://picsum.photos/500/500/?random=3",
    id: "3",
  },
  {
    name: "test3.png",
    url: "https://picsum.photos/500/500/?random=4",
    id: "4",
  },
  {
    name: "test3.png",
    url: "https://picsum.photos/500/500/?random=5",
    id: "5",
  },
  {
    name: "test3.png",
    url: "https://picsum.photos/500/500/?random=6",
    id: "6",
  },
];

export const MediaGrid = () => {
  if (isEmpty(mock)) {
    return <EmptyFolder />;
  }

  return (
    <div className={"h-full  flex flex-wrap gap-2 p-1 content-start"}>
      {mock.map((x) => (
        <Card data={x} key={x.id} />
      ))}
    </div>
  );
};
