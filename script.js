const menu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const xIcon = document.querySelector('.xIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
  } else {
    menu.classList.add('showMenu');
  }
}

function closeMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
  }
}

hamburger.addEventListener('click', toggleMenu);
xIcon.addEventListener('click', closeMenu);
menu.addEventListener('click', closeMenu);

const events = [
  {
    icon: 'resources/images/conference1.svg',
    type: 'Lecture',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rusto obcaecati deleniti nobis.',
  },
  {
    icon: 'resources/images/conference1.svg',
    type: 'Lecture',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rusto obcaecati deleniti nobis.',
  },
  {
    icon: 'resources/images/conference1.svg',
    type: 'Lecture',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rusto obcaecati deleniti nobis.',
  },
  {
    icon: 'resources/images/conference1.svg',
    type: 'Lecture',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rusto obcaecati deleniti nobis.',
  },
  {
    icon: 'resources/images/conference1.svg',
    type: 'Lecture',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rusto obcaecati deleniti nobis.',
  },
];

for (let i = 0; i < events.length; i += 1) {
  document.getElementById('events-dynamic').innerHTML += `
  <li class="event-card">
          <span class="event-icon"
            ><img
              src="${events[i].icon}"
              alt="conference icon"
              width="50"
          /></span>
          <span class="event-type">${events[i].type}</span>
          <span class="event-info"
            >${events[i].info}</span
          >
        </li>`;
}

const speakersTop = [
  {
    name: 'Yochai Benkler',
    title:
      'Lorem Ipsum Professor of Amet Consectetur lorem ipsum dolor sit University.',
    work: 'As dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    photo: 'resources/images/user.jpg',
  },
  {
    name: 'Yochai Benkler2',
    title:
      'Lorem Ipsum Professor of Amet Consectetur lorem ipsum dolor sit University.',
    work: 'As dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    photo: 'resources/images/user.jpg',
  },
];

for (let k = 0; k < speakersTop.length; k += 1) {
  document.getElementById('speakers-top').innerHTML += `
  <li class="speaker-card">
        <span class="speaker-icon"
          ><img src="${speakersTop[k].photo}" alt="user-icon" width="50" height="50"
        /></span>
        <div class="speaker-info">
          <h3 class="speaker-name">${speakersTop[k].name}</h3>
          <br />
          <p class="speaker-title">${speakersTop[k].title}</p>
          <br />
          <p class="speaker-work">${speakersTop[k].work}</p>
        </div>
      </li>`;
}

const speakers = [
  {
    name: 'Yochai Benkler3',
    title:
      'Lorem Ipsum Professor of Amet Consectetur lorem ipsum dolor sit University.',
    work: 'As dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    photo: 'resources/images/user.jpg',
  },
  {
    name: 'Yochai Benkler4',
    title:
      'Lorem Ipsum Professor of Amet Consectetur lorem ipsum dolor sit University.',
    work: 'As dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    photo: 'resources/images/user.jpg',
  },
  {
    name: 'Yochai Benkler',
    title:
      'Lorem Ipsum Professor of Amet Consectetur lorem ipsum dolor sit University.',
    work: 'As dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    photo: 'resources/images/user.jpg',
  },
  {
    name: 'Yochai Benkler',
    title:
      'Lorem Ipsum Professor of Amet Consectetur lorem ipsum dolor sit University.',
    work: 'As dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    photo: 'resources/images/user.jpg',
  },
];

for (let j = 0; j < speakers.length; j += 1) {
  document.getElementById('speakers-dynamic').innerHTML += `
     <li class="speaker-card">
        <span class="speaker-icon"
          ><img src="${speakers[j].photo}" alt="user-icon" width="50"
        /></span>
        <div class="speaker-info">
          <h3 class="speaker-name">${speakers[j].name}</h3>
          <br />
          <p class="speaker-title">${speakers[j].title}</p>
          <br />
          <p class="speaker-work">${speakers[j].work}</p>
        </div>
      </li>`;
}

const moreBttn = document.getElementById('more-bttn');
const moreSpeakers = document.getElementById('speakers-dynamic');

function showSpeakers() {
  if (moreSpeakers.classList.contains('more')) {
    moreSpeakers.classList.remove('more');
    document.getElementById('more-txt').innerText = 'MORE';
    document.getElementById('arrowhead').src = 'resources/images/arrowhead.svg';
  } else {
    moreSpeakers.classList.add('more');
    document.getElementById('more-txt').innerText = 'LESS';
    document.getElementById('arrowhead').src = 'resources/images/arrowhead2.svg';
  }
}

moreBttn.addEventListener('click', showSpeakers);
