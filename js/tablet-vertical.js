import localizationWrapper from "./localization-data.js";
import arrayPriceList from "./arrayPriceList.js";
import { ideasArrayUp, ideasArrayDown, textForApplication } from "./slogans.js";
import reviews from "./reviews.js";
import dataContats from "./links.js";


const tvNavButton = document.getElementById("tv-nav-button");
const tvNavigationBlock = document.getElementById("tv-navigation-block");
const tvNavigationBlockItem0 = document.getElementById("tv-navigation-block-item-0");
const tvNavigationBlockItem1 = document.getElementById("tv-navigation-block-item-1");
const tvNavigationBlockItem2 = document.getElementById("tv-navigation-block-item-2");
const tvNavigationBlockItem3 = document.getElementById("tv-navigation-block-item-3");
const tvNavigationBlockItem4 = document.getElementById("tv-navigation-block-item-4");

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

const tvLowerBlock = document.getElementById("tv-reviews-wrapper-right");
const tvReviewsLowerName = document.getElementById("tv-reviews-name-right");
const tvReviewsLowerImg = document.getElementById("tv-reviews-photo-right");
const tvReviewsLowerUpperText = document.getElementById("tv-reviews-upper-text-right");
const tvReviewsLowerLowerText = document.getElementById("tv-reviews-lower-text-right");

let tvSelectCategory = "";

let tvSelectLang = "eng";
const tvLang = document.getElementById("tv-navigation-block-lang-button");

const tvSwitchLocalization = () => {
    tvSelectLang = tvSelectLang === "eng" ? "rus" : "eng";
    for (let id in localizationWrapper) { // перебираем все айдишники
        const data = localizationWrapper[id]; // пой айди получаю информацию 

        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        element.textContent = data[tvSelectLang]; //   обновляю текст

        if (tvSelectLang === "rus") { // добавляем стили к русскому тексту 
            const allStyles = data.styles;
            element.style.fontFamily = "'Lato'";
            for (let style in allStyles) {
                const valueStyle = allStyles[style];
                element.style[style] = valueStyle; // придумать как сбрасывать стили для ангийского языка
            }
        }
    }
}

