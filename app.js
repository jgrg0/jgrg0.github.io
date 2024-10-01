document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img"); 

    for(const image of images){
        fetch("https://dog.ceo/api/breed/chow/images/random")
        .then(Response => Response.json())
        .then(data => {image.src = data.message;
            image.width = 150;
            image.height = 150;
    })
    }
}



)