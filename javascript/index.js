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
        console.log(counterObject)
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
        console.log(counterObject)
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

