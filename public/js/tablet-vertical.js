import localizationWrapper from "./localization-data.js";
import arrayPriceList from "./arrayPriceList.js";
import { ideasArrayUp, ideasArrayDown, textForApplication } from "./slogans.js";
import reviews from "./reviews.js";
import dataContats from "./links.js";
import themeWrapper from "./switchTheme-data.js"
import url from "./url.js"


const tvNavButton = document.getElementById("tv-nav-button");
const tvNavigationBlock = document.getElementById("tv-navigation-block");
const tvNavigationBlockItem0 = document.getElementById("tv-navigation-block-item-0");
const tvNavigationBlockItem1 = document.getElementById("tv-navigation-block-item-1");
const tvNavigationBlockItem2 = document.getElementById("tv-navigation-block-item-2");
const tvNavigationBlockItem3 = document.getElementById("tv-navigation-block-item-3");
const tvNavigationBlockItem4 = document.getElementById("tv-navigation-block-item-4");
const tvNavigationBlockTitleXMark = document.getElementById("tv-navigation-block-title-x-mark");
const choiceServecesSquare = document.getElementById("tv-choice-serveces-square");

tvNavButton.addEventListener('click', () => {
    tvNavigationBlock.style.display = "block";
    setTimeout(() => {
        tvNavigationBlock.style.left = "63.34197vw";
    }, 1);
})

tvNavigationBlockItem0.addEventListener('click', () => {
    tvNavigationBlock.style.left = "";
    setTimeout(() => {
        tvNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 0,
        behavior: 'smooth'
    });
})

tvNavigationBlockTitleXMark.addEventListener('click', () => {
    tvNavigationBlock.style.left = "";
    setTimeout(() => {
        tvNavigationBlock.style.display = "";
    }, 500);
})

tvNavigationBlockItem1.addEventListener('click', () => {
    tvNavigationBlock.style.left = "";
    setTimeout(() => {
        tvNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 1.21,
        behavior: 'smooth'
    });
})

tvNavigationBlockItem2.addEventListener('click', () => {
    tvNavigationBlock.style.left = "";
    setTimeout(() => {
        tvNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 2.4,
        behavior: 'smooth'
    });
})

tvNavigationBlockItem3.addEventListener('click', () => {
    tvNavigationBlock.style.left = "";
    setTimeout(() => {
        tvNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 3.6,
        behavior: 'smooth'
    });
})

tvNavigationBlockItem4.addEventListener('click', () => {
    tvNavigationBlock.style.left = "";
    setTimeout(() => {
        tvNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 4.8,
        behavior: 'smooth'
    });
})


const tvCentralImg = document.getElementById("tv-first-section-img-circle");
const tvCentralText = document.getElementById("tv-central-text-first-section");
const tvCentralTextUp = document.getElementById("tv-central-text-first-section-up");
const tvCentralTextDown = document.getElementById("tv-central-text-first-section-down");
const tvSecondSectionButtonServices = document.getElementById("tv-second-section-button-services");
const tvSecondSectionButtonContacts = document.getElementById("tv-second-section-button-contacts");
const tvThirdSectionButtonOfPriceList = document.getElementById("tv-price-list-button");

const tvPriceListWrapper = document.getElementById("tv-price-list-wrapper");
const tvPriceListXMark = document.getElementById("tv-price-list-x-mark");

const tvThirdSectionButtonOfConsultation = document.getElementById("tv-consultation-button");
const tvThirdSectionButtonOfReview = document.getElementById("tv-review-button");
const tvThirdSectionButtonOfQuestion = document.getElementById("tv-question-button");
const tvThirdSectionButtonOfOrder = document.getElementById("tv-button-more-lower-part-buttons-3");

let tvAngel = 0;
let tvNumberOfActivAnimation = 0;
let tvActivNumber = 0;

const tvThirdSectionTitle = document.getElementById("tv-third-section-title-of-service");
const tvThirdSectionImg = document.getElementById("tv-third-section-main-img");
const tvThirdSectionText0 = document.getElementById("tv-third-section-text-about-service-0");
const tvThirdSectionText1 = document.getElementById("tv-third-section-text-about-service-1");


const tvUpperBlock = document.getElementById("tv-reviews-wrapper-left");
const tvReviewsUpperName = document.getElementById("tv-reviews-name-left");
const tvReviewsUpperImg = document.getElementById("tv-reviews-photo-left");
const tvReviewsUpperUpperText = document.getElementById("tv-reviews-upper-text-left");
const tvReviewsUpperLowerText = document.getElementById("tv-reviews-lower-text-left");
const tvFourthSectionChoiceOfService = document.getElementById("tv-choice-of-service");

const tvLowerBlock = document.getElementById("tv-reviews-wrapper-right");
const tvReviewsLowerName = document.getElementById("tv-reviews-name-right");
const tvReviewsLowerImg = document.getElementById("tv-reviews-photo-right");
const tvReviewsLowerUpperText = document.getElementById("tv-reviews-upper-text-right");
const tvReviewsLowerLowerText = document.getElementById("tv-reviews-lower-text-right");
const tvNavigationBlockThemeButtonWrapper = document.getElementById("tv-navigation-block-theme-button-wrapper");
const tvNavigationBlockThemeButtonFace = document.getElementById("tv-navigation-block-theme-button-face");
const tvNavigationBlockThemeButtonRect = document.getElementById("tv-navigation-block-theme-button-face-rect");
const tvNavigationBlockThemeButtonRectBackground = document.getElementById("tv-navigation-block-theme-button-background-rect");

const tvThirdSectionRightServicesWrapper = document.getElementById("tv-third-section-right-services-wrapper");
const tvMainSendForm = document.getElementById("tv-main-send-form");
const tvFourSection = document.getElementById("tv-four-section");

const tvInputFirstName = document.getElementById("tv-input-first-name");
const tvInputLastName = document.getElementById("tv-input-last-name");
const tvInputPhone = document.getElementById("tv-input-phone");
const tvInputEmail = document.getElementById("tv-input-email");
const tvTextarea = document.getElementById("tv-textarea");

const tvThirdSectionTopArrow = document.getElementById("tv-third-section-top-arrow");
const tvThirdSectionBottomArrow = document.getElementById("tv-third-section-bottom-arrow");

