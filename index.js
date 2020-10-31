let currentGame;
let currentPlayer;
let canvas = document.getElementById('the-canvas');
let ctx = canvas.getContext('2d');
let currentLevel = 1;
let dispayIntro = true;
startGame();
document.onkeydown = (e) => {
    let whereToGo = e.keyCode;
    currentGame.player.movePlayer(whereToGo);
}
function startGame() {
    let pirilampo1L2=document.getElementsByClassName('L2firefly1')[0];
    let piriliampo2L2=document.getElementsByClassName('L2firefly2')[0];
    pirilampo1L2.style.display='none';
    piriliampo2L2.style.display='none';
    document.getElementById('game-board').style.display = 'block';
    currentGame = new game();
    currentPlayer = new Player();
    currentGame.player = currentPlayer;
    currentGame.player.drawPlayer();
    updateCanvas();
}
function updateCanvas(){
    switch(currentLevel) {
        case 1:
        document.getElementById('controls').play(); 
        firstLevel();
        isOnFirstPlaform();
        break
        case 2:
        secondLevel();
        isPlatforms2();
        break;
    }
 
    currentGame.player.drawPlayer();
    hitBottom();
    currentGame.player.vy = currentGame.player.vy + (currentGame.player.gravity - currentGame.player.userPull);
    //console.log(currentGame.player.vy);
    currentGame.player.y += currentGame.player.vy;
   if (currentGame.gameRunning===true) {
    requestAnimationFrame(updateCanvas);
   }
}
function hitBottom() {
    let rockBottom = canvas.height-10 - currentGame.player.height;
    if (currentGame.player.y > rockBottom) {
        currentGame.player.y = rockBottom;
        currentGame.player.vy = 0;
        currentGame.player.jumping=false; 
        console.log('hit the floor');
    }
}

function isOnFirstPlaform() {
    //return (currentGame.player.y===500 && (currentGame.player.x>910 && currentGame.player.x<1030));
    if ((currentGame.player.y > 480 && currentGame.player.y<550) && (currentGame.player.x>860 && currentGame.player.x<1060)) {
        currentGame.player.y = 490;
        currentGame.player.vy = 0;
        currentGame.player.jumping =false;
    }
    else if((currentGame.player.y > 290 && currentGame.player.y<350) && (currentGame.player.x>440 && currentGame.player.x<710)) {
        currentGame.player.y = 300;
        currentGame.player.vy = 0;
        currentGame.player.jumping =false;
    }
    else if((currentGame.player.y > 110 && currentGame.player.y<140) && (currentGame.player.x>60 && currentGame.player.x<300)) {
        currentGame.player.y = 120;
        currentGame.player.vy = 0;
        currentGame.player.jumping =false;
    }
    else if((currentGame.player.y > 480 && currentGame.player.y<550) && (currentGame.player.x>60 && currentGame.player.x<310)) {
        let balooncounter=true;
        currentGame.player.y =490;
        currentGame.player.vy = 0;
        currentGame.player.jumping =false;
        console.log (currentGame.player.counter);
        if (currentGame.player.counter===3){
            if(balooncounter===true){
            document.getElementById('baloon').play();
            balooncounter=false;
            }
            let imgem= new Image();
            imgem.src='balão.png';
            ctx.drawImage(imgem, 115, 390, 180, 130);
            setTimeout( () => {
                setTimeout( () => {currentLevel = 2;
                },2000);
        }, 2000);
        }
}
    else if (currentGame.player.y>640 && currentGame.player.y<655){
        currentGame.player.jumping =false;
    }
    else if ((currentGame.player.y>575 && currentGame.player.y<595) && (currentGame.player.x>860 && currentGame.player.x<1060)){
        currentGame.player.jumping =false;
        currentGame.player.y=595;
    }
    else if ((currentGame.player.y>575 && currentGame.player.y<595)&& (currentGame.player.x>60 && currentGame.player.x<310)){
        currentGame.player.jumping =false;
        currentGame.player.y=595;
    }
}
let counter=true;

