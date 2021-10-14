let numeros = []
let divisao = 0

for (let i = 1; i <= 25; i++ ) {
    numeros.push(i)
}

for (let i = 0; i < numeros.length; i++ ){
    divisao = numeros[i] / 2

    console.log(divisao)
}
