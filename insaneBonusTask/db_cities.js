let language =  document.cookie.slice(5) || prompt('Введите язык/Insert languge: (ru, en, de)').toUpperCase();
document.cookie = "lang=" + encodeURIComponent(language);



const mainForm = document.querySelector('.dropdown-lists');
const defaultMain = document.querySelector('.dropdown-lists__list--default');
const defaultList = document.querySelector('.dropdown-lists__list--default > .dropdown-lists__col');
const input = document.getElementById('select-cities');

const selectMain = document.querySelector('.dropdown-lists__list--select');
const selectList = document.querySelector('.dropdown-lists__list--select > .dropdown-lists__col');
const closeButton = document.querySelector('.close-button');
let btn = document.querySelector('.button');
const btnWrapper = document.querySelector('.btn-wrapper');
const dropdown = document.querySelector('.dropdown');

const autocompleteMain = document.querySelector('.dropdown-lists__list--autocomplete');
const autocompleteList = document.querySelector('.dropdown-lists__list--autocomplete > .dropdown-lists__col');
const label = document.querySelector('.label');


let btnWrapperInnerHTML = btnWrapper.innerHTML;


let data = JSON.parse(localStorage.getItem('data')) || [];
if (data.length === 0){
    btnWrapper.innerHTML = `
    <div>Загружается база данных, подождите...</div>
    <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    </div>
    `;
    input.setAttribute('disabled', 'disabled');
    const getData = () => {
        return fetch(`http://localhost:3000/${language}`)
    }
    getData()
        .then(blob => blob.json())
        .then(cityData => {
            localStorage.setItem('data', JSON.stringify(cityData));
            data = JSON.parse(JSON.stringify(cityData));
            btnWrapper.innerHTML = btnWrapperInnerHTML;
            input.removeAttribute('disabled');
            btn = document.querySelector('.button');
        });
}

/* if (language === 'RU') {
    data.sort((a) => {
        if (a.country === "Россия") {
            return 1
        } else {
            return -1;
        };
    })
} else if (language === 'EN') {
    data.sort((a) => {
        if (a.country === "United Kingdom") {
            return 1
        } else {
            return -1;
        };
    })
} else if (language === 'DE') {
    data.sort((a) => {
        if (a.country === "Deutschland") {
            return 1
        } else {
            return -1;
        };
    })
}; */

function transitionEnd (){
    selectList.innerHTML = '';
    selectMain.style.display = 'none';
}

const createDefaultList = () => {
    mainForm.style.transform = 'translateX(0%)';
    defaultList.innerHTML = '';
    defaultMain.style.display = 'block';
    autocompleteList.innerHTML = '';
    autocompleteMain.style.display = 'none';
    mainForm.addEventListener('transitionend', transitionEnd);
    
    data.forEach(obj => {
        obj.cities.sort((a, b) => +a.count > +b.count ? -1 : 1);
        const crDiv = document.createElement('div');
        crDiv.classList.add('dropdown-lists__countryBlock');
        crDiv.innerHTML = `
            <div class="dropdown-lists__total-line">
                <div class="dropdown-lists__country">${obj.country}</div>
                <div class="dropdown-lists__count">${obj.count}</div>
            </div>
            <div class="dropdown-lists__line">
                <div class="dropdown-lists__city dropdown-lists__city--ip">${obj.cities[0].name}</div>
                <div class="dropdown-lists__count">${obj.cities[0].count}</div>
            </div>
            <div class="dropdown-lists__line">
                <div class="dropdown-lists__city">${obj.cities[1].name}</div>
                <div class="dropdown-lists__count">${obj.cities[1].count}</div>
            </div>
            <div class="dropdown-lists__line">
                <div class="dropdown-lists__city">${obj.cities[2].name}</div>
                <div class="dropdown-lists__count">${obj.cities[2].count}</div>
            </div>
        `;
        defaultList.append(crDiv);
    })
}

const createSelectList = (e) => {
    mainForm.removeEventListener('transitionend', transitionEnd);
    autocompleteList.innerHTML = '';
    autocompleteMain.style.display = 'none';
    selectMain.style.display = 'block';
    mainForm.style.transform = 'translateX(-100%)';
    data.forEach(obj => {
        if (obj.country === e.children[0].innerText) {
            const crDivCountry = document.createElement('div');
            crDivCountry.classList.add('dropdown-lists__countryBlock');
            crDivCountry.innerHTML = `
                <div class="dropdown-lists__total-line">
                    <div class="dropdown-lists__country">${obj.country}</div>
                    <div class="dropdown-lists__count">${obj.count}</div>
                </div>
            `;
            obj.cities.forEach(cityObj => {
                const crDivCity = document.createElement('div');
                crDivCity.classList.add('dropdown-lists__line');
                crDivCity.innerHTML = `
                    <div class="dropdown-lists__city">${cityObj.name}</div>
                    <div class="dropdown-lists__count">${cityObj.count}</div>
                    `;
                crDivCountry.append(crDivCity);
            })
            selectList.append(crDivCountry);
        }
    })
}

function createAutocompleteList () {
    mainForm.style.transform = 'translateX(0%)';
    defaultList.innerHTML = '';
    selectList.innerHTML = '';
    autocompleteList.innerHTML = '';
    defaultMain.style.display = 'none';
    selectMain.style.display = 'none';
    autocompleteMain.style.display = 'block';
    data.forEach(obj => {
        function findMatches(wordToMatch, cities) {
            return cities.filter(place => {
                const regex = new RegExp(wordToMatch, 'gi');
                return place.name.match(regex)
            })
        }
        const matchArray = findMatches(this.value, obj.cities);
        if (matchArray != null && matchArray.length > 0) {
            console.log(btn);
            btn.href = matchArray[0].link;
        };
        const html = matchArray.map(place => {
            return `
                <div class="dropdown-lists__countryBlock">
                    <div class="dropdown-lists__line">
                        <div class="dropdown-lists__city">${place.name}</div>
                        <div class="dropdown-lists__count">${place.count}</div>
                    </div>
                </div>
            `;
        }).join('');
        autocompleteList.insertAdjacentHTML('afterbegin', html);
    });
    if (autocompleteList.innerHTML === '') autocompleteList.innerHTML = 'Ниечго не найдено';
}

input.addEventListener('click', () => {
    if(input.value === '') {
        createDefaultList()
    }
});

input.addEventListener('input', function() {
    if (input.value !== '') {
        closeButton.style.display = 'block';
        autocompleteList.innerHTML = '';
        createAutocompleteList.call(this);
    } else {
        btn.href = '#';
        closeButton.style.display = 'none';
        createDefaultList();
    }
})
input.addEventListener('blur', () => {
    if (input.value !== '') {
        label.style.display = 'none';
    }
})
input.addEventListener('focus', () => label.style.display = 'block');


mainForm.addEventListener('click', (e) => {
    if (e.target.closest('.dropdown-lists__total-line')) {
        if (selectList.innerHTML === '') {
            createSelectList(e.target.closest('.dropdown-lists__total-line'))
        } else {
            createDefaultList()
        }
    } else if (e.target.classList.contains('dropdown-lists__city')) {
        input.value = e.target.innerText;
        label.style.display = 'none';
        closeButton.style.display = 'block';
        createAutocompleteList.call(input);
    }
});

closeButton.addEventListener('click', () => {
    input.value = '';
    defaultList.innerHTML = '';
    selectList.innerHTML = '';
    autocompleteList.innerHTML = '';
    label.style.display = 'block';
    closeButton.style.display = 'none';
    btn.href = '#';
})