function firstLevel() {
    ctx.clearRect(0, 0, 1094, 700);
    let earth= new Image();
    earth.src="earth1.png";
    ctx.drawImage(earth, 90, 200, 30, 30);
    ctx.drawImage(earth, 110, 200, 30, 30);
    ctx.drawImage(earth, 130, 200, 30, 30);
    ctx.drawImage(earth, 150, 200, 30, 30);
    ctx.drawImage(earth, 180, 200, 30, 30);
    ctx.drawImage(earth, 210, 200, 30, 30);
    ctx.drawImage(earth, 240, 200, 30, 30);
    ctx.drawImage(earth, 270, 200, 30, 30);
    ctx.drawImage(earth, 300, 200, 30, 30);
    ctx.fillStyle= 'brown';
    //ctx.fillRect(90, 200, 220, 30)
    //ctx.fillStyle= 'brown';
    //ctx.fillRect(510, 380, 220, 30);
    ctx.drawImage(earth,510,380, 30,30);
    ctx.drawImage(earth,540,380, 30,30);
    ctx.drawImage(earth,570,380, 30,30);
    ctx.drawImage(earth,600,380, 30,30);
    ctx.drawImage(earth,630,380, 30,30);
    ctx.drawImage(earth,660,380, 30,30);
    ctx.drawImage(earth,690,380, 30,30);
    ctx.drawImage(earth,720,380, 30,30);
    ctx.fillStyle= 'brown';
    //ctx.fillRect(910, 565, 220, 30);
    ctx.drawImage(earth,910,565, 30,30);
    ctx.drawImage(earth,940,565, 30,30);
    ctx.drawImage(earth,970,565, 30,30);
    ctx.drawImage(earth,1000,565, 30,30);
    ctx.drawImage(earth,1030,565, 30,30);
    ctx.drawImage(earth,1060,565, 30,30);
    ctx.drawImage(earth,1090,565, 30,30);
    ctx.drawImage(earth,110,565, 30,30);
    ctx.fillStyle= 'brown';
    //ctx.fillRect(90, 565, 220, 30);
    ctx.drawImage(earth,90,565, 30,30);
    ctx.drawImage(earth,120,565, 30,30);
    ctx.drawImage(earth,150,565, 30,30);
    ctx.drawImage(earth,180,565, 30,30);
    ctx.drawImage(earth,210,565, 30,30);
    ctx.drawImage(earth,240,565, 30,30);
    ctx.drawImage(earth,270,565, 30,30);
    ctx.drawImage(earth,300,565, 30,30);
    ctx.drawImage(earth,330,565, 30,30);
    ctx.drawImage(earth,0,685, 50,50);
    ctx.drawImage(earth,50,685, 50,50);
    ctx.drawImage(earth,100,685, 50,50);
    ctx.drawImage(earth,150,685, 50,50);
    ctx.drawImage(earth,200,685, 50,50);
    ctx.drawImage(earth,250,685, 50,50);
    ctx.drawImage(earth,300,685, 50,50);
    ctx.drawImage(earth,350,685, 50,50);
    ctx.drawImage(earth,400,685, 50,50);
    ctx.drawImage(earth,450,685, 50,50);
    ctx.drawImage(earth,500,685, 50,50);
    ctx.drawImage(earth,550,685, 50,50);
    ctx.drawImage(earth,600,685, 50,50);
    ctx.drawImage(earth,650,685, 50,50);
    ctx.drawImage(earth,700,685, 50,50);
    ctx.drawImage(earth,750,685, 50,50);
    ctx.drawImage(earth,800,685, 50,50);
    ctx.drawImage(earth,850,685, 50,50);
    ctx.drawImage(earth,900,685, 50,50);
    ctx.drawImage(earth,950,685, 50,50);
    ctx.drawImage(earth,1000,685, 50,50);
    ctx.drawImage(earth,1050,685, 50,50);
    let pink = new Image();
    pink.src="dama2.png";
    ctx.drawImage(pink,100, 475, 100, 100);
}

