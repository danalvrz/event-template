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
    icon: 'resources/images/program_icon_05.png',
    type: 'Music',
    info: 'By Paul Paul, a modern troubador sings songs based on ancient Beefhead carols, his compilation is called "The Beefhead Comes this Night".',
  },
  {
    icon: 'resources/images/program_icon_04.png',
    type: 'Exhibits',
    info: 'With Les Cheese of musical duo Cheese & Onion Les Cheese shows the audience his various body parts that have been replaced by animal parts.',
  },
  {
    icon: 'resources/images/program_icon_01.png',
    type: 'Dance',
    info: 'Of the Beef Hop the latest dance craze sweeping the nation, became popular based on the #1 hit "Do the Beef Hop".',
  },
  {
    icon: 'resources/images/program_icon_02.png',
    type: 'Poetry',
    info: 'Reading of The Ballad of Parsnip Flendercroft, describing the tragic death by reversing into the sea of the former bursar of the Bovine Farmers` Union.',
  },
  {
    icon: 'resources/images/program_icon_03.png',
    type: 'Q&A',
    info: 'With Bob Trescothick, answer all of your veterinary questions live!. Lorem ipsum sit dolor amet.',
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
    name: 'Bob Trescothick',
    title:
      'Bovine Bum Vet at Ipsum Dolor Sit University',
    work: 'The TV personality who used to be the resident vet for the annual Ken Bicton memorial pig run.',
    photo: 'resources/images/speaker01.png',
  },
  {
    name: 'Tusk Henderson',
    title:
      'Celebrity adventurer lorem sit since 1523',
    work: 'The first person in history to drink his own urine on all 7 continents, who faced controversy due to being accused of bringing a cow on his adventures.',
    photo: 'resources/images/speaker02.png',
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
    name: 'Lucy Bonham',
    title:
      'President of Amet Beef Council dolor of America',
    work: 'Took over from Violet Crabtree to organize the Beef Council Annual Dinner and Barn Dance, bringing a "new look" to the traditional event.',
    photo: 'resources/images/speaker03.png',
  },
  {
    name: 'Phillip Mushroom',
    title:
      'International TV Actor and life coach at Ipsum Institute',
    work: 'Son of a butcher, known for TV dramas, playing detective Beef in Beef Justice and starring role in Bankside the movie.',
    photo: 'resources/images/speaker04.jpg',
  },
  {
    name: 'Roy Gluck Jr.',
    title:
      ' CEO of Burgers Barrel and professional whistler',
    work: 'Kansas-based hamburgers restaurant of the fast food nature, started by Gluck Jr.`s grandfather to be the number #8 burger chain the American Midwest.',
    photo: 'resources/images/speaker05.jpg',
  },
  {
    name: 'Michael "Frank" Franklinson',
    title:
      'Canadian entrepreneur and inventor of the cheesemeat',
    work: 'Travelled to the UK to sell his company Franklinson`s new product, which he claims is the "next big thing".',
    photo: 'resources/images/speaker06.png',
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
