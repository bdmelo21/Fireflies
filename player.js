//this.y+=this.dy;
//if(this.y+this.height>canvas.height){
    //this.dy=-this.dy;                 ===> Equação da Gravidade 
//}
//else {this.dy+=1};



class Player {

    constructor() {
        this.x = 125;
        this.jumping = false;
        this.y = 0;
        this.dx= 0
        this.vy=0;
        this.userPull=0;
        this.width = 50;
        this.height = 50;
        this.gravity= 0.5;
    }
    drawPlayer(){
        ctx.fillStyle='red';
        ctx.fillRect(this.x,this.y,this.width,this.height);
     //   this.Gravity();
     //   if (this.y+this.height>canvas.height){
     //       this.dy=0;
     //   }
     //   console.log (this.y);
    }
    movePlayer(keyCode){
        let counter=true;
        let left=false;
        let right=false;
        let up=false;
        switch(keyCode){
            case 37:
            this.x -= 30;
            break;
            case 39:
            this.x += 30;
            break;
            case 32:
            if(this.jumping===false){
            this.vy = 2 + (-17 - this.userPull);
            this.y+=this.vy;
            this.jumping=true;
            }
            break;
        }
    }
    

}
