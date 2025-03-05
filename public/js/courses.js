const coursesData = [
    {
        title: {
            rus: "Веб-разработка",
            eng: "Web Development"
        },
        descriptionUp: {
            rus: "Научитесь создавать современные веб-сайты и веб-приложения. Получите практический опыт в реальных проектах, получите экспертное наставничество и создайте портфолио, которое даст старт вашей карьере в ИТ!",
            eng: "Learn to build modern websites and web applications with HTML, CSS, JavaScript, React, API integration, and databases. Gain hands-on experience through real projects, get expert mentorship, and create a portfolio that kickstarts your career in IT!"
        },
        descriptionDown: {
            rus: "Начните свой путь веб-разработчика уже сегодня!",
            eng: "Start your journey as a web developer today!"
        },
        svgCode: `<svg id="course-img-top" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M66.668 41.667H29.168V50.0003H66.668V41.667Z" fill="var(--svgColor)" />
                        <path d="M95.8333 41.667H75V50.0003H95.8333V41.667Z" fill="var(--svgColor)" />
                        <path d="M66.668 104.167H29.168V112.5H66.668V104.167Z" fill="var(--svgColor)" />
                        <path d="M95.8333 104.167H75V112.5H95.8333V104.167Z" fill="var(--svgColor)" />
                        <path d="M54.168 83.333H29.168V91.6663H54.168V83.333Z" fill="var(--svgColor)" />
                        <path d="M133.332 83.333H120.832V91.6663H133.332V83.333Z" fill="var(--svgColor)" />
                        <path d="M112.5 83.333H62.5V91.6663H112.5V83.333Z" fill="var(--svgColor)" />
                        <path d="M99.9987 62.5H83.332V70.8333H99.9987V62.5Z" fill="var(--svgColor)" />
                        <path d="M75.0013 62.5H29.168V70.8333H75.0013V62.5Z" fill="var(--svgColor)" />
                        <path d="M170.832 62.5H108.332V70.8333H170.832V62.5Z" fill="var(--svgColor)" />
                        <path d="M91.668 125H29.168V133.333H91.668V125Z" fill="var(--svgColor)" />
                        <path
                            d="M159.197 99.1377L153.305 105.03L164.942 116.667L153.305 128.304L159.197 134.196L176.726 116.667L159.197 99.1377Z"
                            fill="var(--svgColor)" />
                        <path
                            d="M125.863 105.03L119.971 99.1377L102.441 116.667L119.971 134.196L125.863 128.304L114.225 116.667L125.863 105.03Z"
                            fill="var(--svgColor)" />
                        <path d="M144.04 94.3264L127.387 135.997L135.125 139.09L151.778 97.4189L144.04 94.3264Z"
                            fill="var(--svgColor)" />
                        <path
                            d="M191.667 145.833V20.833H8.33333V145.833H0V163.761L10.2702 179.166H189.73L200 163.761V145.833H191.667ZM16.6667 29.1663H183.333V145.833H16.6667V29.1663ZM191.667 161.238L185.27 170.833H14.7298L8.33333 161.238V154.166H191.667V161.238Z"
                            fill="var(--svgColor)" />
                        <path d="M120.833 158.333H112.5V166.666H120.833V158.333Z" fill="var(--svgColor)" />
                        <path d="M104.165 158.333H95.832V166.666H104.165V158.333Z" fill="var(--svgColor)" />
                        <path d="M87.5013 158.333H79.168V166.666H87.5013V158.333Z" fill="var(--svgColor)" />
                    </svg>`,
        cost: 20000,
        popularity: 300,
        MMR: 4.8,
        releasesData: "05.03.2025",
        isProfession: false,
        who: {
            rus: [

            ],
            eng: [

            ]
        },
        whatNeed: {
            rus: [

            ],
            eng: [

            ]
        },
        fullText: {
            rus: ,
            eng: 
        },
        time: {
            rus: ,
            eng: 
        },
        amountLessons: 20,
        freeLesson: 
    },
    {
        title: {
            rus: "Git",
            eng: "Master Git"
        },
        descriptionUp: {
            rus: "Изучите Git с самых азов до продвинутых рабочих процессов. Практические упражнения, реальные сценарии и лучшие практики помогут вам усовершенствовать свои навыки разработки.",
            eng: "Learn version control like a pro! Understand Git from the basics to advanced workflows, collaborate efficiently with GitHub, and confidently manage your projects. Hands-on exercises, real-world scenarios, and best practices to boost your development skills."
        },
        descriptionDown: {
            rus: "Начните осваивать Git уже сегодня и оптимизируйте свой рабочий процесс!",
            eng: "Start mastering Git today and streamline your coding workflow!"
        },
        svgCode: `<svg id="course-img-bottom" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_5814_410)">
                         <path
                            d="M187.5 70.0001L130 12.5001C122.366 4.98363 112.176 0.627206 101.468 0.302721C90.7597 -0.021764 80.3242 3.70963 72.2496 10.7501L95.7496 34.2501C98.1302 33.4004 100.681 33.1409 103.184 33.4939C105.687 33.8469 108.067 34.8019 110.12 36.2769C112.173 37.7519 113.837 39.7029 114.97 41.9625C116.103 44.2221 116.671 46.7228 116.625 49.2501V50.0001C116.545 51.6264 116.207 53.2297 115.625 54.7501L146.25 84.7501C147.727 84.1679 149.289 83.8302 150.875 83.7501C154.089 83.7501 157.23 84.7032 159.903 86.4887C162.575 88.2743 164.658 90.8122 165.888 93.7815C167.118 96.7508 167.439 100.018 166.812 103.17C166.185 106.323 164.638 109.218 162.365 111.491C160.092 113.763 157.197 115.311 154.045 115.938C150.893 116.565 147.625 116.243 144.656 115.013C141.687 113.783 139.149 111.7 137.363 109.028C135.578 106.356 134.625 103.214 134.625 100C134.705 98.4144 135.042 96.8523 135.625 95.3751L107.5 67.2501V132.625C110.219 133.919 112.519 135.955 114.133 138.498C115.747 141.041 116.611 143.988 116.625 147C116.625 151.31 114.913 155.443 111.865 158.491C108.818 161.538 104.684 163.25 100.375 163.25C96.0648 163.25 91.9316 161.538 88.8841 158.491C85.8367 155.443 84.1246 151.31 84.1246 147C84.1456 144.148 84.9344 141.355 86.4081 138.913C87.8819 136.472 89.9861 134.472 92.4996 133.125V63.3751C90.0587 62.0694 88.0016 60.1482 86.5325 57.802C85.0633 55.4558 84.2333 52.7662 84.1246 50.0001C84.2047 48.4144 84.5424 46.8523 85.1246 45.3751L61.3746 21.6251L12.4996 70.0001C8.55765 73.9257 5.42976 78.5911 3.29547 83.7286C1.16118 88.866 0.0625 94.3744 0.0625 99.9376C0.0625 105.501 1.16118 111.009 3.29547 116.147C5.42976 121.284 8.55765 125.95 12.4996 129.875L69.9996 187.5C73.9251 191.442 78.5906 194.57 83.728 196.704C88.8655 198.839 94.3739 199.937 99.9371 199.937C105.5 199.937 111.009 198.839 116.146 196.704C121.284 194.57 125.949 191.442 129.875 187.5L187.5 130C191.442 126.075 194.569 121.409 196.704 116.272C198.838 111.134 199.937 105.626 199.937 100.063C199.937 94.4995 198.838 88.991 196.704 83.8536C194.569 78.7161 191.442 74.0507 187.5 70.1251V70.0001Z"
                            fill="var(--svgColor)" />
                    </g>
                        <defs>
                            <clipPath id="clip0_5814_410">
                                <rect width="200" height="200" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
`,
        cost: 20000,
        popularity: 300,
        MMR: 4.8,
        releasesData: "05.03.2025",
        isProfession: false,
        who: {
            rus: [

            ],
            eng: [

            ]
        },
        whatNeed: {
            rus: [

            ],
            eng: [

            ]
        },
        fullText: {
            rus: ,
            eng: 
        },
        time: {
            rus: ,
            eng: 
        },
        amountLessons: 10,
        freeLesson: 
    },
]

export default coursesData;