const tvInputFirstName = document.getElementById("tv-input-first-name");
const tvInputLastName = document.getElementById("tv-input-last-name");
const tvInputPhone = document.getElementById("tv-input-phone");
const tvInputEmail = document.getElementById("tv-input-email");
const tvTextarea = document.getElementById("tv-textarea");
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

        if (tvSelectLang === "rus") {
            tvPriceListServiceName.style.fontFamily = "Lato";
            tvPriceListServiceName.style.fontSize = "2.59067vw";
            tvPriceListServiceCost.style.fontFamily = "Lato";
            tvPriceListServiceCost.style.fontSize = "2.59067vw";
        } else {
            tvPriceListServiceName.style.fontFamily = "";
            tvPriceListServiceName.style.fontSize = "";
            tvPriceListServiceCost.style.fontFamily = "";
            tvPriceListServiceCost.style.fontSize = "";
        }
    })

    if (tvSelectLang === "rus") {
        tvCentralText.style.fontFamily = "Lato";
        tvInputFirstName.placeholder = "Имя";
        tvInputFirstName.style.fontFamily = "Lato";
        tvInputFirstName.style.fontSize = "2.33161vw";
        tvInputFirstName.style.lineHeight = "2.79793vw";
        tvInputLastName.placeholder = "Фамилия";
        tvInputLastName.style.fontFamily = "Lato";
        tvInputLastName.style.fontSize = "2.33161vw";
        tvInputLastName.style.lineHeight = "2.79793vw";
        tvInputPhone.placeholder = "Телефон";
        tvInputPhone.style.fontFamily = "Lato";
        tvInputPhone.style.fontSize = "2.33161vw";
        tvInputPhone.style.lineHeight = "2.79793vw";
        tvInputEmail.placeholder = "Email";
        tvInputEmail.style.fontFamily = "Lato";
        tvInputEmail.style.fontSize = "2.33161vw";
        tvInputEmail.style.lineHeight = "2.79793vw";
        tvTextarea.placeholder = "В этом поле вы можете указать указать любые дополнительные данные или пожелания по заказу."
        tvTextarea.style.fontFamily = "Lato";
        tvFooterEng.style.display = "none";
        tvFooterRus.style.display = "block";
        tvReviewsUpperName.style.fontFamily = "Lato";
        tvReviewsUpperUpperText.style.fontFamily = "Lato";
        tvReviewsLowerName.style.fontFamily = "Lato";
        tvReviewsUpperUpperText.style.fontFamily = "Lato";
        tvReviewsUpperLowerText.style.fontFamily = "Lato";
        tvReviewsLowerUpperText.style.fontFamily = "Lato";
        tvReviewsLowerLowerText.style.fontFamily = "Lato";


    } else {
        tvCentralText.style.fontFamily = "";
        tvInputFirstName.placeholder = "First Name";
        tvInputFirstName.style.fontFamily = "";
        tvInputFirstName.style.fontSize = "";
        tvInputFirstName.style.lineHeight = "";
        tvInputLastName.placeholder = "Last Name";
        tvInputLastName.style.fontFamily = "";
        tvInputLastName.style.fontSize = "";
        tvInputLastName.style.lineHeight = "";
        tvInputPhone.placeholder = "Phone";
        tvInputPhone.style.fontFamily = "";
        tvInputPhone.style.fontSize = "";
        tvInputPhone.style.lineHeight = "";
        tvInputEmail.placeholder = "Email";
        tvInputEmail.style.fontFamily = "";
        tvInputEmail.style.fontSize = "";
        tvInputEmail.style.lineHeight = "";
        tvTextarea.placeholder = "In tvis field, you can provide any additional details or requests for your order, including your preferred metvod of contact.";
        tvTextarea.style.fontFamily = "";
        tvFooterEng.style.display = "block";
        tvFooterRus.style.display = "none";
        tvReviewsUpperName.style.fontFamily = "";
        tvReviewsUpperUpperText.style.fontFamily = "";
        tvReviewsLowerName.style.fontFamily = "";
        tvReviewsUpperUpperText.style.fontFamily = "";
        tvReviewsUpperLowerText.style.fontFamily = "";
        tvReviewsLowerUpperText.style.fontFamily = "";
        tvReviewsLowerLowerText.style.fontFamily = "";
    }

    for (let index = 0; index < arrayPriceList.length; index++) {
        if (tvSelectLang === "rus") {
            tvThirdSectionTitle.textContent = current.title.rus;
            tvThirdSectionTitle.style.fontFamily = "Lato";
            tvThirdSectionTitle.style.fontSize = "2.84974vw";
            tvThirdSectionText0.textContent = current.description.rus[0];
            tvThirdSectionText0.style.fontFamily = "Lato";
            tvThirdSectionText0.style.fontSize = "2.07254vw";   
            tvThirdSectionText0.style.lineHeight = "2.6943vw";
            tvThirdSectionText1.textContent = current.description.rus[1];
            tvThirdSectionText1.style.fontFamily = "Lato";
            tvThirdSectionText1.style.fontSize = "2.07254vw";
            tvThirdSectionText1.style.lineHeight = "2.6943vw";
        } else {
            tvThirdSectionTitle.textContent = current.title.eng;
            tvThirdSectionTitle.style.fontFamily = "";
            tvThirdSectionTitle.style.fontSize = "";
            tvThirdSectionText0.textContent = current.description.eng[0];
            tvThirdSectionText0.style.fontFamily = "";
            tvThirdSectionText0.style.fontSize = "";
            tvThirdSectionText1.style.lineHeight = "";
            tvThirdSectionText1.textContent = current.description.eng[1];
            tvThirdSectionText1.style.fontFamily = "";
            tvThirdSectionText1.style.fontSize = "";
            tvThirdSectionText1.style.lineHeight = "";
        }

    }
}

const tvFourSectionTitle = document.getElementById("tv-four-section-title");
const tvMainSendForm = document.getElementById("tv-main-send-form");
const tvMainSendFormTitle = document.getElementById("tv-main-send-form-title");
const tvFourSectionBlueGradient = document.getElementById("tv-four-section-blue-gradient");
const tvFourSectionRedGradient = document.getElementById("tv-four-section-red-gradient");
const tvChoiceServecesTitle = document.getElementById("tv-choice-serveces-title");

const tvFourthSectionChoiceOfService = document.getElementById("tv-choice-of-service");
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


