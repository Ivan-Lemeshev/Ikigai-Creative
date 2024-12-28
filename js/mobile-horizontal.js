import arrayPriceList from "./arrayPriceList.js";
import localizationWrapper from "./localization-data.js";
import { ideasArrayUp, ideasArrayDown, textForApplication } from "./slogans.js";
import reviews from "./reviews-mobile.js";
import dataContats from "./links.js";

const mhNavButton = document.getElementById("mh-first-section-navigation-button");
const mhNavigationBlock = document.getElementById("mh-navigation-block");
const mhNavigationBlockIntro = document.getElementById("mh-navigation-block-main-content-intro");
const mhNavigationBlockAboutUs = document.getElementById("mh-navigation-block-main-content-about-us");
const mhNavigationBlockServices = document.getElementById("mh-navigation-block-main-content-services");
const mhNavigationBlockContacts = document.getElementById("mh-navigation-block-main-content-contacts");
const mhNavigationBlockReviews = document.getElementById("mh-navigation-block-main-content-reviews");

mhNavButton.addEventListener('click', () => {
    mhNavigationBlock.style.display = "block";
    setTimeout(() => {
        mhNavigationBlock.style.opacity = "1";
    }, 2);
})

mhNavigationBlockIntro.addEventListener('click', () => {
    mhNavigationBlock.style.opacity = "";
    setTimeout(() => {
        mhNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 0,
        behavior: 'smooth'
    });
})

mhNavigationBlockAboutUs.addEventListener('click', () => {
    mhNavigationBlock.style.opacity = "";
    setTimeout(() => {
        mhNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 0.9,
        behavior: 'smooth'
    });
})

mhNavigationBlockServices.addEventListener('click', () => {
    mhNavigationBlock.style.opacity = "";
    setTimeout(() => {
        mhNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 1.4,
        behavior: 'smooth'
    });
})

mhNavigationBlockContacts.addEventListener('click', () => {
    mhNavigationBlock.style.opacity = "";
    setTimeout(() => {
        mhNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 2.3,
        behavior: 'smooth'
    });
})

mhNavigationBlockReviews.addEventListener('click', () => {
    mhNavigationBlock.style.opacity = "";
    setTimeout(() => {
        mhNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 3,
        behavior: 'smooth'
    });
})

const mhCentralTextUp = document.getElementById("mh-first-section-text");
const mhCentralTextDown = document.getElementById("mh-second-section-text");
let mhNumberOfActivAnimation = 0;
let mhSelectLang = "eng";