function secondLevel(){
    if(currentGame.player.textocounter===true){
    document.getElementsByClassName('nfireflies')[0].innerHTML='0/2';
    }
    document.getElementsByClassName('level1')[0].innerHTML='Level 2';
    ctx.clearRect(0,0,1194,700);
    let pirilampo1L2=document.getElementsByClassName('L2firefly1')[0];
    let piriliampo2L2=document.getElementsByClassName('L2firefly2')[0];
    if (currentGame.player.gifcounter===true){
    pirilampo1L2.style.display='initial';
    }
    if (currentGame.player.gifcounter1===true){
    piriliampo2L2.style.display='initial';
    }
    let earth= new Image();
    earth.src="earth1.png";
    ctx.drawImage(earth,250,150, 30,30);
    ctx.drawImage(earth,280,150, 30,30);
    ctx.drawImage(earth,310,150, 30,30);
    ctx.drawImage(earth,330,150, 30,30);
    ctx.drawImage(earth,360,150, 30,30);
    ctx.drawImage(earth,390,150, 30,30);
    ctx.drawImage(earth,420,150, 30,30);
    ctx.drawImage(earth,450,150, 30,30);
    ctx.drawImage(earth,480,150, 30,30);
    ctx.drawImage(earth,510,150, 30,30);
    ctx.drawImage(earth,540,150, 30,30);
    ctx.drawImage(earth,570,150, 30,30);
    ctx.drawImage(earth,600,150, 30,30);
    ctx.drawImage(earth,630,150, 30,30);
    ctx.drawImage(earth,660,150, 30,30);
    ctx.drawImage(earth,690,150, 30,30);
    ctx.drawImage(earth,710,150, 30,30);
    ctx.drawImage(earth,740,150, 30,30);
    ctx.drawImage(earth,770,150, 30,30);
    ctx.drawImage(earth,800,150, 30,30);
    ctx.drawImage(earth,830,150, 30,30);
    ctx.drawImage(earth,860,150, 30,30);
    ctx.drawImage(earth,890,150, 30,30);
    ctx.drawImage(earth,920,150, 30,30);
    ctx.drawImage(earth,950,150, 30,30);
    ctx.drawImage(earth,980,150, 30,30);
    ctx.drawImage(earth,1010,150, 30,30);
    ctx.drawImage(earth,1040,150, 30,30);
    ctx.drawImage(earth,1070,150, 30,30);
    ctx.drawImage(earth,0,685, 50,50);
    ctx.drawImage(earth,50,685, 50,50);
    ctx.drawImage(earth,100,685, 50,50);
    ctx.drawImage(earth,150,685, 50,50);
    ctx.drawImage(earth,200,685, 50,50);
    ctx.drawImage(earth,250,685, 50,50);
    ctx.drawImage(earth,300,685, 50,50);
    ctx.drawImage(earth,350,685, 50,50);
    ctx.drawImage(earth,400,685, 50,50);
    ctx.drawImage(earth,450,685, 50,50);
    ctx.drawImage(earth,500,685, 50,50);
    ctx.drawImage(earth,550,685, 50,50);
    ctx.drawImage(earth,600,685, 50,50);
    ctx.drawImage(earth,650,685, 50,50);
    ctx.drawImage(earth,700,685, 50,50);
    ctx.drawImage(earth,750,685, 50,50);
    ctx.drawImage(earth,800,685, 50,50);
    ctx.drawImage(earth,850,685, 50,50);
    ctx.drawImage(earth,900,685, 50,50);
    ctx.drawImage(earth,950,685, 50,50);
    ctx.drawImage(earth,1000,685, 50,50);
    ctx.drawImage(earth,1050,685, 50,50);
    let spike= new Image();
    spike.src="PixelArt.png"
    ctx.drawImage(spike, 0, 632, 70, 70);
    ctx.drawImage(spike, 40, 632, 70, 70);
    ctx.drawImage(spike, 80, 632, 70, 70);
    ctx.drawImage(spike, 120, 632, 70, 70);
    ctx.drawImage(spike, 160, 632, 70, 70);
    ctx.drawImage(spike, 450, 632, 70, 70);
    ctx.drawImage(spike, 490, 632, 70, 70);
    ctx.drawImage(spike, 530, 632, 70, 70);
    ctx.drawImage(spike, 570, 632, 70, 70);
    ctx.drawImage(spike, 610, 632, 70, 70);
    let pink = new Image();
    pink.src="dama2HF.png";
    ctx.drawImage(pink,900, 598, 100, 100);
    if(counter===true){
    currentGame.player.x=900;
    currentGame.player.y=100;
    currentGame.player.counter=0;
    counter=false;
    }
   
    //hitBottom();
    //isPlatforms2();

}
let damagecounter=true;
let damagecounter1=true;
function isPlatforms2() {
balooncounter=true;
    if ((currentGame.player.y>68 && currentGame.player.y<132) && (currentGame.player.x>200 && currentGame.player.x<1060)) {
        currentGame.player.y = 75 ;
        currentGame.player.vy = 0;
        currentGame.player.jumping=false;
}
    else if ((currentGame.player.y>580 && currentGame.player.y<652) && (currentGame.player.x>0 && currentGame.player.x<200)) {
        switch (damagecounter) {
            case true:
            document.getElementById('damage').play();
            damagecounter=false;
            currentGame.lifes-=1;
            document.getElementsByClassName('lifes')[0].innerHTML=`x${currentGame.lifes}`;
            break;
        }
        }
    else if ((currentGame.player.y>580 && currentGame.player.y<652) && (currentGame.player.x>430 && currentGame.player.x<620)){
        switch (damagecounter1) {
            case true:
            document.getElementById('damage').play();
            damagecounter1=false;
            currentGame.lifes-=1;
            document.getElementsByClassName('lifes')[0].innerHTML=`x${currentGame.lifes}`;
            break;
        }
    }
    else if ((currentGame.player.y>580 && currentGame.player.y<652) && (currentGame.player.x>640 && currentGame.player.x<900)){
        console.log (currentGame.player.counter);
        if (currentGame.player.counter===2) {
            if(balooncounter===true){
                document.getElementById('baloon').play();
                balooncounter=false;
            }
            let imgem= new Image();
            imgem.src='balãoR.png';
            console.log ('lollll');
            ctx.drawImage(imgem,810, 515, 180, 130);
            setTimeout( () => {
                currentGame.gameRunning=false;
                ctx.clearRect(0,0,1140,700);
                document.getElementById('controls').pause();
                document.getElementById('lastaudio').play();
                let backgroundlast=document.getElementById('the-canvas');
                backgroundlast.style.background="url('thankyou.gif') no-repeat center";
                backgroundlast.style.backgroundSize="cover";
        }, 4000);
        }
    }
    else if (currentGame.lifes===0){
        document.getElementById('damage').play();
        let pirilampo1L2=document.getElementsByClassName('L2firefly1')[0];
        let piriliampo2L2=document.getElementsByClassName('L2firefly2')[0];
        pirilampo1L2.style.display='none';
        piriliampo2L2.style.display='none';
        let background1=document.getElementById('the-canvas');
        document.getElementById('controls').pause();
        background1.style.background= "url('background.png') no-repeat center";
        background1.style.backgroundSize="cover";
        currentGame.gameRunning=false;
        currentGame.player.gameOver=false;
        document.addEventListener('keyup', function(e){
            if(e.keyCode == 82)
              window.location.reload();
        })
        ctx.clearRect(0, 0, 1094, 700);

    }


    
    }
