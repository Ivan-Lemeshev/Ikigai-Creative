import localizationWrapper from "./localization-data.js";
import arrayDataOfService from "./Services.js";
import { ideasArrayUp, ideasArrayDown, textForApplication } from "./slogans.js";
import reviews from "./reviews.js";
import dataContats from "./links.js";

const backgroundGradient = document.getElementById("background-gradient");
const ikigaiLogoText = document.getElementById("ikigai-logo-text");
const creativeLogoText = document.getElementById("creative-logo-text");
const ideasText = document.getElementById("animation-text");
const centralImg = document.getElementById("central-img-first-section");
const centralText = document.getElementById("central-text-first-section");
const centralTextUp = document.getElementById("central-text-first-section-up");
const centralTextDown = document.getElementById("central-text-first-section-down");


const navigationWrapper = document.getElementById("navigation-button-first-section-big-wrapper");
const headerLogoFirstSection = document.getElementById("header-logo-first-section");
const headerNavInfo = document.getElementById("navigation-button-first-section-choice-info");
const headerNavServices = document.getElementById("navigation-button-first-section-choice-services");
const headerNavContacts = document.getElementById("navigation-button-first-section-choice-contacts");
const headerNavReviews = document.getElementById("navigation-button-first-section-choice-reviews");
// const headerDividingLine = document.getElementById("header-dividing-line-first-section");
// const headerLanguageButton = document.getElementById("language-button-first-section");

let animationisActiv = false;
let animationIsGone = false;
let numberOfActivAnimation = 0;
const timeOfAnimation = 4000;
let angel = 360;


// const secondHeaderLogoHover = document.getElementById("second-header-logo-hover");
// const secondHeaderNavigation = document.getElementById("second-header-navigation");
// const secondHeaderLogoActiv = document.getElementById("second-header-logo-activ");
// const secondHeaderNavMain = document.getElementById("second-nav-main");
// const secondHeaderNavInfo = document.getElementById("second-nav-info");
// const secondHeaderNavServices = document.getElementById("second-nav-services");
// const secondHeaderNavContacts = document.getElementById("second-nav-contacts");
// const secondHeaderNavReviews = document.getElementById("second-nav-reviews");
// const secondHeaderLanguageButton = document.getElementById("second-language-button");
// const secondHeaderDividingLine = document.getElementById("second-header-dividing-line");

const secondSectionText = document.getElementById("second-section-text");
const secondSectionText1 = document.getElementById("second-section-text-1");
const secondSectionButtonServices = document.getElementById("second-section-button-services");
const secondSectionButtonContacts = document.getElementById("second-section-button-contacts");


const thirdSectionText = document.getElementById("third-section-main-content-right-part");
const thirdSectionButtonOrder = document.getElementById("third-section-main-content-right-part-button-order");
const thirdSectionButtonMore = document.getElementById("third-section-main-content-right-part-button-more");


const thirdSectionImage = document.getElementById("third-section-main-content-left-part");
const thirdSectionImageBackground = document.getElementById("third-section-main-content-left-part-background");
const thirdSectionTitle = document.getElementById("third-section-title");
const thirdSectionMainContentRightPartLine = document.getElementById("third-section-main-content-right-part-line");
const thirdSectionLowerPart = document.getElementById("third-section-lower-part");
const thirdSectionLowerPartDivFirst = document.getElementById("third-section-lower-part-1");
const thirdSectionLowerPartDivSecond = document.getElementById("third-section-lower-part-2");
const thirdSectionLowerPartDivThird = document.getElementById("third-section-lower-part-3");
const thirdSectionLowerPartDivFourth = document.getElementById("third-section-lower-part-4");
const thirdSectionLowerPartDivFifth = document.getElementById("third-section-lower-part-5");

const reviewsArrowLeft = document.getElementById("reviews-arrow-left");
const reviewsArrowRight = document.getElementById("reviews-arrow-right");

const upperBlock = document.getElementById("upper-block-with-reviews");
const reviewsUpperName = document.getElementById("reviews-upper-name");
const reviewsUpperImg = document.getElementById("reviews-upper-img");
const reviewsUpperUpperText = document.getElementById("reviews-upper-upper-text");
const reviewsUpperLowerText = document.getElementById("reviews-upper-lower-text");

const lowerBlock = document.getElementById("lower-block-with-reviews");
const reviewsLowerName = document.getElementById("reviews-lower-name");
const reviewsLowerImg = document.getElementById("reviews-lower-img");
const reviewsLowerUpperText = document.getElementById("reviews-lower-upper-text");
const reviewsLowerLowerText = document.getElementById("reviews-lower-lower-text");


const errorImgFirstName = document.getElementById('error-img-first-name-input');
const correctImgFirstName = document.getElementById('correct-img-first-name-input');
const inputFirstName = document.getElementById("input-first-name");

const inputLastName = document.getElementById("input-last-name");
const errorImgLastName = document.getElementById('error-img-last-name-input');
const correctImgLastName = document.getElementById('correct-img-last-name-input');

const inputPhone = document.getElementById("input-phone");
const errorImgPhone = document.getElementById('error-img-phone-input');
const correctImgPhone = document.getElementById('correct-img-phone-input');

const inputEmail = document.getElementById("input-email");
const errorImgEmail = document.getElementById('error-img-email-input');
const correctImgEmail = document.getElementById('correct-img-email-input');

const footerContentEng = document.getElementById("footer-content-eng");
const footerContentRus = document.getElementById("footer-content-rus");

const dropListWrapper = document.getElementById("drop-list-wrapper");
const choiceOfServicePlaceholder = document.getElementById("choice-of-service-placeholder");

let selectCategory = "";

const buttonMoreBlock = document.getElementById("button-more-block");
const buttonMoreTitle = document.getElementById("button-more-title");
const modalNotificationBlock = document.getElementById("modal-notification-block");
let showNotification = true;
const interestBlockAllService = document.getElementById("interest-block-all-service");

const massiv = [1, 2, 3, 4, 5];
let activNumber = 0;

const arrayCard = [
    thirdSectionLowerPartDivFirst,
    thirdSectionLowerPartDivSecond,
    thirdSectionLowerPartDivThird,
    thirdSectionLowerPartDivFourth,
    thirdSectionLowerPartDivFifth
];

let selectLang = "eng";
const lang = document.getElementById("language-button-first-section-wrapper");
let numberOfService = 0;

const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


const allInputsHave = () => {
    if (inputFirstName.value.length && inputLastName.value.length && inputPhone.value.length && inputEmail.value.length && isValidEmail(inputEmail.value) && selectCategory) {
        submitButtonFourthSection.className = "send-form-submit-activ";
    }
}

