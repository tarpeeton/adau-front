import { type SchemaTypeDefinition } from 'sanity'
import timeline from './timeline'
import partners from './partners'
import blogCotegory from './blogCotegory'
import blog from './blog'
import team from './team'
import cotegoryReview from './cotegory-review'
import reviews from './reviews'
import spikers from './spikers'
import blogComment from './blogComment'
import contacts from './contacts'
import banner from './banner'
import aboutBanner from './about-banner'
import videomediaCotegory from './videomedia-cotegory'
import videomedia from './videomedia'
import caseCategory from './case-category'
import Case from './create-case'
import whyAddAdau from './whyAddAdau'
import seminar from './seminar'
import seminarCotegory from './seminar-cotegory'
import whyChooseUs from './why-choose-us'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [timeline , partners , blogCotegory , blog , team , cotegoryReview ,  reviews , spikers , blogComment , contacts , banner , aboutBanner , videomediaCotegory , videomedia , caseCategory , Case , whyAddAdau , seminar , seminarCotegory , whyChooseUs],
}
