function firstGame(n) {
    let yesNo = confirm("Ты готов играть?")
    if (yesNo == false) {
        alert("Жаль =(")
    } else {        let i = Number(prompt("Введите число от 1 до 12"));
    if (i == 1 || i == 2 || i == 12) {
        return console.log('Зима');
    }
    if (i == 3 || i == 4 || i == 5) {
        return console.log('Весна');
    }
    if (i == 6 || i == 7 || i == 8) {
        return console.log('Лето');
    }
    if (i == 9 || i == 10 || i == 11) {
        return console.log('Осень');
    }
    else {
        return console.log('Введено неверное значение');
    }
    }
    }
