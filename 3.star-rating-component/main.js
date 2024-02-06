const stars = document.querySelectorAll('.bxs-star');
const selectedRatingValueText = document.querySelector('.Selected-rating-value');


let currentTotalSelectedStars = -1;


stars.forEach((starItem, index) => {
    starItem.dataset.rating = index + 1;
    starItem.addEventListener('mouseover', handleMouseOver);
    starItem.addEventListener('click', handleClick);
    starItem.addEventListener('mouseleave', handleLeave);
})

function handleMouseOver(event) {
    console.log('overed');
    const currentRatingValue = event.target.dataset.rating;
    if(!currentRatingValue) return;
    else handleUpdateRatingState(currentRatingValue);
}

function handleUpdateRatingState(getCurrentRatingValue) {
    for(let i = 0; i < 5; i++ ) {
        if(i < getCurrentRatingValue) {
            stars[i].classList.replace('bxs-star', 'bx-star');
        } else {
        stars[i].classList.replace('bx-star', 'bxs-star');
        }
    }
}

function handleClick(event) {
    const currentRatingValue = event.target.dataset.rating;
    currentTotalSelectedStars = currentRatingValue;
    handleUpdateRatingState(currentTotalSelectedStars)
    selectedRatingValueText.textContent = currentTotalSelectedStars
}

function handleLeave() {
    handleUpdateRatingState(currentTotalSelectedStars);
}