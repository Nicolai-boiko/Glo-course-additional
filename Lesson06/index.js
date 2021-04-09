function letsPlay () {

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

let randomNumber = randomInteger(1, 100);

(function start(){
    console.dir(start);
    console.log(randomNumber);
    let enterNumber = prompt('Угадай число от 1 до 100');
        if (enterNumber === null){
            alert('Игра окончена');
        } else if (!isNumber(enterNumber)){
            alert('Введи число!');
            start();
        } else {
            if (+enterNumber > randomNumber) {
                alert('Загаданное число меньше');
                start();
            } else if (+enterNumber < randomNumber) {
                alert('Загаданное число больше');
                start();
            } else if (+enterNumber === randomNumber) {
                alert('Поздравляю, Вы угадали!!!');
            }
    }
})();
};
letsPlay ();
