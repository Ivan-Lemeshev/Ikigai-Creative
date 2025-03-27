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
        },

        descriptionMobile: {
            eng: ["Want to break into tech and build modern web applications? Our web development course takes you from beginner to skilled developer. You’ll master HTML, CSS, JavaScript, and modern frameworks to create responsive, interactive websites.",
                "Beyond front-end skills, you’ll dive into back-end development, working with databases, APIs, and server-side programming. Hands-on projects and expert mentorship ensure you gain real-world experience and a strong portfolio.",
                "Whether you’re starting a new career or launching your own projects, this course equips you with the confidence and expertise to succeed as a web developer."],
            rus: ["", "", ""]
        },

    },
    {
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

        title: {
            rus: "Git",
            eng: "Master Git"
        },
        complexity: 2,
        descriptionUp: {
            rus: "Освойте Git и научитесь эффективно управлять версиями кода. Разберитесь в основных командах, работе с ветками и командной разработке через GitHub.",
            eng: "Master Git and learn to manage code versions efficiently. Understand core commands, branching strategies, and collaborate seamlessly using GitHub."
        },
        descriptionDown: {
            rus: "Начните работать с Git и сделайте свой код организованным и защищённым!",
            eng: "Start using Git today and keep your code organized and secure!"
        },
        cost: 18000,
        popularity: 250,
        MMR: 4.7,
        releasesData: "05.03.2025",
        isProfession: false,
        who: {
            subtitles: {
                rus: [
                    "Начинающим разработчикам",
                    "Фрилансерам",
                    "Студентам IT-специальностей"
                ],
                eng: [
                    "Beginning developers",
                    "Freelancers",
                    "IT students"
                ]
            },
            whoText: {
                rus: [
                    "Если вы новичок в разработке, этот курс поможет вам освоить основы контроля версий.",
                    "Идеально подходит для фрилансеров и разработчиков, стремящихся повысить эффективность управления кодом.",
                    "Студенты IT, желающие укрепить навыки командной работы и работы над реальными проектами."
                ],
                eng: [
                    "If you're new to development, this course will teach you the fundamentals of version control.",
                    "Ideal for freelancers and developers aiming to boost efficiency in code management.",
                    "IT students looking to strengthen their teamwork and real-world project skills."
                ]
            }
        },
        whatNeed: {
            subtitles: {
                rus: [
                    "",
                    "Внимательность",
                    "Желание учиться",
                    "Базовые компьютерные навыки"
                ],
                eng: [
                    "",
                    "Attentiveness",
                    "Willingness to learn",
                    "Basic computer skills"
                ]
            },
            whatNeedText: {
                rus: [
                    "Курс рассчитан на начинающих и не требует специальной подготовки.",
                    "Важно быть внимательным к деталям и следовать инструкциям для освоения новых концепций.",
                    "Стремление к обучению ускорит ваше освоение Git.",
                    "Базовые навыки работы с компьютером: навигация по файловой системе, использование браузера и установка программ."
                ],
                eng: [
                    "The course is designed for beginners and requires no special preparation.",
                    "Paying attention to details and following instructions are key to mastering new concepts.",
                    "A willingness to learn will accelerate your mastery of Git.",
                    "Basic computer skills: file system navigation, using a browser, and installing software."
                ]
            }
        },
        fullText: {
            rus: [
                "Освойте Git — незаменимый инструмент контроля версий в разработке. Научитесь работать с локальными и удалёнными репозиториями, создавать коммиты и управлять ветками.",
                "Курс охватывает практические аспекты Git: создание веток, слияние, разрешение конфликтов и интеграцию с платформами типа GitHub и GitLab.",
                "К концу курса вы будете уверенно использовать Git для организации и оптимизации рабочего процесса в своих проектах."
            ],
            eng: [
                "Master Git — an essential tool for version control in development. Learn to work with local and remote repositories, create commits, and manage branches.",
                "The course covers practical aspects of Git: branch creation, merging, conflict resolution, and integration with platforms like GitHub and GitLab.",
                "By the end of the course, you'll confidently use Git to organize and streamline your project workflow."
            ]
        },
        label: {
            rus: [
                "IT",
                "Востребованный",
                "Практический"
            ],
            eng: [
                "IT",
                "In demand",
                "Practical"
            ]
        },
        freeLesson: "ссылка на урок",
        planOfLessons: {
            rus: [
                {
                    duration: "1 неделя",
                    title: "Введение в Git: история и основы контроля версий"
                },
                {
                    duration: "1 неделя",
                    title: "Установка и настройка Git: первые шаги"
                },
                {
                    duration: "2 недели",
                    title: "Работа с локальными репозиториями: коммиты и ветки"
                },
                {
                    duration: "1 неделя",
                    title: "Удалённые репозитории: GitHub и GitLab"
                },
                {
                    duration: "1 неделя",
                    title: "Слияние веток и разрешение конфликтов"
                },
                {
                    duration: "1 неделя",
                    title: "Практика: организационный рабочий процесс в команде"
                },
                {
                    duration: "1 неделя",
                    title: "Интеграция Git в проекты: CI/CD"
                },
                {
                    duration: "1 неделя",
                    title: "Заключительный проект и обзор пройденного материала"
                }
            ],
            eng: [
                {
                    duration: "1 week",
                    title: "Introduction to Git: History and Version Control Basics"
                },
                {
                    duration: "1 week",
                    title: "Installing and Configuring Git: Getting Started"
                },
                {
                    duration: "2 weeks",
                    title: "Working with Local Repositories: Commits/Branches"
                },
                {
                    duration: "1 week",
                    title: "Remote Repositories: GitHub and GitLab"
                },
                {
                    duration: "1 week",
                    title: "Branch Merging and Conflict Resolution"
                },
                {
                    duration: "1 week",
                    title: "Hands-on Practice: Team Workflow"
                },
                {
                    duration: "1 week",
                    title: "Integrating Git into Projects: CI/CD"
                },
                {
                    duration: "1 week",
                    title: "Final Project and Course Review"
                }
            ]
        },
        descriptionMobile: {
            eng: [
                "Struggling to keep track of your code changes? This course will guide you through Git, the industry-standard version control system used by developers worldwide. You’ll learn how to track changes, collaborate with teams, and confidently manage your projects using Git and GitHub.",
                "We’ll start with the basics: setting up Git, creating repositories, making commits, and understanding branches. Then, you'll dive into more advanced topics like rebasing, resolving merge conflicts, and optimizing workflows with GitFlow and CI/CD automation.",
                "By the end of this course, you’ll have hands-on experience working with Git in real-world scenarios. Whether you're a solo developer or part of a team, mastering Git will make your workflow smoother, your code more organized."
            ],
            rus: [
                "Не знаете, как правильно управлять изменениями в коде? В этом курсе вы изучите Git — один из самых популярных инструментов контроля версий, который используют разработчики по всему миру.",
                "Начнем с основ: установка Git, создание репозиториев, работа с коммитами и ветками. Затем разберем продвинутые темы: ребейзинг, разрешение конфликтов слияния, а также оптимизацию процессов с GitFlow и автоматизацию через CI/CD.",
                "После прохождения курса вы получите практический опыт работы с Git в реальных сценариях. Независимо от того, работаете ли вы в одиночку или в команде, владение Git поможет вам сделать работу с кодом удобной, организованной и эффективной."
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
        },
        descriptionMobile: {
            eng: [
                "Struggling to decipher complex chess strategies? This course will guide you through the fundamentals of chess, a timeless game revered by grandmasters worldwide. You’ll learn how to master openings, tactics, and overall board strategy.",
                "We’ll start with the basics: understanding the rules, piece movements, and recognizing common patterns. Then, you'll dive into more advanced topics like complex tactical combinations, endgame strategies, and planning moves ahead to outsmart your opponents.",
                "By the end of this course, you’ll have hands-on experience competing in chess through practical scenarios and puzzles. Whether you're a casual player or an aspiring competitor, mastering chess will boost your strategic thinking, decision-making, and overall game performance."
            ],
            rus: [
                "Не знаете, как правильно анализировать шахматные позиции? В этом курсе вы изучите основы шахмат — древнейшую игру, почитаемую гроссмейстерами по всему миру. Вы научитесь разбирать дебюты, тактические приемы и общую стратегию игры.",
                "Начнем с основ: освоение правил, понимание движения фигур и распознавание типовых комбинаций. Затем перейдем к продвинутым темам, таким как сложные тактические комбинации, эндшпиль и планирование ходов для перехвата инициативы у соперника.",
                "После прохождения курса вы получите практический опыт игры в шахматы через реальные ситуации и тренировочные задачи. Независимо от того, играете ли вы для удовольствия или стремитесь участвовать в турнирах, владение шахматной стратегией улучшит ваше логическое мышление, способность принимать решения и общий уровень игры."
            ]
        }
    },
    {
        svgCode: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_6257_1606)">
            <mask id="mask0_6257_1606" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="100"
                height="100">
                <path d="M100 0H0V100H100V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_6257_1606)">
                <path
                    d="M100 48.7035C100 42.0789 91.7042 35.8008 78.985 31.9076C81.92 18.9438 80.6154 8.62993 74.8675 5.32785C73.5425 4.55331 71.9933 4.18639 70.3017 4.18639V8.73185C71.2392 8.73185 71.9933 8.91531 72.6254 9.26181C75.3975 10.8517 76.6 16.9055 75.6625 24.6919C75.4383 26.6079 75.0712 28.6258 74.6229 30.6846C70.6279 29.7062 66.2658 28.952 61.6796 28.4628C58.9279 24.6919 56.0742 21.2675 53.2 18.2712C59.845 12.0951 66.0825 8.71147 70.3221 8.71147V4.16602C64.7167 4.16602 57.3787 8.16114 49.9592 15.0914C42.5396 8.20189 35.2018 4.24756 29.5964 4.24756V8.79302C33.8157 8.79302 40.0734 12.1562 46.7183 18.2916C43.8646 21.2879 41.011 24.6919 38.3 28.4628C33.6935 28.952 29.3314 29.7062 25.3363 30.7049C24.8675 28.6666 24.521 26.6895 24.2764 24.7938C23.3184 17.0074 24.5006 10.9536 27.2523 9.34335C27.8638 8.97643 28.6588 8.81339 29.5964 8.81339V4.26793C27.8842 4.26793 26.3351 4.63485 24.9898 5.40939C19.2621 8.71147 17.978 19.005 20.9335 31.9279C8.25521 35.8415 0 42.0993 0 48.7035C0 55.3277 8.29596 61.606 21.0151 65.4989C18.0799 78.4627 19.3844 88.7768 25.1325 92.0789C26.4574 92.8535 28.0065 93.2202 29.7187 93.2202C35.3241 93.2202 42.6621 89.2252 50.0817 82.2948C57.5008 89.1843 64.8392 93.1385 70.4442 93.1385C72.1567 93.1385 73.7058 92.7718 75.0508 91.9973C80.7787 88.6952 82.0629 78.4018 79.1071 65.4785C91.745 61.5856 100 55.3077 100 48.7035ZM73.4612 35.1077C72.7071 37.7371 71.7692 40.4481 70.7092 43.1589C69.8737 41.5284 68.9971 39.8978 68.0392 38.2671C67.1017 36.6365 66.1029 35.0466 65.1042 33.4974C67.9983 33.9255 70.7908 34.4555 73.4612 35.1077ZM64.1254 56.816C62.5358 59.5677 60.905 62.1764 59.2133 64.6023C56.1762 64.8673 53.0983 65.0098 50 65.0098C46.9221 65.0098 43.8442 64.8673 40.8275 64.6227C39.1357 62.1968 37.4847 59.6085 35.8948 56.8768C34.3457 54.2068 32.9392 51.496 31.6551 48.7643C32.9189 46.0331 34.3457 43.3018 35.8745 40.6316C37.4643 37.8798 39.095 35.2708 40.7868 32.8452C43.8237 32.5802 46.9017 32.4375 50 32.4375C53.0779 32.4375 56.1558 32.5802 59.1725 32.8248C60.8642 35.2504 62.5154 37.8391 64.105 40.5704C65.6542 43.2406 67.0608 45.9514 68.345 48.6831C67.0608 51.4143 65.6542 54.1456 64.1254 56.816ZM70.7092 54.166C71.81 56.8973 72.7475 59.6285 73.5221 62.2785C70.8521 62.9306 68.0392 63.481 65.1242 63.9093C66.1229 62.3398 67.1221 60.7293 68.0596 59.0785C68.9971 57.4477 69.8737 55.7968 70.7092 54.166ZM50.0408 75.9148C48.145 73.9581 46.2496 71.7773 44.3742 69.3923C46.2087 69.4739 48.0842 69.5348 49.9796 69.5348C51.8958 69.5348 53.7912 69.4943 55.6462 69.3923C53.8117 71.7773 51.9158 73.9581 50.0408 75.9148ZM34.8757 63.9093C31.9812 63.481 29.1887 62.951 26.5185 62.2989C27.2727 59.6693 28.2103 56.9585 29.2703 54.2477C30.106 55.8781 30.9825 57.5089 31.9405 59.1393C32.8985 60.7702 33.8769 62.3602 34.8757 63.9093ZM49.9387 21.4917C51.8346 23.4485 53.73 25.6295 55.6054 28.0143C53.7708 27.9328 51.8958 27.8717 50 27.8717C48.0842 27.8717 46.1883 27.9124 44.3333 28.0143C46.1679 25.6295 48.0637 23.4485 49.9387 21.4917ZM34.8553 33.4974C33.8565 35.0669 32.8577 36.6772 31.9201 38.3283C30.9825 39.9589 30.106 41.5896 29.2703 43.2202C28.1696 40.4889 27.232 37.7576 26.4574 35.1077C29.1276 34.4758 31.9405 33.9255 34.8553 33.4974ZM16.4085 59.0173C9.19283 55.9393 4.52508 51.9035 4.52508 48.7035C4.52508 45.5031 9.19283 41.4469 16.4085 38.3894C18.1615 37.6352 20.0775 36.9626 22.0546 36.3307C23.2165 40.3258 24.7452 44.4839 26.6408 48.7439C24.7656 52.9839 23.2572 57.1214 22.1158 61.0964C20.0978 60.4643 18.1818 59.7714 16.4085 59.0173ZM27.3746 88.1448C24.6025 86.5548 23.3999 80.501 24.3375 72.7148C24.5617 70.7985 24.9287 68.7806 25.3771 66.7223C29.3722 67.7006 33.7342 68.4548 38.3204 68.9439C41.0722 72.7148 43.9258 76.1389 46.8 79.1356C40.1549 85.3114 33.9177 88.6952 29.678 88.6952C28.7607 88.6748 27.9861 88.4914 27.3746 88.1448ZM75.7237 72.6127C76.6817 80.3993 75.4996 86.4531 72.7475 88.0631C72.1362 88.4302 71.3412 88.5931 70.4037 88.5931C66.1842 88.5931 59.9267 85.2302 53.2817 79.0948C56.1354 76.0985 58.9892 72.6943 61.7 68.9235C66.3067 68.4343 70.6687 67.6802 74.6637 66.6814C75.1325 68.7402 75.4996 70.7173 75.7237 72.6127ZM83.5712 59.0173C81.8183 59.7714 79.9021 60.4439 77.925 61.076C76.7633 57.081 75.2346 52.9227 73.3387 48.6627C75.2142 44.4227 76.7225 40.2851 77.8637 36.3103C79.8817 36.9422 81.7979 37.6352 83.5917 38.3894C90.8071 41.4673 95.475 45.5031 95.475 48.7035C95.4546 51.9035 90.7867 55.9598 83.5712 59.0173Z"
                    fill="var(--svgColorMobileDark)" />
                <path
                    d="M49.9791 58.019C55.1237 58.019 59.2941 53.8486 59.2941 48.704C59.2941 43.559 55.1237 39.3887 49.9791 39.3887C44.8346 39.3887 40.6641 43.559 40.6641 48.704C40.6641 53.8486 44.8346 58.019 49.9791 58.019Z"
                    fill="var(--svgColorMobileDark)" />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_6257_1606">
                <rect width="100" height="100" fill="white" />
            </clipPath>
        </defs>
    </svg>`,
        title: {
            rus: "React",
            eng: "Master React"
        },
        complexity: 3,
        descriptionUp: {
            rus: "Изучите React и создавайте мощные интерактивные веб-приложения. Разберитесь в компонентах, состояниях, хуках и работе с API, чтобы уверенно разрабатывать современные проекты.",
            eng: "Learn React and build powerful interactive web applications. Understand components, state, hooks, and API integration to confidently develop modern projects."
        },
        descriptionDown: {
            rus: "Начните путь в мир фронтенд-разработки с React уже сегодня!",
            eng: "Start your journey into frontend development with React today!"
        },
        cost: 25000,
        popularity: 400,
        MMR: 4.9,
        releasesData: "10.06.2025",
        isProfession: true,
        who: {
            subtitles: {
                rus: [
                    "Фронтенд-разработчикам",
                    "Тем, кто хочет сменить профессию",
                    "Бэкенд-разработчикам",
                    "Дизайнерам и верстальщикам"
                ],
                eng: [
                    "Frontend developers",
                    "Those looking for a career change",
                    "Backend developers",
                    "Designers and layout specialists"
                ]
            },
            whoText: {
                rus: [
                    "Если вы уже знакомы с HTML, CSS и JavaScript, React поможет вам вывести ваши навыки на новый уровень и создавать современные веб-приложения.",
                    "Если вы хотите войти в сферу IT и освоить востребованный фреймворк, этот курс станет отличной отправной точкой.",
                    "Бэкенд-разработчики смогут глубже разобраться в клиентской части приложений и взаимодействии фронтенда с сервером.",
                    "Дизайнеры и верстальщики смогут оживлять свои макеты, добавляя динамику и интерактивность с помощью React."
                ],
                eng: [
                    "If you are already familiar with HTML, CSS, and JavaScript, React will take your skills to the next level and enable you to build modern web applications.",
                    "If you're looking to break into IT and learn a high-demand framework, this course is a great starting point.",
                    "Backend developers can deepen their understanding of the client side and frontend-server interactions.",
                    "Designers and layout specialists can bring their static designs to life with React’s dynamic and interactive capabilities."
                ]
            }
        },
        whatNeed: {
            subtitles: {
                rus: [
                    "Базовые знания JavaScript",
                    "Желание учиться",
                    "Навыки работы с браузером"
                ],
                eng: [
                    "Basic JavaScript knowledge",
                    "Willingness to learn",
                    "Basic browser skills"
                ]
            },
            whatNeedText: {
                rus: [
                    "Для успешного прохождения курса желательно знать основы JavaScript, включая переменные, функции и массивы.",
                    "Готовность изучать новый инструмент, разбираться в коде и практиковаться — ключевые факторы успешного освоения React.",
                    "Навыки работы с браузерными инструментами разработчика помогут вам быстрее понимать структуру компонентов и отлаживать код."
                ],
                eng: [
                    "To successfully complete the course, it is recommended to have a basic understanding of JavaScript, including variables, functions, and arrays.",
                    "A willingness to learn, explore new tools, and practice coding is key to mastering React.",
                    "Familiarity with browser developer tools will help you better understand component structure and debug your code."
                ]
            }
        },
        fullText: {
            rus: [
                "Изучите React — один из самых популярных фреймворков для создания интерфейсов. Научитесь работать с компонентами, управлять состоянием и эффективно взаимодействовать с сервером.",
                "Освойте ключевые концепции React, такие как хуки, маршрутизация, управление состоянием с Redux и взаимодействие с API.",
                "К концу курса вы сможете создавать масштабируемые, динамичные и удобные веб-приложения, готовые для работы в продакшене."
            ],
            eng: [
                "Learn React, one of the most popular frameworks for building user interfaces. Master components, state management, and seamless server interaction.",
                "Understand key React concepts such as hooks, routing, state management with Redux, and API integration.",
                "By the end of the course, you’ll be able to build scalable, dynamic, and user-friendly web applications ready for production."
            ]
        },
        label: {
            rus: [
                "Фронтенд",
                "Востребованный навык",
                "Современные технологии"
            ],
            eng: [
                "Frontend",
                "High-demand skill",
                "Modern technologies"
            ]
        },
        freeLesson: "ссылка на урок",
        planOfLessons: {
            rus: [
                {
                    duration: "2 недели",
                    title: "Введение в React: компоненты и JSX"
                },
                {
                    duration: "3 недели",
                    title: "Управление состоянием и обработка событий"
                },
                {
                    duration: "2 недели",
                    title: "Работа с хуками и контекстом"
                },
                {
                    duration: "3 недели",
                    title: "Маршрутизация в React: React Router"
                },
                {
                    duration: "3 недели",
                    title: "Работа с API и управление данными"
                },
                {
                    duration: "3 недели",
                    title: "Оптимизация, производительность и деплой"
                }
            ],
            eng: [
                {
                    duration: "2 weeks",
                    title: "Introduction to React: Components and JSX"
                },
                {
                    duration: "3 weeks",
                    title: "State management and event handling"
                },
                {
                    duration: "2 weeks",
                    title: "Working with hooks and context"
                },
                {
                    duration: "3 weeks",
                    title: "Routing in React: React Router"
                },
                {
                    duration: "3 weeks",
                    title: "API integration and data management"
                },
                {
                    duration: "3 weeks",
                    title: "Optimization, performance, and deployment"
                }
            ]
        },
        descriptionMobile: {
            eng: [
                "Struggling to build dynamic and interactive web applications? This course will guide you through React, the popular JavaScript library used by developers worldwide. You’ll learn how to create reusable components, manage state effectively, and design responsive user interfaces.",
                "We’ll start with the basics: understanding JSX, component lifecycle, and event handling. Then, you'll dive into advanced topics such as hooks, the Context API, performance optimization, and integrating with backend services using modern tools and APIs.",
                "By the end of this course, you’ll have hands-on experience developing scalable applications with React. Whether you're a beginner or an experienced developer, mastering React will empower you to build modern, high-performing web apps and elevate your front-end skills."
            ],
            rus: [
                "Не знаете, как создать динамичные и интерактивные веб-приложения? В этом курсе вы изучите React — популярную JavaScript библиотеку, используемую разработчиками по всему миру. Вы научитесь создавать переиспользуемые компоненты, эффективно управлять состоянием и разрабатывать адаптивные пользовательские интерфейсы.",
                "Начнем с основ: освоение JSX, жизненного цикла компонентов и обработки событий. Затем перейдем к продвинутым темам, таким как хуки, Context API, оптимизация производительности и интеграция с бэкендом через современные инструменты и API.",
                "После прохождения курса вы получите практический опыт разработки масштабируемых приложений с использованием React. Независимо от того, начинающий вы разработчик или уже опытный специалист, владение React позволит создавать современные, высокопроизводительные веб-приложения и значительно повысить ваши навыки во фронтенде."
            ]
        }
    },
    {
        svgCode: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M60.976 83.832C59.048 83.832 57.488 82.2643 57.488 80.3262C57.488 78.3881 59.048 76.8242 60.976 76.8242C62.904 76.8242 64.464 78.3881 64.464 80.3262C64.464 82.2643 62.904 83.832 60.976 83.832ZM50.288 90C70.6 90 69.332 81.1465 69.332 81.1465L69.308 71.9746H49.928V69.2207H77.004C77.004 69.2207 90 70.7045 90 50.1055C90 29.5063 78.66 30.2324 78.66 30.2324H71.8879V39.7949C71.8879 39.7949 72.252 51.1934 60.728 51.1934H41.504C41.504 51.1934 30.704 51.022 30.704 61.6895V79.3242C30.704 79.3242 29.064 90 50.288 90ZM39.028 16.168C40.956 16.168 42.512 17.7357 42.512 19.6738C42.512 21.6119 40.956 23.1758 39.028 23.1758C37.1 23.1758 35.54 21.6119 35.54 19.6738C35.54 17.7357 37.1 16.168 39.028 16.168ZM49.712 10C29.404 10 30.672 18.8535 30.672 18.8535L30.696 28.0254H50.0761V30.7793H22.996C22.996 30.7793 10 29.2955 10 49.8945C10 70.4937 21.344 69.7676 21.344 69.7676H28.1121V60.2051C28.1121 60.2051 27.748 48.8066 39.276 48.8066H58.496C58.496 48.8066 69.296 48.978 69.296 38.3105V20.6758C69.296 20.6758 70.936 10 49.712 10Z"
            fill="var(--svgColor)" />
    </svg>`,
        title: {
            rus: "Python",
            eng: "Master Python"
        },
        complexity: 2,
        descriptionUp: {
            rus: "Освойте Python — универсальный язык программирования для веб-разработки, анализа данных, автоматизации и искусственного интеллекта. Практика, реальные проекты и лучшие методики обучения.",
            eng: "Master Python — a universal programming language for web development, data analysis, automation, and AI. Hands-on practice, real-world projects, and best learning techniques."
        },
        descriptionDown: {
            rus: "Начните изучать Python уже сегодня и откройте для себя мир программирования!",
            eng: "Start learning Python today and unlock the world of programming!"
        },
        cost: 22000,
        popularity: 500,
        MMR: 4.9,
        releasesData: "15.07.2025",
        isProfession: true,
        who: {
            subtitles: {
                rus: [
                    "Новичкам в программировании",
                    "Тем, кто хочет сменить профессию",
                    "Аналитикам данных",
                    "Разработчикам и IT-специалистам"
                ],
                eng: [
                    "Beginners in programming",
                    "Those looking for a career change",
                    "Data analysts",
                    "Developers and IT professionals"
                ]
            },
            whoText: {
                rus: [
                    "Если вы никогда не программировали, Python — идеальный старт. Он прост в освоении, но невероятно мощный.",
                    "Если хотите сменить профессию и войти в мир IT, Python поможет освоить востребованные навыки.",
                    "Python — один из ключевых инструментов в анализе данных. Научитесь работать с массивами, таблицами и визуализацией данных.",
                    "Разработчики смогут расширить свой стек технологий, освоив язык, который активно используется в вебе, науке и автоматизации."
                ],
                eng: [
                    "If you've never coded before, Python is the perfect starting point. It's easy to learn but incredibly powerful.",
                    "Looking for a career change? Python equips you with high-demand IT skills.",
                    "Python is a key tool in data analysis. Learn how to work with arrays, tables, and data visualization.",
                    "Developers can expand their tech stack with a language widely used in web, science, and automation."
                ]
            }
        },
        whatNeed: {
            subtitles: {
                rus: [
                    "Логическое мышление",
                    "Желание учиться",
                    "Базовые навыки работы с компьютером"
                ],
                eng: [
                    "Logical thinking",
                    "Willingness to learn",
                    "Basic computer skills"
                ]
            },
            whatNeedText: {
                rus: [
                    "Для успешного прохождения курса не требуется опыт программирования — только умение анализировать и решать задачи.",
                    "Готовность разбираться в новом, экспериментировать и применять знания на практике поможет достичь успеха.",
                    "Навыки работы с файлами, браузером и текстовыми редакторами помогут быстрее адаптироваться к программированию."
                ],
                eng: [
                    "No programming experience needed — just the ability to analyze and solve problems.",
                    "A willingness to explore, experiment, and apply knowledge will lead to success.",
                    "Basic skills in handling files, browsers, and text editors will help you adapt to coding faster."
                ]
            }
        },
        fullText: {
            rus: [
                "Python — один из самых популярных языков программирования, используемый в разработке, анализе данных, автоматизации и искусственном интеллекте.",
                "На курсе вы изучите основы синтаксиса, работу с переменными, циклами, функциями и объектами. Освоите работу с библиотеками, научитесь автоматизировать задачи и разрабатывать приложения.",
                "К концу курса вы сможете уверенно программировать на Python, разрабатывать собственные проекты и решать реальные задачи в разных сферах IT."
            ],
            eng: [
                "Python is one of the most popular programming languages used in development, data analysis, automation, and artificial intelligence.",
                "In this course, you'll learn syntax basics, work with variables, loops, functions, and objects. You'll master libraries, automate tasks, and build applications.",
                "By the end of the course, you'll confidently code in Python, develop your own projects, and solve real-world IT challenges."
            ]
        },
        label: {
            rus: [
                "Программирование",
                "Востребованный навык",
                "Гибкий инструмент"
            ],
            eng: [
                "Programming",
                "High-demand skill",
                "Versatile tool"
            ]
        },
        freeLesson: "ссылка на урок",
        planOfLessons: {
            rus: [
                {
                    duration: "2 недели",
                    title: "Основы Python: переменные, типы данных, операторы"
                },
                {
                    duration: "3 недели",
                    title: "Функции, циклы и работа с файлами"
                },
                {
                    duration: "3 недели",
                    title: "ООП в Python: классы и объекты"
                },
                {
                    duration: "2 недели",
                    title: "Работа с библиотеками и API"
                },
                {
                    duration: "3 недели",
                    title: "Автоматизация и написание скриптов"
                },
                {
                    duration: "3 недели",
                    title: "Финальный проект: разработка приложения"
                }
            ],
            eng: [
                {
                    duration: "2 weeks",
                    title: "Python basics: variables, data types, operators"
                },
                {
                    duration: "3 weeks",
                    title: "Functions, loops, and file handling"
                },
                {
                    duration: "3 weeks",
                    title: "OOP in Python: classes and objects"
                },
                {
                    duration: "2 weeks",
                    title: "Working with libraries and APIs"
                },
                {
                    duration: "3 weeks",
                    title: "Automation and scripting"
                },
                {
                    duration: "3 weeks",
                    title: "Final project: building an application"
                }
            ]
        },
        descriptionMobile: {
            eng: [
                "Struggling to get started with programming? This course will introduce you to Python, one of the most versatile and beginner-friendly languages used by developers worldwide. You’ll learn the fundamentals of syntax, data types, and control structures to build a solid foundation.",
                "We’ll begin with the basics: writing simple scripts, understanding variables, loops, and functions. Then, you'll explore advanced topics such as object-oriented programming, working with libraries, and automating tasks with Python’s extensive ecosystem.",
                "By the end of this course, you’ll have hands-on experience creating projects that solve real-world problems. Whether you're a complete beginner or looking to expand your coding skills, mastering Python will open doors to numerous opportunities in web development, data analysis, automation, and more."
            ],
            rus: [
                "Не знаете, с чего начать программировать? Этот курс познакомит вас с Python — одним из самых универсальных и доступных языков, используемых разработчиками по всему миру. Вы изучите основы синтаксиса, типы данных и управляющие конструкции, чтобы заложить прочный фундамент.",
                "Начнем с простых скриптов: работа с переменными, циклами, функциями и базовыми операциями. Затем перейдем к продвинутым темам, таким как объектно-ориентированное программирование, использование библиотек и автоматизация задач с помощью мощного инструментария Python.",
                "После завершения курса вы получите практический опыт создания проектов, решающих реальные задачи. Независимо от того, новичок вы или хотите расширить свои навыки программирования, владение Python откроет перед вами множество возможностей в веб-разработке, анализе данных, автоматизации и не только."
            ]
        }
    },
    {
        svgCode: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M50 9C41.8912 9 33.964 11.4046 27.2216 15.9097C20.4792 20.4149 15.2242 26.8182 12.121 34.3099C9.01778 41.8015 8.20583 50.0456 9.78781 57.9985C11.3698 65.952 15.2747 73.2572 21.0086 78.9915C26.7426 84.7254 34.0481 88.6301 42.0014 90.2122C49.9544 91.7943 58.1985 90.982 65.6902 87.8788C73.1819 84.7756 79.5851 79.521 84.0905 72.7785C88.5954 66.0361 91 58.1092 91 50C91 39.1261 86.6801 28.6976 78.9916 21.0086C71.3026 13.3196 60.8737 9 50 9ZM70.1413 37.085L63.4275 68.8087C62.915 71.0637 61.5825 71.5762 59.6863 70.5512L49.4363 62.9662L44.3113 67.7324C44.0699 68.0476 43.7598 68.3039 43.4046 68.4817C43.0495 68.659 42.6584 68.7533 42.2612 68.7574L42.9788 58.5075L61.9412 41.3387C62.8125 40.6212 61.9413 40.2112 60.7113 40.9287L37.4438 55.535L27.1937 52.3575C24.99 51.6912 24.9387 50.1537 27.655 49.1287L67.1688 33.7537C69.1163 33.19 70.7563 34.3175 70.1413 37.085Z"
            fill="var(--svgColor)" />
    </svg>`,
        title: {
            rus: "Telegram-боты на Aiogram",
            eng: "Telegram Bots with Aiogram"
        },
        complexity: 2,
        descriptionUp: {
            rus: "Научитесь создавать Telegram-ботов с помощью Aiogram — мощного фреймворка для Python. Освойте обработку сообщений, кнопки, API и базы данных, чтобы автоматизировать задачи и разрабатывать интерактивные сервисы.",
            eng: "Learn how to build Telegram bots using Aiogram — a powerful Python framework. Master message handling, buttons, APIs, and databases to automate tasks and create interactive services."
        },
        descriptionDown: {
            rus: "Начните разрабатывать умных Telegram-ботов уже сегодня!",
            eng: "Start developing smart Telegram bots today!"
        },
        cost: 18000,
        popularity: 350,
        MMR: 4.7,
        releasesData: "10.08.2025",
        isProfession: false,
        who: {
            subtitles: {
                rus: [
                    "Новичкам в программировании",
                    "Разработчикам, изучающим Python",
                    "Предпринимателям и бизнесменам",
                    "Тем, кто хочет автоматизировать задачи"
                ],
                eng: [
                    "Beginners in programming",
                    "Developers learning Python",
                    "Entrepreneurs and business owners",
                    "Those who want to automate tasks"
                ]
            },
            whoText: {
                rus: [
                    "Если вы только начинаете программировать, этот курс поможет вам освоить Python через практические задачи.",
                    "Для разработчиков Python этот курс станет отличной возможностью изучить Aiogram и Telegram API.",
                    "Если вы хотите создать чат-бота для бизнеса, Telegram — один из самых удобных каналов для взаимодействия с клиентами.",
                    "Если вам нужно автоматизировать процессы — например, ответы на частые вопросы или сбор данных — бот может решить эти задачи."
                ],
                eng: [
                    "If you're just starting out in programming, this course will help you learn Python through hands-on projects.",
                    "For Python developers, this course is a great opportunity to master Aiogram and Telegram API.",
                    "If you want to build a chatbot for business, Telegram is one of the most effective communication channels.",
                    "If you need to automate processes like FAQs or data collection, a bot can handle these tasks efficiently."
                ]
            }
        },
        whatNeed: {
            subtitles: {
                rus: [
                    "Базовые знания Python",
                    "Желание учиться",
                    "Телефон или компьютер с Telegram"
                ],
                eng: [
                    "Basic knowledge of Python",
                    "Willingness to learn",
                    "A phone or computer with Telegram"
                ]
            },
            whatNeedText: {
                rus: [
                    "Курс рассчитан на начинающих и продвинутых пользователей Python. Знание основ поможет вам быстрее освоить материал.",
                    "Важно быть готовым изучать новый фреймворк, работать с кодом и тестировать ботов.",
                    "Для практических заданий потребуется установленный Telegram-клиент, чтобы тестировать ботов в реальном времени."
                ],
                eng: [
                    "This course is suitable for beginners and advanced Python users. Knowing the basics will help you progress faster.",
                    "It's important to be ready to learn a new framework, work with code, and test bots.",
                    "You'll need a Telegram client installed on your phone or computer to test your bots in real time."
                ]
            }
        },
        fullText: {
            rus: [
                "Этот курс научит вас создавать Telegram-ботов с нуля, используя Aiogram — асинхронный фреймворк для Python.",
                "Вы освоите обработку команд и сообщений, создание клавиатур, работу с базами данных и взаимодействие с внешними API.",
                "К концу курса у вас будет готовый проект Telegram-бота, а также понимание, как расширять его функционал и использовать в реальных задачах."
            ],
            eng: [
                "This course will teach you how to build Telegram bots from scratch using Aiogram — an asynchronous Python framework.",
                "You will learn how to handle commands and messages, create keyboards, work with databases, and integrate external APIs.",
                "By the end of the course, you'll have a fully functional Telegram bot and the knowledge to expand its features for real-world use."
            ]
        },
        label: {
            rus: [
                "Программирование",
                "Автоматизация",
                "Telegram API"
            ],
            eng: [
                "Programming",
                "Automation",
                "Telegram API"
            ]
        },
        freeLesson: "ссылка на урок",
        planOfLessons: {
            rus: [
                {
                    duration: "2 недели",
                    title: "Основы Telegram API и Aiogram"
                },
                {
                    duration: "3 недели",
                    title: "Обработка сообщений, команд и кнопок"
                },
                {
                    duration: "3 недели",
                    title: "Работа с базами данных (SQLite, PostgreSQL)"
                },
                {
                    duration: "2 недели",
                    title: "Интеграция с внешними API (OpenAI, платежные системы)"
                },
                {
                    duration: "3 недели",
                    title: "Развертывание и поддержка бота"
                }
            ],
            eng: [
                {
                    duration: "2 weeks",
                    title: "Introduction to Telegram API and Aiogram"
                },
                {
                    duration: "3 weeks",
                    title: "Handling messages, commands, and buttons"
                },
                {
                    duration: "3 weeks",
                    title: "Working with databases (SQLite, PostgreSQL)"
                },
                {
                    duration: "2 weeks",
                    title: "Integrating external APIs (OpenAI, payment systems)"
                },
                {
                    duration: "3 weeks",
                    title: "Deploying and maintaining the bot"
                }
            ]
        },
        descriptionMobile: {
            eng: [
                "Struggling to build interactive Telegram bots? This course introduces you to Aiogram, the modern asynchronous framework for developing Telegram bots using Python. Learn how to set up your bot, handle commands, and respond to user messages effectively.",
                "Begin with the basics: configure your bot, manage messages, and implement simple commands. Then, dive into advanced topics such as inline keyboards, state management, webhook integration, and working with external APIs to add powerful functionalities.",
                "By the end of this course, you’ll have hands-on experience creating, deploying, and managing fully functional Telegram bots. Whether for business automation or personal projects, mastering Aiogram will empower you to build smart, responsive bots for any use case."
            ],
            rus: [
                "Не знаете, как создать интерактивного Telegram-бота? Этот курс познакомит вас с Aiogram — современным асинхронным фреймворком для разработки ботов на Python. Вы узнаете, как настроить бота, обрабатывать команды и эффективно реагировать на сообщения пользователей.",
                "Начнем с основ: настройка бота, обработка сообщений и создание простых команд. Затем перейдем к продвинутым темам, таким как создание инлайн-клавиатур, управление состоянием, интеграция webhook и работа с внешними API для расширения функционала ботов.",
                "После прохождения курса вы получите практический опыт создания, развертывания и управления полноценными Telegram-ботами. Будь то автоматизация бизнеса или личные проекты, освоение Aiogram позволит вам создавать умных и отзывчивых ботов для любых задач."
            ]
        }
    },
    {
        svgCode: `
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M87.1085 77.7314L90.9865 55.2774C91.0162 55.0768 90.9826 54.872 90.8905 54.6914C90.8802 54.6646 90.8682 54.6386 90.8545 54.6134C90.8294 54.5656 90.7993 54.5207 90.7645 54.4794C90.6763 54.3475 90.5575 54.2389 90.4182 54.163C90.2788 54.087 90.1232 54.046 89.9645 54.0434H52.4405L51.1705 46.6954C51.0391 45.9247 50.639 45.2254 50.0412 44.7217C49.4433 44.2179 48.6863 43.9422 47.9045 43.9434H41.5265C40.7623 43.9439 40.0296 44.2477 39.4892 44.7881C38.9489 45.3284 38.6451 46.0612 38.6445 46.8254V47.6094C38.6451 48.3736 38.9489 49.1063 39.4892 49.6467C40.0296 50.187 40.7623 50.4908 41.5265 50.4914H49.8005L54.6665 78.6614C54.9467 80.2966 55.8013 81.7781 57.0765 82.8394C56.2767 83.1935 55.6045 83.784 55.1502 84.5315C54.6959 85.279 54.4813 86.1476 54.5352 87.0207C54.5891 87.8937 54.909 88.7294 55.4519 89.4152C55.9947 90.1011 56.7346 90.6044 57.5719 90.8574C58.4092 91.1104 59.3039 91.101 60.1358 90.8306C60.9676 90.5601 61.6967 90.0414 62.2251 89.3443C62.7535 88.6472 63.0558 87.8051 63.0915 86.9311C63.1271 86.0571 62.8944 85.1932 62.4245 84.4554H79.1925C78.7579 85.1336 78.5261 85.9218 78.5245 86.7274C78.5197 87.4208 78.6838 88.105 79.0026 88.7209C79.3214 89.3367 79.7854 89.8657 80.3544 90.2621C80.9234 90.6586 81.5803 90.9105 82.2685 90.9962C82.9566 91.0819 83.6553 90.9988 84.3042 90.754C84.953 90.5093 85.5325 90.1102 85.9927 89.5914C86.4528 89.0725 86.7797 88.4495 86.9451 87.776C87.1105 87.1026 87.1095 86.399 86.9422 85.726C86.7748 85.053 86.4461 84.4309 85.9845 83.9134C86.0626 83.7731 86.1052 83.6159 86.1085 83.4554C86.1085 83.1901 86.0032 82.9358 85.8156 82.7483C85.6281 82.5607 85.3737 82.4554 85.1085 82.4554H61.5425C60.4149 82.4553 59.3209 82.0712 58.4408 81.3663C57.5607 80.6614 56.9469 79.6777 56.7005 78.5774H86.1205C86.241 78.5869 86.3622 78.5726 86.4771 78.5352C86.592 78.4978 86.6984 78.4381 86.7902 78.3595C86.882 78.2809 86.9574 78.185 87.012 78.0772C87.0666 77.9694 87.0994 77.8519 87.1085 77.7314ZM79.0405 61.9494H87.8005L87.1825 65.5374C87.1079 65.5131 87.0307 65.4976 86.9525 65.4914H78.6005L79.0405 61.9494ZM78.3425 67.4914H86.8485L86.2365 71.0354H77.8985L78.3425 67.4914ZM54.6545 65.4914C54.5763 65.4974 54.4991 65.5129 54.4245 65.5374L53.8045 61.9494H62.6205L63.0545 65.4914H54.6545ZM54.7625 67.4914H63.3005L63.7345 71.0354H55.3745L54.7625 67.4914ZM56.3325 76.5774L55.7205 73.0354H63.9785L64.4125 76.5774H56.3325ZM75.1845 76.5774H66.4265L66.0005 73.0354H75.6385L75.1845 76.5774ZM75.8825 71.0374H65.7485L65.3145 67.4934H76.3265L75.8825 71.0374ZM76.5785 65.4934H65.0685L64.6345 61.9514H77.0345L76.5785 65.4934ZM85.2825 76.5774H77.2005L77.6465 73.0374H85.8925L85.2825 76.5774Z"
                fill="var(--svgColorMobileDark)" />
            <path
                d="M46.8787 70.3996H46.1987C46.2889 70.1292 46.3368 69.8465 46.3407 69.5615V66.9996C46.3396 66.2516 46.0419 65.5347 45.5129 65.006C44.9838 64.4773 44.2666 64.1801 43.5187 64.1796H33.1387C34.1628 62.0338 34.5633 59.6435 34.2945 57.2812C34.0257 54.9189 33.0985 52.6796 31.6186 50.8188C30.1387 48.958 28.1656 47.5506 25.9244 46.7569C23.6832 45.9633 21.2641 45.8154 18.943 46.3303C16.6218 46.8451 14.492 48.0018 12.7965 49.6686C11.101 51.3353 9.90802 53.445 9.35358 55.757C8.79915 58.069 8.90559 60.4903 9.66077 62.7447C10.4159 64.9992 11.7895 66.996 13.6247 68.5076C11.1513 70.5355 9.53574 73.4234 9.1017 76.5923C8.66767 79.7612 9.44726 82.977 11.2842 85.5954C13.1212 88.2138 15.8799 90.0412 19.0073 90.7114C22.1348 91.3816 25.4001 90.8452 28.1487 89.2095C28.3568 89.7344 28.7175 90.1847 29.1842 90.5024C29.6509 90.8201 30.2021 90.9905 30.7667 90.9915H46.8787C47.6263 90.9905 48.3429 90.693 48.8716 90.1644C49.4002 89.6358 49.6976 88.9191 49.6987 88.1715V85.6275C49.6976 84.88 49.4002 84.1633 48.8716 83.6347C48.3429 83.1061 47.6263 82.8086 46.8787 82.8075H46.1987C46.2873 82.5375 46.3345 82.2557 46.3387 81.9715V79.4215C46.3345 79.1374 46.2873 78.8556 46.1987 78.5855H46.8807C47.6283 78.5845 48.3449 78.287 48.8736 77.7584C49.4022 77.2298 49.6996 76.5131 49.7007 75.7656V73.2135C49.6981 72.4667 49.3996 71.7512 48.8707 71.2238C48.3419 70.6965 47.6256 70.4001 46.8787 70.3996Z"
                fill="var(--svgColorMobileDark)" />
            <path
                d="M11 78.3053C11 76.1903 11.6272 74.1227 12.8023 72.3641C13.9773 70.6054 15.6475 69.2348 17.6016 68.4254C19.5557 67.616 21.7059 67.4042 23.7803 67.8168C25.8547 68.2294 27.7602 69.248 29.2558 70.7435C30.7514 72.2391 31.7699 74.1446 32.1825 76.219C32.5951 78.2935 32.3834 80.4437 31.574 82.3977C30.7646 84.3518 29.3939 86.022 27.6353 87.1971C25.8766 88.3721 23.8091 88.9993 21.694 88.9993C18.8589 88.9956 16.141 87.8678 14.1363 85.863C12.1316 83.8583 11.0037 81.1404 11 78.3053Z"
                fill="var(--svgColorMobileDark2)" />
            <path
                d="M47.7003 85.6288V88.1808C47.6998 88.3981 47.6133 88.6064 47.4596 88.76C47.3059 88.9137 47.0977 89.0002 46.8803 89.0008H30.7643C30.5467 89.0008 30.3379 88.9144 30.1838 88.7607C30.0297 88.607 29.9429 88.3984 29.9423 88.1808C29.9359 88.1129 29.9225 88.0459 29.9023 87.9808C30.9616 87.0741 31.8649 85.9999 32.5763 84.8008H46.8803C46.9886 84.801 47.0958 84.8227 47.1957 84.8645C47.2956 84.9063 47.3862 84.9674 47.4624 85.0444C47.5386 85.1213 47.5989 85.2125 47.6397 85.3128C47.6805 85.4131 47.7011 85.5205 47.7003 85.6288Z"
                fill="var(--svgColorMobileDark2)" />
            <path
                d="M21.6947 69.4004C19.9355 69.402 18.2163 69.925 16.7542 70.9033C15.2922 71.8816 14.153 73.2714 13.4805 74.897C12.808 76.5225 12.6325 78.311 12.9761 80.0363C13.3196 81.7616 14.1669 83.3463 15.4109 84.5902C16.6548 85.8342 18.2395 86.6814 19.9648 87.025C21.6901 87.3686 23.4785 87.1931 25.1041 86.5206C26.7297 85.8481 28.1194 84.7089 29.0978 83.2468C30.0761 81.7848 30.5991 80.0656 30.6007 78.3064C30.6002 75.9445 29.6617 73.6796 27.9916 72.0095C26.3215 70.3394 24.0565 69.4009 21.6947 69.4004Z"
                fill="var(--svgColorMobileDark)" />
            <path
                d="M21.6947 85.2003C20.3306 85.1987 18.9975 84.7927 17.8641 84.0336C16.7307 83.2745 15.8478 82.1964 15.3271 80.9356C14.8063 79.6748 14.6711 78.2879 14.9385 76.9502C15.2059 75.6125 15.8639 74.3842 16.8293 73.4204C17.7947 72.4567 19.0242 71.8008 20.3623 71.5358C21.7005 71.2707 23.0871 71.4084 24.3471 71.9313C25.607 72.4542 26.6835 73.339 27.4407 74.4737C28.1978 75.6084 28.6015 76.9422 28.6007 78.3063C28.5975 80.1358 27.8685 81.8893 26.5737 83.1818C25.2789 84.4744 23.5242 85.2003 21.6947 85.2003Z"
                fill="var(--svgColorMobileDark2)" />
            <path
                d="M33.5469 82.7996C34.0603 81.4571 34.3397 80.0365 34.3729 78.5996H43.5149C43.6227 78.5993 43.7296 78.6204 43.8293 78.6615C43.929 78.7025 44.0196 78.7629 44.096 78.8391C44.1724 78.9152 44.2329 79.0057 44.2743 79.1053C44.3156 79.205 44.3369 79.3118 44.3369 79.4196V81.9696C44.3369 82.0775 44.3156 82.1843 44.2743 82.2839C44.2329 82.3835 44.1724 82.474 44.096 82.5502C44.0196 82.6263 43.929 82.6867 43.8293 82.7278C43.7296 82.7689 43.6227 82.7899 43.5149 82.7896C43.4889 82.7896 43.4649 82.8036 43.4389 82.8056L33.5469 82.7996Z"
                fill="var(--svgColorMobileDark2)" />
            <path
                d="M22.0535 77.3017H21.3315C21.1119 77.3017 20.9013 77.2145 20.746 77.0592C20.5907 76.9039 20.5035 76.6933 20.5035 76.4737C20.5035 76.2541 20.5907 76.0435 20.746 75.8882C20.9013 75.7329 21.1119 75.6457 21.3315 75.6457H23.4655C23.7307 75.6457 23.985 75.5403 24.1726 75.3528C24.3601 75.1653 24.4655 74.9109 24.4655 74.6457C24.4655 74.3805 24.3601 74.1261 24.1726 73.9386C23.985 73.7511 23.7307 73.6457 23.4655 73.6457H22.6955V72.8457C22.6955 72.5805 22.5901 72.3261 22.4026 72.1386C22.215 71.9511 21.9607 71.8457 21.6955 71.8457C21.4303 71.8457 21.1759 71.9511 20.9884 72.1386C20.8008 72.3261 20.6955 72.5805 20.6955 72.8457V73.7217C20.0167 73.8757 19.4186 74.2749 19.0161 74.8428C18.6136 75.4106 18.435 76.1072 18.5146 76.7987C18.5942 77.4901 18.9264 78.1279 19.4473 78.5895C19.9683 79.0511 20.6414 79.304 21.3375 79.2997H22.0615C22.2811 79.2997 22.4917 79.3869 22.647 79.5422C22.8022 79.6975 22.8895 79.9081 22.8895 80.1277C22.8895 80.3473 22.8022 80.5579 22.647 80.7132C22.4917 80.8685 22.2811 80.9557 22.0615 80.9557H19.9255C19.6603 80.9557 19.4059 81.0611 19.2184 81.2486C19.0308 81.4361 18.9255 81.6905 18.9255 81.9557C18.9255 82.2209 19.0308 82.4753 19.2184 82.6628C19.4059 82.8503 19.6603 82.9557 19.9255 82.9557H20.6955V83.7557C20.6955 84.0209 20.8008 84.2753 20.9884 84.4628C21.1759 84.6503 21.4303 84.7557 21.6955 84.7557C21.9607 84.7557 22.215 84.6503 22.4026 84.4628C22.5901 84.2753 22.6955 84.0209 22.6955 83.7557V82.8797C23.3743 82.7257 23.9723 82.3265 24.3748 81.7586C24.7773 81.1908 24.9559 80.4942 24.8763 79.8027C24.7967 79.1113 24.4646 78.4735 23.9436 78.0119C23.4226 77.5503 22.7495 77.2974 22.0535 77.3017Z"
                fill="var(--svgColorMobileDark)" />
            <path
                d="M11 58.7386C10.9948 56.9101 11.4584 55.1109 12.3466 53.5128C13.2348 51.9146 14.5179 50.5708 16.0734 49.6098C17.6289 48.6489 19.4048 48.1027 21.2315 48.0237C23.0582 47.9446 24.8747 48.3352 26.5074 49.1582C28.1402 49.9812 29.5346 51.209 30.5576 52.7245C31.5806 54.2399 32.1979 55.9924 32.3506 57.8144C32.5034 59.6364 32.1864 61.4672 31.43 63.1318C30.6736 64.7964 29.503 66.2392 28.03 67.3226C26.1066 66.2026 23.9207 65.6126 21.695 65.6126C19.4694 65.6126 17.2834 66.2026 15.36 67.3226C14.0103 66.3346 12.9122 65.0427 12.1547 63.5514C11.3972 62.06 11.0016 60.4112 11 58.7386Z"
                fill="var(--svgColorMobileDark2)" />
            <path
                d="M33.9482 32.7614C35.0679 32.7577 36.1684 32.4693 37.146 31.9231C38.1235 31.377 38.9461 30.5911 39.5362 29.6394L52.7022 35.1254C52.4752 36.1877 52.5135 37.2897 52.8138 38.3337C53.1142 39.3777 53.6672 40.3316 54.4239 41.1111C55.1807 41.8905 56.1179 42.4713 57.1526 42.8023C58.1874 43.1332 59.2877 43.204 60.3563 43.0084C61.4249 42.8128 62.4288 42.3569 63.2793 41.6809C64.1297 41.0049 64.8004 40.1298 65.2321 39.1329C65.6637 38.1359 65.843 37.048 65.7541 35.9653C65.6651 34.8826 65.3107 33.8385 64.7222 32.9254L79.8642 20.3994C81.1052 21.6036 82.7559 22.2937 84.4848 22.3311C86.2137 22.3686 87.8927 21.7505 89.1847 20.6011C90.4767 19.4516 91.286 17.8559 91.4501 16.1345C91.6142 14.413 91.1209 12.6931 90.0692 11.3204C89.0176 9.94756 87.4856 9.02346 85.7808 8.73361C84.0759 8.44377 82.3246 8.80965 80.8784 9.75778C79.4322 10.7059 78.3982 12.1661 77.9842 13.8451C77.5701 15.5241 77.8066 17.2975 78.6462 18.8094L63.3822 31.4314C62.6446 30.8027 61.7762 30.3464 60.8402 30.0956C59.9041 29.8448 58.9239 29.8058 57.9709 29.9815C57.0179 30.1571 56.116 30.543 55.3309 31.1111C54.5457 31.6792 53.8971 32.4151 53.4322 33.2654L40.3222 27.7994C40.6634 26.4656 40.579 25.0586 40.0809 23.7752C39.5827 22.4918 38.6957 21.3963 37.544 20.642C36.3923 19.8878 35.0336 19.5126 33.658 19.5689C32.2825 19.6253 30.959 20.1103 29.8728 20.9562C28.7867 21.8021 27.9922 22.9665 27.6007 24.2863C27.2091 25.6062 27.2401 27.0154 27.6893 28.3168C28.1385 29.6181 28.9833 30.7464 30.1056 31.5438C31.2279 32.3411 32.5715 32.7655 33.9482 32.7614Z"
                fill="var(--svgColorMobileDark)" />
            <path
                d="M84.4008 11C85.3106 11 86.1999 11.2698 86.9564 11.7752C87.7129 12.2807 88.3025 12.9991 88.6506 13.8397C88.9988 14.6802 89.0899 15.6051 88.9124 16.4974C88.7349 17.3897 88.2968 18.2094 87.6535 18.8527C87.0102 19.496 86.1905 19.9341 85.2982 20.1116C84.4059 20.2891 83.481 20.198 82.6404 19.8498C81.7999 19.5017 81.0815 18.9121 80.576 18.1556C80.0706 17.3992 79.8008 16.5098 79.8008 15.6C79.8039 14.381 80.2896 13.2128 81.1516 12.3508C82.0136 11.4888 83.1818 11.0032 84.4008 11Z"
                fill="var(--svgColorMobileDark2)" />
            <path
                d="M59.1703 31.8672C60.0801 31.8672 60.9695 32.137 61.7259 32.6424C62.4824 33.1479 63.072 33.8663 63.4202 34.7068C63.7683 35.5474 63.8594 36.4723 63.6819 37.3646C63.5044 38.2569 63.0663 39.0766 62.423 39.7199C61.7797 40.3632 60.96 40.8013 60.0677 40.9788C59.1754 41.1563 58.2505 41.0652 57.41 40.717C56.5694 40.3689 55.851 39.7793 55.3456 39.0228C54.8401 38.2663 54.5703 37.377 54.5703 36.4672C54.5735 35.2482 55.0591 34.08 55.9211 33.218C56.7831 32.356 57.9513 31.8704 59.1703 31.8672Z"
                fill="var(--svgColorMobileDark2)" />
            <path
                d="M33.9477 21.5469C34.8575 21.5469 35.7468 21.8167 36.5033 22.3221C37.2597 22.8276 37.8493 23.546 38.1975 24.3865C38.5457 25.2271 38.6368 26.152 38.4593 27.0443C38.2818 27.9366 37.8437 28.7562 37.2003 29.3996C36.557 30.0429 35.7374 30.481 34.8451 30.6585C33.9528 30.836 33.0279 30.7449 32.1873 30.3967C31.3468 30.0486 30.6284 29.459 30.1229 28.7025C29.6174 27.946 29.3477 27.0567 29.3477 26.1469C29.3508 24.9279 29.8365 23.7597 30.6985 22.8977C31.5604 22.0357 32.7286 21.55 33.9477 21.5469Z"
                fill="var(--svgColorMobileDark2)" />
            <path
                d="M41.5265 48.4914C41.2928 48.4908 41.0687 48.3977 40.9034 48.2324C40.7382 48.0672 40.6451 47.8431 40.6445 47.6094V46.8254C40.6451 46.5916 40.7382 46.3676 40.9034 46.2023C41.0687 46.037 41.2928 45.9439 41.5265 45.9434H47.9045C48.2147 45.9431 48.5149 46.0527 48.7521 46.2525C48.9893 46.4524 49.1481 46.7297 49.2005 47.0354L49.4525 48.4914H41.5265Z"
                fill="var(--svgColorMobileDark2)" />
            <path
                d="M58.8189 88.9991C58.3695 88.9991 57.9302 88.8658 57.5566 88.6162C57.183 88.3665 56.8918 88.0117 56.7198 87.5965C56.5479 87.1814 56.5029 86.7246 56.5905 86.2838C56.6782 85.8431 56.8946 85.4383 57.2123 85.1205C57.5301 84.8028 57.9349 84.5864 58.3756 84.4987C58.8164 84.4111 59.2732 84.4561 59.6883 84.628C60.1035 84.8 60.4583 85.0912 60.708 85.4648C60.9576 85.8385 61.0909 86.2777 61.0909 86.7271C61.0903 87.3295 60.8508 87.9071 60.4248 88.333C59.9989 88.759 59.4213 88.9985 58.8189 88.9991Z"
                fill="var(--svgColorMobileDark2)" />
            <path
                d="M82.7915 88.9991C84.0463 88.9991 85.0635 87.9819 85.0635 86.7271C85.0635 85.4723 84.0463 84.4551 82.7915 84.4551C81.5367 84.4551 80.5195 85.4723 80.5195 86.7271C80.5195 87.9819 81.5367 88.9991 82.7915 88.9991Z"
                fill="var(--svgColorMobileDark2)" />
            <path d="M88.8252 56.0449L88.1512 59.9509H53.4612L52.7852 56.0449H88.8252Z" fill="var(--svgColorMobileDark2)" />
            <path
                d="M43.5157 66.1875C43.6236 66.1872 43.7304 66.2083 43.8301 66.2493C43.9299 66.2904 44.0205 66.3508 44.0968 66.427C44.1732 66.5031 44.2338 66.5936 44.2751 66.6932C44.3164 66.7928 44.3377 66.8996 44.3377 67.0075V69.5555C44.3377 69.6634 44.3165 69.7703 44.2751 69.8701C44.2338 69.9698 44.1733 70.0604 44.097 70.1367C44.0206 70.2131 43.93 70.2736 43.8303 70.3149C43.7306 70.3562 43.6237 70.3775 43.5157 70.3775C43.4897 70.3775 43.4657 70.3915 43.4397 70.3935H31.5997C31.0539 69.7054 30.4379 69.076 29.7617 68.5155C30.5896 67.8347 31.3288 67.0526 31.9617 66.1875H43.5157Z"
                fill="var(--svgColorMobileDark2)" />
            <path
                d="M47.7019 75.7663C47.7013 75.9837 47.6148 76.1919 47.4611 76.3456C47.3075 76.4993 47.0992 76.5858 46.8819 76.5863H43.5179C43.4919 76.5863 43.4679 76.6003 43.4419 76.6023H34.2619C34.0655 75.1345 33.6119 73.7127 32.9219 72.4023H46.8819C47.0992 72.4029 47.3075 72.4894 47.4611 72.6431C47.6148 72.7968 47.7013 73.005 47.7019 73.2223V75.7663Z"
                fill="var(--svgColorMobileDark2)" />
        </svg>`,
        title: {
            rus: "Мастер продаж",
            eng: "Sales Mastery"
        },
        complexity: 3,
        descriptionUp: {
            rus: "Научитесь продавать легко и уверенно! Освойте техники убеждения, работу с возражениями и стратегии построения долгосрочных отношений с клиентами.",
            eng: "Sell with confidence and ease! Master persuasion techniques, handle objections effectively, and build long-term client relationships."
        },
        descriptionDown: {
            rus: "Начните продавать больше уже сегодня!",
            eng: "Start closing more deals today!"
        },
        cost: 25000,
        popularity: 400,
        MMR: 4.9,
        releasesData: "10.07.2025",
        isProfession: true,
        who: {
            subtitles: {
                rus: [
                    "Менеджерам по продажам",
                    "Предпринимателям и фрилансерам",
                    "Маркетологам и консультантам",
                    "Тем, кто хочет освоить искусство продаж"
                ],
                eng: [
                    "Sales managers",
                    "Entrepreneurs and freelancers",
                    "Marketers and consultants",
                    "Those who want to master sales"
                ]
            },
            whoText: {
                rus: [
                    "Если вы работаете в продажах, этот курс поможет вам повысить конверсию и заключать больше сделок.",
                    "Предприниматели и фрилансеры узнают, как привлекать клиентов и продавать свои услуги без навязчивости.",
                    "Маркетологи и консультанты смогут глубже понять психологию покупателя и улучшить свои стратегии.",
                    "Даже если вы только начинаете, курс даст вам пошаговую систему эффективных продаж."
                ],
                eng: [
                    "If you're in sales, this course will help you increase conversion rates and close more deals.",
                    "Entrepreneurs and freelancers will learn how to attract clients and sell their services without being pushy.",
                    "Marketers and consultants will gain a deeper understanding of buyer psychology and improve their strategies.",
                    "Even if you're just starting, this course provides a step-by-step system for effective selling."
                ]
            }
        },
        whatNeed: {
            subtitles: {
                rus: [
                    "Желание развиваться",
                    "Навыки коммуникации",
                    "Готовность применять на практике"
                ],
                eng: [
                    "Desire to grow",
                    "Communication skills",
                    "Willingness to apply knowledge"
                ]
            },
            whatNeedText: {
                rus: [
                    "Этот курс подойдет всем, кто хочет освоить продажи — от новичков до профессионалов.",
                    "Важно уметь слушать, задавать вопросы и находить решения для клиентов.",
                    "Знания без практики не работают, поэтому курс включает реальные кейсы и задания."
                ],
                eng: [
                    "This course is suitable for everyone who wants to master sales, from beginners to professionals.",
                    "It’s important to know how to listen, ask questions, and find solutions for clients.",
                    "Knowledge without action doesn’t work, so this course includes real-world cases and exercises."
                ]
            }
        },
        fullText: {
            rus: [
                "Этот курс научит вас продавать легко, без давления на клиента, используя проверенные техники и психологию влияния.",
                "Вы освоите полный процесс продаж: от первого контакта до закрытия сделки и удержания клиента.",
                "К концу курса вы сможете уверенно работать с любыми клиентами, увеличивать средний чек и строить долгосрочные отношения."
            ],
            eng: [
                "This course will teach you how to sell effortlessly, without pressuring clients, using proven techniques and influence psychology.",
                "You'll master the entire sales process: from first contact to closing deals and retaining customers.",
                "By the end of the course, you'll confidently handle any client, increase average order value, and build long-term relationships."
            ]
        },
        label: {
            rus: [
                "Навыки общения",
                "Психология влияния",
                "Рост дохода"
            ],
            eng: [
                "Communication skills",
                "Influence psychology",
                "Income growth"
            ]
        },
        freeLesson: "ссылка на урок",
        planOfLessons: {
            rus: [
                {
                    duration: "2 недели",
                    title: "Основы психологии продаж"
                },
                {
                    duration: "3 недели",
                    title: "Выявление потребностей клиента"
                },
                {
                    duration: "3 недели",
                    title: "Работа с возражениями и убеждение"
                },
                {
                    duration: "2 недели",
                    title: "Техники закрытия сделок"
                },
                {
                    duration: "2 недели",
                    title: "Построение долгосрочных отношений и повторные продажи"
                }
            ],
            eng: [
                {
                    duration: "2 weeks",
                    title: "Fundamentals of sales psychology"
                },
                {
                    duration: "3 weeks",
                    title: "Identifying customer needs"
                },
                {
                    duration: "3 weeks",
                    title: "Handling objections and persuasion"
                },
                {
                    duration: "2 weeks",
                    title: "Closing techniques"
                },
                {
                    duration: "2 weeks",
                    title: "Building long-term relationships and repeat sales"
                }
            ]
        },
        descriptionMobile: {
            eng: [
                "Struggling to convert leads into loyal customers? This sales course will equip you with proven strategies and techniques to master every stage of the sales process. You’ll learn persuasive communication, uncovering customer needs, and building lasting trust with your prospects.",
                "We’ll start with the fundamentals: understanding buyer psychology, developing effective communication skills, and mastering negotiation. Then, you'll dive into advanced topics such as handling objections, closing techniques, and post-sale relationship management to ensure repeat business.",
                "By the end of this course, you'll have hands-on experience managing sales pipelines and overcoming objections with confidence. Whether you're a beginner or a seasoned professional, mastering these techniques will transform your sales approach and drive success in competitive markets."
            ],
            rus: [
                "Не знаете, как превратить потенциальных клиентов в постоянных покупателей? Этот курс по продажам даст вам проверенные стратегии и техники для успешной работы на всех этапах процесса продаж. Вы изучите методы убеждения, выявления потребностей клиентов и создания прочного доверия с ними.",
                "Начнем с основ: изучения психологии покупателя, развития эффективных коммуникативных навыков и искусства переговоров. Затем перейдем к продвинутым темам, таким как работа с возражениями, техники закрытия сделок и управление отношениями с клиентами после продажи для обеспечения повторных покупок.",
                "После прохождения курса вы получите практический опыт управления воронкой продаж и уверенно справитесь с любыми возражениями. Независимо от того, новичок вы или опытный специалист, освоение этих техник преобразит ваш подход к продажам и поможет добиться успеха на конкурентном рынке."
            ]
        }
    },
    {
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

        title: {
            rus: "Нутрициология",
            eng: "Nutrition Science"
        },
        complexity: 2,
        descriptionUp: {
            rus: "Разберитесь в основах правильного питания и научитесь подбирать рацион для себя и других. Изучите биохимию еды, нутриенты и влияние питания на здоровье.",
            eng: "Understand the fundamentals of healthy eating and learn to create balanced diets for yourself and others. Explore the biochemistry of food, essential nutrients, and the impact of nutrition on health."
        },
        descriptionDown: {
            rus: "Начните путь к осознанному питанию и здоровому образу жизни!",
            eng: "Start your journey to mindful eating and a healthier lifestyle!"
        },
        cost: 18000,
        popularity: 350,
        MMR: 4.7,
        releasesData: "20.05.2025",
        isProfession: false,
        who: {
            subtitles: {
                rus: [
                    "Тем, кто хочет питаться осознанно",
                    "Фитнес-тренерам и спортсменам",
                    "Тем, кто заботится о здоровье"
                ],
                eng: [
                    "Those who want to eat mindfully",
                    "Fitness trainers and athletes",
                    "People who care about their health"
                ]
            },
            whoText: {
                rus: [
                    "Если вы хотите лучше понимать, как питание влияет на организм, этот курс даст вам прочные знания и научный подход к выбору продуктов.",
                    "Фитнес-специалисты смогут глубже разобраться в питании для достижения спортивных целей и составления рационов для клиентов.",
                    "Курс полезен для всех, кто стремится улучшить самочувствие, укрепить здоровье и продлить активную жизнь."
                ],
                eng: [
                    "If you want to understand how nutrition affects the body, this course provides strong knowledge and a scientific approach to choosing food.",
                    "Fitness professionals will gain a deeper understanding of nutrition for achieving athletic goals and creating meal plans for clients.",
                    "This course is useful for anyone looking to improve well-being, enhance health, and maintain an active lifestyle."
                ]
            }
        },
        whatNeed: {
            subtitles: {
                rus: [
                    "",
                    "Желание заботиться о себе",
                    "Интерес к здоровому образу жизни",
                    "Базовые знания о питании"
                ],
                eng: [
                    "",
                    "Desire to take care of yourself",
                    "Interest in a healthy lifestyle",
                    "Basic knowledge of nutrition"
                ]
            },
            whatNeedText: {
                rus: [
                    "Курс подходит для всех уровней подготовки — от новичков до тех, кто уже знаком с основами нутрициологии.",
                    "Важно стремление улучшить свои привычки, изучать новые подходы к питанию и применять их в жизни.",
                    "Если вам интересно, как работает организм и какие продукты приносят пользу, этот курс поможет разобраться в основах.",
                    "Минимальные знания о питательных веществах будут плюсом, но даже если у вас их нет, курс доступен для понимания."
                ],
                eng: [
                    "This course is suitable for all levels, from beginners to those already familiar with basic nutrition.",
                    "A strong desire to improve habits, explore new dietary approaches, and apply them in life is important.",
                    "If you're curious about how the body works and what foods bring benefits, this course will clarify the basics.",
                    "Basic knowledge of nutrients is helpful, but even if you have none, the course is easy to understand."
                ]
            }
        },
        fullText: {
            rus: [
                "Освойте основы нутрициологии и разберитесь в ключевых принципах сбалансированного питания.",
                "Научитесь правильно рассчитывать макро- и микроэлементы, разбираться в составе продуктов и формировать рацион для разных целей.",
                "К концу курса вы сможете осознанно подходить к питанию, понимать влияние продуктов на здоровье и разрабатывать эффективные диеты."
            ],
            eng: [
                "Master the fundamentals of nutrition and understand key principles of a balanced diet.",
                "Learn how to calculate macro- and micronutrients, analyze food composition, and create meal plans for different goals.",
                "By the end of the course, you'll approach nutrition mindfully, understand how food impacts health, and develop effective diets."
            ]
        },
        label: {
            rus: [
                "Здоровье",
                "Осознанное питание",
                "Польза для жизни"
            ],
            eng: [
                "Health",
                "Mindful eating",
                "Life benefits"
            ]
        },
        freeLesson: "ссылка на урок",
        planOfLessons: {
            rus: [
                {
                    duration: "2 недели",
                    title: "Основы питания: макро- и микроэлементы"
                },
                {
                    duration: "2 недели",
                    title: "Биохимия пищи и обмен веществ"
                },
                {
                    duration: "3 недели",
                    title: "Рацион для разных целей: здоровье, спорт, снижение веса"
                },
                {
                    duration: "2 недели",
                    title: "Чтение этикеток и анализ состава продуктов"
                },
                {
                    duration: "2 недели",
                    title: "Мифы о питании и научный подход к еде"
                },
                {
                    duration: "2 недели",
                    title: "Практика: составление меню и расчет нутриентов"
                }
            ],
            eng: [
                {
                    duration: "2 weeks",
                    title: "Nutrition basics: macro- and micronutrients"
                },
                {
                    duration: "2 weeks",
                    title: "Food biochemistry and metabolism"
                },
                {
                    duration: "3 weeks",
                    title: "Meal planning for different goals: health, fitness, weight loss"
                },
                {
                    duration: "2 weeks",
                    title: "Reading labels and analyzing food composition"
                },
                {
                    duration: "2 weeks",
                    title: "Nutrition myths and scientific approach to food"
                },
                {
                    duration: "2 weeks",
                    title: "Practical work: meal planning and nutrient calculation"
                }
            ]
        },
        descriptionMobile: {
            eng: [
                "Struggling to understand what constitutes a healthy diet? This course will guide you through the fundamentals of nutrition, a field essential for optimal health and performance. You’ll learn how to balance macro- and micronutrients, interpret food labels, and design meals that fuel your body.",
                "We’ll start with the basics: understanding the role of proteins, fats, and carbohydrates, and exploring the biochemistry of food. Then, you'll dive into advanced topics such as nutritional deficiencies, the impact of diet on chronic diseases, and strategies for personalized meal planning.",
                "By the end of this course, you’ll have hands-on experience creating balanced diets and developing effective nutritional plans. Whether you’re looking to improve your own health or guide others towards better eating habits, mastering nutrition will empower you to make informed, life-enhancing choices."
            ],
            rus: [
                "Не знаете, что такое здоровое питание и как правильно его соблюдать? В этом курсе вы изучите основы нутрициологии — область, играющую ключевую роль для поддержания здоровья и высокой работоспособности. Вы научитесь балансировать макро- и микронутриенты, читать этикетки и составлять рацион, который будет заряжать вас энергией.",
                "Начнем с основ: понимания роли белков, жиров и углеводов, а также изучения биохимии пищи. Затем перейдем к продвинутым темам, таким как профилактика дефицита витаминов, влияние питания на хронические заболевания и стратегии персонального планирования рациона.",
                "После прохождения курса вы получите практический опыт в составлении сбалансированных диет и разработке эффективных планов питания. Независимо от того, хотите ли вы улучшить свое здоровье или помочь другим сделать правильный выбор, владение нутрициологией даст вам инструменты для принятия обоснованных и жизненно важных решений."
            ]
        }
    },
    {
        svgCode: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M21.7197 20.7789C24.519 23.0531 25.5692 22.8795 30.8256 22.5289L80.3816 19.5533C81.4323 19.5533 80.5583 18.5047 80.2083 18.3305L71.9776 12.3807C70.401 11.1565 68.2996 9.75433 64.2732 10.1051L16.2882 13.6049C14.5382 13.7785 14.1886 14.6534 14.8856 15.3548L21.7197 20.7789ZM24.695 32.3278V84.4693C24.695 87.2713 26.0953 88.32 29.2472 88.1467L83.709 84.9953C86.8623 84.822 87.2136 82.894 87.2136 80.618V28.8265C87.2136 26.5537 86.3396 25.3281 84.409 25.503L27.4958 28.8265C25.3955 29.0029 24.695 30.0535 24.695 32.3278ZM78.4596 35.1248C78.809 36.7012 78.4596 38.2761 76.8803 38.4533L74.2563 38.9761V77.47C71.9776 78.6947 69.877 79.3947 68.1263 79.3947C65.3233 79.3947 64.6213 78.5193 62.5218 75.896L45.3573 48.9499V75.0213L50.7887 76.2467C50.7887 76.2467 50.7887 79.3947 46.4067 79.3947L34.3262 80.0953C33.9753 79.3947 34.3262 77.6467 35.5516 77.296L38.704 76.4227V41.9517L34.327 41.601C33.976 40.0246 34.8502 37.7519 37.3036 37.5754L50.2633 36.7019L68.1263 63.9987V39.851L63.5719 39.3283C63.2223 37.4012 64.6213 36.0019 66.3727 35.8283L78.4596 35.1248ZM12.2592 8.8808L62.1714 5.20525C68.301 4.67955 69.8776 5.03169 73.7303 7.83013L89.6623 19.0283C92.2916 20.9539 93.1676 21.4782 93.1676 23.5774V84.9953C93.1676 88.844 91.7656 91.1207 86.863 91.4687L28.9004 94.9693C25.2204 95.1447 23.4689 94.62 21.5417 92.1687L9.8087 76.946C7.7063 74.144 6.83203 72.0473 6.83203 69.5947V15.0027C6.83203 11.855 8.23456 9.2294 12.2592 8.8808Z"
            fill="var(--svgColorMobileDark)" />
    </svg>`,
        title: {
            rus: "Освойте Notion",
            eng: "Master Notion"
        },
        complexity: 2,
        descriptionUp: {
            rus: "Научитесь эффективно работать в Notion — мощном инструменте для управления задачами, проектами и знаниями. Создавайте базы данных, автоматизируйте рабочие процессы и организуйте информацию так, как вам удобно.",
            eng: "Learn to work efficiently with Notion — a powerful tool for task management, project tracking, and knowledge organization. Create databases, automate workflows, and structure information the way you want."
        },
        descriptionDown: {
            rus: "Начните использовать Notion на 100% уже сегодня!",
            eng: "Start using Notion to its full potential today!"
        },
        cost: 15000,
        popularity: 280,
        MMR: 4.6,
        releasesData: "15.09.2025",
        isProfession: false,
        who: {
            subtitles: {
                rus: [
                    "Предпринимателям и фрилансерам",
                    "Командам и руководителям",
                    "Студентам и исследователям",
                    "Тем, кто хочет лучше организовать свою жизнь"
                ],
                eng: [
                    "Entrepreneurs and freelancers",
                    "Teams and managers",
                    "Students and researchers",
                    "Those who want better personal organization"
                ]
            },
            whoText: {
                rus: [
                    "Если у вас свой бизнес или фриланс-проекты, Notion поможет вам структурировать задачи, вести клиентов и автоматизировать рутину.",
                    "Для команд Notion становится универсальным пространством для работы, совместного ведения проектов и хранения данных.",
                    "Студентам и исследователям Notion поможет вести конспекты, управлять источниками и структурировать материалы.",
                    "Если вам сложно организовать повседневные дела, Notion предоставит удобные шаблоны для планирования и ведения личных проектов."
                ],
                eng: [
                    "If you run a business or freelance, Notion will help you structure tasks, manage clients, and automate routine processes.",
                    "For teams, Notion is a universal workspace for project collaboration and data storage.",
                    "Students and researchers can use Notion to take notes, manage sources, and organize study materials.",
                    "If you struggle with daily organization, Notion offers ready-made templates for planning and managing personal projects."
                ]
            }
        },
        whatNeed: {
            subtitles: {
                rus: [
                    "Базовые компьютерные навыки",
                    "Желание автоматизировать задачи",
                    "Готовность к экспериментам"
                ],
                eng: [
                    "Basic computer skills",
                    "Willingness to automate tasks",
                    "Readiness to experiment"
                ]
            },
            whatNeedText: {
                rus: [
                    "Курс подходит даже тем, кто только начинает осваивать цифровые инструменты — интерфейс Notion интуитивно понятен.",
                    "Важно понимать, что Notion — это не просто заметки, а мощный инструмент для автоматизации и организации процессов.",
                    "Гибкость Notion позволяет создавать уникальные системы под свои задачи, поэтому не бойтесь тестировать разные подходы."
                ],
                eng: [
                    "The course is suitable even for those who are new to digital tools — Notion’s interface is intuitive.",
                    "It's important to understand that Notion is not just a note-taking app but a powerful tool for automation and organization.",
                    "Notion’s flexibility allows you to create custom systems for your needs, so don’t be afraid to experiment."
                ]
            }
        },
        fullText: {
            rus: [
                "Этот курс поможет вам освоить Notion с нуля и превратить его в центр вашей работы и личной жизни.",
                "Вы научитесь создавать базы данных, автоматизировать процессы, работать с командными пространствами и интегрировать Notion с другими сервисами.",
                "К концу курса у вас будет собственная система управления задачами, проектами и знаниями, адаптированная под ваши цели."
            ],
            eng: [
                "This course will help you master Notion from scratch and turn it into the center of your work and personal life.",
                "You will learn how to create databases, automate processes, manage team spaces, and integrate Notion with other services.",
                "By the end of the course, you will have a personal system for managing tasks, projects, and knowledge, tailored to your goals."
            ]
        },
        label: {
            rus: [
                "Продуктивность",
                "Организация",
                "Автоматизация"
            ],
            eng: [
                "Productivity",
                "Organization",
                "Automation"
            ]
        },
        freeLesson: "ссылка на урок",
        planOfLessons: {
            rus: [
                {
                    duration: "1 неделя",
                    title: "Основы интерфейса и структуры Notion"
                },
                {
                    duration: "2 недели",
                    title: "Работа с базами данных: таблицы, галереи, канбан-доски"
                },
                {
                    duration: "2 недели",
                    title: "Автоматизация процессов с помощью связей и фильтров"
                },
                {
                    duration: "1 неделя",
                    title: "Создание командного пространства и совместная работа"
                },
                {
                    duration: "2 недели",
                    title: "Интеграция с другими сервисами и кастомизация рабочего процесса"
                }
            ],
            eng: [
                {
                    duration: "1 week",
                    title: "Notion interface and structure basics"
                },
                {
                    duration: "2 weeks",
                    title: "Working with databases: tables, galleries, and Kanban boards"
                },
                {
                    duration: "2 weeks",
                    title: "Process automation with relations and filters"
                },
                {
                    duration: "1 week",
                    title: "Creating team spaces and collaborative work"
                },
                {
                    duration: "2 weeks",
                    title: "Integrating Notion with other services and customizing workflows"
                }
            ]
        },
        descriptionMobile: {
            eng: [
                "Struggling to keep your projects and ideas organized? This course will introduce you to Notion, the all-in-one workspace that combines notes, tasks, databases, and more. Learn to harness its flexibility to manage both personal and professional workflows.",
                "Begin with the basics: navigating Notion’s interface, creating notes and simple databases, and using templates for quick setup. Then, explore advanced functionalities like relational databases, automation with integrations, and customizing your workspace to suit your unique needs.",
                "By the end of this course, you'll have hands-on experience setting up a robust system in Notion to organize your tasks, projects, and ideas effectively. Whether you're a student, entrepreneur, or team leader, mastering Notion will transform the way you plan and execute your work."
            ],
            rus: [
                "Не знаете, как эффективно организовать свои проекты и идеи? Этот курс познакомит вас с Notion — универсальным инструментом, объединяющим заметки, задачи, базы данных и многое другое. Вы научитесь использовать его гибкость для управления как личными, так и профессиональными процессами.",
                "Начнем с основ: изучение интерфейса Notion, создание заметок и простых баз данных, а также использование шаблонов для быстрого старта. Затем перейдем к продвинутым функциям, таким как создание взаимосвязанных баз данных, автоматизация с помощью интеграций и настройка рабочего пространства под ваши нужды.",
                "После прохождения курса вы получите практический опыт в создании надежной системы для организации задач, проектов и идей в Notion. Независимо от того, студент вы, предприниматель или руководитель команды, владение Notion преобразит ваш подход к планированию и выполнению работы."
            ]
        }
    }

];

export default coursesData;