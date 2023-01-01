function firstGame() {
    let yesNo = confirm("Ты готов играть?")
    if (yesNo == false) {
        alert("Жаль =(")
    } else { let i = Number(prompt("Введите число от 1 до 12"));
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

    function secondGame() {
        let i = Boolean(confirm('Ты готов играть?'));
        if (i) {
            alert('Поехали');
        } else {
            alert('Очень жаль');
        }
        for (; i === true;) {
            let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
            let shuffledArr = arr.sort(function() {
                return Math.random() - 0.5;
            })
            alert(shuffledArr);
            let a = prompt("Чему равнялся первый элемент массива?");
            let b = prompt('Чему равнялся последний элемент массива?');
            if (a == shuffledArr[0] && b == shuffledArr[6]) {
                alert('Поздравляю два элемента верны');
            } if (a != shuffledArr[0] && b == shuffledArr[6]) {
                alert('Второй элемент был верный');
            } if (a == shuffledArr[0] && b != shuffledArr[6]) {
                alert('Второй элемент был верный');
            }
            if (a != shuffledArr[0] && b != shuffledArr[6]) {
                alert('Ты не угадал ни одного элемента');
            }
           let j = Boolean(confirm('Хочешь сыграть еще?'));
           if (j != true) {
            break
           }
        }
    }
