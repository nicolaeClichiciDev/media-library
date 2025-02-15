import { times } from "remeda";
import { MediaFolder, MEDIA_FILE_TYPE, MediaFile } from "./types";
import { v4 as uuidv4 } from "uuid";

const MEDIA_FILE_TYPE_ARRAY = [
  MEDIA_FILE_TYPE.gif,
  MEDIA_FILE_TYPE.img,
  MEDIA_FILE_TYPE.video,
];

const generateMockFolders = (n: number): MediaFolder[] => {
  return times(n, (i) => {
    const uuid = uuidv4();

    return {
      id: uuid,
      name: `test folder ${i}`,
    };
  });
};

const testingFolder: MediaFolder = {
  id: "testing", // if change also change testing file folderId
  name: "Testing Folder", // can be changed
};

const mockFolders: MediaFolder[] = generateMockFolders(5);

const generateMockMediaFiles = (n: number): MediaFile[] => {
  return times(n, (i) => {
    const uuid = uuidv4();
    const type = MEDIA_FILE_TYPE_ARRAY[Math.floor(Math.random() * 100) % 3];
    const mediaHeight = Math.floor(Math.random() * 500) + 100;
    const mediaWidth = Math.floor(Math.random() * 500) + 100;
    const folderId = mockFolders[Math.floor(Math.random() * 100) % 5].id;

    return {
      id: uuid,
      name: `test_media_${i}`,
      type,
      url: `https://picsum.photos/${mediaWidth}/${mediaHeight}/?random=${i}`,
      description: `Desctription for media file ${i}`,
      folderId,
    };
  });
};

const testingFile: MediaFile = {
  id: "testingFile", // can change id
  name: `TESTING_FILE.png`, // can change name
  type: "img", // can change type
  url: "https://picsum.photos/500/500/?random=99", // can play with size
  description: `Desctription for TESTING FILE`, // can change description
  folderId: "testing", // folder Testing Folder with this file
};

const mockMedia = [testingFile, ...generateMockMediaFiles(100)];

export const MOCK: {
  folders: MediaFolder[];
  media: MediaFile[];
} = {
  folders: [testingFolder, ...mockFolders],
  media: mockMedia,
} as const;
