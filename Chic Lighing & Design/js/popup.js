const images = [...document.querySelectorAll('.gallary__thumb')];
 
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index-img');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 1;  

 images.forEach((item, im) => {
    item.addEventListener('click', () => {
        currentIndex = im + 1; 
        updateImage(currentIndex);
        popup.classList.toggle('active');
    })
})

const updateImage = (im) => {
    
    if (im < 1) {
        currentIndex = 45; 
    } else if (im > 45) {
        currentIndex = 1;  
    } else {
        currentIndex = im;
    }

    let path = `images/gallary/${currentIndex}.jpg`;
    largeImage.src = path;
    imageName.innerHTML = path;
    imageIndex.innerHTML = `${currentIndex}`;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    updateImage(currentIndex - 1);
})

rightArrow.addEventListener('click', () => {
    updateImage(currentIndex + 1);
})