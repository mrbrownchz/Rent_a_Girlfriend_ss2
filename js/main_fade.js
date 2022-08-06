let fadeIndex = 0;

function showFade(n) {
    let image = document.getElementsByClassName("main-fade");
    let btn = document.getElementsByClassName("img");
    let fade_box = document.getElementById("fade-box");
    let slides = document.getElementById("slide");
    for (n = 0; n < image.length; n++) {
        image[n].style.opacity = 0;
        btn[n].style.marginRight = "0px";
    }
    fadeIndex++
    if(fadeIndex > image.length){fadeIndex = 1}
    image[fadeIndex-1].style.opacity = 1;
    btn[fadeIndex-1].style.marginRight = "20px";
    switch (fadeIndex-1) {
        case 0:
            // fade_box.style.boxShadow = "var(--chizuru) 5px 5px";
            slides.style.backgroundImage = "url(../media/img/slide/chizuru.jpg)";
            break;
        case 1:
            // fade_box.style.boxShadow = "var(--mami) 5px 5px";
            slides.style.backgroundImage = "url(../media/img/slide/mami.jpg)";
            break;
        case 2:
            // fade_box.style.boxShadow = "var(--ruka) 5px 5px";
            slides.style.backgroundImage = "url(../media/img/slide/ruka.jpg)";
            break;
        case 3:
            // fade_box.style.boxShadow = "var(--sumi) 5px 5px";
            slides.style.backgroundImage = "url(../media/img/slide/sumi.jpg)";
            break;
    }
    setTimeout(() => {
        showFade(n)
    },5000)
}


function currentSlide(n) {
    showFade(fadeIndex = n);
}

showFade();