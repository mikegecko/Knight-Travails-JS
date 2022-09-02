class GameBoard {
    tiles = [];
    constructor() {
        for (let index = 0; index < 8; index++) {
            for (let s = 0; s < 8; s++) {
                let obj = [index, s];
                this.tiles.push(obj);
            }
        }
    }

}

function knightMoves(currentPos, finalPos) {
    //Shows the shortest possible way to get from one square to another by outputting all squares the knight will stop along the way
    //ex. knightMoves([0,0],[1,2])

}
const board = new GameBoard();
console.log(board.tiles);