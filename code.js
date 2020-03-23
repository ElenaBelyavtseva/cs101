// #1
let userName = prompt ("Введите свое имя:");
let userAge = prompt ("Введите свой возраст:");
console.log (userName, ", ", userAge);

//#2
if (userName = "Ярополк" && userAge >= 18) {
  console.log ("Здравствуйте, ", userName)};
  
//#3
let whiteList = ["Зевс", "Афина", "Гермес"];
if (whiteList.includes(userName)) {
    console.log("Рецепт бессмертия хранится на Олимпе")
    }
      else {
      console.log("По вашему запросу нет данных")
      }

//#4
let blackList = [];
//возьму имя и возраст, который ввели в задаче 1
if (userAge < 18) {
  blackList.push(userName)}

//#5
let i = 0;
for (i = 0; i < 3; i++) {
  let userName = prompt ("Введите свое имя:");
  let userAge = prompt ("Введите свой возраст:");
  if (userAge % 2 != 0) {
      console.log (userName);
      }
    }

//#6
