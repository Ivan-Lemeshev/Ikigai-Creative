
import arrayPriceList from "./arrayPriceList.js"
import localizationWrapper from "./localization-data.js";
import themeWrapper from "./switchTheme-data.js";
import { textForApplication } from "./slogans.js";
import reviews from "./reviews.js";
import dataContats from "./links.js";
import url from "./url.js"
import coursesData from "./courses.js"

const mhNavButton = document.getElementById("mh-first-section-navigation-button");
const mhNavigationBlock = document.getElementById("mh-navigation-block");
const mhNavigationBlockIntro = document.getElementById("mh-navigation-block-main-content-intro");
const mhNavigationBlockAboutUs = document.getElementById("mh-navigation-block-main-content-about-us");
const mhNavigationBlockServices = document.getElementById("mh-navigation-block-main-content-services");
const mhNavigationBlockContacts = document.getElementById("mh-navigation-block-main-content-contacts");
const mhNavigationBlockReviews = document.getElementById("mh-navigation-block-main-content-reviews");
let applicationShow = false;
const choiceServecesSquare = document.getElementById("mh-choice-serveces-square");
let course = false;
const mhFourSectionButtonOrderText = document.getElementById("mh-four-section-button-order-text");
const mhFourSectionImgWrapper = document.getElementById("mh-four-section-img-wrapper");
let score = 0;

const mhFourSectionButtonReviewImg = document.getElementById("mh-four-section-button-review-img");
const mhFourSectionButtonConsultationImg = document.getElementById("mh-four-section-button-consultation-img");
const mhFourSectionButtonQuestionImg = document.getElementById("mh-four-section-button-question-img");
const mhFourSectionButtonPriceListImg = document.getElementById("mh-four-section-button-price-list-img");
const mhFourSectionButtonDescription = document.getElementById("mh-four-section-button-description");
const mhFourSectionButtonSuitable = document.getElementById("mh-four-section-button-suitable");
const mhFourSectionButtonComplexity = document.getElementById("mh-four-section-button-complexity");
const mhFourSectionButtonOutline = document.getElementById("mh-four-section-button-outline");

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
        top: window.innerWidth * 1.35,
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
        top: window.innerWidth * 2.25,
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
        top: window.innerWidth * 2.7,
        behavior: 'smooth'
    });
})

const mhCentralTextUp = document.getElementById("mh-first-section-text");
const mhCentralTextDown = document.getElementById("mh-second-section-text");
let mhNumberOfActivAnimation = 0;
let mhSelectLang = "eng";
let mhSelectTheme = "light";


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
        top: window.innerWidth * 2.25,
        behavior: 'smooth'
    });
})

let mhActivNumber = 0;

const mhLang = document.getElementById("mh-navigation-block-language-button");

const mhSwitchLocalization = () => {
    mhSelectLang = mhSelectLang === "eng" ? "rus" : "eng";
    for (let id in localizationWrapper) { // перебираем все айдишники
        const data = localizationWrapper[id]; // пой айди получаю информацию 

        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        element.textContent = data[mhSelectLang]; //   обновляю текст
    }
}


const mhUpperBlock = document.getElementById("mh-six-section-top-review-wrapper");
const mhReviewsUpperName = document.getElementById("mh-six-section-top-review-name");
const mhReviewsUpperImg = document.getElementById("mh-six-section-top-review-img");
const mhReviewsUpperText0 = document.getElementById("mh-six-section-top-review-wrapper-text-0");
const mhReviewsUpperText1 = document.getElementById("mh-six-section-top-review-wrapper-text-1");

const mhLowerBlock = document.getElementById("mh-six-section-bottom-review-wrapper");
const mhReviewsLowerName = document.getElementById("mh-six-section-bottom-review-name");
const mhReviewsLowerImg = document.getElementById("mh-six-section-bottom-review-img");
const mhReviewsLowerText1 = document.getElementById("mh-six-section-bottom-review-wrapper-text-0");
const mhReviewsLowerText0 = document.getElementById("mh-six-section-bottom-review-wrapper-text-1");


const mhInputFirstName = document.getElementById("mh-five-section-input-first-name");
const mhInputLastName = document.getElementById("mh-five-section-input-last-name");
const mhInputPhone = document.getElementById("mh-five-section-input-phone");
const mhInputEmail = document.getElementById("mh-five-section-input-email");
const mhSubmitButton = document.getElementById("mh-five-section-send-button");

const mhFifvthSectionMainContent = document.getElementById("mh-five-section");
const mhFifvthSectionTitle = document.getElementById("mh-five-section-title");

const mhFourSectionTitle = document.getElementById("mh-four-section-title");
const mhFourSectionText0 = document.getElementById("mh-four-section-text-0");
const mhFourSectionText1 = document.getElementById("mh-four-section-text-1");

const mhFooterEng = document.getElementById("mh-footer-eng");
const mhFooterRus = document.getElementById("mh-footer-rus");

const mhFourSectionOthersServicesTitle = document.getElementById("mh-four-section-others-services-title");

