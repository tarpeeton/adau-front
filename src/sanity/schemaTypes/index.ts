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





export const schema: { types: SchemaTypeDefinition[] } = {
  types: [timeline , partners , blogCotegory , blog , team , cotegoryReview ,  reviews , spikers , blogComment , contacts , banner , aboutBanner],
}
