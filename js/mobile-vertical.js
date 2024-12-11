import arrayDataOfService from "./Services.js";
import localizationWrapper from "./localization-data.js";

const mvNavButton = document.getElementById("mv-nav-button");
const mvNavigationBlock = document.getElementById("mv-navigation-block");
const mvNavigationBlockItem0 = document.getElementById("mv-navigation-block-item-0");
const mvNavigationBlockItem1 = document.getElementById("mv-navigation-block-item-1");
const mvNavigationBlockItem2 = document.getElementById("mv-navigation-block-item-2");

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
    window.scrollTo({
        top: window.innerWidth * 0,
        behavior: 'smooth'
    });
})

mvNavigationBlockItem1.addEventListener('click', () => {
    mvNavigationBlock.style.left = "";
    setTimeout(() => {
        mvNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 2.2,
        behavior: 'smooth'
    });
})

mvNavigationBlockItem2.addEventListener('click', () => {
    mvNavigationBlock.style.left = "";
    setTimeout(() => {
        mvNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 6.5,
        behavior: 'smooth'
    });
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

const mvSwitchLocalization = () => {
    mvSelectLang = mvSelectLang === "eng" ? "rus" : "eng";
    for (let id in localizationWrapper) { // перебираем все айдишники
        const data = localizationWrapper[id]; // пой айди получаю информацию 

        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        element.textContent = data[mvSelectLang]; //   обновляю текст

        if (mvSelectLang === "rus") { // добавляем стили к русскому тексту 
            const allStyles = data.styles;
            element.style.fontFamily = "'Lato'";
            for (let style in allStyles) {
                const valueStyle = allStyles[style];
                element.style[style] = valueStyle; // придумать как сбрасывать стили для ангийского языка
            }
        }
    }
}

const mvCentralTextsecondBlockLeft = document.getElementById("mv-first-section-subtitle-block-left");
const mvCentralTextsecondBlockRight = document.getElementById("mv-first-section-subtitle-block-right");
const mvCentralTextsecondBlockLeftGradient = document.getElementById("mv-first-section-subtitle-second-block-left");
const mvCentralTextsecondBlockRightGradient = document.getElementById("mv-first-section-subtitle-second-block-right");


const mvRefreshDataForLocalization = () => {
    const current = arrayDataOfService[mvActivNumber];
    if (mvSelectLang === "rus") {
        mvCentralTextsecondBlockLeft.style.fontFamily = "Lato";
        mvCentralTextsecondBlockRight.style.fontFamily = "Lato";
        mvCentralTextsecondBlockLeftGradient.style.fontFamily = "Lato";
        mvCentralTextsecondBlockRightGradient.style.fontFamily = "Lato";
    } else {
        mvCentralTextsecondBlockLeft.style.fontFamily = "";
        mvCentralTextsecondBlockRight.style.fontFamily = "";
        mvCentralTextsecondBlockLeftGradient.style.fontFamily = "";
        mvCentralTextsecondBlockRightGradient.style.fontFamily = "";
    }

    for (let index = 0; index < arrayDataOfService.length; index++) {

        if (mvSelectLang === "rus") {
            mvThirdSectionTitle.textContent = current.title.rus;
            mvThirdSectionTitle.style.fontFamily = "Lato";
            mvThirdSectionText0.textContent = current.description.rus[0];
            mvThirdSectionText0.style.fontFamily = "Lato";
            mvThirdSectionText0.style.fontSize = "3.482587064676617vw";
            mvThirdSectionText0.style.lineHeight = "4.8059701492537314vw";
            mvThirdSectionText1.textContent = current.description.rus[1];
            mvThirdSectionText1.style.fontFamily = "Lato";
            mvThirdSectionText1.style.fontSize = "3.482587064676617vw";
            mvThirdSectionText1.style.lineHeight = "4.8059701492537314vw";
        } else {
            mvThirdSectionTitle.textContent = current.title.eng;
            mvThirdSectionTitle.style.fontFamily = "";
            mvThirdSectionText0.textContent = current.description.eng[0];
            mvThirdSectionText0.style.fontFamily = "";
            mvThirdSectionText0.style.fontSize = "";
            mvThirdSectionText1.style.lineHeight = "";
            mvThirdSectionText1.textContent = current.description.eng[1];
            mvThirdSectionText1.style.fontFamily = "";
            mvThirdSectionText1.style.fontSize = "";
            mvThirdSectionText1.style.lineHeight = "";
        }
    }
}

mvLang.addEventListener('click', () => {
    mvSwitchLocalization();
    mvRefreshDataForLocalization();
})



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

    window.scrollTo({
        top: window.innerWidth * 4.3,
        behavior: 'smooth'
    });

})

