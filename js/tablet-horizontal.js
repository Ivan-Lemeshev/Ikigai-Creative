import localizationWrapper from "./localization-data.js";
import arrayPriceList from "./arrayPriceList.js";
import { ideasArrayUp, ideasArrayDown, textForApplication } from "./slogans.js";
import reviews from "./reviews.js";
import dataContats from "./links.js";


const thNavButton = document.getElementById("th-nav-button");
const thNavigationBlock = document.getElementById("th-navigation-block");
const thNavigationBlockItem0 = document.getElementById("th-navigation-block-item-0");
const thNavigationBlockItem1 = document.getElementById("th-navigation-block-item-1");
const thNavigationBlockItem2 = document.getElementById("th-navigation-block-item-2");
const thNavigationBlockItem3 = document.getElementById("th-navigation-block-item-3");
const thNavigationBlockItem4 = document.getElementById("th-navigation-block-item-4");

thNavButton.addEventListener('click', () => {
    thNavigationBlock.style.display = "block";
    setTimeout(() => {
        thNavigationBlock.style.right = "0";
    }, 1);
})

thNavigationBlockItem0.addEventListener('click', () => {
    thNavigationBlock.style.right = "";
    setTimeout(() => {
        thNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 0,
        behavior: 'smooth'
    });
})

thNavigationBlockItem1.addEventListener('click', () => {
    thNavigationBlock.style.right = "";
    setTimeout(() => {
        thNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 0.85,
        behavior: 'smooth'
    });
})

thNavigationBlockItem2.addEventListener('click', () => {
    thNavigationBlock.style.right = "";
    setTimeout(() => {
        thNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 1.7,
        behavior: 'smooth'
    });
})

thNavigationBlockItem3.addEventListener('click', () => {
    thNavigationBlock.style.right = "";
    setTimeout(() => {
        thNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 2.5,
        behavior: 'smooth'
    });
})

thNavigationBlockItem4.addEventListener('click', () => {
    thNavigationBlock.style.right = "";
    setTimeout(() => {
        thNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 3.3,
        behavior: 'smooth'
    });
})

const thCentralImg = document.getElementById("th-first-section-img-circle");
const thCentralText = document.getElementById("th-central-text-first-section");
const thCentralTextUp = document.getElementById("th-central-text-first-section-up");
const thCentralTextDown = document.getElementById("th-central-text-first-section-down");
const thSecondSectionButtonServices = document.getElementById("th-second-section-button-services");
const thSecondSectionButtonContacts = document.getElementById("th-second-section-button-contacts");
const thThirdSectionButtonOPriceList = document.getElementById("th-third-section-button-price-list");
const thPriceListWrapper = document.getElementById("th-price-list-wrapper");
const thPriceListXMark = document.getElementById("th-price-list-x-mark");

let thAngel = 0;
let thNumberOfActivAnimation = 0;
let thActivNumber = 0;

const thThirdSectionTitle = document.getElementById("th-third-section-title-of-service");
const thThirdSectionImg = document.getElementById("th-third-section-main-img");
const thThirdSectionText0 = document.getElementById("th-third-section-text-about-service-0");
const thThirdSectionText1 = document.getElementById("th-third-section-text-about-service-1");


const thUpperBlock = document.getElementById("th-upper-block-with-reviews");
const thReviewsUpperName = document.getElementById("th-reviews-upper-name");
const thReviewsUpperImg = document.getElementById("th-reviews-upper-img");
const thReviewsUpperUpperText = document.getElementById("th-reviews-upper-upper-text");
const thReviewsUpperLowerText = document.getElementById("th-reviews-upper-lower-text");

const thLowerBlock = document.getElementById("th-lower-block-with-reviews");
const thReviewsLowerName = document.getElementById("th-reviews-lower-name");
const thReviewsLowerImg = document.getElementById("th-reviews-lower-img");
const thReviewsLowerUpperText = document.getElementById("th-reviews-lower-upper-text");
const thReviewsLowerLowerText = document.getElementById("th-reviews-lower-lower-text");



