const board = document.querySelector('.board');
const blockHeigth = 50;
const blockWidth = 50;
const cols = Math.floor(board.clientWidth/blockWidth);
const rows = Math.floor(board.clientHeight/blockHeigth);
const blocks = []
// for (let i=0; i< rows * cols; i++){
//     const block = document.createElement('div');
//     block.classList.add("block");
//     board.appendChild(block);
// }
const snake = [{ x:1, y:3 },{ x:1,y:4 },{ x:1,y5 }];

let direction = 'right'

for (let row =0; row < rows; row++){
    for(let col =0; col<cols; col++){
        const block = document.createElement('div');
        block.classList.add("block");
        board.appendChild(block);
        blocks[`${row}-${col}`] = block;
        block.innerText = `${row}-${col}`;
    }
}


function render() {
    snake.forEach(segment =>{
        blocks[`${segment.x}-${segment.y}`].classList.add("fill")
    })
}
 