const mhArrayFirstSectionSubTitlesLeft = [
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

const mhArrayFirstSectionSubTitlesRight = [
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

const mhArrayOfSvgThirdSection = [
    {
        black: `<svg viewBox="0 0 178 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                    < g clip - path="url(#clip0_3148_3927)" >
                        <path d="M177.888 22.5797C177.972 17.5394 176.147 12.8918 172.749 9.49365C170.905 7.65011 167.916 7.65011 166.072 9.49388C164.229 11.3377 164.229 14.3267 166.072 16.1703C167.645 17.7428 168.489 19.9629 168.448 22.4218C168.408 24.7676 167.52 27.0328 166.072 28.4809C163.069 31.4846 133.127 57.7712 109.743 78.2244L104.012 72.4936C121.083 52.9613 142.268 28.8095 150.554 19.639L152.439 21.5243C154.283 23.3681 157.272 23.3683 159.115 21.5248C160.959 19.6813 160.959 16.6922 159.116 14.8484L153.762 9.49412C152.877 8.6087 151.676 8.11111 150.424 8.11111H150.424C149.171 8.11111 147.971 8.60847 147.086 9.49365C144.213 12.3664 126.639 32.3254 110.783 50.42C106.519 43.9657 100.823 38.4134 94.0485 34.1513C84.1465 27.9217 72.6023 24.7632 59.736 24.7632C56.9056 24.7632 54.1053 24.9416 51.4137 25.294C48.8282 25.6325 47.0069 28.0024 47.3451 30.5879C47.6836 33.1731 50.0533 34.9944 52.6387 34.6562C54.9258 34.3569 57.3137 34.2051 59.7358 34.2051C79.3264 34.2051 95.7596 42.988 104.281 57.8444C96.3294 66.9311 89.4972 74.7575 86.2025 78.5338C80.3206 79.3352 75.9318 81.7422 72.8372 85.8697C69.96 89.7072 68.6988 94.2903 67.3637 99.1425C65.7538 104.993 64.0892 111.043 59.342 115.79C57.9916 117.14 57.5877 119.171 58.3185 120.935C59.0493 122.699 60.7709 123.849 62.6802 123.849C75.3856 123.849 85.4556 121.141 92.611 115.8C99.0591 110.987 102.903 104.154 103.811 95.9476C115.976 85.3238 168.386 39.52 172.749 35.1573C175.934 31.9718 177.808 27.3873 177.888 22.5797ZM102.618 84.4532C101.2 85.6927 99.8246 86.8942 98.5023 88.0487L94.1918 83.7385C95.3453 82.4164 96.5466 81.0399 97.7858 79.6208L102.618 84.4532ZM86.963 108.234C83.2495 111.006 78.3076 112.853 72.2079 113.758C74.2834 109.585 75.4479 105.353 76.4674 101.647C78.6555 93.6952 79.9883 89.7041 85.3801 88.2798L94.0971 96.9966C93.1373 101.637 90.7492 105.408 86.963 108.234Z" fill="#2E2E2E"/>
                        <path d="M36.6709 39.2012C37.3585 39.2012 38.057 39.0501 38.7177 38.7317C39.1414 38.5272 39.5766 38.3264 40.011 38.1349C42.3962 37.0819 43.4764 34.2947 42.4234 31.9094C41.3704 29.5244 38.5834 28.4442 36.1978 29.497C35.6674 29.7311 35.1356 29.9766 34.617 30.2266C32.2686 31.3589 31.2826 34.1809 32.4147 36.5293C33.2286 38.2171 34.9147 39.2012 36.6709 39.2012Z" fill="#2E2E2E"/>
                        <path d="M70.7879 129.095C68.1831 129.07 66.0435 131.156 66.014 133.763C65.8103 151.912 63.0705 160.009 47.3747 160.009C38.5757 160.009 29.3415 153.572 22.0401 142.349C13.9892 129.974 9.55522 113.907 9.55522 97.1073C9.55522 75.2981 16.141 57.1516 28.0994 46.0111C30.0072 44.2338 30.1129 41.2464 28.3357 39.3387C26.5585 37.4309 23.5711 37.3252 21.6633 39.1024C14.6194 45.6648 9.16928 54.1913 5.46403 64.4453C1.91339 74.271 0.113281 85.2603 0.113281 97.1073C0.113281 115.713 5.08989 133.609 14.1258 147.498C23.2021 161.449 35.3211 169.451 47.3747 169.451C58.9035 169.451 66.9389 165.394 71.2569 157.393C74.9643 150.523 75.3679 141.648 75.4553 133.869C75.4845 131.262 73.395 129.124 70.7879 129.095Z" fill="#2E2E2E"/>
                        <path d="M94.0193 59.1797C94.0193 50.5073 86.9635 43.4516 78.2911 43.4516C69.6185 43.4516 62.5625 50.5073 62.5625 59.1797C62.5625 67.8524 69.6185 74.9084 78.2911 74.9084C86.9635 74.9081 94.0193 67.8524 94.0193 59.1797ZM72.0044 59.1797C72.0044 55.7134 74.8245 52.8935 78.2911 52.8935C81.7575 52.8935 84.5773 55.7134 84.5773 59.1797C84.5773 62.6464 81.7575 65.4664 78.2911 65.4664C74.8245 65.4662 72.0044 62.6461 72.0044 59.1797Z" fill="#2E2E2E"/>
                        <path d="M40.8065 80.5609C49.4792 80.5609 56.5349 73.5052 56.5349 64.8328C56.5349 56.1601 49.4792 49.1044 40.8065 49.1044C32.1339 49.1044 25.0781 56.1601 25.0781 64.8328C25.0781 73.5052 32.1339 80.5609 40.8065 80.5609ZM40.8065 58.5463C44.2729 58.5463 47.093 61.3664 47.093 64.8328C47.093 68.2991 44.2729 71.119 40.8065 71.119C37.3401 71.119 34.5201 68.2991 34.5201 64.8328C34.5201 61.3664 37.3404 58.5463 40.8065 58.5463Z" fill="#2E2E2E"/>
                        <path d="M44.488 100.97C44.488 92.2974 37.4323 85.2414 28.7596 85.2414C20.087 85.2414 13.0312 92.2974 13.0312 100.97C13.0312 109.642 20.087 116.698 28.7596 116.698C37.4323 116.698 44.488 109.642 44.488 100.97ZM28.7596 107.256C25.2933 107.256 22.4732 104.436 22.4732 100.97C22.4732 97.5034 25.2933 94.6833 28.7596 94.6833C32.226 94.6833 35.0461 97.5034 35.0461 100.97C35.0461 104.436 32.226 107.256 28.7596 107.256Z" fill="#2E2E2E"/>
                        <path d="M45.2828 153.5C53.9555 153.5 61.0115 146.444 61.0115 137.771C61.0115 129.099 53.9555 122.043 45.2828 122.043C36.6104 122.043 29.5547 129.099 29.5547 137.771C29.5547 146.444 36.6104 153.5 45.2828 153.5ZM45.2828 131.485C48.7494 131.485 51.5695 134.305 51.5695 137.771C51.5695 141.238 48.7494 144.058 45.2828 144.058C41.8167 144.058 38.9966 141.238 38.9966 137.771C38.9966 134.305 41.8167 131.485 45.2828 131.485Z" fill="#2E2E2E"/>
                    </g >
                    <defs>
                        <clipPath id="clip0_3148_3927">
                            <rect width="177.778" height="177.778" fill="white" transform="translate(0.113281 0.111023)" />
                        </clipPath>
                    </defs>
                </svg >`,
        white: `<svg viewBox="0 0 178 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3164_4155)">
                        <path d="M177.888 22.5797C177.972 17.5394 176.147 12.8918 172.749 9.49365C170.905 7.65011 167.916 7.65011 166.072 9.49388C164.229 11.3377 164.229 14.3267 166.072 16.1703C167.645 17.7428 168.489 19.9629 168.448 22.4218C168.408 24.7676 167.52 27.0328 166.072 28.4809C163.069 31.4846 133.127 57.7712 109.743 78.2244L104.012 72.4936C121.083 52.9613 142.268 28.8095 150.554 19.639L152.439 21.5243C154.283 23.3681 157.272 23.3683 159.115 21.5248C160.959 19.6813 160.959 16.6922 159.116 14.8484L153.762 9.49412C152.877 8.6087 151.676 8.11111 150.424 8.11111H150.424C149.171 8.11111 147.971 8.60847 147.086 9.49365C144.213 12.3664 126.639 32.3254 110.783 50.42C106.519 43.9657 100.823 38.4134 94.0485 34.1513C84.1465 27.9217 72.6023 24.7632 59.736 24.7632C56.9056 24.7632 54.1053 24.9416 51.4137 25.294C48.8282 25.6325 47.0069 28.0024 47.3451 30.5879C47.6836 33.1731 50.0533 34.9944 52.6387 34.6562C54.9258 34.3569 57.3137 34.2051 59.7358 34.2051C79.3264 34.2051 95.7596 42.988 104.281 57.8444C96.3294 66.9311 89.4972 74.7575 86.2025 78.5338C80.3206 79.3352 75.9318 81.7422 72.8372 85.8697C69.96 89.7072 68.6988 94.2903 67.3637 99.1425C65.7538 104.993 64.0892 111.043 59.342 115.79C57.9916 117.14 57.5877 119.171 58.3185 120.935C59.0493 122.699 60.7709 123.849 62.6802 123.849C75.3856 123.849 85.4556 121.141 92.611 115.8C99.0591 110.987 102.903 104.154 103.811 95.9476C115.976 85.3238 168.386 39.52 172.749 35.1573C175.934 31.9718 177.808 27.3873 177.888 22.5797ZM102.618 84.4532C101.2 85.6927 99.8246 86.8942 98.5023 88.0487L94.1918 83.7385C95.3453 82.4164 96.5466 81.0399 97.7858 79.6208L102.618 84.4532ZM86.963 108.234C83.2495 111.006 78.3076 112.853 72.2079 113.758C74.2834 109.585 75.4479 105.353 76.4674 101.647C78.6555 93.6952 79.9883 89.7041 85.3801 88.2798L94.0971 96.9966C93.1373 101.637 90.7492 105.408 86.963 108.234Z" fill="#EDEDED"/>
                        <path d="M36.6709 39.2012C37.3585 39.2012 38.057 39.0501 38.7177 38.7317C39.1414 38.5272 39.5766 38.3264 40.011 38.1349C42.3962 37.0819 43.4764 34.2947 42.4234 31.9094C41.3704 29.5244 38.5834 28.4442 36.1978 29.497C35.6674 29.7311 35.1356 29.9766 34.617 30.2266C32.2686 31.3589 31.2826 34.1809 32.4147 36.5293C33.2286 38.2171 34.9147 39.2012 36.6709 39.2012Z" fill="#EDEDED"/>
                        <path d="M70.7879 129.095C68.1831 129.07 66.0435 131.156 66.014 133.763C65.8103 151.912 63.0705 160.009 47.3747 160.009C38.5757 160.009 29.3415 153.572 22.0401 142.349C13.9892 129.974 9.55522 113.907 9.55522 97.1073C9.55522 75.2981 16.141 57.1516 28.0994 46.0111C30.0072 44.2338 30.1129 41.2464 28.3357 39.3387C26.5585 37.4309 23.5711 37.3252 21.6633 39.1024C14.6194 45.6648 9.16928 54.1913 5.46403 64.4453C1.91339 74.271 0.113281 85.2603 0.113281 97.1073C0.113281 115.713 5.08989 133.609 14.1258 147.498C23.2021 161.449 35.3211 169.451 47.3747 169.451C58.9035 169.451 66.9389 165.394 71.2569 157.393C74.9643 150.523 75.3679 141.648 75.4553 133.869C75.4845 131.262 73.395 129.124 70.7879 129.095Z" fill="#EDEDED"/>
                        <path d="M94.0193 59.1797C94.0193 50.5073 86.9635 43.4516 78.2911 43.4516C69.6185 43.4516 62.5625 50.5073 62.5625 59.1797C62.5625 67.8524 69.6185 74.9084 78.2911 74.9084C86.9635 74.9081 94.0193 67.8524 94.0193 59.1797ZM72.0044 59.1797C72.0044 55.7134 74.8245 52.8935 78.2911 52.8935C81.7575 52.8935 84.5773 55.7134 84.5773 59.1797C84.5773 62.6464 81.7575 65.4664 78.2911 65.4664C74.8245 65.4662 72.0044 62.6461 72.0044 59.1797Z" fill="#EDEDED"/>
                        <path d="M40.8065 80.5609C49.4792 80.5609 56.5349 73.5052 56.5349 64.8328C56.5349 56.1601 49.4792 49.1044 40.8065 49.1044C32.1339 49.1044 25.0781 56.1601 25.0781 64.8328C25.0781 73.5052 32.1339 80.5609 40.8065 80.5609ZM40.8065 58.5463C44.2729 58.5463 47.093 61.3664 47.093 64.8328C47.093 68.2991 44.2729 71.119 40.8065 71.119C37.3401 71.119 34.5201 68.2991 34.5201 64.8328C34.5201 61.3664 37.3404 58.5463 40.8065 58.5463Z" fill="#EDEDED"/>
                        <path d="M44.488 100.97C44.488 92.2974 37.4323 85.2414 28.7596 85.2414C20.087 85.2414 13.0312 92.2974 13.0312 100.97C13.0312 109.642 20.087 116.698 28.7596 116.698C37.4323 116.698 44.488 109.642 44.488 100.97ZM28.7596 107.256C25.2933 107.256 22.4732 104.436 22.4732 100.97C22.4732 97.5034 25.2933 94.6833 28.7596 94.6833C32.226 94.6833 35.0461 97.5034 35.0461 100.97C35.0461 104.436 32.226 107.256 28.7596 107.256Z" fill="#EDEDED"/>
                        <path d="M45.2828 153.5C53.9555 153.5 61.0115 146.444 61.0115 137.771C61.0115 129.099 53.9555 122.043 45.2828 122.043C36.6104 122.043 29.5547 129.099 29.5547 137.771C29.5547 146.444 36.6104 153.5 45.2828 153.5ZM45.2828 131.485C48.7494 131.485 51.5695 134.305 51.5695 137.771C51.5695 141.238 48.7494 144.058 45.2828 144.058C41.8167 144.058 38.9966 141.238 38.9966 137.771C38.9966 134.305 41.8167 131.485 45.2828 131.485Z" fill="#EDEDED"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_3164_4155">
                        <rect width="177.778" height="177.778" fill="white" transform="translate(0.113281 0.111023)"/>
                        </clipPath>
                        </defs>
                </svg>`
    }


]

const mhChangeIdeasText = () => {
    mhCentralTextUp.style.opacity = "0";
    mhCentralTextDown.style.opacity = "0";
    setTimeout(() => {
        mhNumberOfActivAnimation = (mhNumberOfActivAnimation + 1) % ideasArrayUp.length;
        mhCentralTextUp.textContent = mhArrayFirstSectionSubTitlesLeft[mhNumberOfActivAnimation][mhSelectLang];
        mhCentralTextDown.textContent = mhArrayFirstSectionSubTitlesRight[mhNumberOfActivAnimation][mhSelectLang];
        mhCentralTextUp.style.opacity = "1";
        mhCentralTextDown.style.opacity = "1";
    }, 300);
};

setInterval(mhChangeIdeasText, 4000);


const mhThirdSectionButtonServices = document.getElementById("mh-third-section-button-services");
const mhThirdSectionButtonContacts = document.getElementById("mh-third-section-button-contacts");

mhThirdSectionButtonServices.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 1.4,
        behavior: 'smooth'
    });
})

