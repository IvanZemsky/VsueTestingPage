import { Answer, Department, Subject, Tag } from "../model/types";

export type GetTestDto = {
   _id: string;
   name: string;
   description: string;
   img: string;
   maxResult: number;
   entranceTests: Subject[];
   specializationCode: string;
   tags: Tag[];
   department: Department;
   passes: number;
};

export type GetQuestionDto = {
   _id: number;
   title: string;
   answers: Answer[];
};
