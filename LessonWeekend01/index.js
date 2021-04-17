let btnRegestration = document.querySelector('.btn_reg');
let btnLogin = document.querySelector('.btn_login');
let title = document.querySelector('.title');
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
    list.textContent = '';
    userData.forEach((item, i) => {
        const li = document.createElement('li');
        li.classList.add('user-item');
        li.innerHTML = `<span class="text-user">Имя: ${item.firstName}, фамилия: ${item.lastName}, зарегистрирован: ${item.regDate}</span>
        <button class="user-remove">Delete</button>
        `;
        list.append(li);

        const btnRemove = li.querySelector('.user-remove');
        btnRemove.addEventListener('click', () => {
            userData.splice(i, 1);
            localStorage.setItem('users', JSON.stringify(userData));
            render();
        });
    });
};

function registration() {
    const regexName = /[a-zA-Zа-яА-Я] {1}[a-zA-Zа-яА-Я]/gi;
    const regexLoginPas = /\w/gi;
    
let firstLastNames;
let login;
let password;
    
        do {
            firstLastNames = prompt('Введите Имя и Фамилию через пробел');
            if (!firstLastNames.match(regexName)) {
                alert('Неправильный формат ФИ')
            }
        } while (!firstLastNames.match(regexName));
        do {
            login = prompt('Введите Логин');
            if (!login.match(regexLoginPas)) {
                alert('Неправильный формат логина')
            } else if (userData.find(user => user.login === login) !== undefined) {
                alert('Пользователь с таким логином уже существует');
            }
        } while (!login.match(regexLoginPas) || userData.find(user => user.login === login) !== undefined);
        do {
            password = prompt('Введите Пароль');
            if (!password.match(regexLoginPas)) {
                alert('Неправильный пароля')
            } 
        } while (!password.match(regexLoginPas));

        
        let arrName = firstLastNames.split(' ');    
        const newUser = {
            firstName: arrName[0],
            lastName: arrName[1],
            login,
            password,
            regDate: `${day} ${monthArray[month]} ${year} г., ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`
        };
        userData.push(newUser);
        localStorage.setItem('users', JSON.stringify(userData));
        render();
};

function loginFunc() {
    const regexLoginPas = /\w/gi;
    let login;
    let password;

    do {
        login = prompt('Введите Логин');
        if (!login.match(regexLoginPas)) {
            alert('Неправильный формат логина')
        }
    } while (!login.match(regexLoginPas));
    do {
        password = prompt('Введите Пароль');
        if (!password.match(regexLoginPas)) {
            alert('Неправильный пароля')
        } 
    } while (!password.match(regexLoginPas));
    let authorizedUser = userData.find(user => user.login === login);
    if (authorizedUser && password === authorizedUser.password) {
        title.textContent = `Привет ${authorizedUser.firstName}`;
    } else {
        alert('Пользователя с таким логином не сущестувует или не верный пароль')
    };
    
};

btnRegestration.addEventListener('click', (e) => {
    e.preventDefault;
    registration();
});
btnLogin.addEventListener('click', (e) => {
    e.preventDefault;
    loginFunc();
});
render();
