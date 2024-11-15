export interface ICase {
    _id: string;
    isFeatured:boolean,
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    slug: {
      current: string;
      _type: string;
    };
    title: {
      en: string;
      ru: string;
      uz: string;
    };
    description: {
      en: string;
      ru: string;
      uz: string;
    };
    aboutText: {
      en: string;
      ru: string;
      uz: string;
    };
    slider: Array<{
      _key: string;
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    }>;
    youtubeVideo: string;
    tasks: Array<{
      _key: string;
      en: string;
      ru: string;
      uz: string;
    }>;
    solutions: Array<{
      _key: string;
      en: string;
      ru: string;
      uz: string;
    }>;
    results: Array<{
      _key: string;
      title: {
        en: string;
        ru: string;
        uz: string;
      };
      result: {
        en: string;
        ru: string;
        uz: string;
      };
    }>;
    caseCategory: {
      _type: string;
      _ref: string;
    };
    resultImage?: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
  }
  

export interface ICaseCategory {
    _id: string;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name: {
      ru: string;
      uz: string;
      en: string;
    };
  }
  