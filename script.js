const board = document.querySelector('.board');
const blockHeigth = 30;
const blockWidth = 30;
const cols = Math.floor(board.clientWidth/blockWidth);
const rows = Math.floor(board.clientHeight/blockHeigth);

for (let i=0; i< rows * cols; i++){
    const block = document.createElement('div');
    block.classList.add("block");
    board.appendChild(block);
}
