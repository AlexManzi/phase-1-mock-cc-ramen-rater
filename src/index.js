function getRamen() {
    fetch(' http://localhost:3000/ramens')
    .then(function(resp) {
        return resp.json()
    })
    .then(function(ramenArr){
        ramenArr.forEach(data => {
            renderRamen(data)
        });
    
    })
}

//creating a function that takes in the data from array

function renderRamen(data) {
let ramenMenu = document.querySelector('#ramen-menu')
let mainPic = document.querySelector('.detail-image')
let name = document.querySelector('.name')
let restaurantName = document.querySelector('.restaurant')
let rating =document.querySelector('#rating-display')
let comment = document.querySelector('#comment-display')
    
let ramenPic = document.createElement('img')
ramenPic.src = data.image
ramenPic.addEventListener('click', () => {
    mainPic.src = data.image
    name.textContent = data.name
    restaurantName.textContent = data.restaurant
    rating.textContent = data.rating
    comment.textContent = data.comment
    
})
//add to parent
ramenMenu.appendChild(ramenPic)

}

//Up to here is perfect - now testing the last step

//Trying to create a new element that appears on screen
//also need to create a delete button


function newRamenGrabber() {
    let newName = document.querySelector('#new-name').value
    let newRestaurant = document.querySelector('#new-restaurant').value
    let newImg = document.querySelector('#new-image').value
    let newRating = document.querySelector('#new-rating').value
    let newComment = document.querySelector('#new-comment').value
    
    //set new variables for data pulled from .value
    //created a new (but somewhat crude) object to pull info from
    
    const newRamen = {
        id: 6,
        name: newName,
        restaurant: newRestaurant,
        image: newImg,
        rating: newRating,
        comment: newComment
    }

    let ramenMenu = document.querySelector('#ramen-menu')
    let mainPic = document.querySelector('.detail-image')
    let name = document.querySelector('.name')
    let pressedSubmit = document.querySelector('#submitButton')
    pressedSubmit.addEventListener('submit', (e) => {
        console.log('submit worked')
        e.preventDefault()
        mainPic.src = newRamen.image
        name.textContent = newRamen.name
        restaurantName.textContent = newRamen.restaurant
    })
}



newRamenGrabber()
getRamen()
