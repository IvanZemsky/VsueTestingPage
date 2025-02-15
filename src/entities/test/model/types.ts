export type AnswerId = string;
export type QuestionId = number;
export type TestId = number;

export type Answer = {
   id: AnswerId;
   title: string;
   score: number;
};

export type Question = {
   id: QuestionId;
   title: string;
   answers: Answer[];
};

export type Test = {
   id: TestId;
   name: string;
   desc: string;
   cover: string;
   maxResult: number;
   questions: Question[];
};

export type LargestPercentResult = 35 | 75 | 100;
