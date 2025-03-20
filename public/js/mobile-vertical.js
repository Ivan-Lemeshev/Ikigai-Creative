import arrayPriceList from "./arrayPriceList.js";
import localizationWrapper from "./localization-data.js";
import reviews from "./reviews-mobile.js";
import themeWrapper from "./switchTheme-data.js";
import dataContats from "./links.js";
import url from "./url.js"
import { coursesTextForApplication } from "./slogans.js";
import coursesData from "./courses.js"

const mvNavButton = document.getElementById("mv-nav-button");
const mvNavigationBlock = document.getElementById("mv-navigation-block");
const mvNavigationBlockItem0 = document.getElementById("mv-navigation-block-item-0");
const mvNavigationBlockItem1 = document.getElementById("mv-navigation-block-item-1");
const mvNavigationBlockItem2 = document.getElementById("mv-navigation-block-item-2");
const mvNavigationBlockItem3 = document.getElementById("mv-navigation-block-item-3");
const mvNavigationBlockItem4 = document.getElementById("mv-navigation-block-item-4");

const mvSixthSectionMainBlockArrowLeft = document.getElementById("mv-sixth-section-main-block-arrow-left");
const mvSixthSectionMainBlockArrowRight = document.getElementById("mv-sixth-section-main-block-arrow-right");
const mvUpperBlock = document.getElementById("mv-sixth-section-main-text-review-0");
const mvLowerBlock = document.getElementById("mv-sixth-section-main-text-review-1");
const mvBlockTitle = document.getElementById("mv-sixth-section-main-block-all-text-title");
const mvBlockImg = document.getElementById("mv-sixth-section-main-block-photo");
const mvnumberOfReviews = document.getElementById("mv-sixth-section-number-of-reviews");
let number = 0;
let float = false;
const choiceServecesSquare = document.getElementById("mv-choice-serveces-square");
let course = false;

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
        top: window.innerWidth * 6.7,
        behavior: 'smooth'
    });
})

mvNavigationBlockItem3.addEventListener('click', () => {
    mvNavigationBlock.style.left = "";
    setTimeout(() => {
        mvNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 8.55,
        behavior: 'smooth'
    });
})

