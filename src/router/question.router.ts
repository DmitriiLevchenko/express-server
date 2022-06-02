import { Router } from "express"
import { responseMiddleware } from "../middleware"
import { questionService } from "../services"

export const init = () => {
  const router = Router()
  router.get('/', questionService.getByParams, responseMiddleware)
  router.post('/', questionService.create, responseMiddleware)
  router.put('/:id', questionService.updateById, responseMiddleware)
  router.delete('/:id', questionService.deleteById, responseMiddleware)

  return router
}