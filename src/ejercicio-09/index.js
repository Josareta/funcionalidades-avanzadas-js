// Uso de Set

const colors = new Set()

colors.add('Rojo')
colors.add('Verde')
colors.add('Azul')
colors.add('Rojo') // Intentar agregar un color duplicado

console.log('Colores en el Set:', colors)
// El método has, devuelve un booleano, indicando si existe o no, un valor dentro del Set.
const colorToCheck = 'Verde'
console.log(`¿${colorToCheck} existe en el Set? ${colors.has(colorToCheck)}`)