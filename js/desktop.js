const backgroundGradient = document.getElementById("background-gradient");
const ikigaiLogoText = document.getElementById("ikigai-logo-text");
const creativeLogoText = document.getElementById("creative-logo-text");
const ideasText = document.getElementById("animation-text");
const centralImg = document.getElementById("central-img-first-section");
const centralText = document.getElementById("central-text-first-section");
const centralTextUp = document.getElementById("central-text-first-section-up");
const centralTextDown = document.getElementById("central-text-first-section-down");


const headerFirstSection = document.getElementById("header-first-section");
const headerLogoFirstSection = document.getElementById("header-logo-first-section");
const headerNavInfo = document.getElementById("nav-info-first-section");
const headerNavServices = document.getElementById("nav-services-first-section");
const headerNavContacts = document.getElementById("nav-contacts-first-section");
const headerNavReviews = document.getElementById("nav-reviews-first-section");
const headerDividingLine = document.getElementById("header-dividing-line-first-section");
const headerLanguageButton = document.getElementById("language-button-first-section");

const ideasArrayUp = [
    "Transforming Ideas",
    "Your Vision",
    "Crafting Digital",
    "Innovate & Engage",
    "DIGITAL AGENCY"
];

const ideasArrayDown = [
    "into Digital Reality",
    "Our Innovation",
    "Excellence",
    "Succeed",
    "LONDON"
];

let animationisActiv = false;
let animationIsGone = false;
let numberOfActivAnimation = 0;
const timeOfAnimation = 4000;
let angel = 360;

const secondHeader = document.getElementById("second-header");
const secondHeaderLogoHover = document.getElementById("second-header-logo-hover");
const secondHeaderLogoActiv = document.getElementById("second-header-logo-activ");
const secondHeaderNavMain = document.getElementById("second-nav-main");
const secondHeaderNavInfo = document.getElementById("second-nav-info");
const secondHeaderNavServices = document.getElementById("second-nav-services");
const secondHeaderNavContacts = document.getElementById("second-nav-contacts");
const secondHeaderNavReviews = document.getElementById("second-nav-reviews");
const secondHeaderLanguageButton = document.getElementById("second-language-button");
const secondHeaderDividingLine = document.getElementById("second-header-dividing-line");
const secondSectionText = document.getElementById("second-section-text");
const secondSectionButtonServices = document.getElementById("second-section-button-services");
const secondSectionButtonContacts = document.getElementById("second-section-button-contacts");

const thirdSectionImage = document.getElementById("third-section-main-content-left-part");
const thirdSectionText = document.getElementById("third-section-main-content-right-part");
const thirdSectionButtonOrder = document.getElementById("third-section-main-content-right-part-button-order");
const thirdSectionButtonMore = document.getElementById("third-section-main-content-right-part-button-more");
const thirdSectionLowerPartDivFirst = document.getElementById("third-section-lower-part-div-1");
const thirdSectionLowerPartDivSecond = document.getElementById("third-section-lower-part-div-2");
const thirdSectionLowerPartDivThird = document.getElementById("third-section-lower-part-div-3");
const thirdSectionLowerPartDivFourth = document.getElementById("third-section-lower-part-div-4");
const thirdSectionLowerPartDivFifth = document.getElementById("third-section-lower-part-div-5");

const fourthSectionChoiceOfService = document.getElementById("choice-of-service");
const fourthSectionChoiceOfServiceArrow = document.getElementById("choice-of-service-arrow");





const changeIdeasText = () => {
    centralText.style.opacity = "0";
    angel = (angel + 90);
    setTimeout(() => {
        numberOfActivAnimation = (numberOfActivAnimation + 1) % ideasArrayUp.length;
        centralTextUp.textContent = ideasArrayUp[numberOfActivAnimation];
        centralTextDown.textContent = ideasArrayDown[numberOfActivAnimation];
        centralImg.style.rotate = angel + "deg";
        centralText.style.opacity = "1";
    }, 500);

};

