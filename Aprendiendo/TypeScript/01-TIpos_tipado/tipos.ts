// let declara la varibale
// nombre de la variable
// : tipo de dato -- boolean
// = asignacion

// Boolean
let si: boolean = true
let no: boolean = false

// Numericas
let numero: number = 10
//numero = false // Esto no se permite debido al tipado de typescript
console.log(numero)

// Cadenas de caracteres
let nombre: string = 'Felipe'
let apellido: string = ' Uribe'
console.log(nombre + apellido)

// Arrays. Existen dos formas de declarar arrays en typescript
// los array deben contener elementos correspondientes al tipo de dato indicado
// Forma A:
let numeros: number[] = [1, 2, 3, 4]
let numeber: string[] = ['Felipe', 'Andres']
// Forma B:
let coleccionNumeros: Array<number> = [1, 2, 3, 4]
let coleccionNOmbres: Array<string> = ['Felipe', 'Andres']

//Tuplas
let tupla: [number, string, boolean]
tupla = [23, 'Manuel', true]
console.log(tupla[1])