const mhRefreshDataForLocalization = () => {
    const current = arrayPriceList[mhActivNumber];

    const currentReviewsTop = reviews[number].top;
    const currentReviewsBottom = reviews[number].bottom;

    mhReviewsUpperName.textContent = currentReviewsTop.title[mhSelectLang];
    mhReviewsLowerName.textContent = currentReviewsBottom.title[mhSelectLang];
    mhReviewsUpperText0.textContent = currentReviewsTop.upperText[mhSelectLang];
    mhReviewsUpperText1.textContent = currentReviewsTop.lowerText[mhSelectLang];
    mhReviewsLowerText1.textContent = currentReviewsBottom.upperText[mhSelectLang];
    mhReviewsLowerText0.textContent = currentReviewsBottom.lowerText[mhSelectLang];

    current.prices.map((serviceData, number) => {
        const { nameOfServise, cost } = serviceData;
        const mhPriceListServiceName = document.getElementById(`mh-price-list-service-name-${number}`);
        const mhPriceListServiceCost = document.getElementById(`mh-price-list-service-cost-${number}`);
        mhPriceListServiceCost.textContent = `£${cost}`;
        mhPriceListServiceName.textContent = nameOfServise[mhSelectLang];
    })

    if (mhSelectLang === "rus") {
        mhInputFirstName.placeholder = "Имя";
        mhInputLastName.placeholder = "Фамилия";
        mhInputPhone.placeholder = "Телефон";
        mhTextarea.placeholder = "В этом поле вы можете указать указать любые дополнительные данные или пожелания по заказу."
        mhFooterEng.style.display = "none";
        mhFooterRus.style.display = "block";
        if (!course) {
            mhFourSectionButtonOrderText.textContent = "Заказать";
            mhFourSectionOthersServicesTitle.textContent = "Другие услуги";
        } else {
            mhFourSectionButtonOrderText.textContent = "Обучаться";
            mhFourSectionOthersServicesTitle.textContent = "Другие курсы";
        }
    } else {
        mhInputFirstName.placeholder = "First Name";
        mhInputLastName.placeholder = "Last Name";
        mhInputPhone.placeholder = "Phone";
        mhTextarea.placeholder = "In this field, you can provide any additional details or requests for your order, including your preferred method of contact.";
        mhFooterEng.style.display = "block";
        mhFooterRus.style.display = "none";
        if (!course) {
            mhFourSectionButtonOrderText.textContent = "Order";
            mhFourSectionOthersServicesTitle.textContent = "Others services";
        } else {
            mhFourSectionButtonOrderText.textContent = "Study";
            mhFourSectionOthersServicesTitle.textContent = "Others courses";
        }
    }

    for (let index = 0; index < arrayPriceList.length; index++) {
        if (mhSelectLang === "rus") {
            mhFourSectionTitle.textContent = current.title.rus;
            mhFourSectionText0.textContent = current.description.rus[0];
            mhFourSectionText1.textContent = current.description.rus[1];
        } else {
            mhFourSectionTitle.textContent = current.title.eng;
            mhFourSectionText0.textContent = current.description.eng[0];
            mhFourSectionText1.textContent = current.description.eng[1];
        }

    }
}

mhLang.addEventListener('click', () => {
    mhSwitchLocalization();
    mhRefreshDataForLocalization();
    mhNavigationBlock.style.opacity = "";
    mhNavButton.style.opacity = "";
    mhNavButton.style.zIndex = "";
    setTimeout(() => {
        mhNavigationBlock.style.display = "";
    }, 500);
})


const mhFourSectionButtonOfPriceList = document.getElementById("mh-four-section-button-price-list");
const mhFourPriceListWrapper = document.getElementById("mh-price-list-wrapper");
const mhFourPriceListXMark = document.getElementById("mh-price-list-x-mark");

mhFourSectionButtonOfPriceList.addEventListener('click', () => {
    if (!course) {
        mhFourPriceListWrapper.style.display = "block";
        mhNavButton.style.opacity = "0";
        mhNavButton.style.zIndex = "1";
        setTimeout(() => {
            mhFourPriceListWrapper.style.opacity = "1";
        }, 1);
    } else {
        console.log("outline")
    }

})

mhFourPriceListXMark.addEventListener('click', () => {
    mhFourPriceListWrapper.style.opacity = "";
    mhNavButton.style.opacity = "";
    mhNavButton.style.zIndex = "";
    setTimeout(() => {
        mhFourPriceListWrapper.style.display = "";
    }, 300);
})

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
        top: window.innerWidth * 2.25,
        behavior: 'smooth'
    });

    let selCat = arrayPriceList.map((service) => service.title.eng)[mhActivNumber];
    mhFiveSectionTitleInterestingService.src = `/img/svg/mobile-horizontal/src/${[mhSelectTheme]}/${selCat}.svg`;

    if (mhSelectLang === "eng") {
        mhTextarea.textContent = textForApplication.eng[mhNumberOfService];
        if (selCat !== mhSelectCategory && arrayPriceList.map((service) => service.title.eng).includes(selCat)) {
            titleInterestingName.textContent = selCat;
            mhSelectCategory = selCat;
        }
    } else {
        mhTextarea.textContent = textForApplication.rus[mhNumberOfService];
        let selCatRus = arrayPriceList.map((service) => service.title.rus)[mhActivNumber];
        if (selCatRus !== mhSelectCategory && arrayPriceList.map((service) => service.title.rus).includes(selCatRus)) {
            titleInterestingName.textContent = selCatRus;
            mhSelectCategory = selCatRus;
        }
    }
}


buttonOrder.addEventListener('click', (event) => {
    if (!course) {
        event.preventDefault();
        mhNumberOfService = mhActivNumber;
        mhSetupAndTranslateForSelectService(event);
        mhTextarea.textContent = textForApplication.eng[0]
    } else {
        console.log("study")
    }
})

buttonReview.addEventListener('click', (event) => {
    if (!course) {
        event.preventDefault();
        mhNumberOfService = mhActivNumber;
        mhSetupAndTranslateForSelectService(event);
        mhTextarea.textContent = textForApplication[mhSelectLang][3];
    } else {
        console.log("description")
    }
})

buttonConsultation.addEventListener('click', (event) => {
    if (!course) {
        event.preventDefault();
        mhNumberOfService = mhActivNumber;
        mhSetupAndTranslateForSelectService(event);
        mhTextarea.textContent = textForApplication[mhSelectLang][1]
    } else {
        console.log("suitable")
    }
})

buttonQuestion.addEventListener('click', (event) => {
    if (!course) {
        event.preventDefault();
        mhNumberOfService = mhActivNumber;
        mhSetupAndTranslateForSelectService(event);
        mhTextarea.textContent = textForApplication[mhSelectLang][2]
    } else {
        console.log("complexity")
    }
})


let scrollLvl = 1;
const visableBlocks = 4;
const ServicesWrapper = document.getElementById("mh-four-section-others-services-wrapper");
const mhFourSectionImg = document.getElementById("mh-four-section-img");
const buffer = [];
const gapDivs = 1.7162471395881007;
const startDivLeft = -18.87871853546911;
const divWidth = 17.162471395881006;

