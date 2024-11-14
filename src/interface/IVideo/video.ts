export interface IVideoCategory {
    name: {ru: 'string' , uz:string  , en: string}
    _id: string
}

export interface IMediaVideo {
    _id: string;
    _type: 'mediaVideo';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title: {
      ru: string;
      uz: string;
      en: string;
    };
    category: {
      _ref: string;
      _type: 'reference';
    };
    mediaType: 'file' | 'url';
    videoUrl?: string;
  }
  