export interface IBlogCategory {
    name: {
      ru: string;
      uz: string;
      en: string;
    };
    image: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
  
    _id: string;
  }
  
 
export interface IBlog {
    _id: string;
    featured:boolean;
    _createdAt: string;
    title: {
      ru: string;
      uz: string;
      en: string;
    };
    slug: {
      current: string;
      _type: 'slug';
    };
    description: {
      ru: string;
      uz: string;
      en: string;
    };
    userName: {
      ru: string;
      uz: string;
      en: string;
    };
    userOccupation: {
      ru: string;
      uz: string;
      en: string;
    };
    userImage: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    mainImage: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    category: {
      _ref: string;
      _type: 'reference';
    };
    popular: boolean;
    additionalContent: {
      _key: string;
      title: {
        ru: string;
        uz: string;
        en: string;
      };
      description: {
        ru: string;
        uz: string;
        en: string;
      };
      media?: {
        _type: 'file';
        asset: {
          _ref: string;
          _type: 'reference';
        };
      };
    }[];
  }
  

  