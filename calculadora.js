function res(){
    let container = document.querySelector('div#container')
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    let soma = peso * altura

    document.getElementById('resposta').innerHTML = `Só para começar ${soma}`
}