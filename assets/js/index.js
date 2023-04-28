
var scroll = false;

window.onload = () => {

    document.addEventListener("scroll", (event) => {
        lastKnownScrollPosition = window.scrollY;
        let target = document.getElementById('titleBar');
        let current = scroll;
        scroll = lastKnownScrollPosition > target.offsetHeight;
        if(scroll != current){
            document.getElementsByClassName('last')[0].classList.toggle('green');
            document.getElementById('topBar').classList.toggle('white');
        }
    });


    setInterval(() => {
        let elements = document.querySelectorAll(`g[stroke-linecap='butt']`);
        let random = Math.floor(Math.random() * elements.length);
        elements[random].classList.toggle('op');
    }, 50);
};