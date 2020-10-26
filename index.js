let currentGame;
let currentPlayer;
let canvas = document.getElementById('the-canvas');
let ctx = canvas.getContext('2d');
startGame();
document.onkeydown = (e) => {
    let whereToGo = e.keyCode;
    currentGame.player.movePlayer(whereToGo);
}
function startGame() {
    document.getElementById('game-board').style.display = 'block';
    currentGame = new game();
    currentPlayer = new Player();
    currentGame.player = currentPlayer;
    currentGame.player.drawPlayer();
    setTimeout(() => {
        let fireflies = document.getElementsByTagName('img');
        let firefliesArr = [...fireflies];
        firefliesArr.forEach((firefly) => {
            firefly.style.display = 'none';
        });
      }, 500);
    updateCanvas();
}
function updateCanvas(){
    ctx.clearRect(0, 0, 1094, 700);
    ctx.fillStyle= 'brown';
    ctx.fillRect(90, 200, 220, 30);
    ctx.fillStyle= 'tomato';
    ctx.fillRect(175, 100, 50, 100);
    ctx.fillStyle= 'brown';
    ctx.fillRect(510, 380, 220, 30);
    ctx.fillStyle= 'tomato';
    ctx.fillRect(595, 280, 50, 100);
    ctx.fillStyle= 'brown';
    ctx.fillRect(910, 565, 220, 30);
    ctx.fillStyle= 'tomato';
    ctx.fillRect(980, 465, 50, 100);
    ctx.fillStyle= 'brown';
    ctx.fillRect(90, 565, 220, 30);
    ctx.fillStyle= 'pink';
    ctx.fillRect(130, 515, 50, 50);
    currentGame.player.drawPlayer();
    hitBottom();
    isOnFirstPlaform();
    currentGame.player.vy = currentGame.player.vy + (currentGame.player.gravity - currentGame.player.userPull);
    //console.log(currentGame.player.vy);
    currentGame.player.y += currentGame.player.vy;

    if (isOnFirstPlaform()) {
      //  currentGame.player.y=510;
      //  currentGame.player.dy=0;
    } else if (!isOnFirstPlaform()) {
        //currentGame.player.Gravity();
        //currentGame.player.dy=2;
       // console.log('putting gravity again', currentGame.player.dy);
    }
   // console.log (!(currentGame.player.y===500 && (currentGame.player.x>910 && currentGame.player.x<1030)))
    requestAnimationFrame(updateCanvas);
}

function hitBottom() {
    let rockBottom = canvas.height - currentGame.player.height;
    if (currentGame.player.y > rockBottom) {
        currentGame.player.y = rockBottom;
        currentGame.player.vy = 0;
    }
}

function isOnFirstPlaform() {
    //return (currentGame.player.y===500 && (currentGame.player.x>910 && currentGame.player.x<1030));
    if ((currentGame.player.y > 500 && currentGame.player.y<520) && (currentGame.player.x>860 && currentGame.player.x<1060)) {
        currentGame.player.y = 515 ;
        currentGame.player.vy = 0;
        currentGame.player.jumping =false;
    }
    else if((currentGame.player.y > 320 && currentGame.player.y<370) && (currentGame.player.x>470 && currentGame.player.x<730)) {
        currentGame.player.y = 330;
        currentGame.player.vy = 0;
        currentGame.player.jumping =false;
    }
    else if((currentGame.player.y > 140 && currentGame.player.y<170) && (currentGame.player.x>60 && currentGame.player.x<310)) {
        currentGame.player.y = 150;
        currentGame.player.vy = 0;
        currentGame.player.jumping =false;
    }
    else if((currentGame.player.y > 500 && currentGame.player.y<520) && (currentGame.player.x>60 && currentGame.player.x<310)) {
        currentGame.player.y = 515;
        currentGame.player.vy = 0;
        currentGame.player.jumping =false;
        let imgem= new Image();
        imgem.src='balão.png';
        ctx.drawImage(imgem, 125, 420, 180, 130);
    }
    else if (currentGame.player.y>640 && currentGame.player.y<655){
        currentGame.player.jumping =false;
        currentGame.player.gravity=0.5;
    }
    else if ((currentGame.player.y>575 && currentGame.player.y<595) && (currentGame.player.x>860 && currentGame.player.x<1060)){
        currentGame.player.jumping =false;
        currentGame.player.y=595;
        currentGame.player.gravity=2;
    }
    else if ((currentGame.player.y>575 && currentGame.player.y<595)&& (currentGame.player.x>60 && currentGame.player.x<310)){
        currentGame.player.jumping =false;
        currentGame.player.y=595;
        currentGame.player.gravity=2;
    }
     console.log(currentGame.player.y);
}