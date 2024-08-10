class background{
    constructor({position,width,height,Imagesrc}){
        this.position=position
        this.image = new Image()
        this.image.src =Imagesrc
        this.width=width
        this.height=height

    }
    draw(){
ctx.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)

    }
}




class sprite{
    constructor({Imagesrc ,position,spriteWidth, spriteHeight,frameMax,frameX,gamespeed=0, offset,scale}){

        this.image = new Image()
        this.image.src =Imagesrc
        this.position=position
        this.spriteWidth=spriteWidth
        this.spriteHeight=spriteHeight
        this.frameMax=frameMax
        this.frameX=frameX
        this.gamespeed =gamespeed
        this.gamehold=2
        this.offset=offset
        this.scale=scale
    }
    draw(){
        
        ctx.drawImage(this.image,this.frameX* (this.spriteWidth/this.frameMax),0,this.spriteWidth/this.frameMax,this.spriteHeight,this.position.x-this.offset.x,this.position.y-this.offset.y,(this.spriteWidth/this.frameMax)*this.scale,this.spriteHeight*this.scale)
    }

    animationFrames(){
        this.gamespeed++

        if(Math.floor(this.gamespeed%this.gamehold)===0){
             if(this.frameX<this.frameMax-1){
            this.frameX++
        }else{
            this.frameX=0
        }
        }

    }
    update(){
        this.draw()
       this.animationFrames()
       
        
    }
}




class gameFunction extends sprite{
    constructor({position , Imagesrc,spriteWidth, spriteHeight,frameMax,frameX,gamespeed=0,velocity,sprites,offset,scale}){

        super({
            Imagesrc,
            frameMax,
            frameX,
            spriteWidth,
            spriteHeight,
            gamespeed,
            offset,
            scale
        })
        this.position =position
        this.velocity=velocity
        this.gamespeed =0
        this.gamehold=2
        this.sprites=sprites
        for(sprite in sprites){
            sprites[sprite].image =new Image()
            sprites[sprite].image.src =sprites[sprite].Imagesrc
        }

    }

    


    update(){
        this.draw()
        this.animationFrames()
      this.position.x+=this.velocity.x
        this.position.y+=this.velocity.y
        if(this.position.y+this.spriteHeight+this.velocity.y>=canvas.height){
            this.velocity.y=0
          
        }else{
              this.velocity.y+=gravity
        }
    }

    switchsprite(sprite){

    
    switch (sprite) {
        case "idle":
           if( this.image!==this.sprites.idle.image){
            this.image=this.sprites.idle.image
        this.frameMax=this.sprites.idle.frameMax
        this.spriteWidth=this.sprites.idle.spriteWidth
        this.frameX=0
           }
        
            break;
            case "run":
                if(this.image!==this.sprites.run.image){
                 this.image=this.sprites.run.image
                this.frameMax=this.sprites.run.frameMax   
                this.spriteWidth=this.sprites.run.spriteWidth
                this.frameX=0
                }
             
            break;
            case "runleft":
                if(this.image!==this.sprites.runleft.image){
                 this.image=this.sprites.runleft.image
                this.frameMax=this.sprites.runleft.frameMax 
                this.spriteWidth=this.sprites.runleft.spriteWidth  
                this.frameX=0
                }
             
            break;
            case "jump":
                if(this.image!==this.sprites.jump.image){
                       this.image=this.sprites.jump.image
                this.frameMax=this.sprites.jump.frameMax 
                this.spriteWidth=this.sprites.jump.spriteWidth  
                this.frameX=0
                }
            
                break;
                case "idleleft":
                    if(this.image!==this.sprites.idleleft.image){
                           this.image=this.sprites.idleleft.image
                    this.frameMax=this.sprites.idleleft.frameMax
                    this.spriteWidth=this.sprites.idleleft.spriteWidth  
                    this.frameX=0 
                    }
                
                    break;
                    case "fall":
                        if(this.image!==this.sprites.fall.image){
                               this.image=this.sprites.fall.image
                        this.frameMax=this.sprites.fall.frameMax 
                        this.spriteWidth=this.sprites.fall.spriteWidth  
                        this.frameX=0
                        }
                    
                        break;
                        case "attack":
                            if(this.image!==this.sprites.attack.image){
                                   this.image=this.sprites.attack.image
                            this.frameMax=this.sprites.attack.frameMax 
                            this.spriteWidth=this.sprites.attack.spriteWidth  
                            this.frameX=0
                            }
                        
                            break;
    
        
    }
}

}

