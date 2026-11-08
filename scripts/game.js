const white_pieces = document.querySelectorAll('.white-pieces')[0].children;
const black_pieces = document.querySelectorAll('.black-pieces')[0].children;
const all_pieces = document.querySelectorAll('.piece');

var isDown = false;
var offset = [0, 0];

function mousedown(event) {
    isDown = true;
    offset = [event.currentTarget.offsetLeft - event.clientX, event.currentTarget.offsetTop - event.clientY];
    event.currentTarget.addEventListener("mousemove", movePiece, true);
}

function mouseup(event) {
    idDown = false;
    event.currentTarget.removeEventListener("mousemove", movePiece, true);
}

function movePiece(event) {
    event.preventDefault();
    if(isDown) {
        event.currentTarget.style.left = (event.clientX + offset[0]) + "px";
        event.currentTarget.style.top = (event.clientY + offset[1]) + "px";
    }
}

for(let i = 0; i < all_pieces.length; i++) {
    all_pieces[i].addEventListener("mousedown", mousedown, true);
    all_pieces[i].addEventListener("mouseup", mouseup, true);
    all_pieces[i].addEventListener("mouseout", mouseup, true);
}