const startAnimation = () => {
    setTimeout(() => {
        backgroundGradient.style.opacity = "1";
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
                                headerFirstSection.style.opacity = "1";
                                setTimeout(() => {
                                    headerLogoFirstSection.style.opacity = "1";
                                    setTimeout(() => {
                                        headerNavInfo.style.opacity = "1";
                                        setTimeout(() => {
                                            headerNavServices.style.opacity = "1";
                                            setTimeout(() => {
                                                headerNavContacts.style.opacity = "1";
                                                setTimeout(() => {
                                                    headerNavReviews.style.opacity = "1";
                                                    setTimeout(() => {
                                                        headerDividingLine.style.opacity = "1";
                                                        headerLanguageButton.style.opacity = "1";
                                                        setInterval(changeIdeasText, timeOfAnimation);
                                                    }, 300);
                                                }, 300);
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
    }, 200);
};

window.onload = startAnimation;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const width = window.innerWidth;

    if (!animationisActiv) {
        if (scrollY > window.innerHeight) {
            animationisActiv = true;
            secondHeader.style.display = "flex";
            setTimeout(() => {
                secondHeader.style.opacity = "1";
                animationisActiv = false;
            }, 1);
        } else {
            animationisActiv = true;
            secondHeader.style.opacity = "0";
            setTimeout(() => {
                secondHeader.style.display = "none";
                animationisActiv = false;
            }, 300);
        }
    }
    if (scrollY > width * 0.5625 && scrollY < width * 1.125) {
        secondHeaderNavInfo.classList.add("second-header-text-none-clickable");
        secondHeaderNavServices.classList = "second-header-text";
        secondHeaderNavContacts.classList = "second-header-text";
        secondHeaderNavReviews.classList = "second-header-text";

        if (!animationIsGone) {
            lightAnimation([33, 100, 66, 133, 86, 78, 189], 'letter-W');
            lightAnimation([215, 137, 49, 133, 107, 166, 105], 'letter-h');
            lightAnimation([59, 105, 49, 166, 107, 133, 49], 'letter-o');
            lightAnimation([115, 159, 85, 122, 159, 152, 78], 'letter-w');
            lightAnimation([218, 329, 178, 155, 59, 85, 111], 'letter-e');
            lightAnimation([184, 296, 145, 122, 92, 118, 145], 'letter-A');
            lightAnimation([151, 229, 111, 89, 125, 152, 178], 'letter-r');
            lightAnimation([118, 196, 78, 55, 159, 185, 211], 'letter-E');
            animationIsGone = true

            setTimeout(() => {
                secondSectionText.style.opacity = "1";
                secondSectionButtonServices.style.opacity = "1";
                secondSectionButtonContacts.style.opacity = "1";
            }, 200);
        };

    } else if (scrollY > width * 1.125 && scrollY < width * 1.965) {
        secondHeaderNavInfo.classList = "second-header-text";
        secondHeaderNavServices.classList.add("second-header-text-none-clickable");
        secondHeaderNavContacts.classList = "second-header-text";
        secondHeaderNavReviews.classList = "second-header-text";
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
                                setTimeout(() => {
                                    thirdSectionImage.style.boxShadow = "0px 0px 8px 0px rgba(2, 133, 204, 1)";
                                    thirdSectionButtonOrder.style.boxShadow = "0px 0px 8px 0px rgba(2, 133, 204, 1)";
                                    thirdSectionButtonMore.style.boxShadow = "0px 0px 8px 0px rgba(2, 133, 204, 1)";
                                }, 250);
                            }, 250);
                        }, 250);
                    }, 250);
                }, 250);
            }, 300);
        }, 500);
    } else if (scrollY > width * 1.965 && scrollY < width * 2.527) {
        secondHeaderNavInfo.classList = "second-header-text";
        secondHeaderNavServices.classList = "second-header-text";
        secondHeaderNavContacts.classList.add("second-header-text-none-clickable");
        secondHeaderNavReviews.classList = "second-header-text";
    } else if (scrollY > width * 2.527 && scrollY < width * 3.089) {
        secondHeaderNavInfo.classList = "second-header-text";
        secondHeaderNavServices.classList = "second-header-text";
        secondHeaderNavContacts.classList = "second-header-text";
        secondHeaderNavReviews.classList.add("second-header-text-none-clickable");
    }

});

