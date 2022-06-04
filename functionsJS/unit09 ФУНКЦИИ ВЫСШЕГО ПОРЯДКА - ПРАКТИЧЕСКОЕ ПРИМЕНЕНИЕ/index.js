
// unit 09 - практика
// bit example

const user = {
   age: 26,
   password: 'asdfsaf2323',
   agreeToTerm: true
}

const user2 = {
   age: 36,
   password: 'asdfsaf2323',
   agreeToTerm: false
}

// check if age more than 18 years
function checkAge(user) {
   return user.age > 18
}
function checkPassword(user) {
   return user.password.length >= 8
}
function checkTerms(user) {
   return (user.agreeToTerm === true);
}

console.log(checkAge(user));
console.log(checkPassword(user));
console.log(checkTerms(user));

function validation(obj, ...tests) {
   for (let i = 0; i < tests.length; i++) {
      console.log('tests[i](obj)', `${tests[i](obj)}`);
      if (tests[i](obj) === false) return false;
   }
   return true;
}

//но если проверок будет много, тогда не будет уже удобно использовать подобную
console.log(validation(user, checkAge, checkPassword, checkTerms));

// перепишем функцию в более универсальную
// эта ф-ия принимает функцию и возвращает функцию
function createValidater(...tests) {
   return function (obj) {
      for (let i = 0; i < tests.length; i++) {
         console.log('tests[i](obj)', `${tests[i](obj)}`);
         if (tests[i](obj) === false) return false;
      }
      return true;
   }
}

// ниже функции высшего порядка
const validator1 = createValidater(checkAge, checkPassword, checkTerms);
const validator2 = createValidater(checkAge, checkPassword);

console.log(validator1(user2)); // false
console.log(validator2(user2)); // true
