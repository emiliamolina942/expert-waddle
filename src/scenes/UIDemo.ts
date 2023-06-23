import { Container, Text, Sprite } from "pixi.js";



export class UIDemo extends Container{
    constructor(){
        super();
        const dialog = new Container();
        dialog.x = 100;
        dialog.y = 50;

        //Tarea

        const background = Sprite.from("taskpanel");
        background.scale.set(0.4);
        dialog.addChild(background);
        this.addChild(background);
        //console.log(background.width, background.height);
        //console.log(background.x, background.y);
        
        //Boton Estrella (imita al Mouse)       
        const buttonStar: Sprite= Sprite.from("star");
        buttonStar.scale.set(0.1);
        buttonStar.anchor.set(0.5);
        buttonStar.x = (background.width/2)- (buttonStar.width*0.6);
        buttonStar.y = (buttonStar.height+200);
        //console.log(buttonStar.x, buttonStar.y);
        //console.log(buttonStar.width, buttonStar.height);
        buttonStar.on("mousedown", this.onMouseDown, this);
        buttonStar.on("mouseup", this.onMouseUp, this);

        buttonStar.interactive = true;
        dialog.addChild(buttonStar); 
        this.addChild(buttonStar);

        //Boton Play (imita al button touch)
        const buttonPlay: Sprite= Sprite.from("play");
        buttonPlay.scale.set(0.1);
        buttonPlay.anchor.set(0.5);
        buttonPlay.x=(background.width/2)+(buttonPlay.width*0.6);
        buttonPlay.y=buttonPlay.height+200;
        buttonPlay.on("touchstart", this.onTouchStart, this);
        buttonPlay.on("touchend", this.onTouchEnd, this);
        buttonPlay.interactive = true;
        dialog.addChild(buttonPlay); 
        this.addChild(buttonPlay);  

        //Boton ok (imita al boton mouse + boton touch)
        const buttonOkey : Sprite = Sprite.from("okey");
        buttonOkey.scale.set(0.1);
        buttonOkey.anchor.set(0.5);
        buttonOkey.x=(background.width/2);
        buttonOkey.y= buttonOkey.height+500;
        buttonOkey.on("pointerdown", this.onPointerDown, this);
        buttonOkey.on("pointerup", this.onPointerUp, this);
        buttonOkey.interactive = true;
        dialog.addChild(buttonOkey);
        this.addChild(buttonOkey);

        //Texto
        const taskText : Text = new Text ("Waiting...", {fontSize:50,fill:0x8EED80});
        //taskText.text = "COMPLETE";
        taskText.scale.set(2);
        taskText.position.x =background.width/2 - 100;
        taskText.position.y =background.height/2 + 300;       
        
         
        dialog.addChild(taskText);
        this.addChild(taskText);       

       
    }    
    
    
    private onMouseDown(): void { 
        console.log("mouse down", this);
    }

    private onMouseUp(): void{
        console.log("mouse Up", this);
    }

    private onTouchStart(): void{
        console.log("touch down", this);
    }

    private onTouchEnd():void{
        console.log("touch up", this);
    }

    private onPointerDown():void{
        console.log("pointer down", this);
    }

    private onPointerUp ():void{
        console.log("pointer up", this);

    }

    
}

   