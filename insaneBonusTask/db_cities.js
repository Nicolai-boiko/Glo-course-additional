const getData = () => {
    return fetch('./db_cities.json')
}
let dataT;
getData()
    .then(blob => blob.json())
    .then(cityData => {
        dataT = JSON.parse(JSON.stringify(cityData));
    });
console.log(dataT);

const data = {
    "RU": [
        {
            "country": "Россия",
            "count": "144500000",
            "cities": [
                {
                    "name": "Рязань",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Москва",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "Санкт-Петербург",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Краснодар",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Екатеринбург",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Ростов-на-Дону",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Воронеж",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Германия",
            "count": 82175684 ,
            "cities": [
                {
                    "name": "Берлин",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "Мюнхен",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "Франкфурт-на-Майне",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Кёльн",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "Англия",
            "count": 53012456,
            "cities": [
                {
                    "name": "Лондон",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Манчестер",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Эдинбург",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Бристоль",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ],
    "EN": [
        {
            "country": "Russia",
            "count": "144500000",
            "cities": [
                {
                    "name": "Ryazan",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Moscow",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "St Petersburg",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Krasnodar",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Yekaterinburg",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Rostov-on-Don",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Voronezh",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Germany",
            "count": 82175684 ,
            "cities": [
                {
                    "name": "Berlin",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "Munich",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "frankfurt",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Cologne",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "United Kingdom",
            "count": 53012456,
            "cities": [
                {
                    "name": "London",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Manchester",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Edinburgh",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Bristol",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ],
    "DE": [
        {
            "country": "Russland",
            "count": "144500000",
            "cities": [
                {
                    "name": "Ryazan",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Moskau",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "Saint Petersburg",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Krasnodar",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Jekaterinburg",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Rostow",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Woronesch",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Deutschland",
            "count": 82175684 ,
            "cities": [
                {
                    "name": "Berlin",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "München",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "Frankfurt",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Köln",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "England",
            "count": 53012456,
            "cities": [
                {
                    "name": "London",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Manchester",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Edinburgh",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Bristol",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ]
};

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