const cards = document.querySelectorAll(".card");
const slideGallery = document.querySelector(".slides");
const slides = slideGallery.querySelectorAll("div");
const thumbnailContainer = document.querySelector(".thumbnails");
const slideCount = slides.length;
const slideWidth = 540;

-cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    removeActive();
    card.classList.add("active");
  });
});

function removeActive() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}

function portfolio() {
  window.open("https://github.com/ojasaklechayt/Portfolio-Website");
}

function roomie() {
  window.open("https://github.com/DevrishiSikka/Roomie-Find-your-room-mate");
}

function simon() {
  window.open("https://cerulean-squirrel-64a3d9.netlify.app/");
}

function newsletter() {
  window.open("https://github.com/ojasaklechayt/newsletter-signup");
}

function eventregister() {
  window.open(
    "https://github.com/ojasaklechayt/Practice-Projects/tree/main/XYZ%20Club%20Registration%20Page"
  );
}

new kursor({
  type: 1
});

const highlightThumbnail = () => {
  thumbnailContainer
    .querySelectorAll("div.highlighted")
    .forEach((el) => el.classList.remove("highlighted"));
  const index = Math.floor(slideGallery.scrollLeft / slideWidth);
  thumbnailContainer
    .querySelector(`div[data-id="${index}"]`)
    .classList.add("highlighted");
};

const scrollToElement = (el) => {
  const index = parseInt(el.dataset.id, 10);
  slideGallery.scrollTo(index * slideWidth, 0);
};

thumbnailContainer.innerHTML += [...slides]
  .map((slide, i) => `<div data-id="${i}"></div>`)
  .join("");

thumbnailContainer.querySelectorAll("div").forEach((el) => {
  el.addEventListener("click", () => scrollToElement(el));
});

slideGallery.addEventListener("scroll", (e) => highlightThumbnail());

highlightThumbnail();

function mereblog() {
    window.open(
      "https://ojasaklecha.xyz/"
    );
  }

  function twitterthread() {
    window.open(
      "https://twitter.com/nammekyahaire/status/1587304940917383169"
    );
  }

  function club() {
    window.open(
      "https://www.ieeecsvitc.com/"
    );
  }

  function cv() {
    window.open(
      "https://github.com/ojasaklechayt/Portfolio-Website/blob/24bf536979280e40e9bb4e80907ca82d2a5dc303/Photos%20and%20Documents/Resume-Ojas-Aklecha.pdf"
    );
  }

  function twitterhandel() {
    window.open(
      "https://twitter.com/nammekyahaire"
    );
  }

  function linkedin() {
    window.open(
      "https://www.linkedin.com/in/ojas-aklecha/"
    );
  }

  function githubaccount() {
    window.open(
      "https://github.com/ojasaklechayt"
    );
  }

  function gmail() {
    window.open(
      "https://mail.google.com/mail/u/1/#inbox?compose=CllgCJTMXPVhfTXGZTHxCrHqsGzlMRLTcfhzhxnQXsJsSdhGDGZzfhgQjcRLvMFsFWbldDSvShL"
    );
  }

  function ojuclicks(){
    window.open("https://www.instagram.com/ojuclicks");
  }

  