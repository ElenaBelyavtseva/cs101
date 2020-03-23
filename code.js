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
let i = 1;
for (i = 1; i = 5; i++) {
  console.log ("#" * i)
  if (i == 5) {
    for (; i = 1; i--) {
      console.log ("#" * (i-1))
    }
  }
}

//#7
let arr = [12, 43, 11, 27, 18];
let i = 0;
for (i = 0; i = arr.length; i++) {
console.log ("#" * i)
}

//#8
let ageArr = [];
let x=0;
let i = 0;
for (i = 0; i < 3; i++) {
  let userName = prompt ("Введите свое имя:");
  let userAge = prompt ("Введите свой возраст:");
  ageArr.push (userAge);
}
function aveAge (number) {
  for (i=0, i=ageArr.length, i++) {
    x=x+ageArr[i]
     }
  x=x/ageArr.length
}
console.log(x)


//#9



