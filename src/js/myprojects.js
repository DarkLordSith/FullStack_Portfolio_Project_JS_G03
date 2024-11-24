
const projects = [
    {
        images: {
            "360": { "1x": "/img/myproject/Financ-mob.1x.jpg", "2x": "/img/myproject/Financ-mob.2x.jpg" },
            "767": { "1x": "/img/myproject/Financ-tab.1x.jpg", "2x": "/img/myproject/Financ-tab.2x.jpg" },
            "1280": { "1x": "/img/myproject/Wallet-desc.1x.jpg", "2x": "/img/myproject/Wallet-desc.2x.jpg" }
        },
        stack: "React, JavaScript, Node JS, Git",
        title: "WALLET WEBSERVICE",
        link: "#"
    },
    {
        images: {
            "360": { "1x": "/img/myproject/Diet-mob.1x.jpg", "2x": "/img/myproject/Diet-mob.2x.jpg" },
            "767": { "1x": "./img/myproject/Diet-tab.1x.jpg", "2x": "/img/myproject/Diet-tab.2x.jpg" },
            "1280": { "1x": "/img/myproject/Diet-desc.1x.jpg", "2x": "/img/myproject/Diet-desc.2x.jpg" }
        },
        stack: "React, JavaScript, Node JS, Git",
        title: "GREEN HARVEST WEBSERVICE",
        link: "#"
    },
    {
                 images: {
            "360": { "1x": "/img/myproject/Learn-mob.1x.jpg", "2x": "/img/myproject/Learn-mob.2x.jpg" },
            "767": { "1x": "/img/myproject/Learn-tab.1x.jpg", "2x": "/img/myproject/Learn-tab.2x.jpg" },
            "1280": { "1x": "/img/myproject/Learn-desc.1x.jpg", "2x": "/img/myproject/Learn-desc.2x.jpg" }
        },
                stack: "React, JavaScript, Node JS, Git",
                title: "ENGLISH EXCELLENCE WEBSERVICE",
                link: "#"
    },
    {
                images: {
            "360": { "1x": "/img/myproject/Chego-mob.1x.jpg", "2x": "/img/myproject/Chego-mob.2x.jpg" },
            "767": { "1x": "/img/myproject/Chego-tab.1x.jpg", "2x": "/img/myproject/Chego-tab.2x.jpg" },
            "1280": { "1x": "/img/myproject/Chego-desc.1x.jpg", "2x": "/img/myproject/Chego-desc.2x.jpg" }
        },
                stack: "React, JavaScript, Node JS, Git",
                title: "CHEGO JEWELRY WEBSITE",
                link: "#"
    },
    {
               images: {
            "360": { "1x": "/img/myproject/Mimino-mob.1x.jpg", "2x": "/img/myproject/Mimino-mob.2x.jpg" },
            "767": { "1x": "/img/myproject/Mimino-tab.1x.jpg", "2x": "/img/myproject/Mimino-tab.2x.jpg" },
            "1280": { "1x": "/img/myproject/Mimino-desc.1x.jpg", "2x": "/img/myproject/Mimino-desc.2x.jpg" }
        },
                stack: "React, JavaScript, Node JS, Git",
                title: "MIMINO WEBSITE",
                link: "#"
    },
    {
        images: {
            "360": { "1x": "/img/myproject/vyshyvanka-mob.1x.jpg", "2x": "/img/myproject/vyshyvanka-mob.2x.jpg" },
            "767": { "1x": "/img/myproject/vyshyvanka-tab.1x.jpg", "2x": "/img/myproject/vyshyvanka-tab.2x.jpg" },
            "1280": { "1x": "/img/myproject/vyshyvanka-desc.1x.jpg", "2x": "/img/myproject/vyshyvanka-desc.2x.jpg" }
        },
                stack: "React, JavaScript, Node JS, Git",
                title: "VYSHYVANKA VIBES LANDING PAGE",
                link: "#"
    },
    {
        images: {
            "360": { "1x": "/img/myproject/Energy-mob.1x.jpg", "2x": "/img/myproject/Energy-mob.2x.jpg" },
            "767": { "1x": "/img/myproject/Energy-tab.1x.jpg", "2x": "/img/myproject/Energy-tab.2x.jpg" },
            "1280": { "1x": "/img/myproject/Energy-desc.1x.jpg", "2x": "/img/myproject/Energy-desc.2x.jpg" }
        },
                stack: "React, JavaScript, Node JS, Git",
                title: "ENERGY FLOW WEBSERVICE",
                link: "#"
    },
    {
       images: {
            "360": { "1x": "/img/myproject/Power-mob.1x.jpg", "2x": "/img/myproject/Power-mob.2x.jpg" },
            "767": { "1x": "/img/myproject/Power-tab.1x.jpg", "2x": "/img/myproject/Power-tab.2x.jpg" },
            "1280": { "1x": "/img/myproject/Power-desc.1x.jpg", "2x": "/img/myproject/Power-desc.2x.jpg" }
        },
                stack: "React, JavaScript, Node JS, Git",
                title: "POWER PULSE WEBSERVICE",
                link: "#"
    },
    {
        images: {
            "360": { "1x": "/img/myproject/Fresh-mob.1x.jpg", "2x": "/img/myproject/Fresh-mob.2x.jpg" },
            "767": { "1x": "/img/myproject/Fresh-tab.1x.jpg", "2x": "/img/myproject/Fresh-tab.2x.jpg" },
            "1280": { "1x": "/img/myproject/Fresh-desc.1x.jpg", "2x": "/img/myproject/Fresh-desc.2x.jpg" }
        },
                stack: "React, JavaScript, Node JS, Git",
                title: "Fruitbox online store",
                link: "#"
    },
    {
                images: {
            "360": { "1x": "/img/myproject/first screen-mob.1x.jpg", "2x": "/img/myproject/first screen-mob.2x.jpg" },
            "767": { "1x": "/img/myproject/first screen-tab.1x.jpg", "2x": "/img/myproject/first screen-tab.2x.jpg" },
            "1280": { "1x": "/img/myproject/first screen-desc.1x.jpg", "2x": "/img/myproject/first screen-desc.2x.jpg" }
        },
                stack: "React, JavaScript, Node JS, Git",
                title: "STARLIGHT STUDIO LANDING PAGE",
                link: "#"
    }
];

