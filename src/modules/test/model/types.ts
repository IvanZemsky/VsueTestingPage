type Answer = {
   title: string;
   score: number;
};

type Question = {
   title: string;
   answers: Answer[];
};

export type Test = {
   id: number;
   name: string;
   desc: string;
   cover: string;
   maxResult: number;
   questions: Question[];
};
