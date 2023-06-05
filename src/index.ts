import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 860,
	height: 1113
});

Assets.add("Clampy", "./clampy.png");
Assets.add("mymonster","./monster.png");

Assets.load(["Clampy", "mymonster"]).then(()=>{

	const clampy: Sprite = Sprite.from("mymonster");
	console.log("Holis", clampy.width, clampy.height);
	
	//clampy.anchor.set(0);
	//clampy.x = 0;
	//clampy.y = 0;

	app.stage.addChild(clampy); 

});