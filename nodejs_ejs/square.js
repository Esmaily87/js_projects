
//stateless function
//não guardo o estado, a funação só conhece os dados entregues a ela
//a resposta não poderá varias
const juros = (j,c,i,n) => 
{ 
   
if (j == null) {
    
   resultado = c*i*n + " é o juro"
   console.log(resultado)
    

} else if (c == null) {
    resultado = (n*i)/j + " é o capital"
    console.log(resultado)
    

}else if (i == null) {
    resultado = (c*n)/j + " é a taxa"
    console.log(resultado)

}else if (n == null) {
    resultado = (c*i)/j + " é o tempo"
    console.log(resultado)

}
else{
    console.log('Nenhuma opção escolhida')
} 

return this.resultado

}

var calculo = juros(4,null,3,3) 

//função idependente
const factorial = x => {
    if(x === 0 ){
        return 1;
    }

    return x * factorial(x -1);
}
console.log(factorial(6))

//função pura
const circulo = (pi, radius) => pi * (radius+radius)
var calc_circ = circulo(Math.PI,2)

console.log(calc_circ)

const sayMyname = () => console.log('Esmaily')
const runFunction = fn => fn()
sayMyname()
runFunction(sayMyname )
console.log(runFunction(Math.random))

//High order function
const numbers = [2, 4, 8, 16]
const square = n => n * n
const squareNumber = numbers.map(square)
console.log(squareNumber)

//curryng ou aplicação parcial de função
const pause = wait => fno => setTimeout(fno, wait)

pause(2000) ( () => console.log('waiting 2s'))

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200(()=>console.log('waiting 200ms'))
wait1000(()=>console.log('waiting 1s'))

//composição de função uma função que retorna um dado que vai pra outra função
const people = ['Esmaily', 'Emanuel', 'Dani', 'Diego']
const upperPerson = people.filter(pessoa=>pessoa.startsWith('E')).map(dperson => dperson.toUpperCase())

console.log (upperPerson)









