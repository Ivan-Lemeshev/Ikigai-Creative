
import arrayPriceList from "./arrayPriceList.js"
import localizationWrapper from "./localization-data.js";
import themeWrapper from "./switchTheme-data.js";
import { textForApplication } from "./slogans.js";
import reviews from "./reviews.js";
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

const mhLang = document.getElementById("mh-navigation-block-language-text");

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
    } else {
        mhInputFirstName.placeholder = "First Name";
        mhInputLastName.placeholder = "Last Name";
        mhInputPhone.placeholder = "Phone";
        mhTextarea.placeholder = "In this field, you can provide any additional details or requests for your order, including your preferred method of contact.";
        mhFooterEng.style.display = "block";
        mhFooterRus.style.display = "none";
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
})


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
    mhFiveSectionTitleInterestingService.src = `/img/svg/mobile-horizontal/src/${selCat}.svg`;

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

            div.id = `mh-third-section-right-services-${buffer.length}`;
            div.classList = "mh-four-section-others-services";
            div.style.left = startDivLeft + (gapDivs + divWidth) * buffer.length + "vw";
            divImgWrapper.classList = "mh-four-section-others-services-wrapper-img";
            divImgWrapper.appendChild(divImg);
            divImg.src = `/img/svg/mobile-horizontal/src/${[mhSelectTheme]}/${service.title.eng}.svg`;

            divH3.textContent = service.title[mhSelectLang];
            divH3.id = `mh-third-section-right-services-h3-${service.title.eng}`;

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
        mhFifvthSectionMainContent.style.backgroundImage = "";
        mhSubmitButton.style.border = "none";
        mhSubmitButton.style.backgroundColor = "var(--accent)";
        mhFifvthSectionTitle.textContent = "Contact us"
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
    let editValue = inputValue.replace(/[^a-zA-Z1-9@_\.-]/g, '');
    if (editValue.length > 20) {
        editValue = editValue.slice(0, 20);
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
    } else {
        mhSendToApplication.style.display = "block";
        setTimeout(() => {
            mhSendToApplication.style.display = "none";
        }, 5000);
    }


    if (mhInputFirstName.value.length < 1) {
        mhInputFirstName.classList = "mh-fifvth-section-input-placeholder";
        mhInputFirstName.placeholder = "Empty field";
    }

    if (mhInputLastName.value.length < 1) {
        mhInputLastName.classList = "mh-fifvth-section-input-placeholder";
        mhInputLastName.placeholder = "Empty field";
    }

    if (mhInputPhone.value.length < 1) {
        mhInputPhone.classList = "mh-fifvth-section-input-placeholder";
        mhInputPhone.placeholder = "Empty field";
    }

    if (mhInputEmail.value.length < 1) {
        mhInputEmail.classList = "mh-fifvth-section-input-placeholder";
        mhInputEmail.placeholder = "Invalid email";
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
})

sixSectionBottomMoreRightButton.addEventListener('click', () => {
    upperloadReviews(++number, false)
})

const sixSectionBottomContactUs = document.getElementById("six-section-bottom-contact-us");

sixSectionBottomContactUs.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 2.25,
        behavior: 'smooth'
    });
})


const mhThemeButton = document.getElementById("mh-navigation-block-night-mode-switch-button-wrapper")


const mhSwitchTheme = () => {
    mhSelectTheme = mhSelectTheme === "light" ? "dark" : "light";
    for (let id in themeWrapper) { // перебираем все айдишники
        const data = themeWrapper[id]; // пой айди получаю информацию 
        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        const allStyles = data.styles;
        element.style.color = allStyles[mhSelectTheme].color;
        element.style.backgroundImage = allStyles[mhSelectTheme].backgroundImage;
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
    const mhFourSectionImgWrapper = document.getElementById("mh-four-section-img-wrapper");

    mhFourSectionImg.src = `/img/svg/mobile-horizontal/src/${[mhSelectTheme]}/${service.title.eng}.svg`;
    thThirdSectionLeftArrow.src = `/img/svg/mobile-horizontal/src/${[mhSelectTheme]}/mh-four-section-others-services-left-arrow.svg`;
    thThirdSectionRightArrow.src = `/img/svg/mobile-horizontal/src/${[mhSelectTheme]}/mh-four-section-others-services-right-arrow.svg`;

    if (mhSelectTheme === "dark") {
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
        mhTextarea.id = "mh-textarea-dark-theme"
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

    }
}

mhThemeButton.addEventListener('click', () => {
    mhSwitchTheme();
    mhRefreshTheme();
})