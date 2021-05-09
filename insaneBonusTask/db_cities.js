const getData = () => {
    return fetch('./db_cities.json')
}
let data;
getData()
    .then(blob => blob.json())
    .then(cityData => {
        data = JSON.parse(JSON.stringify(cityData));
    });

const mainForm = document.querySelector('.dropdown-lists');
const defaultMain = document.querySelector('.dropdown-lists__list--default');
const defaultList = document.querySelector('.dropdown-lists__list--default > .dropdown-lists__col');
const input = document.getElementById('select-cities');

const createDefaultList = () => {
    defaultList.innerHTML = '';
    selectList.innerHTML = '';
    autocompleteList.innerHTML = '';
    defaultMain.style.display = 'block';
    selectMain.style.display = 'none';
    autocompleteMain.style.display = 'none';
    data.RU.forEach(obj => {
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
input.addEventListener('click', () => {
    if(input.value === '') {
        createDefaultList()
    }
});






const selectMain = document.querySelector('.dropdown-lists__list--select');
const selectList = document.querySelector('.dropdown-lists__list--select > .dropdown-lists__col');
const closeButton = document.querySelector('.close-button');
const btn = document.querySelector('.button');

const createSelectList = (e) => {
    defaultList.innerHTML = '';
    autocompleteList.innerHTML = '';
    autocompleteMain.style.display = 'none';
    defaultMain.style.display = 'none';
    selectMain.style.display = 'block';
    data.RU.forEach(obj => {
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




const autocompleteMain = document.querySelector('.dropdown-lists__list--autocomplete');
const autocompleteList = document.querySelector('.dropdown-lists__list--autocomplete > .dropdown-lists__col');
const label = document.querySelector('.label');

function createAutocompleteList () {
    defaultList.innerHTML = '';
    selectList.innerHTML = '';
    autocompleteList.innerHTML = '';
    defaultMain.style.display = 'none';
    selectMain.style.display = 'none';
    autocompleteMain.style.display = 'block';
    data.RU.forEach(obj => {
        function findMatches(wordToMatch, cities) {
            return cities.filter(place => {
                const regex = new RegExp(wordToMatch, 'gi');
                return place.name.match(regex)
            })
        }
        const matchArray = findMatches(this.value, obj.cities);
        if (matchArray != null && matchArray.length > 0) {
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

closeButton.addEventListener('click', () => {
    input.value = '';
    defaultList.innerHTML = '';
    selectList.innerHTML = '';
    autocompleteList.innerHTML = '';
    label.style.display = 'block';
    closeButton.style.display = 'none';
    btn.href = '#';
})