let sortedArray = []
sortedArray = [...coursesData];

const resetBlocks = () => {
    while (buffer.length > 0) {
        ServicesWrapper.removeChild(buffer.shift().link)
    }
}

const visualVitrine = () => {
    const parser = new DOMParser();
    const divImg2 = parser.parseFromString(sortedArray[score].svgCode, "image/svg+xml").documentElement;
    divImg2.id = `mh-four-section-course-img`;
    let oldSvgElement = document.getElementById(`mh-four-section-course-img`);
    if (oldSvgElement) {
        mhFourSectionImgWrapper.removeChild(oldSvgElement);
    };
    mhFourSectionImgWrapper.appendChild(divImg2);
    mhFourSectionTitle.style.opacity = "0";
    mhFourSectionText0.style.opacity = "0";
    mhFourSectionText1.style.opacity = "0";
    mhFourSectionText2.style.opacity = "0";
    window.scrollTo({
        top: window.innerWidth * 1.35,
        behavior: 'smooth'
    });
    setTimeout(() => {
        mhFourSectionTitle.textContent = sortedArray[score].title[mhSelectLang];
        mhFourSectionText0.textContent = sortedArray[score].descriptionMobile[mhSelectLang][0];
        mhFourSectionText1.textContent = sortedArray[score].descriptionMobile[mhSelectLang][1];
        mhFourSectionText2.textContent = sortedArray[score].descriptionMobile[mhSelectLang][2];

        setTimeout(() => {
            divImg2.style.opacity = "1";
            mhFourSectionTitle.style.opacity = "1";
            mhFourSectionText0.style.opacity = "1";
            mhFourSectionText1.style.opacity = "1";
            mhFourSectionText2.style.opacity = "1";
        }, 300);
    }, 300);
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

            div.id = `mh-third-section-right-services-${buffer.length}`;
            divImgWrapper.id = `mh-third-section-right-services-img-wrapper-js-${buffer.length}`;
            divH3.id = `mh-third-section-right-services-h3-js-${buffer.length}`;
            if (mhSelectTheme === "light") {
                div.classList = "light";
            } else {
                div.classList = "dark";
            }
            div.style.left = startDivLeft + (gapDivs + divWidth) * buffer.length + "vw";
            if (mhSelectTheme === "light") {
                divImgWrapper.classList = "mh-four-section-others-services-wrapper-img-light";
            } else {
                divImgWrapper.classList = "mh-four-section-others-services-wrapper-img-dark";
            }
            divImgWrapper.appendChild(divImg);
            divImg.src = `/img/svg/mobile-horizontal/src/${[mhSelectTheme]}/${service.title.eng}.svg`;

            divH3.textContent = service.title[mhSelectLang];

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

const createCourseBlocks = () => {
    let i = scrollLvl % (sortedArray.length);

    while (buffer.length < (visableBlocks + 2)) {
        if (i !== score) {
            const div = document.createElement('div');
            const service = sortedArray[i];
            const divImgWrapper = document.createElement('div');
            const parser = new DOMParser();
            const divImg = parser.parseFromString(sortedArray[i].svgCode, "image/svg+xml").documentElement;

            divImg.id = `mh-lower-part-courses-${i}`;

            const divH3 = document.createElement('h4');

            div.id = `mh-third-section-right-services-${buffer.length}`;

            divImgWrapper.id = `mh-third-section-right-services-img-wrapper-js-${buffer.length}`;

            divH3.id = `mh-third-section-right-services-h3-js-${buffer.length}`;

            if (mhSelectTheme === "light") {
                div.classList = "light-course";

            } else {
                div.classList = "dark-course";
            }

            div.style.left = startDivLeft + (gapDivs + divWidth) * buffer.length + "vw";

            if (mhSelectTheme === "light") {
                divImgWrapper.classList = "mh-four-section-others-courses-wrapper-img-light";
            } else {
                divImgWrapper.classList = "mh-four-section-others-courses-wrapper-img-dark";
            }

            divImgWrapper.appendChild(divImg);

            divH3.textContent = service.title[mhSelectLang];

            div.appendChild(divImgWrapper);

            div.appendChild(divH3);

            ServicesWrapper.appendChild(div);


            div.addEventListener('click', () => {
                score = buffer[Math.round(Number(div.id[div.id.length - 1]))].serviceId;

                visualVitrine();
                resetBlocks();
                createCourseBlocks();
            });
            buffer.push({
                serviceId: i,
                link: document.getElementById(div.id)
            });
        };
        i = (i + 1) % (sortedArray.length);
    };
};

thThirdSectionLeftArrow.addEventListener('click', () => {
    if (!course) {
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
    } else {
        if (!thThirdSectionAnimation) {
            thThirdSectionAnimation = true;
            movePlitka(-gapDivs - divWidth)
            setTimeout(() => {
                thThirdSectionAnimation = false;
                scrollLvl = (scrollLvl + 1) % (sortedArray.length);

                if (scrollLvl === score) {
                    scrollLvl = (scrollLvl + 1) % (sortedArray.length);
                }

                resetBlocks();
                createCourseBlocks();
            }, 300);
        }
    }


})

thThirdSectionRightArrow.addEventListener('click', () => {
    if (!course) {
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
    } else {
        if (!thThirdSectionAnimation) {
            thThirdSectionAnimation = true;
            movePlitka(gapDivs + divWidth)
            setTimeout(() => {
                thThirdSectionAnimation = false;
                scrollLvl = (scrollLvl - 1);
                if (scrollLvl === 0) {
                    scrollLvl = sortedArray.length - 1;
                }
                if (scrollLvl === score) {
                    scrollLvl = (scrollLvl - 1);

                    if (scrollLvl === 0) {
                        scrollLvl = sortedArray.length - 1;
                    }
                }

                resetBlocks();
                createCourseBlocks();
            }, 300);
        }
    }

})


const capitalize = (str) => {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


const mhVoidInput = () => {
    mhSubmitButton.className = "";
}

const mhAllInputsHave = () => {
    if (mhInputFirstName.value.length && mhInputLastName.value.length && mhInputPhone.value.length && mhInputEmail.value.length && isValidEmail(mhInputEmail.value)) {
        mhSubmitButton.classList = "mh-activ-button";
        mhFifvthSectionTitle.textContent = "Contact us"
        mhSubmitButton.style.border = "none";
        mhSubmitButton.style.background = "var(--accent)";
        applicationShow = true;
        if (mhSelectTheme === "light") {
            mhFifvthSectionMainContent.style.background = "linear-gradient(180deg, rgba(252, 253, 253, 0.15) 0%, rgba(0, 136, 204, 0.15) 19.27%, rgba(252, 253, 253, 0.15) 28.53%, rgba(252, 253, 253, 0.15) 100%), linear-gradient(0deg, #FCFDFD, #FCFDFD)";
        } else {
            mhFifvthSectionMainContent.style.background = "linear-gradient(rgba(28, 28, 28, 0.1) 5.79%, rgba(0, 136, 204, 0.1) 11.18%, rgba(0, 136, 204, 0.1) 15.56%, rgba(28, 28, 28, 0.1) 31.6%, rgba(28, 28, 28, 0.1) 38.18%), linear-gradient(0deg, rgb(28, 28, 28), rgb(28, 28, 28))";

        }

        return true;
    }
    return false;
}

mhInputFirstName.addEventListener('input', () => {
    if (mhSelectLang === "rus") {
        mhInputFirstName.placeholder = "Имя";
    } else {
        mhInputFirstName.placeholder = "First Name";
    }

    const inputValue = mhInputFirstName.value;
    let editValue = inputValue.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');

    if (editValue.length > 10) {
        editValue = editValue.slice(0, 10);
    }
    if (editValue.length > 0) {
        mhAllInputsHave();
    } else {
        mhVoidInput();
    }
    mhInputFirstName.value = capitalize(editValue);
});

mhInputLastName.addEventListener('input', () => {
    if (mhSelectLang === "rus") {
        mhInputLastName.placeholder = "Фамилия";
    } else {
        mhInputLastName.placeholder = "Last Name";
    }
    const inputValue = mhInputLastName.value;
    let editValue = inputValue.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
    if (editValue.length > 10) {
        editValue = editValue.slice(0, 10);
    }
    if (editValue.length > 0) {
        mhAllInputsHave();
    } else {
        mhVoidInput();
    }
    mhInputLastName.value = capitalize(editValue);
});

mhInputPhone.addEventListener('input', () => {
    if (mhSelectLang === "rus") {
        mhInputPhone.placeholder = "Телефон";
    } else {
        mhInputPhone.placeholder = "Phone";
    }
    const inputValue = mhInputPhone.value;
    let editValue = inputValue.replace(/[^0-9+]/g, '');
    if (editValue.length > 12) {
        editValue = editValue.slice(0, 12);
    }
    if (editValue.length > 0) {
        mhAllInputsHave();
    } else {
        mhVoidInput();
    }
    mhInputPhone.value = capitalize(editValue);


});

mhInputEmail.addEventListener('input', () => {
    mhInputEmail.placeholder = "Email";
    const inputValue = mhInputEmail.value;
    let editValue = inputValue.replace(/[^a-zA-Z0-9@_\.-]/g, '');
    if (editValue.length > 30) {
        editValue = editValue.slice(0, 30);
    }
    if (editValue.length > 0) {
        mhAllInputsHave();
    } else {
        mhVoidInput();
    }
    mhInputEmail.value = editValue;
});

mhAllInputsHave();

mhSubmitButton.addEventListener('click', (event) => {
    event.preventDefault

    if (!mhAllInputsHave()) {
        mhFifvthSectionMainContent.style.backgroundImage = "linear-gradient(180deg, rgba(252, 253, 253, 0.15) 0%, rgba(255, 79, 79, 0.15) 19.27%, rgba(252, 253, 253, 0.15) 28.53%, rgba(252, 253, 253, 0.15) 100%);";
        mhSubmitButton.style.border = "0.057208237986270026vw solid var(--accent)";
        mhSubmitButton.style.backgroundColor = "rgba(0, 136, 204, 0.2)";
        mhSubmitButton.style.color = "var(--dtText)";
        mhFifvthSectionTitle.textContent = "Fill in all required fields";
    }

    if (mhInputFirstName.value.length < 1) {
        mhInputFirstName.classList = "mh-fifvth-section-input-placeholder";
        if (mhSelectLang === "eng") {
            mhInputFirstName.placeholder = "Empty field";
        } else {
            mhInputFirstName.placeholder = "Пустое поле";
        }
    }

    if (mhInputLastName.value.length < 1) {
        mhInputLastName.classList = "mh-fifvth-section-input-placeholder";
        if (mhSelectLang === "eng") {
            mhInputLastName.placeholder = "Empty field";
        } else {
            mhInputLastName.placeholder = "Пустое поле";
        }
    }

    if (mhInputPhone.value.length < 1) {
        mhInputPhone.classList = "mh-fifvth-section-input-placeholder";
        if (mhSelectLang === "eng") {
            mhInputPhone.placeholder = "Empty field";
        } else {
            mhInputPhone.placeholder = "Пустое поле";
        }
    }

    if (mhInputEmail.value.length < 1) {
        mhInputEmail.classList = "mh-fifvth-section-input-placeholder";
        if (mhSelectLang === "eng") {
            mhInputEmail.placeholder = "Invalid email";
        } else {
            mhInputEmail.placeholder = "Некорректный email";
        }

    }
})


const sixSectionBottomMoreLeftButton = document.getElementById("six-section-bottom-more-left-button");
const sixSectionBottomMoreRightButton = document.getElementById("six-section-bottom-more-right-button");

let number = 0;
let float = false;

const upperloadReviews = (numberActivReviews, direction) => {
    if (!float) {
        number = numberActivReviews >= 0 ? numberActivReviews % reviews.length : (reviews.length - 1);
        const data = reviews[number];
        float = true;
        mhUpperBlock.style.opacity = "0";
        mhLowerBlock.style.opacity = "0";
        if (direction) {
            mhUpperBlock.style.left = "-6vw";
            mhLowerBlock.style.left = "-6vw";
        } else {
            mhUpperBlock.style.left = "14.5vw";
            mhLowerBlock.style.left = "14.5vw";
        }
        setTimeout(() => {
            mhUpperBlock.style.opacity = "";
            mhLowerBlock.style.opacity = "";
            mhUpperBlock.style.left = "";
            mhLowerBlock.style.left = "";
            float = false;
        }, 500);
        setTimeout(() => {
            if (mhSelectLang === "eng") {
                mhReviewsUpperName.textContent = data.top.title[mhSelectLang];
                mhReviewsUpperText0.textContent = data.top.upperText[mhSelectLang];
                mhReviewsUpperText1.textContent = data.top.lowerText[mhSelectLang];
                mhReviewsLowerName.textContent = data.bottom.title[mhSelectLang];
                mhReviewsLowerText1.textContent = data.bottom.upperText[mhSelectLang];
                mhReviewsLowerText0.textContent = data.bottom.lowerText[mhSelectLang];
            } else {
                mhReviewsUpperName.textContent = data.top.title.rus;
                mhReviewsUpperText0.textContent = data.top.upperText.rus;
                mhReviewsUpperText1.textContent = data.top.lowerText.rus;
                mhReviewsLowerName.textContent = data.bottom.title.rus;
                mhReviewsLowerText1.textContent = data.bottom.upperText.rus;
                mhReviewsLowerText0.textContent = data.bottom.lowerText.rus;
            }
            mhReviewsUpperImg.src = `/img/png/reviews-img-${data.top.title.eng}.png`;
            mhReviewsLowerImg.src = `/img/png/reviews-img-${data.bottom.title.eng}.png`;
        }, 400);
    }
}

upperloadReviews(0);

sixSectionBottomMoreLeftButton.addEventListener('click', () => {
    upperloadReviews(--number, true)
    window.scrollTo({
        top: window.innerWidth * 2.72,
        behavior: 'smooth'
    });
})

sixSectionBottomMoreRightButton.addEventListener('click', () => {
    upperloadReviews(++number, false)
    window.scrollTo({
        top: window.innerWidth * 2.72,
        behavior: 'smooth'
    });
})

const sixSectionBottomContactUs = document.getElementById("six-section-bottom-contact-us");

sixSectionBottomContactUs.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 2.25,
        behavior: 'smooth'
    });
})


