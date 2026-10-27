import './style.css'
document.addEventListener("DOMContentLoaded", () => {
  const thankYouPopup = document.getElementById("thankYouPopup");
  const reviewFormPopup = document.getElementById("reviewForm");

  window.toggleReviewForm = function () {
    reviewFormPopup.classList.toggle("show");
  };


  window.submitReview = function (event) {
    event.preventDefault();
    reviewFormPopup.classList.remove("show");
    showPopup();
  };

  window.showPopup = function () {
    thankYouPopup.classList.add("show");
    setTimeout(() => {
      thankYouPopup.classList.remove("show");
    }, 4000);
  };

  window.closePopup = function () {
    thankYouPopup.classList.remove("show");
  };
});
document.getElementById('scrollButton').addEventListener('click', function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});
const list = document.querySelector('.products-list');
const items = document.querySelectorAll('.products-item');
const total = items.length;

const visible = 4;
const itemWidth = 300;
const maxIndex = total - visible;

let index = 0;
let interval;

function showSlide(i) {
  list.style.transform = `translateX(-${i * itemWidth}px)`;
}

function nextSlide() {
  index++;
  if (index > maxIndex) index = 0;
  showSlide(index);
}

function prevSlide() {
  index--;
  if (index < 0) index = maxIndex;
  showSlide(index);
}

document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  restartAuto();
});

document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  restartAuto();
});

function startAuto() {
  interval = setInterval(nextSlide, 3000);
}

function restartAuto() {
  clearInterval(interval);
  startAuto();
}

startAuto();

import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const phoneInputs = document.querySelectorAll('input[type="tel"]');

phoneInputs.forEach(input => {
  const iti = intlTelInput(input, {
    initialCountry: 'ua',
    utilsScript: 'node_modules/intl-tel-input/build/js/utils.js',
  });

  input.addEventListener('input', () => {
    const countryData = iti.getSelectedCountryData();
    console.log('Країна:', countryData.name, 'Код:', countryData.dialCode);
  });
});

document.querySelectorAll(".btns, .sellers-buy, .review-block, .subscribe-block").forEach(block => {
  const triggerBtn = block.querySelector(".buy-btn, .review, .subscribe-btn");
  const modal = block.querySelector(".modal");
  const closeModal = block.querySelector(".modal__close");

  const orderForm = block.querySelector(".order-form");
  const submitModal = block.querySelector(".submit-modal");
  const closeSubmit = block.querySelector(".modal__close__submit");

  if (triggerBtn) {
    triggerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });

  if (orderForm) {
    orderForm.addEventListener("submit", e => {
      e.preventDefault();
      modal.style.display = "none";
      submitModal.style.display = "flex";
      orderForm.reset();
    });
  }

  if (closeSubmit) {
    closeSubmit.addEventListener("click", () => {
      submitModal.style.display = "none";
    });

    window.addEventListener("click", e => {
      if (e.target === submitModal) submitModal.style.display = "none";
    });
  }
});