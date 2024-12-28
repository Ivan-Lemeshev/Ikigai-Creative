
import arrayPriceList from "./arrayPriceList.js"
import localizationWrapper from "./localization-data.js";
import { textForApplication } from "./slogans.js";
import reviews from "./reviews-mobile.js";
import dataContats from "./links.js";

const mhNavButton = document.getElementById("mh-first-section-navigation-button");
const mhNavigationBlock = document.getElementById("mh-navigation-block");
const mhNavigationBlockIntro = document.getElementById("mh-navigation-block-main-content-intro");
const mhNavigationBlockAboutUs = document.getElementById("mh-navigation-block-main-content-about-us");
const mhNavigationBlockServices = document.getElementById("mh-navigation-block-main-content-services");
const mhNavigationBlockContacts = document.getElementById("mh-navigation-block-main-content-contacts");
const mhNavigationBlockReviews = document.getElementById("mh-navigation-block-main-content-reviews");

mhNavButton.addEventListener('click', () => {
    mhNavigationBlock.style.display = "block";
    setTimeout(() => {
        mhNavigationBlock.style.opacity = "1";
    }, 2);
    mhNavButton.style.opacity = "0";
    mhNavButton.style.zIndex = "1";
})

mhNavigationBlockIntro.addEventListener('click', () => {
    mhNavigationBlock.style.opacity = "";
    mhNavButton.style.opacity = "";
    mhNavButton.style.zIndex = "";
    setTimeout(() => {
        mhNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 0,
        behavior: 'smooth'
    });
})

mhNavigationBlockAboutUs.addEventListener('click', () => {
    mhNavButton.style.opacity = "";
    mhNavButton.style.zIndex = "";
    mhNavigationBlock.style.opacity = "";
    setTimeout(() => {
        mhNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 0.9,
        behavior: 'smooth'
    });
})

mhNavigationBlockServices.addEventListener('click', () => {
    mhNavButton.style.zIndex = "";
    mhNavButton.style.opacity = "";
    mhNavigationBlock.style.opacity = "";
    setTimeout(() => {
        mhNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 1.4,
        behavior: 'smooth'
    });
})

mhNavigationBlockContacts.addEventListener('click', () => {
    mhNavButton.style.zIndex = "";
    mhNavButton.style.opacity = "";
    mhNavigationBlock.style.opacity = "";
    setTimeout(() => {
        mhNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 2.3,
        behavior: 'smooth'
    });
})

mhNavigationBlockReviews.addEventListener('click', () => {
    mhNavButton.style.zIndex = "";
    mhNavButton.style.opacity = "";
    mhNavigationBlock.style.opacity = "";
    setTimeout(() => {
        mhNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 3,
        behavior: 'smooth'
    });
})

const mhCentralTextUp = document.getElementById("mh-first-section-text");
const mhCentralTextDown = document.getElementById("mh-second-section-text");
let mhNumberOfActivAnimation = 0;
let mhSelectLang = "eng";


const mhArrayFirstSectionSubTitlesLeft = [
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

const mhArrayFirstSectionSubTitlesRight = [
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
        eng: "Succeed ",
        rus: "Успех"
    }
]

const mhChangeIdeasText = () => {
    mhCentralTextUp.style.opacity = "0";
    mhCentralTextDown.style.opacity = "0";
    setTimeout(() => {
        mhNumberOfActivAnimation = (mhNumberOfActivAnimation + 1) % mhArrayFirstSectionSubTitlesRight.length;
        mhCentralTextUp.textContent = mhArrayFirstSectionSubTitlesLeft[mhNumberOfActivAnimation][mhSelectLang];
        mhCentralTextDown.textContent = mhArrayFirstSectionSubTitlesRight[mhNumberOfActivAnimation][mhSelectLang];
        mhCentralTextUp.style.opacity = "1";
        mhCentralTextDown.style.opacity = "1";
    }, 300);
};

setInterval(mhChangeIdeasText, 4000);


const mhThirdSectionButtonServices = document.getElementById("mh-third-section-button-services");
const mhThirdSectionButtonContacts = document.getElementById("mh-third-section-button-contacts");

mhThirdSectionButtonServices.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 1.4,
        behavior: 'smooth'
    });
})

mhThirdSectionButtonContacts.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 2.3,
        behavior: 'smooth'
    });
})

let mhActivNumber = 0;



const mhLang = document.getElementById("mv-navigation-block-lang-button");