let thSelectLang = "eng";
const thLang = document.getElementById("th-navigation-block-lang-button");
const thSwitchLocalization = () => {
    thSelectLang = thSelectLang === "eng" ? "rus" : "eng";
    for (let id in localizationWrapper) { // перебираем все айдишники
        const data = localizationWrapper[id]; // пой айди получаю информацию 

        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        element.textContent = data[thSelectLang]; //   обновляю текст

        if (thSelectLang === "rus") { // добавляем стили к русскому тексту 
            const allStyles = data.styles;
            element.style.fontFamily = "'Lato'";
            for (let style in allStyles) {
                const valueStyle = allStyles[style];
                element.style[style] = valueStyle; // придумать как сбрасывать стили для ангийского языка
            }
        }
    }
}

const thInputFirstName = document.getElementById("th-input-first-name");
const thInputLastName = document.getElementById("th-input-last-name");
const thInputPhone = document.getElementById("th-input-phone");
const thInputEmail = document.getElementById("th-input-email");
const thTextarea = document.getElementById("th-textarea");
const thFooterEng = document.getElementById("th-footer-eng");
const thFooterRus = document.getElementById("th-footer-rus")


const thRefreshDataForLocalization = () => {

    const current = arrayPriceList[thActivNumber];

    const currentReviewsTop = reviews[number].top;
    const currentReviewsBottom = reviews[number].bottom;
    thReviewsUpperName.textContent = currentReviewsTop.title[thSelectLang];
    thReviewsLowerName.textContent = currentReviewsBottom.title[thSelectLang];
    thReviewsUpperUpperText.textContent = currentReviewsTop.upperText[thSelectLang];
    thReviewsUpperLowerText.textContent = currentReviewsTop.lowerText[thSelectLang];
    thReviewsLowerUpperText.textContent = currentReviewsBottom.upperText[thSelectLang];
    thReviewsLowerLowerText.textContent = currentReviewsBottom.lowerText[thSelectLang];


    current.prices.map((serviceData, number) => {
        const { nameOfServise, cost } = serviceData;
        const thPriceListServiceName = document.getElementById(`th-price-list-service-name-${number}`);
        const thPriceListServiceCost = document.getElementById(`th-price-list-service-cost-${number}`);
        thPriceListServiceCost.textContent = `£${cost}`;
        thPriceListServiceName.textContent = nameOfServise[thSelectLang];

        if (thSelectLang === "rus") {
            thPriceListServiceName.style.fontFamily = "Lato";
            thPriceListServiceName.style.fontSize = "2.15983vw";
            thPriceListServiceCost.style.fontFamily = "Lato";
            thPriceListServiceCost.style.fontSize = "2.15983vw";
        } else {
            thPriceListServiceName.style.fontFamily = "";
            thPriceListServiceName.style.fontSize = "";
            thPriceListServiceCost.style.fontFamily = "";
            thPriceListServiceCost.style.fontSize = "";
        }

    })

    if (thSelectLang === "rus") {
        thCentralText.style.fontFamily = "Lato";
        thInputFirstName.placeholder = "Имя";
        thInputFirstName.style.fontFamily = "Lato";
        thInputFirstName.style.fontSize = "1.94384vw";
        thInputFirstName.style.lineHeight = "2.33261vw";
        thInputLastName.placeholder = "Фамилия";
        thInputLastName.style.fontFamily = "Lato";
        thInputLastName.style.fontSize = "1.94384vw";
        thInputLastName.style.lineHeight = "2.33261vw";
        thInputPhone.placeholder = "Телефон";
        thInputPhone.style.fontFamily = "Lato";
        thInputPhone.style.fontSize = "1.94384vw";
        thInputPhone.style.lineHeight = "2.33261vw";
        thInputEmail.style.fontFamily = "Lato";
        thInputEmail.style.fontSize = "1.94384vw";
        thInputEmail.style.lineHeight = "2.33261vw";
        thTextarea.placeholder = "В этом поле вы можете указать указать любые дополнительные данные или пожелания по заказу."
        thTextarea.style.fontFamily = "Lato";
        thFooterEng.style.display = "none";
        thFooterRus.style.display = "block";
        thReviewsUpperName.style.fontFamily = "Lato";
        thReviewsUpperUpperText.style.fontFamily = "Lato";
        thReviewsLowerName.style.fontFamily = "Lato";
        thReviewsUpperUpperText.style.fontFamily = "Lato";
        thReviewsUpperLowerText.style.fontFamily = "Lato";
        thReviewsLowerUpperText.style.fontFamily = "Lato";
        thReviewsLowerLowerText.style.fontFamily = "Lato";


    } else {
        thCentralText.style.fontFamily = "";
        thInputFirstName.placeholder = "First Name";
        thInputFirstName.style.fontFamily = "";
        thInputFirstName.style.fontSize = "";
        thInputFirstName.style.lineHeight = "";
        thInputLastName.placeholder = "Last Name";
        thInputLastName.style.fontFamily = "";
        thInputLastName.style.fontSize = "";
        thInputLastName.style.lineHeight = "";
        thInputPhone.placeholder = "Phone";
        thInputPhone.style.fontFamily = "";
        thInputPhone.style.fontSize = "";
        thInputPhone.style.lineHeight = "";
        thInputEmail.style.fontFamily = "";
        thInputEmail.style.fontSize = "";
        thInputEmail.style.lineHeight = "";
        thTextarea.placeholder = "In this field, you can provide any additional details or requests for your order, including your preferred method of contact.";
        thTextarea.style.fontFamily = "";
        thFooterEng.style.display = "block";
        thFooterRus.style.display = "none";
        thReviewsUpperName.style.fontFamily = "";
        thReviewsUpperUpperText.style.fontFamily = "";
        thReviewsLowerName.style.fontFamily = "";
        thReviewsUpperUpperText.style.fontFamily = "";
        thReviewsUpperLowerText.style.fontFamily = "";
        thReviewsLowerUpperText.style.fontFamily = "";
        thReviewsLowerLowerText.style.fontFamily = "";

    }

    for (let index = 0; index < arrayPriceList.length; index++) {
        if (thSelectLang === "rus") {
            thThirdSectionTitle.textContent = current.title.rus;
            thThirdSectionTitle.style.fontFamily = "Lato";
            thThirdSectionTitle.style.fontSize = "2.80778vw";
            thThirdSectionText0.textContent = current.description.rus[0];
            thThirdSectionText0.style.fontFamily = "Lato";
            thThirdSectionText0.style.fontSize = "1.72786vw";
            thThirdSectionText0.style.lineHeight = "2.24622vw";
            thThirdSectionText1.textContent = current.description.rus[1];
            thThirdSectionText1.style.fontFamily = "Lato";
            thThirdSectionText1.style.fontSize = "1.72786vw";
            thThirdSectionText1.style.lineHeight = "2.24622vw";
        } else {
            thThirdSectionTitle.textContent = current.title.eng;
            thThirdSectionTitle.style.fontFamily = "";
            thThirdSectionTitle.style.fontSize = "";
            thThirdSectionText0.textContent = current.description.eng[0];
            thThirdSectionText0.style.fontFamily = "";
            thThirdSectionText0.style.fontSize = "";
            thThirdSectionText1.style.lineHeight = "";
            thThirdSectionText1.textContent = current.description.eng[1];
            thThirdSectionText1.style.fontFamily = "";
            thThirdSectionText1.style.fontSize = "";
            thThirdSectionText1.style.lineHeight = "";
        }

    }



}


