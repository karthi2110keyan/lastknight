

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width=1200
canvas.height=600


const gravity =0.2



const sky = new background({
    position:{
        x:0,
        y:0
    },
    Imagesrc:"./sky/bluesky.png",
    width:1000,
    height:600}
)
const sky_one = new background({
    position:{
        x:400,
        y:0
    },
    Imagesrc:"./sky/bluesky.png",
    width:1000,
    height:600}
)


const ground = new background({
    position:{
        x:-20,
        y:510
    },
    Imagesrc:"./sky/grounds.png",
    width:500,
    height:100
})
const ground_one = new background({
    position:{
        x:460,
        y:510
    },
    Imagesrc:"./sky/grounds.png",
    width:500,
    height:100
})
const ground_two = new background({
    position:{
        x:800,
        y:510
    },
    Imagesrc:"./sky/grounds.png",
    width:500,
    height:100
})




const player = new gameFunction({
    position:{ x:300,  y:0},
    velocity:{x:0,y:0},
    offset:{x:0,y:83},
  Imagesrc:"./_Idle.png",
    spriteWidth:1200,
    spriteHeight:80,
    frameMax:10,
    frameX:0,
    scale:1.5,
    sprites:{
        idle:{
            Imagesrc:"./_Idle.png",
            spriteWidth:1200,
            frameMax:10,
        },
        run:{
            Imagesrc:"./_Run.png",
            spriteWidth:1200,
            frameMax:10,
        }, idleleft:{
            Imagesrc:"./_Idleleft.png",
            spriteWidth:1200,
            frameMax:10,
        },
        runleft:{
            Imagesrc:"./_Runleft.png",
            spriteWidth:1200,
            frameMax:10,
        },
        jump:{
            Imagesrc:"./_Jump.png",
            spriteWidth:360,
            frameMax:3,
        },fall:{
            Imagesrc:"./_Fall.png",
            spriteWidth:360,
            frameMax:3,
        },attack:{
            Imagesrc:"./attack.png",
            spriteWidth:1200,
            frameMax:10,
        }
    }
}
    
)



function animation(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
   
     gameStart()





window.addEventListener("keydown",(e)=>{

    switch(e.key){

        case "d":
        player.velocity.x=2
        player.switchsprite("run")
        break;
        case "a":
        player.velocity.x=-2
      
        player.switchsprite("runleft")
        break;
        case "w":
        player.velocity.y=-5
        player.switchsprite("jump")
        break;
        case " ":
            player.velocity.y=0
            player.switchsprite("attack")
            break;

    }

})


window.addEventListener("keyup",(e)=>{

    switch(e.key){

        case "d":
            player.velocity.x=0
            player.switchsprite("idle")
            break
            case "a":
        player.velocity.x=0
        player.switchsprite("idleleft")
        break;
        case "w":
        player.velocity.y=0
       
        if(player.position.y<0) {
           player.switchsprite("fall")
        }else  player.switchsprite("idle") 
        
       
        break;
        case " ":
            player.velocity.y=0
            player.switchsprite("idle")  
            break;
     

    }

})

const left_button = document.querySelector(".left")
const right_button=document.querySelector(".right")
const attack_button = document.querySelector(".attack")


left_button.addEventListener("touchstart",function(){
    player.velocity.x=-2
      
    player.switchsprite("runleft")
})

left_button.addEventListener("touchend",function(){
    player.velocity.x=0
      
    player.switchsprite("idleleft")
})

right_button.addEventListener("touchstart",function(){
    player.velocity.x=2
      
    player.switchsprite("run")
})

right_button.addEventListener("touchend",function(){
    player.velocity.x=0
      
    player.switchsprite("idle")
})
attack_button.addEventListener("touchstart",function(){
    player.velocity.x=0
      
    player.switchsprite("attack")
})

attack_button.addEventListener("touchend",function(){
    player.velocity.x=0
      
    player.switchsprite("idle")
})


window.requestAnimationFrame(animation)


}


animation()


