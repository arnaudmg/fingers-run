document.querySelector(".js-toggler").addEventListener("change", (_event) => {
    document.body.classList.toggle("dark-mode")
    document.querySelector('pictureBackground').classList.toggle("active") 
})