secondHeaderLogoHover.addEventListener('click', () => {
    secondHeaderLogoHover.style.opacity = "0";
    secondHeaderLogoActiv.style.opacity = "1";
    secondHeaderNavMain.style.opacity = "1";
    secondHeaderNavMain.style.pointerEvents = "all";
    secondHeaderNavInfo.style.opacity = "1";
    secondHeaderNavInfo.style.pointerEvents = "all";
    secondHeaderNavServices.style.opacity = "1";
    secondHeaderNavServices.style.pointerEvents = "all";
    secondHeaderNavContacts.style.opacity = "1";
    secondHeaderNavContacts.style.pointerEvents = "all";
    secondHeaderNavReviews.style.opacity = "1";
    secondHeaderNavReviews.style.pointerEvents = "all";
    secondHeaderLanguageButton.style.opacity = "1";
    secondHeaderLanguageButton.style.pointerEvents = "all";
    secondHeaderDividingLine.style.opacity = "1";
    secondHeaderDividingLine.style.pointerEvents = "all";
});

secondHeader.addEventListener('mouseleave', () => {
    secondHeaderLogoHover.style.opacity = "0.5";
    secondHeaderLogoActiv.style.opacity = "0";
    secondHeaderNavMain.style.opacity = "0";
    secondHeaderNavMain.style.pointerEvents = "none";
    secondHeaderNavInfo.style.opacity = "0";
    secondHeaderNavInfo.style.pointerEvents = "none";
    secondHeaderNavServices.style.opacity = "0";
    secondHeaderNavServices.style.pointerEvents = "none";
    secondHeaderNavContacts.style.opacity = "0";
    secondHeaderNavContacts.style.pointerEvents = "none";
    secondHeaderNavReviews.style.opacity = "0";
    secondHeaderNavReviews.style.pointerEvents = "none";
    secondHeaderLanguageButton.style.opacity = "0";
    secondHeaderLanguageButton.style.pointerEvents = "none";
    secondHeaderDividingLine.style.opacity = "0";
    secondHeaderDividingLine.style.pointerEvents = "none";
});

secondHeaderLogoHover.addEventListener('mouseenter', () => {
    secondHeaderLogoHover.style.opacity = "1";
});

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

const dropListWrapper = document.getElementById("drop-list-wrapper");
const choiceOfServicePlaceholder = document.getElementById("choice-of-service-placeholder");
const correctImgChoiceOfServise = document.getElementById('correct-img-choice-of-service');



const dropListArray = [
    "Creative Design",
    "Website design and development",
    "Video production",
    "Support and content",
    "Promotion on social networks",
    "Setting up payment"
];

let selectCategory = "";


fourthSectionChoiceOfService.addEventListener('click', (event) => {
    event.stopPropagation();
    const newDropListWrapper = document.createElement('div');
    newDropListWrapper.id = "drop-list";

    const actualityCategory = dropListArray.filter((textCategory) => {
        return textCategory !== selectCategory;
    });

    actualityCategory.forEach(textSelectCategoty => {
        const newDropListPoint = document.createElement('div');
        newDropListPoint.textContent = textSelectCategoty;
        newDropListPoint.classList = "drop-list-item";

        newDropListPoint.addEventListener('click', (event) => {
            event.stopPropagation();
            selectCategory = textSelectCategoty;
            choiceOfServicePlaceholder.textContent = textSelectCategoty;
            newDropListWrapper.style.opacity = "0";
            fourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
            fourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
            newDropListWrapper.style.pointerEvents = "none";
        });
        newDropListWrapper.appendChild(newDropListPoint);
    });

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
        correctImgChoiceOfServise.style.opacity = 1;
        newDropListWrapper.style.opacity = "0";
        fourthSectionChoiceOfServiceArrow.style.opacity = "0";
        fourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
        newDropListWrapper.style.pointerEvents = "none";
    });
});

