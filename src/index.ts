import 'module-alias/register'
import app from '@/main/config/app'
import env from '@/main/config/env'
import { createServer } from '@/main/config/http'

const server = createServer(app)

server.on('listening', () => {
  console.log(`Server running at: http://localhost:${env.port}/${app.get('graphqlPath')}`)
})

server.listen(env.port)
