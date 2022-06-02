import { Router } from "express"
import { responseMiddleware } from "../middleware"
import { letterService } from "../services"

export const init = () => {
  const router = Router()
  router.get('/', letterService.getByParams, responseMiddleware)
  router.post('/', letterService.create, responseMiddleware)
  router.put('/:id', letterService.updateById, responseMiddleware)
  router.delete('/:id', letterService.deleteById, responseMiddleware)

  return router
}