const thChangeIdeasText = () => {
    thCentralText.style.opacity = "0";
    thAngel = (thAngel + 90);
    setTimeout(() => {
        thNumberOfActivAnimation = (thNumberOfActivAnimation + 1) % ideasArrayUp.length;
        thCentralTextUp.textContent = ideasArrayUp[thNumberOfActivAnimation][thSelectLang];
        thCentralTextDown.textContent = ideasArrayDown[thNumberOfActivAnimation][thSelectLang];
        thCentralImg.style.rotate = thAngel + "deg";
        thCentralImg.style.opacity = "1";
        thCentralText.style.opacity = "1";

    }, 500);
};

setInterval(thChangeIdeasText, 4000);


thLang.addEventListener('click', () => {
    thSwitchLocalization();
    thRefreshDataForLocalization();
})

thSecondSectionButtonServices.addEventListener('click', () => {
    thNavigationBlock.style.right = "";
    setTimeout(() => {
        thNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 1.7,
        behavior: 'smooth'
    });
})

thSecondSectionButtonContacts.addEventListener('click', () => {
    thNavigationBlock.style.right = "";
    setTimeout(() => {
        thNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 2.5,
        behavior: 'smooth'
    });
})

thThirdSectionButtonOPriceList.addEventListener('click', () => {
    thPriceListWrapper.style.display = "block";
    setTimeout(() => {
        thPriceListWrapper.style.opacity = "1";
    }, 1);
})

