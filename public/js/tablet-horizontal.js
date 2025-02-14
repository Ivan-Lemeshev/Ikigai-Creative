import localizationWrapper from "./localization-data.js";
import arrayPriceList from "./arrayPriceList.js";
import { ideasArrayUp, ideasArrayDown, textForApplication } from "./slogans.js";
import reviews from "./reviews.js";
import dataContats from "./links.js";
import themeWrapper from "./switchTheme-data.js"
import url from "./url.js"

const thNavButton = document.getElementById("th-nav-button");
const thNavigationBlock = document.getElementById("th-navigation-block");
const thNavigationBlockItem0 = document.getElementById("th-navigation-block-item-0");
const thNavigationBlockItem1 = document.getElementById("th-navigation-block-item-1");
const thNavigationBlockItem2 = document.getElementById("th-navigation-block-item-2");
const thNavigationBlockItem3 = document.getElementById("th-navigation-block-item-3");
const thNavigationBlockItem4 = document.getElementById("th-navigation-block-item-4");

const thThirdSectionImg = document.getElementById("th-third-section-main-img");
const thThirdSectionTopArrow = document.getElementById("th-third-section-top-arrow");
const thThirdSectionBottomArrow = document.getElementById("th-third-section-bottom-arrow");

const thPriceListXMark = document.getElementById("th-price-list-x-mark");

const thMainSendForm = document.getElementById("th-main-send-form");
const thInputFirstName = document.getElementById("th-input-first-name");
const thInputLastName = document.getElementById("th-input-last-name");
const thInputPhone = document.getElementById("th-input-phone");
const thInputEmail = document.getElementById("th-input-email");
const thTextarea = document.getElementById("th-textarea");
const thFourthSectionChoiceOfService = document.getElementById("th-choice-of-service");

const thReviewsArrowLeft = document.getElementById("th-five-section-button-left");
const thReviewsArrowRight = document.getElementById("th-five-section-button-right");
const choiceServecesSquare = document.getElementById("th-choice-serveces-square");

let thSelectTheme = "light";

const thSwitchTheme = () => {
    thSelectTheme = thSelectTheme === "light" ? "dark" : "light";
    for (let id in themeWrapper) { // перебираем все айдишники
        const data = themeWrapper[id]; // пой айди получаю информацию 
        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        const allStyles = data.styles;
        element.style.color = allStyles[thSelectTheme].color;
        element.style.background = allStyles[thSelectTheme].background;
    }
}

