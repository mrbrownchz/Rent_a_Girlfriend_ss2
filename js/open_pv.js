const dialog = document.getElementById("yt-dialog");
const click = document.getElementById("open-pv");
const close = document.getElementById("close");

click.addEventListener("click", () => {
    dialog.style.display = "flex";
})

close.addEventListener("click" , () => {
    // dialog.style.opacity = 0;
    dialog.style.display = "none";
})
