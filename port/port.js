const data = {
  proj1: {
    title: "Animal Sanctuaries",
    desc:
      "An application for finding and keeping in touch with Animal Sanctuaries.",
    img: "cow.jpg",
    url: "https://farmsanctuaries.herokuapp.com/",
    tech: ["React", "MySQL", "Heroku"]
  },
  proj2: {
    title: "Philly Neighbors",
    desc: "A community Bulletin Board",
    img: "dragons.jpg",
    url: "https://stormy-temple-91988.herokuapp.com/",
    tech: ["Sequelize", "MERN", "Handlebars"]
  },
  proj3: {
    title: "Lost Memory",
    desc: "React Memory Game",
    img: "lost.jpg",
    url: "https://moskowitza.github.io/clickyreact/",
    tech: ["React", "Yarn"]
  },
  proj4: {
    title: "Halloween Hangman",
    desc: "Simple javascript game",
    img: "voodoo.jpg",
    url: "https://moskowitza.github.io/Hangman-Game/",
    tech: ["Bootstrap", "Javascript"]
  },
  proj5: {
    title: "HiFructose Notes",
    desc: "Web scrape and save notes using MongoDB",
    img: "lego.jpg",
    url: "https://mighty-dawn-76073.herokuapp.com/",
    tech: ["Express", "MongoDB", "Heroku"]
  }
  // proj6: {
  //   title: "Mongo Notes",
  //   desc: "Note taker using MongoDB",
  //   img: "lego.jpg",
  //   url: "github.com/moskowitza",
  //   tech: ["Express", "MongoDB", "Heroku"]
  // }
};
const projects = document.querySelector(".projects");

const theseProjects = Object.values(data);
console.log(theseProjects);
theseProjects.forEach(proj => {
  let newProject = document.createElement("div");

  newProject.innerHTML = `
    <div class="project">
      <img class="project__img" 
      src="../images/${proj.img ? proj.img : "alien.jpg"}">
      <div class="project__details">
        <h2>${proj.title}</h2>
        <a href="${proj.url}">link</a>
        <p class="project__desc"> ${proj.desc}</p>
        <ul>
          ${proj.tech.map(e => `<li>${e}</li>`).join("")}
        </ul>
      </div>
    </div>
       `;
  projects.appendChild(newProject);
});
