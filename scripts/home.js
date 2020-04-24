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

if(localStorage.getItem("highscore") == null){
  // fake highscore for demo
  console.log("setting shit for PaaS")
  localStorage.setItem("highscore", JSON.stringify({
    "Frederic": 470,
    "Louise": 367,
    "Lena":300,
    "Vichec":120,
  }))
}