const thRefreshTheme = () => {

    const thPriceListBlock = document.getElementById("th-price-list-block");
    const thPlaceholderTextarea = document.getElementById("th-placeholder-textarea");
    const thFourSectionContacts = document.getElementById("th-four-section-contacts");
    const thReviewsTextWrapper0 = document.getElementById("th-reviews-text-wrapper-0");
    const thReviewsTextWrapper1 = document.getElementById("th-reviews-text-wrapper-1");

    thThirdSectionImg.src = `/img/svg/tablet-horizontal/src/${[thSelectTheme]}/th-third-section-img Creative Design.svg`;
    thThirdSectionTopArrow.src = `/img/svg/tablet-horizontal/src/${[thSelectTheme]}/th-third-section-top-arrow.svg`;
    thThirdSectionBottomArrow.src = `/img/svg/tablet-horizontal/src/${[thSelectTheme]}/th-third-section-bottom-arrow.svg`;
    thPriceListXMark.src = `/img/svg/tablet-horizontal/src/${[thSelectTheme]}/th-price-list-x-mark.svg`;
    thReviewsArrowLeft.src = `/img/svg/tablet-horizontal/src/${[thSelectTheme]}/th-five-section-button-left.svg`;
    thReviewsArrowRight.src = `/img/svg/tablet-horizontal/src/${[thSelectTheme]}/th-five-section-button-right.svg`;


    const setImg = document.querySelectorAll("#th-third-section-right-services-wrapper img");
    for (let index = 0; index < setImg.length; index++) {
        if (thSelectTheme === "dark") {
            setImg[index].src = setImg[index].src.replace("light", "dark")
        } else {
            setImg[index].src = setImg[index].src.replace("dark", "light")
        }
    }

    const setH3 = document.querySelectorAll("#th-third-section-right-services-wrapper h3");
    for (let index = 0; index < setH3.length; index++) {
        if (thSelectTheme === "dark") {
            setH3[index].classList = setH3[index].classList.replace("light", "dark")
        } else {
            setH3[index].classList = setH3[index].classList.replace("dark", "light")
        }
    }

    if (thSelectTheme === "light") {
        thPriceListBlock.style.border = "0.054vw solid var(--dtSeparationLine)";
        thMainSendForm.style.border = "0.054vw solid var(--dtSeparationLine)";
        thInputFirstName.classList = "th-input-light-theme";
        thInputLastName.classList = "th-input-light-theme";
        thInputPhone.classList = "th-input-light-theme";
        thInputEmail.classList = "th-input-light-theme";
        thTextarea.classList = "th-textarea-light";
        thFourthSectionChoiceOfService.style.borderBottom = "0.054vw solid var(--dtSeparationLine)";
        thPlaceholderTextarea.style.borderBottom = "0.054vw solid var(--dtSeparationLine)";
        thPlaceholderTextarea.style.borderTop = "0.054vw solid var(--dtSeparationLine)";
        thFourSectionContacts.style.border = "0.054vw solid rgba(43, 43, 43, 0.5)";
        thReviewsTextWrapper0.style.border = "0.054vw solid rgba(46, 46, 46, 0.5)";
        thReviewsTextWrapper1.style.border = "0.054vw solid rgba(46, 46, 46, 0.5)";
        choiceServecesSquare.style.border = "";
        document.documentElement.style.setProperty('--svgColor', '#2E2E2E');

    } else {
        thPriceListBlock.style.border = "0.054vw solid var(--ltSeparationLine)";
        thMainSendForm.style.border = "0.054vw solid var(--ltSeparationLine)";
        thInputFirstName.classList = "th-input-dark-theme";
        thInputLastName.classList = "th-input-dark-theme";
        thInputPhone.classList = "th-input-dark-theme";
        thInputEmail.classList = "th-input-dark-theme";
        thTextarea.classList = "th-textarea-dark";
        thFourthSectionChoiceOfService.style.borderBottom = "0.054vw solid var(--ltSeparationLine)";
        thPlaceholderTextarea.style.borderBottom = "0.054vw solid var(--ltSeparationLine)";
        thPlaceholderTextarea.style.borderTop = "0.054vw solid var(--ltSeparationLine)";
        thFourSectionContacts.style.border = "0.054vw solid rgba(214, 214, 214, 0.5)";
        thReviewsTextWrapper0.style.border = "0.054vw solid rgba(214, 214, 214, 0.5)";
        thReviewsTextWrapper1.style.border = "0.054vw solid rgba(214, 214, 214, 0.5)";
        choiceServecesSquare.style.border = "0.10799vw var(--ltSeparationLine) solid";
        document.documentElement.style.setProperty('--svgColor', '#F3F3F3');
    }
}

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
const thThirdSectionButtonOfPriceList = document.getElementById("th-third-section-button-price-list");
const thPriceListWrapper = document.getElementById("th-price-list-wrapper");

let thAngel = 0;
let thNumberOfActivAnimation = 0;
let thActivNumber = 0;

const thThirdSectionTitle = document.getElementById("th-third-section-title-of-service");
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

const thLangBackground = document.getElementById("th-navigation-block-lang-switch-button-background");
const thLangFace = document.getElementById("th-navigation-block-lang-switch-button-face");
const thLangWrapperImg = document.getElementById("th-navigation-block-lang-button");
const thLangMenu = document.getElementById("th-navigation-block-lang-button-menu");
const thNavigationTitle = document.getElementById("th-navigation-block-title");

const thNavigationBlockThemeButtonWrapper = document.getElementById("th-navigation-block-theme-button");
const thNavigationBlockThemeButtonMenu = document.getElementById("th-navigation-block-theme-button-menu");
const thThemeBackground = document.getElementById("th-navigation-block-theme-switch-button-background");
const thThemeFace = document.getElementById("th-navigation-block-theme-switch-button-face");

const thNavigationBlockMenuButtonwrapper = document.getElementById("th-navigation-block-menu-button");

let thSelectCategory = "";

let thSelectLang = "eng";
const thSwitchLocalization = () => {
    thSelectLang = thSelectLang === "eng" ? "rus" : "eng";
    for (let id in localizationWrapper) { // перебираем все айдишники
        const data = localizationWrapper[id]; // пой айди получаю информацию 

        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        element.textContent = data[thSelectLang]; //   обновляю текст
    }
}

let nightMode = false;
let language = false;


thLangWrapperImg.addEventListener('click', () => {
    nightMode = true;
    if (!language) {
        language = true;
        thLangWrapperImg.style.opacity = "0";
        thNavigationBlockThemeButtonWrapper.style.right = "6.2635vw";
        thNavigationBlockMenuButtonwrapper.style.right = "1.94384vw";
        thLangMenu.style.display = "block";
        thNavigationTitle.style.opacity = "0";

        setTimeout(() => {
            thLangMenu.style.opacity = "1";
            setTimeout(() => {
                thLangWrapperImg.style.display = "none";
                thNavigationTitle.textContent = "Language";
                setTimeout(() => {
                    thNavigationTitle.style.opacity = "1";
                }, 1);
            }, 300);
        }, 1);
    } else {
        thLangWrapperImg.style.opacity = "0";
        thNavigationBlockThemeButtonWrapper.style.right = "6.2635vw";
        thNavigationBlockThemeButtonMenu.style.opacity = "";
        thLangMenu.style.display = "block";
        thNavigationTitle.textContent = "Language";
        thNavigationTitle.style.opacity = "";
        setTimeout(() => {
            thLangMenu.style.opacity = "1";
            thLangWrapperImg.style.display = "none";
            thNavigationBlockThemeButtonWrapper.style.display = "";
            thNavigationBlockThemeButtonMenu.style.display = "";
            setTimeout(() => {
                thNavigationBlockThemeButtonWrapper.style.opacity = "";
            }, 1);
        }, 300);


    }

});

