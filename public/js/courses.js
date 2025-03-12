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
            rus: ["Разработчики", "Командная работа", "Контроль версий"],
            eng: ["Developers", "Team collaboration", "Version control"]
        },
        whatNeed: {
            rus: ["ПК", "Стабильный интернет", "Базовые знания программирования"],
            eng: ["PC", "Internet connection", "Basic programming knowledge"]
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
            rus: "Развивайте логическое мышление, обучаясь шахматам от базы до продвинутого уровня.",
            eng: "Develop logical thinking by learning chess from basics to advanced strategies."
        },
        descriptionDown: {
            rus: "Станьте уверенным игроком в шахматы!",
            eng: "Become a confident chess player"
        },
        svgCode: `...`,
        cost: 15000,
        popularity: 270,
        MMR: 4.6,
        releasesData: "10.06.2025",
        isProfession: false,
        who: {
            rus: ["Дети", "Взрослые", "Стратеги"],
            eng: ["Kids", "Adults", "Strategists"]
        },
        whatNeed: {
            rus: ["Желание учиться"],
            eng: ["Desire to learn"]
        },
        fullText: {
            rus: ["Освойте дебюты, миттельшпиль и эндшпиль..."],
            eng: ["Master openings, middle game, and endgame..."]
        },
        time: {
            rus: "12-18 часов",
            eng: "12-18 hours"
        },
        amountLessons: 12,
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
            rus: ["Разработчики", "Фронтендеры"],
            eng: ["Developers", "Frontend engineers"]
        },
        whatNeed: {
            rus: ["Знание JS", "ПК"],
            eng: ["JavaScript knowledge", "PC"]
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
        svgCode: `...`,
        cost: 21000,
        popularity: 350,
        MMR: 4.9,
        releasesData: "01.08.2025",
        isProfession: true,
        who: {
            rus: ["Новички", "Разработчики"],
            eng: ["Beginners", "Developers"]
        },
        whatNeed: {
            rus: ["ПК", "Желание учиться"],
            eng: ["PC", "Desire to learn"]
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
        cost: 18000,
        popularity: 250,
        MMR: 4.7,
        releasesData: "10.04.2025",
        isProfession: true,
        who: {
            rus: ["Разработчики", "Автоматизация", "Telegram API"],
            eng: ["Developers", "Automation", "Telegram API"]
        },
        whatNeed: {
            rus: ["ПК", "Python", "Интернет"],
            eng: ["PC", "Python", "Internet"]
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
        cost: 22000,
        popularity: 350,
        MMR: 4.9,
        releasesData: "20.05.2025",
        isProfession: false,
        who: {
            rus: ["Бизнес", "Коммуникация", "Личные продажи"],
            eng: ["Business", "Communication", "Personal Sales"]
        },
        whatNeed: {
            rus: ["Желание развиваться", "Коммуникативные навыки"],
            eng: ["Desire to grow", "Communication skills"]
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
            rus: ["ЗОЖ", "Диетология", "Личный рост"],
            eng: ["Healthy Lifestyle", "Dietetics", "Personal Growth"]
        },
        whatNeed: {
            rus: ["Интерес к питанию", "Желание учиться", "Базовые знания биологии"],
            eng: ["Interest in nutrition", "Willingness to learn", "Basic biology knowledge"]
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