const allInputsHave = () => {
    if (tvInputFirstName.value.length && tvInputLastName.value.length && tvInputPhone.value.length && tvInputEmail.value.length && isValidEmail(tvInputEmail.value) && tvSelectCategory) {
        tvSubmitButtonFourthSection.className = "th-send-form-submit-activ";
        tvSubmitButtonFourthSection.style.border = "";
        tvSubmitButtonFourthSection.style.color = "";
        tvFourSectionTitle.textContent = "Contact us";
        tvFourSectionTitle.style.color = "";
        tvMainSendForm.style.border = "";
        tvMainSendForm.style.backgroundColor = "";
        tvMainSendFormTitle.style.color = "";
        tvFourSectionBlueGradient.style.opacity = "1";
        tvFourSectionRedGradient.style.opacity = "0";
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
        tvInputFirstName.style.borderBottom = "0.12953vw solid var(--blue)";
        tvInputFirstName.style.color = "var(--blue)";
        allInputsHave();
    } else {
        if (tvSelectLang === "rus") {
            tvInputFirstName.placeholder = "Укажите ваше имя";
            tvInputFirstName.style.fontFamily = "Lato";
            tvInputFirstName.style.fontSize = "2.33161vw";
        } else {
            tvInputFirstName.placeholder = "Enter your first name";
            tvInputFirstName.style.fontFamily = "";
            tvInputFirstName.style.fontSize = "";
        }
        tvInputFirstName.style.borderBottom = "0.12953vw solid var(--orangeRed)";
        tvInputFirstName.classList = "th-input-placeholder";
        tvInputFirstName.style.color = "var(--orangeRed)";
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
        tvInputLastName.style.borderBottom = "0.12953vw solid var(--blue)";
        tvInputLastName.style.color = "var(--blue)";
        allInputsHave();
    } else {
        tvInputLastName.style.borderBottom = "0.12953vw solid var(--orangeRed)";
        tvInputLastName.classList = "th-input-placeholder";
        tvInputLastName.style.color = "var(--orangeRed)";
        if (tvSelectLang === "rus") {
            tvInputLastName.placeholder = "Укажите вашу фамилию";
            tvInputLastName.style.fontFamily = "Lato";
            tvInputLastName.style.fontSize = "2.33161vw";
        } else {
            tvInputLastName.placeholder = "Enter your last name";
            tvInputLastName.style.fontFamily = "";
            tvInputLastName.style.fontSize = "";
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
        tvInputPhone.style.borderBottom = "0.12953vw solid var(--blue)";
        tvInputPhone.style.color = "var(--blue)";
        allInputsHave();
    } else {
        tvInputPhone.style.borderBottom = "0.12953vw solid var(--orangeRed)";
        tvInputPhone.classList = "th-input-placeholder";
        tvInputPhone.style.color = "var(--orangeRed)";
        if (tvSelectLang === "rus") {
            tvInputPhone.placeholder = "Напишите ваш телефон";
            tvInputPhone.style.fontFamily = "Lato";
            tvInputPhone.style.fontSize = "2.33161vw";
        } else {
            tvInputPhone.placeholder = "Enter the phone number";
            tvInputPhone.style.fontFamily = "";
            tvInputPhone.style.fontSize = "";
        }
        voidInput();
    }
    tvInputPhone.value = capitalize(editValue);
});

