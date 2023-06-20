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
        const taskText : Text = new Text ("Holis", {fontSize:50,fill:0xff0000});
        taskText.text = "COMPLETE";
        taskText.position.x =400;
        taskText.position.y =200;
 
        taskText.scale.set(2);
         
        this.addChild(taskText);

        const estrella: Sprite= Sprite.from("estrella");
        estrella.position.set (350,250);
        estrella.scale.set(0.1);
        this.addChild(estrella);

        const estrella2: Sprite= Sprite.from("estrella");
        estrella2.position.set (1375,250);
        estrella2.scale.set(0.1);
        this.addChild(estrella2);    
        
    }      

}

   