let tvSelectLang = "eng";
let tvSelectCategory = "";
let tvSelectTheme = "light";

const tvSwitchTheme = () => {
    tvSelectTheme = tvSelectTheme === "light" ? "dark" : "light";
    for (let id in themeWrapper) { // перебираем все айдишники
        const data = themeWrapper[id]; // пой айди получаю информацию 
        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        const allStyles = data.styles;
        element.style.color = allStyles[tvSelectTheme].color;
        element.style.background = allStyles[tvSelectTheme].background;
    }
}

const tvRefreshTheme = () => {

    const currentService = arrayPriceList[tvActivNumber];

    const tvThirdSAectionTitleLine = document.getElementById("tv-third-section-title-line");
    const tvThirdSAectionBootomLine = document.getElementById("tv-third-section-bootom-line");
    const tvThirdSectionMainImgWrapper = document.getElementById("tv-third-section-main-img-wrapper");
    const tvThirdSectionTightFiveButtons0 = document.getElementById("tv-third-section-right-five-buttons-0");
    const tvThirdSectionTightFiveButtons1 = document.getElementById("tv-third-section-right-five-buttons-1");
    const tvThirdSectionTightFiveButtons2 = document.getElementById("tv-third-section-right-five-buttons-2");
    const tvThirdSectionTightFiveButtons3 = document.getElementById("tv-third-section-right-five-buttons-3");
    const tvThirdSectionRightservices0 = document.getElementById("tv-third-section-right-services-1");
    const tvThirdSectionRightservices1 = document.getElementById("tv-third-section-right-services-2");
    const tvThirdSectionRightservices2 = document.getElementById("tv-third-section-right-services-3");
    const tvThirdSectionRightservices3 = document.getElementById("tv-third-section-right-services-4");
    const tvThirdSectionRightservices4 = document.getElementById("tv-third-section-right-services-5");
    const tvPlaceholderTextarea = document.getElementById("tv-placeholder-textarea");
    const tvFourSectionContacts = document.getElementById("tv-four-section-contacts");

    tvThirdSAectionTitleLine.src = `/img/svg/tablet-vertical/src/${tvSelectTheme}/tv-third-section-title-line.svg`
    tvThirdSAectionBootomLine.src = `/img/svg/tablet-vertical/src/${tvSelectTheme}/tv-third-section-bootom-line.svg`
    tvThirdSectionImg.src = `/img/svg/tablet-vertical/src/${[tvSelectTheme]}/tv-third-section-img ${currentService.title.eng}.svg`;
    tvThirdSectionTightFiveButtons0.src = `/img/svg/tablet-vertical/src/${[tvSelectTheme]}/tv-third-section-right-five-buttons-0.svg`;
    tvThirdSectionTightFiveButtons1.src = `/img/svg/tablet-vertical/src/${[tvSelectTheme]}/tv-third-section-right-five-buttons-1.svg`;
    tvThirdSectionTightFiveButtons2.src = `/img/svg/tablet-vertical/src/${[tvSelectTheme]}/tv-third-section-right-five-buttons-2.svg`;
    tvThirdSectionTightFiveButtons3.src = `/img/svg/tablet-vertical/src/${[tvSelectTheme]}/tv-third-section-right-five-buttons-3.svg`;
    tvThirdSectionTopArrow.src = `/img/svg/tablet-vertical/src/${[tvSelectTheme]}/tv-third-section-top-arrow.svg`;
    tvThirdSectionBottomArrow.src = `/img/svg/tablet-vertical/src/${[tvSelectTheme]}/tv-third-section-bottom-arrow.svg`;
    tvPriceListXMark.src = `/img/svg/tablet-vertical/src/${[tvSelectTheme]}/tv-price-list-x-mark.svg`;

    const setImg = document.querySelectorAll("#tv-third-section-right-services-wrapper img");
    for (let index = 0; index < setImg.length; index++) {
        if (tvSelectTheme === "dark") {
            setImg[index].src = setImg[index].src.replace("light", "dark")
        } else {
            setImg[index].src = setImg[index].src.replace("dark", "light")
        }
    }

    const setH3 = document.querySelectorAll("#tv-third-section-right-services-wrapper h3");
    for (let index = 0; index < setH3.length; index++) {
        if (tvSelectTheme === "dark") {
            setH3[index].classList = setH3[index].classList.replace("light", "dark")
        } else {
            setH3[index].classList = setH3[index].classList.replace("dark", "light")
        }
    }

    if (tvSelectTheme === "dark") {
        tvNavigationBlockThemeButtonRect.style.stroke = "#0088CC";
        tvNavigationBlockThemeButtonRect.style.strokeOpacity = "0.6";
        tvNavigationBlockThemeButtonRectBackground.style.fill = "#0088CC";
        tvNavigationBlockThemeButtonRectBackground.style.fillOpacity = "0.6";
        tvNavigationBlockThemeButtonFace.style.left = "22.53886vw";
        document.documentElement.style.setProperty('--svgColor', '#F3F3F3');
        tvThirdSectionMainImgWrapper.style.border = "0.06477vw solid var(--ltSeparationLine)";
        tvThirdSectionButtonOfPriceList.style.border = "0.06477vw solid var(--ltSeparationLine)";
        tvThirdSectionButtonOfConsultation.style.border = "0.06477vw solid var(--ltSeparationLine)";
        tvThirdSectionButtonOfReview.style.border = "0.06477vw solid var(--ltSeparationLine)";
        tvThirdSectionButtonOfQuestion.style.border = "0.06477vw solid var(--ltSeparationLine)";
        tvThirdSectionRightservices0.style.border = "0.06477vw solid var(--ltSeparationLine)";
        tvThirdSectionRightservices1.style.border = "0.06477vw solid var(--ltSeparationLine)";
        tvThirdSectionRightservices2.style.border = "0.06477vw solid var(--ltSeparationLine)";
        tvThirdSectionRightservices3.style.border = "0.06477vw solid var(--ltSeparationLine)";
        tvThirdSectionRightservices4.style.border = "0.06477vw solid var(--ltSeparationLine)";
        tvMainSendForm.style.border = "0.06477vw solid var(--ltSeparationLine)";
        tvInputFirstName.classList = "tv-input-dark";
        tvInputLastName.classList = "tv-input-dark";
        tvInputPhone.classList = "tv-input-dark";
        tvInputEmail.classList = "tv-input-dark";
        tvTextarea.classList = "tv-textarea-dark";
        tvPlaceholderTextarea.style.borderTop = "0.06477vw solid var(--ltSeparationLine)";
        tvPlaceholderTextarea.style.borderBottom = "0.06477vw solid var(--ltSeparationLine)";
        tvFourthSectionChoiceOfService.style.borderBottom = "0.06477vw solid var(--ltSeparationLine)";
        tvFourSectionContacts.style.border = "0.06477vw solid var(--ltSeparationLine)";
        choiceServecesSquare.style.border = "0.12953vw var(--ltSeparationLine) solid";

    } else {
        tvNavigationBlockThemeButtonRect.style.stroke = "";
        tvNavigationBlockThemeButtonRect.style.strokeOpacity = "";
        tvNavigationBlockThemeButtonRectBackground.style.fill = "";
        tvNavigationBlockThemeButtonRectBackground.style.fillOpacity = "";
        tvNavigationBlockThemeButtonFace.style.left = "";
        document.documentElement.style.setProperty('--svgColor', '#2E2E2E');
        tvThirdSectionMainImgWrapper.style.border = "";
        tvThirdSectionButtonOfConsultation.style.border = "";
        tvThirdSectionButtonOfReview.style.border = "";
        tvThirdSectionButtonOfQuestion.style.border = "";
        tvThirdSectionRightServicesWrapper.style.border = "";
        tvMainSendForm.style.border = "";
        tvInputFirstName.classList = "tv-input-light";
        tvInputLastName.classList = "tv-input-light";
        tvInputPhone.classList = "tv-input-light";
        tvInputEmail.classList = "tv-input-light";
        tvTextarea.classList = "tv-textarea-light";
        tvPlaceholderTextarea.style.borderTop = "";
        tvPlaceholderTextarea.style.borderBottom = "";
        tvFourthSectionChoiceOfService.style.borderBottom = "";
        tvFourSectionContacts.style.border = "";
        choiceServecesSquare.style.border = "";
    }
}