const fourthSectionChoiceOfService = document.getElementById("choice-of-service");
const fourthSectionChoiceOfServiceArrow = document.getElementById("choice-of-service-arrow");

const setupAndTranslateForSelectService = (event) => {
    event.preventDefault();
    window.scrollTo({
        top: window.innerWidth * 1.950625,
        behavior: 'smooth'
    });

    if (selectLang === "eng") {
        textarea.textContent = textForApplication.eng[numberOfService];
        let selCat = arrayDataOfService.map((service) => service.title.eng)[activNumber];
        if (selCat !== selectCategory && arrayDataOfService.map((service) => service.title.eng).includes(selCat)) {
            choiceOfServicePlaceholder.textContent = selCat;
            fourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
            fourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
            choiceOfServicePlaceholder.style.color = "var(--blue)";
            selectCategory = selCat;
            allInputsHave();
        }
    } else {
        textarea.textContent = textForApplication.rus[numberOfService];
        let selCat = arrayDataOfService.map((service) => service.title.rus)[activNumber];
        if (selCat !== selectCategory && arrayDataOfService.map((service) => service.title.rus).includes(selCat)) {
            choiceOfServicePlaceholder.textContent = selCat;
            fourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
            fourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
            choiceOfServicePlaceholder.style.color = "var(--blue)";
            selectCategory = selCat;
            allInputsHave();
        }
    }
}


const refreshDataForLocalization = () => {
    const titles = arrayDataOfService.map((service) => service.title);
    for (let index = 1; index < arrayDataOfService.length; index++) {
        const currentTitle = titles[index][selectLang]
        const htmlBlock = document.getElementById(`third-section-div-in-div-${index}`);


        if (currentTitle === "Продвижение в социальных сетях") {
            htmlBlock.textContent = "Продвижение в соц. сетях";
        } else {
            htmlBlock.textContent = currentTitle;
        }
    }

    const currentReviewsTop = reviews[number].top;
    const currentReviewsBottom = reviews[number].bottom;
    reviewsUpperName.textContent = currentReviewsTop.title[selectLang];
    reviewsLowerName.textContent = currentReviewsBottom.title[selectLang];
    reviewsUpperUpperText.textContent = currentReviewsTop.upperText[selectLang];
    reviewsUpperLowerText.textContent = currentReviewsTop.lowerText[selectLang];
    reviewsLowerUpperText.textContent = currentReviewsBottom.upperText[selectLang];
    reviewsLowerLowerText.textContent = currentReviewsBottom.lowerText[selectLang];

    const currentTitle = arrayDataOfService[activNumber].title[selectLang];
    buttonMoreTitle.textContent = currentTitle;


    if (selectLang === "rus") {
        inputFirstName.placeholder = "Имя";
        inputLastName.placeholder = "Фамилия";
        inputPhone.placeholder = "Телефон";
        textarea.placeholder = "В этом поле вы можете указать любые дополнительные данные или пожелания по заказу.";
        footerContentEng.style.display = "none";
        footerContentRus.style.display = "flex";
        // secondHeaderLanguageButton.textContent = "Rus";
        // secondHeaderNavMain.textContent = "Главная";
        // secondHeaderNavInfo.textContent = "Инфо";
        // secondHeaderNavServices.textContent = "Услуги";
        // secondHeaderNavContacts.textContent = "Контакты";
        // secondHeaderNavReviews.textContent = "Отзывы";


    } else {
        inputFirstName.placeholder = "First Name";
        inputLastName.placeholder = "Last Name";
        inputPhone.placeholder = "Phone";
        textarea.placeholder = "In this field, you can provide any additional details or requests for your order, including your preferred method of contact.";
        footerContentEng.style.display = "flex";
        footerContentRus.style.display = "none";
        // secondHeaderLanguageButton.textContent = "Eng";
        // secondHeaderNavMain.textContent = "Main";
        // secondHeaderNavInfo.textContent = "Info";
        // secondHeaderNavServices.textContent = "Services";
        // secondHeaderNavContacts.textContent = "Contacts";
        // secondHeaderNavReviews.textContent = "Reviews";
    }

    for (let index = 0; index < arrayDataOfService.length; index++) {
        const current = arrayDataOfService[activNumber];
        current.prices.map((serviceData, number) => {
            const { nameOfServise, cost } = serviceData;
            const priceName = document.getElementById(`button-more-price-services-${number}`);
            const priceMoney = document.getElementById(`button-more-price-money-${number}`);

            if (selectLang === "rus") {
                priceName.textContent = nameOfServise.rus;
            } else {
                priceName.textContent = nameOfServise.eng;
            }
            priceMoney.textContent = `£${cost}`;
        })

        if (selectLang === "eng") {
            current.description.eng.map((selfText, number) => {
                const textBlock = document.getElementById(`button-more-description-text-${number}`);
                textBlock.textContent = selfText;
            })

        } else {
            current.description.rus.map((selfText, number) => {
                const textBlock = document.getElementById(`button-more-description-text-${number}`);
                textBlock.textContent = selfText;
            })
        }
    }
}


if (selectLang === "eng") {
    for (let index = 0; index < textForApplication.eng.length; index++) {
        const button = document.getElementById(`button-more-lower-part-buttons-${index}`);
        button.addEventListener('click', (event) => {
            event.preventDefault();
            numberOfService = index;
            setupAndTranslateForSelectService(event);
        })
    }
} else {
    for (let index = 0; index < textForApplication.rus.length; index++) {
        const button = document.getElementById(`button-more-lower-part-buttons-${index}`);
        button.addEventListener('click', (event) => {
            event.preventDefault();
            numberOfService = index;
            setupAndTranslateForSelectService(event);
        })
    }
}



const switchLocalization = () => {
    for (let id in localizationWrapper) { // перебираем все айдишники
        const data = localizationWrapper[id]; // пой айди получаю информацию 

        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        element.textContent = data[selectLang]; //   обновляю текст

        if (selectLang === "rus") { // добавляем стили к русскому тексту 
            const allStyles = data.styles;
            for (let style in allStyles) {
                const valueStyle = allStyles[style];
                element.style[style] = valueStyle; // придумать как сбрасывать стили для ангийского языка
            }
        }
    }

    animationIsGone = false;
}

const langChoiceWrapper = document.getElementById("language-button-first-section-big-wrapper");
const langChoice = document.getElementById("language-button-first-section-wrapper");
const langUpperPart = document.getElementById("language-button-first-section-choice");
const langEng = document.getElementById("language-button-first-section-choice-eng");
const langEngCheckbox = document.getElementById("language-button-first-section-choice-eng-checkbox");
const langRus = document.getElementById("language-button-first-section-choice-rus");
const langRusCheckbox = document.getElementById("language-button-first-section-choice-rus-checkbox");

