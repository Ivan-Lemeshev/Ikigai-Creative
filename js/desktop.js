const backgroundGradient = document.getElementById("background-gradient");
const ikigaiLogoText = document.getElementById("ikigai-logo-text");
const creativeLogoText = document.getElementById("creative-logo-text");
const ideasText = document.getElementById("animation-text");
const centralImg = document.getElementById("central-img-first-section");
const centralText = document.getElementById("central-text-first-section");

const headerFirstSection = document.getElementById("header-first-section");
const headerLogoFirstSection = document.getElementById("header-logo-first-section");
const headerNavInfo = document.getElementById("nav-info-first-section");
const headerNavServices = document.getElementById("nav-services-first-section");
const headerNavContacts = document.getElementById("nav-contacts-first-section");
const headerNavReviews = document.getElementById("nav-reviews-first-section");
const headerDividingLine = document.getElementById("header-dividing-line-first-section");
const headerLanguageButton = document.getElementById("language-button-first-section");

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

let animationisActiv = false;
let animationIsGone = false;

const startAnimation = () => {
    setTimeout(() => {
        backgroundGradient.style.opacity = "1";
        setTimeout(() => {
            ikigaiLogoText.style.opacity = "1";
            creativeLogoText.style.opacity = "1";
            setTimeout(() => {
                ikigaiLogoText.style.left = "7.44792vw";
                creativeLogoText.style.left = "73.48958vw";
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
                setTimeout(() => {
                    secondSectionButtonServices.style.opacity = "1";
                    secondSectionButtonContacts.style.opacity = "1";
                }, 200);
            }, 1000);
        };

    } else if (scrollY > width * 1.125 && scrollY < width * 1.965) {
        secondHeaderNavInfo.classList = "second-header-text";
        secondHeaderNavServices.classList.add("second-header-text-none-clickable");
        secondHeaderNavContacts.classList = "second-header-text";
        secondHeaderNavReviews.classList = "second-header-text";
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

