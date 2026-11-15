/*
 * TODO: Center piece on cursor on selection.
 * */


const white_pieces = document.querySelectorAll('.white-pieces')[0].children;
const black_pieces = document.querySelectorAll('.black-pieces')[0].children;
const all_pieces = document.querySelectorAll('.piece');
const pieceRanks = ["12.5%", "0%", "75%", "87.5%"]
var whiteRank = 2, blackRank = 0;
var playSide = "white";
var turnSide = "white";

if(playSide === "black") {
    whiteRank = 0;
    blackRank = 2;
}

for(var i = 0; i < 16; i++) {
    if(i < 8) {
        white_pieces[i].style.left = 12.5*i + "%";
        white_pieces[i].style.top = pieceRanks[whiteRank];
        black_pieces[i].style.left = 12.5*i + "%";
        black_pieces[i].style.top = pieceRanks[blackRank];
        continue;
    } else {
        white_pieces[i].style.left = (12.5*(i-8)) + "%";
        white_pieces[i].style.top = pieceRanks[whiteRank + 1];
        black_pieces[i].style.left = (12.5*(i-8)) + "%";
        black_pieces[i].style.top = pieceRanks[blackRank + 1];
        continue;
    }
}

var isDown = false;
var offset = [0, 0];
var actPiece = null;
var origPos = [0, 0];

function mousedown(event) {
    isDown = true;
    actPiece = event.currentTarget;
    offset = [actPiece.offsetLeft - event.clientX, actPiece.offsetTop - event.clientY];
    origPos = [actPiece.style.left, actPiece.style.top];
    document.addEventListener("mousemove", movePiece, true);
}

function mouseup(event) {
    idDown = false;
    actPiece.style.left = origPos[0];
    actPiece.style.top = origPos[1];
    actPiece = null;
    document.removeEventListener("mousemove", movePiece, true);
}

function movePiece(event) {
    event.preventDefault();
    if(isDown) {
        actPiece.style.left = (event.clientX + offset[0]) + "px";
        actPiece.style.top = (event.clientY + offset[1]) + "px";
    }
}

for(let i = 0; i < all_pieces.length; i++) {
    all_pieces[i].addEventListener("mousedown", mousedown, true);
    all_pieces[i].addEventListener("mouseup", mouseup, true);
    // all_pieces[i].addEventListener("mouseout", mouseup, true);
}
