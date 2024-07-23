const prompt = require("prompt-sync")();

let arrStudents = [
  { id: 1, nome: "Paulo", matricula: 20241, curso: "SI", ano: 2024 },
  { id: 2, nome: "Pedro", matricula: 20242, curso: "SI", ano: 2024 },
  { id: 3, nome: "Andre", matricula: 20243, curso: "SI", ano: 2024 },
];

function mainMenu() {
  option = prompt(`
    1. Listar estudantes
    2. Adicionar novo estudante
    3. Atualizar dados
    4. Remover estudante
    5. Buscar
    6. Sair  
`);

  while (option != "6") {
    if (option == "1") {
      seeStudents();
    }
    if (option == "2") {
      addNewStudents();
    }
    if (option == "3") {
      updateList();
    }
    if (option == "4") {
      removeStudent();
    }
    if (option == "5") {
      findStudent();
    }

    option = prompt(`
        1. Listar estudantes
        2. Adicionar novo estudante
        3. Atualizar dados
        4. Remover estudante
        5. Buscar
        6. Sair  
    `);
  }
}

mainMenu();

function seeStudents() {
  arrStudents.forEach((student) => {
    console.log(
      `Id: ${student.id}, Nome: ${student.nome}, Matrícula: ${student.matricula}, Curso: ${student.curso}, Ano: ${student.ano}`
    );
  });
}

function addNewStudents() {
  let id = arrStudents.length + 1;

  let nome = prompt("Nome: ");

  let matricula = prompt("Matrícula: ");

  let curso = prompt("Curso: ");

  let ano = prompt("Ano: ");

  const objectStudents = new Object();
  objectStudents.id = id;
  objectStudents.nome = nome;
  objectStudents.matricula = matricula;
  objectStudents.curso = curso;
  objectStudents.ano = ano;

  arrStudents.push(objectStudents);
}

function updateList() {
  const idAtualizar = prompt("ID do contato a atualizar: ");
  const newNome = prompt("Nome: ");
  const newMatricula = prompt("Matrícula: ");
  const newCurso = prompt("Curso: ");
  const newAno = prompt("Ano: ");

  const i = arrStudents.findIndex((aluno) => aluno.id == idAtualizar);
  if (i !== -1) {
    //Quer dizer que o array existe, pq se for menos 1 ele não existe
    arrStudents[i] = {
      //Estou criando um novo objeto, se que escrito de forma diferente (Boa prática da programação criar um outro objeto e colocar 'por cima' no antigo)
      id: idAtualizar,
      nome: newNome,
      matricula: newMatricula,
      curso: newCurso,
      ano: newAno,
    };
  }
}

function removeStudent() {
  const idRemove = prompt("Id do contato para remover: ");

  const i = arrStudents.findIndex((aluno) => aluno.id == idRemove);

  if (i !== -1) {
    const confirm = prompt(
      `Tem certeza que deseja remover o Id ${idRemove}: ${arrStudents[i].nome}? `
    );
    if (confirm.toLowerCase() === "s") {
      arrStudents.splice(i, 1);
      console.log("Removido com sucesso!");
    } else {
      console.log("Remoção cancelada!");
    }
  }
}

function findStudent() {
  let opcao = prompt(`
    Digite para buscar por:
    Nome;
    Matrícula;
    Curso.
`);
  let estudanteFiltrados;

  if (opcao == "Nome") {
    let nomeEstudante = prompt("Nome do estudante: ");
    estudanteFiltrados = arrStudents.filter(
      (estudante) => estudante.nome == nomeEstudante
    );
  } else if (opcao == "Matricula") {
    let matriculaEstudante = prompt("Número de matrícula: ");
    arrStudents.filter(
      (estudante) => estudante.matricula == matriculaEstudante
    );
  } else if (opcao == "Curso") {
    let cursoEstudante = prompt("Curso: ");
    arrStudents.filter((estudante) => estudante.curso == cursoEstudante);
  }
  for (var i = 0; i < estudanteFiltrados.length; i++) {
    console.log(
      `Id: ${estudanteFiltrados[i].id}, Nome: ${estudanteFiltrados[i].nome}, Matrícula: ${estudanteFiltrados[i].matricula}, Curso: ${estudanteFiltrados[i].curso}, Ano ${estudanteFiltrados[i].ano}`
    );
  }
}
