// xpresiones en Template Literals

const numbers = [2, 7, 4, 9, 6]

numbers.forEach((number) => {
  console.log(`El número ${number} es ${number % 2 === 0 ? 'par' : 'impar'}.`)
})
// El elemento entre llaves, admite expresiones y condiciones
