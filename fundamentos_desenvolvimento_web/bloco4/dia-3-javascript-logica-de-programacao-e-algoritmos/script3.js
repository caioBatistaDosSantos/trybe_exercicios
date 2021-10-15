let n = 5
let linha = ''
let posicao = n
let simbolo = '*'

for (let index = 0; index <= n ; index++) {
    for (let i = 0; i < n; i++) {
       if (i < posicao) {
           linha += ' '
       } else {
           linha += simbolo
       }
        
    }

    console.log(linha)
    linha = ''
    posicao--
}