const mhThemeButton = document.getElementById("mh-navigation-block-night-mode-switch-button-wrapper");
const mhFiveSectionInterestingChangeButton = document.getElementById("mh-five-section-interesting-change-button");

mhFiveSectionInterestingChangeButton.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 1.85,
        behavior: 'smooth'
    });
})


const mhSwitchTheme = () => {
    mhSelectTheme = mhSelectTheme === "light" ? "dark" : "light";
    for (let id in themeWrapper) { // перебираем все айдишники
        const data = themeWrapper[id]; // пой айди получаю информацию 
        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        const allStyles = data.styles;
        element.style.color = allStyles[mhSelectTheme].color;
        element.style.background = allStyles[mhSelectTheme].background;
    }
}


const mhRefreshTheme = () => {

    const service = arrayPriceList[mhActivNumber]

    const nightModeMoonPath = document.getElementById("mh-navigation-block-night-mode-moon-path");
    const languageSvgPath = document.getElementById("mh-navigation-block-language-svg-path");
    const switchButtonBackRect = document.getElementById("mh-navigation-block-night-mode-switch-button-back-rect");
    const switchButtonFace = document.getElementById("mh-navigation-block-night-mode-switch-button-face");
    const switchButtonFaceRect1 = document.getElementById("mh-navigation-block-night-mode-switch-button-face-rect-1");
    const switchButtonFaceRect2 = document.getElementById("mh-navigation-block-night-mode-switch-button-face-rect-2");
    const mhSixSectionBottomImgPath = document.getElementById("mh-six-section-bottom-img-path");
    const setImg = document.querySelectorAll("#mh-four-section-others-services-wrapper img");
    const imgWrapperJs0 = document.getElementById("mh-third-section-right-services-img-wrapper-js-0");
    const imgWrapperJs1 = document.getElementById("mh-third-section-right-services-img-wrapper-js-1");
    const imgWrapperJs2 = document.getElementById("mh-third-section-right-services-img-wrapper-js-2");
    const imgWrapperJs3 = document.getElementById("mh-third-section-right-services-img-wrapper-js-3");
    const imgWrapperJs4 = document.getElementById("mh-third-section-right-services-img-wrapper-js-4");
    const imgWrapperJs5 = document.getElementById("mh-third-section-right-services-img-wrapper-js-5");
    const imgH3Wrapper0 = document.getElementById("mh-third-section-right-services-h3-js-0");
    const imgH3Wrapper1 = document.getElementById("mh-third-section-right-services-h3-js-1");
    const imgH3Wrapper2 = document.getElementById("mh-third-section-right-services-h3-js-2");
    const imgH3Wrapper3 = document.getElementById("mh-third-section-right-services-h3-js-3");
    const imgH3Wrapper4 = document.getElementById("mh-third-section-right-services-h3-js-4");
    const imgH3Wrapper5 = document.getElementById("mh-third-section-right-services-h3-js-5");

    for (let index = 0; index < setImg.length; index++) {
        if (mhSelectTheme === "dark") {
            setImg[index].src = setImg[index].src.replace("light", "dark")
        } else {
            setImg[index].src = setImg[index].src.replace("dark", "light")
        }
    }
    let selCat = arrayPriceList.map((selService) => selService.title.eng)[mhActivNumber];
    mhFiveSectionTitleInterestingService.src = `/img/svg/mobile-horizontal/src/${[mhSelectTheme]}/${selCat}.svg`;
    mhFourSectionImg.src = `/img/svg/mobile-horizontal/src/${[mhSelectTheme]}/${service.title.eng}.svg`;
    thThirdSectionLeftArrow.src = `/img/svg/mobile-horizontal/src/${[mhSelectTheme]}/mh-four-section-others-services-left-arrow.svg`;
    thThirdSectionRightArrow.src = `/img/svg/mobile-horizontal/src/${[mhSelectTheme]}/mh-four-section-others-services-right-arrow.svg`;
    mhFourPriceListXMark.src = `/img/svg/mobile-horizontal/src/${[mhSelectTheme]}/mh-price-list-x-mark.svg`;

    if (mhSelectTheme === "dark") {
        mhSubmitButton.style.border = "none"
        nightModeMoonPath.style.fill = "#F3F3F3"
        languageSvgPath.style.fill = "#F3F3F3"
        switchButtonBackRect.style.fill = "#007AB8"
        switchButtonBackRect.style.fillOpacity = "1"
        switchButtonFace.style.right = "0vw"
        switchButtonFaceRect1.style.fill = "#2E2E2E"
        switchButtonFaceRect2.style.stroke = "#007AB8"
        switchButtonFaceRect2.style.strokeOpacity = "1"
        mhFourSectionImgWrapper.style.border = "0.057208237986270026vw solid var(--outline)"
        mhInputFirstName.classList = "mh-fifvth-section-input-placeholder-dark-theme";
        mhInputLastName.classList = "mh-fifvth-section-input-placeholder-dark-theme";
        mhInputPhone.classList = "mh-fifvth-section-input-placeholder-dark-theme";
        mhInputEmail.classList = "mh-fifvth-section-input-placeholder-dark-theme";
        mhTextarea.id = "mh-textarea-dark-theme";
        mhSixSectionBottomImgPath.style.fill = "#EDEDED";
        mhFooterEng.style.backgroundColor = "var(--dtMain)";
        mhFooterRus.style.backgroundColor = "var(--dtMain)";
        imgWrapperJs1.style.border = "0.057208237986270026vw solid var(--outline)";
        imgWrapperJs2.style.border = "0.057208237986270026vw solid var(--outline)";
        imgWrapperJs3.style.border = "0.057208237986270026vw solid var(--outline)";
        imgWrapperJs4.style.border = "0.057208237986270026vw solid var(--outline)";
        imgWrapperJs0.style.border = "0.057208237986270026vw solid var(--outline)";
        imgWrapperJs1.style.border = "0.057208237986270026vw solid var(--outline)";
        imgH3Wrapper0.style.color = "var(--dtText)";
        imgH3Wrapper1.style.color = "var(--dtText)";
        imgH3Wrapper2.style.color = "var(--dtText)";
        imgH3Wrapper3.style.color = "var(--dtText)";
        imgH3Wrapper4.style.color = "var(--dtText)";
        imgH3Wrapper5.style.color = "var(--dtText)";
        choiceServecesSquare.style.border = "0.1144164vw var(--ltSeparationLine) solid"

    } else {
        nightModeMoonPath.style.fill = "#2E2E2E"
        languageSvgPath.style.fill = "#2E2E2E"
        switchButtonBackRect.style.fill = "#2E2E2E"
        switchButtonBackRect.style.fillOpacity = "0.2"
        switchButtonFace.style.right = ""
        switchButtonFaceRect1.style.fill = "#D9D9D9"
        switchButtonFaceRect2.style.stroke = "#2E2E2E"
        switchButtonFaceRect2.style.strokeOpacity = "0.2"
        mhFourSectionImgWrapper.style.border = ""
        mhInputFirstName.classList = "mh-five-section-input";
        mhInputLastName.classList = "mh-five-section-input";
        mhInputPhone.classList = "mh-five-section-input";
        mhInputEmail.classList = "mh-five-section-input";
        mhTextarea.id = "mh-textarea"
        mhSixSectionBottomImgPath.style.fill = "#2E2E2E"
        mhFooterEng.style.backgroundColor = ""
        mhFooterRus.style.backgroundColor = ""
        mhSubmitButton.style.border = "0.057208237986270026vw solid var(--dtSeparationLine)"
        imgWrapperJs1.style.border = "0.057208237986270026vw solid var(--dtSeparationLine)";
        imgWrapperJs2.style.border = "0.057208237986270026vw solid var(--dtSeparationLine)";
        imgWrapperJs3.style.border = "0.057208237986270026vw solid var(--dtSeparationLine)";
        imgWrapperJs4.style.border = "0.057208237986270026vw solid var(--dtSeparationLine)";
        imgWrapperJs0.style.border = "0.057208237986270026vw solid var(--dtSeparationLine)";
        imgWrapperJs5.style.border = "0.057208237986270026vw solid var(--dtSeparationLine)";
        imgH3Wrapper0.style.color = "var(--ltText)";
        imgH3Wrapper1.style.color = "var(--ltText)";
        imgH3Wrapper2.style.color = "var(--ltText)";
        imgH3Wrapper3.style.color = "var(--ltText)";
        imgH3Wrapper4.style.color = "var(--ltText)";
        imgH3Wrapper5.style.color = "var(--ltText)";
        choiceServecesSquare.style.border = ""
    }
}

