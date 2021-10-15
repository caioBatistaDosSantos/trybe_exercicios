let n = 5
let linha = ''
let simbolo = '*'
let meio = (n + 1) / 2
let ladoDireito = meio
let ladoEsquerdo = meio

for (let index = 0; index <= meio; index++) {
    for (let i = 0; i <= n; i++) {
        if (ladoEsquerdo < i && i < ladoDireito) {
            linha += simbolo
        } else {
            linha += ' '
        }
    }
    console.log(linha)
    linha = ''
    ladoDireito++
    ladoEsquerdo--
}
