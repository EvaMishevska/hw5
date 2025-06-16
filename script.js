// ДЗ 13. Правильное обращение
// Написать функцию которая будет принимать строку с Ф.И.О 
// и будет возвращать Ф.И.О в правильном регистре.
//  Ф.И.О - нужно запросить у пользователя.

function someFunction (str) {
  let user = str.trim().split(' ');
  let userName = [];

  for (let i = 0; i < user.length; ++i) {

    if (user) { 
      let name = user[i] [0].toUpperCase() + user[i].slice(1).toLowerCase(); 

      userName.push(name);
    }
  }

    return userName.join(' ');
}

let humanName = prompt ( "Введите Ф.И.О");
alert( someFunction(humanName) );

