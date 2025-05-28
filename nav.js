const titleimg = "/static/e.png";
const navItemsInfo = [ 
  { name: "photo", link: "photography/"},
  { name: "info", link: "about/" },
  { name: "painting", link: "painting/" }
];

const navItemsHTML = () => {
  let navItemsStr = ''
  for (const navItem of navItemsInfo) {
    const isActive = window.location.href.endsWith(navItem.link) ? 'active' : '';
    navItemsStr += `
    <a class="${isActive}" href="/${navItem.link}">${navItem.name}</a>`;
  }
  return navItemsStr;
};
const titleImgHTML = () => {
  return `<a href="/"> <img class="titleimg" loading="lazy" src=${titleimg} /></a>`
};
const dropDownItemsHTML = () => {
  let navItemsStr = ''
  for (const navItem of navItemsInfo) {
    navItemsStr += `<div class="dropDownItem ">
      <a href="/${navItem.link}">${navItem.name} → </a>
    </div>`;
  }
  return navItemsStr;
};

const bigNav =

    `
    <div class="nav">
      <div id="nav-items" class="links">
        ${titleImgHTML()}
        <div></div>
        ${navItemsHTML()}
      </div>
    </div>
`;

const smallNav =  
  `<div>
    ${titleImgHTML()}
    <button onClick=useDropDown() class="dropDownButton"> ≡ </button>
  </div>`;

const dropDownNav = 
  `
  <div>
    ${titleImgHTML()}
    <button onClick=useDropDown() class="dropDownButton"> ≡ </button>
  </div>
  <div class="dropDown">
    <button onClick=useDropDown() class="dropDownButton"> x </button>
    ${dropDownItemsHTML()}
  </div>`;

let dropDownOn = false;

const useDropDown = () => {
  dropDownOn = !dropDownOn;
  renderNav();
}

const renderNav = () => {
  const div = window.innerWidth > 950 ? bigNav : dropDownOn ? dropDownNav : smallNav;
  if (dropDownOn) {
    document.querySelector('body').style['overflow-y'] = "hidden";
  } else {
    if (document.querySelector('body').style['overflow-y'] === "hidden") {
      document.querySelector('body').style['overflow-y'] =  "auto";
    }
  }
  document.querySelector('#navContainer').innerHTML = div;
};

$(window).on('load', function(){
  $('.loader').addClass('hide');
  $('.content').removeClass('hide');
});

window.addEventListener("resize", renderNav);

renderNav();

$(document).ready(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show1");
      } 
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hidden1");
  hiddenElements.forEach((el) => observer.observe(el));
  
  const hidden2Elements = document.querySelectorAll(".hidden2");
  hidden2Elements.forEach((el) => observer.observe(el));
});