const tvLang = document.getElementById("tv-navigation-block-lang-button-wrapper");

const tvSwitchLocalization = () => {
    tvSelectLang = tvSelectLang === "eng" ? "rus" : "eng";
    for (let id in localizationWrapper) { // перебираем все айдишники
        const data = localizationWrapper[id]; // пой айди получаю информацию 

        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        element.textContent = data[tvSelectLang]; //   обновляю текст
    }
}


const tvSubmitButtonFourthSection = document.getElementById("tv-send-form-submit");
const tvFooterEng = document.getElementById("tv-footer-eng");
const tvFooterRus = document.getElementById("tv-footer-rus")

const tvRefreshDataForLocalization = () => {
    const current = arrayPriceList[tvActivNumber];

    const currentReviewsTop = reviews[number].top;
    const currentReviewsBottom = reviews[number].bottom;
    tvReviewsUpperName.textContent = currentReviewsTop.title[tvSelectLang];
    tvReviewsLowerName.textContent = currentReviewsBottom.title[tvSelectLang];
    tvReviewsUpperUpperText.textContent = currentReviewsTop.upperText[tvSelectLang];
    tvReviewsUpperLowerText.textContent = currentReviewsTop.lowerText[tvSelectLang];
    tvReviewsLowerUpperText.textContent = currentReviewsBottom.upperText[tvSelectLang];
    tvReviewsLowerLowerText.textContent = currentReviewsBottom.lowerText[tvSelectLang];

    current.prices.map((serviceData, number) => {
        const { nameOfServise, cost } = serviceData;
        const tvPriceListServiceName = document.getElementById(`tv-price-list-service-name-${number}`);
        const tvPriceListServiceCost = document.getElementById(`tv-price-list-service-cost-${number}`);
        tvPriceListServiceCost.textContent = `£${cost}`;
        tvPriceListServiceName.textContent = nameOfServise[tvSelectLang];
    })

    if (tvSelectLang === "rus") {
        tvInputFirstName.placeholder = "Имя";
        tvInputLastName.placeholder = "Фамилия";
        tvInputPhone.placeholder = "Телефон";
        tvInputEmail.placeholder = "Email";
        tvTextarea.placeholder = "В этом поле вы можете указать указать любые дополнительные данные или пожелания по заказу."
        tvFooterEng.style.display = "none";
        tvFooterRus.style.display = "block";
    } else {
        tvInputFirstName.placeholder = "First Name";
        tvInputLastName.placeholder = "Last Name";
        tvInputPhone.placeholder = "Phone";
        tvInputEmail.placeholder = "Email";
        tvTextarea.placeholder = "In tvis field, you can provide any additional details or requests for your order, including your preferred metvod of contact.";
        tvFooterEng.style.display = "block";
        tvFooterRus.style.display = "none";
    }

    for (let index = 0; index < arrayPriceList.length; index++) {
        if (tvSelectLang === "rus") {
            tvThirdSectionTitle.textContent = current.title.rus;
            tvThirdSectionText0.textContent = current.description.rus[0];
            tvThirdSectionText1.textContent = current.description.rus[1];
        } else {
            tvThirdSectionTitle.textContent = current.title.eng;
            tvThirdSectionText0.textContent = current.description.eng[0];
            tvThirdSectionText1.textContent = current.description.eng[1];
        }

    }
}

const tvFourSectionTitle = document.getElementById("tv-four-section-title");
const tvMainSendFormTitle = document.getElementById("tv-main-send-form-title");
const tvChoiceServecesTitle = document.getElementById("tv-choice-serveces-title");

