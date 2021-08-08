import express from 'express'
import { setupRoutes } from '@/main/config/routes'
import { setupApolloServer } from '@/main/config/apollo-server'

const app = express()

setupApolloServer(app)
setupRoutes(app)

export default app
