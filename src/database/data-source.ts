import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from 'dotenv'
import { DepartmentEntity, LetterEntity, QuestionEntity } from "./entities";
import { UserEntity } from "./entities/User";
import { TokenEntity } from "./entities/Token";
dotenv.config();

export const AppDataSource = new DataSource({
    // @ts-ignore: error message
    type: process.env.dbType,
    host: process.env.dbHost,
    // @ts-ignore: error message
    port: process.env.dbPort,
    username: process.env.dbUsername,
    password: process.env.dbPassword,
    database: process.env.dbDatabase,
    synchronize: false,
    logging: false,
    entities: [UserEntity, TokenEntity, DepartmentEntity, LetterEntity, QuestionEntity],
    migrations: [__dirname + '/migrations/**/*.{js,ts}'],
    subscribers: [],
    migrationsDir: "migrations",
})

