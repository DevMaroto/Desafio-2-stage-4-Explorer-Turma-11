let alunos = [
  {
    nome: "Matheus",
    nota1: 8,
    nota2: 9
  },
  {
    nome: "Leticia",
    nota1: 10,
    nota2: 8
  },
  {
    nome: "Barbara",
    nota1: 5,
    nota2: 3,
  },
  {
    nome: "Lucas",
    nota1: 1,
    nota2: 5
  },
]


function calcularMedia(aluno) {
  nota1 = aluno.nota1
  nota2 = aluno.nota2
  media = (nota1 + nota2) /2
  return media
}

function verificarMedia(aluno) {
  let media = calcularMedia(aluno)
  if (media >= 7) {
    alert(`Parabens ${aluno.nome} sua media foi ${media} \n você foi aprovado(a)`)
  } else {
    alert(`Caro aluno(a) ${aluno.nome} você não atingiu a media necessaria, sua media foi ${media} \n você está reprovado(a)`)
  }
}

for (let aluno = 0; aluno < alunos.length; aluno++) {
  verificarMedia(alunos[aluno])
}












