document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const wrapper = document.querySelector('.wrapper');
    const select = document.querySelector('.search');

    const getData = () => {
        return fetch('./database/dbHeroes.json')
    }
    let filmData;
    let filmsArr = [];
    getData()
        .then(response => response.json())
        .then(data => {
            filmData = data;
            filmData.forEach((item) => {
                render(item);
                if (item.movies) item.movies.forEach(item => filmsArr.push(item));
            });
            filmsArr.sort();
            const filmsSet = new Set(filmsArr);
            filmsSet.forEach(film => {
                const crOption = document.createElement('option');
                crOption.innerHTML = `${film}`;
                select.append(crOption);
            })
        });
        

        
    function render (item) {
        const crDiv = document.createElement('div');
        crDiv.classList.add('hero-card');
        crDiv.innerHTML = `
            <div class="hero-photo" style="background: top 0% center / cover no-repeat url(./database/${item.photo}); border-radius: 10px"></div>
            <div class="info-container">
                <h2>Имя: <span class='main-text'>${item.name}</span></h2>
                <h3>Настоящее имя: <span class='main-text'>${item.realName ? item.realName : 'Неизвестно'}</span></h3>
                <h3>Фильмы: <span class='main-text'>${item.movies ? item.movies.join(', ') : 'Нет фильмов с этим персонажем'}</span></h3>
                <h3>Статус: <span class='main-text'>${item.status ? item.status : 'Неизвестно'}</span></h3>
            </div>
        `;
        wrapper.append(crDiv);
    }

    function sortCards(){
        if (select.value !== 'Выберите фильм'){
            wrapper.innerHTML = '';
            let filtredFilmData = filmData.filter((item) => {
                if (item.movies != null && item.movies.length > 0){
                    for (let movie of item.movies) {
                        if (movie === select.value) {
                            return true
                        }
                    }
                }
                return false
            });
            filtredFilmData.forEach((item) => render(item));
        } else {
            wrapper.innerHTML = '';
            filmData.forEach((item) => render(item))
        }
    }
    
    select.addEventListener('change', sortCards);
})