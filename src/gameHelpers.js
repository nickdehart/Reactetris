export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
   Array.from(Array(STAGE_HEIGHT), () =>
      new Array(STAGE_WIDTH).fill([0, 'clear'])
   )

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
   for(let y = 0; y < player.tetromino.length; y++){
      for(let x = 0; x < player.tetromino[y].length; x++){
         // make sure it is a cell, not blank
         if(player.tetromino[y][x] !== 0){
            if(
            // check move is inside game area height
            
            // check move is inside bottom of game area
            !stage[y + player.pos.y + moveY] ||
            // check move is inside game area width
            !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
            // check cell moving to isn't set to clear
            stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
            ) {
               return true;
            }

         }
      }
   }
}