//Each offset becomes its own move tree
const KNIGHT_OFFSETS = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1]
]
class ChessSquare {
    constructor(x, y) {
        //maybe put invalid check here?
        this.xPos = x;
        this.yPos = y;
        let predecessor;
    }

    generateMoves() {
        return (KNIGHT_OFFSETS
            .map((offset) => this.newSquareFrom(offset[0], offset[1]))
            .filter((square) => square !== undefined));
    }
    newSquareFrom(xOffset, yOffset) {
        const [newX, newY] = [this.xPos + xOffset, this.yPos + yOffset];
        if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
            let newSquare = new ChessSquare(newX,newY);
            console.log(newSquare);
            return newSquare;
        }
    }
}
    class MoveNode {
        constructor(pos) {
            this.pos = pos;
            this.left = null;
            this.right = null;
        }
    }
    class MoveTree {
        constructor() {

        }
    }

    function buildTree() {

    }

    function knightMoves(start, finish) {
        //Shows the shortest possible way to get from one square to another by outputting all squares the knight will stop along the way
        //ex. knightMoves([0,0],[1,2])
        const origin = new ChessSquare(...start);
        const target = new ChessSquare(...finish);
        const queue = [origin];
        while (!queue.includes(target)) {
            const currentSquare = queue.shift();

            const eq = currentSquare.generateMoves(); //create moves
            eq.forEach(square => {
            square.predecessor = currentSquare;
            });
            queue.push(...eq);
        }
        //Steps:
        //Find all current possible moves -- do they match finalPos?
        //if no match, check each valid move recursively.
        const path = [target];
        while(!path.includes(origin)){
            const prevSquare = path[0].predecessor;
            path.unshift(prevSquare);
        }
console.log(`Shortest path: ${path.length - 1}`);
    }
    knightMoves([4, 0], [6, 3]);

    //Messin around
    // let rand = Math.random() * (1.3 - 1)+ 1;
    // rand = rand.toFixed(5);
    // console.log(rand);