import { GifSvg, ImageSvg, VideoSvg } from "#/components/shared";

export const getFilterSections = (data: Record<string, number>) => [
  {
    id: "mediaType",
    title: "Media type",
    items: [
      {
        id: "img",
        title: "Images",
        icon: <ImageSvg />,
        count: data.image,
      },
      {
        id: "video",
        title: "Videos",
        icon: <VideoSvg />,
        count: data.video,
      },
      {
        id: "gif",
        title: "GIFs",
        icon: <GifSvg />,
        count: data.gif,
      },
    ],
  },
];