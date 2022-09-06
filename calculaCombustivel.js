function calculaLitros(){
    var velocidade = parseFloat(txtVelocidade.value)
    var tempo = parseFloat(txtTempo.value)
    var rendimento = parseFloat(txtRendimento.value)

    var distancia
    var litros

    if (isNaN(velocidade) ?? isNaN(tempo) ?? isNaN(rendimento)) {
            txtResultado.innerHTML = 'Erro: Preencha corretamente os campos'
    }else{
        distancia = (tempo / 60) * velocidade
        litros = distancia / rendimento
        txtResultado.innerHTML = `Foram gastos: ${litros.toFixed(2)} litros`
    }
}