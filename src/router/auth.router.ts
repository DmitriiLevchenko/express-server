import { Router } from "express"
import { responseMiddleware } from "../middleware"
import { authService } from "../services"


export const init = () => {
  const router = Router()

  router.post('/registration', authService.registration, responseMiddleware)
  router.post('/login', authService.login, responseMiddleware)
  router.put('/refresh', authService.refresh, responseMiddleware)

  return router
}