mvFourthSectionButton1.addEventListener('click', () => {
    mvActivNumber = 1;
    mvActivSrvice()
    window.scrollTo({
        top: window.innerWidth * 4.3,
        behavior: 'smooth'
    });
})

mvFourthSectionButton2.addEventListener('click', () => {
    mvActivNumber = 2;
    mvActivSrvice()
    window.scrollTo({
        top: window.innerWidth * 4.3,
        behavior: 'smooth'
    });
})

mvFourthSectionButton3.addEventListener('click', () => {
    mvActivNumber = 3;
    mvActivSrvice()
    window.scrollTo({
        top: window.innerWidth * 4.3,
        behavior: 'smooth'
    });
})

mvFourthSectionButton4.addEventListener('click', () => {
    mvActivNumber = 4;
    mvActivSrvice()
    window.scrollTo({
        top: window.innerWidth * 4.3,
        behavior: 'smooth'
    });
})

mvFourthSectionButton5.addEventListener('click', () => {
    mvActivNumber = 5;
    mvActivSrvice()
    window.scrollTo({
        top: window.innerWidth * 4.3,
        behavior: 'smooth'
    });
})

const mvThirdSectionLeftArrow = document.getElementById("mv-third-section-left-arrow")
const mvThirdSectionRightArrow = document.getElementById("mv-third-section-right-arrow")

mvThirdSectionRightArrow.addEventListener('click', () => {
    mvActivNumber++;
    if (mvActivNumber > arrayDataOfService.length) {
        mvActivNumber = 0;
    }
    mvActivSrvice();
})

mvThirdSectionLeftArrow.addEventListener('click', () => {
    mvActivNumber--;
    if (mvActivNumber < 0) {
        mvActivNumber = arrayDataOfService.length;
    }
    mvActivSrvice();
})

const mvSecondSectionButtonServices = document.getElementById("mv-second-section-button-services");

mvSecondSectionButtonServices.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 6.5,
        behavior: 'smooth'
    });
})

const mvPriceListButton = document.getElementById("mv-price-list-button");
const mvPriceListWrapper = document.getElementById("mv-price-list-wrapper");
const mvPriceListX = document.getElementById("mv-price-list-x-mark");

mvPriceListButton.addEventListener('click', () => {
    mvPriceListWrapper.style.display = "block";
    setTimeout(() => {
        mvPriceListWrapper.style.opacity = "1";
    }, 1);
})

mvPriceListX.addEventListener('click', () => {
    mvPriceListWrapper.style.opacity = "";
    setTimeout(() => {
        mvPriceListWrapper.style.display = "";
    }, 300);
})

let mvActivChoice = null;

const mvFifvthSectionDropListItem0 = document.getElementById("mv-fifvth-section-drop-list-item-0");
const mvFifvthSectionDropListItemText0 = document.getElementById("mv-fifvth-section-drop-list-item-text-0");
const mvFifvthSectionDropListItemCircle0 = document.getElementById("mv-fifvth-section-drop-list-activ-circle-0");

mvFifvthSectionDropListItem0.addEventListener('click', () => {
    // 1. проверяем есть ли переменная 2. Если она есть очищаем стили
    if (!mvActivChoice) {
        mvFifvthSectionDropListItemText0.style.color = "#0285CC";
        mvFifvthSectionDropListItemCircle0.style.backgroundColor = "#0285CC";
    }
})

const mvFifvthSectionDropListItem1 = document.getElementById("mv-fifvth-section-drop-list-item-1");
const mvFifvthSectionDropListItemText1 = document.getElementById("mv-fifvth-section-drop-list-item-text-1");
const mvFifvthSectionDropListItemCircle1 = document.getElementById("mv-fifvth-section-drop-list-activ-circle-1");

mvFifvthSectionDropListItem1.addEventListener('click', () => {
    mvFifvthSectionDropListItemText1.style.color = "#0285CC";
    mvFifvthSectionDropListItemCircle1.style.backgroundColor = "#0285CC";
    mvFifvthSectionDropListItemCircle0.style.backgroundColor = "";

})