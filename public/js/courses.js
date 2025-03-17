const coursesData = [
    {
        title: {
            rus: "Веб-разработка",
            eng: "Web Development"
        },
        complexity: 2,
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
        isProfession: true,
        who: {
            subtitles: {
                rus: ["Начинающим разработчикам",
                    "Тем, кто хочет сменить профессию",
                    "Дизайнерам и креативщикам",
                    "Студентам и IT-специалистам"
                ],
                eng: [
                    "Beginning developers",
                    "Those looking for a career change",
                    "Designers and creatives",
                    "Students and IT professionals"
                ]
            },
            whoText: {
                rus: ["Если вы никогда не работали с программированием, этот курс даст прочную основу для старта в мире веб-разработки.",
                    "Если вы ищете новые карьерные возможности и готовы учиться, курс поможет освоить востребованные навыки.",
                    "Если вы уже занимаетесь дизайном, дополните его знаниями в области front-end и back-end разработки для создания более комплексных проектов",
                    "Даже если вы уже работаете в IT, курс поможет углубить знания и освоить новые инструменты и технологии веб-разработки."
                ],
                eng: [
                    "If you've never worked with programming, this course will give you a solid foundation to get started in the world of web development.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "If you're already involved in design, supplement it with knowledge of front-end and back-end development to create more complex projects.",
                    "Even if you already work in IT, the course will help you deepen your knowledge and learn new web development tools and technologies."
                ]
            }
        },
        whatNeed: {
            subtitles: {
                rus: ["",
                    "Внимательность",
                    "Желание учиться",
                    "Базовое владение компьютером"
                ],
                eng: [
                    "",
                    "Attentiveness",
                    "Willingness to learn",
                    "Basic computer skills"
                ]
            },
            whatNeedText: {
                rus: ["Этот курс предназначен для начинающих и не требует большого опыта. Вам понадобятся только базовые навыки, которые будут полезны в процессе обучения.",
                    "Важно быть внимательным при изучении новых понятий, следить за шагами и не пропускать важные детали. Это поможет усвоить материал быстрее и избежать ошибок.",
                    "Стремление развиваться и осваивать новое — ключевой аспект успешного обучения. Важно быть готовым к трудностям, задавать вопросы и искать решения, если что-то непонятно.",
                    "Знание основных функций компьютера: работа с файловой системой, использование браузера, установка программ и работа с текстовыми редакторами."
                ],
                eng: [
                    "This course is designed for beginners and does not require much experience. You will only need basic skills that will be useful in the learning process:",
                    "The desire to develop and learn new things is a key aspect of successful learning. It is important to be prepared for difficulties, ask questions and seek solutions when things are not clear.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "Knowledge of basic computer functions: working with the file system, using a browser, installing programmes and working with word processors."
                ]
            }
        },
        fullText: {
            rus: ["Хотите начать карьеру в сфере технологий, создавать современные веб-сайты и функциональные веб-приложения? Наш комплексный курс веб-разработки поможет вам пройти путь от новичка до опытного разработчика. Вы научитесь писать чистый, структурированный код на HTML, CSS и JavaScript, создавать адаптивные и интерактивные веб-сайты и работать с современными фреймворками для создания динамических приложений.",
                "Курс также охватывает внутреннюю разработку, включая работу с базами данных, API и серверное программирование для создания полноценных веб-приложений. Благодаря практическим проектам, реальным примерам и опытному наставничеству вы приобретете практический опыт и создадите портфолио, которое продемонстрирует ваши навыки потенциальным работодателям или клиентам.",
                "Независимо от того, хотите ли вы начать новую карьеру, продвинуться на своей нынешней должности или запустить собственные проекты, этот курс даст вам все необходимое для достижения успеха. К концу программы вы обретете уверенность и опыт, необходимые для работы веб-разработчиком, будь то фрилансер, в стартапе или в ведущей технологической компании."

            ],
            eng: [
                "Want to start a career in tech, build modern websites, and create functional web applications? Our comprehensive web development course will take you from a complete beginner to a skilled developer. You’ll learn to write clean, structured code in HTML, CSS, and JavaScript, create responsive and interactive websites, and work with modern frameworks to build dynamic applications.",
                "The course also covers back-end development, including working with databases, APIs, and server-side programming to create full-fledged web applications. Through hands-on projects, real-world examples, and expert mentorship, you’ll gain practical experience and build a portfolio that showcases your skills to potential employers or clients.",
                "Whether you want to start a new career, advance in your current role, or launch your own projects, this course gives you everything you need to succeed. By the end of the program, you’ll have the confidence and expertise to work as a web developer, whether as a freelancer, in a startup, or within a leading tech company."]
        },
        time: {
            rus: "20-30 часов",
            eng: "20-30 hours"
        },
        label: {
            rus: ["IT",
                "Востребованный",
                "Легкий старт"
            ],
            eng: [
                "IT",
                "In demand",
                "Easy start"
            ]
        },
        amountLessons: 20,
        freeLesson: "ссылка на урок",
        planOfLessons: {
            rus: [
                {
                    duration: "5 недель",
                    title: "Основы веб-верстки: HTML и CSS"
                },
                {
                    duration: "4 недели",
                    title: "Базовый JavaScript: работа с DOM и событиями"
                },
                {
                    duration: "10 недель",
                    title: "Фронтенд-разработка: современные инструменты"
                },
                {
                    duration: "9 недель",
                    title: "Работа с API: взаимодействие фронтенда и бэкенда"
                },
                {
                    duration: "4 недели",
                    title: "Управление проектом на удалённом сервере"
                },

            ],
            eng: [
                {
                    duration: "5 weeks",
                    title: "Web layout basics: HTML and CSS"
                },
                {
                    duration: "4 weeks",
                    title: "Basic JavaScript: working with DOM and events"
                },
                {
                    duration: "10 weeks",
                    title: "Frontend development: modern tools and frameworks"
                },
                {
                    duration: "9 weeks",
                    title: "Working with API: frontend and backend interaction"
                },
                {
                    duration: "4 weeks",
                    title: "Project management on a remote server"
                },

            ]
        }
    },
    {
        title: {
            rus: "Git",
            eng: "Master Git"
        },
        complexity: 2,
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
                    </svg>`,
        cost: 20000,
        popularity: 300,
        MMR: 4.8,
        releasesData: "05.03.2025",
        isProfession: false,
        who: {
            subtitles: {
                rus: ["Начинающим разработчикам",
                    "Тем, кто хочет сменить профессию",
                    "Дизайнерам и креативщикам",
                    "Студентам и IT-специалистам"
                ],
                eng: [
                    "Beginning developers",
                    "Those looking for a career change",
                    "Designers and creatives",
                    "Students and IT professionals"
                ]
            },
            whoText: {
                rus: ["Если вы никогда не работали с программированием, этот курс даст прочную основу для старта в мире веб-разработки.",
                    "Если вы ищете новые карьерные возможности и готовы учиться, курс поможет освоить востребованные навыки.",
                    "Если вы уже занимаетесь дизайном, дополните его знаниями в области front-end и back-end разработки для создания более комплексных проектов",
                    "Даже если вы уже работаете в IT, курс поможет углубить знания и освоить новые инструменты и технологии веб-разработки."
                ],
                eng: [
                    "If you've never worked with programming, this course will give you a solid foundation to get started in the world of web development.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "If you're already involved in design, supplement it with knowledge of front-end and back-end development to create more complex projects.",
                    "Even if you already work in IT, the course will help you deepen your knowledge and learn new web development tools and technologies."
                ]
            }
        },

        whatNeed: {
            subtitles: {
                rus: ["",
                    "Внимательность",
                    "Желание учиться",
                    "Базовое владение компьютером"
                ],
                eng: [
                    "",
                    "Attentiveness",
                    "Willingness to learn",
                    "Basic computer skills"
                ]
            },
            whatNeedText: {
                rus: ["Этот курс предназначен для начинающих и не требует большого опыта. Вам понадобятся только базовые навыки, которые будут полезны в процессе обучения.",
                    "Важно быть внимательным при изучении новых понятий, следить за шагами и не пропускать важные детали. Это поможет усвоить материал быстрее и избежать ошибок.",
                    "Стремление развиваться и осваивать новое — ключевой аспект успешного обучения. Важно быть готовым к трудностям, задавать вопросы и искать решения, если что-то непонятно.",
                    "Знание основных функций компьютера: работа с файловой системой, использование браузера, установка программ и работа с текстовыми редакторами."
                ],
                eng: [
                    "This course is designed for beginners and does not require much experience. You will only need basic skills that will be useful in the learning process:",
                    "The desire to develop and learn new things is a key aspect of successful learning. It is important to be prepared for difficulties, ask questions and seek solutions when things are not clear.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "Knowledge of basic computer functions: working with the file system, using a browser, installing programmes and working with word processors."
                ]
            }
        },
        fullText: {
            rus: [
                "Освойте Git — один из самых востребованных инструментов контроля версий, который используется разработчиками по всему миру. Вы научитесь работать с локальными и удаленными репозиториями, создавать коммиты, ветки и мержи, а также разбирать конфликтные ситуации.",
                "Курс включает в себя работу с GitHub, GitFlow и CI/CD процессами, что поможет вам эффективно управлять проектами, взаимодействовать в команде и автоматизировать развертывание кода.",
                "К концу курса вы получите практический опыт работы с Git и GitHub, научитесь организовывать свой код, оптимизировать рабочие процессы и уверенно использовать Git в реальных проектах."
            ],
            eng: [
                "Master Git — one of the most in-demand version control tools used by developers worldwide. You'll learn how to work with local and remote repositories, create commits, branches, and merges, and resolve conflicts effectively.",
                "The course covers GitHub, GitFlow, and CI/CD processes, helping you manage projects efficiently, collaborate in teams, and automate deployments.",
                "By the end of the course, you'll have hands-on experience with Git and GitHub, learn how to structure your code, optimize workflows, and confidently use Git in real-world projects."
            ]
        },
        time: {
            rus: "15-20 часов",
            eng: "15-20 hours"
        },
        amountLessons: 10,
        label: {
            rus: ["IT",
                "Востребованный",
                "Легкий старт"
            ],
            eng: [
                "IT",
                "In demand",
                "Easy start"
            ]
        },
        freeLesson: "ссылка на урок",
        planOfLessons: {
            rus: [
                {
                    duration: "5 недель",
                    title: "Основы веб-верстки: HTML и CSS"
                },
                {
                    duration: "4 недели",
                    title: "Базовый JavaScript: работа с DOM и событиями"
                },
                {
                    duration: "10 недель",
                    title: "Фронтенд-разработка: современные инструменты"
                },
                {
                    duration: "9 недель",
                    title: "Работа с API: взаимодействие фронтенда и бэкенда"
                },
                {
                    duration: "4 недели",
                    title: "Управление проектом на удалённом сервере"
                },

            ],
            eng: [
                {
                    duration: "5 weeks",
                    title: "Web layout basics: HTML and CSS"
                },
                {
                    duration: "4 weeks",
                    title: "Basic JavaScript: working with DOM and events"
                },
                {
                    duration: "10 weeks",
                    title: "Frontend development: modern tools and frameworks"
                },
                {
                    duration: "9 weeks",
                    title: "Working with API: frontend and backend interaction"
                },
                {
                    duration: "4 weeks",
                    title: "Project management on a remote server"
                },

            ]
        }
    },

    {
        title: {
            rus: "Шахматы",
            eng: "Chess"
        },
        complexity: 4,
        descriptionUp: {
            rus: "Научитесь играть в шахматы с нуля, освоите стратегии, тактику и дебюты, улучшите свою игру с помощью практических упражнений и экспертного наставничества. Независимо от вашего уровня — новичок или будущий участник турниров — этот курс поможет вам глубже понять шахматы и отточить свои навыки!",
            eng: "Learn to play chess from the ground up, master strategies, tactics, and openings, and improve your game through practical exercises and expert coaching. Whether you're a complete beginner or an aspiring tournament player, this course will help you develop a deep understanding of chess and refine your skills!"
        },
        descriptionDown: {
            rus: "Станьте уверенным игроком в шахматы!",
            eng: "Become a confident chess player!"
        },
        svgCode: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M47.5336 16.165H52.4691C52.4691 16.165 52.1328 12.4559 52.1328 10.3396C54.2455 10.3396 58.2129 10.9426 58.2129 10.9426V5.47539C58.2129 5.47539 54.2453 6.08008 52.1328 6.08008C52.1328 3.96562 52.734 0 52.734 0H47.2684C47.2684 0 47.873 3.96562 47.873 6.08008C45.7568 6.08008 41.793 5.47715 41.793 5.47715V10.9443C41.793 10.9443 45.757 10.3396 47.873 10.3396C47.873 12.4559 47.5336 16.165 47.5336 16.165Z"
        fill="var(--svgColor)" />
    <path
        d="M39.6133 44.3416H60.3877C60.3877 44.3416 64.0529 34.1311 65.2758 28.8695C65.6935 27.0641 64.0529 24.8477 61.3015 24.8477C58.5537 24.8477 50.0008 24.8477 50.0008 24.8477C50.0008 24.8477 41.4445 24.8477 38.6965 24.8477C35.9453 24.8477 34.3045 27.0641 34.7258 28.8695C35.9449 34.1311 39.6133 44.3416 39.6133 44.3416Z"
        fill="var(--svgColor)" />
    <path
        d="M64.6997 73.2592C59.4212 64.8607 58.9659 56.4199 58.9659 56.4199H41.0345C41.0345 56.4199 40.5794 64.8607 35.3042 73.2592C31.955 78.5836 27.2234 80.0629 27.5427 85.71C27.6888 88.3254 30.2023 88.8537 30.2023 88.8537H69.7982C69.7982 88.8537 72.3152 88.3256 72.4612 85.71C72.7773 80.0629 68.0454 78.5836 64.6997 73.2592Z"
        fill="var(--svgColor)" />
    <path
        d="M60.8192 47.1016H39.1821C39.1821 48.7406 37.6026 49.9123 36.0264 50.8482C34.4469 51.7857 34.8411 53.659 36.0264 53.659H63.9748C65.1569 53.659 65.551 51.7855 63.9748 50.8482C62.3952 49.9123 60.8192 48.7406 60.8192 47.1016Z"
        fill="var(--svgColor)" />
    <path d="M56.2109 18.9258H43.7891V22.0865H56.2109V18.9258Z" fill="var(--svgColor)" />
    <path d="M30.2021 91.6152L28.0352 95.2684V100H71.9686V95.2684L69.798 91.6152H30.2021Z" fill="var(--svgColor)" />
</svg>`,
        cost: 15000,
        popularity: 270,
        MMR: 4.6,
        releasesData: "10.06.2025",
        isProfession: false,
        who: {
            subtitles: {
                rus: ["Начинающим и любителям",
                    "Тем, кто хочет развивать мышление",
                    "Любителям стратегий и решения задач",
                    "Студентам и профессионалам"
                ],
                eng: [
                    "Beginners and casual players",
                    "Those looking to sharpen their minds",
                    "Strategy enthusiasts and problem solvers",
                    "Students and professionals"
                ]
            },
            whoText: {
                rus: ["Если вы никогда не играли в шахматы, этот курс даст вам прочную базу, чтобы понять игру и начать побеждать.",
                    "Если вы хотите развить стратегическое мышление и навыки принятия решений, шахматы — идеальное упражнение для ума.",
                    "Если вам нравится решать сложные задачи, изучение шахмат станет для вас увлекательным вызовом.",
                    "Даже если вы уже играете в шахматы, этот курс поможет вам улучшить технику, освоить продвинутые стратегии и повысить рейтинг."
                ],
                eng: [
                    "If you've never played chess before, this course will give you a strong foundation to understand the game and start winning.",
                    "If you're looking to enhance your strategic thinking and decision-making skills, chess is the perfect mental exercise.",
                    "If you love solving complex problems, learning chess will challenge your mind and improve your analytical skills.",
                    "Even if you already play chess, this course will help you refine your techniques, explore advanced strategies, and increase your rating."
                ]
            }
        },

        whatNeed: {
            subtitles: {
                rus: ["",
                    "Терпение и концентрация",
                    "Желание учиться",
                    "Базовые знания правил шахмат (необязательно)"
                ],
                eng: [
                    "",
                    "Patience and concentration",
                    "Willingness to learn",
                    "Basic knowledge of chess rules (optional)"
                ]
            },
            whatNeedText: {
                rus: ["Этот курс подходит для игроков любого уровня — от абсолютных новичков до тех, кто хочет улучшить свои шахматные навыки.",
                    "Терпение и внимание к деталям — ключ к успешному обучению шахматам. Важно учиться анализировать ходы и думать наперед.",
                    "Стремление развиваться и совершенствоваться необходимо. Шахматы требуют практики, стратегического мышления и умения учиться на ошибках.",
                    "Знание базовых правил шахмат будет полезным, но не обязательным. Мы подробно разберем все шаг за шагом."
                ],
                eng: [
                    "This course is designed for players of all levels, from absolute beginners to those looking to improve their chess skills.",
                    "Patience and focus are key to learning chess effectively. Paying attention to details and thinking ahead will help you succeed.",
                    "A passion for learning and improving is essential. Chess requires practice, strategic thinking, and the ability to learn from mistakes.",
                    "Familiarity with the basic rules of chess is helpful but not required. We will guide you through everything step by step."
                ]
            }
        },
        fullText: {
            rus: ["Хотите улучшить навыки игры в шахматы, развить стратегическое мышление и чаще побеждать? Наш комплексный курс поможет вам пройти путь от новичка до опытного игрока. Вы изучите основные принципы, продвинутые тактики и стратегии эндшпиля.",
                "Курс охватывает ключевые аспекты шахмат, включая дебютные схемы, стратегии игры в середине партии и мастерство эндшпиля. Практические упражнения, разбор реальных партий и наставничество помогут вам набраться опыта и уверенно чувствовать себя за шахматной доской.",
                "Независимо от того, хотите ли вы играть для удовольствия, участвовать в турнирах или использовать шахматы как инструмент для развития интеллекта, этот курс даст вам все необходимое для роста как шахматиста."
            ],
            eng: ["Want to improve your chess skills, develop strategic thinking, and win more games? Our comprehensive chess course will take you from a beginner to a skilled player. You’ll learn fundamental principles, advanced tactics, and endgame techniques to strengthen your game.",
                "The course covers key aspects of chess, including openings, middle-game strategies, and endgame mastery. With practical exercises, real-game analysis, and expert guidance, you’ll gain hands-on experience and build the confidence to compete in chess tournaments or simply enjoy playing at a higher level.",
                "Whether you aim to play for fun, compete in tournaments, or use chess as a tool for mental development, this course will provide everything you need to grow as a chess player."]
        },
        time: {
            rus: "12-18 часов",
            eng: "12-18 hours"
        },
        amountLessons: 12,
        label: {
            rus: ["Шахматы",
                "Стратегическое мышление",
                "Легкий старт"
            ],
            eng: [
                "Chess",
                "Strategic Thinking",
                "Easy start"
            ]
        },
        freeLesson: "ссылка на урок",
        planOfLessons: {
            rus: [
                {
                    duration: "5 недель",
                    title: "Основы шахмат: правила и базовая стратегия"
                },
                {
                    duration: "4 недели",
                    title: "Тактика и тактические задачи"
                },
                {
                    duration: "10 недель",
                    title: "Стратегия: как построить игру"
                },
                {
                    duration: "9 недель",
                    title: "Эндшпиль: завершаем партию правильно"
                },
                {
                    duration: "4 недели",
                    title: "Практика и турнирная подготовка"
                },

            ],
            eng: [
                {
                    duration: "5 weeks",
                    title: "Fundamentals of Chess: Rules and basic strategy"
                },
                {
                    duration: "4 weeks",
                    title: "Tactics and tactical tasks"
                },
                {
                    duration: "10 weeks",
                    title: "Strategy: how to build a game"
                },
                {
                    duration: "9 weeks",
                    title: "Endgame: Completing the game correctly"
                },
                {
                    duration: "4 weeks",
                    title: "Practice and tournament preparation"
                },

            ]
        }
    },
    {
        title: {
            rus: "React",
            eng: "Master React"
        },
        complexity: 5,
        descriptionUp: {
            rus: "Изучите передовой фреймворк React и создавайте современные веб-приложения.",
            eng: "Learn the cutting-edge React framework and build modern web applications."
        },
        descriptionDown: {
            rus: "Погрузитесь в мир фронтенд-разработки с React!",
            eng: "Dive into the world of frontend development with React!"
        },
        svgCode: `...`,
        cost: 22000,
        popularity: 320,
        MMR: 4.9,
        releasesData: "20.07.2025",
        isProfession: true,
        who: {
            subtitles: {
                rus: ["Начинающим разработчикам",
                    "Тем, кто хочет сменить профессию",
                    "Дизайнерам и креативщикам",
                    "Студентам и IT-специалистам"
                ],
                eng: [
                    "Beginning developers",
                    "Those looking for a career change",
                    "Designers and creatives",
                    "Students and IT professionals"
                ]
            },
            whoText: {
                rus: ["Если вы никогда не работали с программированием, этот курс даст прочную основу для старта в мире веб-разработки.",
                    "Если вы ищете новые карьерные возможности и готовы учиться, курс поможет освоить востребованные навыки.",
                    "Если вы уже занимаетесь дизайном, дополните его знаниями в области front-end и back-end разработки для создания более комплексных проектов",
                    "Даже если вы уже работаете в IT, курс поможет углубить знания и освоить новые инструменты и технологии веб-разработки."
                ],
                eng: [
                    "If you've never worked with programming, this course will give you a solid foundation to get started in the world of web development.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "If you're already involved in design, supplement it with knowledge of front-end and back-end development to create more complex projects.",
                    "Even if you already work in IT, the course will help you deepen your knowledge and learn new web development tools and technologies."
                ]
            }
        },

        whatNeed: {
            subtitles: {
                rus: ["",
                    "Внимательность",
                    "Желание учиться",
                    "Базовое владение компьютером"
                ],
                eng: [
                    "",
                    "Attentiveness",
                    "Willingness to learn",
                    "Basic computer skills"
                ]
            },
            whatNeedText: {
                rus: ["Этот курс предназначен для начинающих и не требует большого опыта. Вам понадобятся только базовые навыки, которые будут полезны в процессе обучения.",
                    "Важно быть внимательным при изучении новых понятий, следить за шагами и не пропускать важные детали. Это поможет усвоить материал быстрее и избежать ошибок.",
                    "Стремление развиваться и осваивать новое — ключевой аспект успешного обучения. Важно быть готовым к трудностям, задавать вопросы и искать решения, если что-то непонятно.",
                    "Знание основных функций компьютера: работа с файловой системой, использование браузера, установка программ и работа с текстовыми редакторами."
                ],
                eng: [
                    "This course is designed for beginners and does not require much experience. You will only need basic skills that will be useful in the learning process:",
                    "The desire to develop and learn new things is a key aspect of successful learning. It is important to be prepared for difficulties, ask questions and seek solutions when things are not clear.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "Knowledge of basic computer functions: working with the file system, using a browser, installing programmes and working with word processors."
                ]
            }
        },
        fullText: {
            rus: ["Научитесь создавать SPA с React и Redux..."],
            eng: ["Learn to build SPAs with React and Redux..."]
        },
        time: {
            rus: "25-35 часов",
            eng: "25-35 hours"
        },
        amountLessons: 22,
        label: {
            rus: ["IT",
                "Востребованный",
                "Легкий старт"
            ],
            eng: [
                "IT",
                "In demand",
                "Easy start"
            ]
        },
        freeLesson: "ссылка на урок",
        planOfLessons: {
            rus: [
                {
                    duration: "5 недель",
                    title: "Основы веб-верстки: HTML и CSS"
                },
                {
                    duration: "4 недели",
                    title: "Базовый JavaScript: работа с DOM и событиями"
                },
                {
                    duration: "10 недель",
                    title: "Фронтенд-разработка: современные инструменты"
                },
                {
                    duration: "9 недель",
                    title: "Работа с API: взаимодействие фронтенда и бэкенда"
                },
                {
                    duration: "4 недели",
                    title: "Управление проектом на удалённом сервере"
                },

            ],
            eng: [
                {
                    duration: "5 weeks",
                    title: "Web layout basics: HTML and CSS"
                },
                {
                    duration: "4 weeks",
                    title: "Basic JavaScript: working with DOM and events"
                },
                {
                    duration: "10 weeks",
                    title: "Frontend development: modern tools and frameworks"
                },
                {
                    duration: "9 weeks",
                    title: "Working with API: frontend and backend interaction"
                },
                {
                    duration: "4 weeks",
                    title: "Project management on a remote server"
                },

            ]
        }
    },
    {
        title: {
            rus: "Python",
            eng: "Master Python"
        },
        complexity: 3,
        descriptionUp: {
            rus: "Освойте один из самых востребованных языков программирования с нуля.",
            eng: "Master one of the most in-demand programming languages from scratch."
        },
        descriptionDown: {
            rus: "Начните программировать на Python уже сегодня!",
            eng: "Start coding in Python today!"
        },
        svgCode: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M60.976 83.832C59.048 83.832 57.488 82.2643 57.488 80.3262C57.488 78.3881 59.048 76.8242 60.976 76.8242C62.904 76.8242 64.464 78.3881 64.464 80.3262C64.464 82.2643 62.904 83.832 60.976 83.832ZM50.288 90C70.6 90 69.332 81.1465 69.332 81.1465L69.308 71.9746H49.928V69.2207H77.004C77.004 69.2207 90 70.7045 90 50.1055C90 29.5063 78.66 30.2324 78.66 30.2324H71.8879V39.7949C71.8879 39.7949 72.252 51.1934 60.728 51.1934H41.504C41.504 51.1934 30.704 51.022 30.704 61.6895V79.3242C30.704 79.3242 29.064 90 50.288 90ZM39.028 16.168C40.956 16.168 42.512 17.7357 42.512 19.6738C42.512 21.6119 40.956 23.1758 39.028 23.1758C37.1 23.1758 35.54 21.6119 35.54 19.6738C35.54 17.7357 37.1 16.168 39.028 16.168ZM49.712 10C29.404 10 30.672 18.8535 30.672 18.8535L30.696 28.0254H50.0761V30.7793H22.996C22.996 30.7793 10 29.2955 10 49.8945C10 70.4937 21.344 69.7676 21.344 69.7676H28.1121V60.2051C28.1121 60.2051 27.748 48.8066 39.276 48.8066H58.496C58.496 48.8066 69.296 48.978 69.296 38.3105V20.6758C69.296 20.6758 70.936 10 49.712 10Z"
        fill="var(--svgColor)" />
</svg>`,
        cost: 21000,
        popularity: 350,
        MMR: 4.9,
        releasesData: "01.08.2025",
        isProfession: true,
        who: {
            subtitles: {
                rus: ["Начинающим разработчикам",
                    "Тем, кто хочет сменить профессию",
                    "Дизайнерам и креативщикам",
                    "Студентам и IT-специалистам"
                ],
                eng: [
                    "Beginning developers",
                    "Those looking for a career change",
                    "Designers and creatives",
                    "Students and IT professionals"
                ]
            },
            whoText: {
                rus: ["Если вы никогда не работали с программированием, этот курс даст прочную основу для старта в мире веб-разработки.",
                    "Если вы ищете новые карьерные возможности и готовы учиться, курс поможет освоить востребованные навыки.",
                    "Если вы уже занимаетесь дизайном, дополните его знаниями в области front-end и back-end разработки для создания более комплексных проектов",
                    "Даже если вы уже работаете в IT, курс поможет углубить знания и освоить новые инструменты и технологии веб-разработки."
                ],
                eng: [
                    "If you've never worked with programming, this course will give you a solid foundation to get started in the world of web development.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "If you're already involved in design, supplement it with knowledge of front-end and back-end development to create more complex projects.",
                    "Even if you already work in IT, the course will help you deepen your knowledge and learn new web development tools and technologies."
                ]
            }
        },

        whatNeed: {
            subtitles: {
                rus: ["",
                    "Внимательность",
                    "Желание учиться",
                    "Базовое владение компьютером"
                ],
                eng: [
                    "",
                    "Attentiveness",
                    "Willingness to learn",
                    "Basic computer skills"
                ]
            },
            whatNeedText: {
                rus: ["Этот курс предназначен для начинающих и не требует большого опыта. Вам понадобятся только базовые навыки, которые будут полезны в процессе обучения.",
                    "Важно быть внимательным при изучении новых понятий, следить за шагами и не пропускать важные детали. Это поможет усвоить материал быстрее и избежать ошибок.",
                    "Стремление развиваться и осваивать новое — ключевой аспект успешного обучения. Важно быть готовым к трудностям, задавать вопросы и искать решения, если что-то непонятно.",
                    "Знание основных функций компьютера: работа с файловой системой, использование браузера, установка программ и работа с текстовыми редакторами."
                ],
                eng: [
                    "This course is designed for beginners and does not require much experience. You will only need basic skills that will be useful in the learning process:",
                    "The desire to develop and learn new things is a key aspect of successful learning. It is important to be prepared for difficulties, ask questions and seek solutions when things are not clear.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "Knowledge of basic computer functions: working with the file system, using a browser, installing programmes and working with word processors."
                ]
            }
        },
        fullText: {
            rus: ["Изучите основы Python, ООП, работу с библиотеками..."],
            eng: ["Learn Python basics, OOP, working with libraries..."]
        },
        time: {
            rus: "30-40 часов",
            eng: "30-40 hours"
        },
        amountLessons: 25,
        label: {
            rus: ["IT",
                "Востребованный",
                "Легкий старт"
            ],
            eng: [
                "IT",
                "In demand",
                "Easy start"
            ]
        },
        freeLesson: "ссылка на урок",
        planOfLessons: {
            rus: [
                {
                    duration: "5 недель",
                    title: "Основы веб-верстки: HTML и CSS"
                },
                {
                    duration: "4 недели",
                    title: "Базовый JavaScript: работа с DOM и событиями"
                },
                {
                    duration: "10 недель",
                    title: "Фронтенд-разработка: современные инструменты"
                },
                {
                    duration: "9 недель",
                    title: "Работа с API: взаимодействие фронтенда и бэкенда"
                },
                {
                    duration: "4 недели",
                    title: "Управление проектом на удалённом сервере"
                },

            ],
            eng: [
                {
                    duration: "5 weeks",
                    title: "Web layout basics: HTML and CSS"
                },
                {
                    duration: "4 weeks",
                    title: "Basic JavaScript: working with DOM and events"
                },
                {
                    duration: "10 weeks",
                    title: "Frontend development: modern tools and frameworks"
                },
                {
                    duration: "9 weeks",
                    title: "Working with API: frontend and backend interaction"
                },
                {
                    duration: "4 weeks",
                    title: "Project management on a remote server"
                },

            ]
        }
    },
    {
        title: {
            rus: "Телеграм-боты на Python",
            eng: "Telegram Bots with Python"
        },
        complexity: 4,
        descriptionUp: {
            rus: "Создайте собственных ботов для Telegram с использованием Python и aiogram. Автоматизируйте процессы и создавайте полезные инструменты!",
            eng: "Build your own Telegram bots using Python and aiogram. Automate processes and create useful tools!"
        },
        descriptionDown: {
            rus: "Начните создавать ботов уже сегодня!",
            eng: "Start building bots today!"
        },
        svgCode: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M50 9C41.8912 9 33.964 11.4046 27.2216 15.9097C20.4792 20.4149 15.2242 26.8182 12.121 34.3099C9.01778 41.8015 8.20583 50.0456 9.78781 57.9985C11.3698 65.952 15.2747 73.2572 21.0086 78.9915C26.7426 84.7254 34.0481 88.6301 42.0014 90.2122C49.9544 91.7943 58.1985 90.982 65.6902 87.8788C73.1819 84.7756 79.5851 79.521 84.0905 72.7785C88.5954 66.0361 91 58.1092 91 50C91 39.1261 86.6801 28.6976 78.9916 21.0086C71.3026 13.3196 60.8737 9 50 9ZM70.1413 37.085L63.4275 68.8087C62.915 71.0637 61.5825 71.5762 59.6863 70.5512L49.4363 62.9662L44.3113 67.7324C44.0699 68.0476 43.7598 68.3039 43.4046 68.4817C43.0495 68.659 42.6584 68.7533 42.2612 68.7574L42.9788 58.5075L61.9412 41.3387C62.8125 40.6212 61.9413 40.2112 60.7113 40.9287L37.4438 55.535L27.1937 52.3575C24.99 51.6912 24.9387 50.1537 27.655 49.1287L67.1688 33.7537C69.1163 33.19 70.7563 34.3175 70.1413 37.085Z"
        fill="var(--svgColor)" />
</svg>`,
        cost: 18000,
        popularity: 250,
        MMR: 4.7,
        releasesData: "10.04.2025",
        isProfession: true,
        who: {
            subtitles: {
                rus: ["Начинающим разработчикам",
                    "Тем, кто хочет сменить профессию",
                    "Дизайнерам и креативщикам",
                    "Студентам и IT-специалистам"
                ],
                eng: [
                    "Beginning developers",
                    "Those looking for a career change",
                    "Designers and creatives",
                    "Students and IT professionals"
                ]
            },
            whoText: {
                rus: ["Если вы никогда не работали с программированием, этот курс даст прочную основу для старта в мире веб-разработки.",
                    "Если вы ищете новые карьерные возможности и готовы учиться, курс поможет освоить востребованные навыки.",
                    "Если вы уже занимаетесь дизайном, дополните его знаниями в области front-end и back-end разработки для создания более комплексных проектов",
                    "Даже если вы уже работаете в IT, курс поможет углубить знания и освоить новые инструменты и технологии веб-разработки."
                ],
                eng: [
                    "If you've never worked with programming, this course will give you a solid foundation to get started in the world of web development.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "If you're already involved in design, supplement it with knowledge of front-end and back-end development to create more complex projects.",
                    "Even if you already work in IT, the course will help you deepen your knowledge and learn new web development tools and technologies."
                ]
            }
        },

        whatNeed: {
            subtitles: {
                rus: ["",
                    "Внимательность",
                    "Желание учиться",
                    "Базовое владение компьютером"
                ],
                eng: [
                    "",
                    "Attentiveness",
                    "Willingness to learn",
                    "Basic computer skills"
                ]
            },
            whatNeedText: {
                rus: ["Этот курс предназначен для начинающих и не требует большого опыта. Вам понадобятся только базовые навыки, которые будут полезны в процессе обучения.",
                    "Важно быть внимательным при изучении новых понятий, следить за шагами и не пропускать важные детали. Это поможет усвоить материал быстрее и избежать ошибок.",
                    "Стремление развиваться и осваивать новое — ключевой аспект успешного обучения. Важно быть готовым к трудностям, задавать вопросы и искать решения, если что-то непонятно.",
                    "Знание основных функций компьютера: работа с файловой системой, использование браузера, установка программ и работа с текстовыми редакторами."
                ],
                eng: [
                    "This course is designed for beginners and does not require much experience. You will only need basic skills that will be useful in the learning process:",
                    "The desire to develop and learn new things is a key aspect of successful learning. It is important to be prepared for difficulties, ask questions and seek solutions when things are not clear.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "Knowledge of basic computer functions: working with the file system, using a browser, installing programmes and working with word processors."
                ]
            }
        },
        fullText: {
            rus: ["Научитесь создавать ботов для Telegram, которые могут автоматизировать задачи, взаимодействовать с пользователями и работать с API."],
            eng: ["Learn to build Telegram bots that automate tasks, interact with users, and work with APIs."]
        },
        time: {
            rus: "15-20 часов",
            eng: "15-20 hours"
        },
        amountLessons: 15,
        label: {
            rus: ["IT",
                "Востребованный",
                "Легкий старт"
            ],
            eng: [
                "IT",
                "In demand",
                "Easy start"
            ]
        },
        freeLesson: "ссылка на урок",
        planOfLessons: {
            rus: [
                {
                    duration: "5 недель",
                    title: "Основы веб-верстки: HTML и CSS"
                },
                {
                    duration: "4 недели",
                    title: "Базовый JavaScript: работа с DOM и событиями"
                },
                {
                    duration: "10 недель",
                    title: "Фронтенд-разработка: современные инструменты"
                },
                {
                    duration: "9 недель",
                    title: "Работа с API: взаимодействие фронтенда и бэкенда"
                },
                {
                    duration: "4 недели",
                    title: "Управление проектом на удалённом сервере"
                },

            ],
            eng: [
                {
                    duration: "5 weeks",
                    title: "Web layout basics: HTML and CSS"
                },
                {
                    duration: "4 weeks",
                    title: "Basic JavaScript: working with DOM and events"
                },
                {
                    duration: "10 weeks",
                    title: "Frontend development: modern tools and frameworks"
                },
                {
                    duration: "9 weeks",
                    title: "Working with API: frontend and backend interaction"
                },
                {
                    duration: "4 weeks",
                    title: "Project management on a remote server"
                },

            ]
        }
    },
    {
        title: {
            rus: "Продажи: Искусство убеждения",
            eng: "Sales: The Art of Persuasion"
        },
        complexity: 1,
        descriptionUp: {
            rus: "Научитесь продавать эффективно, используя проверенные техники убеждения и психологии покупателя.",
            eng: "Learn to sell effectively using proven persuasion techniques and buyer psychology."
        },
        descriptionDown: {
            rus: "Станьте мастером продаж и увеличьте свой доход!",
            eng: "Become a sales expert and boost your income!"
        },
        svgCode: `...`,
        cost: 22000,
        popularity: 350,
        MMR: 4.9,
        releasesData: "20.05.2025",
        isProfession: false,
        who: {
            subtitles: {
                rus: ["Начинающим разработчикам",
                    "Тем, кто хочет сменить профессию",
                    "Дизайнерам и креативщикам",
                    "Студентам и IT-специалистам"
                ],
                eng: [
                    "Beginning developers",
                    "Those looking for a career change",
                    "Designers and creatives",
                    "Students and IT professionals"
                ]
            },
            whoText: {
                rus: ["Если вы никогда не работали с программированием, этот курс даст прочную основу для старта в мире веб-разработки.",
                    "Если вы ищете новые карьерные возможности и готовы учиться, курс поможет освоить востребованные навыки.",
                    "Если вы уже занимаетесь дизайном, дополните его знаниями в области front-end и back-end разработки для создания более комплексных проектов",
                    "Даже если вы уже работаете в IT, курс поможет углубить знания и освоить новые инструменты и технологии веб-разработки."
                ],
                eng: [
                    "If you've never worked with programming, this course will give you a solid foundation to get started in the world of web development.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "If you're already involved in design, supplement it with knowledge of front-end and back-end development to create more complex projects.",
                    "Even if you already work in IT, the course will help you deepen your knowledge and learn new web development tools and technologies."
                ]
            }
        },

        whatNeed: {
            subtitles: {
                rus: ["",
                    "Внимательность",
                    "Желание учиться",
                    "Базовое владение компьютером"
                ],
                eng: [
                    "",
                    "Attentiveness",
                    "Willingness to learn",
                    "Basic computer skills"
                ]
            },
            whatNeedText: {
                rus: ["Этот курс предназначен для начинающих и не требует большого опыта. Вам понадобятся только базовые навыки, которые будут полезны в процессе обучения.",
                    "Важно быть внимательным при изучении новых понятий, следить за шагами и не пропускать важные детали. Это поможет усвоить материал быстрее и избежать ошибок.",
                    "Стремление развиваться и осваивать новое — ключевой аспект успешного обучения. Важно быть готовым к трудностям, задавать вопросы и искать решения, если что-то непонятно.",
                    "Знание основных функций компьютера: работа с файловой системой, использование браузера, установка программ и работа с текстовыми редакторами."
                ],
                eng: [
                    "This course is designed for beginners and does not require much experience. You will only need basic skills that will be useful in the learning process:",
                    "The desire to develop and learn new things is a key aspect of successful learning. It is important to be prepared for difficulties, ask questions and seek solutions when things are not clear.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "Knowledge of basic computer functions: working with the file system, using a browser, installing programmes and working with word processors."
                ]
            }
        },
        fullText: {
            rus: ["Курс поможет вам понять психологию клиента, освоить техники убеждения и улучшить ваши навыки продаж."],
            eng: ["The course will help you understand buyer psychology, master persuasion techniques, and improve your sales skills."]
        },
        time: {
            rus: "25-35 часов",
            eng: "25-35 hours"
        },
        label: {
            rus: ["IT",
                "Востребованный",
                "Легкий старт"
            ],
            eng: [
                "IT",
                "In demand",
                "Easy start"
            ]
        },
        amountLessons: 18,
        freeLesson: "ссылка на урок",
        planOfLessons: {
            rus: [
                {
                    duration: "5 недель",
                    title: "Основы веб-верстки: HTML и CSS"
                },
                {
                    duration: "4 недели",
                    title: "Базовый JavaScript: работа с DOM и событиями"
                },
                {
                    duration: "10 недель",
                    title: "Фронтенд-разработка: современные инструменты"
                },
                {
                    duration: "9 недель",
                    title: "Работа с API: взаимодействие фронтенда и бэкенда"
                },
                {
                    duration: "4 недели",
                    title: "Управление проектом на удалённом сервере"
                },

            ],
            eng: [
                {
                    duration: "5 weeks",
                    title: "Web layout basics: HTML and CSS"
                },
                {
                    duration: "4 weeks",
                    title: "Basic JavaScript: working with DOM and events"
                },
                {
                    duration: "10 weeks",
                    title: "Frontend development: modern tools and frameworks"
                },
                {
                    duration: "9 weeks",
                    title: "Working with API: frontend and backend interaction"
                },
                {
                    duration: "4 weeks",
                    title: "Project management on a remote server"
                },

            ]
        }
    },
    {
        title: {
            rus: "Нутрициология",
            eng: "Nutrition Science"
        },
        complexity: 2,
        descriptionUp: {
            rus: "Разберитесь в основах правильного питания, научитесь подбирать рацион для себя и клиентов. Курс подойдет как для личного развития, так и для профессиональной деятельности.",
            eng: "Understand the fundamentals of proper nutrition, learn to create personalized meal plans for yourself and clients. Suitable for both personal growth and professional practice."
        },
        descriptionDown: {
            rus: "Начните изучать нутрициологию уже сегодня!",
            eng: "Start learning nutrition science today!"
        },
        svgCode: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M6.5625 48.2422L6.66016 51.2695C6.875 57.8809 9.21875 64.3164 13.457 69.8633C17.5195 75.1855 23.1836 79.5508 29.8535 82.4902C31.3379 83.1445 33.0664 82.4707 33.7109 80.9863C34.3652 79.502 33.6914 77.7734 32.207 77.1289C26.4453 74.5898 21.5723 70.8496 18.1055 66.3086C15.2734 62.5977 13.4668 58.4277 12.793 54.1016H87.2656C86.582 58.4766 84.7461 62.6855 81.8555 66.4355C78.3301 71.0059 73.3789 74.7559 67.5195 77.2656C66.0352 77.9004 65.3516 79.6289 65.9863 81.1133C66.4648 82.2266 67.5391 82.8906 68.6816 82.8906C69.0723 82.8906 69.4629 82.8125 69.834 82.6563C83.9453 76.582 92.9785 64.5605 93.3984 51.2695L93.4961 48.2422H6.5625Z"
        fill="var(--svgColor)" />
    <path
        d="M57.8027 78.1348H42.2754C38.8379 78.1348 36.0156 80.9473 36.0156 84.3945C36.0156 87.8418 38.8281 90.6543 42.2754 90.6543H57.8027C61.2402 90.6543 64.0625 87.8418 64.0625 84.3945C64.0625 80.9473 61.2402 78.1348 57.8027 78.1348ZM57.8027 84.7852H42.2754C42.0703 84.7852 41.875 84.5898 41.875 84.3848C41.875 84.1797 42.0703 83.9844 42.2754 83.9844H57.8027C58.0078 83.9844 58.2031 84.1797 58.2031 84.3848C58.2031 84.5898 58.0078 84.7852 57.8027 84.7852Z"
        fill="var(--svgColor)" />
    <path
        d="M48.6445 36.4746C47.707 35.1562 45.8711 34.8535 44.5527 35.8008C43.2344 36.7383 42.9316 38.5742 43.8789 39.8926C44.9336 41.3672 45.5 43.1152 45.5 44.9414C45.5 46.5625 46.8086 47.8711 48.4297 47.8711C50.0508 47.8711 51.3594 46.5625 51.3594 44.9414C51.3594 41.875 50.4219 38.9453 48.6445 36.4746ZM42.2285 31.4258C40.5 30.7324 38.6836 30.3809 36.8086 30.3809C28.7813 30.3809 22.2578 36.9043 22.2578 44.9316C22.2578 46.5527 23.5664 47.8613 25.1875 47.8613C26.8086 47.8613 28.1172 46.5527 28.1172 44.9316C28.1172 40.1367 32.0137 36.2402 36.8086 36.2402C37.9316 36.2402 39.0156 36.4453 40.041 36.8652C41.5449 37.4707 43.2441 36.7383 43.8496 35.2344C44.4551 33.7305 43.7324 32.0215 42.2285 31.4258Z"
        fill="var(--svgColor)" />
    <path
        d="M53.6523 26.8264C49.0918 22.3733 43.1347 19.9123 36.875 19.9123C30.6152 19.9123 24.6582 22.3635 20.0976 26.8264C15.5957 31.2307 12.8711 37.178 12.4218 43.5647C12.3047 45.176 13.5254 46.5823 15.1367 46.6897C16.748 46.7971 18.1543 45.5862 18.2617 43.9748C18.6035 39.0139 20.7129 34.4143 24.1894 31.0159C27.6465 27.637 32.1484 25.7717 36.875 25.7717C41.5918 25.7717 46.1035 27.637 49.5605 31.0159C53.0371 34.4143 55.1367 39.0139 55.4882 43.9748C55.5957 45.5178 56.8847 46.6995 58.4082 46.6995C58.4765 46.6995 58.5449 46.6995 58.6132 46.6897C60.2246 46.5725 61.4453 45.176 61.3281 43.5647C60.8789 37.178 58.1543 31.2307 53.6523 26.8264ZM87.4121 37.6858C86.289 35.7912 84.707 34.1116 82.7148 32.6858L87.9785 26.9924C89.0722 25.801 89.0039 23.9455 87.8125 22.8518C86.6211 21.758 84.7656 21.8264 83.6718 23.0178L77.3242 29.8928C76.8359 29.717 76.3379 29.551 75.83 29.4045L83.8769 13.8577C84.6191 12.4221 84.0625 10.6545 82.6172 9.91234C81.1816 9.17016 79.414 9.7268 78.6718 11.1721L69.7656 28.3889C69.2285 28.3596 68.6816 28.3401 68.1347 28.3401C65.9961 28.3401 63.8867 28.5745 61.8554 29.0432C60.2832 29.4045 59.2968 30.9768 59.6582 32.5588C60.0195 34.1311 61.5918 35.1174 63.1738 34.7561C64.7656 34.385 66.4355 34.1995 68.125 34.1995C72.3828 34.1995 76.3476 35.3518 79.2871 37.4514C81.9336 39.3362 83.3886 41.7483 83.3886 44.2385C83.3886 45.8596 84.6972 47.1682 86.3183 47.1682C87.9394 47.1682 89.248 45.8596 89.248 44.2385C89.248 41.9436 88.6328 39.7366 87.4121 37.6858Z"
        fill="var(--svgColor)" />
</svg>`,
        cost: 18000,
        popularity: 250,
        MMR: 4.7,
        releasesData: "10.04.2025",
        isProfession: false,
        who: {
            subtitles: {
                rus: ["Начинающим разработчикам",
                    "Тем, кто хочет сменить профессию",
                    "Дизайнерам и креативщикам",
                    "Студентам и IT-специалистам"
                ],
                eng: [
                    "Beginning developers",
                    "Those looking for a career change",
                    "Designers and creatives",
                    "Students and IT professionals"
                ]
            },
            whoText: {
                rus: ["Если вы никогда не работали с программированием, этот курс даст прочную основу для старта в мире веб-разработки.",
                    "Если вы ищете новые карьерные возможности и готовы учиться, курс поможет освоить востребованные навыки.",
                    "Если вы уже занимаетесь дизайном, дополните его знаниями в области front-end и back-end разработки для создания более комплексных проектов",
                    "Даже если вы уже работаете в IT, курс поможет углубить знания и освоить новые инструменты и технологии веб-разработки."
                ],
                eng: [
                    "If you've never worked with programming, this course will give you a solid foundation to get started in the world of web development.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "If you're already involved in design, supplement it with knowledge of front-end and back-end development to create more complex projects.",
                    "Even if you already work in IT, the course will help you deepen your knowledge and learn new web development tools and technologies."
                ]
            }
        },

        whatNeed: {
            subtitles: {
                rus: ["",
                    "Внимательность",
                    "Желание учиться",
                    "Базовое владение компьютером"
                ],
                eng: [
                    "",
                    "Attentiveness",
                    "Willingness to learn",
                    "Basic computer skills"
                ]
            },
            whatNeedText: {
                rus: ["Этот курс предназначен для начинающих и не требует большого опыта. Вам понадобятся только базовые навыки, которые будут полезны в процессе обучения.",
                    "Важно быть внимательным при изучении новых понятий, следить за шагами и не пропускать важные детали. Это поможет усвоить материал быстрее и избежать ошибок.",
                    "Стремление развиваться и осваивать новое — ключевой аспект успешного обучения. Важно быть готовым к трудностям, задавать вопросы и искать решения, если что-то непонятно.",
                    "Знание основных функций компьютера: работа с файловой системой, использование браузера, установка программ и работа с текстовыми редакторами."
                ],
                eng: [
                    "This course is designed for beginners and does not require much experience. You will only need basic skills that will be useful in the learning process:",
                    "The desire to develop and learn new things is a key aspect of successful learning. It is important to be prepared for difficulties, ask questions and seek solutions when things are not clear.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "Knowledge of basic computer functions: working with the file system, using a browser, installing programmes and working with word processors."
                ]
            }
        },
        fullText: {
            rus: [
                "Этот курс поможет вам разобраться в принципах здорового питания и нутрициологии. Вы узнаете, как правильно подбирать рацион, учитывать особенности организма и корректировать питание для достижения различных целей – от снижения веса до набора мышечной массы.",
                "Мы разберем влияние макро- и микроэлементов на здоровье, научимся анализировать состав продуктов и составлять сбалансированные диеты. Также вы получите базовые знания по диетологии и сможете применять их в работе с клиентами или для собственного здоровья.",
                "По окончании курса вы сможете грамотно подходить к вопросам питания, разбираться в современных тенденциях нутрициологии и применять полученные знания на практике."
            ],
            eng: [
                "This course will help you understand the principles of healthy eating and nutrition science. You'll learn how to create balanced meal plans, consider individual body needs, and adjust nutrition for different goals – from weight loss to muscle gain.",
                "We will cover the impact of macro- and micronutrients on health, analyze food compositions, and create well-balanced diets. You'll also gain basic knowledge of dietetics, which you can apply to working with clients or improving your own health.",
                "By the end of the course, you'll be able to make informed decisions about nutrition, understand modern nutrition trends, and apply your knowledge in practice."
            ]
        },
        time: {
            rus: "15-25 часов",
            eng: "15-25 hours"
        },
        amountLessons: 15,
        label: {
            rus: ["IT",
                "Востребованный",
                "Легкий старт"
            ],
            eng: [
                "IT",
                "In demand",
                "Easy start"
            ]
        },
        freeLesson: "ссылка на бесплатный урок",
        planOfLessons: {
            rus: [
                {
                    duration: "5 недель",
                    title: "Основы веб-верстки: HTML и CSS"
                },
                {
                    duration: "4 недели",
                    title: "Базовый JavaScript: работа с DOM и событиями"
                },
                {
                    duration: "10 недель",
                    title: "Фронтенд-разработка: современные инструменты"
                },
                {
                    duration: "9 недель",
                    title: "Работа с API: взаимодействие фронтенда и бэкенда"
                },
                {
                    duration: "4 недели",
                    title: "Управление проектом на удалённом сервере"
                },

            ],
            eng: [
                {
                    duration: "5 weeks",
                    title: "Web layout basics: HTML and CSS"
                },
                {
                    duration: "4 weeks",
                    title: "Basic JavaScript: working with DOM and events"
                },
                {
                    duration: "10 weeks",
                    title: "Frontend development: modern tools and frameworks"
                },
                {
                    duration: "9 weeks",
                    title: "Working with API: frontend and backend interaction"
                },
                {
                    duration: "4 weeks",
                    title: "Project management on a remote server"
                },

            ]
        }
    },
    {
        title: {
            rus: "Обучение по Notion",
            eng: "Notion"
        },
        complexity: 1,
        descriptionUp: {
            rus: "Разберитесь в основах правильного питания, научитесь подбирать рацион для себя и клиентов. Курс подойдет как для личного развития, так и для профессиональной деятельности.",
            eng: "Understand the fundamentals of proper nutrition, learn to create personalized meal plans for yourself and clients. Suitable for both personal growth and professional practice."
        },
        descriptionDown: {
            rus: "Начните изучать нутрициологию уже сегодня!",
            eng: "Start learning nutrition science today!"
        },
        svgCode: `<svg id="course-img-nutrition" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" stroke="var(--svgColor)" stroke-width="10" fill="none"/>
                    <path d="M50 120 C70 90, 130 90, 150 120" stroke="var(--svgColor)" stroke-width="8" fill="none"/>
                    <circle cx="70" cy="80" r="8" fill="var(--svgColor)"/>
                    <circle cx="130" cy="80" r="8" fill="var(--svgColor)"/>
                  </svg>`,
        cost: 18000,
        popularity: 250,
        MMR: 4.7,
        releasesData: "10.04.2025",
        isProfession: false,
        who: {
            subtitles: {
                rus: ["Начинающим разработчикам",
                    "Тем, кто хочет сменить профессию",
                    "Дизайнерам и креативщикам",
                    "Студентам и IT-специалистам"
                ],
                eng: [
                    "Beginning developers",
                    "Those looking for a career change",
                    "Designers and creatives",
                    "Students and IT professionals"
                ]
            },
            whoText: {
                rus: ["Если вы никогда не работали с программированием, этот курс даст прочную основу для старта в мире веб-разработки.",
                    "Если вы ищете новые карьерные возможности и готовы учиться, курс поможет освоить востребованные навыки.",
                    "Если вы уже занимаетесь дизайном, дополните его знаниями в области front-end и back-end разработки для создания более комплексных проектов",
                    "Даже если вы уже работаете в IT, курс поможет углубить знания и освоить новые инструменты и технологии веб-разработки."
                ],
                eng: [
                    "If you've never worked with programming, this course will give you a solid foundation to get started in the world of web development.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "If you're already involved in design, supplement it with knowledge of front-end and back-end development to create more complex projects.",
                    "Even if you already work in IT, the course will help you deepen your knowledge and learn new web development tools and technologies."
                ]
            }
        },

        whatNeed: {
            subtitles: {
                rus: ["",
                    "Внимательность",
                    "Желание учиться",
                    "Базовое владение компьютером"
                ],
                eng: [
                    "",
                    "Attentiveness",
                    "Willingness to learn",
                    "Basic computer skills"
                ]
            },
            whatNeedText: {
                rus: ["Этот курс предназначен для начинающих и не требует большого опыта. Вам понадобятся только базовые навыки, которые будут полезны в процессе обучения.",
                    "Важно быть внимательным при изучении новых понятий, следить за шагами и не пропускать важные детали. Это поможет усвоить материал быстрее и избежать ошибок.",
                    "Стремление развиваться и осваивать новое — ключевой аспект успешного обучения. Важно быть готовым к трудностям, задавать вопросы и искать решения, если что-то непонятно.",
                    "Знание основных функций компьютера: работа с файловой системой, использование браузера, установка программ и работа с текстовыми редакторами."
                ],
                eng: [
                    "This course is designed for beginners and does not require much experience. You will only need basic skills that will be useful in the learning process:",
                    "The desire to develop and learn new things is a key aspect of successful learning. It is important to be prepared for difficulties, ask questions and seek solutions when things are not clear.",
                    "If you're looking for new career opportunities and are willing to learn, this course will help you learn in-demand skills.",
                    "Knowledge of basic computer functions: working with the file system, using a browser, installing programmes and working with word processors."
                ]
            }
        },
        fullText: {
            rus: [
                "Этот курс поможет вам разобраться в принципах здорового питания и нутрициологии. Вы узнаете, как правильно подбирать рацион, учитывать особенности организма и корректировать питание для достижения различных целей – от снижения веса до набора мышечной массы.",
                "Мы разберем влияние макро- и микроэлементов на здоровье, научимся анализировать состав продуктов и составлять сбалансированные диеты. Также вы получите базовые знания по диетологии и сможете применять их в работе с клиентами или для собственного здоровья.",
                "По окончании курса вы сможете грамотно подходить к вопросам питания, разбираться в современных тенденциях нутрициологии и применять полученные знания на практике."
            ],
            eng: [
                "This course will help you understand the principles of healthy eating and nutrition science. You'll learn how to create balanced meal plans, consider individual body needs, and adjust nutrition for different goals – from weight loss to muscle gain.",
                "We will cover the impact of macro- and micronutrients on health, analyze food compositions, and create well-balanced diets. You'll also gain basic knowledge of dietetics, which you can apply to working with clients or improving your own health.",
                "By the end of the course, you'll be able to make informed decisions about nutrition, understand modern nutrition trends, and apply your knowledge in practice."
            ]
        },
        time: {
            rus: "15-25 часов",
            eng: "15-25 hours"
        },
        amountLessons: 15,
        label: {
            rus: ["IT",
                "Востребованный",
                "Легкий старт"
            ],
            eng: [
                "IT",
                "In demand",
                "Easy start"
            ]
        },
        freeLesson: "ссылка на бесплатный урок",
        planOfLessons: {
            rus: [
                {
                    duration: "5 недель",
                    title: "Основы веб-верстки: HTML и CSS"
                },
                {
                    duration: "4 недели",
                    title: "Базовый JavaScript: работа с DOM и событиями"
                },
                {
                    duration: "10 недель",
                    title: "Фронтенд-разработка: современные инструменты"
                },
                {
                    duration: "9 недель",
                    title: "Работа с API: взаимодействие фронтенда и бэкенда"
                },
                {
                    duration: "4 недели",
                    title: "Управление проектом на удалённом сервере"
                },

            ],
            eng: [
                {
                    duration: "5 weeks",
                    title: "Web layout basics: HTML and CSS"
                },
                {
                    duration: "4 weeks",
                    title: "Basic JavaScript: working with DOM and events"
                },
                {
                    duration: "10 weeks",
                    title: "Frontend development: modern tools and frameworks"
                },
                {
                    duration: "9 weeks",
                    title: "Working with API: frontend and backend interaction"
                },
                {
                    duration: "4 weeks",
                    title: "Project management on a remote server"
                },

            ]
        }
    }

];

export default coursesData;