mvNavigationBlockItem4.addEventListener('click', () => {
    mvNavigationBlock.style.left = "";
    setTimeout(() => {
        mvNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 11.8,
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
const mvLight = document.getElementById("mv-navigation-block-light-button");

const mvSwitchLocalization = () => {
    mvSelectLang = mvSelectLang === "eng" ? "rus" : "eng";
    for (let id in localizationWrapper) { // перебираем все айдишники
        const data = localizationWrapper[id]; // пой айди получаю информацию 

        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        element.textContent = data[mvSelectLang]; //   обновляю текст

        if (mvSelectLang === "rus") { // добавляем стили к русскому тексту 
            const allStyles = data.styles;
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
const mvFooterRus = document.getElementById("mv-footer-rus");
const mvFooterEng = document.getElementById("mv-footer-eng");


const mvRefreshDataForLocalization = () => {

    const current = arrayPriceList[mvActivNumber];


    current.prices.map((serviceData, number) => {
        const { nameOfServise, cost } = serviceData;
        const mvPriceListServiceName = document.getElementById(`mv-price-list-service-name-${number}`);
        const mvPriceListServiceCost = document.getElementById(`mv-price-list-service-cost-${number}`);
        mvPriceListServiceCost.textContent = `£${cost}`;
        mvPriceListServiceName.textContent = nameOfServise[mvSelectLang];
    })

    if (mvSelectLang === "rus") {
        mvInputFirstName.placeholder = "Имя";
        mvInputLastName.placeholder = "Фамилия";
        mvInputPhone.placeholder = "Телефон";
        mvTextarea.placeholder = "В этом поле вы можете указать указать любые дополнительные данные или пожелания по заказу."
        mvBlockTitle.textContent = reviews[number].title.rus;
        mvUpperBlock.textContent = reviews[number].upperText.rus;
        mvLowerBlock.textContent = reviews[number].lowerText.rus;
        mvFooterEng.style.display = "none";
        mvFooterRus.style.display = "flex";

    } else {
        mvInputFirstName.placeholder = "First Name";
        mvInputLastName.placeholder = "Last Name";
        mvInputPhone.placeholder = "Phone";
        mvTextarea.placeholder = "In this field, you can provide any additional details or requests for your order, including your preferred method of contact.";
        mvBlockTitle.textContent = reviews[number].title.eng;
        mvUpperBlock.textContent = reviews[number].upperText.eng;
        mvLowerBlock.textContent = reviews[number].lowerText.eng;
        mvFooterEng.style.display = "flex";
        mvFooterRus.style.display = "none";

    }

    for (let index = 0; index < arrayPriceList.length; index++) {

        if (mvSelectLang === "rus") {
            mvThirdSectionTitle.textContent = current.title.rus;
            mvThirdSectionText0.textContent = current.description.rus[0];
            mvThirdSectionText1.textContent = current.description.rus[1];
        } else {
            mvThirdSectionTitle.textContent = current.title.eng;
            mvThirdSectionText0.textContent = current.description.eng[0];
            mvThirdSectionText1.textContent = current.description.eng[1];
        }
    }
}

const mvPriceListButton = document.getElementById("mv-price-list-button");
const mvPriceListWrapper = document.getElementById("mv-price-list-wrapper");
const mvPriceListX = document.getElementById("mv-price-list-x-mark");

const mvThirdSectionLeftArrow = document.getElementById("mv-third-section-left-arrow")
const mvThirdSectionRightArrow = document.getElementById("mv-third-section-right-arrow")

const mvFifvthSectionImgPath = document.getElementById("mv-fifvth-section-img-path");
const mvFifvthSectionMainContent = document.getElementById("mv-fifvth-section-main-content");

const mvInputFirstName = document.getElementById("mv-fifvth-section-input-first-name");
const mvInputLastName = document.getElementById("mv-fifvth-section-input-last-name");
const mvInputPhone = document.getElementById("mv-fifvth-section-input-phone");
const mvInputEmail = document.getElementById("mv-fifvth-section-input-email");
const mvTextarea = document.getElementById("mv-textarea");


let mvSelectTheme = "light";

const mvSwitchTheme = () => {
    mvSelectTheme = mvSelectTheme === "light" ? "dark" : "light";
    for (let id in themeWrapper) { // перебираем все айдишники
        const data = themeWrapper[id]; // пой айди получаю информацию 
        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        const allStyles = data.styles;
        element.style.color = allStyles[mvSelectTheme].color;
        element.style.background = allStyles[mvSelectTheme].background;
    }
}

const mvThirdSectionWrapperImg = document.getElementById("mv-third-section-wrapper-img");

const mvPriceListButtonImg = document.getElementById("mv-price-list-button-img");

const mvCourseDescriptionImg = document.getElementById("mv-course-description-img");
const mvCourseSuitableImg = document.getElementById("mv-course-suitable-img");
const mvCourseComplexityImg = document.getElementById("mv-course-complexity-img");
const mvCourseOutlineImg = document.getElementById("mv-course-outline-img");


const mvButtonMoreLowerPartButtons0 = document.getElementById("mv-button-more-lower-part-buttons-0");
const mvButtonMoreLowerPartButtons1 = document.getElementById("mv-button-more-lower-part-buttons-1");
const mvButtonMoreLowerPartButtons2 = document.getElementById("mv-button-more-lower-part-buttons-2");

const mvButtonMoreLowerPartButtonsImg1 = document.getElementById("mv-button-more-lower-part-buttons-0-img");
const mvButtonMoreLowerPartButtonsImg2 = document.getElementById("mv-button-more-lower-part-buttons-1-img");
const mvButtonMoreLowerPartButtonsImg3 = document.getElementById("mv-button-more-lower-part-buttons-2-img");



const mvRefreshTheme = () => {
    const service = arrayPriceList[mvActivNumber]
    const mvWrapperForImg1 = document.getElementById("mv-wrapper-for-img-1");
    const mvWrapperForImg2 = document.getElementById("mv-wrapper-for-img-2");
    const mvWrapperForImg3 = document.getElementById("mv-wrapper-for-img-3");
    const mvWrapperForImg4 = document.getElementById("mv-wrapper-for-img-4");
    const mvWrapperForImg5 = document.getElementById("mv-wrapper-for-img-5");
    const mvWrapperForImg0 = document.getElementById("mv-wrapper-for-img-0");
    const mvFourthSectionImg1 = document.getElementById("mv-fourth-section-img-1");
    const mvFourthSectionImg2 = document.getElementById("mv-fourth-section-img-2");
    const mvFourthSectionImg3 = document.getElementById("mv-fourth-section-img-3");
    const mvFourthSectionImg4 = document.getElementById("mv-fourth-section-img-4");
    const mvFourthSectionImg5 = document.getElementById("mv-fourth-section-img-5");
    const mvFourthSectionImg6 = document.getElementById("mv-fourth-section-img-6");
    const dropListActivCircle0 = document.getElementById("mv-fifvth-section-drop-list-activ-circle-0");
    const dropListActivCircle1 = document.getElementById("mv-fifvth-section-drop-list-activ-circle-1");
    const dropListActivCircle2 = document.getElementById("mv-fifvth-section-drop-list-activ-circle-2");
    const dropListActivCircle3 = document.getElementById("mv-fifvth-section-drop-list-activ-circle-3");
    const dropListActivCircle4 = document.getElementById("mv-fifvth-section-drop-list-activ-circle-4");
    const dropListActivCircle5 = document.getElementById("mv-fifvth-section-drop-list-activ-circle-5");
    const mvSixthSectionLowerImg = document.getElementById("mv-sixth-section-lower-img");
    const mainBlockAllText = document.getElementById("mv-sixth-section-main-block-all-text");
    mvThirdSectionImg.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-third-section-img ${service.title.eng}.svg`;
    mvPriceListButtonImg.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-third-section-right-four-buttons-0.svg`;
    mvButtonMoreLowerPartButtonsImg1.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-third-section-right-four-buttons-1.svg`;
    mvButtonMoreLowerPartButtonsImg2.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-third-section-right-four-buttons-2.svg`;
    mvButtonMoreLowerPartButtonsImg3.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-third-section-right-four-buttons-3.svg`;
    mvThirdSectionLeftArrow.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-third-section-left-arrow.svg`;
    mvThirdSectionRightArrow.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-third-section-right-arrow.svg`;
    mvFourthSectionImg1.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-fourth-section-service-0.svg`;
    mvFourthSectionImg2.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-fourth-section-service-1.svg`;
    mvFourthSectionImg3.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-fourth-section-service-2.svg`;
    mvFourthSectionImg4.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-fourth-section-service-3.svg`;
    mvFourthSectionImg5.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-fourth-section-service-4.svg`;
    mvFourthSectionImg6.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-fourth-section-service-5.svg`;
    mvPriceListX.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-price-list-x-mark.svg`;
    mvSixthSectionLowerImg.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-sixth-section-lower-img.svg`;
    mvSixthSectionMainBlockArrowLeft.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-sixth-section-main-block-arrow-left.svg`;
    mvSixthSectionMainBlockArrowRight.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-sixth-section-main-block-arrow-right.svg`;

    if (mvSelectTheme === "dark") {
        mvLight.textContent = "Night"
        mvThirdSectionWrapperImg.style.border = "0.24875621890547264vw solid var(--ltSeparationLine)"
        mvPriceListButton.style.border = "0.24875621890547264vw solid var(--ltSeparationLine)";
        mvButtonMoreLowerPartButtons0.style.border = "0.24875621890547264vw solid var(--ltSeparationLine)";
        mvButtonMoreLowerPartButtons1.style.border = "0.24875621890547264vw solid var(--ltSeparationLine)";
        mvButtonMoreLowerPartButtons2.style.border = "0.24875621890547264vw solid var(--ltSeparationLine)";
        mvWrapperForImg1.style.border = "0.24875621890547264vw solid var(--ltSeparationLine)";
        mvWrapperForImg2.style.border = "0.24875621890547264vw solid var(--ltSeparationLine)";
        mvWrapperForImg3.style.border = "0.24875621890547264vw solid var(--ltSeparationLine)";
        mvWrapperForImg4.style.border = "0.24875621890547264vw solid var(--ltSeparationLine)";
        mvWrapperForImg5.style.border = "0.24875621890547264vw solid var(--ltSeparationLine)";
        mvWrapperForImg0.style.border = "0.24875621890547264vw solid var(--ltSeparationLine)";
        mvFifvthSectionImgPath.style.fill = "#F3F3F3";
        mvFifvthSectionMainContent.style.border = "0.4975124378109453vw solid rgba(214, 214, 214, 0.5)";
        mvInputFirstName.classList = "mv-fifvth-section-input-dark";
        mvInputLastName.classList = "mv-fifvth-section-input-dark";
        mvInputPhone.classList = "mv-fifvth-section-input-dark";
        mvInputEmail.classList = "mv-fifvth-section-input-dark";
        dropListActivCircle0.style.border = "0.24875621890547264vw solid var(--ltElementBackground)";
        dropListActivCircle1.style.border = "0.24875621890547264vw solid var(--ltElementBackground)";
        dropListActivCircle2.style.border = "0.24875621890547264vw solid var(--ltElementBackground)";
        dropListActivCircle3.style.border = "0.24875621890547264vw solid var(--ltElementBackground)";
        dropListActivCircle4.style.border = "0.24875621890547264vw solid var(--ltElementBackground)";
        dropListActivCircle5.style.border = "0.24875621890547264vw solid var(--ltElementBackground)";
        mvTextarea.classList = "mv-textarea-dark";
        mainBlockAllText.style.border = "0.24875621890547264vw solid rgba(214, 214, 214, 0.5)";
        document.documentElement.style.setProperty('--svgColor', '#F3F3F3');
        document.documentElement.style.setProperty('--svgColorMobile', '#2E2E2E');
        choiceServecesSquare.style.border = "0.12437810945273632vw var(--ltSeparationLine) solid";
    } else {
        mvLight.textContent = "Light"
        mvThirdSectionWrapperImg.style.border = "";
        mvPriceListButton.style.border = "";
        mvButtonMoreLowerPartButtons0.style.border = "";
        mvButtonMoreLowerPartButtons1.style.border = "";
        mvButtonMoreLowerPartButtons2.style.border = "";
        mvWrapperForImg1.style.border = "";
        mvWrapperForImg2.style.border = "";
        mvWrapperForImg3.style.border = "";
        mvWrapperForImg4.style.border = "";
        mvWrapperForImg5.style.border = "";
        mvWrapperForImg0.style.border = "";
        mvFifvthSectionImgPath.style.fill = "#1C1C1C";
        mvFifvthSectionMainContent.style.border = "";
        mvInputFirstName.classList = "mv-fifvth-section-input-light";
        mvInputLastName.classList = "mv-fifvth-section-input-light";
        mvInputPhone.classList = "mv-fifvth-section-input-light";
        mvInputEmail.classList = "mv-fifvth-section-input-light";
        dropListActivCircle0.style.border = "";
        dropListActivCircle1.style.border = "";
        dropListActivCircle2.style.border = "";
        dropListActivCircle3.style.border = "";
        dropListActivCircle4.style.border = "";
        dropListActivCircle5.style.border = "";
        mvTextarea.classList = "mv-textarea-light";
        mainBlockAllText.style.border = "";
        document.documentElement.style.setProperty('--svgColor', '#2E2E2E');
        document.documentElement.style.setProperty('--svgColorMobile', '#E8E8E8');
        choiceServecesSquare.style.border = "";
    }
}

mvLang.addEventListener('click', () => {
    mvSwitchLocalization();
    mvRefreshDataForLocalization();
    mvNavigationBlock.style.left = "";
    setTimeout(() => {
        mvNavigationBlock.style.display = "";
    }, 500);
})

mvLight.addEventListener('click', () => {
    mvSwitchTheme();
    mvRefreshTheme();
    mvNavigationBlock.style.left = "";
    setTimeout(() => {
        mvNavigationBlock.style.display = "";
    }, 500);
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

const mvCourseDescriptionTitle = document.getElementById("mv-course-description-title");

const mvActivService = () => {
    const currentService = arrayPriceList[mvActivNumber];
    if (course) {
        const courseImg = document.getElementById("mv-third-section-course-img");
        courseImg.style.display = "none";
        mvThirdSectionWrapperImg.removeChild(courseImg);
    }
    course = false;
    mvPriceListButtonImg.style.display = "";
    mvButtonMoreLowerPartButtonsImg1.style.display = "";
    mvButtonMoreLowerPartButtonsImg2.style.display = "";
    mvButtonMoreLowerPartButtonsImg3.style.display = "";
    mvCourseDescriptionImg.style.display = "";
    mvCourseSuitableImg.style.display = "";
    mvCourseComplexityImg.style.display = "";
    mvCourseOutlineImg.style.display = "";
    mvPriceListButton.style.border = "";
    mvCourseDescriptionTitle.style.display = "";
    mvThirdSectionText0.style.marginTop = "";
    mvThirdSectionText1.style.marginTop = "";
    
    setTimeout(() => {
        mvThirdSectionTitle.textContent = currentService.title[mvSelectLang];
        mvThirdSectionImg.style.display = "";
        mvThirdSectionImg.src = `/img/svg/mobile-vertical/src/${mvSelectTheme}/mv-third-section-img ${currentService.title.eng}.svg`;
        mvThirdSectionText0.textContent = currentService.description[mvSelectLang][0];
        mvThirdSectionText1.textContent = currentService.description[mvSelectLang][1];

        currentService.prices.map((serviceData, number) => {
            const { nameOfServise, cost } = serviceData;
            const mvPriceListServiceName = document.getElementById(`mv-price-list-service-name-${number}`);
            const mvPriceListServiceCost = document.getElementById(`mv-price-list-service-cost-${number}`);
            mvPriceListServiceCost.textContent = `£${cost}`;
            mvPriceListServiceName.textContent = nameOfServise[mvSelectLang];
        })
    }, 100);
}

mvActivService()

mvFourthSectionButton0.addEventListener('click', () => {
    mvActivNumber = 0;
    mvActivService()

    window.scrollTo({
        top: window.innerWidth * 4.3,
        behavior: 'smooth'
    });

})

mvFourthSectionButton1.addEventListener('click', () => {
    mvActivNumber = 1;
    mvActivService()
    window.scrollTo({
        top: window.innerWidth * 4.3,
        behavior: 'smooth'
    });
})

mvFourthSectionButton2.addEventListener('click', () => {
    mvActivNumber = 2;
    mvActivService()
    window.scrollTo({
        top: window.innerWidth * 4.3,
        behavior: 'smooth'
    });
})

mvFourthSectionButton3.addEventListener('click', () => {
    mvActivNumber = 3;
    mvActivService()
    window.scrollTo({
        top: window.innerWidth * 4.3,
        behavior: 'smooth'
    });
})

mvFourthSectionButton4.addEventListener('click', () => {
    mvActivNumber = 4;
    mvActivService()
    window.scrollTo({
        top: window.innerWidth * 4.3,
        behavior: 'smooth'
    });
})

mvFourthSectionButton5.addEventListener('click', () => {
    mvActivNumber = 5;
    mvActivService()
    window.scrollTo({
        top: window.innerWidth * 4.3,
        behavior: 'smooth'
    });
})


mvThirdSectionRightArrow.addEventListener('click', () => {
    mvActivNumber++;
    if (mvActivNumber === arrayPriceList.length) {
        mvActivNumber = 0;
    }
    mvActivService();
})

mvThirdSectionLeftArrow.addEventListener('click', () => {
    mvActivNumber--;
    if (mvActivNumber < 0) {
        mvActivNumber = arrayPriceList.length - 1;
    }
    mvActivService();
})

const mvSecondSectionButtonServices = document.getElementById("mv-second-section-button-services");
const mvSecondSectionButtonContacts = document.getElementById("mv-second-section-button-contacts");

mvSecondSectionButtonServices.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 6.7,
        behavior: 'smooth'
    });
})

mvSecondSectionButtonContacts.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 8.5,
        behavior: 'smooth'
    });
})



mvPriceListButton.addEventListener('click', () => {
    if (!course) {
        mvPriceListWrapper.style.display = "block";
        setTimeout(() => {
            mvPriceListWrapper.style.opacity = "1";
        }, 1);
    }
})

mvPriceListX.addEventListener('click', () => {
    mvPriceListWrapper.style.opacity = "";
    setTimeout(() => {
        mvPriceListWrapper.style.display = "";
    }, 300);
})

const mvTextForApplication = {
    eng: [
        "Hello, I want to get advice on the chosen service",
        "Hello, I have used this service and I want to leave a review:",
        "Hello, I want to get an answer to the question:"
    ],

    rus: [
        "Здравстуйте, я хочу воспользоваться выбранной услугой",
        "Здравстуйте, я воспользовался вашей услугой и хочу оставить о ней отзыв",
        "Здравстуйте, я хочу задать вам несколько вопросов"
    ]
}



const capitalize = (str) => {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


const mvSubmitButton = document.getElementById("mv-submit-button");


const mvVoidInput = () => {
    mvSubmitButton.className = "";
}

mvInputFirstName.addEventListener('input', () => {
    mvInputFirstName.style.borderBottom = "";
    if (mvSelectTheme === "light") {
        mvInputFirstName.classList = "mv-fifvth-section-input-light";
    } else {
        mvInputFirstName.classList = "mv-fifvth-section-input-dark";
    }
    if (mvSelectLang === "rus") {
        mvInputFirstName.placeholder = "Имя";
    } else {
        mvInputFirstName.placeholder = "First Name";
    }

    const inputValue = mvInputFirstName.value;
    let editValue = inputValue.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');

    if (editValue.length > 10) {
        editValue = editValue.slice(0, 10);
    }
    if (editValue.length > 0) {
        mvAllInputsHave();
    } else {
        mvVoidInput();
    }
    mvInputFirstName.value = capitalize(editValue);
});

mvInputLastName.addEventListener('input', () => {
    mvInputLastName.style.borderBottom = "";
    if (mvSelectTheme === "light") {
        mvInputLastName.classList = "mv-fifvth-section-input-light";
    } else {
        mvInputLastName.classList = "mv-fifvth-section-input-dark";
    }

    if (mvSelectLang === "rus") {
        mvInputLastName.placeholder = "Фамилия";
    } else {
        mvInputLastName.placeholder = "Last Name";
    }

    const inputValue = mvInputLastName.value;
    let editValue = inputValue.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
    if (editValue.length > 10) {
        editValue = editValue.slice(0, 10);
    }
    if (editValue.length > 0) {
        mvAllInputsHave();
    } else {
        mvVoidInput();
    }
    mvInputLastName.value = capitalize(editValue);
});

mvInputPhone.addEventListener('input', () => {

    if (mvSelectLang === "rus") {
        mvInputPhone.placeholder = "Телефон";
    } else {
        mvInputPhone.placeholder = "Phone";
    }
    mvInputPhone.style.borderBottom = "";
    if (mvSelectTheme === "light") {
        mvInputPhone.classList = "mv-fifvth-section-input-light";
    } else {
        mvInputPhone.classList = "mv-fifvth-section-input-dark";
    }
    const inputValue = mvInputPhone.value;
    let editValue = inputValue.replace(/[^0-9+]/g, '');
    if (editValue.length > 15) {
        editValue = editValue.slice(0, 15);
    }
    if (editValue.length > 0) {
        mvAllInputsHave();
    } else {
        mvVoidInput();
    }
    mvInputPhone.value = capitalize(editValue);


});

mvInputEmail.addEventListener('input', () => {
    mvInputEmail.placeholder = "Email";
    mvInputEmail.style.borderBottom = "";
    if (mvSelectTheme === "light") {
        mvInputEmail.classList = "mv-fifvth-section-input-light";
    } else {
        mvInputEmail.classList = "mv-fifvth-section-input-dark";
    }
    const inputValue = mvInputEmail.value;
    let editValue = inputValue.replace(/[^a-zA-Z0-9@_\.-]/g, '');
    if (editValue.length > 40) {
        editValue = editValue.slice(0, 40);
    }
    if (editValue.length > 0) {
        mvAllInputsHave();
    } else {
        mvVoidInput();
    }
    mvInputEmail.value = editValue;
});

let applicationShow = false;



const mvFifvthSectionMainContentSubtitle = document.getElementById("mv-fifvth-section-main-content-subtitle");
let mvActivNumberSave = null;

const mvAllInputsHave = () => {
    if (mvInputFirstName.value.length && mvInputLastName.value.length && mvInputPhone.value.length && mvInputEmail.value.length && isValidEmail(mvInputEmail.value) && mvActivNumberSave !== null) {
        mvSubmitButton.classList = "mv-activ-button";
        mvFifvthSectionImgPath.style.fill = "#0088CC";
        applicationShow = true;
        mvFifvthSectionMainContent.style.background = "rgba(0, 136, 204, 0.01)";
        mvFifvthSectionMainContent.style.border = "0.4975124378109453vw solid rgba(46, 46, 46, 0.5)";
        mvSubmitButton.style.border = "";
        mvSubmitButton.style.background = "rgba(0, 154, 236, 0.05)";
        mvSubmitButton.style.color = "#0088CC";
        mvFifvthSectionMainContentSubtitle.textContent = "The service you're interested in:"
        mvFifvthSectionMainContentSubtitle.style.color = "#2B2B2B"
        mvFifvthSectionMainContentSubtitle.style.justifyContent = ""
        return true;
    }
    return false;
}

mvAllInputsHave()



mvSubmitButton.addEventListener('click', (event) => {
    event.preventDefault

    if (!mvAllInputsHave()) {
        window.scrollTo({
            top: window.innerWidth * 8.5,
            behavior: 'smooth'
        });

        mvFifvthSectionImgPath.style.fill = "#ff4f4f";
        mvFifvthSectionMainContent.style.background = "rgba(127, 45, 0, 0.07)";
        mvFifvthSectionMainContent.style.border = "0.4975124378109453vw solid rgba(255, 79, 79, 0.5)";
        mvSubmitButton.style.border = "0.24875621890547264vw solid var(--bad)";
        mvSubmitButton.style.background = "rgba(236, 82, 0, 0.05)";
        mvSubmitButton.style.color = "var(--bad)";
    }

    if (mvActivNumberSave === null) {
        mvFifvthSectionMainContentSubtitle.textContent = "Choose a service:"
        mvFifvthSectionMainContentSubtitle.style.color = "var(--bad)"
        mvFifvthSectionMainContentSubtitle.style.justifyContent = "flex-start"
    }

    if (mvInputFirstName.value.length < 1) {
        mvInputFirstName.style.borderBottom = "0.24875621890547264vw solid var(--bad)";
        mvInputFirstName.classList = "mv-fifvth-section-input-placeholder";
        mvInputFirstName.placeholder = "Empty field";
    }

    if (mvInputLastName.value.length < 1) {
        mvInputLastName.style.borderBottom = "0.24875621890547264vw solid var(--bad)";
        mvInputLastName.classList = "mv-fifvth-section-input-placeholder";
        mvInputLastName.placeholder = "Empty field";

    }

    if (mvInputPhone.value.length < 1) {
        mvInputPhone.style.borderBottom = "0.24875621890547264vw solid var(--bad)";
        mvInputPhone.classList = "mv-fifvth-section-input-placeholder";
        mvInputPhone.placeholder = "Empty field";
    }

    if (mvInputEmail.value.length < 1) {
        mvInputEmail.style.borderBottom = "0.24875621890547264vw solid var(--bad)";
        mvInputEmail.classList = "mv-fifvth-section-input-placeholder";
        mvInputEmail.placeholder = "Invalid email";
    }



})


let mvNumberOfText = 0;
let mvOldActivService = null;



const setupAndTranslateForSelectService = (event) => {
    event.preventDefault();

    window.scrollTo({
        top: window.innerWidth * 9.35,
        behavior: 'smooth'
    });

    if (mvOldActivService !== null) {
        const mvFifvthSectionDropListItemCircle = document.getElementById(`mv-fifvth-section-drop-list-activ-circle-${mvOldActivService}`);
        const mvFifvthSectionDropListItemText = document.getElementById(`mv-fifvth-section-drop-list-item-text-${mvOldActivService}`);
        if (mvSelectTheme === "light") {
            mvFifvthSectionDropListItemCircle.style.background = "";
            mvFifvthSectionDropListItemCircle.style.border = "";
            mvFifvthSectionDropListItemText.style.color = "";
        } else {
            mvFifvthSectionDropListItemCircle.style.background = "";
            mvFifvthSectionDropListItemCircle.style.border = "0.24875621890547264vw solid var(--ltElementBackground)";
            mvFifvthSectionDropListItemText.style.color = "var(--dtText)";
        }

    }

    if (mvSelectLang === "eng") {
        mvTextarea.textContent = mvTextForApplication.eng[mvNumberOfText];
        const mvFifvthSectionDropListItemCircle = document.getElementById(`mv-fifvth-section-drop-list-activ-circle-${mvActivNumber}`);
        const mvFifvthSectionDropListItemText = document.getElementById(`mv-fifvth-section-drop-list-item-text-${mvActivNumber}`);
        mvFifvthSectionDropListItemCircle.style.background = "var(--accent)";
        mvFifvthSectionDropListItemText.style.color = "var(--accent)";
    } else {
        mvTextarea.textContent = mvTextForApplication.rus[mvNumberOfText];
    }

    mvOldActivService = mvActivNumber;
    mvActivNumberSave = mvActivNumber;
}



for (let index = 0; index < arrayPriceList.length; index++) {

    const current = document.getElementById(`mv-fifvth-section-drop-list-item-${index}`);

    current.addEventListener('click', () => {
        if (mvOldActivService !== null) {
            const mvFifvthSectionDropListItemCircle = document.getElementById(`mv-fifvth-section-drop-list-activ-circle-${mvOldActivService}`);
            const mvFifvthSectionDropListItemText = document.getElementById(`mv-fifvth-section-drop-list-item-text-${mvOldActivService}`);
            if (mvSelectTheme === "light") {
                mvFifvthSectionDropListItemCircle.style.background = "";
                mvFifvthSectionDropListItemCircle.style.border = "";
                mvFifvthSectionDropListItemText.style.color = "";
            } else {
                mvFifvthSectionDropListItemCircle.style.background = "";
                mvFifvthSectionDropListItemCircle.style.border = "0.24875621890547264vw solid var(--ltElementBackground)";
                mvFifvthSectionDropListItemText.style.color = "var(--dtText)";
            }
        }

        const mvFifvthSectionDropListItemCircle = document.getElementById(`mv-fifvth-section-drop-list-activ-circle-${index}`);
        const mvFifvthSectionDropListItemText = document.getElementById(`mv-fifvth-section-drop-list-item-text-${index}`);
        mvFifvthSectionDropListItemCircle.style.backgroundColor = "var(--accent)";
        mvFifvthSectionDropListItemText.style.color = "var(--accent)";


        mvOldActivService = index;
        mvActivNumberSave = index;
        mvAllInputsHave()
    })

}

const func = () => {
    if (mvSelectLang === "eng") {
        for (let index = 0; index < mvTextForApplication.eng.length; index++) {
            const button = document.getElementById(`mv-button-more-lower-part-buttons-${index}`);
            button.addEventListener('click', (event) => {
                if (!course) {
                    event.preventDefault();
                    mvNumberOfText = index;
                    setupAndTranslateForSelectService(event);
                }
            })
        }
    } else {
        for (let index = 0; index < mvTextForApplication.rus.length; index++) {
            const button = document.getElementById(`mv-button-more-lower-part-buttons-${index}`);
            button.addEventListener('click', (event) => {
                if (!course) {
                    event.preventDefault();
                    mvNumberOfText = index;
                    setupAndTranslateForSelectService(event);
                }
            })
        }
    }
}


func();




const upperloadReviews = (numberActivReviews) => {
    if (!float) {
        number = numberActivReviews >= 0 ? numberActivReviews % reviews.length : (reviews.length - 1);
        const data = reviews[number];
        float = true;
        mvUpperBlock.style.opacity = "0";
        mvBlockImg.style.opacity = "0";
        mvLowerBlock.style.opacity = "0";
        mvBlockTitle.style.opacity = "0";
        setTimeout(() => {
            mvBlockTitle.style.opacity = "";
            mvUpperBlock.style.opacity = "";
            mvLowerBlock.style.opacity = "";
            mvBlockImg.style.opacity = "";
            float = false;
        }, 500);
        setTimeout(() => {
            if (mvSelectLang === "eng") {
                mvBlockTitle.textContent = data.title.eng;
                mvUpperBlock.textContent = data.upperText.eng;
                mvLowerBlock.textContent = data.lowerText.eng;
            } else {
                mvBlockTitle.textContent = data.title.rus;
                mvUpperBlock.textContent = data.upperText.rus;
                mvLowerBlock.textContent = data.lowerText.rus;
            }
            mvBlockImg.src = `/img/png/reviews-img-${data.title.eng}.png`;
        }, 400);
    }

    mvnumberOfReviews.textContent = `${number + 1}/6`
}


upperloadReviews(0);

mvSixthSectionMainBlockArrowLeft.addEventListener('click', () => {
    upperloadReviews(--number)
})

mvSixthSectionMainBlockArrowRight.addEventListener('click', () => {
    upperloadReviews(++number)
})

const mvThirdSectionButtonOrder = document.getElementById("mv-third-section-button-order");

mvThirdSectionButtonOrder.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 8.5,
        behavior: 'smooth'
    });

    if (mvActivNumberSave !== null) {
        const mvFifvthSectionDropListItemCircle = document.getElementById(`mv-fifvth-section-drop-list-activ-circle-${mvActivNumber}`);
        const mvFifvthSectionDropListItemText = document.getElementById(`mv-fifvth-section-drop-list-item-text-${mvActivNumber}`);
        if (mvSelectTheme === "light") {
            mvFifvthSectionDropListItemCircle.style.background = "";
            mvFifvthSectionDropListItemCircle.style.border = "";
            mvFifvthSectionDropListItemText.style.color = "";

        } else {
            mvFifvthSectionDropListItemCircle.style.background = "";
            mvFifvthSectionDropListItemCircle.style.border = "0.24875621890547264vw solid var(--ltElementBackground)";
            mvFifvthSectionDropListItemText.style.color = "var(--dtText)";
        }
    }
    mvOldActivService = mvActivNumber;
    mvActivNumberSave = mvActivNumber;

    const mvFifvthSectionDropListItemCircle = document.getElementById(`mv-fifvth-section-drop-list-activ-circle-${mvActivNumberSave}`);
    const mvFifvthSectionDropListItemText = document.getElementById(`mv-fifvth-section-drop-list-item-text-${mvActivNumberSave}`);
    mvFifvthSectionDropListItemCircle.style.backgroundColor = "var(--accent)";
    mvFifvthSectionDropListItemText.style.color = "var(--accent)";

})


const sendToApplicationMainContent = document.getElementById("mv-send-to-application-main-content");
const sendToApplicationWrapper = document.getElementById("mv-send-to-application-wrapper");
const sendToApplicationMainContentTitle = document.getElementById("mv-send-to-application-main-content-title");
const sendToApplicationMainContentText = document.getElementById("mv-send-to-application-main-content-text");
const sendToApplicationMainContentImg = document.getElementById("mv-send-to-application-main-content-img");
const sendToApplicationMainContentImgSecces = document.getElementById("mv-send-to-application-main-content-img-secces");
const sendToApplicationMainContentImgWrong = document.getElementById("mv-send-to-application-main-content-img-wrong");

const choiceServecesTitleWrapper = document.getElementById("mv-choice-serveces-title-wrapper");
const choiceServecesTitleText = document.getElementById("mv-choice-serveces-title");
const choiceServecesCheckbox = document.getElementById("mv-choice-serveces-checkbox");
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
        if (mvSelectTheme === "light") {
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


mvSubmitButton.addEventListener('click', () => {
    const data = {
        text: `
    First Name: ${mvInputFirstName.value}, 
    Last Name: ${mvInputLastName.value}, 
    Phone: ${mvInputPhone.value}, 
    Email: ${mvInputEmail.value}, 
    Service: ${arrayPriceList[mvActivNumber].title[mvSelectLang]},
    Text: ${mvTextarea.value}`,
        hasPrepaymant: checkbox,
        service: `${arrayPriceList[mvActivNumber].title[mvSelectLang]}`,
        price: arrayPriceList[arrayPriceList.map((category) => category.title[mvSelectLang]).findIndex(el => el === arrayPriceList[mvActivNumber].title[mvSelectLang])].prices[0].cost * 100,
        email: mvInputEmail.value
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
                            if (mvSelectLang === "eng") {
                                sendToApplicationMainContentTitle.textContent = "Successfully";
                                sendToApplicationMainContentText.textContent = "We have received your application, our experts will contact you with in 1-2 working days."
                            } else {
                                sendToApplicationMainContentTitle.textContent = "Успешно";
                                sendToApplicationMainContentText.textContent = "Мы получили вашу заявку, в течение 1-2 рабочих дней наши специалисты свяжутся с вами."
                            }
                            sendToApplicationMainContentImg.style.display = "none"
                            sendToApplicationMainContentImgSecces.style.display = "block"
                            sendToApplicationMainContent.style.border = "0.12437810945273632vw solid var(--success)";

                            setTimeout(() => {
                                sendToApplicationMainContent.style.opacity = "1"
                            }, 300);
                        }) //если все хорошо

                        .catch(() => {
                            if (mvSelectLang === "eng") {
                                sendToApplicationMainContentTitle.textContent = "Something went wrong";
                                sendToApplicationMainContentText.textContent = "We were unable to register your application, please contact us by phone or social media."
                            } else {
                                sendToApplicationMainContentTitle.textContent = "Что-то пошло не так";
                                sendToApplicationMainContentText.textContent = "Мы не смогли зарегистрировать вашу заявку, пожалуйста, свяжитесь с нами по телефону или через социальные сети."
                            }
                            sendToApplicationMainContentImg.style.display = "none"
                            sendToApplicationMainContentImgWrong.style.display = "block"
                            sendToApplicationMainContent.style.border = "0.12437810945273632vw solid var(--bad)";


                            setTimeout(() => {
                                sendToApplicationMainContent.style.opacity = "1"
                            }, 300);
                        }) // если все плохо

                    setTimeout(() => {
                        sendToApplicationWrapper.style.opacity = "";
                        setTimeout(() => {
                            sendToApplicationWrapper.style.display = "";
                            if (mvSelectLang === "eng") {
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
    const alternativeContactPhone = document.getElementById("mv-fifvth-section-second-content-svg-phone");
    alternativeContactPhone.addEventListener('click', () => {
        window.location.href = `tel:${dataContats.Phone}`;
    })

    const alternativeContactEmail = document.getElementById("mv-fifvth-section-second-content-svg-email");
    alternativeContactEmail.addEventListener('click', () => {
        window.location.href = `email:${dataContats.Email}`;
    })

    const alternativeContactFacebook = document.getElementById("mv-fifvth-section-second-content-svg-facebook");
    alternativeContactFacebook.addEventListener('click', () => {
        window.location.href = `${dataContats.Facebook}`;
    })

    const alternativeContactTelegram = document.getElementById("mv-fifvth-section-second-content-svg-telegram");
    alternativeContactTelegram.addEventListener('click', () => {
        window.location.href = `${dataContats.Telegram}`;
    })

}

uploadLinks()

const mvFourthSectionTitle = document.getElementById("mv-fourth-section-title");
const mvFourthSectionTitleLeftLine = document.getElementById("mv-fourth-section-title-left-line");
const mvFourthSectionTitleRightLine = document.getElementById("mv-fourth-section-title-right-line");


const mvFourthSectionTitleCourses = document.getElementById("mv-fourth-section-title-courses");
const mvFourthSectionTitleLeftLineCourses = document.getElementById("mv-fourth-section-title-courses-left-line");
const mvFourthSectionTitleRightLineCourses = document.getElementById("mv-fourth-section-title-courses-right-line");

const mvFourthSectionSubtitleTopLineCourses = document.getElementById("mv-fourth-section-subtitle-courses-top-line");
const mvFourthSectionSubtitleBottomLineCourses = document.getElementById("mv-fourth-section-subtitle-courses-bottom-line");
const mvFourthSectionSubtitleCourses = document.getElementById("mv-fourth-section-subtitle-courses");

const mvWrapperFourthSectionFirstLineButtons = document.getElementById("mv-wrapper-fourth-section-first-line-buttons");
const mvWrapperFourthSectionSecondLineButtons = document.getElementById("mv-wrapper-fourth-section-second-line-buttons");
const mvWrapperFourthSectionThirdLineButtons = document.getElementById("mv-wrapper-fourth-section-third-line-buttons");

const mvWrapperFourthSectionFirstLineButtonsCourses = document.getElementById("mv-wrapper-fourth-section-first-line-buttons-courses");
const mvWrapperFourthSectionSecondLineButtonsCourses = document.getElementById("mv-wrapper-fourth-section-second-line-buttons-courses");
const mvWrapperFourthSectionThirdLineButtonsCourses = document.getElementById("mv-wrapper-fourth-section-third-line-buttons-courses");

const coursesNavigationMostPopular = document.getElementById("mv-courses-navigation-most-popular-light");
const coursesNavigationBestReviews = document.getElementById("mv-courses-navigation-best-reviews-light");
const coursesNavigationRecentReleases = document.getElementById("mv-courses-navigation-recent-releases-light");
const coursesNavigationSpecializationCourses = document.getElementById("mv-courses-navigation-specialization-courses-light");

const numberOfPageWrapper = document.getElementById("mv-number-of-page");




let paymentCourse = false;
let clickedTop = 0;
let numberOfPage = 1;


let sortedArray = []
sortedArray = [...coursesData];

const visualVitrine = () => {
    for (let index = 0; index <= Math.ceil(sortedArray.length / 2); index++) {
        const upperServise = sortedArray[index];
        const parserUp = new DOMParser();
        const courseImg = parserUp.parseFromString(upperServise.svgCode, "image/svg+xml").documentElement;
        const mvWrapperForImgCourses = document.getElementById(`mv-wrapper-for-img-courses-${index}`);
        const mvNameForCourses = document.getElementById(`mv-name-of-courses-${index}`);
        courseImg.id = `mv-course-img-${index}`;
        courseImg.classList = "mv-course-img";
        let oldSvgElement = document.getElementById(`mv-course-img-${index}`);
        setTimeout(() => {
            mvWrapperForImgCourses.style.opacity = "0";
            mvNameForCourses.style.opacity = "0";
            setTimeout(() => {
                if (oldSvgElement) {
                    mvWrapperForImgCourses.removeChild(oldSvgElement);
                }
                mvWrapperForImgCourses.appendChild(courseImg);
                mvNameForCourses.textContent = upperServise.title[mvSelectLang];
                setTimeout(() => {
                    mvWrapperForImgCourses.style.opacity = "1";
                    mvNameForCourses.style.opacity = "1";
                }, 300);
            }, 300);
        }, 1);
    }
}

const activeClassNumbersOfPage = () => {
    for (let index = 1; index <= Math.ceil(sortedArray.length / 5); index++) {
        const pageClass = document.getElementById(`mv-number-of-page-${index}`);
        if (index == numberOfPage) {
            if (mvSelectTheme === "light") {
                pageClass.classList = "mv-number-of-page-active mv-number-of-page mv-number-of-page-light";
            } else {
                pageClass.classList = "mv-number-of-page-active mv-number-of-page mv-number-of-page-dark";
            }
        } else {
            if (mvSelectTheme === "light") {
                pageClass.classList = "mv-number-of-page-passive mv-number-of-page mv-number-of-page-light";
            } else {
                pageClass.classList = "mv-number-of-page-passive mv-number-of-page mv-number-of-page-dark";
            }
        }
    }
}

const uploadNumbers = (amountPage) => {
    numberOfPage = 1;
    numberOfPageWrapper.replaceChildren();
    for (let index = 1; index <= Math.ceil(amountPage / 2); index++) {
        const newPage = document.createElement("div");
        newPage.textContent = index;
        newPage.classList = "mv-number-of-page";
        newPage.id = `mv-number-of-page-${index}`;
        newPage.addEventListener('click', () => {
            console.log(numberOfPage)
            numberOfPage = index;
            visualVitrine();
            activeClassNumbersOfPage()
            console.log(index)

        })
        numberOfPageWrapper.appendChild(newPage);
    }
}


mvFourthSectionTitleCourses.addEventListener('click', () => {
    course = true;
    uploadNumbers(Math.ceil(sortedArray.length / 3)) // не пойму что не так 
    activeClassNumbersOfPage();
    visualVitrine()
    mvFourthSectionTitle.style.opacity = "0.4";
    mvFourthSectionTitleLeftLine.style.opacity = "0.4";
    mvFourthSectionTitleRightLine.style.opacity = "0.4";

    mvFourthSectionTitleCourses.style.opacity = "1";
    mvFourthSectionTitleLeftLineCourses.style.opacity = "1";
    mvFourthSectionTitleRightLineCourses.style.opacity = "1";

    mvFourthSectionTitleLeftLineCourses.style.height = "8.45771144278607vw";
    mvFourthSectionTitleRightLineCourses.style.height = "8.45771144278607vw";

    mvFourthSectionTitleLeftLineCourses.style.top = "-0.62vw";
    mvFourthSectionTitleRightLineCourses.style.top = "-0.62vw";

    mvFourthSectionSubtitleTopLineCourses.style.opacity = "1";
    mvFourthSectionSubtitleBottomLineCourses.style.opacity = "1";
    mvFourthSectionSubtitleCourses.style.opacity = "1";

    mvWrapperFourthSectionFirstLineButtons.style.opacity = "0";
    mvWrapperFourthSectionSecondLineButtons.style.opacity = "0";
    mvWrapperFourthSectionThirdLineButtons.style.opacity = "0";

    mvWrapperFourthSectionFirstLineButtonsCourses.style.display = "flex";
    mvWrapperFourthSectionSecondLineButtonsCourses.style.display = "flex";
    mvWrapperFourthSectionThirdLineButtonsCourses.style.display = "flex";

    coursesNavigationMostPopular.style.display = "block";
    coursesNavigationBestReviews.style.display = "block";
    coursesNavigationRecentReleases.style.display = "block";
    coursesNavigationSpecializationCourses.style.display = "block";

    if (mvSelectLang === "eng") {
        mvFourthSectionSubtitleCourses.textContent = "Most popular"
    } else {
        mvFourthSectionSubtitleCourses.textContent = "Популярные"
    }
    numberOfPageWrapper.style.display = "flex";

    setTimeout(() => {
        coursesNavigationMostPopular.style.opacity = "1";
        coursesNavigationBestReviews.style.opacity = "0.6";
        coursesNavigationRecentReleases.style.opacity = "0.6";
        coursesNavigationSpecializationCourses.style.opacity = "0.6";

        numberOfPageWrapper.style.opacity = "1";

    }, 1);

    setTimeout(() => {
        mvWrapperFourthSectionFirstLineButtons.style.display = "none";
        mvWrapperFourthSectionSecondLineButtons.style.display = "none";
        mvWrapperFourthSectionThirdLineButtons.style.display = "none";

        mvWrapperFourthSectionFirstLineButtonsCourses.style.opacity = "1";
        mvWrapperFourthSectionSecondLineButtonsCourses.style.opacity = "1";
        mvWrapperFourthSectionThirdLineButtonsCourses.style.opacity = "1";
    }, 300);

})

mvFourthSectionTitle.addEventListener('click', () => {

    mvFourthSectionTitle.style.opacity = "";
    mvFourthSectionTitleLeftLine.style.opacity = "";
    mvFourthSectionTitleRightLine.style.opacity = "";

    mvFourthSectionTitleCourses.style.opacity = "";
    mvFourthSectionTitleLeftLineCourses.style.opacity = "";
    mvFourthSectionTitleRightLineCourses.style.opacity = "";

    mvFourthSectionTitleLeftLineCourses.style.height = "";
    mvFourthSectionTitleRightLineCourses.style.height = "";

    mvFourthSectionTitleLeftLineCourses.style.top = "";
    mvFourthSectionTitleRightLineCourses.style.top = "";

    mvFourthSectionSubtitleTopLineCourses.style.opacity = "";
    mvFourthSectionSubtitleBottomLineCourses.style.opacity = "";
    mvFourthSectionSubtitleCourses.style.opacity = "";

    mvWrapperFourthSectionFirstLineButtons.style.display = "";
    mvWrapperFourthSectionSecondLineButtons.style.display = "";
    mvWrapperFourthSectionThirdLineButtons.style.display = "";

    mvWrapperFourthSectionFirstLineButtonsCourses.style.opacity = "";
    mvWrapperFourthSectionSecondLineButtonsCourses.style.opacity = "";
    mvWrapperFourthSectionThirdLineButtonsCourses.style.opacity = "";

    coursesNavigationMostPopular.style.opacity = "";
    coursesNavigationBestReviews.style.opacity = "";
    coursesNavigationRecentReleases.style.opacity = "";
    coursesNavigationSpecializationCourses.style.opacity = "";

    numberOfPageWrapper.style.opacity = "0";


    setTimeout(() => {
        mvWrapperFourthSectionFirstLineButtons.style.opacity = "";
        mvWrapperFourthSectionSecondLineButtons.style.opacity = "";
        mvWrapperFourthSectionThirdLineButtons.style.opacity = "";

        mvWrapperFourthSectionFirstLineButtonsCourses.style.display = "";
        mvWrapperFourthSectionSecondLineButtonsCourses.style.display = "";
        mvWrapperFourthSectionThirdLineButtonsCourses.style.display = "";


    }, 1);

    setTimeout(() => {
        coursesNavigationMostPopular.style.display = "";
        coursesNavigationBestReviews.style.display = "";
        coursesNavigationRecentReleases.style.display = "";
        coursesNavigationSpecializationCourses.style.display = "";
        numberOfPageWrapper.style.display = "none";
    }, 300);
})

coursesNavigationMostPopular.addEventListener('click', () => {
    sortedArray = [...coursesData];
    sortedArray.sort((a, b) => b.popularity - a.popularity);
    uploadNumbers(sortedArray.length / 3)
    coursesNavigationMostPopular.style.opacity = "1";
    coursesNavigationBestReviews.style.opacity = "0.6";
    coursesNavigationRecentReleases.style.opacity = "0.6";
    coursesNavigationSpecializationCourses.style.opacity = "0.6";
    visualVitrine();
    uploadNumbers(Math.ceil(sortedArray.length / 3))
})

coursesNavigationBestReviews.addEventListener('click', () => {
    sortedArray = [...coursesData];
    sortedArray.sort((a, b) => b.MMR - a.MMR);
    uploadNumbers(sortedArray.length / 3)
    coursesNavigationMostPopular.style.opacity = "0.6";
    coursesNavigationBestReviews.style.opacity = "1";
    coursesNavigationRecentReleases.style.opacity = "0.6";
    coursesNavigationSpecializationCourses.style.opacity = "0.6";
    visualVitrine();
})

coursesNavigationRecentReleases.addEventListener('click', () => {
    sortedArray = [...coursesData];
    sortedArray.sort((a, b) => new Date(b.releasesData) - new Date(a.releasesData));
    uploadNumbers(sortedArray.length / 3)
    coursesNavigationMostPopular.style.opacity = "0.6";
    coursesNavigationBestReviews.style.opacity = "0.6";
    coursesNavigationRecentReleases.style.opacity = "1";
    coursesNavigationSpecializationCourses.style.opacity = "0.6";
    visualVitrine();
})

coursesNavigationSpecializationCourses.addEventListener('click', () => {
    sortedArray = [...coursesData];
    sortedArray = sortedArray.filter(Prof => Prof.isProfession);
    uploadNumbers(sortedArray.length / 3)
    coursesNavigationMostPopular.style.opacity = "0.6";
    coursesNavigationBestReviews.style.opacity = "0.6";
    coursesNavigationRecentReleases.style.opacity = "0.6";
    coursesNavigationSpecializationCourses.style.opacity = "1";
    visualVitrine();
})

const courseUpFunction = () => {
    for (let index = 0; index <= Math.ceil(sortedArray.length / 2); index++) {
        const newArray = sortedArray[index];
        const mvWrapperForImgCourses = document.getElementById(`mv-wrapper-for-img-courses-${index}`);
        mvWrapperForImgCourses.addEventListener('click', () => {
            if (course) {
                window.scrollTo({
                    top: window.innerWidth * 4.3,
                    behavior: 'smooth'
                });
                mvThirdSectionTitle.textContent = newArray.title[mvSelectLang];
                mvThirdSectionImg.style.display = "none";
                mvPriceListButtonImg.style.display = "none";
                mvButtonMoreLowerPartButtonsImg1.style.display = "none";
                mvButtonMoreLowerPartButtonsImg2.style.display = "none";
                mvButtonMoreLowerPartButtonsImg3.style.display = "none";
                mvCourseDescriptionImg.style.display = "block";
                mvCourseSuitableImg.style.display = "block";
                mvCourseComplexityImg.style.display = "block";
                mvCourseOutlineImg.style.display = "block";
                mvCourseDescriptionImg.style.opacity = "0.4";
                mvCourseDescriptionTitle.style.display = "block";
                mvThirdSectionText0.style.marginTop = "3.482587064676617vw";
                mvThirdSectionText1.style.marginTop = "3.482587064676617vw";
                mvPriceListButton.style.border = "0.24875621890547264vw solid rgba(46, 46, 46, 0.2)";
                const parser = new DOMParser();
                const courseImg = parser.parseFromString(newArray.svgCode, "image/svg+xml").documentElement;
                if (!course) {
                    courseImg.style.display = "block";
                }
                courseImg.id = `mv-third-section-course-img`;
                courseImg.classList = "mv-third-section-course-img";
                let oldSvgElement = document.getElementById(`mv-third-section-course-img`);

                if (oldSvgElement) {
                    mvThirdSectionWrapperImg.removeChild(oldSvgElement);
                }
                mvThirdSectionWrapperImg.appendChild(courseImg);
            }
        })
    }
}

courseUpFunction()