mhThemeButton.addEventListener('click', () => {
    mhSwitchTheme();
    mhRefreshTheme();
    mhNavigationBlock.style.opacity = "";
    mhNavButton.style.opacity = "";
    mhNavButton.style.zIndex = "";
    setTimeout(() => {
        mhNavigationBlock.style.display = "";
    }, 500);
})

window.addEventListener('scroll', () => {
    if ((window.innerHeight * 1.7) > window.scrollY) {
        mhNavButton.style.opacity = "0"
    } else {
        mhNavButton.style.opacity = ""
    }

})


const sendToApplicationMainContent = document.getElementById("mh-send-to-application-main-content");
const sendToApplicationWrapper = document.getElementById("mh-send-to-application-wrapper");
const sendToApplicationMainContentTitle = document.getElementById("mh-send-to-application-main-content-title");
const sendToApplicationMainContentText = document.getElementById("mh-send-to-application-main-content-text");
const sendToApplicationMainContentImg = document.getElementById("mh-send-to-application-main-content-img");
const sendToApplicationMainContentImgSecces = document.getElementById("mh-send-to-application-main-content-img-secces");
const sendToApplicationMainContentImgWrong = document.getElementById("mh-send-to-application-main-content-img-wrong");

const choiceServecesTitleWrapper = document.getElementById("mh-choice-serveces-title-wrapper");
const choiceServecesTitleText = document.getElementById("mh-choice-serveces-title");
const choiceServecesCheckbox = document.getElementById("mh-choice-serveces-checkbox");
let checkbox = false;

