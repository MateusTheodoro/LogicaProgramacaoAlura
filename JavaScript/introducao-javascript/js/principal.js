var titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

var paciente = document.querySelector('#primeiro-paciente')

var tdPeso = paciente.querySelector('.info-peso')
var peso = tdPeso.textContent

var tdAltura = paciente.querySelector('.info-altura')
var altura = tdAltura.textContent

var tdImc = paciente.querySelector('.info-imc')

var alturaEhVerdadeira = true
var pesoEhVerdadeiro = true

if (peso <= 0 || peso >= 1000) {
  console.log('Peso inválido')
  tdImc.textContent = 'Peso inválido!'
  pesoEhVerdadeiro = false
}

if (altura <= 0 || altura >= 3.0) {
  console.log('Altura inválida')
  tdImc.textContent = 'Altura inválida!'
  alturaEhVerdadeira = false
}

if (alturaEhVerdadeira && pesoEhVerdadeiro) {
  var imc = peso / (altura * altura)
  tdImc.textContent = imc
}
