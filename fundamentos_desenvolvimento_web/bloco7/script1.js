const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // Exericio 1

  const criaTurno = (objeto, chave, valor) => objeto[chave] = valor;

  criaTurno(lesson2, 'turno', 'noite')
  console.log(lesson2)

  // Exercicio 2

  const listaKeys = (obejct) => Object.keys(obejct);

  console.log(listaKeys(lesson1))

  // Exercicio 3

  const contaKeys = (object) => Object.keys(object).length

  console.log(contaKeys(lesson1))
  
  // Exercicio 4

  const listaValues = (obejct) => Object.values(obejct);

  console.log(listaValues(lesson1))

  // Exercicio 5

  const allLessons = Object.assign({}, {lesson1 ,lesson2, lesson3})

  
  console.log(allLessons)

  // Exercicio 6

  const contaEstudantes = () => console.log(allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes);

  contaEstudantes()

  // Exercicio 7

  const valorChave = (obj, number) => Object.values(obj)[number]''

  console.log(valorChave(lesson1, 0))

  // Exercicio 8

  function verificaChaveValor (obj, key, value) {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
  }

  console.log(verificaChaveValor(lesson3, 'turno', 'noite'));
  console.log(verificaChaveValor(lesson3, 'materia', 'Maria Clara'));