langChoice.addEventListener('click', () => {
    langUpperPart.style.display = "block"
    setTimeout(() => {
        langUpperPart.style.opacity = "1"
    }, 1);
})

langChoiceWrapper.addEventListener('mouseleave', () => {
    langUpperPart.style.opacity = ""
    setTimeout(() => {
        langUpperPart.style.display = ""
    }, 300);

})

langEng.addEventListener('click', () => {
    selectLang = "eng";
    switchLocalization();
    refreshDataForLocalization();
    langEngCheckbox.style.opacity = "1";
    langRusCheckbox.style.opacity = "0";
})

langRus.addEventListener('click', () => {
    selectLang = "rus";
    switchLocalization();
    refreshDataForLocalization();
    langEngCheckbox.style.opacity = "0";
    langRusCheckbox.style.opacity = "1";
})
const themeChoiceWrapper = document.getElementById("theme-button-first-section-big-wrapper");
const themeChoice = document.getElementById("theme-button-first-section-wrapper");
const themeUpperPart = document.getElementById("theme-button-first-section-choice");
const themeLight = document.getElementById("theme-button-first-section-choice-light-wrapper");
const themeLightCheckbox = document.getElementById("theme-button-first-section-choice-light-checkbox");
const themeDark = document.getElementById("theme-button-first-section-choice-dark-wrapper");
const themeDarkCheckbox = document.getElementById("theme-button-first-section-choice-dark-checkbox");

let selectTheme = "light";

themeChoice.addEventListener('click', () => {
    themeUpperPart.style.display = "block"
    setTimeout(() => {
        themeUpperPart.style.opacity = "1"
    }, 1);
})

themeChoiceWrapper.addEventListener('mouseleave', () => {
    themeUpperPart.style.opacity = ""
    setTimeout(() => {
        themeUpperPart.style.display = ""
    }, 300);
})

themeLight.addEventListener('click', () => {
    selectTheme = "light";
    themeLightCheckbox.style.opacity = "1";
    themeDarkCheckbox.style.opacity = "0";
})

themeDark.addEventListener('click', () => {
    selectTheme = "dark";
    themeLightCheckbox.style.opacity = "0";
    themeDarkCheckbox.style.opacity = "1";
})

const navigationButtonFirstSectionBigWrapper = document.getElementById("navigation-button-first-section-big-wrapper");
const navigationButtonFirstSectionWrapper = document.getElementById("navigation-button-first-section-wrapper");
const navigationButtonFirstSectionChoiceWrapper = document.getElementById("navigation-button-first-section-choice-wrapper");

navigationButtonFirstSectionWrapper.addEventListener('click', () => {
    navigationButtonFirstSectionChoiceWrapper.style.display = "flex"
    setTimeout(() => {
        navigationButtonFirstSectionChoiceWrapper.style.opacity = "1"
    }, 1);
})

navigationButtonFirstSectionBigWrapper.addEventListener('mouseleave', () => {
    navigationButtonFirstSectionChoiceWrapper.style.opacity = ""
    setTimeout(() => {
        navigationButtonFirstSectionChoiceWrapper.style.display = "none"
    }, 300);
})

const setActivElement = (number) => {
    const oldValue = massiv[number - 1];
    massiv[number - 1] = activNumber;
    activNumber = oldValue;
};

const cardLinks = [];

const customization = (number) => {
    const currentCard = cardLinks[number - 1];
    const currentServise = arrayDataOfService[massiv[number - 1]];
    const parser = new DOMParser();
    const svgElement = parser.parseFromString(currentServise.svgCode, "image/svg+xml").documentElement;
    svgElement.id = `svgElement-${number}`;
    svgElement.classList = "third-section-lower-part-img";
    let oldSvgElement = document.getElementById(`svgElement-${number}`);

    if (oldSvgElement) {
        arrayCard[number - 1].removeChild(oldSvgElement);
    }

    svgElement.style.opacity = "0";

    setTimeout(() => {
        svgElement.style.opacity = "";
    }, 500);

    arrayCard[number - 1].appendChild(svgElement);

    if (selectLang === "eng") {
        currentCard.textBlock.textContent = currentServise.title.eng;
    } else {
        currentCard.textBlock.textContent = currentServise.title.rus;
    }

};

const firstParagraph = document.getElementById("third-section-main-content-right-part-paragraph-1");
const secondParagraph = document.getElementById("third-section-main-content-right-part-paragraph-2");
const thirdParagraph = document.getElementById("third-section-main-content-right-part-paragraph-3");
const imgBlock = document.getElementById("third-section-creative-design-img");
const title = document.getElementById("third-section-main-content-right-part-title");

const upLoadActivServise = () => {
    const data = arrayDataOfService[activNumber];
    if (selectTheme === "light") {
        imgBlock.src = `/img/svg/desktop/src/light/third-section-lower-part ${data.title.eng}.svg`;
    } else {
        imgBlock.src = `/img/svg/desktop/src/dark/third-section-lower-part ${data.title.eng}.svg`;
    }
    if (selectLang === "eng") {
        firstParagraph.textContent = data.text.eng[0];
        secondParagraph.textContent = data.text.eng[1];
        thirdParagraph.textContent = data.text.eng[2];
        title.textContent = data.title.eng;
    } else {
        firstParagraph.textContent = data.text.rus[0];
        secondParagraph.textContent = data.text.rus[1];
        thirdParagraph.textContent = data.text.rus[2];
        title.textContent = data.title.rus;
    }
}

for (let index = 1; index < arrayDataOfService.length; index++) {
    cardLinks.push(
        {
            wrapper: arrayCard[index - 1],
            textBlock: document.getElementById(`third-section-div-in-div-${index}`)
        }
    )

    arrayCard[index - 1].addEventListener('click', () => {
        thirdSectionText.style.opacity = "0";
        thirdSectionImage.style.transform = "rotate3d(0, 1, 0, 0deg)";
        thirdSectionText.style.transform = "rotate3d(0, 1, 0, 30deg)";
        imgBlock.style.opacity = "0";

        const textBlock = document.getElementById(`third-section-div-in-div-${index}`)
        const svgBlock = document.getElementById(`svgElement-${index}`)

        textBlock.style.opacity = "0";
        svgBlock.style.opacity = "0";

        setTimeout(() => {
            upLoadActivServise();
            customization(index);
            setTimeout(() => {
                thirdSectionImage.style.transform = "rotate3d(0, 1, 0, 30deg)";
                thirdSectionText.style.transform = "rotate3d(0, 1, 0, 0deg)";
                imgBlock.style.opacity = "";
                thirdSectionText.style.opacity = "1";
                textBlock.style.opacity = "";
                svgBlock.style.opacity = "";
            }, 300);
        }, 500);
        setActivElement(index);
    });
};

