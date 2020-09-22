import { store } from "../app/store";
import { addTask } from "../features/tasks/taskSlice";

const data = [
  {
    comment: "",
    place: "",
    timeZone: "+3",
    type: "js task",
    descriptionUrl:
      "https://github.com/rolling-scopes-school/tasks/blob/master/tasks/ready-projects/calculator.md",
    dateStart: "2020-09-11 00:00",
    dateTime: "2020-09-21 00:00",
    name: "Task 1. Calculator",
    description: "",
    organizer: "irinainina",
    id: "6VtGKo8FMhYO27HLWlPm",
  },
  {
    description: "",
    timeZone: "+3",
    place: "",
    dateStart: "2020-09-11 00:00",
    dateTime: "2020-09-28 00:00",
    comment: "",
    descriptionUrl:
      "https://github.com/rolling-scopes-school/tasks/blob/master/tasks/ready-projects/dynamic-landing-page.md",
    name: "Task 2. Dynamic Landing Page",
    type: "js task",
    organizer: "irinainina",
    id: "AhiWh4CTmTtQ3vA7Qsun",
  },
  {
    description: "",
    descriptionUrl:
      "https://github.com/rolling-scopes-school/tasks/blob/master/tasks/codejam-cv.md",
    type: "git&html&css",
    name: "Git & HTML & CSS",
    place: "",
    organizer: "dzmitry-varabei",
    dateStart: "2020-09-11 00:00",
    dateTime: "2020-09-15 00:00",
    deadlineDateTime: "2020-09-28 23:59",
    comment: "",
    timeZone: "+3",
    id: "Bj1xj1G6oVtruYl1960h",
  },
  {
    comment: "",
    description: "",
    timeZone: "+3",
    dateStart: "2020-09-11 00:00",
    dateTime: "2020-09-15 00:00",
    name: "GIT & Markdown",
    type: "git&markdown",
    deadlineDateTime: "2020-09-28 23:59",
    descriptionUrl:
      "https://github.com/rolling-scopes-school/tasks/blob/master/tasks/git-markdown.md",
    organizer: "dzmitry-varabei",
    place: "",
    id: "SLR3iJyeD8wIhegUC12I",
  },
  {
    dateStart: "2020-09-11 00:00",
    dateTime: "2020-09-26 18:00",
    organizer: "Антон Белый",
    place: "",
    comment: "",
    timeZone: "+3",
    type: "test",
    descriptionUrl: "",
    description:
      "Тест по основам Git. Ссылка будет в Discord. Его необходимо пройти за 24 часа",
    name: "Test: Git basics",
    id: "Ulr6vDWIVwwZmgSkiYqk",
  },
  {
    dateStart: "2020-09-11 00:00",
    dateTime: "2020-09-22 00:00",
    organizer: "AlreadyBored",
    name: "Алгоритмические задания Stage#1. Part #1",
    descriptionUrl: "https://github.com/AlreadyBored/basic-js",
    timeZone: "+3",
    description: "",
    deadlineDateTime: "2020-10-25 23:59",
    comment: "",
    type: "js task",
    place: "",
    id: "dfwrTl7zThBela6Yc8Jy",
  },
  {
    description: "",
    timeZone: "+3",
    organizer: "Сергей Шаляпин",
    dateStart: "2020-09-11 00:00",
    dateTime: "2020-09-15 00:00",
    deadlineDateTime: "2020-09-21 23:59",
    name: "Phototime",
    place: "",
    type: "photoshop",
    comment: "",
    descriptionUrl: "",
    id: "fuPaoEziBJ80c7dyMOJB",
  },
  {
    comment: "",
    descriptionUrl: "",
    name: "Test about RSSchool",
    organizer: "irinainina",
    place: "",
    dateStart: "2020-09-11 00:00",
    dateTime: "2020-09-19 18:00",
    type: "test",
    description:
      "Тест как учиться в RSSchool. Ссылка будет в Discord. Его необходимо пройти за 24 часа",
    timeZone: "+3",
    id: "knxT5hrJP6yLaOfFTdzq",
  },
  {
    description: "Материалы для изучения основ JS",
    name: "Self JS Basic",
    dateStart: "2020-09-11 00:00",
    dateTime: "2020-09-06 12:00",
    comment: "",
    type: "selfeducation",
    place: "",
    descriptionUrl:
      "https://github.com/rolling-scopes-school/tasks/blob/master/tasks/code-basics.md",
    organizer: "dzmitry-varabei",
    timeZone: "+3",
    id: "nAXnRFyp8Bwl5ZrppdwU",
  },
  {
    timeZone: "+3",
    deadlineDateTime: "2020-09-14 23:59",
    description: "Материалы для изучения основ HTML",
    comment: "",
    name: "Self HTML Basic",
    place: "",
    organizer: "dzmitry-varabei",
    type: "selfeducation",
    dateStart: "2020-09-11 00:00",
    dateTime: "2020-09-06 12:00",
    descriptionUrl:
      "https://github.com/rolling-scopes-school/tasks/blob/master/tasks/code-basics.md",
    id: "pgFgdMFF5sWd3svUTOwj",
  },
  {
    description: "",
    place: "",
    organizer: "irinainina",
    timeZone: "+3",
    dateStart: "2020-09-11 00:00",
    dateTime: "2020-09-14 00:00",
    name: "Codewars stage#1",
    comment: "",
    descriptionUrl:
      "https://github.com/rolling-scopes-school/tasks/blob/master/tasks/codewars-stage-1.md",
    type: "codewars",
    id: "rrUQGLDT88XmzGIByMln",
  },
  {
    name: "Self CSS Basic",
    organizer: "dzmitry-varabei",
    description: "Материалы для изучения основ CSS",
    timeZone: "+3",
    place: "",
    descriptionUrl:
      "https://github.com/rolling-scopes-school/tasks/blob/master/tasks/code-basics.md",
    dateStart: "2020-09-11 00:00",
    dateTime: "2020-09-06 12:00",
    comment: "",
    type: "selfeducation",
    id: "wYcZNMCEq4v8NMf4jMJR",
  },
];

data.forEach((task) => {
  store.dispatch(addTask(task));
});

// после обновления стора идет ререндинг реакта,
// поменял id, чтобы не ругался на ключ
setTimeout(() => {
  const newTask = { ...data[0], id: "dsf324DSds" };
  store.dispatch(addTask(newTask));
}, 2000);
