import { Test } from "../model/types";

export const TEST: Test = {
   id: 1,
   name: "Информационные системы и программирование",
   desc: "Наш университет предлагает пройти простой тест на Ваши навыки, увлечения и интересы и узнать, подходит ли Вам обучение по специальности #09.02.07:",
   cover: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   maxResult: 50,
   questions: [
      {
         id: 1,
         title: "Считаете ли Вы, что компьютеры и программирование - это интересно?",
         answers: [
            { id: "1-1", title: "Да!", score: 5 },
            {
               id: "1-2",
               title: "Не знаю, хочу попробовать себя в новой сфере",
               score: 3,
            },
            { id: "1-3", title: "Нет", score: 1 },
         ],
      },
      {
         id: 2,
         title: "Вам нравится решать сложные задачи и головоломки?",
         answers: [
            { id: "2-1", title: "Да", score: 5 },
            { id: "2-2", title: "Нет", score: 1 },
            {
               id: "2-3",
               title: "Да, но иногда хочется чего-то попроще",
               score: 3,
            },
         ],
      },
      {
         id: 3,
         title: "У Вас есть опыт разработки программ или дизайна?",
         answers: [
            { id: "3-1", title: "Увлекаюсь этим с детства", score: 5 },
            { id: "3-2", title: "Недавно начал изучать", score: 3 },
            { id: "3-3", title: "Нет", score: 1 },
         ],
      },
      {
         id: 4,
         title: "Считаете ли Вы себя человеком с техническим складом ума?",
         answers: [
            { id: "4-1", title: "Нет, я - гуманитарий", score: 0 },
            { id: "4-2", title: "Да", score: 5 },
            { id: "4-3", title: "Нет, но я надеюсь это исправить", score: 3 },
         ],
      },
      {
         id: 5,
         title: "Какие технологии Вам больше всего интересны?",
         answers: [
            { id: "5-1", title: "Искусственный интеллект", score: 5 },
            { id: "5-2", title: "Нейросети", score: 4 },
            { id: "5-3", title: "Технологии коммуникации", score: 3 },
            { id: "5-4", title: "Другое", score: 2 },
         ],
      },
      {
         id: 6,
         title: "В какой из областей Вы бы хотели работать?",
         answers: [
            { id: "6-1", title: "Программирование", score: 5 },
            { id: "6-2", title: "Дизайн", score: 4 },
            { id: "6-3", title: "Тестирование", score: 3 },
            { id: "6-4", title: "Аналитика", score: 2 },
            { id: "6-5", title: "Другое", score: 1 },
         ],
      },
      {
         id: 7,
         title: "Как вы оцениваете свою способность работать в команде и общаться с коллегами?",
         answers: [
            {
               id: "7-1",
               title: "С этим не возникает проблем, я общителен",
               score: 5,
            },
            { id: "7-2", title: "Работа в команде всегда увлекательна", score: 3 },
            { id: "7-3", title: "Мне больше нравятся одиночные проекты", score: 1 },
         ],
      },
      {
         id: 8,
         title: "Сможете ли вы работать в условиях неопределенности и менять свои планы в зависимости от требований проекта?",
         answers: [
            { id: "8-1", title: "Определённо", score: 5 },
            { id: "8-2", title: "Не уверен", score: 2 },
            { id: "8-3", title: "Нет", score: 1 },
         ],
      },
      {
         id: 9,
         title: "Как вы относитесь к необходимости постоянного обучения и саморазвития",
         answers: [
            {
               id: "9-1",
               title: "Прекрасно, я люблю получать новые полезные знания",
               score: 5,
            },
            { id: "9-2", title: "Нет, ценю проверенные временем навыки", score: 1 },
         ],
      },
      {
         id: 10,
         title: "Вы бы хотели работать специалистом в сфере разработки веб и мультимедийных приложений?",
         answers: [
            { id: "10-1", title: "Да!", score: 5 },
            { id: "10-2", title: "Как минимум в смежной отрасли", score: 2 },
            { id: "10-3", title: "...Наверное?", score: 0 },
         ],
      },
   ],
};