const tvFourthSectionChoiceOfServiceArrow = document.getElementById("tv-choice-of-service-arrow");
const tvFourthSectionChoiceOfServiceArrowPath = document.getElementById("tv-choice-of-service-arrow-path");
const tvChoiceOfServicePlaceholder = document.getElementById("tv-choice-of-service-placeholder");
let tvNumberOfService = 0;
const tvDropListWrapper = document.getElementById("tv-drop-list-wrapper");

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
    if (tvInputFirstName.value.length && tvInputLastName.value.length && tvInputPhone.value.length && tvInputEmail.value.length && isValidEmail(tvInputEmail.value) && tvSelectCategory) {
        tvSubmitButtonFourthSection.className = "th-send-form-submit-activ";
        applicationShow = true;
        tvSubmitButtonFourthSection.style.border = "";
        tvSubmitButtonFourthSection.style.color = "";
        tvFourSectionTitle.textContent = "Contact us";
        tvFourSectionTitle.style.color = "";
        tvMainSendForm.style.border = "";
        tvFourSection.style.background = "";
        tvMainSendFormTitle.style.color = "";
    }
}

const voidInput = () => {
    tvSubmitButtonFourthSection.className = "";
}

tvInputFirstName.addEventListener('input', () => {
    const inputValue = tvInputFirstName.value;
    let editValue = inputValue.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
    if (editValue.length > 10) {
        editValue = editValue.slice(0, 10);
    }
    if (editValue.length > 0) {
        if (tvSelectTheme === "light") {
            tvInputFirstName.style.borderBottom = "0.12953vw solid var(--ltText)";
            tvInputFirstName.style.color = "var(--ltText)";
        } else {
            tvInputLastName.style.borderBottom = "0.12953vw solid var(--ltSeparationLine)";
            tvInputFirstName.style.color = "var(--dtText)";
        }
        allInputsHave();
    } else {
        if (tvSelectLang === "rus") {
            tvInputFirstName.placeholder = "Укажите ваше имя";
        } else {
            tvInputFirstName.placeholder = "Enter your first name";
        }
        tvInputFirstName.classList = "tv-input-placeholder";
        tvInputFirstName.style.borderBottom = "0.12953vw solid var(--bad)";
        tvInputFirstName.style.color = "var(--bad)";
        voidInput();
    }
    tvInputFirstName.value = capitalize(editValue);
});

tvInputLastName.addEventListener('input', () => {
    const inputValue = tvInputLastName.value;
    let editValue = inputValue.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
    if (editValue.length > 10) {
        editValue = editValue.slice(0, 10);
    }
    if (editValue.length > 0) {
        if (tvSelectTheme === "light") {
            tvInputLastName.style.borderBottom = "0.12953vw solid var(--ltText)";
            tvInputLastName.style.color = "var(--ltText)";
        } else {
            tvInputLastName.style.borderBottom = "0.12953vw solid var(--ltSeparationLine)";
            tvInputLastName.style.color = "var(--dtText)";
        }
        allInputsHave();
    } else {
        tvInputLastName.style.borderBottom = "0.12953vw solid var(--bad)";
        tvInputLastName.classList = "th-input-placeholder";
        tvInputLastName.style.color = "var(--bad)";
        if (tvSelectLang === "rus") {
            tvInputLastName.placeholder = "Укажите вашу фамилию";
        } else {
            tvInputLastName.placeholder = "Enter your last name";
        }
        voidInput();
    }
    tvInputLastName.value = capitalize(editValue);
});

tvInputPhone.addEventListener('input', () => {
    const inputValue = tvInputPhone.value;
    let editValue = inputValue.replace(/[^0-9+]/g, '');
    if (editValue.length > 12) {
        editValue = editValue.slice(0, 12);
    }
    if (editValue.length > 0) {
        if (tvSelectTheme === "light") {
            tvInputPhone.style.borderBottom = "0.12953vw solid var(--ltText)";
            tvInputPhone.style.color = "var(--ltText)";
        } else {
            tvInputPhone.style.borderBottom = "0.12953vw solid var(--ltSeparationLine)";
            tvInputPhone.style.color = "var(--dtText)";
        }
        allInputsHave();
    } else {
        tvInputPhone.style.borderBottom = "0.12953vw solid var(--bad)";
        tvInputPhone.classList = "th-input-placeholder";
        tvInputPhone.style.color = "var(--bad)";
        if (tvSelectLang === "rus") {
            tvInputPhone.placeholder = "Напишите ваш телефон";
        } else {
            tvInputPhone.placeholder = "Enter the phone number";
        }
        voidInput();
    }
    tvInputPhone.value = capitalize(editValue);
});

tvInputEmail.addEventListener('input', () => {
    const inputValue = tvInputEmail.value;
    let editValue = inputValue.replace(/[^a-zA-Z0-9@_\.-]/g, '');
    if (editValue.length > 30) {
        editValue = editValue.slice(0, 30);
    }
    if (editValue.length > 0) {
        if (tvSelectTheme === "light") {
            tvInputEmail.style.borderBottom = "0.12953vw solid var(--ltText)";
            tvInputEmail.style.color = "var(--ltText)";
        } else {
            tvInputEmail.style.borderBottom = "0.12953vw solid var(--ltSeparationLine)";
            tvInputEmail.style.color = "var(--dtText)";
        }
        allInputsHave();
    } else {
        tvInputEmail.style.borderBottom = "0.12953vw solid var(--bad)";
        tvInputEmail.classList = "th-input-placeholder";
        tvInputEmail.style.color = "var(--bad)";
        if (tvSelectLang === "rus") {
            tvInputEmail.placeholder = "Введите корректный email";
        } else {
            tvInputEmail.placeholder = "Enter a valid email";
        }
        voidInput();
    }
    tvInputEmail.value = editValue;
});


allInputsHave();
let resultChecked = "";

