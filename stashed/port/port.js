const data = {
  proj1: {
    title: 'Animal Sanctuaries',
    desc: 'An application for finding Animal Sanctuaries.',
    img: 'cow.jpg',
    url: 'https://farmsanctuaries.herokuapp.com/',
    tech: ['React', 'MySQL', 'Heroku'],
  },
  proj2: {
    title: 'Philly Neighbors',
    desc: 'A community Bulletin Board',
    img: 'dragons.jpg',
    url: 'https://stormy-temple-91988.herokuapp.com/',
    tech: ['Sequelize', 'MERN', 'Handlebars'],
  },
  proj3: {
    title: 'Lost Memory',
    desc: 'React Memory Game',
    img: 'lost.jpg',
    url: 'https://moskowitza.github.io/clickyreact/',
    tech: ['React', 'Yarn'],
  },
  proj4: {
    title: 'Halloween Hangman',
    desc: 'Simple javascript game',
    img: 'voodoo.jpg',
    url: 'https://moskowitza.github.io/Hangman-Game/',
    tech: ['Bootstrap', 'Javascript'],
  },
  proj5: {
    title: 'HiFructose Notes',
    desc: 'Web scrape and save notes using MongoDB',
    img: 'lego.jpg',
    url: 'https://mighty-dawn-76073.herokuapp.com/',
    tech: ['Express', 'MongoDB', 'Heroku'],
  },
  proj6: {
    title: 'Trips To Plan',
    desc: 'Plot eventful responses to a Map',
    img: 'ttplogo.png',
    url: ' https://moskowitza.github.io/tripstoplan/',
    tech: ['GoogleMaps', 'External API', 'LocalStroage'],
  },
  proj7: {
    title: 'Circuit Picker',
    desc: 'Create and run a climbing circuit',
    img: 'climb.jpg',
    url: 'https://circuit-picker.herokuapp.com/',
    tech: ['React', 'Firebase', 'Heroku'],
  },
  proj8: {
    title: 'Single Page Portfolio',
    desc: 'Gatsby Template deployed with staging pipeline',
    img: 'hex.png',
    url: 'https://aaron-gatsby-profile.herokuapp.com/',
    tech: ['Gastby', 'Heroku', 'React'],
  },
};
const projects = document.querySelector('.projects');

const theseProjects = Object.values(data);
theseProjects.forEach(proj => {
  const newProject = document.createElement('div');
  newProject.classList.add('project');
  newProject.innerHTML = `
      <img class="project__img" 
      src="../images/${proj.img ? proj.img : 'alien.jpg'}">
      <div class="project__details">
        <h2>${proj.title}</h2>
        <a href="${proj.url}">link</a>
        <p class="project__desc"> ${proj.desc}</p>
        <ul>
          ${proj.tech.map(e => `<li>${e}</li>`).join('')}
        </ul>
      </div>

       `;
  projects.appendChild(newProject);
});