let firstIndex = 0;
const projectsPerPage = 3;
const projectList = document.getElementById("projects-list");
const loadMoreButton = document.getElementById("load-more");

loadMoreButton.addEventListener("click", loadProjects);

function loadProjects() {
    const nextProjects = projects.slice(firstIndex, firstIndex + projectsPerPage);

    nextProjects.forEach(project => {
        const { images, stack, title, link } = project;

        const pictureElement = `
            <picture class="picture">
                <source srcset="${images[1280]["1x"]} 1x, ${images[1280]["2x"]} 2x" media="(min-width: 1280px)">
                <source srcset="${images[767]["1x"]} 1x, ${images[767]["2x"]} 2x" media="(min-width: 768px)">
                <img src="${images[360]["1x"]}" srcset="${images[360]["2x"]} 2x" alt="${title}">
            </picture>
        `;

        const projectItem = document.createElement("li");
        projectItem.innerHTML = `
            ${pictureElement}
            <div class="info">
                <p class="stack">${stack}</p>
                <div class="info-text">
                    <h3 class="title">${title}</h3>
                    <a href="${link}" class="link-visit" target="_blank">
                        <span class="text-visit">VISIT</span>
                        <svg class="icon-arrow" width="24" height="24">
                            <use href="./img/icons.svg#icon-diagonal-arrow-up"></use>
                        </svg>
                    </a>
                </div>
            </div>
        `;

        projectList.appendChild(projectItem);
    });

    firstIndex += projectsPerPage;

    if (firstIndex >= projects.length) {
        loadMoreButton.classList.add("hidden");
    }
}

loadProjects();
