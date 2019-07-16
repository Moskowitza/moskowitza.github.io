const h = window.innerHeight;

const header = document.getElementById('header');
const logo = document.getElementById('logo');
header.setAttribute('style', 'height:' + h + 'px;');

window.addEventListener('scroll', () => {
  console.log('scrolled');
  header.setAttribute('style', `height:${h / 3}px;`);
  logo.setAttribute('style', 'font-size: 4rem;');
});