thPriceListXMark.addEventListener('click', () => {
    thPriceListWrapper.style.opacity = "";
    setTimeout(() => {
        thPriceListWrapper.style.display = "";
    }, 300);
})





const thActivService = () => {
    const currentService = arrayPriceList[thActivNumber];

    thThirdSectionTitle.textContent = currentService.title[thSelectLang];

    thThirdSectionImg.src = `/img/svg/tablet-horizontal/th-third-section-img ${currentService.title.eng}.svg`;
    thThirdSectionText0.textContent = currentService.description[thSelectLang][0];
    thThirdSectionText1.textContent = currentService.description[thSelectLang][1];

    currentService.prices.map((serviceData, number) => {
        const { nameOfServise, cost } = serviceData;
        const thPriceListServiceName = document.getElementById(`th-price-list-service-name-${number}`);
        const thPriceListServiceCost = document.getElementById(`th-price-list-service-cost-${number}`);
        thPriceListServiceCost.textContent = `£${cost}`;
        thPriceListServiceName.textContent = nameOfServise[thSelectLang];

    })
}

thActivService();

const thThirdSectionRightService1 = document.getElementById("th-third-section-right-services-0");
const thThirdSectionRightService2 = document.getElementById("th-third-section-right-services-1");
const thThirdSectionRightService3 = document.getElementById("th-third-section-right-services-2");
const thThirdSectionRightService4 = document.getElementById("th-third-section-right-services-3");
const thThirdSectionRightService5 = document.getElementById("th-third-section-right-services-4");
const thThirdSectionRightService6 = document.getElementById("th-third-section-right-services-5");

thThirdSectionRightService1.addEventListener('click', () => {
    thActivNumber = 1;
    thActivService();
})

thThirdSectionRightService2.addEventListener('click', () => {
    thActivNumber = 2;
    thActivService();
})

thThirdSectionRightService3.addEventListener('click', () => {
    thActivNumber = 3;
    thActivService();
})

thThirdSectionRightService4.addEventListener('click', () => {
    thActivNumber = 4;
    thActivService();
})

thThirdSectionRightService5.addEventListener('click', () => {
    thActivNumber = 5;
    thActivService();
})

const thFourthSectionChoiceOfService = document.getElementById("th-choice-of-service");
const thFourthSectionChoiceOfServiceArrow = document.getElementById("th-choice-of-service-arrow");
const thChoiceOfServicePlaceholder = document.getElementById("th-choice-of-service-placeholder");
let thNumberOfService = 0;
let thSelectCategory = "";

const thDropListWrapper = document.getElementById("th-drop-list-wrapper");