const firstUploadCard = () => {
    for (let index = 1; index < arrayDataOfService.length; index++) {
        customization(index);
    }
}

firstUploadCard();



const changeIdeasText = () => {
    centralText.style.opacity = "0";
    angel = (angel + 90);
    setTimeout(() => {
        numberOfActivAnimation = (numberOfActivAnimation + 1) % ideasArrayUp.length;
        centralTextUp.textContent = ideasArrayUp[numberOfActivAnimation][selectLang];
        centralTextDown.textContent = ideasArrayDown[numberOfActivAnimation][selectLang];
        centralImg.style.rotate = angel + "deg";
        centralText.style.opacity = "1";
    }, 500);
};

const startAnimation = () => {
    setTimeout(() => {
        ikigaiLogoText.style.opacity = "1";
        creativeLogoText.style.opacity = "1";
        setTimeout(() => {
            ikigaiLogoText.style.left = "7.44792vw";
            creativeLogoText.style.left = "72.23958vw";
            setTimeout(() => {
                ideasText.style.opacity = "1";
                setTimeout(() => {
                    centralImg.style.opacity = "1";
                    centralImg.style.rotate = "360deg";
                    ikigaiLogoText.style.opacity = "0.5";
                    creativeLogoText.style.opacity = "0.5";
                    setTimeout(() => {
                        ideasText.style.opacity = "0";
                        centralText.style.opacity = "1";
                        setTimeout(() => {
                            headerLogoFirstSection.style.opacity = "1";
                            setTimeout(() => {
                                langChoiceWrapper.style.opacity = "1";
                                setTimeout(() => {
                                    themeChoiceWrapper.style.opacity = "1";
                                    setTimeout(() => {
                                        navigationWrapper.style.opacity = "1";
                                        setTimeout(() => {
                                            setInterval(changeIdeasText, timeOfAnimation);
                                        }, 300);
                                    }, 300);
                                }, 300);
                            }, 300);
                        }, 1200);
                    }, 1100);
                }, 900);
            }, 700);
        }, 600);
    }, 400);

};

startAnimation();
let activAnimationThirdSection = false;
const secondSectionTitleEng = document.getElementById("second-section-title-eng");
const secondSectionTitleRus = document.getElementById("second-section-title-rus");

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const width = window.innerWidth;

    if (!animationisActiv) {
        if (scrollY > window.innerHeight) {
            animationisActiv = true;
            // secondHeader.style.display = "flex";
            setTimeout(() => {
                // secondHeader.style.opacity = "1";
                animationisActiv = false;
            }, 1);
        } else {
            animationisActiv = true;
            // secondHeader.style.opacity = "0";
            setTimeout(() => {
                // secondHeader.style.display = "none";
                animationisActiv = false;
            }, 300);
        }
    }
    if (scrollY > width * 0.5625 && scrollY < width * 1.125) {
        // secondHeaderNavInfo.classList.add("second-header-text-none-clickable");
        // secondHeaderNavServices.classList = "second-header-text";
        // secondHeaderNavContacts.classList = "second-header-text";
        // secondHeaderNavReviews.classList = "second-header-text";

        if (!animationIsGone) {
            if (selectLang === "eng") {
                lightAnimation([33, 100, 66, 133, 86, 78, 189], 'letter-W');
                lightAnimation([215, 137, 49, 133, 107, 166, 105], 'letter-h');
                lightAnimation([59, 105, 49, 166, 107, 133, 49], 'letter-o');
                lightAnimation([115, 159, 85, 122, 159, 152, 78], 'letter-w');
                lightAnimation([218, 329, 178, 155, 59, 85, 111], 'letter-e');
                lightAnimation([184, 296, 145, 122, 92, 118, 145], 'letter-A');
                lightAnimation([151, 229, 111, 89, 125, 152, 178], 'letter-r');
                lightAnimation([118, 196, 78, 55, 159, 185, 211], 'letter-E');
                animationIsGone = true
                secondSectionTitleEng.style.display = "flex";
                secondSectionTitleRus.style.display = "none";
            } else {
                lightAnimation([33, 100, 66, 133, 86, 78, 189], 'letter-K');
                lightAnimation([215, 137, 49, 133, 107, 166, 105], 'letter-t');
                lightAnimation([59, 105, 49, 166, 107, 133, 49], 'letter-O');
                lightAnimation([115, 159, 85, 122, 159, 152, 78], 'letter-m');
                lightAnimation([218, 329, 178, 155, 59, 85, 111], 'letter-i');
                animationIsGone = true
                secondSectionTitleEng.style.display = "none";
                secondSectionTitleRus.style.display = "flex";
            }

            setTimeout(() => {
                secondSectionText.style.opacity = "1";
                secondSectionText1.style.opacity = "1";
                secondSectionButtonServices.style.opacity = "1";
                secondSectionButtonContacts.style.opacity = "1";
            }, 200);
        };

    } else if (scrollY > width * 1.125 && scrollY < width * 1.965 && !activAnimationThirdSection) {
        // secondHeaderNavInfo.classList = "second-header-text";
        // secondHeaderNavServices.classList.add("second-header-text-none-clickable");
        // secondHeaderNavContacts.classList = "second-header-text";
        // secondHeaderNavReviews.classList = "second-header-text";
        thirdSectionImage.style.transform = "rotate3d(0, 1, 0, 30deg)";
        thirdSectionText.style.transform = "rotate3d(0, 1, 0, 0deg)";
        thirdSectionText.style.opacity = "1";

        setTimeout(() => {
            setTimeout(() => {
                thirdSectionLowerPartDivFirst.style.opacity = "1";
                setTimeout(() => {
                    thirdSectionLowerPartDivSecond.style.opacity = "1";
                    setTimeout(() => {
                        thirdSectionLowerPartDivThird.style.opacity = "1";
                        setTimeout(() => {
                            thirdSectionLowerPartDivFourth.style.opacity = "1";
                            setTimeout(() => {
                                thirdSectionLowerPartDivFifth.style.opacity = "1";
                            }, 250);
                        }, 250);
                    }, 250);
                }, 250);
            }, 300);
        }, 500);
    } else if (scrollY > width * 1.965 && scrollY < width * 2.527) {
        // secondHeaderNavInfo.classList = "second-header-text";
        // secondHeaderNavServices.classList = "second-header-text";
        // secondHeaderNavContacts.classList.add("second-header-text-none-clickable");
        // secondHeaderNavReviews.classList = "second-header-text";
    } else if (scrollY > width * 2.527 && scrollY < width * 3.089) {
        // secondHeaderNavInfo.classList = "second-header-text";
        // secondHeaderNavServices.classList = "second-header-text";
        // secondHeaderNavContacts.classList = "second-header-text";
        // secondHeaderNavReviews.classList.add("second-header-text-none-clickable");
    }

});

