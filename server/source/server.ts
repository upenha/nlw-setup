import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({ port: 3000 }, function (err, address) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.info(`server listening on ${address}`)
})