"use strict";
// caq form
const overlay = document.querySelector(".overlay");
const caqForm = document.querySelector(".overlay__hidden");

window.addEventListener("load", function () {
  setTimeout(function () {
    caqForm.classList.remove("overlay__hidden");
  }, 3000);
});

const caqBtn = document.querySelector(".caq__close");
overlay.addEventListener("click", function (e) {
  if (!e.target.className && e.target.localName === "a" || e.target.className === 'overlay' || e.target.closest('.caq__close')?.classList.value === 'caq__close') {
    overlay.remove()
  };
});

// menu toogle
function menuToggle() {
  const menuShow = document.querySelector(".nav__menu--show");
  const menuClose = document.querySelector(".nav__menu--close");

  menuShow.addEventListener("click", () => {
    document.querySelector(".nav__list").style.right = 0;
  });

  menuClose.addEventListener("click", () => {
    document.querySelector(".nav__list").style.right = "-100%";
  });
}

menuToggle();

// Bike options
const bikesModel = {
  bajaj_ns_200: {
    price: "$10",
    brand: "Bajaj",
    model: "NS 200",
    mileage: "40.36 kmpl",
    displacement: "199cc",
    year: "2022",
    imgSrc: "src/img/bajaj_ns_200.png",
  },
  crossfire_rm_250: {
    price: "$30",
    brand: "Crossfire",
    model: "RM 250",
    mileage: "25 kmpl",
    displacement: "249.6cc",
    year: "2020",
    imgSrc: "src/img/crossfire_rm_250.png",
  },
  crossfire_hj_250: {
    price: "$30",
    brand: "Crossfire",
    model: "HJ 250",
    mileage: "27 kmpl",
    displacement: "249.6cc",
    year: "2021",
    imgSrc: "src/img/crossfire_hj_250.png",
  },
  hero_xpulse_200: {
    price: "$20",
    brand: "Hero",
    model: "Xpulse 200",
    mileage: "51.59 kmpl",
    displacement: "199.6cc",
    year: "2022",
    imgSrc: "src/img/hero_xpulse_200.png",
  },
  ktm_adventure_390: {
    price: "$50",
    brand: "KTM",
    model: "Adventure 390",
    mileage: "27 kmpl",
    displacement: "373cc",
    year: "2021",
    imgSrc: "src/img/ktm_adventure_390.png",
  },
  ktm_duke_390: {
    price: "$45",
    brand: "KTM",
    model: "KTM Duke 390",
    mileage: "35 kmpl",
    displacement: "373.2cc",
    year: "2023",
    imgSrc: "src/img/ktm_duke_390.png",
  },
};

document
  .querySelector(".bikes__brand__lists")
  .addEventListener("click", function (e) {
    const li = e.target.closest(".bikes__brand__lists").querySelectorAll("li");

    li.forEach((child) => {
      //guard clause
      if (e.target.localName !== "li") return;

      if (child.classList.contains("bikes__brand__item--active")) {
        child.classList.remove("bikes__brand__item--active");
      }
    });
    //guard clause
    if (e.target.localName !== "li") return;
    e.target.classList.add("bikes__brand__item--active");
    document.querySelector(".loader").style.visibility = "visible";
    const img = document.querySelector(".bikes__img img");
    img.src = bikesModel[e.target.getAttribute("data-bike")].imgSrc;
    img.addEventListener("load", () => {
      document.querySelector(".loader").style.visibility = "hidden";
    });

    // updating features
    const features = document
      .querySelector(".bikes__features__lists")
      .querySelectorAll(".bikes__features__col");
    const bikeFeatures = bikesModel[e.target.getAttribute("data-bike")];
    const price = document.querySelector(".bikes__price").firstChild;
    price.innerText = bikeFeatures.price;
    features[0].children[1].innerText = bikeFeatures.brand;
    features[2].children[1].innerText = bikeFeatures.mileage;
    features[3].children[1].innerText = bikeFeatures.displacement;
    features[4].children[1].innerText = bikeFeatures.year;
    features[1].children[1].innerText = bikeFeatures.model;
  });

// faq
const faq = document.querySelector(".faq__all-questions");

faq.addEventListener("click", (e) => {
  const qTab = e.target.closest(".faq-box__question");
  //guard clause
  if (!qTab) return;
  faq.querySelectorAll(".faq-box__question").forEach((el) => {
    //guard clause
    if (qTab.classList.contains("active--question")) return;

    if (el.classList.contains("active--question")) {
      el.classList.remove("active--question");
      el.nextElementSibling.classList.remove("active--answer");
    }
  });

  if (qTab.classList.contains("active--question")) {
    qTab.classList.remove("active--question");
    qTab.nextElementSibling.classList.remove("active--answer");
  } else {
    qTab.classList.add("active--question");
    qTab.nextElementSibling.classList.add("active--answer");
  }
});

//scroll back to top
const scrollBtn = document.querySelector(".scroll-up");
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const observer = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) scrollBtn.style.display = "flex";
  else scrollBtn.style.display = "none";
});
observer.observe(document.querySelector(".header"));
