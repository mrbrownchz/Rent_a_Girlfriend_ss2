const loader = document.getElementById("loader")
window.addEventListener("load" , () => {
    setTimeout(() => {
        loader.style.opacity = 0;
        document.body.style.overflow = "auto";
        setTimeout(() => {
            loader.style.display = "none";
        },300)
    },1000)
})