thFourthSectionChoiceOfService.addEventListener('click', (event) => {
    event.stopPropagation();
    const newDropListWrapper = document.createElement('div');
    newDropListWrapper.id = "th-drop-list";
    thDropListWrapper.style.height = "22.67819vw"

    if (thSelectLang === "eng") {
        const actualityCategory = arrayPriceList.map((service) => service.title.eng).filter((textCategory) => {
            return textCategory !== thSelectCategory;
        });
        actualityCategory.forEach(textSelectCategoty => {
            const newDropListPoint = document.createElement('div');
            newDropListPoint.textContent = textSelectCategoty;
            newDropListPoint.classList = "th-drop-list-item";
            newDropListPoint.id = textSelectCategoty;
            newDropListPoint.style.fontFamily = "";

            newDropListPoint.addEventListener('click', (event) => {
                event.stopPropagation();
                thSelectCategory = textSelectCategoty;
                thChoiceOfServicePlaceholder.textContent = textSelectCategoty;
                newDropListWrapper.style.opacity = "0";
                thFourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
                thFourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
                newDropListWrapper.style.pointerEvents = "none";
                // allInputsHave(); добавить проверку
            });
            newDropListWrapper.appendChild(newDropListPoint);
        });
    } else {
        const actualityCategory = arrayPriceList.map((service) => service.title.rus).filter((textCategory) => {
            return textCategory !== thSelectCategory;
        });
        actualityCategory.forEach(textSelectCategoty => {
            const newDropListPoint = document.createElement('div');
            newDropListPoint.textContent = textSelectCategoty;
            newDropListPoint.classList = "th-drop-list-item";
            newDropListPoint.id = textSelectCategoty;
            newDropListPoint.style.fontFamily = "Lato";

            newDropListPoint.addEventListener('click', (event) => {
                event.stopPropagation();
                thSelectCategory = textSelectCategoty;
                thChoiceOfServicePlaceholder.textContent = textSelectCategoty;
                newDropListWrapper.style.opacity = "0";
                thFourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
                thFourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
                newDropListWrapper.style.pointerEvents = "none";
                // allInputsHave(); добавить проверку
            });
            newDropListWrapper.appendChild(newDropListPoint);
        });
    }

    newDropListWrapper.style.opacity = "1";
    thFourthSectionChoiceOfServiceArrow.style.rotate = "-90deg";
    thFourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 0)";
    newDropListWrapper.style.pointerEvents = "all";
    thChoiceOfServicePlaceholder.style.color = "var(--blue)";
    const possibleDublicate = document.getElementById("drop-list");
    if (possibleDublicate) {
        thDropListWrapper.removeChild(possibleDublicate);
    }
    thDropListWrapper.appendChild(newDropListWrapper);

    document.addEventListener('click', () => {
        if (!thSelectCategory) {
            thChoiceOfServicePlaceholder.style.color = "var(--darkBlue)";
        };
        newDropListWrapper.style.opacity = "0";
        thDropListWrapper.style.height = "";
        thFourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
        newDropListWrapper.style.pointerEvents = "none";
        thFourthSectionChoiceOfServiceArrow.style.rotate = "";
    });
});


const thSetupAndTranslateForSelectService = (event) => {
    event.preventDefault();
    window.scrollTo({
        top: window.innerWidth * 2.5,
        behavior: 'smooth'
    });

    if (thSelectLang === "eng") {
        thTextarea.textContent = textForApplication.eng[thNumberOfService];
        let selCat = arrayPriceList.map((service) => service.title.eng)[thActivNumber];
        if (selCat !== thSelectCategory && arrayPriceList.map((service) => service.title.eng).includes(selCat)) {
            thChoiceOfServicePlaceholder.textContent = selCat;
            thFourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
            thFourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
            thChoiceOfServicePlaceholder.style.color = "var(--blue)";
            thSelectCategory = selCat;
            // allInputsHave(); добавить эффекты когда поля не заполнены
        }
    } else {
        thTextarea.textContent = textForApplication.rus[thNumberOfService];
        let selCat = arrayPriceList.map((service) => service.title.rus)[thActivNumber];
        if (selCat !== thSelectCategory && arrayPriceList.map((service) => service.title.rus).includes(selCat)) {
            thChoiceOfServicePlaceholder.textContent = selCat;
            thFourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
            thFourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
            thChoiceOfServicePlaceholder.style.color = "var(--blue)";
            thSelectCategory = selCat;
            // allInputsHave(); добавить эффекты когда поля не заполнены
        }
    }
}
const buttonOrder = document.getElementById("th-third-section-button-order");
const buttonConsultation = document.getElementById("th-third-section-button-consultation");
const buttonReview = document.getElementById("th-third-section-button-review");


