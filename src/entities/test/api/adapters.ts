import { Department, Direction, Question, Test } from "../model/types"
import { GetDepartmentDto, GetDirectionDto, GetQuestionDto, GetTestDto } from "./dto"

export const testAdapters = {
   test: (dto: GetTestDto): Test => {
      const { _id, ...data } = dto
      return {
         id: _id,
         ...data,
      }
   },
   question: (dto: GetQuestionDto): Question => {
      const { _id, ...data } = dto
      return {
         id: _id,
         ...data,
      }
   },
   department: (dto: GetDepartmentDto): Department => {
      const { _id, ...data } = dto
      return {
         id: _id,
         ...data,
      }
   },
   direction: (dto: GetDirectionDto): Direction => {
      const { _id, ...data } = dto
      return {
         id: _id,
         ...data,
      }
   },
}