thNavigationBlockThemeButtonWrapper.addEventListener('click', () => {
    language = true;
    if (!nightMode) {
        nightMode = true;
        thNavigationBlockThemeButtonWrapper.style.opacity = "0";
        thNavigationBlockThemeButtonMenu.style.display = "block";
        thNavigationTitle.style.opacity = "0"
        thNavigationBlockMenuButtonwrapper.style.right = "1.94384vw";
        setTimeout(() => {
            thNavigationBlockThemeButtonWrapper.style.display = "none";
            thNavigationBlockThemeButtonMenu.style.opacity = "1";
        }, 1);
    } else {
        thNavigationBlockThemeButtonWrapper.style.opacity = "0";
        thNavigationBlockThemeButtonMenu.style.display = "block";
        thNavigationTitle.style.opacity = "0";
        thNavigationBlockThemeButtonWrapper.style.right = "";
        thLangWrapperImg.style.display = "";
        thLangMenu.style.opacity = "";
        thNavigationTitle.style.opacity = "0";
        setTimeout(() => {
            thNavigationBlockThemeButtonWrapper.style.display = "none";
            thNavigationBlockThemeButtonMenu.style.opacity = "1";
        }, 1);

        setTimeout(() => {
            thLangWrapperImg.style.opacity = "";
            thLangMenu.style.display = "";
        }, 300);
    }
})


thNavigationBlockMenuButtonwrapper.addEventListener('click', () => {
    language = false;
    nightMode = false;
    thLangWrapperImg.style.display = "";
    thNavigationBlockThemeButtonWrapper.style.right = "";
    thNavigationBlockMenuButtonwrapper.style.right = "";
    thNavigationBlockThemeButtonWrapper.style.opacity = "";

    thNavigationTitle.style.opacity = "0";
    thNavigationBlockMenuButtonwrapper.style.right = "";
    setTimeout(() => {
        thLangWrapperImg.style.opacity = "";
        thLangMenu.style.opacity = "0";
        thNavigationBlockThemeButtonWrapper.style.display = "";
        setTimeout(() => {
            if (thSelectLang === "eng") {
                thNavigationTitle.textContent = "Navigation";
            } else {
                thNavigationTitle.textContent = "Навигация";
            }
            thLangMenu.style.display = "";
            setTimeout(() => {
                thNavigationBlockThemeButtonMenu.style.display = "";
                thNavigationBlockThemeButtonMenu.style.opacity = "";
                thNavigationTitle.style.opacity = "1";
            }, 1);
        }, 300);
    }, 1);
})


thThemeBackground.addEventListener('click', () => {
    thSwitchTheme();
    thRefreshTheme();
    if (thSelectTheme === "dark") {
        thThemeFace.style.right = "0vw";
    } else {
        thThemeFace.style.right = "1.4vw";
    }
    thNavigationBlock.style.right = "";
    setTimeout(() => {
        thNavigationBlock.style.display = "";
    }, 500);
})

thThemeFace.addEventListener('click', () => {
    thSwitchTheme();
    thRefreshTheme();
    if (thSelectTheme === "dark") {
        thThemeFace.style.right = "0vw";
    } else {
        thThemeFace.style.right = "1.4vw";
    }
    thNavigationBlock.style.right = "";
    setTimeout(() => {
        thNavigationBlock.style.display = "";
    }, 500);
})


const thSubmitButtonFourthSection = document.getElementById("th-send-form-submit");
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
    })

    if (thSelectLang === "rus") {
        thInputFirstName.placeholder = "Имя";
        thInputLastName.placeholder = "Фамилия";
        thInputPhone.placeholder = "Телефон";
        thTextarea.placeholder = "В этом поле вы можете указать указать любые дополнительные данные или пожелания по заказу."
        thFooterEng.style.display = "none";
        thFooterRus.style.display = "block";
    } else {
        thCentralText.style.fontFamily = "";
        thInputFirstName.placeholder = "First Name";
        thInputLastName.placeholder = "Last Name";
        thInputPhone.placeholder = "Phone";
        thTextarea.placeholder = "In this field, you can provide any additional details or requests for your order, including your preferred method of contact.";
        thFooterEng.style.display = "block";
        thFooterRus.style.display = "none";

    }

    for (let index = 0; index < arrayPriceList.length; index++) {
        if (thSelectLang === "rus") {
            thThirdSectionTitle.textContent = current.title.rus;
            thThirdSectionText0.textContent = current.description.rus[0];
            thThirdSectionText1.textContent = current.description.rus[1];
        } else {
            thThirdSectionTitle.textContent = current.title.eng;
            thThirdSectionText0.textContent = current.description.eng[0];
            thThirdSectionText1.textContent = current.description.eng[1];
        }
    }
}


