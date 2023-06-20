import { AnimatedSprite, Container, Graphics, NineSlicePlane, Text, Texture } from "pixi.js";
import { SnoopyHat } from "./SnoopyHat";


export class Scene extends Container {

    constructor(){
        super()

        //Class extending from Container
        const SnoopyWithHat : SnoopyHat = new SnoopyHat();

        SnoopyWithHat.scale.set(0.5);
        SnoopyWithHat.x = 200;
        SnoopyWithHat.y = 300;

        //Animated Sprite
        const snoopyAnimated : AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("SnoopyRun1"),
                Texture.from("SnoopyRun2"),
                Texture.from("SnoopyRun3"),
                Texture.from("SnoopyRun4"),
                Texture.from("SnoopyRun5"),
                Texture.from("SnoopyRun6")
                
            ],
            true
        

        );
        this.addChild(SnoopyWithHat);
        snoopyAnimated.play();
        snoopyAnimated.animationSpeed = 0.2;
        this.addChild(snoopyAnimated);  

        //Graficos
        const myGraph : Graphics = new Graphics();

        myGraph.lineStyle ({color: 0xff00ff, width :20, alpha:1});
        myGraph.moveTo(0,0);
        myGraph.lineTo(400,350);
        myGraph.lineTo(400, 600);
        myGraph.lineTo(240,600)
        myGraph.lineTo(0,0)

        myGraph.position.set(1280/2,1500/2);

        myGraph.clear();

        myGraph.lineStyle({color:0xff00ff, width:10, alpha:1});
        myGraph.beginFill(0x00ff00, 1);
        myGraph.drawCircle(0,0,100);

        myGraph.endFill();
        myGraph.drawCircle(50,50,100);

        myGraph.position.set(0,1300);
        this.addChild(myGraph);

        //Texto
        const myText : Text = new Text ("Holis", {fontSize:50,fill:0xff0000, fontFamily:"comic sans MS"});
        myText.text = "Snoopy";
        myText.position.x =1280/2;
        myText.position.y =0;

        myText.angle=0;
        myText.scale.set(2);
        
        this.addChild(myText);

        //Nine-Slice Plane  
        const panel = new NineSlicePlane(
           Texture.from("panel"),
           35,35,35,35
        );
        //this.addChild(panel);   
        panel.width=350;
        panel.height=300;
        panel.scale.set(3);
        panel.position.x=100;
        panel.position.y=100;        

        

           
        
        

        
    }


}