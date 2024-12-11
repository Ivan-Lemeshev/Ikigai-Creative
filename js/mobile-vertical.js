import arrayDataOfService from "./Services.js";

const mvNavButton = document.getElementById("mv-nav-button");
const mvNavigationBlock = document.getElementById("mv-navigation-block");
const mvNavigationBlockItem0 = document.getElementById("mv-navigation-block-item-0");

mvNavButton.addEventListener('click', () => {
    mvNavigationBlock.style.display = "block";
    setTimeout(() => {
        mvNavigationBlock.style.left = "0";
    }, 1);
})

mvNavigationBlockItem0.addEventListener('click', () => {
    mvNavigationBlock.style.left = "";
    setTimeout(() => {
        mvNavigationBlock.style.display = "";
    }, 500);
})

const mvArrayFirstSectionSubTitlesLeft = [
    {
        eng: "Digital Agency",
        rus: "Цифровое Агенство"
    },

    {
        eng: "From Ideas",
        rus: "Из идей"
    },

    {
        eng: "Your Vision",
        rus: "Ваше видение"
    },

    {
        eng: "Crafting Digital",
        rus: "Создаём"
    },

    {
        eng: "Innovate & Engage",
        rus: "Прорывы & Участия"
    }
]

const mvArrayFirstSectionSubTitlesRight = [
    {
        eng: "London",
        rus: "Лондон"
    },

    {
        eng: "to Digital Reality",
        rus: "В  реальность"
    },

    {
        eng: "Our Innovation ",
        rus: "Наша инновация"
    },

    {
        eng: " Excellence ",
        rus: "Совершенство"
    },

    {
        eng: " Succeed ",
        rus: "Успех"
    }

]

let mvNumberOfActivSlogan = 0;
let mvNumberOfNextSlogan = 1;

const nextSlogan = () => {
    mvNumberOfActivSlogan = mvNumberOfNextSlogan;
    mvNumberOfNextSlogan++
    if (mvNumberOfNextSlogan === mvArrayFirstSectionSubTitlesLeft.length) {
        mvNumberOfNextSlogan = 0;
    }
}


let mvSelectLang = "eng";
const mvLang = document.getElementById("mv-navigation-block-lang-button");
const mvCentralTextsecondBlockLeft = document.getElementById("mv-first-section-subtitle-block-left");
const mvCentralTextsecondBlockRight = document.getElementById("mv-first-section-subtitle-block-right");
const mvCentralTextsecondBlockLeftGradient = document.getElementById("mv-first-section-subtitle-second-block-left");
const mvCentralTextsecondBlockRightGradient = document.getElementById("mv-first-section-subtitle-second-block-right");

const mvChangeIdeasText = () => {
    mvCentralTextsecondBlockLeft.textContent = mvArrayFirstSectionSubTitlesLeft[mvNumberOfActivSlogan][mvSelectLang];
    mvCentralTextsecondBlockRight.textContent = mvArrayFirstSectionSubTitlesRight[mvNumberOfActivSlogan][mvSelectLang];
    mvCentralTextsecondBlockLeftGradient.textContent = mvArrayFirstSectionSubTitlesLeft[mvNumberOfNextSlogan][mvSelectLang];
    mvCentralTextsecondBlockRightGradient.textContent = mvArrayFirstSectionSubTitlesRight[mvNumberOfNextSlogan][mvSelectLang];
    setInterval(() => {
        mvCentralTextsecondBlockLeftGradient.style.opacity = "0"
        mvCentralTextsecondBlockRightGradient.style.opacity = "0"
        mvCentralTextsecondBlockLeftGradient.textContent = mvArrayFirstSectionSubTitlesLeft[mvNumberOfNextSlogan][mvSelectLang];
        mvCentralTextsecondBlockRightGradient.textContent = mvArrayFirstSectionSubTitlesRight[mvNumberOfNextSlogan][mvSelectLang];
        setTimeout(() => { //текст опускается прозрачность уменьшается
            mvCentralTextsecondBlockLeft.style.top = "116.16915422885572vw";
            mvCentralTextsecondBlockLeft.style.opacity = "0.6";
            mvCentralTextsecondBlockRight.style.top = "116.16915422885572vw";
            mvCentralTextsecondBlockRight.style.opacity = "0.6";
        }, 200);

        setTimeout(() => {//текст опускается прозрачность уменьшается
            mvCentralTextsecondBlockLeft.style.top = "117.41293532338308vw";
            mvCentralTextsecondBlockLeft.style.opacity = "0.4";
            mvCentralTextsecondBlockRight.style.top = "117.41293532338308vw";
            mvCentralTextsecondBlockRight.style.opacity = "0.4";

        }, 400);

        setTimeout(() => {//текст опускается прозрачность уменьшается
            mvCentralTextsecondBlockLeft.style.top = "118.65671641791045vw";
            mvCentralTextsecondBlockLeft.style.opacity = "0.2";
            mvCentralTextsecondBlockRight.style.top = "118.65671641791045vw";
            mvCentralTextsecondBlockRight.style.opacity = "0.2";

        }, 600);

        setTimeout(() => {//текст опускается прозрачность уменьшается
            mvCentralTextsecondBlockLeft.style.top = "119.90049751243781vw";
            mvCentralTextsecondBlockLeft.style.opacity = "0.05";
            mvCentralTextsecondBlockRight.style.top = "119.90049751243781vw";
            mvCentralTextsecondBlockRight.style.opacity = "0.05";

        }, 800);

        setTimeout(() => {//текст становится полностью прозрачным
            mvCentralTextsecondBlockLeft.style.opacity = "0";
            mvCentralTextsecondBlockRight.style.opacity = "0";

        }, 1000);

        setTimeout(() => { // обновляется текст, повяляется градиент, поднимаем текст на изначальную позицию
            mvCentralTextsecondBlockLeft.textContent = mvArrayFirstSectionSubTitlesLeft[mvNumberOfNextSlogan][mvSelectLang];
            mvCentralTextsecondBlockRight.textContent = mvArrayFirstSectionSubTitlesRight[mvNumberOfNextSlogan][mvSelectLang];
            mvCentralTextsecondBlockLeftGradient.style.opacity = "0.4"
            mvCentralTextsecondBlockLeft.style.top = "";
            mvCentralTextsecondBlockRight.style.top = "";

        }, 1200);

        setTimeout(() => {// меняем прозрачность градиентов
            mvCentralTextsecondBlockLeftGradient.style.opacity = "0.8"
            mvCentralTextsecondBlockRightGradient.style.opacity = "0.1"

        }, 1400);

        setTimeout(() => {// меняем прозрачность градиентов и появляется текст
            mvCentralTextsecondBlockLeftGradient.style.opacity = "1"
            mvCentralTextsecondBlockRightGradient.style.opacity = "0.3"
            mvCentralTextsecondBlockLeft.style.opacity = "0.2"

        }, 1600);

        setTimeout(() => {// меняем прозрачность градиентов и появляется левый текст
            mvCentralTextsecondBlockRightGradient.style.opacity = "1"
            mvCentralTextsecondBlockRight.style.opacity = "0.2"
            mvCentralTextsecondBlockLeft.style.opacity = "1"

        }, 1800);

        setTimeout(() => {  //убираем градиент и появляется правый текст
            mvCentralTextsecondBlockLeftGradient.style.opacity = "0"
            mvCentralTextsecondBlockRightGradient.style.opacity = "0"
            mvCentralTextsecondBlockRight.style.opacity = "1"

        }, 2000);

        setTimeout(() => {//делаем ниже прозрачность текста и обновляем слоганы 
            mvCentralTextsecondBlockLeft.style.opacity = "0.8";
            mvCentralTextsecondBlockRight.style.opacity = "0.8";
            nextSlogan();

        }, 2200);

    }, 5000);


};

