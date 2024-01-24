document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const content = document.querySelector('.content');
    loaderWrapper.classList.add('hide');
    // content.classList.add('visible');
    // loaderWrapper.style.display = 'none';
    content.style.display = 'block';

    setTimeout(() => {
      loaderWrapper.style.display = 'none';
    }, 700);
  }, 3000);
});

// Fade Animation to Navigation
const nav = document.querySelector('.nav');
const handleHover = function (e) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav-link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.7));
nav.addEventListener('mouseout', handleHover.bind(1));

// --------------------
// --------------------
// MOBILE NAVIGATION

const openCloseBtn = document.querySelector('.open-close-icon');
// const closeBtn = document.querySelector('.close');
const mobNav = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.nav-link');

function openNav() {
  if (openCloseBtn.classList.contains('fa-bars')) {
    mobNav.classList.add('active');
    openCloseBtn.classList.remove('fa-bars');
    openCloseBtn.classList.add('fa-x');
  } else {
    mobNav.classList.remove('active');
    openCloseBtn.classList.remove('fa-x');
    openCloseBtn.classList.add('fa-bars');
  }
}

openCloseBtn.addEventListener('click', openNav);

// --------------------
// --------------------
// FAQS
const questions = document.querySelectorAll('.question-box');

function showAnswer() {
  // Icon Rotation
  // rotation += 45;
  // this.lastElementChild.style.transform = `rotate(${rotation}deg)`;
  // if (rotation >= 360) rotation = 0;

  const targetEl = this.nextElementSibling;
  const answers = document.querySelectorAll('.answer-box');

  if (targetEl.style.maxHeight) {
    targetEl.style.maxHeight = null;

    this.lastElementChild.classList.add('fa-plus');
    this.lastElementChild.classList.remove('fa-minus');
  }

  // Open
  else {
    targetEl.style.maxHeight = `${targetEl.scrollHeight}px`;
    this.lastElementChild.classList.remove('fa-plus');
    this.lastElementChild.classList.add('fa-minus');
  }
  // targetEl.style.padding = '10px 20px';

  // close all others.
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === targetEl) {
      continue;
    }

    answers[i].style.maxHeight = null;
  }
}

let rotation = 0;

questions.forEach((question) => {
  question.addEventListener('click', showAnswer.bind(question));
  // question.addEventListener('mouseover', showAnswer.bind(question));
});

// ============
// Adding Music
// ============

const music = document.getElementById('music');
const btnPlayPause = document.querySelector('#play-pause-btn');
// setTimeout(() => {
//   // music.muted = false;
//   if (music.paused) {
//     music.play();
//     btnPlayPause.classList.remove('fa-play');
//     btnPlayPause.classList.add('fa-pause');
//   }
// }, 3000);

btnPlayPause.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btnPlayPause.classList.remove('fa-play');
    btnPlayPause.classList.add('fa-pause');
  } else {
    music.pause();
    btnPlayPause.classList.remove('fa-pause');
    btnPlayPause.classList.add('fa-play');
  }
});

// ============
// Sticky Social Icons
// ============

window.onscroll = function () {
  let box = document.querySelector('.social-container');
  let scrollPosition = window.scrollY;

  if (scrollPosition > box.offsetTop + 60) {
    box.classList.add('fixed');
  } else {
    box.classList.remove('fixed');
  }
};
