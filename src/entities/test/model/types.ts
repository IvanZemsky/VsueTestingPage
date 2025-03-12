export type AnswerId = string;
export type QuestionId = number;
export type TestId = number;

export type Answer = {
   id: AnswerId;
   text: string;
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
   description: string;
   img: string;
   maxResult: number;
   questions: Question[]; // убрать - подггужаются только при загрузке теста
};

export type LargestPercentResult = 35 | 75 | 100;
