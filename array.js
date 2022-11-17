const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += `${indice}.`;
    textoFinal += vaga.nome;
    textoFinal += `"${vaga.candidatos}.length candidatos`;
    return textoFinal;
  });
}

function novaVaga() {
  const nome = prompt("Informe um nome para a vaga?");
  const descrição = prompt("Informe uma descrição para a vaga?");
  const dataLimite = prompt("Informe uma data limite para a vaga?");
  const confirmacao = confirm("Deseja confirmar a vaga?");

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada");
  }
}

function exibirVaga() {
  const indice = prompt("Qual o indice");
  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidatos
  ) {
    return textoFinal + "\n" + candidato;
  },
  "");

  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQtde candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos: " +
      candidatosEmTexto
  );
}

function inscreverCandidato() {}
