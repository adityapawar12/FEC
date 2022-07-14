let rating;

function onRatingSelect(ratingNum) {
    rating = ratingNum;
    let ratingDivs = document.getElementsByClassName('rating-num');
    for(let i = 0; i < ratingDivs.length; i++) {
        ratingDivs[i].style.backgroundColor = 'hsl(216deg 12% 54% / 17%)';
    }
    document.getElementById(rating).style.backgroundColor = 'hsl(217, 12%, 63%)'
}

function onRatingSubmit() {
    if(rating !== undefined) {
        console.log('click', rating);
    } else {
        console.log('select rating');
    }
}
