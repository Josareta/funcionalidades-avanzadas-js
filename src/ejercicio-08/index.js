// Rest Parameters en una Función
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num)
  }
  
const result = sum(1, 2, 3, 4, 5)

console.log(`La suma es: ${result}`) // La suma es: 15
  