document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const wrapper = document.querySelector('.wrapper');
    const select = document.querySelector('.search');

    const getData = () => {
        return fetch('./database/dbHeroes.json')
    }
    
    let filmsArr = [];
    getData()
        .then(response => response.json())
        .then(data => {
            data.forEach((item) => {
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
                
                if (item.movies) item.movies.forEach(item => filmsArr.push(item));
            })
            filmsArr.sort();
            const filmsSet = new Set(filmsArr);
            filmsSet.forEach(film => {
                const crOption = document.createElement('option');
                crOption.innerHTML = `
                <option>${film}</option>
                `;
                select.append(crOption);

            })
        });
        select.addEventListener('change', () => {
            
        });
})