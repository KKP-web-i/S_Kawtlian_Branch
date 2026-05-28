function openImage(src) {

  document.getElementById("lightbox").style.display = "flex";

  document.getElementById("lightbox-img").src = src;
}

function closeImage() {

  document.getElementById("lightbox").style.display = "none";
}


// HERO PARALLAX EFFECT

const hero = document.querySelector("header");

document.addEventListener("mousemove", (e) => {

    if(hero){

      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;

      hero.style.backgroundPosition =
      `${50 + x * 10}% ${50 + y * 10}%`;

    }

});


// AUTO LOAD GALLERY IMAGES

const gallery = document.getElementById("gallery");

if (gallery) {

    for (let i = 1; i <= 58; i++) {

        const img = document.createElement("img");

        img.src = `images3/${i}.JPG`;

        img.onclick = function () {
            openImage(this.src);
        };

        gallery.appendChild(img);
    }

}