const ratingButtons = document.getElementsByName("rating")
const ratingText = document.getElementById("rating-text")
const card = document.getElementsByClassName("card-inner")[0]

const submitRating = () => {
    let isValid = false
    for(let i = 0; i < ratingButtons.length; i++){
        if(ratingButtons[i].checked){
            ratingText.innerText = ratingButtons[i].value
            isValid = true
        }
    }
    if(!isValid){
        alert("Please select a rating!")
        return
    }
    card.classList.add("submitted")
}