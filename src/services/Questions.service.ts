import express from 'express'
import { QuestionEntity } from '../database/entities'
import { QuestionRepository } from '../database/repositories'
export class QuestionService {
  constructor() {

  }


  async getByParams(req: express.Request, res: express.Response, next) {
    try {
      const params: Partial<QuestionEntity> = req.query
      const data = await QuestionRepository.findBy(params)
      //@ts-ignore
      res.data = data
      next()
    } catch (err) {
      next(err)
    }
  }

  async getById(req: express.Request, res: express.Response, next) {
    try {
      const { id } = req.params
      const data = await QuestionRepository.findOneBy({ id })
      //@ts-ignore
      res.data = data
      next()
    } catch (err) {
      next(err)
    }
  }

  async create(req: express.Request, res: express.Response, next) {
    try {
      const data: Partial<QuestionEntity> = req.body
      const newQuestion = await QuestionRepository.save(data)
      //@ts-ignore
      res.data = newQuestion
      next()
    } catch (err) {
      next(err)
    }
  }
  async updateById(req: express.Request, res: express.Response, next) {
    try {
      const { id } = req.params
      const data: Partial<QuestionEntity> = req.body
      const newLetter = await QuestionRepository.update(id, data)
      //@ts-ignore
      res.data = newLetter
      next()
    } catch (err) {
      next(err)
    }
  }

  async deleteById(req: express.Request, res: express.Response, next) {
    try {
      const { id } = req.params
      const response = await QuestionRepository.softDelete(id)
      //@ts-ignore
      res.data = response
      next()
    } catch (err) {
      next(err)
    }
  }
}