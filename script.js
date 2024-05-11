// // 1
// let depositButton =document.getElementById('depositButton')
// let withdrawButton =document.getElementById('withdrawButton')
// let balance = document.getElementById('balance')
// let bankAccount = {
//     ownerName: '',
//     accountNumber: '',
//     balance: 0,
    
//     deposit(deposit) {
//         this.balance += deposit;
//         balance.innerText = this.balance;
//         alert(`Депозит успішно. Новий баланс: ${this.balance}`);
//     },
//     withdraw(deposit) {

//         if (this.balance >= deposit) {
//             this.balance -= deposit;
//             balance.innerText = this.balance;
//             alert(`Виведення успішно. Новий баланс:${this.balance}`);
//         } 

//         else {
//             alert("Недостатній баланс");
//         }
//     }
// };


// depositButton.addEventListener('click', function() {
//     let deposit= parseFloat(prompt("Введіть суму депозиту:"));
//     bankAccount.deposit(deposit);
// });

// withdrawButton.addEventListener('click', function() {
//     let deposit = parseFloat(prompt("Введіть суму зняття:"));
//     bankAccount.withdraw(deposit);
// });

// // 2
//     // let temperatureButton = document.getElementById('temperatureButton')
//     // let temperatureInput = document.getElementById('temperature')
//     // let message = document.getElementById('message').value;
    
//   promptZero = parseInt(prompt('Введіть температуру:'))
// const weather = {
//     temperature: promptZero,
//     humidity:0,
//     windspeed:0,
//     temperatureZero(){
//         if(this.temperature < 0){
//             console.log('little')
//         return true
//         } else{
//             console.log('More or 0')
//           return false
//         }
         
//     }
// }
// weather.temperatureZero()

// // temperatureButton.addEventListener('click',weather.temperatureZero(){
// //     weather.temperature = parseInt(temperatureInput);
// // })

// // 3

// function  userOrder(user, orders){
//   let{id, email,address,name } = user
//   let lastOrder = orders[orders.length - 1];
//   let{product, price } = lastOrder
//   return `${name}, ${id}, ${email} , ${address}, lastorder ${product}, ${price} dollars`
// }
// console.log(userOrder(user, orders))



// let buttonLogin = document.getElementById("login")
// let user = {
//     name: "",
//     email: "",
//     password: "",
//     login: function(inputEmail, inputPassword) {
//       if (inputEmail === this.email && inputPassword === this.password) {
//         alert("Кредит оформили!");
//       } else {
//         alert("Прийдете в 18 за кредитом");
//       }
//     }
//   };
  
//   buttonLogin.addEventListener("click", function() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;


//     user.name = name;
//     user.email = email;
//     user.password = password;
  
//     let inputEmail = prompt("Пошта для кредита");
//     let inputPassword = prompt("Пароль для кредита");
//     user.login(inputEmail, inputPassword);
//   });
  

// 13.04.2024

//     let coolObject = {
//         name:'Object',
//         mas: 100,
//         login: 'XD',
//     }

// for(let key in coolObject){
//     console.log(coolObject[key])
// }
// let newObject = {
//     name: 'gleb',
//     ves: 120,
//     height: '165',
//     age: 1,
// }
// let caseObject = Object.keys(newObject)
// console.log(caseObject)


// let valuesObjeсt = Object.values(newObject);
// console.log(valuesObjeсt);

// let entresObjeсt = Object.entries(newObject);
// console.log(entresObjeсt);
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//     ];
// function findFriendByName(friends, name){
//     for(let friend in friends){
//         let friendTrue = friends[friend]
//       if(friendTrue.name === name) {
//         return friendTrue;
//       } 
         
//     }
// }
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроїд', price: 400, quantity: 7 },
//     { name: 'Захоплення', price: 1200, quantity: 2 },
// ];


