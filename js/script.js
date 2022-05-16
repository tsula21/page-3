// VARIABLES
// MAIN MENU
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const portfolio = document.querySelector('#portfolio');
const contact = document.querySelector('#contact');
const workBox = document.querySelectorAll('.portfolio .box .overlay h2');
const body = document.querySelector('body');
const bar = document.querySelector('.bar');
const closeTab = document.querySelector('.popup .close img');
let popUp = document.querySelector('.popup');
let pop = document.querySelector('.popup .pop');
let firstLine = document.querySelector('.firstLine');
let secLine = document.querySelector('.secondLine');
const menuBar = document.querySelector('.barMenuBtn');
const closeMenu = document.querySelector('.closebtn');
const allSideBar = document.querySelector('.responsive__menu');
console.log(closeMenu);

// LINKS
const work0 = 'https://tsula21.github.io/Calculator---Neumorphism-Dark-/';
const work1 = 'https://tsula21.github.io/music_box/';
const work2 = 'https://tsula21.github.io/Flip-card/';
const work3 = 'https://tsula21.github.io/Landscape-Animation/';
const work4 = 'https://tsula21.github.io/Films-/';
const work5 = 'https://tsula21.github.io/Weather-Forecast-/';

let portfolioInfo = [
    {
        id: 0,
        project: 'Calculator',
        languages: 'HTML, CSS, Javascript',
        client: 'Envato',
        preview: 'GitHub Pages',
        img: './img/cover/calc.jpg',
        cover:'./img/portfolio/calc_full.jpg',
        link: work0
    },
    {
        id: 1,
        project: 'Music Box',
        languages: 'HTML, CSS, Javascript',
        client: 'Themeforest',
        preview: 'GitHub Pages',
        img: './img/cover/tape.jpg',
        cover:'./img/portfolio/music_box.jpg',
        link: work1
    },
    {
        id: 2,
        project: 'Flip Card',
        languages: 'HTML, CSS, Javascript',
        client: 'Envato',
        preview: 'GitHub Pages',
        img: './img/cover/cards2.jpg',
        cover:'./img/portfolio/flip.jpg',
        link: work2
    },
    {
        id: 3,
        project: 'Animation JS',
        languages: 'HTML, CSS',
        client: 'Themeforest',
        preview: 'GitHub Pages',
        img: './img/cover/moon2.jpg',
        cover:'./img/portfolio/anim.jpg',
        link: work3
    },
    {
        id: 4,
        project: 'Films',
        languages: 'HTML, CSS, Javascript',
        client: 'Envato',
        preview: 'GitHub Pages',
        img: './img/cover/cinema.jpg',
        cover:'./img/portfolio/films.jpg',
        link: work4
    },
    {
        id: 5,
        project: 'Weather Forecast',
        languages: 'HTML, CSS, Javascript',
        client: 'Themeforest',
        preview: 'GitHub Pages',
        img: './img/cover/rain.jpg',
        cover:'./img/portfolio/forecast.jpg',
        link: work5
    },
];
let arr = [];

// ADRESS(URL)
const page1 = "https://tsula21.github.io/page-1/";
const page2 = "https://tsula21.github.io/page-2/";
const page3 = "https://tsula21.github.io/page-3/";
const page4 = "https://tsula21.github.io/page-4/";


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
menuBar.addEventListener('click',openMenu);
closeMenu.addEventListener('click',menuCloes);

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
    bar.classList.add('active');
    
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
    bar.classList.remove('active');
    body.classList.remove('active');

    // arr = [];
    arr.shift();
    console.log(arr);
}

function openMenu(){
    menuBar.classList.add('active');
    closeMenu.classList.add('active');
    allSideBar.classList.add('active');
}

function menuCloes(){
    closeMenu.classList.remove('active');
    menuBar.classList.remove('active');
    allSideBar.classList.remove('active');
}