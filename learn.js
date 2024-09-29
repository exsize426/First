const greetings = 'Hello window';
console.log(greetings)

let answer = prompt('Димон тупой?', '');
// if(answer == 'Нет' || answer == 'нет'){
//     alert('Правильно')
// } else {
//     alert('Пошел ты Даня')
// }
(answer == 'Нет' || answer == 'нет')? alert('Правильно'): alert('Пошел ты Даня');