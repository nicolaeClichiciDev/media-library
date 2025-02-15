export interface MediaFolder {
  name: string;
  id: string;
}

export const MEDIA_FILE_TYPE = {
  img: "img",
  video: "video",
  gif: "gif",
} as const;

export type MediaFileType = keyof typeof MEDIA_FILE_TYPE;

export interface MediaFile {
  id: string;
  name: string;
  description: string;
  type: MediaFileType;
  folderId: string;
  url: string;
}
