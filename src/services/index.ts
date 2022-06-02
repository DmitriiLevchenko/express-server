import { LetterService } from "./letter.service";
import { DepartmentService } from "./department.service";
import { QuestionService } from "./questions.service";
import { AuthService } from "./Auth.service";

const letterService = new LetterService()
const departmentService = new DepartmentService()
const questionService = new QuestionService()
const authService = new AuthService()
export {
  letterService,
  departmentService,
  questionService,
  authService
}