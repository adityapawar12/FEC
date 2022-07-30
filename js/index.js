let rating;

document.getElementById("secondSection").style.visibility = "hidden";

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
        getPage(rating);
    } else {
        alert('Select rating');
    }
}

function getPage(val) {
    document.getElementById("firstSection").style.visibility = "hidden";
    document.getElementById("secondSection").style.visibility = "visible";
    document.getElementById("ratingText").innerText = `You selected ${rating} out of 5`;

}
