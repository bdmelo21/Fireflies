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
        this.width = 80;
        this.height = 80;
        this.gravity= 0.6;
        this.counter=0;
        this.rightcounter=false;
        this.leftcounter=false;
        this.fireflycounter3=true;
        this.fireflycounter2=true;
        this.fireflycounter=true;
        this.L2fireflycounter=true;
        this.L2firefly2counter=true;
        this.gifcounter=true;
        this.gifcounter1=true;
        this.textocounter=true;
        this.gameOver=true;

    }
    drawPlayer(){
        let playerImage= new Image();
        playerImage.src="hiclipart.com.png";
        let playerImageR= new Image();
        playerImageR.src="hiclipart.com2.png";
        if (this.rightcounter===true) {
            playerImage.src= "hiclipart.com2.png";
        }
        ctx.drawImage(playerImage,this.x,this.y,this.width,this.height);
    }
    movePlayer(keyCode){
        let textopirilampo =document.getElementsByClassName('nfireflies')[0];
        switch(keyCode){
            case 67:
            if((this.y>115 && this.y<185) && (this.x>150 && this.x<230)) {
                let pirilampo1 = document.getElementsByClassName('firefly2')[0];
                pirilampo1.style.display= 'none';
                this.counter+=1;
                if (this.fireflycounter===true){
                    document.getElementById('fireflyaudio').play();
                    this.fireflycounter=false;
                }
                textopirilampo.innerHTML="1/3";
            }
            else if ((this.y>290 && this.y<370) && (this.x>520)){
                let pirilampo2 = document.getElementsByClassName('firefly1')[0];
                pirilampo2.style.display= 'none';
                this.counter+=1;
                if (this.fireflycounter2===true){
                    document.getElementById('fireflyaudio').play();
                    this.fireflycounter2=false;
                }
                textopirilampo.innerHTML="2/3";
            }
            else if ((this.y>470 && this.y<560) && (this.x>920)){
                let pirilampo3 = document.getElementsByClassName('firefly3')[0];
                pirilampo3.style.display= 'none';
                this.counter+=1;
                if (this.fireflycounter3===true){
                document.getElementById('fireflyaudio').play();
                this.fireflycounter3=false;
                }
                textopirilampo.innerHTML="3/3";
            }
            else if ((this.y>68 && this.y<132)&&(this.x>470 && this.x<530)){
            let pirilampoL21 = document.getElementsByClassName('L2firefly1')[0];
            pirilampoL21.style.display= 'none';
            this.counter+=1;
            this.gifcounter=false;
            this.textocounter=false;
            if (this.L2fireflycounter===true){
                document.getElementById('fireflyaudio').play();
                this.fireflycounter=false;
            }
            textopirilampo.innerHTML="1/2";
            }
            else if ((this.y>600 && this.y<650)&&(this.x>270 && this.x<320)){
                let pirilampoL22 = document.getElementsByClassName('L2firefly2')[0];
                pirilampoL22.style.display= 'none';
                this.counter+=1;
                this.gifcounter1=false;
                if (this.L2firefly2counter===true){
                    document.getElementById('fireflyaudio').play();
                    this.fireflycounter=false;
                }
                textopirilampo.innerHTML="2/2";
                }
            break;
            case 37:
            this.rightcounter=true;
            this.x -= 30;
            break;
            case 39:
            this.rightcounter=false;
            this.x += 30;
            break;
            case 32:
            if(this.jumping===false){
                debugger;
                this.vy = 2 + (-18 - this.userPull);
                this.y+=this.vy;
                this.jumping=true;
                document.getElementById('jump').play();
                console.log (this.jumping);
            }
            break;
            case 82:
            if (this.gameOver===false) {
                window.location.reload();
            }
            break;
        }
    }
    

}