mvChangeIdeasText();


let mvActivNumber = 0;

const mvThirdSectionTitle = document.getElementById("mv-third-section-title");
const mvThirdSectionImg = document.getElementById("mv-third-section-img");
const mvThirdSectionText0 = document.getElementById("mv-third-section-text-0");
const mvThirdSectionText1 = document.getElementById("mv-third-section-text-1");

const mvFourthSectionButton0 = document.getElementById("mv-fourth-section-button-0");
const mvFourthSectionButton1 = document.getElementById("mv-fourth-section-button-1");
const mvFourthSectionButton2 = document.getElementById("mv-fourth-section-button-2");
const mvFourthSectionButton3 = document.getElementById("mv-fourth-section-button-3");
const mvFourthSectionButton4 = document.getElementById("mv-fourth-section-button-4");
const mvFourthSectionButton5 = document.getElementById("mv-fourth-section-button-5");

const mvActivSrvice = () => {
    const currentService = arrayDataOfService[mvActivNumber];
    mvThirdSectionTitle.textContent = currentService.title[mvSelectLang];
    mvThirdSectionImg.src = `/img/svg/mobile-vertical/mv-third-section-img ${currentService.title.eng}.svg`;
    mvThirdSectionText0.textContent = currentService.description[mvSelectLang][0];
    mvThirdSectionText1.textContent = currentService.description[mvSelectLang][1];
}

mvActivSrvice()

mvFourthSectionButton0.addEventListener('click', () => {
    mvActivNumber = 0;
    mvActivSrvice()
})

mvFourthSectionButton1.addEventListener('click', () => {
    mvActivNumber = 1;
    mvActivSrvice()
})

mvFourthSectionButton2.addEventListener('click', () => {
    mvActivNumber = 2;
    mvActivSrvice()
})

mvFourthSectionButton3.addEventListener('click', () => {
    mvActivNumber = 3;
    mvActivSrvice()
})

mvFourthSectionButton4.addEventListener('click', () => {
    mvActivNumber = 4;
    mvActivSrvice()
})

mvFourthSectionButton5.addEventListener('click', () => {
    mvActivNumber = 5;
    mvActivSrvice()
})

const mvThirdSectionLeftArrow = document.getElementById("mv-third-section-left-arrow")
const mvThirdSectionRightArrow = document.getElementById("mv-third-section-right-arrow")

mvThirdSectionRightArrow.addEventListener('click', () => {
    mvActivNumber++;
    if(mvActivNumber > arrayDataOfService.length) {
        mvActivNumber = 0;
    }
    mvActivSrvice();
})

mvThirdSectionLeftArrow.addEventListener('click', () => {
    mvActivNumber--;
    if(mvActivNumber < 0) {
        mvActivNumber = arrayDataOfService.length;
    }
    mvActivSrvice();
})