// secondHeaderLogoHover.addEventListener('click', () => {
//     secondHeaderNavigation.style.pointerEvents = "all";
//     secondHeaderLogoHover.style.opacity = "0";
//     secondHeaderLogoActiv.style.opacity = "1";
//     secondHeaderNavMain.style.opacity = "1";
//     secondHeaderNavMain.style.pointerEvents = "all";
//     secondHeaderNavInfo.style.opacity = "1";
//     secondHeaderNavInfo.style.pointerEvents = "all";
//     secondHeaderNavServices.style.opacity = "1";
//     secondHeaderNavServices.style.pointerEvents = "all";
//     secondHeaderNavContacts.style.opacity = "1";
//     secondHeaderNavContacts.style.pointerEvents = "all";
//     secondHeaderNavReviews.style.opacity = "1";
//     secondHeaderNavReviews.style.pointerEvents = "all";
//     secondHeaderLanguageButton.style.opacity = "1";
//     secondHeaderLanguageButton.style.pointerEvents = "all";
//     secondHeaderDividingLine.style.opacity = "1";
//     secondHeaderDividingLine.style.pointerEvents = "all";
// });

// secondHeader.addEventListener('mouseleave', () => {
//     secondHeaderNavigation.style.pointerEvents = "";
//     secondHeaderLogoHover.style.opacity = "0.5";
//     secondHeaderLogoActiv.style.opacity = "0";
//     secondHeaderNavMain.style.opacity = "0";
//     secondHeaderNavMain.style.pointerEvents = "none";
//     secondHeaderNavInfo.style.opacity = "0";
//     secondHeaderNavInfo.style.pointerEvents = "none";
//     secondHeaderNavServices.style.opacity = "0";
//     secondHeaderNavServices.style.pointerEvents = "none";
//     secondHeaderNavContacts.style.opacity = "0";
//     secondHeaderNavContacts.style.pointerEvents = "none";
//     secondHeaderNavReviews.style.opacity = "0";
//     secondHeaderNavReviews.style.pointerEvents = "none";
//     secondHeaderLanguageButton.style.opacity = "0";
//     secondHeaderLanguageButton.style.pointerEvents = "none";
//     secondHeaderDividingLine.style.opacity = "0";
//     secondHeaderDividingLine.style.pointerEvents = "none";
// });

// secondHeaderLogoHover.addEventListener('mouseenter', () => {
//     secondHeaderLogoHover.style.opacity = "1";
// });

const lightAnimation = (data, id) => {
    const letter = document.getElementById(id);
    let summ = 0;
    for (let i = 0; i < data.length; i++) {
        summ += data[i];
        setTimeout(() => {
            letter.style.opacity = i % 2 ? "0" : "1";
        }, summ);
    }
};



thirdSectionButtonMore.addEventListener('click', () => {
    if (showNotification) {
        setTimeout(() => {
            modalNotificationBlock.style.opacity = "1";
        }, 1000);
        setTimeout(() => {
            modalNotificationBlock.style.opacity = "";
        }, 4000);

        showNotification = false;
    }

    activAnimationThirdSection = true;
    buttonMoreBlock.style.display = "block";
    setTimeout(() => {
        buttonMoreBlock.style.opacity = "1";
        thirdSectionText.style.opacity = "0";
        thirdSectionLowerPart.style.opacity = "0";
        thirdSectionLowerPart.style.display = "none";
        thirdSectionTitle.style.opacity = "0";
        thirdSectionImageBackground.style.opacity = "1";
        thirdSectionImage.style.transform = "rotate3d(0, 1, 0, 0deg)";
        thirdSectionImage.style.width = "28.125vw";
        thirdSectionImage.style.height = "28.125vw";
        thirdSectionImage.style.background = `linear-gradient(0deg, rgba(232, 232, 232, 0.6), rgba(232, 232, 232, 0.6)), linear-gradient(179.79deg, rgba(255, 255, 255, 0.12) 0.23%, rgba(0, 136, 204, 0.5) 61.99%, rgba(255, 255, 255, 0.12) 99.87%)`
        thirdSectionMainContentRightPartLine.style.height = "70.57292vw";
        thirdSectionMainContentRightPartLine.style.background = "linear-gradient(to bottom, rgba(46, 46, 46, 0) 0%, rgba(46, 46, 46, 0.3) 25%, rgba(46, 46, 46, 0) 100%)";  
        thirdSectionMainContentRightPartLine.style.top = "-10vw";

        let selCat = arrayDataOfService.map((service) => service.title)[activNumber];
        const category = arrayDataOfService[activNumber]
        if (selCat !== selectCategory && arrayDataOfService.map((service) => service.title).includes(selCat) && selectLang === "eng") {
            buttonMoreTitle.textContent = selCat.eng;
            buttonMoreTitle.style.fontFamily = "";
        } else {
            buttonMoreTitle.textContent = selCat.rus;
        }

        category.prices.map((serviceData, number) => {
            const { nameOfServise, cost } = serviceData;
            const priceName = document.getElementById(`button-more-price-services-${number}`);
            const priceMoney = document.getElementById(`button-more-price-money-${number}`);

            if (selectLang === "rus") {
                priceName.textContent = nameOfServise.rus;
            } else {
                priceName.textContent = nameOfServise.eng;
            }
            priceMoney.textContent = `£${cost}`;
        })

        if (selectLang === "eng") {
            category.description.eng.map((selfText, number) => {
                const textBlock = document.getElementById(`button-more-description-text-${number}`);
                textBlock.textContent = selfText;
            })
        } else {
            category.description.rus.map((selfText, number) => {
                const textBlock = document.getElementById(`button-more-description-text-${number}`);
                textBlock.textContent = selfText;
            })
        }
    }, 1);
})

let oldActivService = null;
let activAnmimationTitle = true;
const buttonMoreInterestBlock = document.getElementById("interest-block");
const buttonMoreTitleSvgBlock = document.getElementById("button-more-title-svg-block");