const mainSendForm = document.getElementById('main-send-form');

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


function capitalize(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

inputFirstName.addEventListener('input', () => {
    const inputValue = inputFirstName.value;
    let editValue = inputValue.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
    if (editValue.length > 10) {
        editValue = editValue.slice(0, 10);
    }
    if (editValue.length > 0) {
        correctImgFirstName.style.opacity = 1;
    } else {
        correctImgFirstName.style.opacity = 0;
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
    } else {
        correctImgLastName.style.opacity = 0;
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
    } else {
        correctImgPhone.style.opacity = 0;
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
    } else {
        correctImgEmail.style.opacity = 0;
    }
    inputEmail.value = editValue;
});


const submitButtonFourthSection = document.getElementById('send-form-submit');
const requiredFieldsText = document.getElementById("required-fields");
const correctlyText = document.getElementById("correctly");
const buttonWrapper = document.getElementById("button-wrapper");
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
submitButtonFourthSection.addEventListener('mouseenter', () => {
    let resultChecked = true;

    if (!inputFirstName.value.length) {
        errorImgFirstName.style.opacity = 1;
        resultChecked = false;
        requiredFieldsText.style.opacity = 1;
        submitButtonFourthSection.style.left = "2.34375vw";
    } else {
        errorImgFirstName.style.opacity = 0;
        requiredFieldsText.style.opacity = 0;
        submitButtonFourthSection.style.left = "13.85417vw";
    }
    if (!inputLastName.value.length) {
        errorImgLastName.style.opacity = 1;
        resultChecked = false;
        requiredFieldsText.style.opacity = 1;
        submitButtonFourthSection.style.left = "2.34375vw";
    } else {
        errorImgLastName.style.opacity = 0;
        requiredFieldsText.style.opacity = 0;
        submitButtonFourthSection.style.left = "13.85417vw";
    }
    if (!inputPhone.value.length) {
        errorImgPhone.style.opacity = 1;
        resultChecked = false;
        requiredFieldsText.style.opacity = 1;
        submitButtonFourthSection.style.left = "2.34375vw";
    } else {
        errorImgPhone.style.opacity = 0;
        requiredFieldsText.style.opacity = 0;
        submitButtonFourthSection.style.left = "13.85417vw";
    }
    if (!inputEmail.value.length) {
        errorImgEmail.style.opacity = 1;
        resultChecked = false;
        requiredFieldsText.style.opacity = 1;
        submitButtonFourthSection.style.left = "2.34375vw";
    } else {
        errorImgEmail.style.opacity = 0;
        requiredFieldsText.style.opacity = 0;
        submitButtonFourthSection.style.left = "13.85417vw";
    }



    if (!isValidEmail(inputEmail.value)) {
        submitButtonFourthSection.className = " ";
        submitButtonFourthSection.style.left = "2.34375vw";
        correctlyText.style.opacity = 1;
        requiredFieldsText.style.opacity = 0;
    } else {
        submitButtonFourthSection.className = "send-form-submit-activ";
        submitButtonFourthSection.style.left = "13.85417vw";
    }

    if (resultChecked && isValidEmail(inputEmail.value)) {
        submitButtonFourthSection.className = "send-form-submit-activ";
        requiredFieldsText.style.opacity = 0;
        errorImgEmail.style.opacity = 0;
        correctImgEmail.style.opacity = 1;
    } else {
        submitButtonFourthSection.className = " ";
        submitButtonFourthSection.style.left = "2.34375vw";
        requiredFieldsText.style.opacity = 0;
        correctlyText.style.opacity = 1;
        errorImgEmail.style.opacity = 1;
        correctImgEmail.style.opacity = 0;
    }
}
);

buttonWrapper.addEventListener('mouseleave', () => {
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
