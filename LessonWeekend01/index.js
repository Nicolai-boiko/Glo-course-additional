let btnRegestration = document.querySelector('.btn_reg');
let btnLogin = document.querySelector('.btn_login');
let list = document.querySelector('.list');
let userData = JSON.parse(localStorage.getItem('users')) || [];

let monthArray = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

function addZero(x) {
    return (parseInt(x, 10) < 10 ? '0' : '') + x;
    };
    
function render() {
        userData.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('user-item');
            li.innerHTML = `<span class="text-user">Имя: ${item.firstName}, фамилия: ${item.lastName}, зарегистрирован: ${item.regDate}</span>
            <button class="user-remove"></button>
            `;
            list.append(li);
    });
};

function registration() {
let firstLastNames = prompt('Введите Имя и Фамилию через пробел');
const regex = /[a-zA-Zа-яА-Я] {1}[a-zA-Zа-яА-Я]/;

    if (firstLastNames.match(regex)) {
        let arrName = firstLastNames.split(' ');    
        const newUser = {
            firstName: arrName[0],
            lastName: arrName[1],
            regDate: `${day} ${monthArray[month]} ${year} г., ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`
        };
        userData.push(newUser);
        localStorage.setItem('users', JSON.stringify(userData));
        render();
    } else {
        alert('Неправильный формат ФИ');
        firstLastNames = prompt('Введите Имя и Фамилию через пробел');
    };
};





function login() {

};



btnRegestration.addEventListener('click', (e) => {
    e.preventDefault;
    registration();
});
btnLogin.addEventListener('click', (e) => {
    e.preventDefault;
    login();
});
render();
