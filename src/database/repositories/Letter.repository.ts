
import { AppDataSource } from "../data-source";
import { LetterEntity } from "../entities";


export const LetterRepository = AppDataSource.getRepository(LetterEntity)
