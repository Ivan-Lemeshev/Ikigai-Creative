import localizationWrapper from "./localization-data.js";

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
    {
        eng: "Transforming Ideas",
        rus: "Превращаем идеи"
    },

    {
        eng: "Your Vision",
        rus: "Ваше видение"
    },

    {
        eng: "Crafting Digital",
        rus: "Создаём цифровое"
    },

    {
        eng: "Innovate & Engage",
        rus: "Прорывы & Участия"
    },

    {
        eng: "DIGITAL AGENCY",
        rus: "IT АГЕНСТВО"
    }
];

const ideasArrayDown = [
    {
        eng: "into Digital Reality",
        rus: "В цифровую реальность"
    },

    {
        eng: "Our Innovation",
        rus: "Наше новаторство"
    },

    {
        eng: "Excellence",
        rus: "Совершенство"
    },

    {
        eng: "Succeed",
        rus: "Успех"
    },

    {
        eng: "LONDON",
        rus: "Лондон"
    }

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

const thirdSectionText = document.getElementById("third-section-main-content-right-part");
const thirdSectionButtonOrder = document.getElementById("third-section-main-content-right-part-button-order");
const thirdSectionButtonMore = document.getElementById("third-section-main-content-right-part-button-more");


const thirdSectionImage = document.getElementById("third-section-main-content-left-part");
const thirdSectionTitle = document.getElementById("third-section-title");
const thirdSectionMainContentRightPartLine = document.getElementById("third-section-main-content-right-part-line");
const thirdSectionLowerPart = document.getElementById("third-section-lower-part");
const thirdSectionLowerPartDivFirst = document.getElementById("third-section-lower-part-1");
const thirdSectionLowerPartDivSecond = document.getElementById("third-section-lower-part-2");
const thirdSectionLowerPartDivThird = document.getElementById("third-section-lower-part-3");
const thirdSectionLowerPartDivFourth = document.getElementById("third-section-lower-part-4");
const thirdSectionLowerPartDivFifth = document.getElementById("third-section-lower-part-5");

const arrayCard = [
    thirdSectionLowerPartDivFirst,
    thirdSectionLowerPartDivSecond,
    thirdSectionLowerPartDivThird,
    thirdSectionLowerPartDivFourth,
    thirdSectionLowerPartDivFifth
];


const arrayDataOfService = [
    {
        title: {
            eng: "Creative Design",
            rus: "Креативный дизайн"
        },

        svgCode: `<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M399.992 50.5545C400.182 39.2138 396.075 28.7568 388.429 21.1109C384.28 16.9629 377.555 16.9629 373.407 21.1114C369.259 25.2599 369.258 31.9854 373.407 36.1333C376.946 39.6716 378.843 44.6667 378.751 50.1992C378.663 55.4774 376.665 60.5739 373.407 63.8323C366.648 70.5906 299.28 129.735 246.666 175.755L233.77 162.861C272.18 118.913 319.846 64.5716 338.49 43.938L342.732 48.1799C346.88 52.3284 353.606 52.329 357.753 48.181C361.902 44.033 361.903 37.3076 357.755 33.1591L345.709 21.112C343.717 19.1198 341.015 18.0002 338.198 18.0002H338.197C335.38 18.0002 332.679 19.1192 330.687 21.1109C324.222 27.5745 284.683 72.4824 249.006 113.195C239.412 98.673 226.597 86.1803 211.353 76.5906C189.074 62.5741 163.099 55.4673 134.15 55.4673C127.782 55.4673 121.481 55.8688 115.425 56.6618C109.608 57.4234 105.51 62.7557 106.271 68.5729C107.032 74.3896 112.364 78.4877 118.181 77.7266C123.327 77.0532 128.7 76.7117 134.15 76.7117C178.229 76.7117 215.203 96.4732 234.377 129.9C216.485 150.345 201.113 167.955 193.7 176.451C180.466 178.254 170.591 183.67 163.628 192.957C157.154 201.591 154.316 211.903 151.312 222.821C147.69 235.985 143.945 249.597 133.264 260.278C130.225 263.316 129.317 267.884 130.961 271.854C132.605 275.823 136.479 278.411 140.775 278.411C169.362 278.411 192.019 272.318 208.119 260.301C222.627 249.471 231.275 234.096 233.32 215.632C260.69 191.729 378.613 88.6701 388.429 78.8541C395.597 71.6868 399.811 61.3716 399.992 50.5545ZM230.636 189.77C227.444 192.559 224.349 195.262 221.374 197.86L211.676 188.162C214.271 185.187 216.974 182.09 219.762 178.897L230.636 189.77ZM195.411 243.277C187.056 249.514 175.936 253.67 162.212 255.706C166.882 246.315 169.502 236.794 171.796 228.456C176.719 210.564 179.718 201.584 191.849 198.38L211.463 217.993C209.303 228.433 203.93 236.918 195.411 243.277Z" fill="#0282C9"/>
        <path d="M82.2595 87.9525C83.8066 87.9525 85.3782 87.6126 86.8647 86.8961C87.8181 86.4362 88.7974 85.9842 89.7747 85.5535C95.1415 83.1842 97.5719 76.9128 95.2026 71.546C92.8333 66.1797 86.5625 63.7493 81.1952 66.118C80.0018 66.6449 78.8052 67.1973 77.6383 67.7597C72.3543 70.3074 70.1359 76.6568 72.6831 81.9408C74.5143 85.7383 78.308 87.9525 82.2595 87.9525Z" fill="#0282C9"/>
        <path d="M159.018 290.215C153.157 290.158 148.343 294.851 148.277 300.717C147.818 341.552 141.654 359.77 106.338 359.77C86.5405 359.77 65.7635 345.287 49.3353 320.036C31.2207 292.191 21.2444 256.04 21.2444 218.242C21.2444 169.171 36.0623 128.342 62.9688 103.275C67.2613 99.2767 67.4992 92.555 63.5005 88.2626C59.5018 83.9701 52.78 83.7322 48.4876 87.7309C32.6388 102.496 20.376 121.681 12.0392 144.752C4.05024 166.86 0 191.586 0 218.242C0 260.104 11.1974 300.371 31.5282 331.621C51.9499 363.012 79.2176 381.015 106.338 381.015C132.278 381.015 150.358 371.887 160.073 353.885C168.415 338.427 169.323 318.459 169.519 300.956C169.585 295.09 164.884 290.281 159.018 290.215Z" fill="#0282C9"/>
        <path d="M211.286 132.904C211.286 113.391 195.41 97.5156 175.897 97.5156C156.384 97.5156 140.508 113.391 140.508 132.904C140.508 152.417 156.384 168.293 175.897 168.293C195.41 168.293 211.286 152.417 211.286 132.904ZM161.752 132.904C161.752 125.105 168.097 118.76 175.897 118.76C183.697 118.76 190.041 125.105 190.041 132.904C190.041 140.704 183.697 147.049 175.897 147.049C168.097 147.048 161.752 140.703 161.752 132.904Z" fill="#0282C9"/>
        <path d="M91.5607 181.012C111.074 181.012 126.95 165.136 126.95 145.623C126.95 126.11 111.074 110.234 91.5607 110.234C72.0473 110.234 56.1719 126.11 56.1719 145.623C56.1719 165.136 72.0473 181.012 91.5607 181.012ZM91.5607 131.479C99.3601 131.479 105.705 137.824 105.705 145.623C105.705 153.423 99.3601 159.767 91.5607 159.767C83.7614 159.767 77.4162 153.423 77.4162 145.623C77.4162 137.824 83.7619 131.479 91.5607 131.479Z" fill="#0282C9"/>
        <path d="M99.8402 226.932C99.8402 207.419 83.9648 191.543 64.4514 191.543C44.9379 191.543 29.0625 207.419 29.0625 226.932C29.0625 246.445 44.9379 262.321 64.4514 262.321C83.9648 262.321 99.8402 246.445 99.8402 226.932ZM64.4514 241.076C56.652 241.076 50.3069 234.732 50.3069 226.932C50.3069 219.132 56.652 212.787 64.4514 212.787C72.2507 212.787 78.5959 219.132 78.5959 226.932C78.5959 234.731 72.2507 241.076 64.4514 241.076Z" fill="#0282C9"/>
        <path d="M101.634 345.124C121.148 345.124 137.024 329.249 137.024 309.736C137.024 290.223 121.148 274.348 101.634 274.348C82.1215 274.348 66.2461 290.223 66.2461 309.736C66.2461 329.249 82.1215 345.124 101.634 345.124ZM101.634 295.592C109.434 295.592 115.779 301.937 115.779 309.736C115.779 317.535 109.434 323.88 101.634 323.88C93.8356 323.88 87.4905 317.535 87.4905 309.736C87.4905 301.937 93.8356 295.592 101.634 295.592Z" fill="#0282C9"/>
        </svg>`,
        text: {
            eng: [
                "Development of unique concepts and visual solutions.",
                "Web design, app design, and user interface design.",
                "Logo creation and complete branding for companies."
            ],

            rus: [
                "Разработка уникальных концепций и визуальных решений.",
                "Веб-дизайн, дизайн приложений и пользовательских интерфейсов.",
                "Создание логотипов и полный брендинг для компаний"
            ]
        },


        prices: [
            {
                nameOfServise: {
                    eng: "Web Design",
                    rus: "Дизайн сайтов"
                },
                cost: 500
            },

            {
                nameOfServise: {
                    eng: "Mobile App Design",
                    rus: "Дизайн мобильных приложений"
                },
                cost: 700
            },

            {
                nameOfServise: {
                    eng: "Logo and Branding",
                    rus: "Логотип и брендинг"
                },
                cost: 300
            },

            {
                nameOfServise: {
                    eng: "Graphic Design",
                    rus: "Графический дизайн"
                },
                cost: 100
            },

            {
                nameOfServise: {
                    eng: "Packaging Design",
                    rus: "Дизайн упаковки"
                },
                cost: 400
            },

            {
                nameOfServise: {
                    eng: "Print Design",
                    rus: "Дизайн для печати"
                },
                cost: 150
            },

            {
                nameOfServise: {
                    eng: "UI/UX Design for Software",
                    rus: "UI/UX дизайн"
                },
                cost: 150
            },

        ],

        description: {
            eng: [
                "Creative design is your opportunity to stand out and be remembered. We develop unique concepts and visual solutions that not only grab attention but also reflect the individuality of your business. From web design and app design to user interface creation, each of our solutions is focused on your success and the convenience of your customers. We know how to make your website or app look modern, stylish, and, most importantly, effective.",
                "But we don’t stop there. We create not just logos but a complete visual identity for your brand. A full-fledged branding strategy is what distinguishes successful companies, and we’re ready to help you become one of them. Our creative design will make your brand recognizable, memorable, and visually striking on every level."
            ],
            rus: [
                "Креативный дизайн — это ваш шанс выделиться и запомниться. Мы разрабатываем уникальные концепции и визуальные решения, которые не только привлекают внимание, но и отражают индивидуальность вашего бизнеса. От веб-дизайна и дизайна приложений до создания интерфейсов — каждое наше решение ориентировано на ваш успех и удобство ваших клиентов. Мы знаем, как сделать ваш сайт или приложение современным, стильным и, что важнее всего, эффективным.",
                "Но мы не останавливаемся на этом. Мы создаём не просто логотипы, а целостную визуальную идентичность для вашего бренда. Полноценная стратегия брендинга — вот что отличает успешные компании, и мы готовы помочь вам стать одной из них. Наш креативный дизайн сделает ваш бренд узнаваемым, запоминающимся и визуально впечатляющим на каждом уровне."
            ]
        }
    },

    {
        title: {
            eng: "Website design and development",
            rus: "Веб-дизайн и разработка"
        },
        svgCode: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M177.166 10H22.8342C17.0434 10 11.4898 12.2979 7.3951 16.3883C3.30039 20.4787 1 26.0264 1 31.8111V140.189C1 145.974 3.30039 151.521 7.3951 155.612C11.4898 159.702 17.0434 162 22.8342 162H177.166C182.957 162 188.51 159.702 192.605 155.612C196.7 151.521 199 145.974 199 140.189V31.8111C199 26.0264 196.7 20.4787 192.605 16.3883C188.51 12.2979 182.957 10 177.166 10ZM22.8342 18.2638H177.166C180.763 18.2638 184.212 19.6911 186.755 22.2317C189.299 24.7723 190.727 28.2181 190.727 31.8111V41.5651H9.2726V31.8111C9.2726 28.2181 10.7014 24.7723 13.2447 22.2317C15.788 19.6911 19.2375 18.2638 22.8342 18.2638ZM177.166 153.736H22.8342C19.2375 153.736 15.788 152.309 13.2447 149.768C10.7014 147.228 9.2726 143.782 9.2726 140.189V49.8289H190.727V140.189C190.727 141.968 190.377 143.73 189.695 145.373C189.014 147.017 188.015 148.51 186.755 149.768C185.496 151.026 184.001 152.024 182.356 152.705C180.71 153.386 178.947 153.736 177.166 153.736Z" fill="#009AEC"/>
        <path d="M21.1011 33.7986C21.7873 33.8591 22.4758 33.7098 23.0753 33.3703C23.6748 33.0309 24.157 32.5174 24.4581 31.8977C24.7592 31.2781 24.8649 30.5816 24.7614 29.9006C24.6578 29.2195 24.3498 28.5859 23.8781 28.0838C23.4064 27.5817 22.7933 27.2347 22.12 27.0888C21.4468 26.9429 20.745 27.005 20.1078 27.2668C19.4706 27.5287 18.928 27.9779 18.5518 28.555C18.1755 29.1321 17.9835 29.8099 18.0011 30.4986C18.0224 31.3333 18.3502 32.131 18.9219 32.7396C19.4936 33.3482 20.2693 33.7251 21.1011 33.7986Z" fill="#009AEC"/>
        <path d="M29.6022 33.7986C30.2828 33.8183 30.9536 33.6333 31.5278 33.2674C32.102 32.9015 32.5531 32.3717 32.8228 31.7465C33.0924 31.1213 33.1682 30.4296 33.0402 29.7609C32.9122 29.0922 32.5864 28.4773 32.1049 27.9958C31.6235 27.5144 31.0086 27.1886 30.3399 27.0606C29.6712 26.9326 28.9794 27.0084 28.3543 27.278C27.7291 27.5476 27.1992 27.9988 26.8334 28.573C26.4675 29.1472 26.2825 29.818 26.3022 30.4986C26.3274 31.3658 26.6831 32.1907 27.2966 32.8042C27.9101 33.4177 28.735 33.7734 29.6022 33.7986Z" fill="#009AEC"/>
        <path d="M38.0026 33.7986C38.6832 33.8183 39.354 33.6333 39.9282 33.2674C40.5024 32.9015 40.9535 32.3717 41.2232 31.7465C41.4928 31.1213 41.5685 30.4296 41.4406 29.7609C41.3126 29.0922 40.9868 28.4773 40.5053 27.9958C40.0239 27.5144 39.409 27.1886 38.7403 27.0606C38.0716 26.9326 37.3798 27.0084 36.7546 27.278C36.1295 27.5476 35.5996 27.9988 35.2338 28.573C34.8679 29.1472 34.6829 29.818 34.7026 30.4986C34.7278 31.3658 35.0835 32.1907 35.697 32.8042C36.3105 33.4177 37.1353 33.7734 38.0026 33.7986Z" fill="#009AEC"/>
        <path d="M110 89.7001L106.1 98.5001L102.1 89.7001C102.1 89.7001 102.1 89.7001 101.4 89.0001C100.7 88.3001 101.4 88.4001 100.6 88.2001C100.6 88.2001 99.9002 88.2001 99.5002 88.2001C99.1135 88.0542 98.6869 88.0542 98.3002 88.2001C98.3002 88.2001 97.7002 88.8001 97.5002 89.0001C97.3002 89.2001 96.9002 89.0001 96.7002 89.7001L92.8002 98.5001L88.9002 89.7001C88.7591 89.2696 88.5281 88.8739 88.2226 88.5394C87.9171 88.2048 87.544 87.9389 87.1281 87.7593C86.7121 87.5797 86.2628 87.4904 85.8098 87.4975C85.3568 87.5045 84.9104 87.6077 84.5002 87.8001C84.1373 87.9621 83.8101 88.1945 83.5377 88.484C83.2654 88.7735 83.0532 89.1142 82.9137 89.4864C82.7741 89.8586 82.7099 90.2547 82.7248 90.6519C82.7396 91.0491 82.8333 91.4394 83.0002 91.8001L90.0002 107.8C90.335 108.382 90.8181 108.865 91.4002 109.2H92.6002H93.8002C94.4192 108.88 94.9381 108.395 95.3002 107.8L99.2002 98.9001L103.2 107.8C103.535 108.382 104.018 108.865 104.6 109.2C105.028 109.302 105.473 109.302 105.9 109.2H107.1C107.682 108.865 108.165 108.382 108.5 107.8L115.3 92.7001C115.604 91.956 115.607 91.123 115.309 90.3768C115.01 89.6305 114.433 89.0294 113.7 88.7001C113.064 88.409 112.345 88.3496 111.67 88.5322C110.994 88.7148 110.403 89.128 110 89.7001Z" fill="#009AEC"/>
        <path d="M144.2 89.6999L140.3 98.4999L136.3 89.6999C136.3 89.6999 135.8 89.6999 135.6 88.9999C135.4 88.2999 135.6 88.3999 134.8 88.1999C134.413 88.054 133.986 88.054 133.6 88.1999C133.6 88.1999 132.9 88.1999 132.5 88.1999C132.5 88.1999 132 88.6999 131.7 88.9999C131.4 89.2999 131.1 88.9999 131 89.6999L127 98.4999L123.1 89.6999C122.938 89.3369 122.705 89.0097 122.416 88.7374C122.126 88.465 121.785 88.2529 121.413 88.1133C121.041 87.9738 120.645 87.9095 120.248 87.9244C119.851 87.9393 119.46 88.0329 119.1 88.1999C118.728 88.3524 118.39 88.5781 118.108 88.8634C117.825 89.1488 117.602 89.4881 117.453 89.8612C117.304 90.2343 117.231 90.6336 117.239 91.0353C117.247 91.437 117.336 91.8331 117.5 92.1999L124.1 107.8C124.434 108.382 124.917 108.865 125.5 109.2H126.7C127.127 109.302 127.572 109.302 128 109.2C128.802 108.966 129.505 108.474 130 107.8L134 98.8999L137.9 107.8C138.234 108.382 138.717 108.865 139.3 109.2C139.728 109.292 140.171 109.292 140.6 109.2H141.8C142.41 108.868 142.926 108.386 143.3 107.8L150 92.1999C150.164 91.8331 150.252 91.437 150.26 91.0353C150.268 90.6336 150.196 90.2343 150.046 89.8612C149.897 89.4881 149.674 89.1488 149.392 88.8634C149.109 88.5781 148.771 88.3524 148.4 88.1999C148.03 88.0001 147.622 87.8804 147.202 87.8485C146.783 87.8166 146.362 87.8732 145.966 88.0146C145.57 88.1561 145.208 88.3792 144.903 88.6695C144.599 88.9598 144.359 89.3109 144.2 89.6999Z" fill="#009AEC"/>
        <path d="M75.6 89.7001L71.7 98.5001L67.8 89.7001C67.5784 89.4462 67.3059 89.2417 67 89.1001C66.8891 88.5884 66.6069 88.1298 66.2 87.8001C65.8133 87.6543 65.3867 87.6543 65 87.8001C65 87.8001 64.3 87.8001 63.9 87.8001L63.1 88.6001C63.1 88.6001 62.5 88.6001 62.4 89.3001L58.4 98.1001L54.5 89.3001C54.3485 88.8681 54.1001 88.4764 53.7738 88.1552C53.4476 87.834 53.0521 87.5917 52.6178 87.4469C52.1834 87.3021 51.7217 87.2587 51.2679 87.3199C50.8142 87.3811 50.3805 87.5454 50 87.8001C49.2668 88.1294 48.6901 88.7305 48.3916 89.4768C48.0931 90.223 48.0961 91.056 48.4 91.8001L55.5 107.8C55.8348 108.382 56.3178 108.865 56.9 109.2H58.1C58.5274 109.302 58.9727 109.302 59.4 109.2H60C60.436 108.816 60.7781 108.337 61 107.8L65 98.9001L68.9 107.8C69.2348 108.382 69.7178 108.865 70.3 109.2H71.5H72.7C73.4292 108.929 74.0575 108.44 74.5 107.8L81.2 92.7001C81.5453 92.3358 81.7937 91.8906 81.9224 91.4054C82.051 90.9202 82.0559 90.4104 81.9365 89.9228C81.8171 89.4352 81.5772 88.9854 81.2389 88.6146C80.9006 88.2437 80.4746 87.9637 80 87.8001C79.5899 87.6077 79.1435 87.5045 78.6905 87.4975C78.2375 87.4904 77.7881 87.5797 77.3722 87.7593C76.9562 87.9389 76.5831 88.2048 76.2776 88.5394C75.9721 88.874 75.7412 89.2696 75.6 89.7001Z" fill="#009AEC"/>
        </svg>`,
        text: {
            eng: [
                "Responsive websites and mobile sites for all devices.",
                "Website development using popular CMS (WordPress, Joomla, etc.).",
                "Custom platform and mobile app development for iOS and Android."
            ],
            rus: [
                "Адаптивные веб-сайты и мобильные сайты для всех устройств.",
                "Разработка веб-сайтов на популярных CMS (WordPress, Joomla и др.).",
                "Разработка пользовательских платформ и приложений для iOS и Android."
            ]
        },

        prices: [
            {
                nameOfServise: {
                    eng: "Landing Page Design",
                    rus: "Дизайн лендинга"
                },
                cost: 300
            },

            {
                nameOfServise: {
                    eng: "Custom Website Design",
                    rus: "Индивидуальный дизайн сайта"
                },
                cost: 700
            },

            {
                nameOfServise: {
                    eng: "E-commerce Website Development",
                    rus: "Разработка интернет-магазина"
                },
                cost: 1200
            },

            {
                nameOfServise: {
                    eng: "WordPress Website Setup",
                    rus: "Настройка сайта на WordPress"
                },
                cost: 400
            },

            {
                nameOfServise: {
                    eng: "Website Redesign/Modernization",
                    rus: "Редизайн/модернизация сайта"
                },
                cost: 600
            },

            {
                nameOfServise: {
                    eng: "Single Page Application",
                    rus: "Одностраничное веб-приложение"
                },
                cost: 900
            },

            {
                nameOfServise: {
                    eng: "SEO-Optimized Website Development",
                    rus: "Разработка SEO-оптимизированного сайта"
                },
                cost: 800
            },

        ],

        description: {
            eng: [
                "Website design and development is about more than just creating a beautiful site; it’s about crafting functional, user-friendly experiences that keep your customers engaged. We build responsive, visually striking websites that reflect your brand's uniqueness while ensuring seamless performance across all devices. From landing pages to e-commerce platforms, we create websites that don’t just look good—they work flawlessly, providing an enjoyable experience for your users.",
                "Our development team goes beyond design; we ensure your website is optimized for speed, performance, and search engine visibility. Whether launching a new e-commerce site or redesigning an existing one, we guide you through every step—from concept to execution. We don’t just create websites; we deliver digital experiences that engage, convert, and grow your business."
            ],
            rus: [
                "Дизайн и разработка сайтов — это искусство создания функциональных и удобных для пользователей решений, которые удерживают вашу аудиторию. Мы разрабатываем адаптивные и визуально впечатляющие сайты, отражающие уникальность вашего бренда и обеспечивают безупречную работу на любых устройствах. От лендингов до платформ электронной коммерции — мы создаем сайты, которые не только привлекают внимание, но и работают идеально, даря вашим пользователям приятный опыт.",
                "Наша команда разработчиков выходит за рамки. Мы обеспечиваем оптимизацию вашего сайта для высокой скорости, стабильной производительности и видимости в поисковых системах. Независимо от того, запускаете ли вы новый интернет-магазин или обновляете существующий сайт, мы сопровождаем вас на каждом этапе — от концепции до реализации."
            ]
        }
    },

    {
        title: {
            eng: "Video production",
            rus: "Создание видео"
        },
        svgCode: `<svg width="201" height="200" viewBox="0 0 201 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1450_228)">
        <path d="M41.1402 4.51343H8.70772C4.01042 4.51343 0.599609 7.92424 0.599609 12.6215V169.378C0.599609 174.076 4.01042 177.486 8.70772 177.486H41.1402H160.059H192.492C197.189 177.486 200.6 174.076 200.6 169.378V12.6215C200.6 7.92424 197.189 4.51343 192.492 4.51343H160.059H41.1402ZM6.00501 169.378V12.6215C6.00501 10.9296 7.01583 9.91883 8.70772 9.91883H38.4374V172.081H8.70772C7.01583 172.081 6.00501 171.07 6.00501 169.378ZM43.8429 172.081V9.91883H157.356V172.081H43.8429ZM195.194 12.6215V169.378C195.194 171.07 194.183 172.081 192.492 172.081H162.762V9.91883H192.492C194.183 9.91883 195.194 10.9296 195.194 12.6215Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M80.4754 59.0216C79.6484 58.4702 78.5781 58.4162 77.697 58.8865C76.8267 59.3567 76.2754 60.2702 76.2754 61.2702V126.135C76.2754 127.135 76.8267 128.049 77.7024 128.519C78.1024 128.73 78.5403 128.838 78.9781 128.838C79.5024 128.838 80.0213 128.686 80.4754 128.384L129.124 95.9513C129.875 95.4486 130.329 94.6054 130.329 93.7027C130.329 92.8 129.875 91.9567 129.124 91.454L80.4754 59.0216ZM81.6808 121.086V66.3189L122.756 93.7027L81.6808 121.086Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M27.6268 47.7566H16.816C15.3241 47.7566 14.1133 48.9674 14.1133 50.4593C14.1133 51.9512 15.3241 53.162 16.816 53.162H27.6268C29.1187 53.162 30.3295 51.9512 30.3295 50.4593C30.3295 48.9674 29.1187 47.7566 27.6268 47.7566Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M16.816 31.5404H27.6268C29.1187 31.5404 30.3295 30.3296 30.3295 28.8377C30.3295 27.3458 29.1187 26.135 27.6268 26.135H16.816C15.3241 26.135 14.1133 27.3458 14.1133 28.8377C14.1133 30.3296 15.3241 31.5404 16.816 31.5404Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M27.6268 69.3784H16.816C15.3241 69.3784 14.1133 70.5892 14.1133 72.0811C14.1133 73.573 15.3241 74.7838 16.816 74.7838H27.6268C29.1187 74.7838 30.3295 73.573 30.3295 72.0811C30.3295 70.5892 29.1187 69.3784 27.6268 69.3784Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M27.6268 91H16.816C15.3241 91 14.1133 92.2108 14.1133 93.7027C14.1133 95.1946 15.3241 96.4054 16.816 96.4054H27.6268C29.1187 96.4054 30.3295 95.1946 30.3295 93.7027C30.3295 92.2108 29.1187 91 27.6268 91Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M27.6268 112.622H16.816C15.3241 112.622 14.1133 113.832 14.1133 115.324C14.1133 116.816 15.3241 118.027 16.816 118.027H27.6268C29.1187 118.027 30.3295 116.816 30.3295 115.324C30.3295 113.832 29.1187 112.622 27.6268 112.622Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M27.6268 134.243H16.816C15.3241 134.243 14.1133 135.454 14.1133 136.946C14.1133 138.438 15.3241 139.649 16.816 139.649H27.6268C29.1187 139.649 30.3295 138.438 30.3295 136.946C30.3295 135.454 29.1187 134.243 27.6268 134.243Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M27.6268 155.865H16.816C15.3241 155.865 14.1133 157.076 14.1133 158.567C14.1133 160.059 15.3241 161.27 16.816 161.27H27.6268C29.1187 161.27 30.3295 160.059 30.3295 158.567C30.3295 157.076 29.1187 155.865 27.6268 155.865Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M173.572 53.162H184.383C185.875 53.162 187.085 51.9512 187.085 50.4593C187.085 48.9674 185.875 47.7566 184.383 47.7566H173.572C172.08 47.7566 170.869 48.9674 170.869 50.4593C170.869 51.9512 172.08 53.162 173.572 53.162Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M173.572 31.5404H184.383C185.875 31.5404 187.085 30.3296 187.085 28.8377C187.085 27.3458 185.875 26.135 184.383 26.135H173.572C172.08 26.135 170.869 27.3458 170.869 28.8377C170.869 30.3296 172.08 31.5404 173.572 31.5404Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M173.572 74.7838H184.383C185.875 74.7838 187.085 73.573 187.085 72.0811C187.085 70.5892 185.875 69.3784 184.383 69.3784H173.572C172.08 69.3784 170.869 70.5892 170.869 72.0811C170.869 73.573 172.08 74.7838 173.572 74.7838Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M173.572 96.4054H184.383C185.875 96.4054 187.085 95.1946 187.085 93.7027C187.085 92.2108 185.875 91 184.383 91H173.572C172.08 91 170.869 92.2108 170.869 93.7027C170.869 95.1946 172.08 96.4054 173.572 96.4054Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M173.572 118.027H184.383C185.875 118.027 187.085 116.816 187.085 115.324C187.085 113.832 185.875 112.622 184.383 112.622H173.572C172.08 112.622 170.869 113.832 170.869 115.324C170.869 116.816 172.08 118.027 173.572 118.027Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M173.572 139.649H184.383C185.875 139.649 187.085 138.438 187.085 136.946C187.085 135.454 185.875 134.243 184.383 134.243H173.572C172.08 134.243 170.869 135.454 170.869 136.946C170.869 138.438 172.08 139.649 173.572 139.649Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M184.383 155.865H173.572C172.08 155.865 170.869 157.076 170.869 158.567C170.869 160.059 172.08 161.27 173.572 161.27H184.383C185.875 161.27 187.085 160.059 187.085 158.567C187.085 157.076 185.875 155.865 184.383 155.865Z" fill="#009AEC" fill-opacity="0.6"/>
        </g>
        <defs>
        <clipPath id="clip0_1450_228">
        <rect width="200" height="200" fill="white" transform="translate(0.599609)"/>
        </clipPath>
        </defs>
        </svg>`,
        text: {
            eng: [
                "Business videos: promotional videos, video presentations.",
                "Event recording and post-production services.",
                "Animation to enhance visual appeal in videos."
            ],
            rus: [
                "Видео для бизнеса: рекламные ролики, видеопрезентации.",
                "Видеозапись событий и пост-продакшн.",
                "Анимация для усиления визуальной привлекательности видео."
            ]
        },

        prices: [
            {
                nameOfServise: {
                    eng: "Product/Service Promo Video",
                    rus: "Рекламное видео для продукта/услуги"
                },
                cost: 500
            },

            {
                nameOfServise: {
                    eng: "Branding Video (Up to 3 Minutes) ",
                    rus: "Брендовое видео (до 3 минут)"
                },
                cost: 1000
            },

            {
                nameOfServise: {
                    eng: "Social Media Video Content",
                    rus: "Видеоконтент для социальных сетей"
                },
                cost: 300
            },

            {
                nameOfServise: {
                    eng: "Event/Conference Video Coverage",
                    rus: "Видео с мероприятий/конференций"
                },
                cost: 800
            },

            {
                nameOfServise: {
                    eng: "Corporate Training Video",
                    rus: "Обучающее корпоративное видео"
                },
                cost: 600
            },

            {
                nameOfServise: {
                    eng: "Animated Explainer Video",
                    rus: "Анимационное объясняющее видео"
                },
                cost: 1200
            },

            {
                nameOfServise: {
                    eng: "Music Video Production",
                    rus: "Производство музыкального клипа"
                },
                cost: 1500
            },

        ],

        description: {
            eng: [
                "Video production is not just about capturing footage; it’s about telling a compelling story that resonates with your audience and elevates your brand. We create high-quality videos that are tailored to your vision, whether it’s a promotional video, corporate branding, or engaging social media content. From scripting to shooting, editing to post-production, we ensure every detail is perfect, delivering a polished final product that captivates viewers and drives results.",
                "Our video production team goes beyond filming; we ensure your video is optimized for its purpose, whether for social media, websites, or marketing. From concept to final cut, we make sure your message is clear and impactful. We don’t just create videos; we craft stories that engage, captivate, and convert your audience."
            ],
            rus: [
                "Видеопроизводство — это создание увлекательной истории, которая находит отклик у вашей аудитории и усиливает имидж вашего бренда. Мы создаём высококачественные видео, адаптированные под ваше видение — будь то промо-ролик, корпоративное видео или контент для социальных сетей. От написания сценария и съёмки до монтажа и пост-продакшена мы прорабатываем каждую деталь, чтобы представить безупречный конечный продукт, привлекающий внимание зрителей.",
                "Наша команда  делает больше, чем просто съёмку. Мы оптимизируем видео под конкретные цели — будь то социальные сети, веб-сайты или маркетинговые кампании. От идеи до финального ролика мы заботимся о том, чтобы ваше послание было чётким и убедительным. Мы создаём не просто видео, а истории, которые увлекают, очаровывают и преобразуют вашу аудиторию."
            ]
        }
    },

    {
        title: {
            eng: "Support and content",
            rus: "Поддержка и контент"
        },

        svgCode: `<svg width="201" height="200" viewBox="0 0 201 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M99.6992 112.955V51.1818M99.6992 51.1818C99.6992 30.5909 99.6992 10 142.137 10C142.137 30.5909 142.137 51.1818 99.6992 51.1818ZM51.1992 112.955H148.199M136.074 112.955L123.949 161H75.4492L63.3242 112.955M99.6992 78.6364C99.6992 58.0455 99.6992 37.4545 57.2617 37.4545C57.2617 58.0455 57.2617 78.6364 99.6992 78.6364Z" stroke="#009AEC" stroke-opacity="0.6" stroke-width="6"/>
        </svg>`,
        text: {
            eng: [
                "Technical support for websites and apps.",
                "Social media management and content creation.",
                "Content management and promotion of websites and applications (SEO and SMM)."
            ],
            rus: [
                "Техническая поддержка веб-сайтов и приложений.",
                "Управление социальными медиа и создание контента для соцсетей.",
                "Контент-менеджмент и продвижение веб-сайтов и приложений."
            ]
        },

        prices: [
            {
                nameOfServise: {
                    eng: "Content Writing & Copywriting",
                    rus: "Написание контента и копирайтинг"
                },
                cost: 300
            },

            {
                nameOfServise: {
                    eng: "Technical Support for Websites ",
                    rus: "Техническая поддержка сайтов"
                },
                cost: 400
            },

            {
                nameOfServise: {
                    eng: "Content Strategy Development",
                    rus: "Разработка стратегии контента"
                },
                cost: 500
            },

            {
                nameOfServise: {
                    eng: "Website Maintenance & Updates",
                    rus: "Обслуживание и обновление сайтов",
                },
                cost: 350
            },

            {
                nameOfServise: {
                    eng: "SEO Content Optimization",
                    rus: "SEO-оптимизация контента"
                },
                cost: 450
            },

            {
                nameOfServise: {
                    eng: "Blog Management",
                    rus: "Управление блогом"
                },
                cost: 300
            },

            {
                nameOfServise: {
                    eng: "Customer Support via Live Chat",
                    rus: "Поддержка клиентов через онлайн-чат"
                },
                cost: 600
            },

        ],

        description: {
            eng: [
                "Support and content services are essential to keep your business running smoothly online. We offer a range of services, from creating high-quality content to providing technical support, ensuring your website is always up to date and running smoothly. Whether it’s content writing, website maintenance, or customer support, we focus on delivering value and improving the user experience. Our team helps you maintain an engaging online presence while addressing your customers’ needs efficiently.",
                "We don’t just create content; we offer ongoing support to ensure your digital assets function seamlessly. From blog management and content optimization to live chat support, our services are designed to keep your website relevant and engaging. We help you maintain fresh content, perform regular updates, and provide top-notch customer service."
            ],
            rus: [
                "Поддержка и создание контента — это ключ к успешной работе вашего бизнеса в интернете. Мы предлагаем широкий спектр услуг: от создания качественного контента до технической поддержки, обеспечивая актуальность и бесперебойную работу вашего сайта. Мы фокусируемся на создании ценности и улучшении пользовательского опыта. Наша команда помогает вам сохранять активное онлайн-присутствие, эффективно удовлетворяя запросы ваших клиентов.",
                "Мы не просто создаём контент, мы предоставляем постоянную поддержку. Наши услуги, включая управление блогами, SEO-оптимизацию контента и онлайн-чат для клиентов, направлены на то, чтобы ваш сайт оставался актуальным и увлекательным. Мы помогаем вам регулярно обновлять материалы, поддерживать техническую исправность и предоставлять первоклассное обслуживание клиентов."
            ]
        }
    },

    {
        title: {
            eng: "Promotion on social networks",
            rus: "Продвижение в социальных сетях"
        },

        svgCode: `<svg width="201" height="200" viewBox="0 0 201 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100.799 20C59.3757 20 25.7988 53.5769 25.7988 95C25.7988 136.423 59.3757 170 100.799 170C142.222 170 175.799 136.423 175.799 95C175.799 53.5769 142.222 20 100.799 20ZM100.799 158.281C65.8485 158.281 37.5176 129.95 37.5176 95C37.5176 60.0497 65.8485 31.7188 100.799 31.7188C135.749 31.7188 164.08 60.0497 164.08 95C164.08 129.95 135.749 158.281 100.799 158.281Z" fill="#009AEC" fill-opacity="0.6"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M120.574 82.2434H106.078V71.664C106.078 68.4189 109.435 67.6663 111.002 67.6663C112.558 67.6663 120.366 67.6663 120.366 67.6663V53.3892L109.634 53.3333C94.9906 53.3333 91.6488 63.9788 91.6488 70.8046V82.2437H81.0234V96.953H91.6488C91.6488 115.838 91.6488 136.667 91.6488 136.667H106.078C106.078 136.667 106.078 115.625 106.078 96.953H118.336L120.574 82.2434Z" fill="#009AEC" fill-opacity="0.6"/>
        </svg>`,
        text: {
            eng: [
                "Developing promotional strategies for products or services on social platforms.",
                "Targeted advertising setup to increase brand visibility and sales.",
                "Content planning and creation of high-quality visual content (graphics, videos)."
            ],
            rus: [
                "Разработка стратегии продвижения для товаров или услуг в социальных медиа.",
                "Настройка таргетированной рекламы для увеличения продаж.",
                "Создание контент-планов и качественного визуального контента (графика, видео)."
            ]
        },

        prices: [
            {
                nameOfServise: {
                    eng: "Social Media Strategy Development",
                    rus: "Разработка стратегии для социальных сетей"
                },
                cost: 400
            },

            {
                nameOfServise: {
                    eng: "Content Creation & Management ",
                    rus: "Создание и управление контентом"
                },
                cost: 500
            },

            {
                nameOfServise: {
                    eng: "Social Media Ad Campaigns",
                    rus: "Рекламные кампании в социальных сетях"
                },
                cost: 600
            },

            {
                nameOfServise: {
                    eng: "Influencer Marketing",
                    rus: "Маркетинг через инфлюенсеров"
                },
                cost: 700
            },

            {
                nameOfServise: {
                    eng: "Community Management",
                    rus: "Управление сообществом"
                },
                cost: 350
            },

            {
                nameOfServise: {
                    eng: "Social Media Account Setup",
                    rus: "Создание аккаунтов в социальных сетях"
                },
                cost: 300
            },

            {
                nameOfServise: {
                    eng: "Social Media Analytics",
                    rus: "Аналитика социальных сетей"
                },
                cost: 200
            },

        ],

        description: {
            eng: [
                "Social media promotion is about building your online presence to engage your audience, grow your community, and drive traffic. We create strategies to help you stand out, grow your following, and reach your customers. From content management to ad campaigns, we offer a full-service approach to social media marketing. Our team develops campaigns that reflect your brand and connect with your audience.",
                "We go beyond posting content; we monitor performance, engage your community, and optimize for the best results. Whether you want to increase brand awareness, drive sales, or grow your following, our data-driven strategies align with your goals. We don’t just manage your social media; we build a loyal community that supports your brand."
            ],
            rus: [
                "Продвижение в социальных сетях — это создание вашего онлайн-присутствия для вовлечения аудитории, роста сообщества и привлечения трафика. Мы разрабатываем стратегии, которые помогут вам выделиться, увеличить количество подписчиков и достичь своих клиентов. Мы предлагаем комплексный подход к маркетингу в социальных сетях. Наша команда разрабатывает кампании, которые отражают уникальность вашего бренда и находят отклик у вашей аудитории.",
                "Мы отслеживаем результаты и оптимизируем процессы для достижения максимальных результатов. Хотите ли вы повысить узнаваемость бренда, увеличить продажи или расширить аудиторию, наши стратегии помогут вам достичь поставленных целей. Мы не просто управляем вашими социальными сетями — мы строим лояльное сообщество, которое поддерживает ваш бренд."
            ]
        }
    },

    {
        title: {
            eng: "Setting up payment",
            rus: "Настройка оплаты"
        },
        svgCode: `<svg width="201" height="200" viewBox="0 0 201 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M80.1871 36C65.5384 36.3459 51.6061 42.4081 41.368 52.8907C31.13 63.3734 25.3984 77.445 25.3984 92.0978C25.3984 106.751 31.13 120.822 41.368 131.305C51.6061 141.787 65.5384 147.85 80.1871 148.195H82.6894V103.718C82.6894 100.402 85.2229 96.1483 88.5697 96.1483H136.113C136.113 94.3029 136.3 93.0205 136.3 92.0196C136.226 77.1689 130.288 62.9489 119.778 52.4566C109.268 41.9642 95.0379 36.0493 80.1871 36ZM124.978 87.2965H110.527C110.252 75.6471 107.546 64.1836 102.582 53.641C108.661 57.1406 113.846 62.0005 117.731 67.8396C121.617 73.6787 124.097 80.3383 124.978 87.2965ZM73.775 50.4193V87.2965H60.9509C61.9205 69.7181 67.4568 55.8305 73.775 50.4193ZM73.775 96.899V133.745C67.5194 128.334 61.9205 114.509 60.9509 96.899H73.775ZM86.5992 87.2965V50.4193C92.8548 55.8305 98.4849 69.7181 99.4233 87.2965H86.5992ZM57.7605 53.641C52.8819 64.2117 50.1902 75.6594 49.8471 87.2965H35.3026C36.1808 80.3297 38.6669 73.6625 42.5645 67.8216C46.462 61.9806 51.6644 57.1259 57.7605 53.641ZM35.3339 98.4942H49.8784C50.1466 110.107 52.831 121.537 57.7605 132.056C51.685 128.573 46.4985 123.73 42.6077 117.907C38.7168 112.085 36.2272 105.44 35.3339 98.4942Z" fill="#009AEC" fill-opacity="0.6"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M167.579 105.657H99.4856C97.4117 105.657 95.4228 106.481 93.9563 107.947C92.4899 109.414 91.666 111.403 91.666 113.477V151.48C91.666 153.554 92.4899 155.543 93.9563 157.009C95.4228 158.476 97.4117 159.299 99.4856 159.299H167.579C169.652 159.299 171.641 158.476 173.108 157.009C174.574 155.543 175.398 153.554 175.398 151.48V113.477C175.398 111.403 174.574 109.414 173.108 107.947C171.641 106.481 169.652 105.657 167.579 105.657ZM108.65 151.48C108.683 150.28 108.48 149.086 108.052 147.965C107.623 146.844 106.978 145.819 106.153 144.947C105.328 144.076 104.34 143.376 103.244 142.886C102.148 142.397 100.967 142.129 99.7671 142.096H99.5169V122.672C101.937 122.731 104.282 121.83 106.04 120.166C107.799 118.502 108.827 116.209 108.9 113.789V113.57H158.351C158.351 115.963 159.293 118.259 160.973 119.963C162.653 121.666 164.936 122.64 167.328 122.672H167.579V142.221C166.375 142.192 165.177 142.401 164.054 142.835C162.931 143.268 161.905 143.919 161.033 144.75C160.162 145.581 159.463 146.575 158.976 147.676C158.489 148.777 158.224 149.963 158.195 151.167V151.449L108.65 151.48Z" fill="#009AEC" fill-opacity="0.6"/>
        <path d="M133.518 144.943C140.773 144.943 146.655 139.061 146.655 131.806C146.655 124.55 140.773 118.669 133.518 118.669C126.262 118.669 120.381 124.55 120.381 131.806C120.381 139.061 126.262 144.943 133.518 144.943Z" fill="#009AEC" fill-opacity="0.6"/>
        </svg>`,
        text: {
            eng: [
                "Integration with PayPal or Stripe to create and send payment links to clients.",
                "The ability to generate individual payment links for deposits and final payments.",
                "Send automated reminders with personalized payment links."
            ],
            rus: [
                "Интеграция с PayPal или Stripe для создания и отправки клиентам платежных ссылок.",
                "Возможность генерации индивидуальных ссылок на авансовые и окончательные платежи.",
                "Отправляйте автоматические напоминания с персонализированными ссылками для оплаты."
            ]
        },

        prices: [
            {
                nameOfServise: {
                    eng: "Payment Gateway Integration",
                    rus: "Интеграция платёжных систем"
                },
                cost: 500
            },

            {
                nameOfServise: {
                    eng: "E-commerce Payment Setup ",
                    rus: "Настройка платёжной системы магазина"
                },
                cost: 600
            },

            {
                nameOfServise: {
                    eng: "Subscription Payment System Setup",
                    rus: "Настройка системы подписки"
                },
                cost: 700
            },

            {
                nameOfServise: {
                    eng: "Secure Payment Systems Configuration",
                    rus: "Конфигурация безопасности платёжных систем"
                },
                cost: 450
            },

            {
                nameOfServise: {
                    eng: "Payment Gateway Testing & Troubleshooting",
                    rus: "Тестирование платёжных систем"
                },
                cost: 400
            },

            {
                nameOfServise: {
                    eng: "Multi-Currency Payment Setup",
                    rus: "Настройка многовалютных платёжных систем"
                },
                cost: 550
            },

            {
                nameOfServise: {
                    eng: "Payment System Optimization for Speed ",
                    rus: "Оптимизация платёжных систем для скорости",
                },
                cost: 600
            },

        ],

        description: {
            eng: [
                "Setting up payment systems is crucial for ensuring seamless and secure transactions on your website. We help you integrate the right payment gateways, whether for e-commerce stores, subscriptions, or one-time purchases, making sure the process is simple and secure for both you and your customers. Our team configures payment solutions that are tailored to your needs, including multi-currency options and mobile payment integration.",
                "We ensure your payment system is optimized for both speed and security. From testing to troubleshooting, we make sure your payment processes run smoothly, reducing friction and increasing customer satisfaction. With our setup, you can confidently manage payments, knowing your system is reliable and fully secure."
            ],
            rus: [
                "Настройка платёжных систем критична для обеспечения безошибочных и безопасных транзакций на вашем сайте. Мы помогаем интегрировать правильные платёжные шлюзы — будь то для интернет-магазинов, подписок или одноразовых покупок, обеспечивая простой и безопасный процесс как для вас, так и для ваших клиентов. Наша команда настраивает платёжные решения, учитывая ваши потребности, включая многовалютные опции и интеграцию мобильных платёжей.",
                "Мы оптимизируем вашу платёжную систему для скорости и безопасности. От тестирования до устранения неполадок, мы гарантируем, что платёжные процессы работают без сбоев, снижая трение и повышая удовлетворённость клиентов. С нашей настройкой вы можете уверенно управлять платёжными процессами, зная, что ваша система надёжна и полностью защищена."
            ]
        }
    }
];

let selectLang = "eng";
const lang = document.getElementById("language-button-first-section");

const switchLocalization = () => {
    selectLang = selectLang === "eng" ? "rus" : "eng";
    for (let id in localizationWrapper) { // перебираем все айдишники
        const data = localizationWrapper[id]; // пой айди получаю информацию 

        const element = document.getElementById(id); // получаю элемент который нужно по айди заменить 
        element.textContent = data[selectLang]; //   обновляю текст

        if (selectLang === "rus") { // добавляем стили к русскому тексту 
            const allStyles = data.styles;
            element.style.fontFamily = "'Lato'";
            for (let style in allStyles) {
                const valueStyle = allStyles[style];
                element.style[style] = valueStyle; // придумать как сбрасывать стили для ангийского языка
            }
        }
    }

    animationIsGone = false;
}

lang.addEventListener('click', () => {
    switchLocalization();
})


const massiv = [1, 2, 3, 4, 5];
let activNumber = 0;

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
    }, 300);

    arrayCard[number - 1].appendChild(svgElement);

    currentCard.textBlock.textContent = currentServise.title;

};

const firstParagraph = document.getElementById("third-section-main-content-right-part-paragraph-1");
const secondParagraph = document.getElementById("third-section-main-content-right-part-paragraph-2");
const thirdParagraph = document.getElementById("third-section-main-content-right-part-paragraph-3");
const imgBlock = document.getElementById("third-section-creative-design-img");
const title = document.getElementById("third-section-main-content-right-part-title");

const upLoadActivServise = () => {
    const data = arrayDataOfService[activNumber];
    imgBlock.src = `/img/svg/third-section-lower-part ${data.title}.svg`;
    firstParagraph.textContent = data.text[0];
    secondParagraph.textContent = data.text[1];
    thirdParagraph.textContent = data.text[2];
    title.textContent = data.title;
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
        }, 300);
        setActivElement(index);
    });
};

const firstUploadCard = () => {
    for (let index = 1; index < arrayDataOfService.length; index++) {
        customization(index);
    }
}

firstUploadCard();

const fourthSectionChoiceOfService = document.getElementById("choice-of-service");
const fourthSectionChoiceOfServiceArrow = document.getElementById("choice-of-service-arrow");

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
let activAnimationThirdSection = false;
const secondSectionTitleEng = document.getElementById("second-section-title-eng");
const secondSectionTitleRus = document.getElementById("second-section-title-rus");

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
                secondSectionButtonServices.style.opacity = "1";
                secondSectionButtonContacts.style.opacity = "1";
            }, 200);
        };

    } else if (scrollY > width * 1.125 && scrollY < width * 1.965 && !activAnimationThirdSection) {
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

let selectCategory = "";

const buttonMoreBlock = document.getElementById("button-more-block");
const buttonMoreTitle = document.getElementById("button-more-title");
const modalNotificationBlock = document.getElementById("modal-notification-block");
let showNotification = true;


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
        thirdSectionImage.style.transform = "rotate3d(0, 1, 0, 0deg)";
        thirdSectionImage.style.width = "28.125vw";
        thirdSectionImage.style.height = "28.125vw";
        thirdSectionImage.style.boxShadow = "0px 0px 8px 0px rgba(2, 133, 204, 0)";
        thirdSectionMainContentRightPartLine.style.height = "70.57292vw";
        thirdSectionMainContentRightPartLine.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 154, 236, 0) 0%, rgba(0, 154, 236, 0.3) 25%, rgba(0, 87, 134, 0) 100%)";
        thirdSectionMainContentRightPartLine.style.top = "-10vw";
        let selCat = arrayDataOfService.map((service) => service.title)[activNumber];
        const category = arrayDataOfService[activNumber]
        if (selCat !== selectCategory && arrayDataOfService.map((service) => service.title).includes(selCat)) {
            buttonMoreTitle.textContent = selCat;
        }

        category.prices.map((serviceData, number) => {
            const { nameOfServise, cost } = serviceData;
            const priceName = document.getElementById(`button-more-price-services-${number}`);
            const priceMoney = document.getElementById(`button-more-price-money-${number}`);
            priceName.textContent = nameOfServise;
            priceMoney.textContent = `£${cost}`;
        })

        category.description.map((selfText, number) => {
            const textBlock = document.getElementById(`button-more-description-text-${number}`);
            textBlock.textContent = selfText;
        })
    }, 1);
})

const buttonMoreTitleSvgBlock = document.getElementById("button-more-title-svg-block");
let activAnmimationTitle = true;

buttonMoreTitleSvgBlock.addEventListener('click', () => {
    if (activAnmimationTitle) {
        setTimeout(() => {
            buttonMoreTitle.style.opacity = "0";
            setTimeout(() => {
                buttonMoreTitle.textContent = "What Interests You?";
                setTimeout(() => {
                    buttonMoreTitle.style.opacity = "";
                }, 300);
            }, 300);
        }, 1);
        activAnmimationTitle = false;

        const category = arrayDataOfService[activNumber]
        const titleOfServise = document.getElementById(`interest-block-text-${activNumber}`);
        titleOfServise.textContent = category.title;
    }
});

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
    if (inputFirstName.value.length && inputLastName.value.length && inputPhone.value.length && inputEmail.value.length && isValidEmail(inputEmail.value) && selectCategory) {
        submitButtonFourthSection.className = "send-form-submit-activ";
    }
}

fourthSectionChoiceOfService.addEventListener('click', (event) => {
    event.stopPropagation();
    const newDropListWrapper = document.createElement('div');
    newDropListWrapper.id = "drop-list";
    dropListWrapper.style.height = "17.5vw"
    const actualityCategory = arrayDataOfService.map((service) => service.title).filter((textCategory) => {
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

let numberOfService = 0;
const textarea = document.getElementById("textarea");

const textForApplication = [
    "",
    "Hello, I want to get advice on the chosen service",
    "Hello, I want to get an answer to the question:",
    "Hello, I have used this service and I want to leave a review:"
]

const setupAndTranslateForSelectService = (event) => {
    event.preventDefault();
    window.scrollTo({
        top: window.innerWidth * 1.950625,
        behavior: 'smooth'
    });

    textarea.textContent = textForApplication[numberOfService];
    let selCat = arrayDataOfService.map((service) => service.title)[activNumber];

    if (selCat !== selectCategory && arrayDataOfService.map((service) => service.title).includes(selCat)) {
        choiceOfServicePlaceholder.textContent = selCat;
        fourthSectionChoiceOfServiceArrow.style.rotate = "0deg";
        fourthSectionChoiceOfService.style.borderBottomColor = "rgba(2, 133, 204, 1)";
        choiceOfServicePlaceholder.style.color = "var(--blue)";
        selectCategory = selCat;
        allInputsHave();
    }
}


for (let index = 0; index < textForApplication.length; index++) {
    const button = document.getElementById(`button-more-lower-part-buttons-${index}`);
    button.addEventListener('click', (event) => {
        event.preventDefault();
        numberOfService = index;
        setupAndTranslateForSelectService(event);
    })
}

thirdSectionButtonOrder.addEventListener('click', setupAndTranslateForSelectService);

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
const buttonWrapper = document.getElementById("button-wrapper");



const voidInput = () => {
    submitButtonFourthSection.className = " ";
}


submitButtonFourthSection.addEventListener('mouseenter', () => {
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

const reviews = [
    {
        top: {
            title: "Dmitry Malyukin",
            upperText: "In 2022, our project scaled up. We turned to the team at Ikigai Creative to update our brand identity. Time, as it turned out, has proven the success of the innovations they introduced. Working with this agency has been a real pleasure. My colleagues and I quickly decided to continue a long-term collaboration, which is still ongoing to this day.",
            lowerText: "I can recommend this organization for their high-quality and diligent work over many years."
        },

        bottom: {
            title: "Mikhail Potapenko",
            upperText: "When my team decided to update our website for our volunteer project, I didn’t expect it to turn out this great! The team really understood our vision and added some brilliant ideas we hadn’t thought of. Everything was done quickly and with great attention to detail. Now, our website not only works but inspires more people to get involved.",
            lowerText: "My admiration and respect."
        }
    },

    {
        top: {
            title: "Diana Belousova",
            upperText: "Our motorwheel enthusiasts' company wanted to promote our movement in Moscow. We approached this company for website design, development, and promotion. They took the project very seriously and quickly delivered not only an excellent mockup but also the website itself! Ikigai also helped us manage content for our groups—writing posts, shooting videos! As clients, we didn’t have to handle any unnecessary tasks—they took care of everything.",
            lowerText: "I highly recommend them as partners!"
        },

        bottom: {
            title: "Andrey Skugarov",
            upperText: "As a guy who knows how to enjoy the good things in life, I never expected our project to turn out this well. I reached out for a video production project, and they didn’t just meet my expectations—they exceeded them. From the start, they understood my vision, and the results were outstanding. The video captured our brand perfectly, with every detail in place. They didn’t just shoot and edit—they brought our vision to life in ways I hadn’t imagined.",
            lowerText: "Respect to this team for their amazing work!"
        }
    },

    {
        top: {
            title: "Sofia Pomina",
            upperText: "When my international orders started increasing, I knew I needed a more efficient and reliable way to manage payments. I reached out to this team, and they quickly set up a secure and user-friendly payment system that fits my needs perfectly. Now, the process is seamless, and I don’t have to worry about complicated transactions anymore, giving me more time to focus on growing my business.",
            lowerText: "Highly recommend them for reliable payment solutions!"
        },

        bottom: {
            title: "Yulia Biryukova",
            upperText: "As a dancer who’s always looking to stand out, I never expected my social media to blow up like it did. I reached out to this team for social media promotion, and they didn’t just deliver—they totally elevated my online presence. From the start, they understood my vibe and nailed it. My content has never looked better, and the engagement is off the charts. They didn’t just manage my posts—they made my brand shine in ways I never thought possible.",
            lowerText: "Can’t thank them enough for helping me level up!"
        }
    }
]

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
            reviewsUpperName.textContent = data.top.title;
            reviewsUpperImg.src = `/img/png/reviews-img-${data.top.title}.png`;
            reviewsUpperUpperText.textContent = data.top.upperText;
            reviewsUpperLowerText.textContent = data.top.lowerText;
            reviewsLowerName.textContent = data.bottom.title;
            reviewsLowerImg.src = `/img/png/reviews-img-${data.bottom.title}.png`;
            reviewsLowerUpperText.textContent = data.bottom.upperText;
            reviewsLowerLowerText.textContent = data.bottom.lowerText;
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

headerNavInfo.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 0.563,
        behavior: 'smooth'
    });
})

headerNavServices.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 1.13,
        behavior: 'smooth'
    });
})

headerNavContacts.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 1.97,
        behavior: 'smooth'
    });
})

headerNavReviews.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 2.528,
        behavior: 'smooth'
    });
})

secondHeaderNavMain.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * -0.1,
        behavior: 'smooth'
    });
})

secondHeaderNavInfo.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 0.563,
        behavior: 'smooth'
    });
})


secondHeaderNavServices.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 1.13,
        behavior: 'smooth'
    });
})

secondHeaderNavContacts.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 1.97,
        behavior: 'smooth'
    });
})

secondHeaderNavReviews.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerWidth * 2.528,
        behavior: 'smooth'
    });
})

secondHeaderLanguageButton.addEventListener('click', () => {
    switchLocalization()
})