tvSubmitButtonFourthSection.addEventListener('click', () => {

    if (!tvInputFirstName.value.length) {
        resultChecked = false;
        tvInputFirstName.style.borderBottom = "0.12953vw solid var(--bad)";
        tvInputFirstName.classList = "tv-input-placeholder";
        tvInputFirstName.style.color = "var(--bad)";
        if (tvSelectLang === "rus") {
            tvInputFirstName.placeholder = "Укажите ваше имя";
        } else {
            tvInputFirstName.placeholder = "Enter your first name";
        }

    } else {
        if (tvSelectTheme === "light") {
            tvInputFirstName.style.borderBottom = "0.12953vw solid var(--ltText)";
            tvInputFirstName.style.color = "var(--ltText)";
        } else {
            tvInputFirstName.style.borderBottom = "0.12953vw solid var(--ltSeparationLine)";
            tvInputFirstName.style.color = "var(--dtText)";
        }

    }
    if (!tvInputLastName.value.length) {
        resultChecked = false;
        tvInputLastName.style.borderBottom = "0.12953vw solid var(--bad)";
        tvInputLastName.classList = "tv-input-placeholder";
        tvInputLastName.style.color = "var(--bad)";
        if (tvSelectLang === "rus") {
            tvInputLastName.placeholder = "Укажите вашу фамилию";
        } else {
            tvInputLastName.placeholder = "Enter your last name";
        }

    } else {
        if (tvSelectTheme === "light") {
            tvInputLastName.style.borderBottom = "0.12953vw solid var(--ltText)";
            tvInputLastName.style.color = "var(--ltText)";
        } else {
            tvInputLastName.style.borderBottom = "0.12953vw solid var(--ltSeparationLine)";
            tvInputLastName.style.color = "var(--dtText)";
        }

    }
    if (!tvInputPhone.value.length) {
        resultChecked = false;
        tvInputPhone.style.borderBottom = "0.12953vw solid var(--bad)";
        tvInputPhone.classList = "tv-input-placeholder";
        tvInputPhone.style.color = "var(--bad)";
        if (tvSelectLang === "rus") {
            tvInputPhone.placeholder = "Напишите ваш телефон";
        } else {
            tvInputPhone.placeholder = "Enter the phone number";
        }

    } else {
        if (tvSelectTheme === "light") {
            tvInputPhone.style.borderBottom = "0.12953vw solid var(--ltText)";
            tvInputPhone.style.color = "var(--ltText)";
        } else {
            tvInputPhone.style.borderBottom = "0.12953vw solid var(--ltSeparationLine)";
            tvInputPhone.style.color = "var(--dtText)";
        }

    }
    if (!tvInputEmail.value.length) {
        resultChecked = false;
        tvInputEmail.style.borderBottom = "0.12953vw solid var(--bad)";
        tvInputEmail.classList = "tv-input-placeholder";
        tvInputEmail.style.color = "var(--bad)";
        if (tvSelectLang === "rus") {
            tvInputEmail.placeholder = "Введите корректный email";
        } else {
            tvInputEmail.placeholder = "Enter a valid email";
        }
    } else {
        if (tvSelectTheme === "light") {
            tvInputEmail.style.borderBottom = "0.12953vw solid var(--ltText)";
            tvInputEmail.style.color = "var(--ltText)";
        } else {
            tvInputEmail.style.borderBottom = "0.12953vw solid var(--ltSeparationLine)";
            tvInputEmail.style.color = "var(--dtText)";
        }

    }

    if (!tvSelectCategory) {
        resultChecked = false;
        tvChoiceServecesTitle.style.color = "var(--bad)";
        tvChoiceOfServicePlaceholder.style.color = "var(--bad)";
        tvFourthSectionChoiceOfService.style.borderBottomColor = "var(--bad)";
        tvFourthSectionChoiceOfServiceArrowPath.style.fill = "var(--bad)";
        tvFourthSectionChoiceOfServiceArrowPath.style.stroke = "var(--bad)";
    } else {
        tvChoiceServecesTitle.style.color = "";
        tvChoiceOfServicePlaceholder.style.color = "";
        tvFourthSectionChoiceOfService.style.borderBottomColor = "";
        tvFourthSectionChoiceOfServiceArrowPath.style.fill = "";
        tvFourthSectionChoiceOfServiceArrowPath.style.stroke = "";
    } if (!isValidEmail(tvInputEmail.value)) {
        tvInputEmail.style.borderBottom = "0.12953vw solid var(--bad)";
        tvInputEmail.classList = "tv-input-placeholder";
        tvInputEmail.style.color = "var(--bad)";
        if (tvSelectLang === "rus") {
            tvInputEmail.placeholder = "Введите корректный email";
        } else {
            tvInputEmail.placeholder = "Enter a valid email";
        }
    } else {
        if (tvSelectTheme === "light") {
            tvInputEmail.style.borderBottom = "0.12953vw solid var(--ltText)";
            tvInputEmail.style.color = "var(--ltText)";
        } else {
            tvInputEmail.style.borderBottom = "0.12953vw solid var(--ltSeparationLine)";
            tvInputEmail.style.color = "var(--dtText)";
        }
    }
    if (!resultChecked) {
        tvSubmitButtonFourthSection.style.border = "0.12953vw solid var(--bad)";
        tvSubmitButtonFourthSection.style.color = "var(--bad)";
        tvFourSectionTitle.style.color = "var(--bad)";
        tvMainSendForm.style.border = "0.21598vw solid rgba(255, 79, 79, 0.5)";

        if (tvSelectTheme === "dark") {
            tvFourSection.style.background = `linear-gradient(180deg, rgba(28, 28, 28, 0) 0%, rgba(255, 79, 79, 0.24) 22.13%, rgba(0, 136, 204, 0.03) 81.71%, rgba(0, 136, 204, 0.24) 87.91%, rgba(28, 28, 28, 0) 97.73%),
            linear-gradient(270deg, rgba(28, 28, 28, 0.8) 0%, rgba(28, 28, 28, 0.08) 6.56%, rgba(28, 28, 28, 0) 50.5%, rgba(28, 28, 28, 0.08) 93.54%, rgba(28, 28, 28, 0.8) 100%),
            linear-gradient(0deg, #1C1C1C, #1C1C1C)`
        } else {
            tvFourSection.style.background = `
            linear-gradient(180deg, rgba(232, 232, 232, 0) 0%, rgba(255, 79, 79, 0.24) 22.13%, rgba(0, 136, 204, 0.03) 81.71%, rgba(0, 136, 204, 0.24) 87.91%, rgba(232, 232, 232, 0) 97.73%),
            linear-gradient(270deg, rgba(232, 232, 232, 0.8) 0%, rgba(232, 232, 232, 0.08) 6.56%, rgba(232, 232, 232, 0) 50.5%, rgba(232, 232, 232, 0.08) 93.54%, rgba(232, 232, 232, 0.8) 100%),
            linear-gradient(0deg, #E8E8E8, #E8E8E8)`
        }

        tvMainSendFormTitle.style.color = "var(--bad)";
        if (tvSelectLang === "rus") {
            tvFourSectionTitle.textContent = "Заполните все обязательные поля";
        } else {
            tvFourSectionTitle.textContent = "Fill in all required fields";
        }
        allInputsHave()
    } else {
        allInputsHave()
    }
});

