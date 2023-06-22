import { Container, NineSlicePlane, Texture, Text, Sprite } from "pixi.js";



export class UIDemo extends Container{
    constructor(){
        super();
        //Tarea

        const taskpanel = new NineSlicePlane(
            Texture.from ("taskpanel"),
            30,30,30,30,
        );
        this.addChild(taskpanel);
        taskpanel.width=600;
        taskpanel.height=600;
        taskpanel.scale.set(2);

        //Texto
        const taskText : Text = new Text ("Waiting...", {fontSize:50,fill:0x8EED80});
        //taskText.text = "COMPLETE";
        taskText.position.x =600;
        taskText.position.y =900;
         
        taskText.scale.set(1);
         
        this.addChild(taskText);

        const star: Sprite= Sprite.from("star");
        star.position.set (300,400);
        star.scale.set(0.1);
        this.addChild(star);

        const play: Sprite= Sprite.from("play");
        play.position.set (600,400);
        play.scale.set(0.1);
        this.addChild(play);    

        const okey : Sprite = Sprite.from("okey");
        okey.position.set(450,650);
        okey.scale.set(0.1);
        this.addChild(okey);
        
    }      

}

   