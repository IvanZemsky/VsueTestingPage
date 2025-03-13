export type AnswerId = string;
export type QuestionId = number;
export type TestId = number;

export type Subject =
   | "Химия"
   | "Физика"
   | "Биология"
   | "Математика"
   | "Обществознание"
   | "Русский язык"
   | "Иностранный язык (англ)"
   | "Информатика"
   | "География"
   | "История";

export type Department = "УИТС" | "ИТ" | "ЭХТ" | "ЭУ" | "Т" | "СПО";

export type Tag = {
   name: string;
   emoji: string;
}

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
   entranceTests: Subject[];
   specializationCode: string
   tags: Tag[];
   department: Department;
   passes: number
};

export type LargestPercentResult = 35 | 75 | 100;
