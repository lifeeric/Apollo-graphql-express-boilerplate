import books from './book.js'
import users from './users.js'

const typeDefs = `#graphql
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Error {
    error: Boolean!
    message: String!
  }
`

export default [typeDefs, books, users]
