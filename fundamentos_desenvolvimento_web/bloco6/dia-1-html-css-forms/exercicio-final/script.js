const estado = document.getElementById('estado');
let estadosArr = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

function criaEstado() {
    for (let i = 0; i < estadosArr.length; i += 1) {
        let optionEstado = document.createElement('option')
        optionEstado.innerText = estadosArr[i]
        estado.appendChild(optionEstado)
    }
}

criaEstado()

function validaData() {
    if (0 > dd <= 31 && 0 < mm <= 12 && aaaa > 0) {

    }
}

5291523484141696820211028200616889PSKWE38B3E0BF6A9