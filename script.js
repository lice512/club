let name = prompt('Как вас зовут?').trim().toLowerCase()
let age = +prompt('Ваш возраст')
let money = +prompt('Сколько у вас денег, в долларах?')
let howmuch = 0

if(name.slice(name[0]) === 'a' && age < 40, age > 20 && money > 100) {
    howmuch = +prompt('Сколько вас?')
} else {
    alert('Вы нам не подходите')
    
}

if(howmuch <= 10) {
    alert('Проходите')
} else {
    alert('Пропустить можем только десятерых')
}