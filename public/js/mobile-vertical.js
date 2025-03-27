import arrayPriceList from "./arrayPriceList.js";
import localizationWrapper from "./localization-data.js";
import reviews from "./reviews-mobile.js";
import themeWrapper from "./switchTheme-data.js";
import dataContats from "./links.js";
import url from "./url.js"
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
let paymentCourse = false;
let studyClicked = false;
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
const mvThirdSectionText2 = document.getElementById("mv-third-section-text-2");

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
const mvCourseDescriptionTitle = document.getElementById("mv-course-description-title");


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

    if (!course) {
        if (mvSelectLang === "rus") {
            mvThirdSectionTitle.textContent = current.title.rus;
            mvThirdSectionText0.textContent = current.description.rus[0];
            mvThirdSectionText1.textContent = current.description.rus[1];
        } else {
            mvThirdSectionTitle.textContent = current.title.eng;
            mvThirdSectionText0.textContent = current.description.eng[0];
            mvThirdSectionText1.textContent = current.description.eng[1];
        }
    } else {
        if (!studyClicked) {
            mvThirdSectionTitle.textContent = sortedArray[score].title[mvSelectLang];
            mvThirdSectionText0.textContent = sortedArray[score].descriptionMobile[mvSelectLang][0];
            mvThirdSectionText1.textContent = sortedArray[score].descriptionMobile[mvSelectLang][1];
            mvThirdSectionText2.textContent = sortedArray[score].descriptionMobile[mvSelectLang][2];
        } else {
            if (mvSelectLang === "eng") {
                mvCourseDescriptionTitle.textContent = "Let's get started..."
                mvThirdSectionText0.textContent = "We are delighted that you have chosen our course! We will do everything we can to ensure that your learning is effective and brings meaningful results.";
                mvThirdSectionText1.textContent = "There is only one step left - choose where you want to start!";
            } else {
                mvCourseDescriptionTitle.textContent = "Давайте начнем..."
                mvThirdSectionText0.textContent = "Мы рады, что вы выбрали наш курс! Мы сделаем всё, чтобы ваше обучение было эффективным и принесло значимые результаты.";
                mvThirdSectionText1.textContent = "Остался всего один шаг — выберите, с чего хотите начать! ";

            }
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

const mvThirdSectionButtonOrderText = document.getElementById("mv-third-section-button-order-text");



const mvButtonMoreLowerPartButtons0 = document.getElementById("mv-button-more-lower-part-buttons-0");
const mvButtonMoreLowerPartButtons1 = document.getElementById("mv-button-more-lower-part-buttons-1");
const mvButtonMoreLowerPartButtons2 = document.getElementById("mv-button-more-lower-part-buttons-2");

const mvButtonMoreLowerPartButtonsImg1 = document.getElementById("mv-button-more-lower-part-buttons-0-img");
const mvButtonMoreLowerPartButtonsImg2 = document.getElementById("mv-button-more-lower-part-buttons-1-img");
const mvButtonMoreLowerPartButtonsImg3 = document.getElementById("mv-button-more-lower-part-buttons-2-img");

const mvCourseOrderButtonModalWindowContentImgLight1 = document.getElementById("mv-course-order-button-modal-window-content-img-light-1");
const mvCourseOrderButtonModalWindowContentImgLight2 = document.getElementById("mv-course-order-button-modal-window-content-img-light-2");
const mvCourseOrderButtonModalWindowContentImgLight3 = document.getElementById("mv-course-order-button-modal-window-content-img-light-3");

const mvCourseOrderButtonModalWindowContentImgDark1 = document.getElementById("mv-course-order-button-modal-window-content-img-dark-1");
const mvCourseOrderButtonModalWindowContentImgDark2 = document.getElementById("mv-course-order-button-modal-window-content-img-dark-2");
const mvCourseOrderButtonModalWindowContentImgDark3 = document.getElementById("mv-course-order-button-modal-window-content-img-dark-3");

const mvWrapperForImgCourses0 = document.getElementById("mv-wrapper-for-img-courses-0");
const mvWrapperForImgCourses1 = document.getElementById("mv-wrapper-for-img-courses-1");
const mvWrapperForImgCourses2 = document.getElementById("mv-wrapper-for-img-courses-2");
const mvWrapperForImgCourses3 = document.getElementById("mv-wrapper-for-img-courses-3");
const mvWrapperForImgCourses4 = document.getElementById("mv-wrapper-for-img-courses-4");
const mvWrapperForImgCourses5 = document.getElementById("mv-wrapper-for-img-courses-5");

const mvCourseOrderButtonModalWindowContentWrapper1 = document.getElementById("mv-course-order-button-modal-window-content-wrapper-1");
const mvCourseOrderButtonModalWindowContentWrapper2 = document.getElementById("mv-course-order-button-modal-window-content-wrapper-2");
const mvCourseOrderButtonModalWindowContentWrapper3 = document.getElementById("mv-course-order-button-modal-window-content-wrapper-3");
const mvCourseOrderButtonModalWindowContentWrapper4 = document.getElementById("mv-course-order-button-modal-window-content-wrapper-4");



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
        mvLight.textContent = "Night";
        mvCourseOrderButtonModalWindowContentImgLight1.style.display = "none";
        mvCourseOrderButtonModalWindowContentImgDark1.style.display = "block";
        mvCourseOrderButtonModalWindowContentImgLight2.style.display = "none";
        mvCourseOrderButtonModalWindowContentImgDark2.style.display = "block";
        mvCourseOrderButtonModalWindowContentImgLight3.style.display = "none";
        mvCourseOrderButtonModalWindowContentImgDark3.style.display = "block";
        mvThirdSectionWrapperImg.style.border = "0.24875621890547264vw solid var(--ltSeparationLine)";
        mvPriceListButton.style.border = "0.12437810945273632vw solid var(--dtText)";
        mvButtonMoreLowerPartButtons0.style.border = "0.12437810945273632vw solid var(--dtText)";
        mvButtonMoreLowerPartButtons1.style.border = "0.12437810945273632vw solid var(--dtText)";
        mvButtonMoreLowerPartButtons2.style.border = "0.12437810945273632vw solid var(--dtText)";
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
        document.documentElement.style.setProperty('--svgColorMobileDark', '#D6D6D6');
        document.documentElement.style.setProperty('--svgColorMobileDark2', '#1C1C1C');
        choiceServecesSquare.style.border = "0.12437810945273632vw var(--ltSeparationLine) solid";
        mvWrapperForImgCourses0.style.border = "0.12437810945273632vw var(--dtText) solid";
        mvWrapperForImgCourses1.style.border = "0.12437810945273632vw var(--dtText) solid";
        mvWrapperForImgCourses2.style.border = "0.12437810945273632vw var(--dtText) solid";
        mvWrapperForImgCourses3.style.border = "0.12437810945273632vw var(--dtText) solid";
        mvWrapperForImgCourses4.style.border = "0.12437810945273632vw var(--dtText) solid";
        mvWrapperForImgCourses5.style.border = "0.12437810945273632vw var(--dtText) solid";
        mvCourseOrderButtonModalWindowContentWrapper1.style.border = "0.12437810945273632vw var(--dtText) solid";
        mvCourseOrderButtonModalWindowContentWrapper2.style.border = "0.12437810945273632vw var(--dtText) solid";
        mvCourseOrderButtonModalWindowContentWrapper3.style.border = "0.12437810945273632vw var(--dtText) solid";
        mvCourseOrderButtonModalWindowContentWrapper4.style.border = "0.12437810945273632vw var(--dtText) solid";
    } else {
        mvCourseOrderButtonModalWindowContentWrapper1.style.border = "";
        mvCourseOrderButtonModalWindowContentWrapper2.style.border = "";
        mvCourseOrderButtonModalWindowContentWrapper3.style.border = "";
        mvCourseOrderButtonModalWindowContentWrapper4.style.border = "";
        mvCourseOrderButtonModalWindowContentImgLight1.style.display = "";
        mvCourseOrderButtonModalWindowContentImgDark1.style.display = "";
        mvCourseOrderButtonModalWindowContentImgLight2.style.display = "";
        mvCourseOrderButtonModalWindowContentImgDark2.style.display = "";
        mvCourseOrderButtonModalWindowContentImgLight3.style.display = "";
        mvCourseOrderButtonModalWindowContentImgDark3.style.display = "";
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
        document.documentElement.style.setProperty('--svgColorMobileDark', '#2B2B2B');
        document.documentElement.style.setProperty('--svgColorMobileDark2', '#E8E8E8');
        choiceServecesSquare.style.border = "";
        mvWrapperForImgCourses0.style.border = "";
        mvWrapperForImgCourses1.style.border = "";
        mvWrapperForImgCourses2.style.border = "";
        mvWrapperForImgCourses3.style.border = "";
        mvWrapperForImgCourses4.style.border = "";
        mvWrapperForImgCourses5.style.border = "";
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


const mvActivService = () => {
    mvPriceListButton.style.pointerEvents = "";
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
    if (mvSelectTheme === "light") {
        mvPriceListButton.style.border = "";
    } else {
        mvPriceListButton.style.border = "0.12437810945273632vw solid var(--dtText)";
    }
    mvCourseDescriptionTitle.style.display = "";
    mvThirdSectionText0.style.marginTop = "";
    mvThirdSectionText1.style.marginTop = "";
    mvThirdSectionText2.style.display = "";

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


    if (mvSelectLang === "eng") {
        mvThirdSectionButtonOrderText.textContent = "Order";
    } else {
        mvThirdSectionButtonOrderText.textContent = "Заказать";
    }
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

let score;


let sortedArray = []
sortedArray = [...coursesData];


mvThirdSectionRightArrow.addEventListener('click', () => {
    if (!course) {
        mvActivNumber++;
        if (mvActivNumber === arrayPriceList.length) {
            mvActivNumber = 0;
        }
        mvActivService();
    } else {
        score += 1;
        if (score === sortedArray.length) {
            score = 0;
        }

        mvThirdSectionTitle.style.opacity = "0";

        const parser = new DOMParser();
        const courseImg = parser.parseFromString(sortedArray[score].svgCode, "image/svg+xml").documentElement;
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



        mvCourseOutlineImg.style.opacity = "";
        mvCourseComplexityImg.style.opacity = "";
        mvCourseSuitableImg.style.opacity = "";

        mvButtonMoreLowerPartButtons0.style.pointerEvents = "";
        mvButtonMoreLowerPartButtons1.style.pointerEvents = "";
        mvButtonMoreLowerPartButtons2.style.pointerEvents = "";

        mvButtonMoreLowerPartButtons0.style.border = "";
        mvButtonMoreLowerPartButtons1.style.border = "";
        mvButtonMoreLowerPartButtons2.style.border = "";

        mvCourseDescriptionImg.style.opacity = "0.4";
        mvPriceListButton.style.pointerEvents = "none";
        if (mvSelectTheme === "light") {
            mvPriceListButton.style.border = "0.24875621890547264vw solid rgba(46, 46, 46, 0.2)";
        } else {
            mvPriceListButton.style.border = "0.24875621890547264vw solid rgba(232, 232, 232, 0.2)";
        }

        courseButtonMoreThirdQuestionWrapper0.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper1.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper2.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper3.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper4.style.opacity = "";

        mvCourseDescriptionTitle.style.opacity = "0";

        mvSuitableBlockWrapper0.style.opacity = "";
        mvSuitableBlockWrapper1.style.opacity = "";
        mvSuitableBlockWrapper2.style.opacity = "";
        mvSuitableBlockWrapper3.style.opacity = "";

        mvThirdSectionText0.style.opacity = "0";
        mvThirdSectionText1.style.opacity = "0";
        mvThirdSectionText2.style.opacity = "0";

        mvThirdSectionButtonOrder.style.opacity = "0";

        setTimeout(() => {
            mvSuitableBlockWrapper0.style.display = "";
            mvSuitableBlockWrapper1.style.display = "";
            mvSuitableBlockWrapper2.style.display = "";
            mvSuitableBlockWrapper3.style.display = "";

            mvThirdSectionText0.style.display = "block";
            mvThirdSectionText1.style.display = "block";
            mvThirdSectionText2.style.display = "block";

            mvThirdSectionText0.textContent = sortedArray[score].descriptionMobile[mvSelectLang][0];
            mvThirdSectionText1.textContent = sortedArray[score].descriptionMobile[mvSelectLang][1];
            mvThirdSectionText2.textContent = sortedArray[score].descriptionMobile[mvSelectLang][2];

            mvThirdSectionTitle.textContent = sortedArray[score].title[mvSelectLang];

            if (mvSelectLang === "eng") {
                mvCourseDescriptionTitle.textContent = "Description";
            } else {
                mvCourseDescriptionTitle.textContent = "Описание";
            }

            courseButtonMoreThirdQuestionWrapper0.style.display = "";
            courseButtonMoreThirdQuestionWrapper1.style.display = "";
            courseButtonMoreThirdQuestionWrapper2.style.display = "";
            courseButtonMoreThirdQuestionWrapper3.style.display = "";
            courseButtonMoreThirdQuestionWrapper4.style.display = "";

            setTimeout(() => {
                mvThirdSectionButtonOrder.style.opacity = "1";
                mvThirdSectionTitle.style.opacity = "1";
                mvCourseDescriptionTitle.style.opacity = "1";
                mvThirdSectionText0.style.opacity = "1";
                mvThirdSectionText1.style.opacity = "1";
                mvThirdSectionText2.style.opacity = "1";
            }, 300);
        }, 300);
    }
})

mvThirdSectionLeftArrow.addEventListener('click', () => {
    if (!course) {
        mvActivNumber--;
        if (mvActivNumber < 0) {
            mvActivNumber = arrayPriceList.length - 1;
        }
        mvActivService();
    } else {
        score -= 1;
        if (score === -1) {
            score = sortedArray.length - 1;
        }

        mvThirdSectionTitle.style.opacity = "0"

        const parser = new DOMParser();
        const courseImg = parser.parseFromString(sortedArray[score].svgCode, "image/svg+xml").documentElement;
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


        mvCourseOutlineImg.style.opacity = "";
        mvCourseComplexityImg.style.opacity = "";
        mvCourseSuitableImg.style.opacity = "";

        mvButtonMoreLowerPartButtons0.style.pointerEvents = "";
        mvButtonMoreLowerPartButtons1.style.pointerEvents = "";
        mvButtonMoreLowerPartButtons2.style.pointerEvents = "";

        mvButtonMoreLowerPartButtons0.style.border = "";
        mvButtonMoreLowerPartButtons1.style.border = "";
        mvButtonMoreLowerPartButtons2.style.border = "";

        mvCourseDescriptionImg.style.opacity = "0.4";
        mvPriceListButton.style.pointerEvents = "none";
        if (mvSelectTheme === "light") {
            mvPriceListButton.style.border = "0.24875621890547264vw solid rgba(46, 46, 46, 0.2)";
        } else {
            mvPriceListButton.style.border = "0.24875621890547264vw solid rgba(232, 232, 232, 0.2)";
        }

        courseButtonMoreThirdQuestionWrapper0.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper1.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper2.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper3.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper4.style.opacity = "";

        mvCourseDescriptionTitle.style.opacity = "0";

        mvSuitableBlockWrapper0.style.opacity = "";
        mvSuitableBlockWrapper1.style.opacity = "";
        mvSuitableBlockWrapper2.style.opacity = "";
        mvSuitableBlockWrapper3.style.opacity = "";

        mvThirdSectionText0.style.opacity = "0";
        mvThirdSectionText1.style.opacity = "0";
        mvThirdSectionText2.style.opacity = "0";

        mvThirdSectionButtonOrder.style.opacity = "0";

        setTimeout(() => {
            mvSuitableBlockWrapper0.style.display = "";
            mvSuitableBlockWrapper1.style.display = "";
            mvSuitableBlockWrapper2.style.display = "";
            mvSuitableBlockWrapper3.style.display = "";

            mvThirdSectionText0.style.display = "block";
            mvThirdSectionText1.style.display = "block";
            mvThirdSectionText2.style.display = "block";

            mvThirdSectionText0.textContent = sortedArray[score].descriptionMobile[mvSelectLang][0];
            mvThirdSectionText1.textContent = sortedArray[score].descriptionMobile[mvSelectLang][1];
            mvThirdSectionText2.textContent = sortedArray[score].descriptionMobile[mvSelectLang][2];
            mvThirdSectionTitle.textContent = sortedArray[score].title[mvSelectLang];

            if (mvSelectLang === "eng") {
                mvCourseDescriptionTitle.textContent = "Description";
            } else {
                mvCourseDescriptionTitle.textContent = "Описание";
            }

            courseButtonMoreThirdQuestionWrapper0.style.display = "";
            courseButtonMoreThirdQuestionWrapper1.style.display = "";
            courseButtonMoreThirdQuestionWrapper2.style.display = "";
            courseButtonMoreThirdQuestionWrapper3.style.display = "";
            courseButtonMoreThirdQuestionWrapper4.style.display = "";

            setTimeout(() => {
                mvThirdSectionButtonOrder.style.opacity = "1";
                mvThirdSectionTitle.style.opacity = "1";
                mvCourseDescriptionTitle.style.opacity = "1";
                mvThirdSectionText0.style.opacity = "1";
                mvThirdSectionText1.style.opacity = "1";
                mvThirdSectionText2.style.opacity = "1";
            }, 300);
        }, 300);
    }
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
    const fillInputs = mvInputFirstName.value.length && mvInputLastName.value.length && mvInputPhone.value.length && mvInputEmail.value.length && isValidEmail(mvInputEmail.value)
    if (!fillInputs) return false;
    if (!studyClicked && mvActivNumberSave === null) return false;
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
const mvCloseStudyButton = document.getElementById("mv-close-study-button");

const mvSuitableBlockWrapper0 = document.getElementById("mv-suitable-block-wrapper-0");
const mvSuitableBlockWrapper1 = document.getElementById("mv-suitable-block-wrapper-1");
const mvSuitableBlockWrapper2 = document.getElementById("mv-suitable-block-wrapper-2");
const mvSuitableBlockWrapper3 = document.getElementById("mv-suitable-block-wrapper-3");

const courseButtonMoreSecondQuestionTitleImg = document.getElementById("mv-course-button-more-second-question-title-img");
const courseButtonMoreSecondQuestionBaseImg = document.getElementById("mv-course-button-more-second-question-base-img");

const courseButtonMoreThirdQuestionWrapper0 = document.getElementById("mv-course-button-more-third-question-wrapper-0");
const courseButtonMoreThirdQuestionWrapper1 = document.getElementById("mv-course-button-more-third-question-wrapper-1");
const courseButtonMoreThirdQuestionWrapper2 = document.getElementById("mv-course-button-more-third-question-wrapper-2");
const courseButtonMoreThirdQuestionWrapper3 = document.getElementById("mv-course-button-more-third-question-wrapper-3");
const courseButtonMoreThirdQuestionWrapper4 = document.getElementById("mv-course-button-more-third-question-wrapper-4");

const mvFifvthSectionDropList = document.getElementById("mv-fifvth-section-drop-list");
const mvChosenCourseWrapperBlock = document.getElementById("mv-chosen-course-wrapper-block");
const mvChosenCourseNameOfCourse = document.getElementById("mv-chosen-course-name-of-course");
const mvChosenCourseNameOfService = document.getElementById("mv-chosen-course-name-of-service");
const mvChosenCourseWrapperOfSvg = document.getElementById("mv-chosen-course-wrapper-of-svg");
const mvChosenCourseCloseButton = document.getElementById("mv-chosen-course-close-button");


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

mvThirdSectionButtonOrder.addEventListener('click', () => {
    if (!course) {
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
        mvThirdSectionWrapperImg.style.setProperty('--opacityBackroundThirdSectionImg', '0');
        mvThirdSectionWrapperImg.style.border = "";

    } else {
        studyClicked = true;
        mvThirdSectionWrapperImg.style.border = "0.12437810945273632vw solid var(--accent)";
        mvThirdSectionWrapperImg.style.setProperty('--opacityBackroundThirdSectionImg', '1');

        mvCourseDescriptionTitle.style.opacity = "0";

        mvThirdSectionText0.style.opacity = "0";
        mvThirdSectionText1.style.opacity = "0";
        mvThirdSectionText2.style.opacity = "0";

        mvThirdSectionButtonOrder.style.opacity = "0";

        mvThirdSectionLeftArrow.style.opacity = "0";
        mvThirdSectionRightArrow.style.opacity = "0";

        mvCloseStudyButton.style.display = "block";

        mvCourseDescriptionImg.style.opacity = "0.4";
        mvCourseSuitableImg.style.opacity = "0.4";
        mvCourseComplexityImg.style.opacity = "0.4";
        mvCourseOutlineImg.style.opacity = "0.4";

        mvPriceListButton.style.pointerEvents = "none";
        mvButtonMoreLowerPartButtons0.style.pointerEvents = "none";
        mvButtonMoreLowerPartButtons1.style.pointerEvents = "none";
        mvButtonMoreLowerPartButtons2.style.pointerEvents = "none";

        if (mvSelectTheme === "light") {
            mvPriceListButton.style.border = "0.24875621890547264vw solid rgba(46, 46, 46, 0.2)";
            mvButtonMoreLowerPartButtons0.style.border = "0.24875621890547264vw solid rgba(46, 46, 46, 0.2)";
            mvButtonMoreLowerPartButtons1.style.border = "0.24875621890547264vw solid rgba(46, 46, 46, 0.2)";
            mvButtonMoreLowerPartButtons2.style.border = "0.24875621890547264vw solid rgba(46, 46, 46, 0.2)";
        } else {
            mvPriceListButton.style.border = "0.24875621890547264vw solid rgba(232, 232, 232, 0.2)";
            mvButtonMoreLowerPartButtons0.style.border = "0.24875621890547264vw solid rgba(232, 232, 232, 0.2)";
            mvButtonMoreLowerPartButtons1.style.border = "0.24875621890547264vw solid rgba(232, 232, 232, 0.2)";
            mvButtonMoreLowerPartButtons2.style.border = "0.24875621890547264vw solid rgba(232, 232, 232, 0.2)";
        }

        mvCourseOrderButtonModalWindowContentWrapper1.style.display = "block";
        mvCourseOrderButtonModalWindowContentWrapper2.style.display = "block";
        mvCourseOrderButtonModalWindowContentWrapper3.style.display = "block";
        mvCourseOrderButtonModalWindowContentWrapper4.style.display = "block";

        mvSuitableBlockWrapper0.style.opacity = "0";
        mvSuitableBlockWrapper1.style.opacity = "0";
        mvSuitableBlockWrapper2.style.opacity = "0";
        mvSuitableBlockWrapper3.style.opacity = "0";

        courseButtonMoreSecondQuestionTitleImg.style.opacity = "0";
        courseButtonMoreSecondQuestionBaseImg.style.opacity = "0";

        courseButtonMoreThirdQuestionWrapper0.style.opacity = "0";
        courseButtonMoreThirdQuestionWrapper1.style.opacity = "0";
        courseButtonMoreThirdQuestionWrapper2.style.opacity = "0";
        courseButtonMoreThirdQuestionWrapper3.style.opacity = "0";
        courseButtonMoreThirdQuestionWrapper4.style.opacity = "0";

        setTimeout(() => {
            if (mvSelectLang === "eng") {
                mvCourseDescriptionTitle.textContent = "Let's get started...";
                mvThirdSectionText0.textContent = "We are delighted that you have chosen our course! We will do everything we can to ensure that your learning is effective and brings meaningful results.";
                mvThirdSectionText1.textContent = "There is only one step left - choose where you want to start!";

            } else {
                mvCourseDescriptionTitle.textContent = "Давайте начнем...";
                mvThirdSectionText0.textContent = "Мы рады, что вы выбрали наш курс! Мы сделаем всё, чтобы ваше обучение было эффективным и принесло значимые результаты.";
                mvThirdSectionText1.textContent = "Остался всего один шаг — выберите, с чего хотите начать!";
            }

            mvThirdSectionText0.style.marginTop = "4.975124378109453vw";
            mvThirdSectionText1.style.marginTop = "7vw";

            mvThirdSectionText2.style.display = "none";
            mvThirdSectionButtonOrder.style.display = "none";

            mvThirdSectionLeftArrow.style.display = "none";
            mvThirdSectionRightArrow.style.display = "none";

            mvSuitableBlockWrapper0.style.display = "none";
            mvSuitableBlockWrapper1.style.display = "none";
            mvSuitableBlockWrapper2.style.display = "none";
            mvSuitableBlockWrapper3.style.display = "none";

            courseButtonMoreSecondQuestionTitleImg.style.display = "none";
            courseButtonMoreSecondQuestionBaseImg.style.display = "none";

            courseButtonMoreThirdQuestionWrapper0.style.display = "none";
            courseButtonMoreThirdQuestionWrapper1.style.display = "none";
            courseButtonMoreThirdQuestionWrapper2.style.display = "none";
            courseButtonMoreThirdQuestionWrapper3.style.display = "none";
            courseButtonMoreThirdQuestionWrapper4.style.display = "none";

            mvThirdSectionText0.style.display = "";
            mvThirdSectionText1.style.display = "";



            setTimeout(() => {
                mvCloseStudyButton.style.opacity = "1";
                mvCourseDescriptionTitle.style.opacity = "1";
                mvThirdSectionText0.style.opacity = "1";
                mvThirdSectionText1.style.opacity = "1";

                mvCourseOrderButtonModalWindowContentWrapper1.style.opacity = "1";
                mvCourseOrderButtonModalWindowContentWrapper2.style.opacity = "1";
                mvCourseOrderButtonModalWindowContentWrapper3.style.opacity = "1";
                mvCourseOrderButtonModalWindowContentWrapper4.style.opacity = "1";
            }, 1);

        }, 300);
    }
});

mvCloseStudyButton.addEventListener('click', () => {
    studyClicked = false;
    mvThirdSectionWrapperImg.style.setProperty('--opacityBackroundThirdSectionImg', '0');
    if (mvSelectTheme === "light") {
        mvThirdSectionWrapperImg.style.border = "";
    } else {
        mvThirdSectionWrapperImg.style.border = "0.12437810945273632vw solid var(--dtText)";
    }

    mvCloseStudyButton.style.opacity = "";
    mvCloseStudyButton.style.display = "";
    mvCourseDescriptionTitle.style.opacity = "0";
    mvThirdSectionText0.style.opacity = "0";
    mvThirdSectionText1.style.opacity = "0";



    mvThirdSectionLeftArrow.style.display = "";
    mvThirdSectionRightArrow.style.display = "";

    mvCourseOrderButtonModalWindowContentWrapper1.style.opacity = "";
    mvCourseOrderButtonModalWindowContentWrapper2.style.opacity = "";
    mvCourseOrderButtonModalWindowContentWrapper3.style.opacity = "";
    mvCourseOrderButtonModalWindowContentWrapper4.style.opacity = "";

    mvButtonMoreLowerPartButtons0.style.pointerEvents = "";
    mvButtonMoreLowerPartButtons1.style.pointerEvents = "";
    mvButtonMoreLowerPartButtons2.style.pointerEvents = "";

    mvThirdSectionButtonOrder.style.display = "";

    setTimeout(() => {
        mvThirdSectionLeftArrow.style.opacity = "1";
        mvThirdSectionRightArrow.style.opacity = "1";
        mvThirdSectionText0.textContent = sortedArray[score].descriptionMobile[mvSelectLang][0];
        mvThirdSectionText1.textContent = sortedArray[score].descriptionMobile[mvSelectLang][1];
        mvThirdSectionText2.textContent = sortedArray[score].descriptionMobile[mvSelectLang][2];
        if (mvSelectLang === "eng") {
            mvCourseDescriptionTitle.textContent = "Description";
        } else {
            mvCourseDescriptionTitle.textContent = "Описание";
        }
        mvThirdSectionText2.style.display = "block";

        if (mvSelectTheme === "light") {
            mvButtonMoreLowerPartButtons0.style.border = "";
            mvButtonMoreLowerPartButtons1.style.border = "";
            mvButtonMoreLowerPartButtons2.style.border = "";
        } else {
            mvButtonMoreLowerPartButtons0.style.border = "0.12437810945273632vw solid var(--dtText)";
            mvButtonMoreLowerPartButtons1.style.border = "0.12437810945273632vw solid var(--dtText)";
            mvButtonMoreLowerPartButtons2.style.border = "0.12437810945273632vw solid var(--dtText)";
        }


        mvCourseSuitableImg.style.opacity = "";
        mvCourseComplexityImg.style.opacity = "";
        mvCourseOutlineImg.style.opacity = "";

        mvCourseOrderButtonModalWindowContentWrapper1.style.display = "";
        mvCourseOrderButtonModalWindowContentWrapper2.style.display = "";
        mvCourseOrderButtonModalWindowContentWrapper3.style.display = "";
        mvCourseOrderButtonModalWindowContentWrapper4.style.display = "";

        setTimeout(() => {
            mvThirdSectionText0.style.opacity = "1";
            mvThirdSectionText1.style.opacity = "1";
            mvThirdSectionText2.style.opacity = "1";
            mvCourseDescriptionTitle.style.opacity = "1";
            mvThirdSectionButtonOrder.style.opacity = "1";
        }, 1);
    }, 300);
});

mvCourseOrderButtonModalWindowContentWrapper1.addEventListener('click', () => {
    paymentCourse = false;

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

    window.scrollTo({
        top: window.innerWidth * 8.5,
        behavior: 'smooth'
    });

    mvFifvthSectionDropList.style.display = "none";
    mvChosenCourseWrapperBlock.style.display = "block";
    mvChosenCourseWrapperBlock.style.opacity = "1";
    mvChosenCourseNameOfCourse.textContent = sortedArray[score].title[mvSelectLang];
    if (mvSelectLang === "eng") {
        mvChosenCourseNameOfService.textContent = "Trial session";
    } else {
        mvChosenCourseNameOfService.textContent = "Пробное занятие";
    }

    const parser = new DOMParser();
    const courseImg = parser.parseFromString(sortedArray[score].svgCode, "image/svg+xml").documentElement;
    courseImg.id = "mv-chosen-course-svg-content";
    let oldSvgElement = document.getElementById(`mv-chosen-course-svg-content`);
    if (oldSvgElement) {
        mvChosenCourseWrapperOfSvg.removeChild(oldSvgElement);
    }
    mvChosenCourseWrapperOfSvg.appendChild(courseImg);
})

mvCourseOrderButtonModalWindowContentWrapper2.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 8.5,
        behavior: 'smooth'
    });
    paymentCourse = true;
    checkbox = true;
    choiceServecesTitleText.style.color = "var(--success)";
    choiceServecesSquare.style.opacity = "0";
    setTimeout(() => {
        choiceServecesSquare.style.display = "none";
        choiceServecesCheckbox.style.display = "block";
        choiceServecesCheckbox.style.opacity = "1";
    }, 300);

    mvFifvthSectionDropList.style.display = "none";
    mvChosenCourseWrapperBlock.style.display = "block";
    mvChosenCourseWrapperBlock.style.opacity = "1";
    mvChosenCourseNameOfCourse.textContent = sortedArray[score].title[mvSelectLang];
    if (mvSelectLang === "eng") {
        mvChosenCourseNameOfService.textContent = "Course prepayment";
    } else {
        mvChosenCourseNameOfService.textContent = "Предоплата курса";
    }

    const parser = new DOMParser();
    const courseImg = parser.parseFromString(sortedArray[score].svgCode, "image/svg+xml").documentElement;
    courseImg.id = "mv-chosen-course-svg-content";
    let oldSvgElement = document.getElementById(`mv-chosen-course-svg-content`);
    if (oldSvgElement) {
        mvChosenCourseWrapperOfSvg.removeChild(oldSvgElement);
    }
    mvChosenCourseWrapperOfSvg.appendChild(courseImg);

    checkbox = true;
    choiceServecesTitleText.style.color = "var(--success)";
    choiceServecesSquare.style.opacity = "0";
    setTimeout(() => {
        choiceServecesSquare.style.display = "none";
        choiceServecesCheckbox.style.display = "block";
        choiceServecesCheckbox.style.opacity = "1";
    }, 300);
})

mvCourseOrderButtonModalWindowContentWrapper3.addEventListener('click', () => {
    paymentCourse = true;
    window.scrollTo({
        top: window.innerWidth * 8.5,
        behavior: 'smooth'
    });

    checkbox = true;
    choiceServecesTitleText.style.color = "var(--success)";
    choiceServecesSquare.style.opacity = "0";
    setTimeout(() => {
        choiceServecesSquare.style.display = "none";
        choiceServecesCheckbox.style.display = "block";
        choiceServecesCheckbox.style.opacity = "1";
    }, 300);

    mvFifvthSectionDropList.style.display = "none";
    mvChosenCourseWrapperBlock.style.display = "block";
    mvChosenCourseWrapperBlock.style.opacity = "1";
    mvChosenCourseNameOfCourse.textContent = sortedArray[score].title[mvSelectLang];
    if (mvSelectLang === "eng") {
        mvChosenCourseNameOfService.textContent = "Abstracts";
    } else {
        mvChosenCourseNameOfService.textContent = "Конспекты";
    }

    const parser = new DOMParser();
    const courseImg = parser.parseFromString(sortedArray[score].svgCode, "image/svg+xml").documentElement;
    courseImg.id = "mv-chosen-course-svg-content";
    let oldSvgElement = document.getElementById(`mv-chosen-course-svg-content`);
    if (oldSvgElement) {
        mvChosenCourseWrapperOfSvg.removeChild(oldSvgElement);
    }
    mvChosenCourseWrapperOfSvg.appendChild(courseImg);

    checkbox = true;
    choiceServecesTitleText.style.color = "var(--success)";
    choiceServecesSquare.style.opacity = "0";
    setTimeout(() => {
        choiceServecesSquare.style.display = "none";
        choiceServecesCheckbox.style.display = "block";
        choiceServecesCheckbox.style.opacity = "1";
    }, 300);
})

mvCourseOrderButtonModalWindowContentWrapper4.addEventListener('click', () => {
    checkbox = false;
    paymentCourse = false;

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
    window.scrollTo({
        top: window.innerWidth * 8.5,
        behavior: 'smooth'
    });

    mvFifvthSectionDropList.style.display = "none";
    mvChosenCourseWrapperBlock.style.display = "block";
    mvChosenCourseWrapperBlock.style.opacity = "1";
    mvChosenCourseNameOfCourse.textContent = sortedArray[score].title[mvSelectLang];
    if (mvSelectLang === "eng") {
        mvChosenCourseNameOfService.textContent = "Free part";
    } else {
        mvChosenCourseNameOfService.textContent = "Бесплатная часть";
    }

    const parser = new DOMParser();
    const courseImg = parser.parseFromString(sortedArray[score].svgCode, "image/svg+xml").documentElement;
    courseImg.id = "mv-chosen-course-svg-content";
    let oldSvgElement = document.getElementById(`mv-chosen-course-svg-content`);
    if (oldSvgElement) {
        mvChosenCourseWrapperOfSvg.removeChild(oldSvgElement);
    }
    mvChosenCourseWrapperOfSvg.appendChild(courseImg);

})

mvChosenCourseCloseButton.addEventListener('click', () => {
    mvFifvthSectionDropList.style.display = "";
    mvChosenCourseWrapperBlock.style.opacity = "";
    setTimeout(() => {
        mvFifvthSectionDropList.style.opacity = "";
        mvChosenCourseWrapperBlock.style.display = "";
    }, 300);
})


const sendToApplicationMainContent = document.getElementById("mv-send-to-application-main-content");
const sendToApplicationWrapper = document.getElementById("mv-send-to-application-wrapper");
const sendToApplicationMainContentTitle = document.getElementById("mv-send-to-application-main-content-title");
const sendToApplicationMainContentText = document.getElementById("mv-send-to-application-main-content-text");
const sendToApplicationMainContentImg = document.getElementById("mv-send-to-application-main-content-img");
const sendToApplicationMainContentImgSecces = document.getElementById("mv-send-to-application-main-content-img-secces");
const sendToApplicationMainContentImgWrong = document.getElementById("mv-send-to-application-main-content-img-wrong");




mvSubmitButton.addEventListener('click', () => {
    if (!paymentCourse) {
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
    } else {
        const data = {
            text: `
        First Name: ${mvInputFirstName.value}, 
        Last Name: ${mvInputLastName.value}, 
        Phone: ${mvInputPhone.value}, 
        Email: ${mvInputEmail.value}, 
        Service: ${sortedArray[score].title[mvSelectLang]},
        HasPrepaymant: ${checkbox},
        Text: ${mvTextarea.value}`,
            hasPrepaymant: checkbox,
            service: `${sortedArray[score].title[mvSelectLang]}`,
            price: sortedArray[sortedArray.map((category) => category.title[mvSelectLang]).findIndex(el => el === sortedArray[score].title[mvSelectLang])].cost,
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

const courseButtonMoreThirdQuestionWeeks0 = document.getElementById("mv-course-button-more-third-question-weeks-0");
const courseButtonMoreThirdQuestionWeeks1 = document.getElementById("mv-course-button-more-third-question-weeks-1");
const courseButtonMoreThirdQuestionWeeks2 = document.getElementById("mv-course-button-more-third-question-weeks-2");
const courseButtonMoreThirdQuestionWeeks3 = document.getElementById("mv-course-button-more-third-question-weeks-3");
const courseButtonMoreThirdQuestionWeeks4 = document.getElementById("mv-course-button-more-third-question-weeks-4");

const courseButtonMoreThirdQuestionText0 = document.getElementById("mv-course-button-more-third-question-text-0");
const courseButtonMoreThirdQuestionText1 = document.getElementById("mv-course-button-more-third-question-text-1");
const courseButtonMoreThirdQuestionText2 = document.getElementById("mv-course-button-more-third-question-text-2");
const courseButtonMoreThirdQuestionText3 = document.getElementById("mv-course-button-more-third-question-text-3");
const courseButtonMoreThirdQuestionText4 = document.getElementById("mv-course-button-more-third-question-text-4");


let numberOfPage = 1;



const visualVitrine = () => {
    const numberOfIndex = (numberOfPage - 1) * 6;
    for (let index = 0; index < 6; index++) {
        const newCourse = sortedArray[numberOfIndex + index];
        const mvWrapperForImgCourses = document.getElementById(`mv-wrapper-for-img-courses-${index}`);
        const mvNameForCourses = document.getElementById(`mv-name-of-courses-${index}`);
        if (numberOfIndex + index >= sortedArray.length) {
            mvWrapperForImgCourses.style.opacity = "0";
            mvNameForCourses.style.opacity = "0";
            setTimeout(() => {
                mvWrapperForImgCourses.style.display = "none";
                mvNameForCourses.style.display = "none";
            }, 300);
        } else {

            mvWrapperForImgCourses.addEventListener('click', () => {
                course = true;
                score = numberOfIndex + index;
                window.scrollTo({
                    top: window.innerWidth * 4.3,
                    behavior: 'smooth'
                });

                mvThirdSectionTitle.textContent = newCourse.title[mvSelectLang];
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
                if (mvSelectLang === "eng") {
                    mvCourseDescriptionTitle.textContent = "Description";
                } else {
                    mvCourseDescriptionTitle.textContent = "Описание";
                }
                mvCourseDescriptionTitle.style.display = "block";

                mvThirdSectionText0.style.marginTop = "3.482587064676617vw";
                mvThirdSectionText1.style.marginTop = "3.482587064676617vw";
                if (mvSelectTheme === "light") {
                    mvPriceListButton.style.border = "0.24875621890547264vw solid rgba(46, 46, 46, 0.2)";
                } else {
                    mvPriceListButton.style.border = "0.24875621890547264vw solid rgba(232, 232, 232, 0.2)";
                }
                mvPriceListButton.style.pointerEvents = "none";

                const parser = new DOMParser();
                const courseImg = parser.parseFromString(newCourse.svgCode, "image/svg+xml").documentElement;
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

                mvThirdSectionText2.style.display = "block";
                mvThirdSectionText0.textContent = newCourse.descriptionMobile[mvSelectLang][0];
                mvThirdSectionText1.textContent = newCourse.descriptionMobile[mvSelectLang][1];
                mvThirdSectionText2.textContent = newCourse.descriptionMobile[mvSelectLang][2];

                if (mvSelectLang === "eng") {
                    mvThirdSectionButtonOrderText.textContent = "Study";
                } else {
                    mvThirdSectionButtonOrderText.textContent = "Обучаться";
                }

                mvCourseOrderButtonModalWindowContentWrapper1.style.opacity = "";
                mvCourseOrderButtonModalWindowContentWrapper2.style.opacity = "";
                mvCourseOrderButtonModalWindowContentWrapper3.style.opacity = "";
                mvCourseOrderButtonModalWindowContentWrapper4.style.opacity = "";

                mvThirdSectionButtonOrder.style.display = "";
                mvCourseSuitableImg.style.opacity = "";
                mvCourseComplexityImg.style.opacity = "";
                mvCourseOutlineImg.style.opacity = "";

                mvCourseSuitableImg.style.pointerEvents = "";
                mvCourseComplexityImg.style.pointerEvents = "";
                mvCourseOutlineImg.style.pointerEvents = "";

                mvThirdSectionLeftArrow.style.display = "";
                mvThirdSectionRightArrow.style.display = "";

                mvCloseStudyButton.style.opacity = "";

                mvThirdSectionLeftArrow.style.pointerEvents = "";
                mvThirdSectionRightArrow.style.pointerEvents = "";

                setTimeout(() => {
                    mvThirdSectionText2.style.opacity = "1";
                    mvThirdSectionLeftArrow.style.opacity = "1";
                    mvThirdSectionRightArrow.style.opacity = "1";
                }, 1);

                setTimeout(() => {
                    mvCloseStudyButton.style.display = "";
                    mvThirdSectionButtonOrder.style.opacity = "";
                    mvCourseOrderButtonModalWindowContentWrapper1.style.display = "";
                    mvCourseOrderButtonModalWindowContentWrapper2.style.display = "";
                    mvCourseOrderButtonModalWindowContentWrapper3.style.display = "";
                    mvCourseOrderButtonModalWindowContentWrapper4.style.display = "";
                }, 300);


                mvThirdSectionWrapperImg.style.setProperty('--opacityBackroundThirdSectionImg', '0');
                if (mvSelectTheme === "light") {
                    mvThirdSectionWrapperImg.style.border = "";
                } else {
                    mvThirdSectionWrapperImg.style.border = "0.12437810945273632vw solid var(--dtText)";
                }


                if (mvSelectTheme === "light") {
                    mvButtonMoreLowerPartButtons0.style.border = "";
                    mvButtonMoreLowerPartButtons1.style.border = "";
                    mvButtonMoreLowerPartButtons2.style.border = "";
                } else {
                    mvButtonMoreLowerPartButtons0.style.border = "0.12437810945273632vw solid var(--dtText)";
                    mvButtonMoreLowerPartButtons1.style.border = "0.12437810945273632vw solid var(--dtText)";
                    mvButtonMoreLowerPartButtons2.style.border = "0.12437810945273632vw solid var(--dtText)";
                }

            })


            mvWrapperForImgCourses.style.display = "flex";
            mvNameForCourses.style.display = "flex";

            setTimeout(() => {
                mvWrapperForImgCourses.style.opacity = "1";
                mvNameForCourses.style.opacity = "1";
            }, 1);


            const servise = sortedArray[index + numberOfIndex];
            const parserUp = new DOMParser();
            const courseImg = parserUp.parseFromString(servise.svgCode, "image/svg+xml").documentElement;
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
                    mvNameForCourses.textContent = servise.title[mvSelectLang];
                    setTimeout(() => {
                        mvWrapperForImgCourses.style.opacity = "1";
                        mvNameForCourses.style.opacity = "1";
                    }, 300);
                }, 300);
            }, 1);
        }
    }
}

const activeClassNumbersOfPage = () => {
    for (let index = 1; index <= Math.ceil(sortedArray.length / 6); index++) {
        const pageClass = document.getElementById(`mv-number-of-page-${index}`);
        if (index === numberOfPage) {
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

const uploadNumbers = () => {
    numberOfPage = 1;
    numberOfPageWrapper.replaceChildren();
    if (Math.ceil(sortedArray.length / 6) < 2) return;
    for (let index = 1; index <= Math.ceil(sortedArray.length / 6); index++) {
        const newPage = document.createElement("div");
        newPage.textContent = index;
        newPage.classList = "mv-number-of-page";
        newPage.id = `mv-number-of-page-${index}`;
        newPage.addEventListener('click', () => {
            numberOfPage = index;
            visualVitrine();
            activeClassNumbersOfPage()
        })
        numberOfPageWrapper.appendChild(newPage);
    }
}

mvFourthSectionTitleCourses.addEventListener('click', () => {
    uploadNumbers();
    activeClassNumbersOfPage();
    visualVitrine();
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
    mvFourthSectionSubtitleCourses.style.opacity = "0";
    setTimeout(() => {
        if (mvSelectLang === "eng") {
            mvFourthSectionSubtitleCourses.textContent = "Most popular"
        } else {
            mvFourthSectionSubtitleCourses.textContent = "Популярные"
        }
        setTimeout(() => {
            mvFourthSectionSubtitleCourses.style.opacity = "1";
        }, 1);
    }, 300);

    sortedArray = [...coursesData];
    sortedArray.sort((a, b) => b.popularity - a.popularity);
    coursesNavigationMostPopular.style.opacity = "1";
    coursesNavigationBestReviews.style.opacity = "0.6";
    coursesNavigationRecentReleases.style.opacity = "0.6";
    coursesNavigationSpecializationCourses.style.opacity = "0.6";
    visualVitrine();
    uploadNumbers();
    activeClassNumbersOfPage();
})

coursesNavigationBestReviews.addEventListener('click', () => {

    mvFourthSectionSubtitleCourses.style.opacity = "0";
    setTimeout(() => {
        if (mvSelectLang === "eng") {
            mvFourthSectionSubtitleCourses.textContent = "Best by reviews"
        } else {
            mvFourthSectionSubtitleCourses.textContent = "Лучшие отзывы"
        }
        setTimeout(() => {
            mvFourthSectionSubtitleCourses.style.opacity = "1";
        }, 1);
    }, 300);

    sortedArray = [...coursesData];
    sortedArray.sort((a, b) => b.MMR - a.MMR);
    uploadNumbers();
    activeClassNumbersOfPage();
    coursesNavigationMostPopular.style.opacity = "0.6";
    coursesNavigationBestReviews.style.opacity = "1";
    coursesNavigationRecentReleases.style.opacity = "0.6";
    coursesNavigationSpecializationCourses.style.opacity = "0.6";
    visualVitrine();
})

coursesNavigationRecentReleases.addEventListener('click', () => {

    mvFourthSectionSubtitleCourses.style.opacity = "0";
    setTimeout(() => {
        if (mvSelectLang === "eng") {
            mvFourthSectionSubtitleCourses.textContent = "Recent releases"
        } else {
            mvFourthSectionSubtitleCourses.textContent = "Недавние релизы"
        }
        setTimeout(() => {
            mvFourthSectionSubtitleCourses.style.opacity = "1";
        }, 1);
    }, 300);

    sortedArray = [...coursesData];
    sortedArray.sort((a, b) => new Date(b.releasesData) - new Date(a.releasesData));
    uploadNumbers();
    activeClassNumbersOfPage();
    coursesNavigationMostPopular.style.opacity = "0.6";
    coursesNavigationBestReviews.style.opacity = "0.6";
    coursesNavigationRecentReleases.style.opacity = "1";
    coursesNavigationSpecializationCourses.style.opacity = "0.6";
    visualVitrine();
})

coursesNavigationSpecializationCourses.addEventListener('click', () => {

    mvFourthSectionSubtitleCourses.style.opacity = "0";
    setTimeout(() => {
        if (mvSelectLang === "eng") {
            mvFourthSectionSubtitleCourses.textContent = "Special courses"
        } else {
            mvFourthSectionSubtitleCourses.textContent = "Курсы профессии"
        }
        setTimeout(() => {
            mvFourthSectionSubtitleCourses.style.opacity = "1";
        }, 1);
    }, 300);

    sortedArray = [...coursesData];
    sortedArray = sortedArray.filter(Prof => Prof.isProfession);
    uploadNumbers();
    coursesNavigationMostPopular.style.opacity = "0.6";
    coursesNavigationBestReviews.style.opacity = "0.6";
    coursesNavigationRecentReleases.style.opacity = "0.6";
    coursesNavigationSpecializationCourses.style.opacity = "1";
    visualVitrine();
})

mvPriceListButton.addEventListener('click', () => {
    if (!course) {

        func();
        mvPriceListWrapper.style.display = "block";
        setTimeout(() => {
            mvPriceListWrapper.style.opacity = "1";
        }, 1);
    } else {
        mvThirdSectionButtonOrder.style.opacity = "0";
        mvCourseOutlineImg.style.opacity = "";
        mvCourseComplexityImg.style.opacity = "";
        mvCourseSuitableImg.style.opacity = "";

        mvButtonMoreLowerPartButtons0.style.pointerEvents = "";
        mvButtonMoreLowerPartButtons1.style.pointerEvents = "";
        mvButtonMoreLowerPartButtons2.style.pointerEvents = "";

        mvButtonMoreLowerPartButtons0.style.border = "";
        mvButtonMoreLowerPartButtons1.style.border = "";
        mvButtonMoreLowerPartButtons2.style.border = "";

        mvCourseDescriptionImg.style.opacity = "0.4";
        mvPriceListButton.style.pointerEvents = "none";
        if (mvSelectTheme === "light") {
            mvPriceListButton.style.border = "0.24875621890547264vw solid rgba(46, 46, 46, 0.2)";
        } else {
            mvPriceListButton.style.border = "0.24875621890547264vw solid rgba(232, 232, 232, 0.2)";
        }

        courseButtonMoreThirdQuestionWrapper0.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper1.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper2.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper3.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper4.style.opacity = "";

        mvCourseDescriptionTitle.style.opacity = "0";

        mvSuitableBlockWrapper0.style.opacity = "";
        mvSuitableBlockWrapper1.style.opacity = "";
        mvSuitableBlockWrapper2.style.opacity = "";
        mvSuitableBlockWrapper3.style.opacity = "";

        mvThirdSectionText0.style.opacity = "0";
        mvThirdSectionText1.style.opacity = "0";
        mvThirdSectionText2.style.opacity = "0";

        courseButtonMoreSecondQuestionTitleImg.style.opacity = "";
        courseButtonMoreSecondQuestionBaseImg.style.opacity = "";

        setTimeout(() => {
            mvSuitableBlockWrapper0.style.display = "";
            mvSuitableBlockWrapper1.style.display = "";
            mvSuitableBlockWrapper2.style.display = "";
            mvSuitableBlockWrapper3.style.display = "";

            mvThirdSectionText0.style.display = "block";
            mvThirdSectionText1.style.display = "block";
            mvThirdSectionText2.style.display = "block";

            mvThirdSectionText0.textContent = sortedArray[0].descriptionMobile[mvSelectLang][0];
            mvThirdSectionText1.textContent = sortedArray[0].descriptionMobile[mvSelectLang][1];
            mvThirdSectionText2.textContent = sortedArray[0].descriptionMobile[mvSelectLang][2];

            if (mvSelectLang === "eng") {
                mvCourseDescriptionTitle.textContent = "Description";
            } else {
                mvCourseDescriptionTitle.textContent = "Описание";
            }

            courseButtonMoreThirdQuestionWrapper0.style.display = "";
            courseButtonMoreThirdQuestionWrapper1.style.display = "";
            courseButtonMoreThirdQuestionWrapper2.style.display = "";
            courseButtonMoreThirdQuestionWrapper3.style.display = "";
            courseButtonMoreThirdQuestionWrapper4.style.display = "";


            courseButtonMoreSecondQuestionTitleImg.style.display = "";
            courseButtonMoreSecondQuestionBaseImg.style.display = "";

            setTimeout(() => {
                mvThirdSectionButtonOrder.style.opacity = "1";
                mvCourseDescriptionTitle.style.opacity = "1";
                mvThirdSectionText0.style.opacity = "1";
                mvThirdSectionText1.style.opacity = "1";
                mvThirdSectionText2.style.opacity = "1";
            }, 300);
        }, 300);
    }
})

const courseButtonMoreFirstQuestionTitle0 = document.getElementById("mv-suitable-block-title-0");
const courseButtonMoreFirstQuestionText0 = document.getElementById("mv-suitable-block-text-0");
const courseButtonMoreFirstQuestionTitle1 = document.getElementById("mv-suitable-block-title-1");
const courseButtonMoreFirstQuestionText1 = document.getElementById("mv-suitable-block-text-1");
const courseButtonMoreFirstQuestionTitle2 = document.getElementById("mv-suitable-block-title-2");
const courseButtonMoreFirstQuestionText2 = document.getElementById("mv-suitable-block-text-2");
const courseButtonMoreFirstQuestionTitle3 = document.getElementById("mv-suitable-block-title-3");
const courseButtonMoreFirstQuestionText3 = document.getElementById("mv-suitable-block-text-3");


mvButtonMoreLowerPartButtons0.addEventListener('click', () => {
    if (!course) {
        func();
    } else {
        mvThirdSectionButtonOrder.style.opacity = "0";
        mvCourseDescriptionImg.style.opacity = "";
        mvCourseComplexityImg.style.opacity = "";
        mvCourseOutlineImg.style.opacity = "";

        mvPriceListButton.style.pointerEvents = "";
        mvButtonMoreLowerPartButtons1.style.pointerEvents = "";
        mvButtonMoreLowerPartButtons2.style.pointerEvents = "";

        if (mvSelectTheme === "light") {
            mvPriceListButton.style.border = "";
            mvButtonMoreLowerPartButtons1.style.border = "";
            mvButtonMoreLowerPartButtons2.style.border = "";
        } else {
            mvPriceListButton.style.border = "solid 0.12437810945273632vw var(--dtText)";
            mvButtonMoreLowerPartButtons1.style.border = "solid 0.12437810945273632vw var(--dtText)";
            mvButtonMoreLowerPartButtons2.style.border = "solid 0.12437810945273632vw var(--dtText)";
        }


        mvCourseSuitableImg.style.opacity = "0.4";
        mvButtonMoreLowerPartButtons0.style.pointerEvents = "none";
        if (mvSelectTheme === "light") {
            mvButtonMoreLowerPartButtons0.style.border = "0.24875621890547264vw solid rgba(46, 46, 46, 0.2)";
        } else {
            mvButtonMoreLowerPartButtons0.style.border = "0.24875621890547264vw solid rgba(232, 232, 232, 0.2)";
        }

        mvCourseDescriptionTitle.style.opacity = "0";
        mvThirdSectionText0.style.opacity = "0";
        mvThirdSectionText1.style.opacity = "0";
        mvThirdSectionText2.style.opacity = "0";

        mvSuitableBlockWrapper0.style.display = "block";
        mvSuitableBlockWrapper1.style.display = "block";
        mvSuitableBlockWrapper2.style.display = "block";
        mvSuitableBlockWrapper3.style.display = "block";

        courseButtonMoreThirdQuestionWrapper0.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper1.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper2.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper3.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper4.style.opacity = "";

        mvSuitableBlockWrapper0.style.opacity = "";
        mvSuitableBlockWrapper1.style.opacity = "";
        mvSuitableBlockWrapper2.style.opacity = "";
        mvSuitableBlockWrapper3.style.opacity = "";

        courseButtonMoreSecondQuestionTitleImg.style.opacity = "";
        courseButtonMoreSecondQuestionBaseImg.style.opacity = "";

        setTimeout(() => {
            courseButtonMoreFirstQuestionTitle0.style.display = "";

            courseButtonMoreFirstQuestionTitle0.textContent = sortedArray[score].who.subtitles[mvSelectLang][0];
            courseButtonMoreFirstQuestionText0.textContent = sortedArray[score].who.whoText[mvSelectLang][0];
            courseButtonMoreFirstQuestionTitle1.textContent = sortedArray[score].who.subtitles[mvSelectLang][1];
            courseButtonMoreFirstQuestionText1.textContent = sortedArray[score].who.whoText[mvSelectLang][1];
            courseButtonMoreFirstQuestionTitle2.textContent = sortedArray[score].who.subtitles[mvSelectLang][2];
            courseButtonMoreFirstQuestionText2.textContent = sortedArray[score].who.whoText[mvSelectLang][2];
            courseButtonMoreFirstQuestionTitle3.textContent = sortedArray[score].who.subtitles[mvSelectLang][3];
            courseButtonMoreFirstQuestionText3.textContent = sortedArray[score].who.whoText[mvSelectLang][3];

            courseButtonMoreSecondQuestionTitleImg.style.display = "none";
            courseButtonMoreSecondQuestionBaseImg.style.display = "none";


            courseButtonMoreThirdQuestionWrapper0.style.display = "";
            courseButtonMoreThirdQuestionWrapper1.style.display = "";
            courseButtonMoreThirdQuestionWrapper2.style.display = "";
            courseButtonMoreThirdQuestionWrapper3.style.display = "";
            courseButtonMoreThirdQuestionWrapper4.style.display = "";

            mvSuitableBlockWrapper0.style.opacity = "1";
            mvSuitableBlockWrapper1.style.opacity = "1";
            mvSuitableBlockWrapper2.style.opacity = "1";
            mvSuitableBlockWrapper3.style.opacity = "1";

            if (mvSelectLang === "eng") {

                mvCourseDescriptionTitle.textContent = "Our course is suitable for"
            } else {
                mvCourseDescriptionTitle.textContent = "Наш курс подойдет"
            }
            mvThirdSectionText0.style.display = "none";
            mvThirdSectionText1.style.display = "none";
            mvThirdSectionText2.style.display = "none";
            setTimeout(() => {
                mvCourseDescriptionTitle.style.opacity = "1";
                mvThirdSectionButtonOrder.style.opacity = "1";
            }, 300);
        }, 300);
    }
})

mvButtonMoreLowerPartButtons1.addEventListener('click', () => {
    if (!course) {
        func();
    } else {
        mvCourseDescriptionTitle.style.opacity = "0";
        mvThirdSectionButtonOrder.style.opacity = "0";
        mvCourseDescriptionImg.style.opacity = "";
        mvCourseSuitableImg.style.opacity = "";
        mvCourseOutlineImg.style.opacity = "";

        mvPriceListButton.style.pointerEvents = "";
        mvButtonMoreLowerPartButtons0.style.pointerEvents = "";
        mvButtonMoreLowerPartButtons2.style.pointerEvents = "";

        if (mvSelectTheme === "light") {
            mvPriceListButton.style.border = "";
            mvButtonMoreLowerPartButtons0.style.border = "";
            mvButtonMoreLowerPartButtons2.style.border = "";
        } else {
            mvPriceListButton.style.border = "solid var(--dtText) 0.12437810945273632vw";
            mvButtonMoreLowerPartButtons0.style.border = "solid var(--dtText) 0.12437810945273632vw";
            mvButtonMoreLowerPartButtons2.style.border = "solid var(--dtText) 0.12437810945273632vw";
        }


        mvCourseComplexityImg.style.opacity = "0.4";
        mvButtonMoreLowerPartButtons1.style.pointerEvents = "none";
        if (mvSelectTheme === "light") {
            mvButtonMoreLowerPartButtons1.style.border = "0.24875621890547264vw solid rgba(46, 46, 46, 0.2)";
        } else {
            mvButtonMoreLowerPartButtons1.style.border = "0.24875621890547264vw solid rgba(232, 232, 232, 0.2)";
        }

        courseButtonMoreThirdQuestionWrapper0.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper1.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper2.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper3.style.opacity = "";
        courseButtonMoreThirdQuestionWrapper4.style.opacity = "";

        mvSuitableBlockWrapper0.style.opacity = "";
        mvSuitableBlockWrapper1.style.opacity = "";
        mvSuitableBlockWrapper2.style.opacity = "";
        mvSuitableBlockWrapper3.style.opacity = "";

        mvThirdSectionText0.style.opacity = "0";
        mvThirdSectionText1.style.opacity = "0";
        mvThirdSectionText2.style.opacity = "0";

        courseButtonMoreSecondQuestionBaseImg.classList = `complexity-${(sortedArray[score]).complexity}`;

        setTimeout(() => {

            mvSuitableBlockWrapper0.style.display = "block";
            mvSuitableBlockWrapper1.style.display = "block";
            mvSuitableBlockWrapper2.style.display = "block";
            mvSuitableBlockWrapper3.style.display = "block";


            courseButtonMoreFirstQuestionTitle0.style.display = "none";
            courseButtonMoreSecondQuestionTitleImg.style.display = "block";
            courseButtonMoreSecondQuestionBaseImg.style.display = "block";
            if (mvSelectLang === "eng") {
                mvCourseDescriptionTitle.textContent = "Necessary to start training"
            } else {
                mvCourseDescriptionTitle.textContent = "Необходимо для обучения"
            }



            mvThirdSectionText0.style.display = "none";
            mvThirdSectionText1.style.display = "none";
            mvThirdSectionText2.style.display = "none";


            courseButtonMoreFirstQuestionText0.textContent = sortedArray[score].whatNeed.whatNeedText[mvSelectLang][0];
            courseButtonMoreFirstQuestionTitle1.textContent = sortedArray[score].whatNeed.subtitles[mvSelectLang][1];
            courseButtonMoreFirstQuestionText1.textContent = sortedArray[score].whatNeed.whatNeedText[mvSelectLang][1];
            courseButtonMoreFirstQuestionTitle2.textContent = sortedArray[score].whatNeed.subtitles[mvSelectLang][2];
            courseButtonMoreFirstQuestionText2.textContent = sortedArray[score].whatNeed.whatNeedText[mvSelectLang][2];
            courseButtonMoreFirstQuestionTitle3.textContent = sortedArray[score].whatNeed.subtitles[mvSelectLang][3];
            courseButtonMoreFirstQuestionText3.textContent = sortedArray[score].whatNeed.whatNeedText[mvSelectLang][3];

            courseButtonMoreThirdQuestionWrapper0.style.display = "none";
            courseButtonMoreThirdQuestionWrapper1.style.display = "none";
            courseButtonMoreThirdQuestionWrapper2.style.display = "none";
            courseButtonMoreThirdQuestionWrapper3.style.display = "none";
            courseButtonMoreThirdQuestionWrapper4.style.display = "none";


            setTimeout(() => {
                mvSuitableBlockWrapper0.style.opacity = "1";
                mvSuitableBlockWrapper1.style.opacity = "1";
                mvSuitableBlockWrapper2.style.opacity = "1";
                mvSuitableBlockWrapper3.style.opacity = "1";
                mvThirdSectionButtonOrder.style.opacity = "1";
                mvCourseDescriptionTitle.style.opacity = "1";
                courseButtonMoreSecondQuestionTitleImg.style.opacity = "1";
                courseButtonMoreSecondQuestionBaseImg.style.opacity = "1";
                courseButtonMoreFirstQuestionTitle0.style.opacity = "1";
                courseButtonMoreFirstQuestionText0.style.opacity = "1";
                courseButtonMoreFirstQuestionTitle1.style.opacity = "1";
                courseButtonMoreFirstQuestionText1.style.opacity = "1";
                courseButtonMoreFirstQuestionTitle2.style.opacity = "1";
                courseButtonMoreFirstQuestionText2.style.opacity = "1";
                courseButtonMoreFirstQuestionTitle3.style.opacity = "1";
                courseButtonMoreFirstQuestionText3.style.opacity = "1";
            }, 300);
        }, 300);
    }
})

mvButtonMoreLowerPartButtons2.addEventListener('click', () => {
    if (!course) {
        func();
    } else {
        mvThirdSectionButtonOrder.style.opacity = "0";

        mvCourseDescriptionImg.style.opacity = "";
        mvCourseComplexityImg.style.opacity = "";
        mvCourseSuitableImg.style.opacity = "";

        mvPriceListButton.style.pointerEvents = "";
        mvButtonMoreLowerPartButtons0.style.pointerEvents = "";
        mvButtonMoreLowerPartButtons1.style.pointerEvents = "";

        if (mvSelectTheme === "light") {
            mvPriceListButton.style.border = "";
            mvButtonMoreLowerPartButtons0.style.border = "";
            mvButtonMoreLowerPartButtons1.style.border = "";
        } else {
            mvPriceListButton.style.border = "0.24875621890547264vw solid var(--dtText)";
            mvButtonMoreLowerPartButtons0.style.border = "0.24875621890547264vw solid var(--dtText)";
            mvButtonMoreLowerPartButtons1.style.border = "0.24875621890547264vw solid var(--dtText)";
        }


        mvCourseOutlineImg.style.opacity = "0.4";
        mvButtonMoreLowerPartButtons2.style.pointerEvents = "none";
        if (mvSelectTheme === "light") {
            mvButtonMoreLowerPartButtons2.style.border = "0.24875621890547264vw solid rgba(46, 46, 46, 0.2)";
        } else {
            mvButtonMoreLowerPartButtons2.style.border = "0.24875621890547264vw solid rgba(232, 232, 232, 0.2)";
        }

        mvCourseDescriptionTitle.style.opacity = "0";
        mvThirdSectionText0.style.opacity = "0";
        mvThirdSectionText1.style.opacity = "0";
        mvThirdSectionText2.style.opacity = "0";

        mvSuitableBlockWrapper0.style.opacity = "";
        mvSuitableBlockWrapper1.style.opacity = "";
        mvSuitableBlockWrapper2.style.opacity = "";
        mvSuitableBlockWrapper3.style.opacity = "";

        courseButtonMoreThirdQuestionWrapper0.style.display = "block";
        courseButtonMoreThirdQuestionWrapper1.style.display = "block";
        courseButtonMoreThirdQuestionWrapper2.style.display = "block";
        courseButtonMoreThirdQuestionWrapper3.style.display = "block";
        courseButtonMoreThirdQuestionWrapper4.style.display = "block";

        courseButtonMoreSecondQuestionTitleImg.style.opacity = "";
        courseButtonMoreSecondQuestionBaseImg.style.opacity = "";

        courseButtonMoreThirdQuestionWeeks0.textContent = sortedArray[score].planOfLessons[mvSelectLang][0].duration;
        courseButtonMoreThirdQuestionWeeks1.textContent = sortedArray[score].planOfLessons[mvSelectLang][1].duration;
        courseButtonMoreThirdQuestionWeeks2.textContent = sortedArray[score].planOfLessons[mvSelectLang][2].duration;
        courseButtonMoreThirdQuestionWeeks3.textContent = sortedArray[score].planOfLessons[mvSelectLang][3].duration;
        courseButtonMoreThirdQuestionWeeks4.textContent = sortedArray[score].planOfLessons[mvSelectLang][4].duration;

        courseButtonMoreThirdQuestionText0.textContent = sortedArray[score].planOfLessons[mvSelectLang][0].title;
        courseButtonMoreThirdQuestionText1.textContent = sortedArray[score].planOfLessons[mvSelectLang][1].title;
        courseButtonMoreThirdQuestionText2.textContent = sortedArray[score].planOfLessons[mvSelectLang][2].title;
        courseButtonMoreThirdQuestionText3.textContent = sortedArray[score].planOfLessons[mvSelectLang][3].title;
        courseButtonMoreThirdQuestionText4.textContent = sortedArray[score].planOfLessons[mvSelectLang][4].title;


        setTimeout(() => {
            mvSuitableBlockWrapper0.style.display = "";
            mvSuitableBlockWrapper1.style.display = "";
            mvSuitableBlockWrapper2.style.display = "";
            mvSuitableBlockWrapper3.style.display = "";
            courseButtonMoreSecondQuestionTitleImg.style.display = "";
            courseButtonMoreSecondQuestionBaseImg.style.display = "";

            if (mvSelectLang === "eng") {
                mvCourseDescriptionTitle.textContent = "Course outline"
            } else {
                mvCourseDescriptionTitle.textContent = "Общая структура курса"
            }
            mvThirdSectionText0.style.display = "none";
            mvThirdSectionText1.style.display = "none";
            mvThirdSectionText2.style.display = "none";

            courseButtonMoreThirdQuestionWrapper0.style.opacity = "1";
            courseButtonMoreThirdQuestionWrapper1.style.opacity = "1";
            courseButtonMoreThirdQuestionWrapper2.style.opacity = "1";
            courseButtonMoreThirdQuestionWrapper3.style.opacity = "1";
            courseButtonMoreThirdQuestionWrapper4.style.opacity = "1";
            setTimeout(() => {
                mvThirdSectionButtonOrder.style.opacity = "1";
                mvCourseDescriptionTitle.style.opacity = "1";
            }, 300);
        }, 300);
    }
})


