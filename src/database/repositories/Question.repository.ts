
import { AppDataSource } from "../data-source";
import { QuestionEntity } from "../entities";


export const QuestionRepository = AppDataSource.getRepository(QuestionEntity)