tvInputEmail.addEventListener('input', () => {
    const inputValue = tvInputEmail.value;
    let editValue = inputValue.replace(/[^a-zA-Z1-9@_\.-]/g, '');
    if (editValue.length > 20) {
        editValue = editValue.slice(0, 20);
    }
    if (editValue.length > 0) {
        tvInputEmail.style.borderBottom = "0.12953vw solid var(--blue)";
        tvInputEmail.style.color = "var(--blue)";
        allInputsHave();
    } else {
        tvInputEmail.style.borderBottom = "0.12953vw solid var(--orangeRed)";
        tvInputEmail.classList = "th-input-placeholder";
        tvInputEmail.style.color = "var(--orangeRed)";
        if (tvSelectLang === "rus") {
            tvInputEmail.placeholder = "Введите корректный email";
            tvInputEmail.style.fontFamily = "Lato";
            tvInputEmail.style.fontSize = "2.33161vw";
        } else {
            tvInputEmail.placeholder = "Enter a valid email";
            tvInputEmail.style.fontFamily = "";
            tvInputEmail.style.fontSize = "";
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
        tvInputFirstName.style.borderBottom = "0.12953vw solid var(--orangeRed)";
        tvInputFirstName.classList = "tv-input-placeholder";
        tvInputFirstName.style.color = "var(--orangeRed)";
        if (tvSelectLang === "rus") {
            tvInputFirstName.placeholder = "Укажите ваше имя";
            tvInputFirstName.style.fontFamily = "Lato";
            tvInputFirstName.style.fontSize = "2.33161vw";
        } else {
            tvInputFirstName.placeholder = "Enter your first name";
            tvInputFirstName.style.fontFamily = "";
            tvInputFirstName.style.fontSize = "";
        }

    } else {
        tvInputFirstName.style.borderBottom = "0.12953vw solid var(--blue)";
        tvInputFirstName.style.color = "var(--blue)";


    }
    if (!tvInputLastName.value.length) {
        resultChecked = false;
        tvInputLastName.style.borderBottom = "0.12953vw solid var(--orangeRed)";
        tvInputLastName.classList = "tv-input-placeholder";
        tvInputLastName.style.color = "var(--orangeRed)";
        if (tvSelectLang === "rus") {
            tvInputLastName.placeholder = "Укажите вашу фамилию";
            tvInputLastName.style.fontFamily = "Lato";
            tvInputLastName.style.fontSize = "2.33161vw";
        } else {
            tvInputLastName.placeholder = "Enter your last name";
            tvInputLastName.style.fontFamily = "";
            tvInputLastName.style.fontSize = "";
        }

    } else {
        tvInputLastName.style.borderBottom = "0.12953vw solid var(--blue)";
        tvInputLastName.style.color = "var(--blue)";

    }
    if (!tvInputPhone.value.length) {
        resultChecked = false;
        tvInputPhone.style.borderBottom = "0.12953vw solid var(--orangeRed)";
        tvInputPhone.classList = "tv-input-placeholder";
        tvInputPhone.style.color = "var(--orangeRed)";
        if (tvSelectLang === "rus") {
            tvInputPhone.placeholder = "Напишите ваш телефон";
            tvInputPhone.style.fontFamily = "Lato";
            tvInputPhone.style.fontSize = "2.33161vw";
        } else {
            tvInputPhone.placeholder = "Enter the phone number";
            tvInputPhone.style.fontFamily = "";
            tvInputPhone.style.fontSize = "";
        }

    } else {
        tvInputPhone.style.borderBottom = "0.12953vw solid var(--blue)";
        tvInputPhone.style.color = "var(--blue)";

    }
    if (!tvInputEmail.value.length) {
        resultChecked = false;
        tvInputEmail.style.borderBottom = "0.12953vw solid var(--orangeRed)";
        tvInputEmail.classList = "tv-input-placeholder";
        tvInputEmail.style.color = "var(--orangeRed)";
        if (tvSelectLang === "rus") {
            tvInputEmail.placeholder = "Введите корректный email";
            tvInputEmail.style.fontFamily = "Lato";
            tvInputEmail.style.fontSize = "2.33161vw";
        } else {
            tvInputEmail.placeholder = "Enter a valid email";
            tvInputEmail.style.fontFamily = "";
            tvInputEmail.style.fontSize = "";
        }
    } else {
        tvInputEmail.style.borderBottom = "0.12953vw solid var(--blue)";
        tvInputEmail.style.color = "var(--blue)";

    }

    if (!tvSelectCategory) {
        resultChecked = false;
        tvChoiceServecesTitle.style.color = "var(--orangeRed)";
        tvChoiceOfServicePlaceholder.style.color = "var(--orangeRed)";
        tvFourthSectionChoiceOfService.style.borderBottomColor = "var(--orangeRed)";
        tvFourthSectionChoiceOfServiceArrowPath.style.fill = "#EC5200";
        tvFourthSectionChoiceOfServiceArrowPath.style.stroke = "#EC5200";
    } else {
        tvChoiceServecesTitle.style.color = "";
        tvChoiceOfServicePlaceholder.style.color = "";
        tvFourthSectionChoiceOfService.style.borderBottomColor = "";
        tvFourthSectionChoiceOfServiceArrowPath.style.fill = "#0285CC";
        tvFourthSectionChoiceOfServiceArrowPath.style.stroke = "#0285CC";
    } if (!isValidEmail(tvInputEmail.value)) {
        tvInputEmail.style.borderBottom = "0.12953vw solid var(--orangeRed)";
        tvInputEmail.classList = "tv-input-placeholder";
        tvInputEmail.style.color = "var(--orangeRed)";
        if (tvSelectLang === "rus") {
            tvInputEmail.placeholder = "Введите корректный email";
            tvInputEmail.style.fontFamily = "Lato";
            tvInputEmail.style.fontSize = "2.33161vw";
        } else {
            tvInputEmail.placeholder = "Enter a valid email";
            tvInputEmail.style.fontFamily = "";
            tvInputEmail.style.fontSize = "";
        }
    } else {
        tvInputEmail.style.borderBottom = "0.12953vw solid var(--blue)";
        tvInputEmail.style.color = "var(--blue)";
    }
    if (!resultChecked) {
        tvSubmitButtonFourthSection.style.border = "0.12953vw solid var(--secondBrown)";
        tvSubmitButtonFourthSection.style.color = "var(--secondBrown)";
        tvFourSectionTitle.style.color = "var(--orangeRed)";
        tvMainSendForm.style.border = "0.21598vw solid rgba(236, 82, 0, 0.5)";
        tvMainSendForm.style.backgroundColor = "rgba(236, 82, 0, 0.07)";
        tvMainSendFormTitle.style.color = "var(--orangeRed)";
        tvFourSectionBlueGradient.style.opacity = "0";
        tvFourSectionRedGradient.style.opacity = "1";
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


tvLang.addEventListener('click', () => {
    tvSwitchLocalization();
    tvRefreshDataForLocalization();
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

    tvThirdSectionImg.src = `/img/svg/tablet-horizontal/th-third-section-img ${currentService.title.eng}.svg`;
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
            newDropListPoint.style.fontFamily = "";

            newDropListPoint.addEventListener('click', (event) => {

                event.stopPropagation();
                tvSelectCategory = textSelectCategoty;
                tvChoiceOfServicePlaceholder.textContent = textSelectCategoty;
                newDropListWrapper.style.opacity = "0";
                tvFourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
                tvFourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
                newDropListWrapper.style.pointerEvents = "none";
                tvChoiceServecesTitle.style.color = "";
                tvChoiceOfServicePlaceholder.style.color = "";
                tvFourthSectionChoiceOfService.style.borderBottomColor = "";
                tvFourthSectionChoiceOfServiceArrowPath.style.fill = "#0285CC";
                tvFourthSectionChoiceOfServiceArrowPath.style.stroke = "#0285CC";
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
            newDropListPoint.style.fontFamily = "Lato";

            newDropListPoint.addEventListener('click', (event) => {

                event.stopPropagation();
                tvSelectCategory = textSelectCategoty;
                tvChoiceOfServicePlaceholder.textContent = textSelectCategoty;
                newDropListWrapper.style.opacity = "0";
                tvFourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
                tvFourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
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
    tvChoiceOfServicePlaceholder.style.color = "var(--blue)";
    const possibleDublicate = document.getElementById("tv-drop-list");
    if (possibleDublicate) {
        tvDropListWrapper.removeChild(possibleDublicate);
    }
    tvDropListWrapper.appendChild(newDropListWrapper);

    document.addEventListener('click', () => {
        if (!tvSelectCategory) {
            tvChoiceOfServicePlaceholder.style.color = "var(--darkBlue)";
        };
        newDropListWrapper.style.opacity = "0";
        tvDropListWrapper.style.height = "";
        tvFourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
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
            tvFourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
            tvChoiceOfServicePlaceholder.style.color = "var(--blue)";
            tvSelectCategory = selCat;
            allInputsHave();
        }
    } else {
        tvTextarea.textContent = textForApplication.rus[tvNumberOfService];
        let selCat = arrayPriceList.map((service) => service.title.rus)[tvActivNumber];
        if (selCat !== tvSelectCategory && arrayPriceList.map((service) => service.title.rus).includes(selCat)) {
            tvChoiceOfServicePlaceholder.textContent = selCat;
            tvFourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
            tvFourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
            tvChoiceOfServicePlaceholder.style.color = "var(--blue)";
            tvSelectCategory = selCat;
            allInputsHave();
        }
    }
}

const tvThirdSectionButtonOfConsultation = document.getElementById("tv-consultation-button");
const tvThirdSectionButtonOfReview = document.getElementById("tv-review-button");
const tvThirdSectionButtonOfQuestion = document.getElementById("tv-question-button");
const tvThirdSectionButtonOfOrder = document.getElementById("tv-button-more-lower-part-buttons-3");


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