const mhSwitchLocalization = () => {
    mhSelectLang = mhSelectLang === "eng" ? "rus" : "eng";
    for (let id in localizationWrapper) { // перебираем все айдишники
        const data = localizationWrapper[id]; // пой айди получаю информацию 

        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        element.textContent = data[mhSelectLang]; //   обновляю текст

        if (mhSelectLang === "rus") { // добавляем стили к русскому тексту 
            const allStyles = data.styles;
            for (let style in allStyles) {
                const valueStyle = allStyles[style];
                element.style[style] = valueStyle; // придумать как сбрасывать стили для ангийского языка
            }
        }
    }
}

const mhFourSectionButtonOfPriceList = document.getElementById("mh-four-section-button-price-list");
const mhFourPriceListWrapper = document.getElementById("mh-price-list-wrapper");
const mhFourPriceListXMark = document.getElementById("mh-price-list-x-mark");

mhFourSectionButtonOfPriceList.addEventListener('click', () => {
    mhFourPriceListWrapper.style.display = "block";
    mhNavButton.style.opacity = "0";
    mhNavButton.style.zIndex = "1";
    setTimeout(() => {
        mhFourPriceListWrapper.style.opacity = "1";
    }, 1);
})

mhFourPriceListXMark.addEventListener('click', () => {
    mhFourPriceListWrapper.style.opacity = "";
    mhNavButton.style.opacity = "";
    mhNavButton.style.zIndex = "";
    setTimeout(() => {
        mhFourPriceListWrapper.style.display = "";
    }, 300);
})

const mhFourSectionTitle = document.getElementById("mh-four-section-title");
const mhFourSectionText0 = document.getElementById("mh-four-section-text-0");
const mhFourSectionText1 = document.getElementById("mh-four-section-text-1");

const thActivService = () => {
    const currentService = arrayPriceList[mhActivNumber];
    let currentTitle = currentService.title[mhSelectLang];

    if (currentTitle === "Продвижение в соц. сетях") {
        currentTitle = "Продвижение в социальных сетях"
    }

    mhFourSectionTitle.textContent = currentTitle;

    mhFourSectionText0.textContent = currentService.description[mhSelectLang][0];
    mhFourSectionText1.textContent = currentService.description[mhSelectLang][1];

    currentService.prices.map((serviceData, number) => {
        const { nameOfServise, cost } = serviceData;
        const thPriceListServiceName = document.getElementById(`mh-price-list-service-name-${number}`);
        const thPriceListServiceCost = document.getElementById(`mh-price-list-service-cost-${number}`);
        thPriceListServiceCost.textContent = `£${cost}`;
        thPriceListServiceName.textContent = nameOfServise[mhSelectLang];

    })
}

thActivService();

let mhNumberOfService = 0;
let mhSelectCategory = "";
const titleInterestingName = document.getElementById("mh-five-section-title-interesting-name");
const mhTextarea = document.getElementById("mh-textarea");
const buttonOrder = document.getElementById("mh-four-section-button-order");
const buttonReview = document.getElementById("mh-four-section-button-review");
const buttonConsultation = document.getElementById("mh-four-section-button-consultation");
const buttonQuestion = document.getElementById("mh-four-section-button-question");
const mhFiveSectionTitleInterestingService = document.getElementById("mh-five-section-title-interesting-service-img");

const mhSetupAndTranslateForSelectService = (event) => {
    event.preventDefault();
    window.scrollTo({
        top: window.innerWidth * 2.3,
        behavior: 'smooth'
    });
    
    let selCat = arrayPriceList.map((service) => service.title.eng)[mhActivNumber];
    mhFiveSectionTitleInterestingService.src = `/img/svg/mobile-horizontal/interesting-svg ${selCat}.svg`;

    if (mhSelectLang === "eng") {
        mhTextarea.textContent = textForApplication.eng[mhNumberOfService];
        if (selCat !== mhSelectCategory && arrayPriceList.map((service) => service.title.eng).includes(selCat)) {
            titleInterestingName.textContent = selCat;
            mhSelectCategory = selCat;
            // allInputsHave();
        }
    } else {
        mhTextarea.textContent = textForApplication.rus[mhNumberOfService];
        let selCatRus = arrayPriceList.map((service) => service.title.rus)[mhActivNumber];
        if (selCatRus !== mhSelectCategory && arrayPriceList.map((service) => service.title.rus).includes(selCatRus)) {
            titleInterestingName.textContent = selCatRus;
            mhSelectCategory = selCatRus;
            // allInputsHave();
        }
    }
}


buttonOrder.addEventListener('click', (event) => {
    event.preventDefault();
    mhNumberOfService = mhActivNumber;
    mhSetupAndTranslateForSelectService(event);
    mhTextarea.textContent = textForApplication.eng[0]
})