const thFourSectionTitle = document.getElementById("th-four-section-title");
const thMainSendFormTitle = document.getElementById("th-main-send-form-title");
const thChoiceServecesTitle = document.getElementById("th-choice-serveces-title");

const thFourthSectionChoiceOfServiceArrow = document.getElementById("th-choice-of-service-arrow");
const thFourthSectionChoiceOfServiceArrowPath = document.getElementById("th-choice-of-service-arrow-path");
const thChoiceOfServicePlaceholder = document.getElementById("th-choice-of-service-placeholder");
let thNumberOfService = 0;

const thDropListWrapper = document.getElementById("th-drop-list-wrapper");

const capitalize = (str) => {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

let applicationShow = false;

const allInputsHave = () => {
    if (thInputFirstName.value.length && thInputLastName.value.length && thInputPhone.value.length && thInputEmail.value.length && isValidEmail(thInputEmail.value) && thSelectCategory) {
        thSubmitButtonFourthSection.className = "th-send-form-submit-activ";
        applicationShow = true;
        thSubmitButtonFourthSection.style.border = "";
        thSubmitButtonFourthSection.style.color = "";
        thFourSectionTitle.textContent = "Contact us";
        thFourSectionTitle.style.color = "";
        thMainSendForm.style.border = "";
        thFourSection.style.background = "";
        thMainSendFormTitle.style.color = "";
    }
}

const voidInput = () => {
    thSubmitButtonFourthSection.className = "";
}

thInputFirstName.addEventListener('input', () => {
    const inputValue = thInputFirstName.value;
    let editValue = inputValue.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
    if (editValue.length > 10) {
        editValue = editValue.slice(0, 10);
    }
    if (editValue.length > 0) {
        if (thSelectTheme === "light") {
            thInputFirstName.style.borderBottom = "0.054vw solid var(--dtSeparationLine)";
            thInputFirstName.style.color = "var(--ltText)";
        } else {
            thInputFirstName.style.borderBottom = "0.054vw solid var(--ltSeparationLine)";
            thInputFirstName.style.color = "var(--dtText)";
        }
        allInputsHave();
    } else {
        if (thSelectLang === "rus") {
            thInputFirstName.placeholder = "Укажите ваше имя";
        } else {
            thInputFirstName.placeholder = "Enter your first name";
        }
        thInputFirstName.style.borderBottom = "0.054vw solid var(--bad)";
        thInputFirstName.classList = "th-input-placeholder";
        thInputFirstName.style.color = "var(--bad)";
        voidInput();
    }
    thInputFirstName.value = capitalize(editValue);
});

thInputLastName.addEventListener('input', () => {
    const inputValue = thInputLastName.value;
    let editValue = inputValue.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
    if (editValue.length > 10) {
        editValue = editValue.slice(0, 10);
    }
    if (editValue.length > 0) {
        if (thSelectTheme === "light") {
            thInputLastName.style.borderBottom = "0.054vw solid var(--dtSeparationLine)";
            thInputLastName.style.color = "var(--ltText)";
        } else {
            thInputLastName.style.borderBottom = "0.054vw solid var(--ltSeparationLine)";
            thInputLastName.style.color = "var(--dtText)";
        }
        allInputsHave();
    } else {
        thInputLastName.style.borderBottom = "0.054vw solid var(--bad)";
        thInputLastName.classList = "th-input-placeholder";
        thInputLastName.style.color = "var(--bad)";
        if (thSelectLang === "rus") {
            thInputLastName.placeholder = "Укажите вашу фамилию";
        } else {
            thInputLastName.placeholder = "Enter your last name";
        }
        voidInput();
    }
    thInputLastName.value = capitalize(editValue);
});

thInputPhone.addEventListener('input', () => {
    const inputValue = thInputPhone.value;
    let editValue = inputValue.replace(/[^0-9+]/g, '');
    if (editValue.length > 12) {
        editValue = editValue.slice(0, 12);
    }
    if (editValue.length > 0) {
        if (thSelectTheme === "light") {
            thInputPhone.style.borderBottom = "0.054vw solid var(--dtSeparationLine)";
            thInputPhone.style.color = "var(--ltText)";
        } else {
            thInputPhone.style.borderBottom = "0.054vw solid var(--ltSeparationLine)";
            thInputPhone.style.color = "var(--dtText)";
        }
        allInputsHave();
    } else {
        thInputPhone.style.borderBottom = "0.054vw solid var(--bad)";
        thInputPhone.classList = "th-input-placeholder";
        thInputPhone.style.color = "var(--bad)";
        if (thSelectLang === "rus") {
            thInputPhone.placeholder = "Напишите ваш телефон";
        } else {
            thInputPhone.placeholder = "Enter the phone number";
        }
        voidInput();

    }
    thInputPhone.value = capitalize(editValue);


});

thInputEmail.addEventListener('input', () => {
    const inputValue = thInputEmail.value;
    let editValue = inputValue.replace(/[^a-zA-Z0-9@_\.-]/g, '');
    if (editValue.length > 30) {
        editValue = editValue.slice(0, 30);
    }
    if (editValue.length > 0) {
        if (thSelectTheme === "light") {
            thInputEmail.style.borderBottom = "0.054vw solid var(--dtSeparationLine)";
            thInputEmail.style.color = "var(--ltText)";
        } else {
            thInputEmail.style.borderBottom = "0.054vw solid var(--ltSeparationLine)";
            thInputEmail.style.color = "var(--dtText)";
        }
        allInputsHave();
    } else {
        thInputEmail.style.borderBottom = "0.054vw solid var(--bad)";
        thInputEmail.classList = "th-input-placeholder";
        thInputEmail.style.color = "var(--bad)";
        if (thSelectLang === "rus") {
            thInputEmail.placeholder = "Введите корректный email";
        } else {
            thInputEmail.placeholder = "Enter a valid email";
        }
        voidInput();
    }
    thInputEmail.value = editValue;
});

allInputsHave();
let resultChecked = "";

const thFourSection = document.getElementById("th-four-section")

thSubmitButtonFourthSection.addEventListener('click', () => {

    if (!thInputFirstName.value.length) {
        resultChecked = false;
        thInputFirstName.style.borderBottom = "0.054vw solid var(--bad)";
        thInputFirstName.classList = "th-input-placeholder";
        thInputFirstName.style.color = "var(--bad)";
        if (thSelectLang === "rus") {
            thInputFirstName.placeholder = "Укажите ваше имя";
        } else {
            thInputFirstName.placeholder = "Enter your first name";
        }

    } else {
        if (thSelectTheme === "light") {
            thInputFirstName.style.borderBottom = "0.054vw solid var(--dtSeparationLine)";
            thInputFirstName.style.color = "var(--ltText)";
        } else {
            thInputFirstName.style.borderBottom = "0.054vw solid var(--ltSeparationLine)";
            thInputFirstName.style.color = "var(--dtText)";
        }



    }
    if (!thInputLastName.value.length) {
        resultChecked = false;
        thInputLastName.style.borderBottom = "0.054vw solid var(--bad)";
        thInputLastName.classList = "th-input-placeholder";
        thInputLastName.style.color = "var(--bad)";
        if (thSelectLang === "rus") {
            thInputLastName.placeholder = "Укажите вашу фамилию";
        } else {
            thInputLastName.placeholder = "Enter your last name";
        }

    } else {
        if (thSelectTheme === "light") {
            thInputLastName.style.borderBottom = "0.054vw solid var(--dtSeparationLine)";
            thInputLastName.style.color = "var(--ltText)";
        } else {
            thInputLastName.style.borderBottom = "0.054vw solid var(--ltSeparationLine)";
            thInputLastName.style.color = "var(--dtText)";
        }

    }
    if (!thInputPhone.value.length) {
        resultChecked = false;
        thInputPhone.style.borderBottom = "0.054vw solid var(--bad)";
        thInputPhone.classList = "th-input-placeholder";
        thInputPhone.style.color = "var(--bad)";
        if (thSelectLang === "rus") {
            thInputPhone.placeholder = "Напишите ваш телефон";
        } else {
            thInputPhone.placeholder = "Enter the phone number";
        }

    } else {
        if (thSelectTheme === "light") {
            thInputPhone.style.borderBottom = "0.054vw solid var(--dtSeparationLine)";
            thInputPhone.style.color = "var(--ltText)";
        } else {
            thInputPhone.style.borderBottom = "0.054vw solid var(--ltSeparationLine)";
            thInputPhone.style.color = "var(--dtText)";
        }

    }
    if (!thInputEmail.value.length) {
        resultChecked = false;
        thInputEmail.style.borderBottom = "0.054vw solid var(--bad)";
        thInputEmail.classList = "th-input-placeholder";
        thInputEmail.style.color = "var(--bad)";
        if (thSelectLang === "rus") {
            thInputEmail.placeholder = "Введите корректный email";
        } else {
            thInputEmail.placeholder = "Enter a valid email";
        }
    } else {
        if (thSelectTheme === "light") {
            thInputEmail.style.borderBottom = "0.054vw solid var(--dtSeparationLine)";
            thInputEmail.style.color = "var(--ltText)";
        } else {
            thInputEmail.style.borderBottom = "0.054vw solid var(--ltSeparationLine)";
            thInputEmail.style.color = "var(--dtText)";
        }

    }

    if (!thSelectCategory) {
        resultChecked = false;
        thChoiceServecesTitle.style.color = "var(--bad)";
        thChoiceOfServicePlaceholder.style.color = "var(--bad)";
        thFourthSectionChoiceOfService.style.borderBottomColor = "var(--bad)";
        thFourthSectionChoiceOfServiceArrowPath.style.fill = "var(--bad)";
        thFourthSectionChoiceOfServiceArrowPath.style.stroke = "var(--bad)";
    } else {
        thChoiceServecesTitle.style.color = "";
        thChoiceOfServicePlaceholder.style.color = "";
        thFourthSectionChoiceOfService.style.borderBottomColor = "";
        thFourthSectionChoiceOfServiceArrowPath.style.fill = "var(--accent)";
        thFourthSectionChoiceOfServiceArrowPath.style.stroke = "var(--accent)";
    } if (!isValidEmail(thInputEmail.value)) {
        thInputEmail.style.borderBottom = "0.054vw solid var(--bad)";
        thInputEmail.classList = "th-input-placeholder";
        thInputEmail.style.color = "var(--bad)";
        if (thSelectLang === "rus") {
            thInputEmail.placeholder = "Введите корректный email";
        } else {
            thInputEmail.placeholder = "Enter a valid email";
        }
    } else {
        if (thSelectTheme === "light") {
            thInputEmail.style.borderBottom = "0.054vw solid var(--dtSeparationLine)";
            thInputEmail.style.color = "var(--ltText)";
        } else {
            thInputEmail.style.borderBottom = "0.054vw solid var(--ltSeparationLine)";
            thInputEmail.style.color = "var(--dtText)";
        }
    }
    if (!resultChecked) {
        thSubmitButtonFourthSection.style.border = "0.054vw solid var(--bad)";
        thSubmitButtonFourthSection.style.color = "var(--bad)";
        thFourSectionTitle.style.color = "var(--bad)";
        thMainSendForm.style.border = "0.21598vw solid rgba(255, 79, 79, 0.5)";
        thMainSendFormTitle.style.color = "var(--bad)";
        thFourSection.style.background = `radial-gradient(80.13% 43.52% at 17.01% 51.49%, rgba(255, 79, 79, 0.2) 0%, rgba(232, 232, 232, 0) 100%),
        radial-gradient(84.34% 46.98% at 89.9% 55.12%, rgba(0, 136, 204, 0.2) 0%, rgba(232, 232, 232, 0) 100%),
        linear-gradient(0deg, #E8E8E8, #E8E8E8)`;
        if (thSelectLang === "rus") {
            thFourSectionTitle.textContent = "Заполните все обязательные поля";
        } else {
            thFourSectionTitle.textContent = "Fill in all required fields";
        }
        allInputsHave()
    } else {
        allInputsHave()
    }
}
);

const thChangeIdeasText = () => {
    thCentralText.style.opacity = "0";
    thAngel = (thAngel + 90);
    setTimeout(() => {
        thNumberOfActivAnimation = (thNumberOfActivAnimation + 1) % ideasArrayUp.length;
        thCentralTextUp.textContent = ideasArrayUp[thNumberOfActivAnimation][thSelectLang];
        thCentralTextDown.textContent = ideasArrayDown[thNumberOfActivAnimation][thSelectLang];
        thCentralImg.style.transform = `rotate(${thAngel}deg)`;
        thCentralImg.style.opacity = "1";
        thCentralText.style.opacity = "1";

    }, 500);
};

setInterval(thChangeIdeasText, 4000);


thLangBackground.addEventListener('click', () => {
    thSwitchLocalization();
    thRefreshDataForLocalization();
    if (thSelectLang === "rus") {
        thLangFace.style.left = "7.01944vw";
    } else {
        thLangFace.style.left = "5.50756vw";
    }
    thNavigationBlock.style.right = "";
    setTimeout(() => {
        thNavigationBlock.style.display = "";
    }, 500);
})

thLangFace.addEventListener('click', () => {
    thSwitchLocalization();
    thRefreshDataForLocalization();
    if (thSelectLang === "rus") {
        thLangFace.style.left = "7.01944vw";
    } else {
        thLangFace.style.left = "5.50756vw";
    }
    thNavigationBlock.style.right = "";
    setTimeout(() => {
        thNavigationBlock.style.display = "";
    }, 500);
})

thSecondSectionButtonServices.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 1.7,
        behavior: 'smooth'
    });
})

