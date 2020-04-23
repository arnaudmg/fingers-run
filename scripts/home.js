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
      "jean": 470,
      "frederic": 3,
      "emmanuel":493,
      "lea": 1,
      "jc": 999,
    }))
  }

  $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });