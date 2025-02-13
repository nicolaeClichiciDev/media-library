import { GifSvg, ImageSvg, VideoSvg } from "./svgs";

export const getFilterSections = (data: Record<string, number>) => [
  {
    id: "mediaType",
    title: "Media type",
    items: [
      {
        id: "images",
        title: "Images",
        icon: <ImageSvg />,
        count: data.image,
      },
      {
        id: "videos",
        title: "Videos",
        icon: <VideoSvg />,
        count: data.video,
      },
      {
        id: "gifs",
        title: "GIFs",
        icon: <GifSvg />,
        count: data.gif,
      },
    ],
  },
];
