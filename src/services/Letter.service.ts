import express from 'express'
import { LetterEntity } from '../database/entities'
import { LetterRepository } from '../database/repositories'
export class LetterService {
  constructor() {

  }


  async getByParams(req: express.Request, res: express.Response, next) {
    try {
      const params: Partial<LetterEntity> = req.query
      const data = await LetterRepository.findBy(params)
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
      const data = await LetterRepository.findOneBy({ id })
      //@ts-ignore
      res.data = data
      next()
    } catch (err) {
      next(err)
    }
  }

  async create(req: express.Request, res: express.Response, next) {
    try {
      const data: Partial<LetterEntity> = req.body
      const newLetter = await LetterRepository.save(data)
      //@ts-ignore
      res.data = newLetter
      next()
    } catch (err) {
      next(err)
    }
  }
  async updateById(req: express.Request, res: express.Response, next) {
    try {
      const { id } = req.params
      const data: Partial<LetterEntity> = req.body
      const newLetter = await LetterRepository.update(id, data)
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
      const response = await LetterRepository.softDelete(id)
      //@ts-ignore
      res.data = response
      next()
    } catch (err) {
      next(err)
    }
  }
}