buttonOrder.addEventListener('click', (event) => {
    event.preventDefault();
    thNumberOfService = thActivNumber;
    thSetupAndTranslateForSelectService(event);
    thTextarea.textContent = textForApplication.eng[0]
})

buttonConsultation.addEventListener('click', (event) => {
    event.preventDefault();
    thNumberOfService = thActivNumber;
    thSetupAndTranslateForSelectService(event);
    thTextarea.textContent = textForApplication[thSelectLang][1]
})

buttonReview.addEventListener('click', (event) => {
    event.preventDefault();
    thNumberOfService = thActivNumber;
    thSetupAndTranslateForSelectService(event);
    thTextarea.textContent = textForApplication[thSelectLang][3]
})


const thReviewsArrowLeft = document.getElementById("th-five-section-button-left");
const thReviewsArrowRight = document.getElementById("th-five-section-button-right");

let number = 0;
let float = false;

const upperloadReviews = (numberActivReviews, direction) => {
    if (!float) {
        number = numberActivReviews >= 0 ? numberActivReviews % reviews.length : (reviews.length - 1);
        const data = reviews[number];
        float = true;
        thUpperBlock.style.opacity = "0";
        thLowerBlock.style.opacity = "0";
        if (direction) {
            thUpperBlock.style.left = "30vw";
            thLowerBlock.style.left = "-6vw";
        } else {
            thUpperBlock.style.left = "50vw";
            thLowerBlock.style.left = "14.5vw";
        }
        setTimeout(() => {
            thUpperBlock.style.opacity = "";
            thLowerBlock.style.opacity = "";
            thUpperBlock.style.left = "";
            thLowerBlock.style.left = "";
            float = false;
        }, 500);
        setTimeout(() => {
            if (thSelectLang === "eng") {
                thReviewsUpperName.textContent = data.top.title.eng;
                thReviewsUpperUpperText.textContent = data.top.upperText.eng;
                thReviewsUpperLowerText.textContent = data.top.lowerText.eng;
                thReviewsLowerName.textContent = data.bottom.title.eng;
                thReviewsLowerUpperText.textContent = data.bottom.upperText.eng;
                thReviewsLowerLowerText.textContent = data.bottom.lowerText.eng;
            } else {
                thReviewsUpperName.textContent = data.top.title.rus;
                thReviewsUpperUpperText.textContent = data.top.upperText.rus;
                thReviewsUpperLowerText.textContent = data.top.lowerText.rus;
                thReviewsLowerName.textContent = data.bottom.title.rus;
                thReviewsLowerUpperText.textContent = data.bottom.upperText.rus;
                thReviewsLowerLowerText.textContent = data.bottom.lowerText.rus;
            }
            thReviewsUpperImg.src = `/img/png/reviews-img-${data.top.title.eng}.png`;
            thReviewsLowerImg.src = `/img/png/reviews-img-${data.bottom.title.eng}.png`;
        }, 400);
    }
}

upperloadReviews(0);

thReviewsArrowLeft.addEventListener('click', () => {
    upperloadReviews(--number, true)
})

thReviewsArrowRight.addEventListener('click', () => {
    upperloadReviews(++number, false)
})