// function  calculateTotalPrice(allProdcuts, productName) {
//     for( let i = 0; i < allProdcuts.length; i++){
//         if(allProdcuts[i].name === productName) {
//             return allProdcuts[i].price * allProdcuts[i].quantity
//         }
//     }
// }

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроїд')); // 2800

// // let oject = {
// //     name: 'Evgeniy',
// //     age: 165,
// //     place: 'OAE'
// // }
// // let {surname='nadiaa',age,place = 'city'} = oject
// // console.log(surname,age,place)




//             function personInfo({ name, surname, age }) {
//                 return `Мене звати ${name} ${surname} і мені ${age} років.`;
//               };
              
//               const person = {
//                 name: 'Тарас',
//                 surname: 'Владика',
//                 age: 766
//               };
            
//               console.log(personInfo(person));
//               //   гер
//               function calculateAverageGrade(student, grades) {
//                 let sum = 0
//                 for(let i; i< grades.length; i++){
//                     sum+= grades[i]
//                 }
//                 return sum / grades.length
//               }
              
//               const student = {
//                 name: 'Григорій',
//                 surname: 'Тесленко',
//                 grades: [5, 5, 5]
//               };
              

              
//               console.log(calculateAverageGrade(grades));
              


              // function calculateTotalPrice(price){
              //   let result = 0;
              //   for(let  {price, quantity} of  items){
              //       result += price * quantity
              //   }
              //   return result
              // }

              // const items = [
              //   { name: 'Футболка', price: 250, quantity: 2 },
              //   { name: 'Джинси', price: 800, quantity: 1 },
              //   { name: 'Кросівки', price: 1200, quantity: 1 }
              //   ];
                
              //   console.log(calculateTotalPrice(items)); // 250 * 2 + 800 * 1 + 1200 * 1 = 2500


              //   // taras
              //   function getFirstEmail({emails}){
              //       return emails[0]
              //   }



              //   const person = {
              //       name: 'John',
              //       emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
              //       };
                    
              //       console.log(getFirstEmail(person)); // 'john@gmail.com'



              //       let musicLibrary = {
              //         count: 2,
              //         artists: [
              //         {
              //         name: 'The Beatles',
              //         albums: [
              //         {
              //         title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
              //         year: 1967,
              //         tracks: [
              //         { title: 'With a Little Help from My Friends', duration: '2:44' },
              //         { title: 'Lucy in the Sky with Diamonds', duration: '3:28' },
              //         { title: 'A Day in the Life', duration: '5:33' }
              //         ]
              //         },
                  
              //         {
              //         title: 'Abbey Road',
              //         year: 1969,
              //         tracks: [
              //         { title: 'Come Together', duration: '4:19' },
              //         { title: 'Something', duration: '3:01' },
              //         { title: 'Here Comes the Sun', duration: '3:06' }
              //         ]
              //         }
              //         ]
                  
              //         },
                  
              //         {
              //         name: 'Pink Floyd',
              //         albums: [
              //         {
              //         title: 'The Wall',
              //         year: 1979,
              //         tracks: [
              //         { title: 'Another Brick in the Wall, Part 2', duration: '3:59' },
              //         { title: 'Comfortably Numb', duration: '6:23' },
              //         { title: 'Hey You', duration: '4:40' }
              //         ]
              //         },
              //         {
              //         title: 'Dark Side of the Moon',
              //         year: 1973,
              //         tracks: [
              //         { title: 'Speak to Me/Breathe', duration: '3:58' },
              //         { title: 'Time', duration: '7:06' },
              //         { title: 'Money', duration: '6:22' }
              //     ]
              //     }
              //     ]
              //     }
              //     ]
              //     }
                      
                      
                  
              //     let {
              //         count,
              //         artists:[
              //             {
              //                 name,
              //                 albums:[
              //                     {
              //                         title,
              //                         year,
              //                         tracks:[
              //                             {title:title1, duration},
              //                             {title:title2, duration:duration2},
              //                             {title:title3, duration:duration3},
              //                         ]
              //                     },
                  
              //                     {
              //                         title:title4,
              //                         year:year1,
              //                         tracks:[
              //                             {title:title5, duration:duration4},
              //                             {title:title6, duration:duration5},
              //                             {title:title7, duration:duration6},
              //                         ]
              //                     }
              //                 ],
              //             },
              //                 {
              //                     name:name1,
              //                     albums:[
              //                         {
              //                             title:title8,
              //                             year:year2,
              //                             tracks:[
              //                                 {title:title9, duration:duration7},
              //                                 {title:title10, duration:duration8},
              //                                 {title:title11, duration:duration9},
              //                             ]
              //                         },
                      
              //                         {
              //                             title:title12,
              //                             year:year3,
              //                             tracks:[
              //                                 {title:title13, duration:duration10},
              //                                 {title:title14, duration:duration11},
              //                                 {title:title15, duration:duration12},
              //                             ]
              //                         }
              //                     ],
              //                 },
              //         ]
              //     } = musicLibrary
                  
                  
              //     console.log(count, name, title, year,title1,title2,title3,title4,title5,title6,title7,title8,title9,title10,title11,title12,title13,title14,title15, year1,year2,year3,)



              //     const user = {
              //       id: 'GodzilaHlib',
              //       name: 'Hlib4ik',
              //       email: 'prograMmMist@example.com',
              //       address: '123 Main Street, Anytown, USA'
              //       };

              //       const orders = [
              //         { id: 1, product: 'Smartphone', price: 999 },
              //         { id: 2, product: 'Laptop', price: 1499 },
              //         { id: 3, product: 'Headphones', price: 199 }
              //         ];
