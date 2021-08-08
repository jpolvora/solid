import { Express, Router } from 'express'
import configureRoutes from '../routes'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  configureRoutes(router)
  app.use('/api', router)
}
