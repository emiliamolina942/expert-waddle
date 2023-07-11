import { Application, Assets} from 'pixi.js'
import { assets } from './assets';
//import { Scene } from './Scene';
import { UIDemo } from './scenes/UIDemo';
import { Keyboard } from './utils/Keyboard';




const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 1500
});

Keyboard.initialize();



window.addEventListener("resize", ()=>{
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min (scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	const view = app.view as HTMLCanvasElement;

	view.style.width = gameWidth + "px";
	view.style.height = gameHeight + "px";
	
	view.style.marginLeft = marginHorizontal + "px";
	view.style.marginRight = marginVertical + "px";

	view.style.marginTop = marginVertical + "px";
	view.style.marginBottom = marginVertical + "px";	
})
window.dispatchEvent(new Event("resize"));


Assets.addBundle("myAssets", assets); 

Assets.loadBundle(["myAssets"]).then(() => {
	//const myScene = new Scene();
	//app.stage.addChild(myScene);

	const myScene2 = new UIDemo();
	app.stage.addChild(myScene2);	
	
});