// // Об'єкт, що представляє книжку
// let book = {
//   title: 'To Kill a Mockingbird',
//   author: 'Harper Lee'
// };
//   // Масив користувачів, які прочитали книжку
 
//   let readers = [
//     { name: 'Alice', booksRead: ['1984', 'To Kill a Mockingbird', 'The Catcher in the Rye'] },
//     { name: 'Bob', booksRead: ['To Kill a Mockingbird', 'Pride and Prejudice', 'The Great Gatsby'] },
//     { name: 'Charlie', booksRead: ['The Catcher in the Rye', 'The Great Gatsby', 'Brave New World'] }
//   ];
//   function goodReader(book, readers) {
//     for (let reader of readers) {
//         if (reader.booksRead.includes(book.title)) {
//             return `"${book.title}", ${reader.name}`
//         }
//     return
//     }
//   }
//   console.log(goodReader(book, readers))







// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
//   ];
//   players.forEach(pl =>{
//     pl.points /= 0.1
//     return players
//   })
//   console.log(players)
//   let onlinePlay = players.filter(player => player.online).map(player => player);
//   let oflinePlay = players.filter(player => !player.online).map(player => player);
//   console.log(onlinePlay)
//   console.log(oflinePlay)
  
// let arrays=  players.filter(val => val.timePlayed > 250);
// console.log(arrays)

// let findId =(id) => players.find(player => player.id === id);


// let findName =(name) =>players.find(player => player.name === name);
// console.log(findId('player-1'))
// console.log(findName('Ajax'))


// let playerhard = players.every(player => player.timePlayed > 200);
// let onlineplay =players.every(player => player.online)
// console.log(onlineplay)
// console.log(playerhard)

  




// let arr = [1,2,3,4]
// let sum = 0;
// let sumArr = arr.filter(val =>{
//   if(val %2 === 0){
//     sum += val
//   }
//   return sum
  
