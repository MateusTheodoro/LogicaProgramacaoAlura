var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()

  var form = document.querySelector('#form-adiciona')
  //Extraindo informacoes do paciente do form
  var paciente = obtemPacienteDoFormulario(form)

  //cria a tr e a td do paciente
  var pacienteTr = montaTr(paciente)

  //adicionando o paciente na tabela.
  var tabela = document.querySelector('#tabela-pacientes')

  tabela.appendChild(pacienteTr)
})

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente
}

function montaTr() {
  pacienteTr = document.createElement('tr')
  pacienteTr.classList.add('paciente')

  var nomeTd = document.createElement('td')
  pacienteTr.classList.add('paciente')

  var nomeTd = document.createElement('td')
  nomeTd.classList.add('info-nome')
  nomeTd.textContent = paciente.nome

  /*
  var nomeTd = document.createElement('td')
  var pesoTd = document.createElement('td')
  var alturaTd = document.createElement('td')
  var gorduraTd = document.createElement('td')
  var imcTd = document.createElement('td')

  nomeTd.textContent = nome
  pesoTd.textContent = peso
  alturaTd.textContent = altura
  gorduraTd.textContent = gordura
  imcTd.textContent = calculaImc(peso, altura)
  */

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))
  
  return pacienteTr
}

function montaTd(dado, classe) {
  var td = document.createElement('td')
  td.textContent = dado
  td.classList.add(classe)

  return td
}
