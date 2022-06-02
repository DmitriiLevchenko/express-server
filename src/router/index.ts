import express, { Router } from "express"
import { init as initLetterRouter } from './letter.router'
import { init as initDepartmentRouter } from './department.router'
import { init as initQuestionRouter } from './question.router'
import { init as initAuth } from './auth.router'
import { jwtValidatorMiddleware } from "../middleware"
export const init = () => {
  const router = Router()

  router.use('/letter', jwtValidatorMiddleware, initLetterRouter())

  router.use('/department', jwtValidatorMiddleware, initDepartmentRouter())

  router.use('/question', jwtValidatorMiddleware, initQuestionRouter())

  router.use('/auth', initAuth())

  return router
}