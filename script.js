function calcular(){
    let valor = document.querySelector('#preco').value
    let desconto = document.querySelector('.desconto').value
    let numPessoas = document.querySelector('#pessoas').value
    let resDesconto = document.querySelector('.res-desconto p')
    let resPessoas = document.querySelector('.num-pessoas p')
    let resTotal = document.querySelector('.total p')

    if(valor === '' || desconto === '' || numPessoas === ''){
        return alert('ERRO! Adicione um valor...')
    } 
    if(numPessoas === '' || numPessoas <= 1){
        numPessoas = 1
    }

    let taxaDescont = (valor * desconto)
    let total = (valor / numPessoas) + taxaDescont / numPessoas

    total = Math.round(total * 100) / 100
    total = total.toFixed(2)

    resDesconto.innerHTML = `${taxaDescont}`
    resPessoas.innerHTML = `${numPessoas}`
    resTotal.innerHTML = `${total}`
}