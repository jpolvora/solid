import { Router } from 'express'
import ranking from './ranking'
import products from './products'

export default (router: Router): void => {
  ranking(router)
  products(router)
}
