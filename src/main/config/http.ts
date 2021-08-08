import http, { RequestListener, Server } from 'http'

export const createServer = (requestListener: RequestListener): Server => {
  const server = http.createServer(requestListener)
  return server
}