const tvChangeIdeasText = () => {
    tvCentralText.style.opacity = "0";
    tvAngel = (tvAngel + 90);
    setTimeout(() => {
        tvNumberOfActivAnimation = (tvNumberOfActivAnimation + 1) % ideasArrayUp.length;
        tvCentralTextUp.textContent = ideasArrayUp[tvNumberOfActivAnimation][tvSelectLang];
        tvCentralTextDown.textContent = ideasArrayDown[tvNumberOfActivAnimation][tvSelectLang];
        tvCentralImg.style.transform = `rotate(${tvAngel}deg)`;
        tvCentralImg.style.opacity = "1";
        tvCentralText.style.opacity = "1";
    }, 500);
};

setInterval(tvChangeIdeasText, 4000);

const tvNavigationBlockLangButtonFace = document.getElementById("tv-navigation-block-lang-button-face");
const tvNavigationBlockLangButtonFaceStroke = document.getElementById("tv-navigation-block-lang-button-face-stroke");
const tvNavigationBlockLangButtonBakgroundRect = document.getElementById("tv-navigation-block-lang-button-background-rect");


tvLang.addEventListener('click', () => {
    tvSwitchLocalization();
    tvRefreshDataForLocalization();
    if (tvSelectLang === "rus") {
        tvNavigationBlockLangButtonFace.style.left = "20.72539vw";
        tvNavigationBlockLangButtonFaceStroke.style.stroke = "rgba(46, 46, 46, 0.2)";
        tvNavigationBlockLangButtonBakgroundRect.style.fill = "rgba(46, 46, 46, 0.2)";
    } else {
        tvNavigationBlockLangButtonFace.style.left = "";
        tvNavigationBlockLangButtonFaceStroke.style.stroke = "";
        tvNavigationBlockLangButtonBakgroundRect.style.fill = "";
    }
})

tvNavigationBlockThemeButtonWrapper.addEventListener('click', () => {
    tvSwitchTheme();
    tvRefreshTheme();
})

tvSecondSectionButtonServices.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 2.4,
        behavior: 'smooth'
    });
})

tvSecondSectionButtonContacts.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 3.6,
        behavior: 'smooth'
    });
})

tvThirdSectionButtonOfPriceList.addEventListener('click', () => {
    tvPriceListWrapper.style.display = "block";
    setTimeout(() => {
        tvPriceListWrapper.style.opacity = "1";
    }, 1);
})

tvPriceListXMark.addEventListener('click', () => {
    tvPriceListWrapper.style.opacity = "";
    setTimeout(() => {
        tvPriceListWrapper.style.display = "";
    }, 300);
})


const tvActivService = () => {
    const currentService = arrayPriceList[tvActivNumber];
    let currentTitle = currentService.title[tvSelectLang];

    if (currentTitle === "Продвижение в соц. сетях") {
        currentTitle = "Продвижение в социальных сетях"
    }

    tvThirdSectionTitle.textContent = currentTitle;

    tvThirdSectionImg.src = `/img/svg/tablet-vertical/src/${[tvSelectTheme]}/tv-third-section-img ${currentService.title.eng}.svg`;
    tvThirdSectionText0.textContent = currentService.description[tvSelectLang][0];
    tvThirdSectionText1.textContent = currentService.description[tvSelectLang][1];

    currentService.prices.map((serviceData, number) => {
        const { nameOfServise, cost } = serviceData;
        const tvPriceListServiceName = document.getElementById(`tv-price-list-service-name-${number}`);
        const tvPriceListServiceCost = document.getElementById(`tv-price-list-service-cost-${number}`);
        tvPriceListServiceCost.textContent = `£${cost}`;
        tvPriceListServiceName.textContent = nameOfServise[tvSelectLang];

    })
}

tvActivService();

tvFourthSectionChoiceOfService.addEventListener('click', (event) => {
    event.stopPropagation();
    const newDropListWrapper = document.createElement('div');
    newDropListWrapper.id = "tv-drop-list";
    tvDropListWrapper.style.height = "42.74611vw"

    if (tvSelectLang === "eng") {
        const actualityCategory = arrayPriceList.map((service) => service.title.eng).filter((textCategory) => {
            return textCategory !== tvSelectCategory;
        });
        actualityCategory.forEach(textSelectCategoty => {
            const newDropListPoint = document.createElement('div');
            newDropListPoint.textContent = textSelectCategoty;
            newDropListPoint.classList = "tv-drop-list-item";
            newDropListPoint.id = textSelectCategoty;

            newDropListPoint.addEventListener('click', (event) => {

                event.stopPropagation();
                tvSelectCategory = textSelectCategoty;
                tvChoiceOfServicePlaceholder.textContent = textSelectCategoty;
                newDropListWrapper.style.opacity = "0";
                tvFourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
                newDropListWrapper.style.pointerEvents = "none";
                tvChoiceServecesTitle.style.color = "";
                tvChoiceOfServicePlaceholder.style.color = "";
                tvFourthSectionChoiceOfService.style.borderBottomColor = "";
                tvFourthSectionChoiceOfServiceArrowPath.style.fill = "var(--svgColor)";
                tvFourthSectionChoiceOfServiceArrowPath.style.stroke = "var(--svgColor)";
                if (resultChecked !== null) {
                    allInputsHave();
                }
            });
            newDropListWrapper.appendChild(newDropListPoint);

        });
    } else {
        const actualityCategory = arrayPriceList.map((service) => service.title.rus).filter((textCategory) => {
            return textCategory !== tvSelectCategory;
        });
        actualityCategory.forEach(textSelectCategoty => {
            const newDropListPoint = document.createElement('div');
            newDropListPoint.textContent = textSelectCategoty;
            newDropListPoint.classList = "tv-drop-list-item";
            newDropListPoint.id = textSelectCategoty;

            newDropListPoint.addEventListener('click', (event) => {

                event.stopPropagation();
                tvSelectCategory = textSelectCategoty;
                tvChoiceOfServicePlaceholder.textContent = textSelectCategoty;
                newDropListWrapper.style.opacity = "0";
                tvFourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
                newDropListWrapper.style.pointerEvents = "none";
                if (resultChecked !== null) {
                    allInputsHave();
                }


            });
            newDropListWrapper.appendChild(newDropListPoint);

        });

    }

    newDropListWrapper.style.opacity = "1";
    tvFourthSectionChoiceOfServiceArrow.style.rotate = "-90deg";
    tvFourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 0)";
    newDropListWrapper.style.pointerEvents = "all";
    if (tvSelectTheme === "light") {
        tvChoiceOfServicePlaceholder.style.color = "var(--ltText)";
    } else {
        tvChoiceOfServicePlaceholder.style.color = "var(--dtText)";
    }
    const possibleDublicate = document.getElementById("tv-drop-list");
    if (possibleDublicate) {
        tvDropListWrapper.removeChild(possibleDublicate);
    }
    tvDropListWrapper.appendChild(newDropListWrapper);

    document.addEventListener('click', () => {
        if (!tvSelectCategory) {
            if (tvSelectTheme === "light") {
                tvChoiceOfServicePlaceholder.style.color = "var(--ltText)";
            } else {
                tvChoiceOfServicePlaceholder.style.color = "var(--dtText)";
            }
        };
        newDropListWrapper.style.opacity = "0";
        tvDropListWrapper.style.height = "";
        newDropListWrapper.style.pointerEvents = "none";
        tvFourthSectionChoiceOfServiceArrow.style.rotate = "";
    });
});

