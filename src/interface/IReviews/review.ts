export interface IReviewData {
    _id: string
    _createdAt: string;
    name: {
        ru: string
        uz: string
        en: string
    }
    category: {
        _ref: string
        _type: string
    }
    commentary: {
        ru: string
        uz: string
        en: string
    }
}


export interface IReviewsCotegory {
    name: { ru: string, uz: string, en: string },
    _id: string,
    _rev: string
}