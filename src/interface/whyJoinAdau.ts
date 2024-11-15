export interface IWhyJoinAdau {
    _id: string;
    title: {
      ru: string;
      uz: string;
      en: string;
    };
    options: Array<{
      _key: string;
      name: {
        ru: string;
        uz: string;
        en: string;
      };
    }>;
  }
  