const tvSetupAndTranslateForSelectService = (event) => {
    event.preventDefault();
    window.scrollTo({
        top: window.innerWidth * 3.6,
        behavior: 'smooth'
    });

    if (tvSelectLang === "eng") {
        tvTextarea.textContent = textForApplication.eng[tvNumberOfService];
        let selCat = arrayPriceList.map((service) => service.title.eng)[tvActivNumber];
        if (selCat !== tvSelectCategory && arrayPriceList.map((service) => service.title.eng).includes(selCat)) {
            tvChoiceOfServicePlaceholder.textContent = selCat;
            tvFourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
            if (tvSelectTheme === "light") {
                tvChoiceOfServicePlaceholder.style.color = "var(--ltText)";
            } else {
                tvChoiceOfServicePlaceholder.style.color = "var(--dtText)";
            }
            tvSelectCategory = selCat;
            allInputsHave();
        }
    } else {
        tvTextarea.textContent = textForApplication.rus[tvNumberOfService];
        let selCat = arrayPriceList.map((service) => service.title.rus)[tvActivNumber];
        if (selCat !== tvSelectCategory && arrayPriceList.map((service) => service.title.rus).includes(selCat)) {
            tvChoiceOfServicePlaceholder.textContent = selCat;
            tvFourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
            if (tvSelectTheme === "light") {
                tvChoiceOfServicePlaceholder.style.color = "var(--ltText)";
            } else {
                tvChoiceOfServicePlaceholder.style.color = "var(--dtText)";
            }
            tvSelectCategory = selCat;
            allInputsHave();
        }
    }
}



tvThirdSectionButtonOfOrder.addEventListener('click', (event) => {
    event.preventDefault();
    tvNumberOfService = tvActivNumber;
    tvSetupAndTranslateForSelectService(event);
    tvTextarea.textContent = textForApplication.eng[0]
})

tvThirdSectionButtonOfConsultation.addEventListener('click', (event) => {
    event.preventDefault();
    tvNumberOfService = tvActivNumber;
    tvSetupAndTranslateForSelectService(event);
    tvTextarea.textContent = textForApplication[tvSelectLang][1]
})

tvThirdSectionButtonOfQuestion.addEventListener('click', (event) => {
    event.preventDefault();
    tvNumberOfService = tvActivNumber;
    tvSetupAndTranslateForSelectService(event);
    tvTextarea.textContent = textForApplication[tvSelectLang][2]
})

tvThirdSectionButtonOfReview.addEventListener('click', (event) => {
    event.preventDefault();
    tvNumberOfService = tvActivNumber;
    tvSetupAndTranslateForSelectService(event);
    tvTextarea.textContent = textForApplication[tvSelectLang][3]
})


const tvReviewsArrowLeft = document.getElementById("tv-five-section-button-left");
const tvReviewsArrowRight = document.getElementById("tv-five-section-button-right");

let number = 0;
let float = false;

const upperloadReviews = (numberActivReviews, direction) => {
    if (!float) {
        number = numberActivReviews >= 0 ? numberActivReviews % reviews.length : (reviews.length - 1);
        const data = reviews[number];
        float = true;
        tvUpperBlock.style.opacity = "0";
        tvLowerBlock.style.opacity = "0";
        if (direction) {
            tvUpperBlock.style.left = "-6vw";
            tvLowerBlock.style.left = "35vw";
        } else {
            tvUpperBlock.style.left = "19vw";
            tvLowerBlock.style.left = "60vw";
        }
        setTimeout(() => {
            tvUpperBlock.style.opacity = "";
            tvLowerBlock.style.opacity = "";
            tvUpperBlock.style.left = "";
            tvLowerBlock.style.left = "";
            float = false;
        }, 500);
        setTimeout(() => {
            if (tvSelectLang === "eng") {
                tvReviewsUpperName.textContent = data.top.title.eng;
                tvReviewsUpperUpperText.textContent = data.top.upperText.eng;
                tvReviewsUpperLowerText.textContent = data.top.lowerText.eng;
                tvReviewsLowerName.textContent = data.bottom.title.eng;
                tvReviewsLowerUpperText.textContent = data.bottom.upperText.eng;
                tvReviewsLowerLowerText.textContent = data.bottom.lowerText.eng;
            } else {
                tvReviewsUpperName.textContent = data.top.title.rus;
                tvReviewsUpperUpperText.textContent = data.top.upperText.rus;
                tvReviewsUpperLowerText.textContent = data.top.lowerText.rus;
                tvReviewsLowerName.textContent = data.bottom.title.rus;
                tvReviewsLowerUpperText.textContent = data.bottom.upperText.rus;
                tvReviewsLowerLowerText.textContent = data.bottom.lowerText.rus;
            }
            tvReviewsUpperImg.src = `/img/png/reviews-img-${data.top.title.eng}.png`;
            tvReviewsLowerImg.src = `/img/png/reviews-img-${data.bottom.title.eng}.png`;
        }, 400);
    }
}

