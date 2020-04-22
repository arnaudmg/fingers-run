function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

document.querySelector(".js-toggler").addEventListener("change", (_event) => {
    document.body.classList.toggle("dark-mode")
    document.querySelector('.home').classList.toggle("active") 
})