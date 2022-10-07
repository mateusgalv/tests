const pushNumber = (list, number) => list.push(number);

const numbers = [];
const THREE_SECONDS = 3000;

setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), THREE_SECONDS);

// ------------------------------------------------------

const myFunction = (x, y) => {
  console.log(x, y)
}
setTimeout(myFunction, THREE_SECONDS, 'a', 'b');
// parâmetros de myFunction são passados como parâmetros em setTimeout

// -----------------------------------------------------

const TWELVE_SECONDS = 12000;

const myOtherFunction = () => console.log('opa');
const myInterval = setInterval(myOtherFunction, THREE_SECONDS);
// setInterval cria um loop de execução até ser parado por clearInterval()

setTimeout(() => clearInterval(myInterval), TWELVE_SECONDS);

// -----------------------------------------------------

// callbacks-para-fixar-01.js

const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const getUser = (callback) => {
  const user = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russo',
  };
  return callback(user);
};

console.log(getUser(userFullName)); // "Olá! Meu nome é Ivan Ivanovich"
console.log(getUser(userNationality)); // "Ivan é Russo"

// ----------------------------------------------------------------------]

// callbacks-para-fixar-02.js
const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser2 = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russo',
    };

    console.log(callback(user));
  }, delay());
};

getUser2(userFullName);
getUser2(userNationality);

// -----------------------------------------------

// callback-errors.js

const countryName = ({ name }) => console.log(`O país retornado é ${name}`);
const printErrorMessage = (error) => console.log(`Erro ao selecionar país: ${error}`);

function onSuccess(country) {
  console.log(countryName(country))
}
function onFailure(error) {
  console.log(printErrorMessage(error))
}

const getCountry = (onSuccess, onFailure) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if (didOperationSucceed) {
      const country = {
        name: 'Brasil',
        hdi: 0.759,
        currency: 'Real',
      };
      onSuccess(country);
    } else {
      const errorMessage = 'País não encontrado';
      onFailure(errorMessage);
    }
  }, delay());
};

getCountry(countryName, printErrorMessage);