choiceServecesTitleWrapper.addEventListener('click', () => {
    if (!checkbox) {
        checkbox = true;
        choiceServecesTitleText.style.color = "var(--success)";
        choiceServecesSquare.style.opacity = "0";
        setTimeout(() => {
            choiceServecesSquare.style.display = "none";
            choiceServecesCheckbox.style.display = "block";
            choiceServecesCheckbox.style.opacity = "1";
        }, 300);
    } else {
        checkbox = false;
        if (mhSelectTheme === "light") {
            choiceServecesTitleText.style.color = "var(--ltText)";
        } else {
            choiceServecesTitleText.style.color = "var(--dtText)";
        }

        choiceServecesCheckbox.style.opacity = "";
        setTimeout(() => {
            choiceServecesCheckbox.style.display = "";
            choiceServecesSquare.style.display = "";
            choiceServecesSquare.style.opacity = "";
        }, 300);
    }
})



mhSubmitButton.addEventListener('click', () => {
    const data = {
        text: `
    First Name: ${mhInputFirstName.value}, 
    Last Name: ${mhInputLastName.value}, 
    Phone: ${mhInputPhone.value}, 
    Email: ${mhInputEmail.value}, 
    Service: ${titleInterestingName.textContent},
    Text: ${mhTextarea.value}`,
        hasPrepaymant: checkbox,
        service: `${titleInterestingName.textContent}`,
        price: arrayPriceList[arrayPriceList.map((category) => category.title[mhSelectLang]).findIndex(el => el === titleInterestingName.textContent)].prices[0].cost * 100,
        email: mhInputEmail.value
    };
    if (applicationShow) {
        sendToApplicationWrapper.style.display = "block";
        setTimeout(() => {
            sendToApplicationWrapper.style.opacity = "1";
            setTimeout(() => {
                sendToApplicationMainContent.style.opacity = "0"
                setTimeout(() => {
                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json', // Указываем, что данные в формате JSON
                        },
                        body: JSON.stringify({ data: data }) // Отправляем данные в теле запроса
                    })

                        .then(response => response.json())
                        .then(data => {
                            if (data.url) {
                                window.location.href = data.url;  // Переход на страницу оплаты
                            }
                        })

                        .then(() => {
                            if (mhSelectLang === "eng") {
                                sendToApplicationMainContentTitle.textContent = "Successfully";
                                sendToApplicationMainContentText.textContent = "We have received your application, our experts will contact you with in 1-2 working days."
                            } else {
                                sendToApplicationMainContentTitle.textContent = "Успешно";
                                sendToApplicationMainContentText.textContent = "Мы получили вашу заявку, в течение 1-2 рабочих дней наши специалисты свяжутся с вами."
                            }
                            sendToApplicationMainContentImg.style.display = "none"
                            sendToApplicationMainContentImgSecces.style.display = "block"
                            sendToApplicationMainContent.style.border = "0.05208vw solid var(--success)";

                            setTimeout(() => {
                                sendToApplicationMainContent.style.opacity = "1"
                            }, 300);
                        })

                        .catch(() => {
                            if (mhSelectLang === "eng") {
                                sendToApplicationMainContentTitle.textContent = "Something went wrong";
                                sendToApplicationMainContentText.textContent = "We were unable to register your application, please contact us by phone or social media."
                            } else {
                                sendToApplicationMainContentTitle.textContent = "Что-то пошло не так";
                                sendToApplicationMainContentText.textContent = "Мы не смогли зарегистрировать вашу заявку, пожалуйста, свяжитесь с нами по телефону или через социальные сети."
                            }
                            sendToApplicationMainContentImg.style.display = "none"
                            sendToApplicationMainContentImgWrong.style.display = "block"
                            sendToApplicationMainContent.style.border = "0.05208vw solid var(--bad)";


                            setTimeout(() => {
                                sendToApplicationMainContent.style.opacity = "1"
                            }, 300);
                        })

                    setTimeout(() => {
                        sendToApplicationWrapper.style.opacity = "";
                        setTimeout(() => {
                            sendToApplicationWrapper.style.display = "";
                            if (mhSelectLang === "eng") {
                                sendToApplicationMainContentTitle.textContent = "Sending an application";
                                sendToApplicationMainContentText.textContent = "The data you specified is being transferred to the server, please wait.Usually it only takes a couple of seconds..."
                            } else {
                                sendToApplicationMainContentTitle.textContent = "Отправляем вашу заявку";
                                sendToApplicationMainContentText.textContent = "Указанные вами данные передаются на сервер, пожалуйста, подождите. Обычно это занимает всего пару секунд..."
                            }
                            sendToApplicationMainContent.style.border = "";
                            sendToApplicationMainContentImgWrong.style.display = "";
                            sendToApplicationMainContentImgSecces.style.display = "";
                            sendToApplicationMainContentImg.style.display = "";
                        }, 300);
                    }, 3000);
                }, 300);
            }, 3000);
        }, 300);
    }
})

