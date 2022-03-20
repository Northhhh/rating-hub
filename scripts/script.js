function submit()
{
    let rating = document.querySelector('input[name="rating"]:checked');
    if (rating == null) alert("You haven't voted yet, please choose any rating to continue!");
    else
    {
        rating = rating.value;
        let ratingParagraph = document.querySelector('#your-rating');
        let ratingContainer= document.querySelector('#rating');
        let thankYouContainer= document.querySelector('#thank-you');
        ratingParagraph.innerHTML=`You selected ${rating} out of 5`;
        ratingContainer.style.animation = 'hide-div 1.1s';
        thankYouContainer.style.animation = 'show-div 2s';

        setTimeout(() => {
            ratingContainer.hidden = true;
            thankYouContainer.hidden = false;
        }, 1000);
    }
}