buttonMoreTitleSvgBlock.addEventListener('click', () => {
    if (oldActivService !== null) {
        const oldInterestBlock = document.getElementById(`interest-block-${oldActivService}`);
        const oldInterestBlockSvg = document.getElementById(`interest-block-svg-${oldActivService}`);
        oldInterestBlock.classList = "interest-block";
        oldInterestBlockSvg.classList = "interest-block-svg";
    }

    const currentTitle = arrayDataOfService[activNumber].title[selectLang];
    const interestBlock = document.getElementById(`interest-block-${activNumber}`);
    const interestBlockSvg = document.getElementById(`interest-block-svg-${activNumber}`);

    interestBlock.classList = "nonActivService";
    interestBlockSvg.classList = "nonActivServiceSvg";

    if (activAnmimationTitle) {
        setTimeout(() => {
            buttonMoreTitle.style.opacity = "0";
            buttonMoreInterestBlock.style.display = "flex";
            setTimeout(() => {
                buttonMoreInterestBlock.style.opacity = "1";
                if (selectLang === "eng") {
                    buttonMoreTitle.textContent = "What Interests You?";
                } else {
                    buttonMoreTitle.textContent = "Что Вас Интересует?";
                }
                setTimeout(() => {
                    buttonMoreTitle.style.opacity = "";

                }, 200);
            }, 200);
        }, 1);

        activAnmimationTitle = false;

    } else {

        setTimeout(() => {
            buttonMoreTitle.style.opacity = "0";
            setTimeout(() => {
                buttonMoreInterestBlock.style.opacity = "0";
                buttonMoreTitle.textContent = currentTitle;
                setTimeout(() => {
                    buttonMoreTitle.style.opacity = "";
                    buttonMoreInterestBlock.style.display = "none";
                }, 200);
            }, 200);
        }, 1);
        activAnmimationTitle = true;

    }

    oldActivService = activNumber;
});

const updateActivService = () => {
    const currentService = arrayDataOfService[activNumber];

    buttonMoreTitle.textContent = currentService.title[selectLang];
    imgBlock.src = `/img/svg/desktop/src/${[selectTheme]}/third-section-lower-part ${currentService.title.eng}.svg`;


    for (let index = 0; index < currentService.prices.length; index++) {
        const priceName = document.getElementById(`button-more-price-services-${index}`);
        const priceCost = document.getElementById(`button-more-price-money-${index}`);
        priceName.textContent = currentService.prices[index].nameOfServise[selectLang];
        priceCost.textContent = "£" + currentService.prices[index].cost;
    }

    for (let index = 0; index < currentService.description[selectLang].length; index++) {
        const currentDescription = document.getElementById(`button-more-description-text-${index}`);
        currentDescription.textContent = currentService.description[selectLang][index];
    }
}

const buttonMoreLowerPartButtonRight = document.getElementById("button-more-lower-part-button-right");
const buttonMoreLowerPartButtonLeft = document.getElementById("button-more-lower-part-button-left");

buttonMoreLowerPartButtonRight.addEventListener('click', () => {
    activNumber++
    if (activNumber === arrayDataOfService.length) {
        activNumber = 0;
    }
    updateActivService()
})

buttonMoreLowerPartButtonLeft.addEventListener('click', () => {
    activNumber--
    if (activNumber < 0) {
        activNumber = arrayDataOfService.length - 1;
    }
    updateActivService()
})

interestBlockAllService.addEventListener('click', () => {
    activAnmimationTitle = true;
    activAnimationThirdSection = false;
    buttonMoreBlock.style.display = "";
    setTimeout(() => {
        buttonMoreBlock.style.opacity = "";
        thirdSectionText.style.opacity = "1";
        thirdSectionLowerPart.style.opacity = "1";
        thirdSectionLowerPart.style.display = "";
        thirdSectionImage.style.width = "34.89583vw";
        thirdSectionImage.style.height = "34.89583vw";
        thirdSectionImage.style.backgroundImage = "linear-gradient(145.28deg, rgba(0, 34, 53, 0.8) 18.9%, rgba(0, 17, 27, 0.6) 95.94%)";
        thirdSectionImageBackground.style.opacity = "0";
        buttonMoreInterestBlock.style.display = "";
        thirdSectionTitle.style.opacity = "1";

        thirdSectionMainContentRightPartLine.style.height = "";
        thirdSectionMainContentRightPartLine.style.backgroundImage = "";
        thirdSectionMainContentRightPartLine.style.top = "";
        setTimeout(() => {
            thirdSectionImage.style.transform = "rotate3d(0, 1, 0, 30deg)";
            thirdSectionImage.style.boxShadow = "rgb(2, 133, 204) 0px 0px 8px 0px";
        }, 500);
    })
})


const capitalize = (str) => {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}



fourthSectionChoiceOfService.addEventListener('click', (event) => {
    event.stopPropagation();
    const newDropListWrapper = document.createElement('div');
    newDropListWrapper.id = "drop-list";
    dropListWrapper.style.height = "17.5vw"

    if (selectLang === "eng") {
        const actualityCategory = arrayDataOfService.map((service) => service.title.eng).filter((textCategory) => {
            return textCategory !== selectCategory;
        });
        actualityCategory.forEach(textSelectCategoty => {
            const newDropListPoint = document.createElement('div');
            newDropListPoint.textContent = textSelectCategoty;
            newDropListPoint.classList = "drop-list-item";
            newDropListPoint.id = textSelectCategoty;
            newDropListPoint.style.fontFamily = "";

            newDropListPoint.addEventListener('click', (event) => {
                event.stopPropagation();
                selectCategory = textSelectCategoty;
                choiceOfServicePlaceholder.textContent = textSelectCategoty;
                newDropListWrapper.style.opacity = "0";
                fourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
                fourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
                newDropListWrapper.style.pointerEvents = "none";
                allInputsHave();
            });
            newDropListWrapper.appendChild(newDropListPoint);
        });
    } else {
        const actualityCategory = arrayDataOfService.map((service) => service.title.rus).filter((textCategory) => {
            return textCategory !== selectCategory;
        });
        actualityCategory.forEach(textSelectCategoty => {
            const newDropListPoint = document.createElement('div');
            newDropListPoint.textContent = textSelectCategoty;
            newDropListPoint.classList = "drop-list-item";
            newDropListPoint.id = textSelectCategoty;

            newDropListPoint.addEventListener('click', (event) => {
                event.stopPropagation();
                selectCategory = textSelectCategoty;
                choiceOfServicePlaceholder.textContent = textSelectCategoty;
                newDropListWrapper.style.opacity = "0";
                fourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
                fourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
                newDropListWrapper.style.pointerEvents = "none";
                allInputsHave();
            });
            newDropListWrapper.appendChild(newDropListPoint);
        });
    }

    newDropListWrapper.style.opacity = "1";
    fourthSectionChoiceOfServiceArrow.style.rotate = "-90deg";
    fourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 0)";
    newDropListWrapper.style.pointerEvents = "all";
    choiceOfServicePlaceholder.style.color = "var(--blue)";
    const possibleDublicate = document.getElementById("drop-list");
    if (possibleDublicate) {
        dropListWrapper.removeChild(possibleDublicate);
    }
    dropListWrapper.appendChild(newDropListWrapper);

    dropListWrapper.addEventListener('mouseleave', () => {
        if (!selectCategory) {
            choiceOfServicePlaceholder.style.color = "var(--darkBlue)";
        };
        newDropListWrapper.style.opacity = "0";
        dropListWrapper.style.height = "";
        fourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
        newDropListWrapper.style.pointerEvents = "none";
        fourthSectionChoiceOfServiceArrow.style.rotate = "";
    });
});


