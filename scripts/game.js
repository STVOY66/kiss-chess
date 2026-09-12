const white_pieces = document.querySelectorAll('.white-pieces')[0].children;
const black_pieces = document.querySelectorAll('.black-pieces')[0].children;

console.log(white_pieces.length);
console.log(black_pieces.length);

const player_white = true;

// if(player_white) {
//     for(let i = 0; i < white_pieces.length; i++) {
//         if(white_pieces[i].dataset.piece == "pawn") {
//             white_pieces[i].style.transform = "translate(" + i*80 + "px," + 480 + "px)";
//         }
//     }
// } else {
//     for(let i = 0; i < white_pieces.length; i++) {
//         if(white_pieces[i].dataset.piece == "pawn") {
//             white_pieces[i].style.transform = "translate(" + i*80 + "px," + 0 + "px)";
//         }
//     }
// }