const uploadLinks = () => {
    const alternativeContactPhone = document.getElementById("mh-five-section-contacts-phone");
    alternativeContactPhone.addEventListener('click', () => {
        window.location.href = `tel:${dataContats.Phone}`;
    })

    const alternativeContactEmail = document.getElementById("mh-five-section-contacts-email");
    alternativeContactEmail.addEventListener('click', () => {
        window.location.href = `email:${dataContats.Email}`;
    })

    const alternativeContactFacebook = document.getElementById("mh-five-section-contacts-facebook");
    alternativeContactFacebook.addEventListener('click', () => {
        window.location.href = `${dataContats.Facebook}`;
    })

    const alternativeContactTelegram = document.getElementById("mh-five-section-contacts-telegram");
    alternativeContactTelegram.addEventListener('click', () => {
        window.location.href = `${dataContats.Telegram}`;
    })

};

uploadLinks();

let coursesNotification = false;

const mhNotificationBlackBlock = document.getElementById("mh-notification-black-block");
const mhNotificationWrapper = document.getElementById("mh-notification-wrapper");
const mhFourSectionText2 = document.getElementById("mh-four-section-text-2");

window.addEventListener('scroll', () => {
    if (!coursesNotification) {
        if (window.scrollY > window.innerWidth * 1.35) {
            setTimeout(() => {
                mhNotificationBlackBlock.style.display = "block";
                mhNotificationWrapper.style.display = "block";
                setTimeout(() => {
                    mhNotificationBlackBlock.style.opacity = "1";
                    mhNotificationWrapper.style.opacity = "1";
                    window.scrollTo({
                        top: window.innerWidth * 1.35,
                        behavior: 'smooth'
                    });
                    setTimeout(() => {
                        mhNotificationBlackBlock.style.opacity = "";
                        mhNotificationWrapper.style.opacity = "";
                        setTimeout(() => {
                            mhNotificationBlackBlock.style.display = "";
                            mhNotificationWrapper.style.display = "";
                        }, 500);
                    }, 3000);
                }, 500);
            }, 500);
        };
        coursesNotification = true;
    };
});

