// VARIABLES
// MAIN MENU
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const portfolio = document.querySelector('#portfolio');
const contact = document.querySelector('#contact');
const workBox = document.querySelectorAll('.portfolio .box .overlay h2');
const body = document.querySelector('body');
const closeTab = document.querySelector('.popup .close img');
let popUp = document.querySelector('.popup');
let pop = document.querySelector('.popup .pop');
let firstLine = document.querySelector('.firstLine');
let secLine = document.querySelector('.secondLine');

// LINKS
const work0 = 'file:///C:/Users/user/Desktop/javascript/Calculator/Calculator.html';
const work1= 'file:///C:/Users/user/Desktop/Music%20Box/music_box.html#';
const work2 = 'https://tsula21.github.io/Flip-card/';
const work3 = 'file:///C:/Users/user/Desktop/HTml/world%20of%20music/index.html#';
const work4 = 'file:///C:/Users/user/Desktop/javascript/kinopoisk/kinopoisk.html';
const work5 = 'file:///C:/Users/user/Desktop/javascript/forecast/Forecast_2/forecast.html';

let portfolioInfo = [
    {
        id: 0,
        project: 'Calculator',
        languages: 'HTML, CSS, Javascript',
        client: 'Envato',
        preview: 'www.envato.com',
        img: './img/cover/calc.jpg',
        cover:'./img/portfolio/calc_full.jpg',
        link: work0
    },
    {
        id: 1,
        project: 'Music Box',
        languages: 'HTML, CSS, Javascript',
        client: 'Themeforest',
        preview: 'www.envato.com',
        img: './img/cover/tape.jpg',
        cover:'./img/portfolio/music_box.jpg',
        link: work1
    },
    {
        id: 2,
        project: 'Flip Card',
        languages: 'HTML, CSS, Javascript',
        client: 'Envato',
        preview: 'www.envato.com',
        img: './img/cover/cards.jpg',
        cover:'./img/portfolio/flip.jpg',
        link: work2
    },
    {
        id: 3,
        project: 'World Of Music',
        languages: 'HTML, CSS',
        client: 'Themeforest',
        preview: 'www.envato.com',
        img: './img/cover/disc.jpg',
        cover:'./img/portfolio/world_of_music_2.jpg',
        link: work3
    },
    {
        id: 4,
        project: 'Films',
        languages: 'HTML, CSS, Javascript',
        client: 'Envato',
        preview: 'www.envato.com',
        img: './img/cover/cinema.jpg',
        cover:'./img/portfolio/films.jpg',
        link: work4
    },
    {
        id: 5,
        project: 'Weather Forecast',
        languages: 'HTML, CSS, Javascript',
        client: 'Themeforest',
        preview: 'www.envato.com',
        img: './img/cover/umbrella.jpg',
        cover:'./img/portfolio/forecast.jpg',
        link: work5
    },
];
let arr = [];

// ADRESS(URL)
const page1 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_1/Themeforest_1.html";
const page2 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_2/Themeforest_2.html";
const page3 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_3/Themeforest_3.html";
const page4 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_4/Themeforest_4.html";


// Event Listeners
// MAIN MENU
home.addEventListener('click', () => {
    window.open(page1, '_top');
});

about.addEventListener('click', () => {
    window.open(page2, '_top');
});

portfolio.addEventListener('click', () => {
    window.open(page3, '_top');
});

contact.addEventListener('click', () => {
    window.open(page4, '_top');
});

closeTab.addEventListener('click', closePop);


function renderWorks(portfolioInfo){
    portfolioInfo.forEach((elem) => {
        let tableRow = `
        <div class="box snake">
            <img src="${elem.img}">
            <div class="overlay over" >
                <h2 class="open__pop" onclick="add(${elem.id})">${elem.project}</h2>
            </div>
        </div>
        `;
        firstLine.insertAdjacentHTML('beforeend', tableRow);
    });
}

renderWorks(portfolioInfo);

function add(id){
const items = portfolioInfo.find((info) => info.id === id);

   arr.push(items);

    // console.log(items,'item');
    console.log(arr,'arr');
    updateArr();
}

function updateArr(){
    renderArrItems();
    // body.classList.add('active');
    popUp.classList.add('active');
    body.classList.add('active');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function renderArrItems(){
    pop.innerHTML = '';
    arr.forEach((el) => {
        console.log(el,'el');
        pop.innerHTML += `
        <div class="pop__container">
                    <div class="pop__title">SLIDER PROJECT</div>
                    <div class="pop__content">
                        <div class="left">
                            <ul>
                                <li><img src="./icons/pop/project.svg" alt=""></li>
                                <li>Project :</li>
                                <li>${el.project}</li>
                            </ul>
                            <ul>
                                <li><img src="./icons/pop/code.svg" alt=""></li>
                                <li>Languages :</li>
                                <li>${el.languages}</li>
                            </ul>
                        </div>
                        <div class="right">
                            <ul>
                                <li><img src="./icons/pop/client.svg" alt=""></li>
                                <li>Client : </li>
                                <li>${el.client}</li>
                            </ul>
                            <ul>
                                <li><img src="./icons/pop/compass.svg" alt=""></li>
                                <li>Preview  :</li>
                                <li><a href="${el.link}" target="_blank">${el.preview}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="pics">
                        <img src="${el.cover}" alt="">
                    </div>
                </div>
        `;
    });
}


function closePop(){
    body.classList.remove('active');
    popUp.classList.remove('active');
    // arr = [];
    arr.shift();
    console.log(arr);
}



/* 
1 CALC
2 MUSIC BOX
3 MUSIC PAGE
4 ICE CREAM
5 FORECAST
6 WEATHER
7 FLIP CARD
8 FILMS
9 LANDSCAPE
*/