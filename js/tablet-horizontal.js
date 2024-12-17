import localizationWrapper from "./localization-data.js";
import arrayDataOfService from "./Services.js";
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
let thSelectLang = "eng";
const thLang = document.getElementById("th-navigation-block-lang-button");
const thTimeOfAnimation = 4000;

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

setInterval(thChangeIdeasText, thTimeOfAnimation);


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


let  thActivNumber = 0;

const thThirdSectionTitle = document.getElementById("th-third-section-title-of-service");
const thThirdSectionImg = document.getElementById("th-third-section-main-img");
const thThirdSectionText0 = document.getElementById("th-third-section-text-about-service-0");
const thThirdSectionText1 = document.getElementById("th-third-section-text-about-service-1");


const thActivService = () => {
    const currentService = arrayDataOfService[thActivNumber];
    
    thThirdSectionTitle.textContent = currentService.title[thSelectLang];

    thThirdSectionImg.src = `/img/svg/mobile-vertical/mv-third-section-img ${currentService.title.eng}.svg`;
    thThirdSectionText0.textContent = currentService.description[thSelectLang][0];
    thThirdSectionText1.textContent = currentService.description[thSelectLang][1];
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