const mhFourSectionCourseSwitchButton = document.getElementById("mh-four-section-course-switch-button");
const mhFourSectionCourseSwitchButtonServices = document.getElementById("mh-four-section-course-switch-button-services");
const mhFourSectionCourseSwitchButtonCourses = document.getElementById("mh-four-section-course-switch-button-courses");
const mhFourSectionOthersServicesTopLine = document.getElementById("mh-four-section-others-services-top-line");
const mhFourSectionOthersServicesBottomLine = document.getElementById("mh-four-section-others-services-bottom-line");
const mhFourSectionOthersServicesImgWrapper = document.getElementById("mh-four-section-others-services-img-wrapper");


mhFourSectionCourseSwitchButton.addEventListener('click', () => {
    if (!course) {
        course = true;

        mhFourSectionTitle.style.opacity = "0";
        mhFourSectionText0.style.opacity = "0";
        mhFourSectionText1.style.opacity = "0";
        mhFourSectionText2.style.display = "block";
        mhFourSectionCourseSwitchButtonServices.style.opacity = "0";
        mhFourSectionImg.style.opacity = "0";
        mhFourSectionButtonOrderText.style.opacity = "0";

        mhFourSectionButtonReviewImg.style.opacity = "0";
        mhFourSectionButtonConsultationImg.style.opacity = "0";
        mhFourSectionButtonQuestionImg.style.opacity = "0";
        mhFourSectionButtonPriceListImg.style.opacity = "0";

        mhFourSectionOthersServicesTitle.style.opacity = "0";

        setTimeout(() => {
            mhFourSectionText1.style.marginTop = "1.1441647597254003vw";
            mhFourSectionText0.textContent = sortedArray[score].descriptionMobile[mhSelectLang][0];
            mhFourSectionText1.textContent = sortedArray[score].descriptionMobile[mhSelectLang][1];
            mhFourSectionText2.textContent = sortedArray[score].descriptionMobile[mhSelectLang][2];
            mhFourSectionTitle.textContent = sortedArray[score].title[mhSelectLang];
            mhFourSectionCourseSwitchButtonServices.style.display = "none";
            mhFourSectionCourseSwitchButtonCourses.style.display = "block";
            mhFourSectionImg.style.display = "none";

            mhFourSectionOthersServicesTopLine.style.display = "block";
            mhFourSectionOthersServicesBottomLine.style.display = "block";
            mhFourSectionOthersServicesImgWrapper.style.display = "flex";

            mhFourSectionButtonReviewImg.style.display = "none";
            mhFourSectionButtonConsultationImg.style.display = "none";
            mhFourSectionButtonQuestionImg.style.display = "none";
            mhFourSectionButtonPriceListImg.style.display = "none";

            mhFourSectionButtonDescription.style.display = "block";
            mhFourSectionButtonSuitable.style.display = "block";
            mhFourSectionButtonComplexity.style.display = "block";
            mhFourSectionButtonOutline.style.display = "block";

            mhFourSectionOthersServicesTitle.style.left = "11.441647597254006vw";


            if (mhSelectLang === "eng") {
                mhFourSectionButtonOrderText.textContent = "Study";
                mhFourSectionOthersServicesTitle.textContent = "Others courses";
            } else {
                mhFourSectionButtonOrderText.textContent = "Обучаться";
                mhFourSectionOthersServicesTitle.textContent = "Другие курсы";
            }

            setTimeout(() => {
                mhFourSectionTitle.style.opacity = "";
                mhFourSectionText0.style.opacity = "";
                mhFourSectionText1.style.opacity = "";
                mhFourSectionText2.style.opacity = "1";
                mhFourSectionCourseSwitchButtonCourses.style.opacity = "1";
                mhFourSectionButtonOrderText.style.opacity = "";

                mhFourSectionButtonDescription.style.opacity = "0.8";
                mhFourSectionButtonSuitable.style.opacity = "1";
                mhFourSectionButtonComplexity.style.opacity = "1";
                mhFourSectionButtonOutline.style.opacity = "1";

                buttonReview.style.opacity = "0.4";
                buttonReview.style.pointerEvents = "none";

                mhFourSectionOthersServicesTitle.style.opacity = "";

                mhFourSectionOthersServicesTopLine.style.opacity = "1";
                mhFourSectionOthersServicesBottomLine.style.opacity = "1";
                mhFourSectionOthersServicesImgWrapper.style.opacity = "1";

                resetBlocks();
                createCourseBlocks();
                visualVitrine();
            }, 300);
        }, 300);
    };
});