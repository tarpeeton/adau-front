export interface ISeminarCategory {
    _type: 'seminarCategory';
    _id: string;
    _rev: string;
    _createdAt: string;
    _updatedAt: string;
    title: {
      ru: string;
      uz: string;
      en: string;
    };
  }
 
  

  export interface ISeminarData {
    _type: 'seminar';
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
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
    date: string; // Date in ISO format (YYYY-MM-DD)
    time: string; // Time as a string (e.g., "12.00")
    status: 'new' | 'old';
    address: {
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
    video?: {
      isFree: boolean;
      price: number;
      url: string;
    };
    seminarCategory: {
      _ref: string;
      _type: 'reference';
    };
    priceData: Array<{
      _key: string;
      title: {
        ru: string;
        uz: string;
        en: string;
      };
      price: number;
      options: string[];
    }>;
    speakers: Array<{
      name: {
        ru: string;
        uz: string;
        en: string;
      };
      position: {
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
      description: {
        ru: string;
        uz: string;
        en: string;
      };
    }>;
    seminarProgram: Array<{
      _key: string;
      timeSlot: string;
      topic: string;
      speaker: {
        name: {
          ru: string;
          uz: string;
          en: string;
        };
        position: {
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
        description: {
          ru: string;
          uz: string;
          en: string;
        };
      };
    }>;
    slug: {
      _type: 'slug';
      current: string;
    };
  }
  