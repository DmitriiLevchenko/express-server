
import { AppDataSource } from "../data-source";
import { DepartmentEntity } from "../entities";


export const DepartmentRepository = AppDataSource.getRepository(DepartmentEntity)
