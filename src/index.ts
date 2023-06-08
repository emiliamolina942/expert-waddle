import { Application, Assets, Container, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 1500
});

window.addEventListener("resize", ()=>{
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min (scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	app.view.style!.width = gameWidth + "px";
	app.view.style!.height = gameHeight + "px";
	
	(app.view.style! as any).marginLeft = marginHorizontal + "px";
	(app.view.style! as any).marginRight = marginVertical + "px";

	(app.view.style! as any).marginTop = marginVertical + "px";
	(app.view.style! as any).marginBottom = marginVertical + "px";	
})
window.dispatchEvent(new Event("resize"));


//Assets.add("Clampy", "./clampy.png");
Assets.add("mySnoopy","./Snoopy.png");
Assets.add("hat","./gorro.png");

Assets.load(["mySnoopy", "hat"]).then(()=>{

	const Snoopy : Sprite = Sprite.from("mySnoopy");
	//console.log("Holis, mi imagen mide:", Snoopy.width, Snoopy.height);	
	const Hat : Sprite = Sprite.from("hat");

	Hat.position.set(0, -200);
	Hat.scale.set(0.5)

	const SnoopyWithHat : Container = new Container();

	SnoopyWithHat.addChild(Snoopy); 
	SnoopyWithHat.addChild(Hat);

	SnoopyWithHat.scale.set(0.5);
	SnoopyWithHat.x = 200;
	SnoopyWithHat.y = 300;

	console.log(Hat.toGlobal(new Point()));
	console.log(Hat.parent.toGlobal(Hat.position));

	//640 x 750

	const aux = Hat.parent.toLocal(new Point(0,0));
	Hat.position.x = aux.x;
	Hat.position.y = aux.y;

	app.stage.addChild(SnoopyWithHat);

});