const textarea = document.getElementById("textarea");





thirdSectionButtonOrder.addEventListener('click', setupAndTranslateForSelectService);

const voidInput = () => {
    submitButtonFourthSection.className = "";
}

inputFirstName.addEventListener('input', () => {
    const inputValue = inputFirstName.value;
    let editValue = inputValue.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
    if (editValue.length > 10) {
        editValue = editValue.slice(0, 10);
    }
    if (editValue.length > 0) {
        correctImgFirstName.style.opacity = 1;
        allInputsHave();
    } else {
        correctImgFirstName.style.opacity = 0;
        voidInput();
    }
    inputFirstName.value = capitalize(editValue);
});

inputLastName.addEventListener('input', () => {
    const inputValue = inputLastName.value;
    let editValue = inputValue.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
    if (editValue.length > 10) {
        editValue = editValue.slice(0, 10);
    }
    if (editValue.length > 0) {
        correctImgLastName.style.opacity = 1;
        allInputsHave();
    } else {
        correctImgLastName.style.opacity = 0;
        voidInput();
    }
    inputLastName.value = capitalize(editValue);
});

inputPhone.addEventListener('input', () => {
    const inputValue = inputPhone.value;
    let editValue = inputValue.replace(/[^0-9+]/g, '');
    if (editValue.length > 12) {
        editValue = editValue.slice(0, 12);
    }
    if (editValue.length > 0) {
        correctImgPhone.style.opacity = 1;
        allInputsHave();
    } else {
        correctImgPhone.style.opacity = 0;
        voidInput();
    }
    inputPhone.value = capitalize(editValue);


});

inputEmail.addEventListener('input', () => {
    const inputValue = inputEmail.value;
    let editValue = inputValue.replace(/[^a-zA-Z1-9@_\.-]/g, '');
    if (editValue.length > 20) {
        editValue = editValue.slice(0, 20);
    }
    if (editValue.length > 0) {
        correctImgEmail.style.opacity = 1;
        allInputsHave();
    } else {
        correctImgEmail.style.opacity = 0;
        voidInput();
    }
    inputEmail.value = editValue;
});


const submitButtonFourthSection = document.getElementById('send-form-submit');
const requiredFieldsText = document.getElementById("required-fields");
const correctlyText = document.getElementById("correctly");





submitButtonFourthSection.addEventListener('mouseenter', () => {
    errorImgFirstName.style.pointerEvents = "all";
    errorImgLastName.style.pointerEvents = "all";
    errorImgPhone.style.pointerEvents = "all";
    errorImgEmail.style.pointerEvents = "all";
    let resultChecked = true;

    if (!inputFirstName.value.length) {
        errorImgFirstName.style.opacity = 1;
        resultChecked = false;
        submitButtonFourthSection.style.left = "2.34375vw";
    } else {
        errorImgFirstName.style.opacity = 0;
        requiredFieldsText.style.opacity = 0;
        submitButtonFourthSection.style.left = "13.85417vw";
    }
    if (!inputLastName.value.length) {
        errorImgLastName.style.opacity = 1;
        resultChecked = false;
        submitButtonFourthSection.style.left = "2.34375vw";
    } else {
        errorImgLastName.style.opacity = 0;
        requiredFieldsText.style.opacity = 0;
        submitButtonFourthSection.style.left = "13.85417vw";
    }
    if (!inputPhone.value.length) {
        errorImgPhone.style.opacity = 1;
        resultChecked = false;
        submitButtonFourthSection.style.left = "2.34375vw";
    } else {
        errorImgPhone.style.opacity = 0;
        requiredFieldsText.style.opacity = 0;
        submitButtonFourthSection.style.left = "13.85417vw";
    }
    if (!inputEmail.value.length) {
        errorImgEmail.style.opacity = 1;
        resultChecked = false;
        submitButtonFourthSection.style.left = "2.34375vw";
    } else {
        errorImgEmail.style.opacity = 0;
        requiredFieldsText.style.opacity = 0;
        submitButtonFourthSection.style.left = "13.85417vw";
    }

    if (!resultChecked) {
        submitButtonFourthSection.className = " ";
        requiredFieldsText.style.opacity = 1;
        correctlyText.style.opacity = 0;
        submitButtonFourthSection.style.left = "2.34375vw";
    } else if (!isValidEmail(inputEmail.value)) {
        correctlyText.style.opacity = 1;
        requiredFieldsText.style.opacity = 0;
        submitButtonFourthSection.style.left = "2.34375vw";
        submitButtonFourthSection.className = " ";
        errorImgEmail.style.opacity = 1;
        correctImgEmail.style.opacity = 0;
    } else {
        submitButtonFourthSection.className = "send-form-submit-activ";
        requiredFieldsText.style.opacity = 0;
        correctlyText.style.opacity = 0;
    }
}
);

document.addEventListener('click', () => {

    errorImgFirstName.style.pointerEvents = "none";
    errorImgLastName.style.pointerEvents = "none";
    errorImgPhone.style.pointerEvents = "none";
    errorImgEmail.style.pointerEvents = "none";
    let resultChecked = true;

    if (!inputFirstName.value.length) {
        errorImgFirstName.style.opacity = 0;
        requiredFieldsText.style.opacity = 0;
        submitButtonFourthSection.style.left = "13.85417vw";
        resultChecked = false;
    }
    if (!inputLastName.value.length) {
        resultChecked = false;
        errorImgLastName.style.opacity = 0;
        requiredFieldsText.style.opacity = 0;
        submitButtonFourthSection.style.left = "13.85417vw";
    }
    if (!inputPhone.value.length) {
        resultChecked = false;
        errorImgPhone.style.opacity = 0;
        requiredFieldsText.style.opacity = 0;
        submitButtonFourthSection.style.left = "13.85417vw";
    }
    if (!inputEmail.value.length) {
        resultChecked = false;
        errorImgEmail.style.opacity = 0;
        requiredFieldsText.style.opacity = 0;
        submitButtonFourthSection.style.left = "13.85417vw";
    }
    if (!resultChecked) {
        requiredFieldsText.style.opacity = 0;
        correctlyText.style.opacity = 0;
        errorImgEmail.style.opacity = 0;

    } else {
        submitButtonFourthSection.style.left = "13.85417vw";
        requiredFieldsText.style.opacity = 0;
    }

    if (!isValidEmail(inputEmail.value)) {
        requiredFieldsText.style.opacity = 0;
        correctlyText.style.opacity = 0;
        errorImgEmail.style.opacity = 0;
    }

})

