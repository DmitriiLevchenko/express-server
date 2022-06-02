import { Router } from "express"
import { responseMiddleware } from "../middleware"
import { departmentService } from "../services"

export const init = () => {
  const router = Router()
  router.get('/', departmentService.getByParams, responseMiddleware)
  router.post('/', departmentService.create, responseMiddleware)
  router.put('/:id', departmentService.updateById, responseMiddleware)
  router.delete('/:id', departmentService.deleteById, responseMiddleware)

  return router
}