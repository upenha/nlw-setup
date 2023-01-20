import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
  port: 80
}).then(() => console.log(`🔥 Server online at http://127.0.0.1:3333 or http://localhost:3333`))
