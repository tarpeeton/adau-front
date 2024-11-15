export interface ITeamMember {
    _id: string;
    name: {
      ru: string;
      uz: string;
      en: string;
    };
    description: {
      ru: string;
      uz: string;
      en: string;
    };
    occupation: {
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
  }
  