/*const weight = prompt('Enter your weight: ');
const height = prompt('Enter your height: ');

const bodyMassIndex = weight / Math.pow(height, 2 );
const areYouOverweight = bodyMassIndex >= 25;

console.log(bodyMassIndex);
console.log(areYouOverweight);
90
alert('Do you have a overweight? ' + areYouOverweight);
*/

/*const weight = prompt('Enter your weight: ');
const height = prompt('Enter your height: ');

answer = weight / Math.pow(height, 2);

if(answer >=  25) {
   console.log('You have a overweight');
   console.log(answer);
} else if(answer <= 25) {
   console.log("You don't have a overweight");
   console.log(answer);
} else {
   console.log('Incorrect data');
}
*/

/*
day = 'wednesday'

switch(day) {
   case 'monday':
      console.log('Nowaday is monday');
      break;
   case 'tuesday':
      console.log('Nowaday is tuesday');
      break;
   case 'wednesday':
      console.log('Nowaday is wednesday');
      break;
   case 'thursday':
      console.log('Nowaday is thursday');
      break;
   default:
      console.log('Everyday is good day');
      break;   
}
*/


/*const age = prompt("Enter your age: ");

const message = age >= 18 ? 'You can buy alcohol' :
"You can't buy alcohol";
console.log(message);
alert(message);*/


/*let money,
    logo,
    time,
    price;

function start() {
   money = prompt('Ваш бюджет?', '');

   while (isNaN(money) || money == null || money == "") {
      money = prompt('Ваш бюджет?', '');
   }
   logo = prompt('Название вашего магазина?', '').toUpperCase();
   time = 19;
   price = 10000;
}
start();

let mainList = {
   budget: money,
   shopName: logo,
   shopGoods: [],
   employers: {},
   open: false,
   discount: false,
   shopItems: [],
   chooseGoods: function chooseGoods() {
      for (let i = 0; i < 5; i++) {
         let a = prompt("Какой тип товаров будем продавать?");
      
         if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50) {
            console.log("Всё верно!");
            mainList.shopGoods[i] = a;
         } else {
            i = i - 1;
         }
      }
   },
   workTime: function workTime(time) {
      if (time < 0) {
         console.log("Такого не может быть");
      } else if(time > 8 && time < 20) {
         console.log('Мы открыты!');
         mainList.open = true;
         } else if(time < 24) {
            console.log('Уже слишком поздно');
            } else {
               console.log("В сутках всего 24 часа");
            }; 
   }, 
   dayBudget: function dayBudget() {
      alert(`Ваш бюджет на день: ${mainList.budget / 30}`);
   },
   makeDiscount: function makeDiscount() {
      if(discount == true) {
         console.log('С учётом скидки 20% выходит: ' + price * 0,8);
      }
   },
   hunterEmployers: function hunterEmployers() {
      for (i = 0; i < 4; i++) {
         let name = prompt('Введите имя сотрудника');
         mainList.employers[i] = name;
      }
   },
   chooseShopItems: function chooseShopItems() {
      let items = prompt("Перечислите через запятую товары: ", '');

      mainList.shopItems = items.split(',');
      mainList.shopItems.push(prompt("Ничего не забыли?", ''));
      mainList.shopItems.sort();
   }
}

console.log(mainList);*/






/*let a = prompt("Введите первое значение");
let b = prompt("Введите второе значение");

let operation = prompt("Введите нужную операцию");


function calculator(a,b) {
   
   while (operation != '+' || '-' || '*' || '/' && operation.length < 1) {
      if(operation = '+') {
         alert('Получившееся сложение = ' + (a + b));
      } else if (operation = '-') {
         alert('Получившееся вычитание =' + (a - b));
      } else if (operation = '*') {
         alert('Получившееся умножение = ' + (a * b));
      }else if (operation = '/') {
         alert('Получившееся деление =' + (a / b));
      } else {
         alert('Введите правильные данные');
      } 
   }
}

calculator(a,b);*/
