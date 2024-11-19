export interface ISpeakersData {
    _id: string;
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
        _type: string;
        asset: {
            _type: string;
            _ref: string;
        };
    };
    description: {
        ru: string;
        uz: string;
        en: string;
    };
    _createdAt: string;
    _updatedAt: string;
}