thSecondSectionButtonContacts.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 2.5,
        behavior: 'smooth'
    });
})

thThirdSectionButtonOfPriceList.addEventListener('click', () => {
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
    let currentTitle = currentService.title[thSelectLang];

    if (currentTitle === "Продвижение в соц. сетях") {
        currentTitle = "Продвижение в социальных сетях"
    }

    thThirdSectionTitle.textContent = currentTitle;

    thThirdSectionImg.src = `/img/svg/tablet-horizontal/src/${[thSelectTheme]}/th-third-section-img ${currentService.title.eng}.svg`;
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

thFourthSectionChoiceOfService.addEventListener('click', (event) => {
    event.stopPropagation();
    const newDropListWrapper = document.createElement('div');
    newDropListWrapper.id = "th-drop-list";
    thDropListWrapper.style.height = "33.47732vw"

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
                thChoiceServecesTitle.style.color = "";
                thChoiceOfServicePlaceholder.style.color = "";
                thFourthSectionChoiceOfService.style.borderBottomColor = "";
                thFourthSectionChoiceOfServiceArrowPath.style.fill = "#0285CC";
                thFourthSectionChoiceOfServiceArrowPath.style.stroke = "#0285CC";
                if (resultChecked !== null) {
                    allInputsHave();
                }
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

            newDropListPoint.addEventListener('click', (event) => {

                event.stopPropagation();
                thSelectCategory = textSelectCategoty;
                thChoiceOfServicePlaceholder.textContent = textSelectCategoty;
                newDropListWrapper.style.opacity = "0";
                thFourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
                thFourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
                newDropListWrapper.style.pointerEvents = "none";
                if (resultChecked !== null) {
                    allInputsHave();
                }


            });
            newDropListWrapper.appendChild(newDropListPoint);

        });

    }

    newDropListWrapper.style.opacity = "1";
    thFourthSectionChoiceOfServiceArrow.style.rotate = "-90deg";
    newDropListWrapper.style.pointerEvents = "all";

    if (thSelectTheme === "light") {
        thFourthSectionChoiceOfService.style.borderBottomColor = "var(--dtSeparationLine)";
        thChoiceOfServicePlaceholder.style.color = "var(--ltText)";
    } else {
        thFourthSectionChoiceOfService.style.borderBottomColor = "var(--ltSeparationLine)";
        thChoiceOfServicePlaceholder.style.color = "var(--dtText)";
    }


    const possibleDublicate = document.getElementById("th-drop-list");
    if (possibleDublicate) {
        thDropListWrapper.removeChild(possibleDublicate);
    }
    thDropListWrapper.appendChild(newDropListWrapper);

    document.addEventListener('click', () => {
        newDropListWrapper.style.opacity = "0";
        thDropListWrapper.style.height = "";
        if (thSelectTheme === "light") {
            thFourthSectionChoiceOfService.style.borderBottomColor = "var(--dtSeparationLine)";
        } else {
            thFourthSectionChoiceOfService.style.borderBottomColor = "var(--ltSeparationLine)";
        }
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
            if (thSelectTheme === "light") {
                thFourthSectionChoiceOfService.style.borderBottomColor = "var(--dtSeparationLine)";
                thChoiceOfServicePlaceholder.style.color = "var(--ltText)";
            } else {
                thFourthSectionChoiceOfService.style.borderBottomColor = "var(--ltSeparationLine)";
                thChoiceOfServicePlaceholder.style.color = "var(--dtText)";
            }
            thSelectCategory = selCat;
            allInputsHave();
        }
    } else {
        thTextarea.textContent = textForApplication.rus[thNumberOfService];
        let selCat = arrayPriceList.map((service) => service.title.rus)[thActivNumber];
        if (selCat !== thSelectCategory && arrayPriceList.map((service) => service.title.rus).includes(selCat)) {
            thChoiceOfServicePlaceholder.textContent = selCat;
            thFourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
            if (thSelectTheme === "light") {
                thFourthSectionChoiceOfService.style.borderBottomColor = "var(--dtSeparationLine)";
                thChoiceOfServicePlaceholder.style.color = "var(--ltText)";
            } else {
                thFourthSectionChoiceOfService.style.borderBottomColor = "var(--ltSeparationLine)";
                thChoiceOfServicePlaceholder.style.color = "var(--dtText)";
            }
            thSelectCategory = selCat;
            allInputsHave();
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

let scrollLvl = 1;
const visableBlocks = 5;
const thThirdSectionRightServicesWrapper = document.getElementById("th-third-section-right-services-wrapper");
const buffer = [];
const gapDivs = 2.15983;
const startDivTop = -19.43844;
const divHeight = 17.27862;

const resetBlocks = () => {
    while (buffer.length > 0) {
        thThirdSectionRightServicesWrapper.removeChild(buffer.shift().link)
    }
}

const createDivBlocks = () => {

    let i = scrollLvl % (arrayPriceList.length);

    while (buffer.length < (visableBlocks + 2)) {
        if (i !== thActivNumber) {
            const div = document.createElement('div');

            const service = arrayPriceList[i];
            const divImg = document.createElement('img');
            const divH3 = document.createElement('h3');

            div.id = `th-third-section-right-services-${buffer.length}`;
            div.classList = "th-third-section-right-services";
            div.style.top = startDivTop + (gapDivs + divHeight) * buffer.length + "vw";
            divImg.src = `/img/svg/tablet-horizontal/src/${[thSelectTheme]}/${service.title.eng}.svg`;
            divH3.textContent = service.title[thSelectLang];
            if (thSelectTheme === "light") {
                divH3.classList = `th-third-section-right-services-h3-light`;
            } else {
                divH3.classList = `false`;
            }
            div.appendChild(divImg);
            div.appendChild(divH3);
            thThirdSectionRightServicesWrapper.appendChild(div);

            div.addEventListener('click', () => {
                thActivNumber = buffer[Math.round(Number(div.id[div.id.length - 1]))].serviceId;
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
        const newTop = startDivTop + (gapDivs + divHeight) * index + deltaGap + "vw";
        buffer[index].link.style.top = newTop;
    }
}

let thThirdSectionAnimation = false;

thThirdSectionTopArrow.addEventListener('click', () => {
    if (!thThirdSectionAnimation) {
        thThirdSectionAnimation = true;
        movePlitka(-gapDivs - divHeight)
        setTimeout(() => {
            thThirdSectionAnimation = false;
            scrollLvl = (scrollLvl + 1) % (arrayPriceList.length);

            if (scrollLvl === thActivNumber) {
                scrollLvl = (scrollLvl + 1) % (arrayPriceList.length);
            }

            resetBlocks();
            createDivBlocks();
        }, 300);
    }

})

thThirdSectionBottomArrow.addEventListener('click', () => {
    if (!thThirdSectionAnimation) {
        thThirdSectionAnimation = true;
        movePlitka(gapDivs + divHeight)
        setTimeout(() => {
            thThirdSectionAnimation = false;
            scrollLvl = (scrollLvl - 1);
            if (scrollLvl === 0) {
                scrollLvl = arrayPriceList.length - 1;
            }
            if (scrollLvl === thActivNumber) {
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

const sendToApplicationMainContent = document.getElementById("th-send-to-application-main-content");
const sendToApplicationWrapper = document.getElementById("th-send-to-application-wrapper");
const sendToApplicationMainContentTitle = document.getElementById("th-send-to-application-main-content-title");
const sendToApplicationMainContentText = document.getElementById("th-send-to-application-main-content-text");
const sendToApplicationMainContentImg = document.getElementById("th-send-to-application-main-content-img");
const sendToApplicationMainContentImgSecces = document.getElementById("th-send-to-application-main-content-img-secces");
const sendToApplicationMainContentImgWrong = document.getElementById("th-send-to-application-main-content-img-wrong");


const choiceServecesTitleWrapper = document.getElementById("th-choice-serveces-title-wrapper");
const choiceServecesTitleText = document.getElementById("th-choice-serveces-title");
const choiceServecesCheckbox = document.getElementById("th-choice-serveces-checkbox");
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
        if (thSelectTheme === "light") {
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


thSubmitButtonFourthSection.addEventListener('click', () => {
    const data = {
        text: `
    First Name: ${thInputFirstName.value}, 
    Last Name: ${thInputLastName.value}, 
    Phone: ${thInputPhone.value}, 
    Email: ${thInputEmail.value}, 
    Service: ${thChoiceOfServicePlaceholder.textContent},
    Text: ${thTextarea.value}`,
        hasPrepaymant: checkbox,
        service: `${thChoiceOfServicePlaceholder.textContent}`,
        price: arrayPriceList[arrayPriceList.map((category) => category.title[thSelectLang]).findIndex(el => el === thChoiceOfServicePlaceholder.textContent)].prices[0].cost * 100,
        email: thInputEmail.value
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
                            if (thSelectLang === "eng") {
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
                            if (thSelectLang === "eng") {
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
                            if (thSelectLang === "eng") {
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
    const alternativeContactPhone = document.getElementById("th-four-section-contacts-phone");
    alternativeContactPhone.addEventListener('click', () => {
        window.location.href = `tel:${dataContats.Phone}`;
    })

    const alternativeContactEmail = document.getElementById("th-four-section-contacts-email");
    alternativeContactEmail.addEventListener('click', () => {
        window.location.href = `email:${dataContats.Email}`;
    })

    const alternativeContactFacebook = document.getElementById("th-four-section-contacts-facebook");
    alternativeContactFacebook.addEventListener('click', () => {
        window.location.href = `${dataContats.Facebook}`;
    })

    const alternativeContactTelegram = document.getElementById("th-four-section-contacts-telegram");
    alternativeContactTelegram.addEventListener('click', () => {
        window.location.href = `${dataContats.Telegram}`;
    })

}

uploadLinks()