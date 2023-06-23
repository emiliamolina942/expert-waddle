import { Container, Sprite } from "pixi.js";


export class SnoopyHat extends Container{

    constructor (){
        super() 
        const Snoopy : Sprite = Sprite.from("mySnoopy");
        //console.log("Holis, mi imagen mide:", Snoopy.width, Snoopy.height);
        const Hat : Sprite = Sprite.from("hat");

        Hat.position.set(-100, -100);
        Hat.scale.set(0.5)
        Hat.angle = -25

        this.addChild(Snoopy);
        this.addChild(Hat);            

        
    }


}