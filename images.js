
const rootFolder = '/static';
const data = [
    { 
        title: 'Youth Against',
        url: 'youth-against',
        description: 'Youth Against is an exploration of Youth Against Displacement and their coalition, highlighting the organizers and workers as well as their strategies, challenges, and successes in combating displacement and supporting community residents. Youth Against explores the intimate moments of organizing, focusing on the people responsible leading the fight, not just the fight itself.',
        images: [       
        'YAD May Day-27.jpg',      
        'YAD May Day-43.jpg',
        'YAD May Day-10.jpg',   
        'YAD May Day-34.jpg',  
        'YAD May Day-66.jpg',
        'YAD May Day-17.jpg',    
        'YAD May Day-38.jpg',     
        'YAD May Day-92.jpg',
        'YAD May Day-18.jpg',     
        'YAD May Day-39.jpg',     
        'YAD May Day-93.jpg',
        'YAD May Day-2.jpg',      
        'YAD May Day-41.jpg',
        'YAD May Day-26.jpg',     
        'YAD May Day-42.jpg'
        ]
    },
    {
        title: 'Masks',
        url: 'masks',
        description: 
            `There is inherent tension in Manhattan’s Chinatown. Any tourist of Chinatown will always be an outsider but is always a welcome patron. However, without a Chinatown community there would be no tourist; without a tourist there would be no Chinatown. They exist in tandem and in tension, economic survival at the risk of gentrification and dilution.
            <br>
            <br>
            This project is an exploration of that inherent tension and dependency. It is also an exploration
            on the lack of care for the community and residents from outsiders paired with a naïve curiosity
            of those exact residents. There are also those that lie in between, neither tourist nor resident,
            people who appreciate Chinatown for what it is`,
        images: [
            'Round 2-056.jpg',
            'Round 2-084.jpg',
            'Round 2-101.jpg',
            'Round 2-114.jpg',
            'Round 2-124.jpg',
            'Round 2-127.jpg',
            'Round 2-140.jpg',
            'Round 2-160.jpg',
            'Round 2-062.jpg',
            'Round 2-089.jpg',
            'Round 2-102.jpg',
            'Round 2-116.jpg',
            'Round 2-125.jpg',
            'Round 2-130.jpg',
            'Round 2-144.jpg',
            'Round 2-076.jpg',
            'Round 2-090.jpg',
            'Round 2-106.jpg',
            'Round 2-117.jpg',
            'Round 2-126.jpg',
            'Round 2-133.jpg',
            'Round 2-155.jpg'
        ]
    }, 
    {
        title: 'A-ma',
        url: 'a-ma',
        description: `These photographs were taken during my return to Taiwan after a four-year absence, marking a deeply personal journey of reconnection and reflection. The project documents tender moments shared with my grandmother in the wake of my grandfather’s passing, less than a year prior. After six decades of marriage, his absence lingered in the air.
            <br>
            <br>
            Through these images, I sought to explore the complexities of grief and rekindling—how we cope, heal, and ultimately seek meaning in the wake of profound loss. This work is not just a chronicle of time spent with my grandmother but an intimate meditation on resilience, memory, and the quiet strength found in the bonds that tether us to one another.`,
        images: [
            'A-ma Teun-1.jpg',
            'A-ma Teun-2.jpg',
            'A-ma Teun-30.jpg',
            'A-ma Teun-41.jpg',
            'A-ma Teun-6.jpg',
            'A-ma Teun-10.jpg',
            'A-ma Teun-20.jpg',
            'A-ma Teun-31.jpg',
            'A-ma Teun-42.jpg',
            'A-ma Teun-7.jpg',
            'A-ma Teun-13.jpg',
            'A-ma Teun-22.jpg',
            'A-ma Teun-33.jpg',
            'A-ma Teun-45.jpg',
            'A-ma Teun-8.jpg',
            'A-ma Teun-14.jpg',
            'A-ma Teun-23.jpg',
            'A-ma Teun-34.jpg',
            'A-ma Teun-46.jpg',
            'A-ma Teun-9.jpg',
            'A-ma Teun-15.jpg',
            'A-ma Teun-24.jpg',
            'A-ma Teun-35.jpg',
            'A-ma Teun-47.jpg',
            'A-ma Teun-16.jpg',
            'A-ma Teun-26.jpg',
            'A-ma Teun-36.jpg',
            'A-ma Teun-5.jpg',
            'A-ma Teun-18.jpg',
            'A-ma Teun-3.jpg',
            'A-ma Teun-38.jpg',
            'A-ma Teun-52.jpg'
        ]
    },
    {
      url: 'united-we-bargain-divided-we-beg',
      title: 'United we Bargain, Divided we Beg',
      description: 'In a time when fascism and authoritarianism are on the rise, labor unions stand as one of the last defenses for democracy, pushing back against exploitation. This project is a depiction of the power of collective action, the resilience of workers, and the urgency of this moment: when workers unite, they hold the power to shape a more just future.',
      images: [
        'ilford_hp5_plus_01_16_2025_000211000006.jpg',
        'ilford_hp5_plus_01_16_2025_000211000022.jpg',
        'ilford_hp5_plus_01_16_2025_000211000007.jpg',
        'ilford_hp5_plus_01_16_2025_000211000026.jpg',
        'ilford_hp5_plus_01_16_2025_000211000008.jpg',
        'ilford_hp5_plus_01_16_2025_000211000034.jpg',
        'ilford_hp5_plus_01_16_2025_000211000017.jpg',
        'ilford_hp5_plus_01_16_2025_000211000037.jpg',
        'ilford_hp5_plus_01_16_2025_000211000020.jpg'
      ]
    }
];


let images = ``;
let page = [];
for (const potentialPage of data) {
    if (window.location.href.includes(potentialPage.url)) {
        page = potentialPage;
        break;
    }
}
for (const image of page.images) {
    images +=`<div> <img class="sketch-short hidden2" src="${rootFolder}/${page.url}/${image}"></div>`;
}

let div = `
<div class="flex-container">
    <div> 
        <h1> ${page.title} </h1>
        ${page.description} 
    </div>
    <div id="displayContainer">
        <div class="display-item">
            <div class="img-flex-container">
                ${images}
            </div>
        </div>
    </div>
</div>
`;

document.querySelector('.content-child').innerHTML = div;

$('.img-container').on( "click", function() { 
    $(this).add('.full-screen-container');
});


/*
let div = `
<h1> ${page.title} </h1>
<div class="flex-container">
    <div class=id="fullScreenImages">
    
        <div> ${carouselImages} </div>
                <a class="carousel-control-prev" href="#fullScreenImages" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#fullScreenImages" role="button" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
</div>
`;

document.querySelector('.content-child').innerHTML = div;

$('.img-container').on( "click", function() { 
    $(this).add('.full-screen-container');
});

// class="carousel slide" data-bs-ride="carousel"
/*

        <a class="carousel-control-prev" href="#fullScreenImages" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#fullScreenImages" role="button" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>

*/