mhThirdSectionButtonContacts.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 2.3,
        behavior: 'smooth'
    });
})

let mhActivNumber = 0;


const mhFourSectionTitle = document.getElementById("mh-four-section-title");
const mhFourSectionImg = document.getElementById("mh-four-section-img-wrapper");
const mhFourSectionText0 = document.getElementById("mh-four-section-text-0");
const mhFourSectionText1 = document.getElementById("mh-four-section-text-1");

const mhActivService = () => {
    const currentService = arrayPriceList[mhActivNumber];

    mhFourSectionTitle.textContent = currentService.title[mhSelectLang];

    // const parser = new DOMParser();
    // const svgElement = parser.parseFromString(mhArrayOfSvgThirdSection.black, "image/svg+xml").documentElement;
    // svgElement.id = `svgElement-${number}`;
    // let oldSvgElement = document.getElementById(`svgElement-${number}`);

    // if (oldSvgElement) {
    //     mhFourSectionImg.removeChild(oldSvgElement);
    // }
    // mhFourSectionImg.appendChild(svgElement);

    mhFourSectionText0.textContent = currentService.description[mhSelectLang][0];
    mhFourSectionText1.textContent = currentService.description[mhSelectLang][1];1

    currentService.prices.map((serviceData, number) => {
        const { nameOfServise, cost } = serviceData;
        const mhPriceListServiceName = document.getElementById(`mh-price-list-service-name-${number}`);
        const mhPriceListServiceCost = document.getElementById(`mh-price-list-service-cost-${number}`);
        mhPriceListServiceCost.textContent = `£${cost}`;
        mhPriceListServiceName.textContent = nameOfServise[mhSelectLang];

    })
}

mhActivService()

const mhLang = document.getElementById("mv-navigation-block-lang-button");

const mhSwitchLocalization = () => {
    mhSelectLang = mvSelectLang === "eng" ? "rus" : "eng";
    for (let id in localizationWrapper) { // перебираем все айдишники
        const data = localizationWrapper[id]; // пой айди получаю информацию 

        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        element.textContent = data[mhSelectLang]; //   обновляю текст

        if (mhSelectLang === "rus") { // добавляем стили к русскому тексту 
            const allStyles = data.styles;
            element.style.fontFamily = "'Lato'";
            for (let style in allStyles) {
                const valueStyle = allStyles[style];
                element.style[style] = valueStyle; // придумать как сбрасывать стили для ангийского языка
            }
        }
    }
}