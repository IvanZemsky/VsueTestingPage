import { Test } from "../model/types";
import { GetQuestionDto, GetTestDto } from "./dto";

export const testAdapters = {
   test: (dto: GetTestDto): Test => {
      const { _id, ...data } = dto;
      return {
         id: _id,
         ...data,
      };
   },
   question: (dto: GetQuestionDto) => {
      const { _id, ...data } = dto;
      return {
         id: _id,
         ...data,
      };
   },
};
