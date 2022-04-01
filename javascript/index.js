const ids = [1, 2, 3, 4, 5];
const roomTitle = ["Room Mercury", "Room Venus", "Room Earth", "Room Mars", "Room Jupiter"];
const roomDescription = ["A simple blue room", "A modern room with features from another galaxy", "A simple room for you feel like home", "A modern room like your house", "The simplest room but feels good"];
const roomImage = ["../img/space-room-1.jpg", "../img/space-room-2.jpg", "../img/space-room-3.jpg", "../img/space-room-4.jpg", "../img/space-room-5.jpg",];
const roomPrice = ["$650.000", "$1.000.000", "$950.000", "$12.000.000", "$950.000"];

let roomCardItem = ids.map((id, index) => {
    return {
        id: id,
        title: roomTitle[index],
        description: roomDescription[index],
        image: roomImage[index],
        price: roomPrice[index], 
    }
})

console.log(roomCardItem)

let roomCardTitle = window.document.getElementsByClassName('roomTitle')[0];
let roomCardDescription = window.document.getElementsByClassName('roomDescription')[0];
let roomCardPrice = window.document.getElementsByClassName('roomPrice')[0];
let roomCardImage = window.document.getElementsByClassName('roomImage')[0];


let counterObject = 0
    roomCardTitle.innerHTML = roomCardItem[counterObject].title
    roomCardDescription.innerHTML = roomCardItem[counterObject].description
    roomCardPrice.innerHTML = roomCardItem[counterObject].price
    roomCardImage.setAttribute('src', roomCardItem[counterObject].image)

function goForward() {
    if (counterObject == 4 ) {
        counterObject = 0
        roomCardTitle.innerHTML = roomCardItem[counterObject].title
        roomCardDescription.innerHTML = roomCardItem[counterObject].description
        roomCardPrice.innerHTML = roomCardItem[counterObject].price
        roomCardImage.setAttribute('src', roomCardItem[counterObject].image)
    } else {
        counterObject++
        roomCardTitle.innerHTML = roomCardItem[counterObject].title
        roomCardDescription.innerHTML = roomCardItem[counterObject].description
        roomCardPrice.innerHTML = roomCardItem[counterObject].price
        roomCardImage.setAttribute('src', roomCardItem[counterObject].image)
    }
}

function goBackward() {
    if (counterObject == 0) {
        counterObject = 4
        roomCardTitle.innerHTML = roomCardItem[counterObject].title
        roomCardDescription.innerHTML = roomCardItem[counterObject].description
        roomCardPrice.innerHTML = roomCardItem[counterObject].price
        roomCardImage.setAttribute('src', roomCardItem[counterObject].image)
        console.log(counterObject)
    } else {
        counterObject--
        roomCardTitle.innerHTML = roomCardItem[counterObject].title
        roomCardDescription.innerHTML = roomCardItem[counterObject].description
        roomCardPrice.innerHTML = roomCardItem[counterObject].price
        roomCardImage.setAttribute('src', roomCardItem[counterObject].image)
        console.log(counterObject)
    }
}  

let spaceShipImage = window.document.getElementsByClassName('spaceShipImage')[0];

let secondCounter = 2

function imageGoForward() {
    if (secondCounter == 7) {
        secondCounter = 2
        console.log(secondCounter)
        spaceShipImage.setAttribute('src', `../img/spaceship-${secondCounter}.jpg`)
    } else {
        secondCounter++
        console.log(secondCounter)
        spaceShipImage.setAttribute('src', `../img/spaceship-${secondCounter}.jpg`)
    }
}

function imageGoBackward() {
    if (secondCounter == 2) {
        secondCounter = 7
        console.log(secondCounter)
        spaceShipImage.setAttribute('src', `../img/spaceship-${secondCounter}.jpg`)
    } else {
        secondCounter--
        console.log(secondCounter)
        spaceShipImage.setAttribute('src', `../img/spaceship-${secondCounter}.jpg`)
    }
}

// Top Button

let goToTopButton = window.document.getElementsByClassName('buttonGoTop')[0]

function scrollWindow() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTopButton.style.display = "flex"
    } else {
        goToTopButton.style.display = "none"
    }
}

window.onscroll = function() {scrollWindow()}

function goTop() {
    document.body.scrollTo({top: 0, behavior: "smooth"});
    document.documentElement.scrollTo({top: 0, behavior: "smooth"});
}

function goBooking() {
    document.body.scrollTop = 750;
    document.documentElement.scrollTop = 750;
}

function goAbout() {
    document.body.scrollTop = 1650;
    document.documentElement.scrollTop = 1650;
}

function goContact() {
    document.body.scrollTop = 3000;
    document.documentElement.scrollTop = 1650;
}