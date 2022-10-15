document.getElementById("icon_menu").addEventListener("click", show_menu);

function show_menu() {
    document.querySelector(".menu").classList.toggle("show_menu")
}


window.onscroll = () => {
    let posicion = window.pageYOffset || document.documentElement.scrollTop;
    let iconHeart = document.getElementById("icon_heart");
    let iconFire = document.getElementById("icon_fire");
    iconHeart.style.bottom = posicion * 0.1 + 'px';
    iconFire.style.top = posicion * 0.1 + "px";
}