// }) 
// const people = [
//   { name: 'John', age: 32, occupation: 'programmer' },
//   { name: 'Jane', age: 26, occupation: 'teacher' },
//   { name: 'Mike', age: 42, occupation: 'engineer' },
//   { name: 'Emily', age: 17, occupation: 'designer' }
//   ];
//   function people18(){
//    let peipl = people.filter(peopl => peopl.age > 18)
//     return peipl
//   } 
//  console.log(people18())
// function filterRange(arr, a, b){
//  return arr.filter(numb =>numb >= a && numb <= b)
//  }
//  const array = [1, 27, 3, 44, 4, 5, 16, 6, 7];
//  console.log(filterRange(array,1,7))
//  const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
// const array2 = [5,12, 3, 14, 4, 5, 6, 6, 7];
// let array = array1.concat(array2.filter(elem => !array1.includes(elem)))
// console.log(array)
// const fruits = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];
// function lastAndFirstLeter(arr){
//   return arr.map(item => item[0]+item[item.length -1])
// }
// console.log(lastAndFirstLeter(fruits))
// const people = [
//   { name: 'John', surname: 'Doe', age: 32, occupation: 'programmer' },
//   { name: 'Jane', surname: 'Lee', age: 26, occupation: 'teacher' },
//   { name: 'Mike', surname: 'Watson', age: 42, occupation: 'engineer' },
//   { name: 'Emily', surname:'Brad', age: 29, occupation: 'designer' }
//   ];
// let fullName= people.map((full,iD) => ({
  
//   id: iD +1,
//   fullName:full.name +' '+full.surname 
// }))
// console.log(fullName)
let chuVaki = [
  {
  id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
  name: 'Moore Hensley',
  email: 'moorehensley@indexia.com',
  eyeColor: 'blue',
  friends: ['Sharron Pace'],
  isActive: false,
  balance: 2811,
  skills: ['ipsum', 'lorem'],
  gender: 'male',
  age: 37,
  },
  {
  id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
  name: 'Sharlene Bush',
  email: 'sharlenebush@tubesys.com',
  eyeColor: 'blue',
  friends: ['Briana Decker', 'Sharron Pace'],
  isActive: true,
  balance: 3821,
  skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
  gender: 'female',
  age: 34,
  },
  {
  id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
  name: 'Ross Vazquez',
  email: 'rossvazquez@xinware.com',
  eyeColor: 'green',
  friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  isActive: false,
  balance: 3793,
  skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
  gender: 'male',
  age: 24,
  },
  {
  id: '249b6175-5c30-44c6-b154-f120923736f5',
  name: 'Elma Head',
  email: 'elmahead@omatom.com',
  eyeColor: 'green',
  friends: ['Goldie Gentry', 'Aisha Tran'],
  isActive: true,
  balance: 2278,
  skills: ['adipisicing', 'irure', 'velit'],
  gender: 'female',
  age: 21,
  },
  {
  id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
  name: 'Carey Barr',
  email: 'careybarr@nurali.com',
  eyeColor: 'blue',
  friends: ['Jordan Sampson', 'Eddie Strong'],
  isActive: true,
  balance: 3951,
  skills: ['ex', 'culpa', 'nostrud'],
  gender: 'male',
  age: 27,
  },
  {
  id: '150b00fb-dd82-427d-9faf-2879ea87c695',
  name: 'Blackburn Dotson',
  email: 'blackburndotson@furnigeer.com',
  eyeColor: 'brown',
  friends: ['Jacklyn Lucas', 'Linda Chapman'],
  isActive: false,
  balance: 1498,
  skills: ['non', 'amet', 'ipsum'],
  gender: 'male',
  age: 38,
  },
  {
  id: 'e1bf46ab-7168-491e-925e-f01e21394812',
  name: 'Sheree Anthony',
  email: 'shereeanthony@kog.com',
  eyeColor: 'brown',
  friends: ['Goldie Gentry', 'Briana Decker'],
  isActive: true,
  balance: 2764,
  skills: ['lorem', 'veniam', 'culpa'],
  gender: 'female',
  age: 39,
  },
  ];
 let chuvakName= chuVaki.map(chuvak => chuvak.name)
  console.log(chuvakName)
  function getEyeColor(men, color){  
    return men.filter(eyes => eyes.eyeColor === color)
}
 console.log(getEyeColor(chuVaki, 'brown')) 