import express from 'express'
import { DepartmentEntity } from '../database/entities'
import { DepartmentRepository } from '../database/repositories'
export class DepartmentService {
  constructor() {

  }


  async getByParams(req: express.Request, res: express.Response, next) {
    try {
      const params: Partial<DepartmentEntity> = req.query
      const data = await DepartmentRepository.findBy(params)
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
      const data = await DepartmentRepository.findOneBy({ id })
      //@ts-ignore
      res.data = data
      next()
    } catch (err) {
      next(err)
    }
  }

  async create(req: express.Request, res: express.Response, next) {
    try {
      const data: Partial<DepartmentEntity> = req.body
      const newLetter = await DepartmentRepository.save(data)
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
      const data: Partial<DepartmentEntity> = req.body
      const newDepartment = await DepartmentRepository.update(id, data)
      //@ts-ignore
      res.data = newDepartment
      next()
    } catch (err) {
      next(err)
    }
  }

  async deleteById(req: express.Request, res: express.Response, next) {
    try {
      const { id } = req.params
      const response = await DepartmentRepository.softDelete(id)
      //@ts-ignore
      res.data = response
      next()
    } catch (err) {
      next(err)
    }
  }
}