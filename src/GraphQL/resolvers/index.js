import { mergeResolvers } from '@graphql-tools/merge'

import books from './books.resolver.js'
import users from './users.resolver.js'

export default mergeResolvers([users, books])
