import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import cors from 'cors'
import bodyParser from 'body-parser'
import http from 'http'
import express from 'express'
import { makeExecutableSchema } from '@graphql-tools/schema'
/**
 * Resolvers
 */
import rootResolver from './GraphQL/resolvers/index.js'
import rootSchema from './GraphQL/schema/index.js'

const app = express()
const httpServer = http.createServer(app)

/**
 * Merging resolvers
 */

const schema = makeExecutableSchema({
    typeDefs: rootSchema,
    resolvers: rootResolver,
})

const server = new ApolloServer({
    // resolvers,
    // typeDefs,
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

await server.start()

app.use(
    '/',
    cors(),
    bodyParser.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
    })
)

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))

console.log(`🚀 Server ready at http://localhost:4000/`)
