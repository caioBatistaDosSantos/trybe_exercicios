function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
  };
};
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // Exercicio 

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  function diaDoMes() {
    let diaID = document.querySelector('#days')
    let diaLi = document.createElement('li')

    for (let index = 0; index < dezDaysList.length; index++) {
      let dia = dezDaysList[index]

      if (dia === 24 | dia === 31) {
        document.querySelector('#days')
        document.createElement('li')

      }
      
    }

  }
