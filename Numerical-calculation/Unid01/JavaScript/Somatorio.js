let valor = 0
let epilson = 10000

for (let i = 1; i <= epilson; i++) {
  valor += 1/Math.pow(i, 4)
}

console.log(`Resultado: ${valor}`)

let valorExato = Math.pow(Math.PI, 4) / 90
console.log(`Valor exato: ${valorExato}`)

let erroAbsoluto = valorExato - valor
console.log(`Erro Absoluto: ${erroAbsoluto}`)
let erroRelativo = (valorExato - valor) / valorExato
console.log(`Erro Relativo: ${erroRelativo}`)
let erroPercentual = erroRelativo*100
console.log(`Erro Percentual: ${erroPercentual}`)

console.log('DE FORMA INVERSA')

valor = 0

for (let i = epilson; i >= 1; i--) {
  valor += 1/(Math.pow(i, 4))
}

erroAbsoluto = 0
erroRelativo = 0
erroPercentual = 0

console.log(`Valor: ${valor} | Valor exato: ${valorExato}`)
erroAbsoluto = valorExato - valor
console.log(`Erro Absoluto: ${erroAbsoluto}`)
erroRelativo = (valorExato - valor) / valorExato
console.log(`Erro Relativo: ${erroRelativo}`)
erroPercentual = erroRelativo*100
console.log(`Erro Percentual: ${erroPercentual}`)