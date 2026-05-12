const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

const stars = document.querySelectorAll('.star-rating .star');
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const val = parseInt(star.dataset.value);
    stars.forEach(s => {
      s.textContent = parseInt(s.dataset.value) <= val ? '★' : '☆';
      s.classList.toggle('filled', parseInt(s.dataset.value) <= val);
    });
  });

  star.addEventListener('mouseout', () => {
    stars.forEach(s => {
      s.textContent = parseInt(s.dataset.value) <= selectedRating ? '★' : '☆';
      s.classList.toggle('filled', parseInt(s.dataset.value) <= selectedRating);
    });
  });

  star.addEventListener('click', () => {
    selectedRating = parseInt(star.dataset.value);
  });
});

const track = document.querySelector(".product-track");

const cards = document.querySelectorAll(".product-card");

const nextBtn = document.querySelector(".next-btn");

const prevBtn = document.querySelector(".prev-btn");

let index = 0;

function getVisibleCards(){

  if(window.innerWidth < 576){
    return 1;
  }

  if(window.innerWidth < 768){
    return 2;
  }

  if(window.innerWidth < 1200){
    return 3;
  }

  return 4;
}
function updateSlider(){

  const visibleCards = getVisibleCards();

  const cardWidth = cards[0].offsetWidth;

  const maxIndex =
    cards.length - visibleCards;

  if(index > maxIndex){
    index = 0;
  }

  if(index < 0){
    index = maxIndex;
  }

  track.style.transform =
    `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {

  index++;

  updateSlider();
});
prevBtn.addEventListener("click", () => {

  index--;

  updateSlider();
});

setInterval(() => {

  index++;

  updateSlider();

}, 5000);
window.addEventListener(
  "resize",
  updateSlider
);

updateSlider();