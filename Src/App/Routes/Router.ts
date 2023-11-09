import express from 'express'
import { userRoutes } from '../Module/User/User.route'

const Router = express.Router()
const ModelRoute = [
  {
    path: '/createUser',
    route: userRoutes,
  },
]

ModelRoute.forEach(route => Router.use(route.path, route.route))
export default Router
