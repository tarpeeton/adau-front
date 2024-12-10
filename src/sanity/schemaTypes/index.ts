import { type SchemaTypeDefinition } from 'sanity'

// Banners
import banner from './banner'
import aboutBanner from './about-banner'

// Blog related
import blog from './blog'
import blogCotegory from './blogCotegory'
import blogComment from './blogComment'

// Reviews and testimonials
import reviews from './reviews'
import cotegoryReview from './cotegory-review'

// Cases
import Case from './create-case'
import caseCategory from './case-category'

// Video content
import videomedia from './videomedia'
import videomediaCotegory from './videomedia-cotegory'

// Seminars
import seminar from './seminar'
import seminarCotegory from './seminar-cotegory'
import spikers from './spikers'

// Company info
import timeline from './timeline'
import partners from './partners'
import team from './team'
import whyAddAdau from './whyAddAdau'
import whyChooseUs from './why-choose-us'
import contacts from './contacts'
import moreService from '@/sanity/schemaTypes/more-service'
import faq from '@/sanity/schemaTypes/faq'
import howWeWork from '@/sanity/schemaTypes/howWeWork'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Banners
    banner,
    aboutBanner,

    // Blog related
    blog,
    blogCotegory,
    blogComment,

    // Reviews and testimonials
    reviews,
    cotegoryReview,

    // Cases
    Case,
    caseCategory,

    // Video content
    videomedia,
    videomediaCotegory,

    // Seminars
    seminar,
    seminarCotegory,
    spikers,

    // Company info
    timeline,
    partners,
    team,
    whyAddAdau,
    whyChooseUs,
    contacts,
    moreService,
    faq,
    howWeWork
  ],
}
