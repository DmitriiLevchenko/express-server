import app from "./app";
import { AppDataSource } from "./database/data-source";
import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/typeorm';
import AdminJSExpress from '@adminjs/express'
import { responseMiddleware } from "./middleware";
import { validate } from 'class-validator'
import { LetterEntity, QuestionEntity, TokenEntity, UserEntity, DepartmentEntity } from "./database/entities";

Resource.validate = validate;
AdminJS.registerAdapter({ Database, Resource });
const PORT = process.env.port || 3000
AppDataSource.initialize()
  .then(() => {
    const adminJs = new AdminJS({
      resources: [TokenEntity, UserEntity, LetterEntity, QuestionEntity, DepartmentEntity],

      rootPath: '/admin',
    });
    const router = AdminJSExpress.buildRouter(adminJs);
    console.log('adminJs.options.rootPath', adminJs.options.rootPath)
   
    app.use(adminJs.options.rootPath, router);
    
    //app.use(responseMiddleware)
    app.listen(PORT, () => {
      console.log(`server started at http://localhost:${PORT}/`)
    })
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })
