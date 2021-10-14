let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let maior = 0
let numeroImpar = 0
 
for ( let i = 0; i < numbers.length; i++ ) {
    if (numbers[i] % 2 !== 0) {
        numeroImpar++
    }  
}
if (numeroImpar !== 0) {
    console.log(numeroImpar)
} else {
    console.log('nenhum valor impar encontrado')
}

for ( let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maior) {
        maior = numbers[i]
    }
    console.log(maior)
}

for (var index = 0; index < numbers.length; index += 1 ) {
    soma += numbers[index] 
    let somaFinal = soma / numbers.length
    if (somaFinal > 20) {
        console.log('valor maior que 20')
    } else {
        console.log('valor menor ou igual a 20')
    }

}