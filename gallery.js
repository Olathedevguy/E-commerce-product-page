// thumb
const mainImages = document.querySelectorAll('.default .main-img img');
//selects all images under .main-img using path

const thumbnails = document.querySelectorAll('.default .thumb-list div');
const lightboxmainimages = document.querySelectorAll('.lightbox .main-img img');
const lightboxThumbnails = document.querySelectorAll('.lightbox .thumb-list div');
const lightbox = document.querySelector('.lightbox');
const iconClose = document.querySelector('.icon-close');
const iconPrev = document.querySelector('.previous-icon');
const iconNext = document.querySelector('.next-icon');
// const backDrop = document.querySelector('.backdrop');
let currentindex = 0;

const changeImage = ((index, mainImages, thumbnails) =>{
    
    mainImages.forEach((img) => {
        img.classList.remove('active');
    });

    thumbnails.forEach((thumb) =>{
        thumb.classList.remove('active'); //removes active class for each thumbnail
    })

    mainImages[index].classList.add('active');
    thumbnails[index].classList.add('active');
    currentindex = index;
})

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        changeImage(index, mainImages, thumbnails);
    });
});


lightboxThumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        changeImage(index, lightboxmainimages, lightboxThumbnails);
    });
});


mainImages.forEach((img, index) =>{
    img.addEventListener('click', ()=>{
        lightbox.classList.add('active');
        changeImage(index, lightboxmainimages, lightboxThumbnails);
    })
})

iconPrev.addEventListener('click', ()=>{

    if (currentindex <= 0) {
        changeImage(mainImages.length - 1, lightboxmainimages, lightboxThumbnails);
    } else {
        changeImage(currentindex - 1, lightboxmainimages, lightboxThumbnails);
    }

});

iconNext.addEventListener('click', ()=>{
    
    if (currentindex >= mainImages.length - 1) {
        changeImage(0, lightboxmainimages, lightboxThumbnails);
    } else {
        changeImage(currentindex + 1, lightboxmainimages, lightboxThumbnails);
    }
})


iconClose.addEventListener('click', ()=>{
lightbox.classList.remove('active')
})

