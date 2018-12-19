import * as Koa from 'koa'
import { injectRoutingController } from './routing'
import * as cors from '@koa/cors'

//
const app = new Koa()
app.use(cors())

//
injectRoutingController(app)

//
export default app
