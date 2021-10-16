import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
  return response.sendStatus(200)
})

routes.post('/users', (request: Request, response: Response) => {
  return createUserController.handle(request, response)
})

export { routes }