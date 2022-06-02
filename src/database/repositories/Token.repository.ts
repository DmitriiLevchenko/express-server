
import { AppDataSource } from "../data-source";
import { QuestionEntity, TokenEntity } from "../entities";


export const TokenRepository = AppDataSource.getRepository(TokenEntity)
