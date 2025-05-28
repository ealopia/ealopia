const rootFolder = '/static/youth-against/';
const imageNames = [       
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
let images = ``;
for (const image of imageNames) {
    images +=`<span class="img-container"><img class="sketch-short hidden2" src="${rootFolder}${image}"></span>`;
}

let div = `
<div class="display-item">
    <div class="display-item-img">
        ${images}
    </div>
</div>`;

document.querySelector('#displayContainer').innerHTML = div;

$('.img-container').on( "click", function() { 
    $(this).add('.full-screen-container');
});