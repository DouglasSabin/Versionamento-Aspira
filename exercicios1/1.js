const MEDIA = 70;
const AULAS = 80;
const LIMITE_FALTAS = 25;
//testando a branch-novo
//testando pela segunda vezz

let nome = "Mauro Duarte";
let nota1 = 65;
let nota2 = 45;
let nota3 = 40;
let numFaltas = 20;

let somaNotaAluno = nota1 + nota2 + nota3;
console.log("soma das notas "+ somaNotaAluno);

let mediaAluno = somaNotaAluno / 3;
console.log("media das notas "+ mediaAluno);

let mediaAlunoFormat = mediaAluno.toFixed();
console.log("media formatada "+ mediaAlunoFormat);

// 1ª parte da solução do problema - rascunho
if (mediaAlunoFormat >= MEDIA) {
  console.log("O aluno " + nome + " está Aprovado");
} else {
  console.log("O aluno " + nome + " está Rerovado");
}

//calculo da porcentagem (x/y)*100 
let porcentagemFaltas = (numFaltas/AULAS)*100
console.log("porcentagem de faltas "+ porcentagemFaltas);

if(mediaAlunoFormat >= MEDIA && porcentagemFaltas < LIMITE_FALTAS) {
  console.log("O aluno " + nome + " está Aprovado");
} else if (mediaAlunoFormat >= MEDIA && porcentagemFaltas > LIMITE_FALTAS) {
  console.log("O aluno " + nome + " está Reprovado por Falta");
} else {
  console.log("O aluno " + nome + " está Reprovado por Média");
}
