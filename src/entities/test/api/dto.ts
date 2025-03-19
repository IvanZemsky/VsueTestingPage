import { Answer, DepartmentId, Qualification, Subject, Tag } from "../model/types"

export type GetTestDto = {
   _id: string
   name: string
   description: string
   img: string
   maxResult: number
   entranceTests: Subject[]
   specializationCode: string
   tags: Tag[]
   department: DepartmentId
   qualification: Qualification
   passes: number
}

export type GetDepartmentDto = {
   _id: string
   name: string
   abbreviation: string
}

export type GetDirectionDto = {
   _id: string
   name: string
}

export type GetQuestionDto = {
   _id: string
   title: string
   answers: Answer[]
}

export type UpdateTestPassesDto = {
   testId: string
   passes: number
}
