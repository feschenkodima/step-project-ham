let btnList = document.querySelectorAll(
  ".services-nav__list .services-nav__item"
);
for (let i = 0; i <= btnList.length - 1; i++) {
  const el = btnList[i];
  el.addEventListener("click", btnClickHandler);
}
function btnClickHandler() {
  document.querySelector(".services-nav__item.active").classList.remove("active");
  event.target.classList.add("active");
  document.querySelector(".services-content.active").classList.remove("active");
  event.target.classList.add("active");
  const currentIdex = event.target.dataset.index;
  document.getElementById("js-tab-" + currentIdex).classList.add("active");
}
//---------------Фильтр по data--------------------
let filters = document.querySelectorAll("li[data-filter]");

for (let filter of filters) {
  filter.addEventListener("click", function (e) {
    e.preventDefault();

    let filterId = filter.getAttribute("data-filter");
    let itemsFiltred = document.querySelectorAll(".amazing-img__item");

    itemsFiltred.forEach(function (c) {
      if (filterId === "all") {
        c.classList.remove("hide");
      } else {
        if (c.getAttribute("data-cat") !== filterId) {
          c.classList.add("hide");
        } else {
          c.classList.remove("hide");
        }
      }
    });
  });
}
//-------------------Load More--------000
let loadMoreImg = [
  {
    img: "./img/Step Project Ham/graphic design/graphic-design1.jpg",
    data: 'data-cat="graphic"',
  },
  {
    img: "./img/Step Project Ham/landing page/landing-page4.jpg",
    data: 'data-cat="landing"',
  },
  {
    img: "./img/Step Project Ham/landing page/landing-page2.jpg",
    data: 'data-cat="landing"',
  },
  {
    img: "./img/Step Project Ham/wordpress/wordpress9.jpg",
    data: 'data-cat="wordpress"',
  },
  {
    img: "./img/Step Project Ham/wordpress/wordpress7.jpg",
    data: 'data-cat="wordpress"',
  },
  {
    img: "./img/Step Project Ham/web design/web-design7.jpg",
    data: 'data-cat="web"',
  },
  {
    img: "./img/Step Project Ham/web design/web-design3.jpg",
    data: 'data-cat="web"',
  },
  {
    img: "./img/Step Project Ham/graphic design/graphic-design1.jpg",
    data: 'data-cat="graphic"',
  },
  {
    img: "./img/Step Project Ham/landing page/landing-page2.jpg",
    data: 'data-cat="landing"',
  },
  {
    img: "./img/Step Project Ham/web design/web-design7.jpg",
    data: 'data-cat="web"',
  },
  {
    img: "./img/Step Project Ham/graphic design/graphic-design1.jpg",
    data: 'data-cat="graphic"',
  },
  {
    img: "./img/Step Project Ham/wordpress/wordpress9.jpg",
    data: 'data-cat="wordpress"',
  },
];

let loadMoreButton = document.querySelector(".load-button");
loadMoreButton.addEventListener("click", function () {
  const container = document.getElementsByClassName("amazing-img__list")[0];

  setTimeout(function () {
    const postList = loadMoreImg.splice(0, 4);

    postList.forEach((item) => {
      const newShowingImg = document.createElement("li");
      newShowingImg.classList.add("amazing-nav__item");

      newShowingImg.innerHTML = `<img src="${item.img}" alt="" height="211px"
      width="285px" ${item.data}/> <div class="amazing-img--perview">
      <div class="amazing-img--perview__i">
        <i class="fas fa-link"></i>
        <i class="fas fa-square"></i>
      </div>
      <h3 class="amazing-img--perview__title">Creative Design</h3>
      <p class="amazing-img--perview__text">Landing Page</p>
    </div>`;
      newShowingImg.style.display = "flex";
      newShowingImg.style.height = "211px";
      newShowingImg.style.width = "285px";
      newShowingImg.style.boxSizing = "border-box";
      container.append(newShowingImg);
    });

    if (loadMoreImg.length === 0) {
      loadMoreButton.style.display = "none";
    }
  }, 1000);
});




