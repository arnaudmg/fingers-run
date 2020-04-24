//Toggle button algorithm using toggle method

document.querySelector(".js-toggler").addEventListener("change", (_event) => {
    document.body.classList.toggle("dark-mode")
    document.querySelector('.pictureBackground').classList.toggle("active") 
})

//localStorage for leaderboards and for character selection

const usernameInput = document.querySelector("input#username")
usernameInput.value = localStorage.getItem("username") ? localStorage.getItem("username") : ""

let cocoselected = document.querySelector('.coco a')
cocoselected.addEventListener('click', (event) => {
    if (usernameInput.value.length === 0) {
        event.preventDefault()
        alert("Veuillez entrer un nom avant de continuer")
        return
    }
    localStorage.setItem("username", usernameInput.value)
    localStorage.setItem("character", "coco")
})
let sgselected = document.querySelector('.superGirl')
sgselected.addEventListener('click', (event) => {
    if (usernameInput.value.length === 0) {
        event.preventDefault()
        alert("Veuillez entrer un nom avant de continuer")
        return
    }
    localStorage.setItem("username", usernameInput.value)
    localStorage.setItem("character", "supergirl")
})
let wmselected = document.querySelector('.watermelon')
wmselected.addEventListener('click', (event) => {
    if (usernameInput.value.length === 0) {
        event.preventDefault()
        alert("Veuillez entrer un nom avant de continuer")
        return
    }
    localStorage.setItem("username", usernameInput.value)
    localStorage.setItem("character", "watermelon")
})