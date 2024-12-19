let myCircle = document.querySelector('.CCircle').style;

function FSuivreSouris() {
    myCircle.top = window.event.y + "px";
    myCircle.left = window.event.x + "px";
}
