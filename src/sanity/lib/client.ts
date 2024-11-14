import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId  ,} from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: 'skABRFKcNBxA9vKXe7JNZ3vm0AUVMrLUYEloYZiGXTDCQRKuqJBzz8PpRHQSh4RXAXKvCqi24bqYsRrFN7menwF39icPC6MmYwASgi8MUFO6CJLbMefCiMNlCR95TBbcvz5hbbhfYWlFMpS08gzuc0m5UG8oCf8Sqm661QxCYXBpu3HcbkaC',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
