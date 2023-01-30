const languageNameArea = document.getElementById("language-name");
const colorBoxes = document.querySelectorAll(".color-box");
const languageArr = ["React Js Developer", "Front-End Developer", "Web Developer"];
const themePanel = document.getElementById("theme-panel");
const tabs = document.querySelectorAll(".tab");
const projectCard = document.getElementById("project-cards");

const projectArr = [
  {
    id: 1,
    title: "Portfolio Website",
    img: "assets/project-img.png",
    demoLink: "#",
    sourceLink: "#",
    category: ["html", "css", "JavaScript"],
    languageListImg: [
      "fa-html5 orange",
      "fa-square-js bg-yellow",
      "fa-css3-alt lightblue",
    ],
  },
  {
    id: 2,
    title: "YouTube Clone",
    img: "assets/css.png",
    demoLink: "#",
    sourceLink: "#",
    category: ["React js"],
    languageListImg: ["fa-react lightblue"],
  },
  {
    id: 3,
    title: "Tesla Clone",
    img: "assets/react.png",
    demoLink: "#",
    sourceLink: "#",
    category: ["html", "css"],
    languageListImg: ["fa-html5 orange", "fa-css3-alt lightblue"],
  },
  {
    id: 4,
    title: "Admin Dashboard",
    img: "assets/project-img.png",
    demoLink: "#",
    sourceLink: "#",
    category: ["Tailwind Css"],
    languageListImg: [""],
  },
  {
    id: 5,
    title: "Animated Clock",
    img: "assets/project-img.png",
    demoLink: "#",
    sourceLink: "#",
    category: ["html", "css", "JavaScript"],
    languageListImg: [
      "fa-html5 orange",
      "fa-square-js bg-yellow",
      "fa-css3-alt lightblue",
    ],
  },
  {
    id: 6,
    title: "Responsive Template",
    img: "assets/html.png",
    demoLink: "#",
    sourceLink: "#",
    category: ["Bootstrap", "html", "JavaScript"],
    languageListImg: [
      "fa-html5 orange",
      "fa-square-js bg-yellow",
      "bootstrap purple",
    ],
  },
  {
    id: 7,
    title: "Landing Page",
    img: "assets/project-img.png",
    demoLink: "#",
    sourceLink: "#",
    category: ["html", "css", "JavaScript"],
    languageListImg: [
      "fa-html5 orange",
      "fa-square-js bg-yellow",
      "fa-css3-alt lightblue",
    ],
  },
  {
    id: 7,
    title: "Card Design ",
    img: "assets/project-img.png",
    demoLink: "#",
    sourceLink: "#",
    category: ["html", "css"],
    languageListImg: ["fa-html5 orange", "fa-css3-alt lightblue"],
  },
];

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

let i = 0;
setInterval(() => {
  languageNameArea.style.transform = "translate(0, -30px)";
  languageNameArea.style.opacity = "0";

  setTimeout(() => {
    languageNameArea.style.transform = "translate(0, 30px)";
    languageNameArea.innerHTML = languageArr[i];
    setTimeout(() => {
      languageNameArea.style.transform = "translate(0, 0px)";
      languageNameArea.style.opacity = "1";
    }, 100);
  }, 200);
  if (i == languageArr.length - 1) {
    i = 0;
  } else {
    i++;
  }
}, 2000);

function loadThemeModal() {
  themePanel.classList.toggle("active");
}
function changeBg(color) {
  colorBoxes.forEach((ele) => {
    ele.classList.remove("active");
  });
  let c = document.getElementsByClassName(color);
  document.body.setAttribute("class", "");
  document.body.classList.add(color);

  c[1].classList.add("active");
  localStorage.setItem("bg-color", color);
}

window.addEventListener("load", function () {
  if (localStorage.getItem("bg-color")) {
    changeBg(localStorage.getItem("bg-color"));
  }
  setProjectCategory("all");
});

function setProjectCategory(cat) {
  const projectCardArea = document.querySelectorAll(".project-card-area");
  projectCardArea.forEach((ele) => {
    ele.style.scale = "0.9";
    ele.style.opacity = "0";
  });
  setTimeout(() => {
    projectCard.innerHTML = "";
    projectArr.forEach((arr) => {
      let languageList = "";
      arr.languageListImg.forEach((element) => {
        if (element != "") {
          languageList += `
            <div class="project-language-img">
              <i class="fa-brands ${element}"></i>
            </div>
            `;
        } else {
          languageList = arr.category[0];
        }
      });
      if (cat === "all") {
        projectCard.innerHTML += `<div class="card project-card-area">
          <div class="tag">${arr.category[0]}</div>
         <div class='project-card-header'>
            <img src="${arr.img}" alt="" />
            <div class="language-list-area">
            ${languageList}
            </div>
         </div>
          <h2>${arr.title}</h2>
          <p>This Project is Made By HTML CSS & JavaScript</p>
          <div class="card-footer">
            <a href="${arr.demoLink}"><div class="btn btn-main">Demo</div></a>
            <a href="${arr.sourceLink}"><div class="btn btn-main-outline">GitHub</div></a>
            
          </div>
        </div>`;
      } else if (arr.category.includes(cat)) {
        projectCard.innerHTML += `
        <div class="card project-card-area">
          <div class="tag">${cat}</div>
         <div class='project-card-header'>
            <img src="${arr.img}" alt="" />
            <div class="language-list-area">
            ${languageList}
            </div>
         </div>
          <h2>${arr.title}</h2>
          <p>This Project is Made By HTML CSS & JavaScript</p>
          <div class="card-footer">
            <a href="${arr.demoLink}"><div class="btn btn-main">Demo</div></a>
            <a href="${arr.sourceLink}"><div class="btn btn-main-outline">GitHub</div></a>
          </div>
        </div>`;
      }
    });
    projectCardArea.forEach((ele) => {
      ele.style.opacity = "1";
      ele.style.scale = "1";
    });
    setTimeout(() => {}, 100);
  }, 300);
}

// Card Hover Move Effect
const ticketElm = document.getElementById("ticket");
ticketElm.addEventListener("mouseover", (e) => {
  const { x, y, width, height } = ticketElm.getBoundingClientRect();
  console.log(ticketElm.getBoundingClientRect());
  const centerPoint = { x: x + width / 2, y: y + height / 2 };
  ticketElm.addEventListener("mousemove", (e) => {
    const degreeX = (e.clientY - centerPoint.y) * 0.1;
    const degreeY = (e.clientX - centerPoint.x) * -0.1;

    ticketElm.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
  });
  ticketElm.addEventListener("mouseout", (e) => {
    ticketElm.style.transform = `none`;
  });
});
