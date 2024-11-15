export interface IPartnersData {
    _id: string;
    name: string;
    image: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
  }
  