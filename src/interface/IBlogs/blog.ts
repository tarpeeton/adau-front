export interface IBlogCategory {
  name: {
    ru: string
    uz: string
    en: string
  }
  image: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }

  _id: string
}

export interface IComment {
  _id: string
  text: string
  _createdAt: string
}

export interface IBlog {
  _id: string
  featured: boolean
  expert: boolean
  _createdAt: string
  comments: IComment[]
  title: {
    ru: string
    uz: string
    en: string
  }
  slug: {
    current: string
    _type: 'slug'
  }
  description: {
    ru: string
    uz: string
    en: string
  }
  userName: {
    ru: string
    uz: string
    en: string
  }
  userOccupation: {
    ru: string
    uz: string
    en: string
  }
  userImage: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  mainImage: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  category: {
    _ref: string
    _type: 'reference'
  }
  popular: boolean
  additionalContent: {
    _key: string
    title: {
      uz: string
      ru: string
      en: string
    }
    description: {
      uz: string
      ru: string
      en: string
    }
    youtubeLink?: string // Optional property for YouTube video links
  }[]
}
