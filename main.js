// script for image carousel
    let images = Array.from(document.getElementsByClassName("imgCarousel"))
    let mainPhoto = document.getElementById("main-image")
    
    function updateImage(event){
        let image = event.target
        mainPhoto.src = image.src
    }
    
    images.forEach(function(image){
        image.addEventListener("click", updateImage)
    });

//script for footer year
    var date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;