const emptyFieldFirstName = document.getElementById("empty-field-0");
const emptyFieldLastName = document.getElementById("empty-field-1");
const emptyFieldPhone = document.getElementById("empty-field-2");
const emptyFieldEmail = document.getElementById("empty-field-3");

errorImgFirstName.addEventListener('mouseenter', () => {
    emptyFieldFirstName.style.opacity = "1";
})

errorImgFirstName.addEventListener('mouseleave', () => {
    emptyFieldFirstName.style.opacity = "0";
})

errorImgLastName.addEventListener('mouseenter', () => {
    emptyFieldLastName.style.opacity = "1";
})

errorImgLastName.addEventListener('mouseleave', () => {
    emptyFieldLastName.style.opacity = "0";
})

errorImgPhone.addEventListener('mouseenter', () => {
    emptyFieldPhone.style.opacity = "1";
})

errorImgPhone.addEventListener('mouseleave', () => {
    emptyFieldPhone.style.opacity = "0";
})

errorImgEmail.addEventListener('mouseenter', () => {
    emptyFieldEmail.style.opacity = "1";
})

errorImgEmail.addEventListener('mouseleave', () => {
    emptyFieldEmail.style.opacity = "0";
})


let number = 0;
let float = false;

const upperloadReviews = (numberActivReviews, direction) => {
    if (!float) {
        number = numberActivReviews >= 0 ? numberActivReviews % reviews.length : (reviews.length - 1);
        const data = reviews[number];
        float = true;
        upperBlock.style.opacity = "0";
        lowerBlock.style.opacity = "0";
        if (direction) {
            upperBlock.style.left = "-5vw";
            lowerBlock.style.left = "-5vw";
        } else {
            upperBlock.style.left = "19vw";
            lowerBlock.style.left = "19vw";
        }
        setTimeout(() => {
            upperBlock.style.opacity = "";
            lowerBlock.style.opacity = "";
            upperBlock.style.left = "";
            lowerBlock.style.left = "";
            float = false;
        }, 500);
        setTimeout(() => {
            if (selectLang === "eng") {
                reviewsUpperName.textContent = data.top.title.eng;
                reviewsUpperUpperText.textContent = data.top.upperText.eng;
                reviewsUpperLowerText.textContent = data.top.lowerText.eng;
                reviewsLowerName.textContent = data.bottom.title.eng;
                reviewsLowerUpperText.textContent = data.bottom.upperText.eng;
                reviewsLowerLowerText.textContent = data.bottom.lowerText.eng;
            } else {
                reviewsUpperName.textContent = data.top.title.rus;
                reviewsUpperUpperText.textContent = data.top.upperText.rus;
                reviewsUpperLowerText.textContent = data.top.lowerText.rus;
                reviewsLowerName.textContent = data.bottom.title.rus;
                reviewsLowerUpperText.textContent = data.bottom.upperText.rus;
                reviewsLowerLowerText.textContent = data.bottom.lowerText.rus;
            }
            reviewsUpperImg.src = `/img/png/reviews-img-${data.top.title.eng}.png`;
            reviewsLowerImg.src = `/img/png/reviews-img-${data.bottom.title.eng}.png`;
        }, 400);
    }
}

upperloadReviews(0);

reviewsArrowLeft.addEventListener('click', () => {
    upperloadReviews(--number, true)
})

reviewsArrowRight.addEventListener('click', () => {
    upperloadReviews(++number, false)
})

const infoArrow = document.getElementById("navigation-button-first-section-choice-info-arrow");

headerNavInfo.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 0.563,
        behavior: 'smooth'
    });
})

headerNavInfo.addEventListener('mouseenter', () => {
    infoArrow.style.opacity = "1";
})

headerNavInfo.addEventListener('mouseleave', () => {
    infoArrow.style.opacity = "";
})

const servicesArrow = document.getElementById("navigation-button-first-section-choice-services-arrow");


headerNavServices.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 1.13,
        behavior: 'smooth'
    });
})

headerNavServices.addEventListener('mouseenter', () => {
    servicesArrow.style.opacity = "1";
})

headerNavServices.addEventListener('mouseleave', () => {
    servicesArrow.style.opacity = "";
})

secondSectionButtonServices.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 1.13,
        behavior: 'smooth'
    });
})

const contactsArrow = document.getElementById("navigation-button-first-section-choice-contacts-arrow");

headerNavContacts.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 1.97,
        behavior: 'smooth'
    });
})

headerNavContacts.addEventListener('mouseenter', () => {
    contactsArrow.style.opacity = "1";
})

headerNavContacts.addEventListener('mouseleave', () => {
    contactsArrow.style.opacity = "";
})

secondSectionButtonContacts.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 1.97,
        behavior: 'smooth'
    });
})

const reviewsArrow = document.getElementById("navigation-button-first-section-choice-reviews-arrow");

headerNavReviews.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 2.528,
        behavior: 'smooth'
    });
})
headerNavReviews.addEventListener('mouseenter', () => {
    reviewsArrow.style.opacity = "1";
})

headerNavReviews.addEventListener('mouseleave', () => {
    reviewsArrow.style.opacity = "";
})
// secondHeaderNavMain.addEventListener('click', () => {
//     window.scrollTo({
//         top: window.innerWidth * -0.1,
//         behavior: 'smooth'
//     });
// })

// secondHeaderNavInfo.addEventListener('click', () => {
//     window.scrollTo({
//         top: window.innerWidth * 0.563,
//         behavior: 'smooth'
//     });
// })


// secondHeaderNavServices.addEventListener('click', () => {
//     window.scrollTo({
//         top: window.innerWidth * 1.13,
//         behavior: 'smooth'
//     });
// })

// secondHeaderNavContacts.addEventListener('click', () => {
//     window.scrollTo({
//         top: window.innerWidth * 1.97,
//         behavior: 'smooth'
//     });
// })

// secondHeaderNavReviews.addEventListener('click', () => {
//     window.scrollTo({
//         top: window.innerWidth * 2.528,
//         behavior: 'smooth'
//     });
// })



// secondHeaderLanguageButton.addEventListener('click', () => {
//     switchLocalization()
//     refreshDataForLocalization()

// });

const uploadLinks = () => {
    const alternativeContactPhone = document.getElementById("alternative-contact-phone");
    alternativeContactPhone.addEventListener('click', () => {
        window.location.href = `tel:${dataContats.Phone}`;
    })
}

uploadLinks()