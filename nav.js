const titleimg = "/static/e.png";
const navItemsInfo = [ 
  { name: "PHOTOGRAPHY", link: "", expanded: 
    [ 
      { name: "A-Ma", link: "/photography/a-ma/" }, 
      { name: "Masks", link: "/photography/masks/" }, 
      { name: "United we Bargain, Divided we Beg", link: "/photography/united-we-bargain-divided-we-beg" }, 
      { name: "Youth Against", link: '/photography/youth-against' }
    ],
  },
  { name: "ABOUT", link: "about/" , expanded: [] }
  //{ name: "painting", link: "painting/", expanded: []}
];

const navItemsHTML = () => {
  let navItemsStr = ''
  for (const navItem of navItemsInfo) {
    const isActive = window.location.href.includes(navItem.link) ? 'active' : '';
    let expanded = ``;
    for (const expandedItem of navItem.expanded) {
      expanded += 
      `<div> 
          <a href="${expandedItem.link}"> 
            ${expandedItem.name} 
          </a> 
      </div>`;
    }
    expanded = `<div class="smallDropDownContent"> ${expanded} </div>`;
    navItemsStr += `<div class="smallDropDown">
      <a class="${isActive}" href="/${navItem.link}"> ${navItem.name} </a>
      ${expanded}
    </div>`;
  }
  return navItemsStr;
};
const titleImgHTML = () => {
  return `<a href="/"> <img class="titleimg" loading="lazy" src=${titleimg} /></a>`
};
const dropDownItemsHTML = () => {
  let navItemsStr = ''
  for (const navItem of navItemsInfo) {
    let expanded = ``;
    for (const expandedItem of navItem.expanded) {
      expanded += 
      `<div class="dropDownExpanded"> 
          <a href="${expandedItem.link}"> 
            ${expandedItem.name} 
          </a> 
      </div>`;
    }
    navItemsStr += `<div class="dropDownItem ">
      <a href="/${navItem.link}">${navItem.name} ${expanded} </a>
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
