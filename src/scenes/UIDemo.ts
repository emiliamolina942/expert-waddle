import { Container, Text, Sprite, Texture} from "pixi.js";
import { Button } from "../ui/Button";
import { Keyboard } from "../utils/Keyboard";



export class UIDemo extends Container{
    
    private buttonStar:Button;

    private lastKeyPressed:Text;

    constructor(){
        super();
        const dialog = new Container();
        dialog.x = 100;
        dialog.y = 50;

        //Tarea

        const background = Sprite.from("taskpanel");
        dialog.addChild(background);
                        
        //Boton Estrella (imita al Mouse)       
        this.buttonStar = new Button(Texture.from("star"),
            Texture.from("buttonstardown"),
            Texture.from("star"),
            this.onButtonClick.bind(this)
        );
       
        this.buttonStar.x = (background.width/2)- (this.buttonStar.width*0.6);
        this.buttonStar.y = (this.buttonStar.height+200);
                
        dialog.addChild(this.buttonStar); 

        
        //(globalThis as any).__PIXI_APP__ = app;

                

        //Boton Play (imita al button touch)
        const buttonPlay: Sprite= Sprite.from("play");        
        buttonPlay.anchor.set(0.5);
        buttonPlay.x=(background.width/2)+(this.buttonStar.width*0.6);
        buttonPlay.y=this.buttonStar.height+200;
        buttonPlay.interactive = true;
        buttonPlay.on("touchstart", this.onTouchStart, this);
        //buttonPlay.on("touchend", this.onTouchEnd, this);
        dialog.addChild(buttonPlay); 
          

        //Boton ok (imita al boton mouse + boton touch)
        const buttonOkey : Sprite = Sprite.from("okey");
       
        buttonOkey.anchor.set(0.5);
        buttonOkey.x=(background.width/2);
        buttonOkey.y= this.buttonStar.height+500;
        buttonOkey.interactive = true;
        buttonOkey.on("pointerup", this.onPointerUp, this);
        //buttonOkey.on("pointerdown", this.onPointerDown, this);
        
        dialog.addChild(buttonOkey);
        

        //Texto
        this.lastKeyPressed = new Text ("Select", {fontSize:40,fill:0x8EED80});
        //lastkeypressed.text = "COMPLETE";
        this.lastKeyPressed.scale.set(2);
        this.lastKeyPressed.position.x =background.width/2 -100;
        this.lastKeyPressed.position.y =background.height/2 + 300;  
        
               
        dialog.addChild(this.lastKeyPressed); 

        this.addChild(dialog);  

        Keyboard.down.on("KeyB", this.onKeyB, this);
        Keyboard.up.on("KeyB", this.onKeyUp, this );              

       
    }    

    
    //Función click
    private onButtonClick():void{
        console.log("you clicked the star ^^ ", Keyboard.state.get("KeyA"));
    }

    private onKeyB(){
        console.log("aprete la B", this);
    }

    private onKeyUp(): void{
        console.log("solté la B", this);
    }

    //Botón Play
    private onTouchStart():void{
        console.log("you clicked the play button");
    }

      //Botón Okey
    private onPointerUp():void{
        console.log("you clicked the ok button");
    }


    
   
 
       
}

   