upperloadReviews(0);

tvReviewsArrowLeft.addEventListener('click', () => {
    upperloadReviews(--number, true)
})

tvReviewsArrowRight.addEventListener('click', () => {
    upperloadReviews(++number, false)
})


let scrollLvl = 1;
const visableBlocks = 5;
const buffer = [];
const gapDivs = 2.59067;
const startDivTop = -23.31606;
const divHeight = 20.72539;

const resetBlocks = () => {
    while (buffer.length > 0) {
        tvThirdSectionRightServicesWrapper.removeChild(buffer.shift().link)
    }

}

const createDivBlocks = () => {

    let i = scrollLvl % (arrayPriceList.length);

    while (buffer.length < (visableBlocks + 2)) {
        if (i !== tvActivNumber) {
            const div = document.createElement('div');

            const service = arrayPriceList[i];
            const divImg = document.createElement('img');
            const divH3 = document.createElement('h3');

            div.id = `tv-third-section-right-services-${buffer.length}`;
            div.classList = "tv-third-section-right-services";
            div.style.top = startDivTop + (gapDivs + divHeight) * buffer.length + "vw";
            divImg.src = `/img/svg/tablet-vertical/src/${[tvSelectTheme]}/${service.title.eng}.svg`;
            divH3.textContent = service.title[tvSelectLang]
            if (tvSelectTheme === "light") {
                divH3.classList = `tv-third-section-right-services-h3-light`;
            } else {
                divH3.classList = `false`;
            }
            div.appendChild(divImg);
            div.appendChild(divH3);
            tvThirdSectionRightServicesWrapper.appendChild(div);

            div.addEventListener('click', () => {
                tvActivNumber = buffer[Math.round(Number(div.id[div.id.length - 1]))].serviceId;
                tvActivService();
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

createDivBlocks(); const movePlitka = (deltaGap) => {
    for (let index = 0; index < buffer.length; index++) {
        const newTop = startDivTop + (gapDivs + divHeight) * index + deltaGap + "vw";
        buffer[index].link.style.top = newTop;
    }
}

let tvThirdSectionAnimation = false;

tvThirdSectionTopArrow.addEventListener('click', () => {
    if (!tvThirdSectionAnimation) {
        tvThirdSectionAnimation = true;
        movePlitka(-gapDivs - divHeight)
        setTimeout(() => {
            tvThirdSectionAnimation = false;
            scrollLvl = (scrollLvl + 1) % (arrayPriceList.length);

            if (scrollLvl === tvActivNumber) {
                scrollLvl = (scrollLvl + 1) % (arrayPriceList.length);
            }

            resetBlocks();
            createDivBlocks();
        }, 300);
    }

})

tvThirdSectionBottomArrow.addEventListener('click', () => {
    if (!tvThirdSectionAnimation) {
        tvThirdSectionAnimation = true;
        movePlitka(gapDivs + divHeight)
        setTimeout(() => {
            tvThirdSectionAnimation = false;
            scrollLvl = (scrollLvl - 1);
            if (scrollLvl === 0) {
                scrollLvl = arrayPriceList.length - 1;
            }
            if (scrollLvl === tvActivNumber) {
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


const sendToApplicationMainContent = document.getElementById("tv-send-to-application-main-content");
const sendToApplicationWrapper = document.getElementById("tv-send-to-application-wrapper");
const sendToApplicationMainContentTitle = document.getElementById("tv-send-to-application-main-content-title");
const sendToApplicationMainContentText = document.getElementById("tv-send-to-application-main-content-text");
const sendToApplicationMainContentImg = document.getElementById("tv-send-to-application-main-content-img");
const sendToApplicationMainContentImgSecces = document.getElementById("tv-send-to-application-main-content-img-secces");
const sendToApplicationMainContentImgWrong = document.getElementById("tv-send-to-application-main-content-img-wrong");

const choiceServecesTitleWrapper = document.getElementById("tv-choice-serveces-title-wrapper");
const choiceServecesTitleText = document.getElementById("tv-choice-serveces-title");
const choiceServecesCheckbox = document.getElementById("tv-choice-serveces-checkbox");
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
        if (tvSelectTheme === "light") {
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



tvSubmitButtonFourthSection.addEventListener('click', () => {
    const data = {
        text: `
    First Name: ${tvInputFirstName.value}, 
    Last Name: ${tvInputLastName.value}, 
    Phone: ${tvInputPhone.value}, 
    Email: ${tvInputEmail.value}, 
    Service: ${tvChoiceOfServicePlaceholder.textContent},
    Text: ${tvTextarea.value}`,
        hasPrepaymant: checkbox,
        service: `${tvChoiceOfServicePlaceholder.textContent}`,
        price: arrayPriceList[arrayPriceList.map((category) => category.title[tvSelectLang]).findIndex(el => el === tvChoiceOfServicePlaceholder.textContent)].prices[0].cost * 100,
        email: tvInputEmail.value
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
                            if (tvSelectLang === "eng") {
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
                            if (tvSelectLang === "eng") {
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
                            if (tvSelectLang === "eng") {
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
    const alternativeContactPhone = document.getElementById("tv-four-section-contacts-phone");
    alternativeContactPhone.addEventListener('click', () => {
        window.location.href = `tel:${dataContats.Phone}`;
    })

    const alternativeContactEmail = document.getElementById("tv-four-section-contacts-email");
    alternativeContactEmail.addEventListener('click', () => {
        window.location.href = `email:${dataContats.Email}`;
    })

    const alternativeContactFacebook = document.getElementById("tv-four-section-contacts-facebook");
    alternativeContactFacebook.addEventListener('click', () => {
        window.location.href = `${dataContats.Facebook}`;
    })

    const alternativeContactTelegram = document.getElementById("tv-four-section-contacts-telegram");
    alternativeContactTelegram.addEventListener('click', () => {
        window.location.href = `${dataContats.Telegram}`;
    })

}

uploadLinks()