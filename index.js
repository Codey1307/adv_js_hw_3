// Завдання 1

// const clients1 = [
//   "Гилберт",
//   "Сальваторе",
//   "Пирс",
//   "Соммерс",
//   "Форбс",
//   "Донован",
//   "Беннет",
// ];
// const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

// const allClients = [...clients1, ...clients2].reduce(
//   (uniqueClients, client) => {
//     if (!uniqueClients.includes(client)) {
//       uniqueClients.push(client);
//     }
//     return uniqueClients;
//   },[]);
// console.log(allClients);

// Завдання 2

// const characters = [
//     {
//       name: "Елена",
//       lastName: "Гилберт",
//       age: 17, 
//       gender: "woman",
//       status: "human"
//     },
//     {
//       name: "Кэролайн",
//       lastName: "Форбс",
//       age: 17,
//       gender: "woman",
//       status: "human"
//     },
//     {
//       name: "Аларик",
//       lastName: "Зальцман",
//       age: 31,
//       gender: "man",
//       status: "human"
//     },
//     {
//       name: "Дэймон",
//       lastName: "Сальваторе",
//       age: 156,
//       gender: "man",
//       status: "vampire"
//     },
//     {
//       name: "Ребекка",
//       lastName: "Майклсон",
//       age: 1089,
//       gender: "woman",
//       status: "vempire"
//     },
//     {
//       name: "Клаус",
//       lastName: "Майклсон",
//       age: 1093,
//       gender: "man",
//       status: "vampire"
//     }
//   ];

  // const charactersShortInfo = [{name, lastName, age}] = characters
  // console.log(charactersShortInfo)
  
// Завдання 3

// const user1 = {
//   name: "John",
//   years: 30
// };

// const {name, years, isAdmin = false} = user1
// console.log(name, years, isAdmin)

// Завдання 4

// const satoshi2020 = {
//   name: 'Nick',
//   surname: 'Sabo',
//   age: 51,
//   country: 'Japan',
//   birth: '1979-08-21',
//   location: {
//     lat: 38.869422, 
//     lng: 139.876632
//   }
// }

// const satoshi2019 = {
//   name: 'Dorian',
//   surname: 'Nakamoto',
//   age: 44,
//   hidden: true,
//   country: 'USA',
//   wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
//   browser: 'Chrome'
// }

// const satoshi2018 = {
//   name: 'Satoshi',
//   surname: 'Nakamoto', 
//   technology: 'Bitcoin',
//   country: 'Japan',
//   browser: 'Tor',
//   birth: '1975-04-05'
// }

// const fullProfile = {...satoshi2018,...satoshi2019,...satoshi2020};
// console.log(fullProfile)
// Завдання 5

// const books = [{
//   name: 'Harry Potter',
//   author: 'J.K. Rowling'
// }, {
//   name: 'Lord of the rings',
//   author: 'J.R.R. Tolkien'
// }, {
//   name: 'The witcher',
//   author: 'Andrzej Sapkowski'
// }];

// const bookToAdd = {
//   name: 'Game of thrones',
//   author: 'George R. R. Martin'
// }

// const newBooks = [...books,bookToAdd];
// console.log(newBooks)


// Завдання 6

// const employee = {
//   name: 'Vitalii',
//   surname: 'Klichko'
// }

// const newEmployee = JSON.parse(JSON.stringify(employee))
// newEmployee.age = 51;
// newEmployee.salary = 40000;
// console.log(newEmployee)

// || 

// const newEmployee = {
//   ...employee,
//   age:51,
//   salary:40000
// }

// console.log(newEmployee)

// Завдання 7

const array = ['value', () => 'showValue'];

let [value, showValue] = array

alert(value); // має бути виведено 'value'
alert(showValue());  // має бути виведено 'showValue'