buttonReview.addEventListener('click', (event) => {
    event.preventDefault();
    mhNumberOfService = mhActivNumber;
    mhSetupAndTranslateForSelectService(event);
    mhTextarea.textContent = textForApplication[mhSelectLang][3];
})

buttonConsultation.addEventListener('click', (event) => {
    event.preventDefault();
    mhNumberOfService = mhActivNumber;
    mhSetupAndTranslateForSelectService(event);
    mhTextarea.textContent = textForApplication[mhSelectLang][1]
})

buttonQuestion.addEventListener('click', (event) => {
    event.preventDefault();
    mhNumberOfService = mhActivNumber;
    mhSetupAndTranslateForSelectService(event);
    mhTextarea.textContent = textForApplication[mhSelectLang][2]
})


let scrollLvl = 1;
const visableBlocks = 4;
const ServicesWrapper = document.getElementById("mh-four-section-others-services-wrapper");
const mhFourSectionImg = document.getElementById("mh-four-section-img");
const buffer = [];
const gapDivs = 1.7162471395881007;
const startDivLeft = -18.87871853546911;
const divWidth = 17.162471395881006;

const resetBlocks = () => {
    while (buffer.length > 0) {
        ServicesWrapper.removeChild(buffer.shift().link)
    }
}

const createDivBlocks = () => {

    let i = scrollLvl % (arrayPriceList.length);

    while (buffer.length < (visableBlocks + 2)) {
        if (i !== mhActivNumber) {
            const div = document.createElement('div');

            const service = arrayPriceList[i];
            const divImgWrapper = document.createElement('div');
            const divImg = document.createElement('img');
            const divH3 = document.createElement('h4');

            div.id = `th-third-section-right-services-${buffer.length}`;
            div.classList = "mh-four-section-others-services";
            div.style.left = startDivLeft + (gapDivs + divWidth) * buffer.length + "vw";
            divImgWrapper.classList = "mh-four-section-others-services-wrapper-img";
            divImgWrapper.appendChild(divImg);
            divImg.src = `/img/svg/mobile-horizontal/src/${service.title.eng}.svg`;
            divH3.textContent = service.title[mhSelectLang]
            div.appendChild(divImgWrapper);
            div.appendChild(divH3);
            ServicesWrapper.appendChild(div);

            div.addEventListener('click', () => {
                mhActivNumber = buffer[Math.round(Number(div.id[div.id.length - 1]))].serviceId;
                mhFourSectionImg.src = divImg.src;
                thActivService();
                resetBlocks();
                createDivBlocks();

            })

            buffer.push({
                serviceId: i,
                link: document.getElementById(div.id)
            })
        }

        i = (i + 1) % (arrayPriceList.length);
    }
}

createDivBlocks();

const movePlitka = (deltaGap) => {
    for (let index = 0; index < buffer.length; index++) {
        const newLeft = startDivLeft + (gapDivs + divWidth) * index + deltaGap + "vw";
        buffer[index].link.style.left = newLeft;
    }
}

const thThirdSectionLeftArrow = document.getElementById("mh-four-section-others-services-left-arrow");
const thThirdSectionRightArrow = document.getElementById("mh-four-section-others-services-right-arrow");
let thThirdSectionAnimation = false;

thThirdSectionLeftArrow.addEventListener('click', () => {
    if (!thThirdSectionAnimation) {
        thThirdSectionAnimation = true;
        movePlitka(-gapDivs - divWidth)
        setTimeout(() => {
            thThirdSectionAnimation = false;
            scrollLvl = (scrollLvl + 1) % (arrayPriceList.length);

            if (scrollLvl === mhActivNumber) {
                scrollLvl = (scrollLvl + 1) % (arrayPriceList.length);
            }

            resetBlocks();
            createDivBlocks();
        }, 300);
    }

})

thThirdSectionRightArrow.addEventListener('click', () => {
    if (!thThirdSectionAnimation) {
        thThirdSectionAnimation = true;
        movePlitka(gapDivs + divWidth)
        setTimeout(() => {
            thThirdSectionAnimation = false;
            scrollLvl = (scrollLvl - 1);
            if (scrollLvl === 0) {
                scrollLvl = arrayPriceList.length - 1;
            }
            if (scrollLvl === mhActivNumber) {
                scrollLvl = (scrollLvl - 1);

                if (scrollLvl === 0) {
                    scrollLvl = arrayPriceList.length - 1;
                }
            }

            resetBlocks();
            createDivBlocks();
        }, 300);
    }


})

