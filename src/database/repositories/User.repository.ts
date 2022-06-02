
import { AppDataSource } from "../data-source";
import { QuestionEntity, TokenEntity, UserEntity } from "../entities";


export const UserRepository = AppDataSource.getRepository(UserEntity)
