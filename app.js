//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 10000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}



// jogos 

// Jogos
const game = [
    {
        title: 'Minecraft Voyage Aquatic',
        image: 'image/mine-voyage.png',
        description: 'Construa e explore com Minecraft! Use sua criatividade e habilidades de resolução de problemas para explorar e construir mundos subaquáticos com código.',
        link: 'https://studio.code.org/s/aquatic/lessons/1/levels/1'
    },
    {
        title: 'Jogo 2',
        image: 'image/jogo2.png',
        description: 'Descrição do jogo 2',
        link: 'https://link-do-jogo2.com'
    },
    {
        title: 'Jogo 3',
        image: 'image/jogo3.png',
        description: 'Descrição do jogo 3',
        link: 'https://link-do-jogo3.com'
    },
    // ...
];

const gameList = document.querySelector('.game-list');

games.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';

    const gameTitle = document.createElement('h1');
    gameTitle.textContent = game.title;

    const gameImage = document.createElement('img');
    gameImage.src = game.image;
    gameImage.alt = game.title;

    const gameDescription = document.createElement('p');
    gameDescription.textContent = game.description;

    const gameLink = document.createElement('a');
    gameLink.href = game.link;
    const gameLinkText = document.createElement('span');
    gameLinkText.textContent = 'Comecar';
    gameLink.appendChild(gameLinkText);

    gameCard.appendChild(gameTitle);
    gameCard.appendChild(gameImage);
    gameCard.appendChild(gameDescription);
    gameCard.appendChild(gameLink);

    gameList.appendChild(gameCard);
});