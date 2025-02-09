(async () => {

    const scroll_btn = document.getElementById("scroll-btn");
    const knowledge_container = document.getElementById("knownledge-container");
    const projects_container = document.getElementById("projects-container");
    const timeline_container = document.getElementById("timeline-container");
    const select_language = document.getElementById("lang");

    const setLanguage = async (lang) => {

        if (!lang) lang = localStorage.getItem("lang");
        select_language.value = lang;
        localStorage.setItem("lang", lang);

        const lang_file = await fetch(`./js/langs/${lang}.json`);
        const lang_data = await lang_file.json();

        // set page title
        Object.keys(lang_data).map(key => {
            const lang_elements = lang_data[key];

            Object.keys(lang_elements).map(element => {
                const id_name = `${key}-${element}`;
                const element_id = document.getElementById(id_name);
                if (!element_id) console.log(`Element with id ${id_name} not found`);
                if (lang_elements[element] && element_id) element_id.innerHTML = lang_elements[element];
            });

        });
    };

    const setCompetences = async () => {
        const my_competences = {
            "Frameorks and Languanges": [
                "HTML5",
                "CSS3",
                "SaSS",
                "JavaScript",
                "React",
                "React Native",
                "PHP",
                "MySQL",
                "Git",
            ],
            "well-founded notions": [
                "git",
                "ES6+",
                "NodeJS",
                "python",
                "mongoDB",
                "Windows",
                "UML",
                "Design Patterns",
                "SOLID",
                "MVC",
            ],
            "knowledge in": [
                "Linux",
                "Java",
                "Java for Android",
                "c++",
                "Shell Script",
                "docker",
            ],
            "Services": [
                "AWS",
                "Heroku",
                "VPS",
                "vercel",
            ],
            "Soft Skills": [
                "scrum",
                "problem solving",
                "team work",
                "communication",
                "adaptability",
                "curiosity",
                "self-learning",
                "agile methodologies",
                "leadership",
            ],
        }


        const competences_dom_maker = Object.keys(my_competences).map((key, index) => {
            const competences = my_competences[key];
            const competences_dom = competences.map((competence) => {
                return `<li class="card p-2 w-auto" >${competence}</li>`;
            });
            return `<div class="competences">
                    <h3 id="about-competence_${index + 1}">${key}</h3>
                    <ul class="list-style-none d-flex flex-wrap gap-2">
                        ${competences_dom.join("")}
                    </ul>
                </div>`;
        });

        knowledge_container.innerHTML = competences_dom_maker.join("");
    }

    const setProjects = async () => {
        const projects = [
            {
                title: "Copypaste",
                description: "simple website to share text and images in real time.",
                image: "./img/project-3.png",
                url: "https://copypaste.edapp.com.br",
            }, {
                title: "Point of sale",
                description: "powerful sales app that works on/off line, sync with web panel and more",
                image: "./img/project-5.png",
                url: "https://minipdv.apphub.com.br",
                style: "width: 55%;"
            }, {
                title: "EasyWork",
                description: "platform to connect service provider to customers. (high school TCC)",
                image: "./img/project-4.png",
                url: "https://github.com/fenol64/EasyWork",
            },
            {
                title: "Dating Propose",
                description: "project that you put your lovers name and do not accept a no a awnser.",
                image: "./img/project-1.png",
                url: "https://dating-propose.vercel.app",
            },
        ];

        const projects_dom_maker = projects.map((project, index) => {
            return `<div class="col-12 col-sm-6 col-md-4 col-lg-3 ">
                    <article class="card h-100">
                        <img src="${project.image}" class="card-img-top mx-auto" alt="..." ${project.style ? `style='${project.style}'` : ``}}>
                        <div class="card-body">
                            <h1 class="card-title h5" id="projects-project_title_${index + 1}">${project.title}</h1>
                            <p class="card-text" id="projects-project_subtitle_${index + 1}">${project.description}</p>
                            <div class="d-flex justify-content-end">
                                <a rel="noopener" title="${project.title}" href="${project.url}"
                                    target="_blank" class="btn btn-info"><i class="fa-solid fa-earth-americas"></i></a>
                            </div>
                        </div>
                    </article>
                </div>`;
        });

        projects_container.innerHTML = projects_dom_maker.join("");

    }

    const setTimeLine = async () => {
        const timeline = [
            {
                title: "High School",
                description: "I did IT on high school and built a project from zero with documentation and programming",
                date_start: "02/2018",
                date_end: "12/2020",
            },
            {
                title: "IT Assistant",
                description: "I worked at computer and local Network maintenance, besides that I did build a storefront and back-office system.",
                date_start: "01/2019",
                date_end: "11/2020",
            },
            {
                title: "College",
                description: "I'm currently studying computer science at UNICARIOCA, Rio de Janeiro",
                date_start: "02/2021",
                date_end: "12/2024",
            },
            {
                title: "Link informática RJ",
                description: "I'm learning and developing mobile apps, web systems for customers and a SAS platform for intern purposes.everything was made with react and react-native.",
                date_start: "11/2021",
                date_end: "11/2023",
            },
            {
                title: "42 RIO",
                description: "I'm currently studying software engineering at 42 school, Rio de Janeiro",
                date_start: "10/2023",
                date_end: "12/2027",
            },
            {
                title: "Sofex",
                description: "I'm a Full-Stack developer at Sofex, a company that develops software for the construction industry.",
                date_start: "11/2021",
                date_end: "12/2024",
            }
        ];

        const timeline_dom_maker = timeline.map((item, index) => {

            const left_or_right_side = index % 2 === 0 ? "left" : "right";

            return `<div class="timeline ${left_or_right_side}">
                        <div class="card border border-3">
                            <div class="card-body p-4">
                                <h3 class="mb-0" id="timeline-event_title_${index + 1}">${item.title}</h3>
                                <small class="small text-muted mb-2">
                                    ${item.date_start ?
                    `${item.date_start} ${item.date_end && `<i class="fa-solid fa-arrow-right"></i>${item.date_end}`}` :
                    `${item.period_message}`
                }
                                    </small>
                                <p class="mb-0" id="timeline-event_subtitle_${index + 1}">${item.description}</p>
                            </div>
                        </div>
                    </div>`
        });

        timeline_container.innerHTML = timeline_dom_maker.join("");
    }

    scroll_btn.style.display = "none";

    select_language.addEventListener("change", () => setLanguage(select_language.value));

    scroll_btn.onclick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scroll_btn.style.display = "block";
        } else {
            scroll_btn.style.display = "none";
        }
    }

    await setCompetences();
    await setProjects();
    await setTimeLine();
    await setLanguage('en');
})()