

/************************************************
*  Category buttons active state + open and close
***********************************************/

const catButtons = document.querySelectorAll(".catbtn")
const genderButton = document.querySelector(".gender")
const finishButton = document.getElementById("btnfinish")
const character = document.querySelector(".character")

for (let button of catButtons) {
    button.addEventListener("click", (e) => {
        const eventTarget = e.target;
        const active = document.querySelector(".active");

        if (active) {
            active.classList.remove("active")
        }

        eventTarget.parentNode.classList.add("active")
        finishButton.classList.remove("active")

        genderButton.classList.add("displayBlock")
        genderButton.classList.remove("displayNone")

        character.classList.add("charactermarginMenu")
        character.classList.remove("characterMargin")

        let allContent = document.querySelectorAll(".content");

        for (let content of allContent) {
            if (content.getAttribute("data-number") === button.getAttribute("data-number")) {
                content.classList.remove("displayNone")
                content.classList.add("displayFlex")
            } else {
                content.classList.add("displayNone")
                content.classList.remove("displayFlex")
            }
        }
    })

    // finish button

    finishButton.addEventListener("click", function () {
        let allContent = document.querySelectorAll(".content");
        for (let content of allContent) {
            content.classList.add("displayNone")
        }

        character.classList.remove("characterMarginMenu")
        character.classList.add("characterMargin")

        finishButton.classList.add("active")
        button.classList.remove("active")

        genderButton.classList.remove("displayBlock")
        genderButton.classList.add("displayNone")
    })


}
//  source: https://codepen.io/MohdHussein/pen/MWKEvdp

//---



/************************************************
*  Move items to character(#dropzone) on click
***********************************************/

const dropzone = document.getElementById("dropzone")

const dropzoneArray = dropzone.childNodes

let allImg = document.querySelectorAll(".object")


allImg.forEach(function (item) {

    const imgList = item.classList

    switch (true) {
        case imgList.contains("skin"):
            placeItem("skin")
        case imgList.contains("face"):
            placeItem("face")
        case imgList.contains("pants"):
            placeItem("pants")
        case imgList.contains("shoes"):
            placeItem("shoes")
        case imgList.contains("hair"):
            placeItem("hair")
        case imgList.contains("shirt"):
            placeItem("shirt")
        case imgList.contains("acces"):
            placeItem("acces")
    }

    function placeItem(name) {
        if (imgList.contains(name)) {
            item.addEventListener("click", (e) => {
                const eventTarget = e.target
                const classes = document.querySelectorAll("#dropzone > ." + name)

                if (classes.length == 0) {
                    eventTarget.classList.add(name + "Selected")
                    dropzone.appendChild(eventTarget)
                }
            })
        }
    }

})

// ---


/************************************************
*  Remove items from character(#dropzone) when cross icon is clicked
***********************************************/

const crosses = document.querySelectorAll(".cross")

for (cross of crosses) {

    cross.addEventListener("click", (e) => {
        const eventTarget = e.target;

        const number = eventTarget.dataset.number

        const parent = document.querySelector(`.imgcontainer[data-number="${number}"]`)


        for (img of allImg) {
            if (img.dataset.number == number) {
                parent.appendChild(img)

                img.classList.remove("pantsSelected", "skinSelected", "faceSelected", "shoesSelected", "hairSelected", "shirtSelected", "accesSelected")
            }
        }
    })
}

//---



/************************************************
*  Remove all items from character(#dropzone) on click of "remove all" button
***********************************************/

const removeAllButton = document.getElementById("removeAll")

function removeAll() {


    if (dropzone.childNodes.length > 0) {
        console.log("dropzone has children")

        const dropzoneChildren = dropzone.childNodes

        console.log("This is how many childnodes dropzone has", dropzoneChildren)

        for (let i = dropzoneChildren.length; i--;) {

            const item = dropzoneChildren[i]

            const childNumber = item.dataset.number;

            const parentNumber = document.querySelector(`.imgcontainer[data-number="${childNumber}"]`)

            parentNumber.appendChild(item)

            item.classList.remove("pantsSelected", "skinSelected", "faceSelected", "shoesSelected", "hairSelected", "shirtSelected", "accesSelected")
        }

    } else {
        console.log("dropzone doesnt have children")
    }
}

removeAllButton.addEventListener("click", removeAll)

//---



/************************************************
*  Pop up ads
***********************************************/

const popUp = document.querySelector(".popUp")
const popUpCross = document.getElementById("popUpCross")
const popUpCross2 = document.getElementById("popUpCross2")
const popUp2 = document.querySelector(".popUp2")
const popAccept = document.getElementById("accept")
const popDecline = document.getElementById("decline")
const popUp3 = document.querySelector(".popUp3")

setTimeout(function () {
    popUp.classList.add("displayBlock")
    popUp.classList.add("anim")
}, 3000)

popUpCross.addEventListener("click", function () {

    if (popUpCross.classList.contains("popUpCrossMove")){
        popUp.classList.remove("displayBlock")
    }else{
        popUpCross.classList.add("popUpCrossMove")
    }

})

setTimeout(function () {
    popUp2.classList.add("displayFlex")
    popUp2.classList.add("anim2")
}, 4000)

popAccept.addEventListener("click", function () {
    popUp2.classList.remove("displayFlex")
})

popDecline.addEventListener("click", function () {
    popUp3.classList.add("displayGrid")
    popUp2.classList.remove("displayFlex")
})

popUpCross2.addEventListener("click", function () {
    popUp3.classList.remove("displayGrid")
})

//---


/************************************************
*  Music toggle
***********************************************/

const musicToggle = document.getElementById("musicToggle")

function toggleMusic() {
    const musicElem = document.getElementById("music")
    musicElem.volume = 0.5;
    musicElem.loop = true;
    if (musicElem.paused) {
        musicElem.play()
        musicToggle.src = "images/icon-sound.svg"
    } else {
        musicElem.pause()
        musicToggle.src = "images/icon-soundoff.svg"
    }
}

musicToggle.addEventListener("click", function () {
    toggleMusic()
})

// Source: https://siongui.github.io/2012/10/12/javascript-toggle-sound-onclick/

//---



/************************************************
*  Like/dislike comment buttons
***********************************************/

const likes = document.querySelectorAll(".like");
const disLikes = document.querySelectorAll(".dislike")
let score = 0;


function scoreUp(target) {
    score = score + 1;

    const pElement = target.nextElementSibling;

    pElement.textContent = score;
}

function scoreDown(target) {
    score = score - 1;

    const pElement = target.previousElementSibling;

    pElement.textContent = score;
}

for (let i = 0; i < likes.length; i++) {

    likes[i].addEventListener("click", function () {
        scoreUp(likes[i])
    })
}

for (let i = 0; i < disLikes.length; i++) {

    disLikes[i].addEventListener("click", function () {
        scoreDown(disLikes[i])
    })
}

//---