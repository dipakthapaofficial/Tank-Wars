;(function(){
	'use strict';

	function GameStart(getDiv_){
		this.containerDiv=getDiv_;
		var background=new Background();
		var gameProps = {
			width: 600,
			height: 600
		};

		var that=this;

		function gameSetup(){	
				that.containerDiv.style.width=gameProps.width+'px';
				that.containerDiv.style.height=gameProps.height+'px';
				that.containerDiv.style.position='relative';
				that.containerDiv.style.overflow='hidden';			

				that.containerDiv.appendChild(background.element);
		
		};		

		function gameLogo(){
			var text=document.createElement('div');
			text.id='logo';
			var textscroller=document.createElement('marquee');
			textscroller.scrollAmount="15";
			// var image=document.createElement('img');
			// image.src="../TankWars/images/tank-pointing-left.png";
			// textscroller.appendChild(image);
			textscroller.innerHTML='<img src="../TankWars/images/tank-pointing-left.png">	T A N K  - W A R	 	<img src="../TankWars/images/enemy-tank-pointing-right.png">';
			// var image=document.createElement('img');
			// image.src="../TankWars/images/enemy-tank-pointing-right.png";
			// textscroller.appendChild(image);
			text.style.position='absolute';
			text.style.top='57px';
			text.style.left='0px';
			text.style.fontFamily = "Brush Script MT, cursive";
			//text.innerHTML='TANK WORLD';
			text.style.color='#849500';
			text.style.fontSize='97px';
			text.style.fontWeight='bold';
			text.style.textShadow = "5px 5px 0 #ffbf14";
			text.style.mozTextShadow = "5px 5px 0 #ffbf14";
			text.style.webkitTextShadow = "5px 5px 0 #ffbf14";

			text.style.mozBoxShadow="14px 28px 54px #000000";
			text.style.webkitBoxShadow="14px 28px 54px #000000";
			text.style.boxShadow="14px 28px 54px #000000";

			text.appendChild(textscroller);
			that.containerDiv.appendChild(text);
		};
		function menus(){
			var start=document.createElement('div');
			start.style.width='200px';
			start.style.height='30px';
			start.style.position='absolute';
			start.style.backgroundColor='#654e3e';
			start.style.lineHeight='30px';
			start.style.textAlign='center';
			start.style.top='350px';
			start.style.left='200px';
			start.style.fontFamily = "Brush Script MT, cursive";
			start.style.fontWeight='bold';
			start.style.color='#849500';
			start.innerHTML='S T A R T';
			start.style.border="double 1px #95908c";
			start.style.mozBorderRadius=" 5px";
			start.style.webkitBorderRadius="5px";
			start.style.borderRadius="5px";
			start.id='start';		

			that.containerDiv.appendChild(start);

			start.onmouseover=function(){
				start.style.backgroundColor='#ffbf14';	
				start.style.color='white';


			};
			start.onmouseout=function(){
				start.style.backgroundColor='#654e3e';
				start.style.color='#849500';
			};

			start.onclick=Start;


			var settings=document.createElement('div');
			settings.style.width='200px';
			settings.style.height='30px';
			settings.style.position='absolute';
			settings.style.backgroundColor='#654e3e';
			settings.style.lineHeight='30px';
			settings.style.textAlign='center';
			settings.style.top='400px';
			settings.style.left='200px';
			settings.style.fontFamily = "Brush Script MT, cursive";
			settings.style.fontWeight='bold';
			settings.style.color='#849500';
			settings.innerHTML='S E T T I N G S';
			settings.style.border="double 1px #95908c";
			settings.style.mozBorderRadius=" 5px";
			settings.style.webkitBorderRadius="5px";
			settings.style.borderRadius="5px";
			settings.id='settings';

			that.containerDiv.appendChild(settings);

			settings.onmouseover=function(){
				settings.style.backgroundColor='#ffbf14';	
				settings.style.color='white';


			};
			settings.onmouseout=function(){
				settings.style.backgroundColor='#654e3e';
				settings.style.color='#849500';
			};
			settings.onclick=Settings;

			var howtoplay=document.createElement('div');
			howtoplay.style.width='200px';
			howtoplay.style.height='30px';
			howtoplay.style.position='absolute';
			howtoplay.style.backgroundColor='#654e3e';
			howtoplay.style.lineHeight='30px';
			howtoplay.style.textAlign='center';
			howtoplay.style.top='450px';
			howtoplay.style.left='200px';
			howtoplay.style.fontFamily = "Brush Script MT, cursive";
			howtoplay.style.fontWeight='bold';
			howtoplay.style.color='#849500';
			howtoplay.innerHTML='HOW TO PLAY';
			howtoplay.style.border="double 1px #95908c";
			howtoplay.style.mozBorderRadius=" 5px";
			howtoplay.style.webkitBorderRadius="5px";
			howtoplay.style.borderRadius="5px";
			howtoplay.id='howtoplay';

			that.containerDiv.appendChild(howtoplay);

			howtoplay.onmouseover=function(){
				howtoplay.style.backgroundColor='#ffbf14';	
				howtoplay.style.color='white';


			};
			howtoplay.onmouseout=function(){
				howtoplay.style.backgroundColor='#654e3e';
				howtoplay.style.color='#849500';
			};
			howtoplay.onclick=HowToPlay;

			var highscore=document.createElement('div');
			highscore.style.width='200px';
			highscore.style.height='30px';
			highscore.style.position='absolute';
			highscore.style.backgroundColor='#654e3e';
			highscore.style.lineHeight='30px';
			highscore.style.textAlign='center';
			highscore.style.top='500px';
			highscore.style.left='200px';
			highscore.style.fontFamily = "Brush Script MT, cursive";
			highscore.style.fontWeight='bold';
			highscore.style.color='#849500';
			highscore.innerHTML='H I G H  S C O R E';
			highscore.style.border="double 1px #95908c";
			highscore.style.mozBorderRadius=" 5px";
			highscore.style.webkitBorderRadius="5px";
			highscore.style.borderRadius="5px";
			highscore.id='highscore';
			highscore.onclick=function(){
				alert("hello");
			};

			that.containerDiv.appendChild(highscore);		

			highscore.onmouseover=function(){
				highscore.style.backgroundColor='#ffbf14';	
				highscore.style.color='white';


			};
			highscore.onmouseout=function(){
				highscore.style.backgroundColor='#654e3e';
				highscore.style.color='#849500';
			};	
			highscore.onclick=HighScore;

		};

		gameSetup();
		gameLogo();
		menus();

		function Start(){
			that.containerDiv.removeChild((document.getElementById('logo')));
			that.containerDiv.removeChild((document.getElementById('start')));
			that.containerDiv.removeChild((document.getElementById('settings')));
			that.containerDiv.removeChild((document.getElementById('highscore')));
			that.containerDiv.removeChild((document.getElementById('howtoplay')));

			var load=document.createElement('div');
				load.style.position='absolute';
				load.style.width='320px';
				load.style.height='240px';
				load.style.top="110px";
				load.style.left="-100px";
				load.style.background='url("../TankWars/images/spinner.gif") no-repeat center center';
				load.style.float='left';
				load.id="load";

				that.containerDiv.appendChild(load);

				var loadMessage=document.createElement('div');
				loadMessage.style.position='absolute';
				loadMessage.style.width='320px';
				loadMessage.style.height='50px';
				loadMessage.style.top="200px";
				loadMessage.style.left="140px";
				loadMessage.innerHTML="L O A D I N G";
				loadMessage.style.fontSize="50px";
				loadMessage.style.fontWeight="bold";
				loadMessage.style.fontFamily = "Brush Script MT, cursive";
				loadMessage.style.float='left';
				loadMessage.id="loadMessage";

				that.containerDiv.appendChild(loadMessage);

			setTimeout(function(){
				that.containerDiv.removeChild((document.getElementById('load')));
				that.containerDiv.removeChild((document.getElementById('loadMessage')));
				
				var Gameplay=new Gameplay(that.containerDiv);
				

			},3000);


		};
		function Settings(){
			that.containerDiv.removeChild((document.getElementById('start')));
			that.containerDiv.removeChild((document.getElementById('settings')));
			that.containerDiv.removeChild((document.getElementById('highscore')));
			that.containerDiv.removeChild((document.getElementById('howtoplay')));

			var speakeron=document.createElement('div');
				speakeron.style.position='absolute';
				speakeron.style.width='auto';
				speakeron.style.height='50px';
				speakeron.style.top="300px";
				speakeron.style.left="50px";
				speakeron.style.fontSize="20px";
				speakeron.innerHTML="S O U N D S ::";
				speakeron.style.fontWeight="bold";
				speakeron.style.fontFamily = "Brush Script MT, cursive";
				speakeron.style.float='left';
				speakeron.id="speakeron";
				speakeron.style.marginRight='50px';
				that.containerDiv.appendChild(speakeron);

				var checkboxes1=document.createElement('input');
				checkboxes1.setAttribute("type", "radio");
				checkboxes1.setAttribute("name","checkOnOff");
				checkboxes1.setAttribute("value","on");
				checkboxes1.style.width="50px";
				checkboxes1.style.marginLeft='20px';
				checkboxes1.style.marginRight='5px';
				checkboxes1.id="checkbox1";

				speakeron.appendChild(checkboxes1);

				var label1=document.createElement('label');
				label1.for="checkboxes1";
				label1.innerHTML="O N"
				label1.style.marginRight="5	0px";
				speakeron.appendChild(label1);


				var checkboxes2=document.createElement('input');
				checkboxes2.setAttribute("type", "radio");
				checkboxes2.setAttribute("name","checkOnOff");
					checkboxes2.setAttribute("value","off");
					checkboxes2.style.marginLeft="100px";
					checkboxes2.style.marginRight='20px';
					checkboxes2.id="checkbox2";

					speakeron.appendChild(checkboxes2);
					var label2=document.createElement('label');
					label2.for="checkboxes1";
					label2.innerHTML="O F F"
					speakeron.appendChild(label2);

				var ok=document.createElement('div');
			ok.style.width='50px';
			ok.style.height='30px';
			ok.style.position='absolute';
			ok.style.backgroundColor='#654e3e';
			ok.style.lineHeight='30px';
			ok.style.textAlign='center';
			ok.style.top='40px';
			ok.style.left='200px';
			ok.style.fontFamily = "Brush Script MT, cursive";
			ok.style.fontWeight='bold';
			ok.style.color='#849500';
			ok.innerHTML='O K';
			ok.style.border="double 1px #95908c";
			ok.style.mozBorderRadius=" 5px";
			ok.style.webkitBorderRadius="5px";
			ok.style.borderRadius="5px";
			ok.id='ok';	

			speakeron.appendChild(ok);

			ok.onmouseover=function(){
				ok.style.backgroundColor='#ffbf14';	
				ok.style.color='white';


			};
			ok.onmouseout=function(){
				ok.style.backgroundColor='#654e3e';
				ok.style.color='#849500';
			};	
			ok.onclick=function(){
				that.containerDiv.removeChild((document.getElementById('speakeron')));
				menus();
				//on ok Set the values of sounds 
			};	
				var back=document.createElement('div');
			back.style.width='100px';
			back.style.height='30px';
			back.style.position='absolute';
			back.style.backgroundColor='#654e3e';
			back.style.lineHeight='30px';
			back.style.textAlign='center';
			back.style.top='40px';
			back.style.left='400px';
			back.style.fontFamily = "Brush Script MT, cursive";
			back.style.fontWeight='bold';
			back.style.color='#849500';
			back.innerHTML='B A C K';
			back.style.border="double 1px #95908c";
			back.style.mozBorderRadius=" 5px";
			back.style.webkitBorderRadius="5px";
			back.style.borderRadius="5px";
			back.id='back';	

			speakeron.appendChild(back);

			back.onmouseover=function(){
				back.style.backgroundColor='#ffbf14';	
				back.style.color='white';


			};
			back.onmouseout=function(){
				back.style.backgroundColor='#654e3e';
				back.style.color='#849500';
			};	
			back.onclick=function(){
				that.containerDiv.removeChild((document.getElementById('speakeron')));
				menus();
									//on back do not make changes
			};

		};
		function HowToPlay(){
			that.containerDiv.removeChild((document.getElementById('start')));
			that.containerDiv.removeChild((document.getElementById('settings')));
			that.containerDiv.removeChild((document.getElementById('highscore')));
			that.containerDiv.removeChild((document.getElementById('howtoplay')));

			var help=document.createElement('div');
				help.style.position='absolute';
				help.style.width='150px';
				help.style.height='auto';
				help.style.lineHeight='50px';
				help.style.textAlign="center";
				help.style.top="230px";
				help.style.left="50px";
				help.style.fontSize="30px";
				help.style.backgroundColor='#654e3e';
				help.innerHTML="H E L P :: <br>";
				help.style.fontWeight="bold";
				help.style.fontFamily = "Brush Script MT, cursive";
				help.style.border="double 1px #95908c";
				help.style.mozBorderRadius=" 5px";
				help.style.webkitBorderRadius="5px";
				help.style.borderRadius="5px";
				help.style.float='left';
				help.id="help";
				help.style.marginRight='50px';
				that.containerDiv.appendChild(help);

				var helptext=document.createElement('div');
				helptext.id="helptext";
				helptext.style.width="500px";
				helptext.style.height="300px";
				helptext.style.top="300px";
				helptext.style.left="50px";
				helptext.style.backgroundColor='#00FFFF';	
				helptext.style.fontSize="25px;"
				helptext.style.fontFamily = "Times New Roman";
				helptext.style.color='black';
				helptext.style.position='absolute';
				helptext.style.overflow="scroll";			
				
				helptext.innerHTML="Hello Gamers!!! Welcome to Tank Wars... <br><br><br> This is a 2D tank war game. There are two characters in this game viz hero and villain. Hero tank is green in colour and villain tank is yellowish orange.Objective of hero tank is to protect his award and not get KIA. Hero gets one more chance if he's dead. But if the award is <br>eached then the game is over.				 <br>With 5 kills of tank a suicide tanker will follow you. Its objective is to collide with you and kill you. When completion of level you'll have to face the main villain. When main villain is killed then the game ends. Or you can keep on playing and beat the high score. <br>	</p>	<p>	Controls::  <br>	A::shoot a Bullet <br>	Up Arrow::Move Up <br>		Down Arrow:Move down <br>	Left Arrow::Move Left <br>	Right Arroe::Move Right <br>	 <br><br>	*Note tunnels are placed to facilitate the users. <br><br>TANK YOU!!!!!";
				
				that.containerDiv.appendChild(helptext);

				

				var back=document.createElement('div');
				back.style.width='100px';
				back.style.height='30px';
				back.style.position='absolute';
				back.style.backgroundColor='#654e3e';
				back.style.lineHeight='30px';
				back.style.textAlign='center';
				back.style.top='235px';
				back.style.left='400px';
				back.style.fontFamily = "Brush Script MT, cursive";
				back.style.fontWeight='bold';
				back.style.color='#849500';
				back.innerHTML='B A C K';
				back.style.border="double 1px #95908c";
				back.style.mozBorderRadius=" 5px";
				back.style.webkitBorderRadius="5px";
				back.style.borderRadius="5px";
				back.id='back';

				that.containerDiv.appendChild(back);
				

				back.onmouseover=function(){
					back.style.backgroundColor='#ffbf14';	
					back.style.color='white';

				};
				back.onmouseout=function(){
					back.style.backgroundColor='#654e3e';
					back.style.color='#849500';
				};	
				back.onclick=function(){
					that.containerDiv.removeChild(help);
					that.containerDiv.removeChild(helptext);
					that.containerDiv.removeChild(back);
					menus();
										//on back do not make changes
				};

		};
		function HighScore(){
			alert("its not available right now");
			menus();
		};

	};



	function Background(){
		this.element = document.createElement('div');
		this.element.style.width = '800px';
		this.element.style.height = '800px';
		this.element.style.background ='url(../TankWars/images/background-tank-game.png) repeat';

		this.updateFrame = function() {
			//If moving background is needed then use statements to move in move()
			// and render it using render();

			// move();
			// render();
			// console.log("background created");
		};

	};


	function Hero(){
		this.heroDiv=document.createElement('div');

		this.height=40;
		this.width=40;

		this.x=0;
		this.y=0;

		//this.heroDiv.style.background='url(../TankWars/images//tank-spritesheet.png) no-repeat';
		this.heroDiv.style.background='url(../TankWars/images/tank-pointing-up.png) no-repeat';
		this.heroDiv.style.position='absolute';
		this.heroDiv.setAttribute("id","hero-id");
		

		// var spriteimages=new spriteSheet();
		// var spriteCoordinates = spriteimages.getSpriteCoordinates();
		// this.spriteCounter = 0;

		var that=this;

		// var updateHeroImage = function(){
		// 	console.log(that.spriteCounter);

		// 		var cord = spriteCoordinates[that.spriteCounter+1];
		// 		that.heroDiv.style.backgroundPosition = '-' + cord.xCord + 'px -' + cord.yCord + 'px';
		// 		that.spriteCounter++;
		// 		if(that.spriteCounter == 7){
		// 			that.spriteCounter = 0;
		// 		}
		// };
		

		this. heroSetup=function(){
			that.heroDiv.style.left=that.x+'px';
			that.heroDiv.style.top=that.y+'px';
			

			that.heroDiv.style.width = that.width + 'px';
			that.heroDiv.style.height = that.height + 'px';

			//updateHeroImage();
		};

	};

	// function spriteSheet(){
	// 	var that = this;
	// 	this.spriteWidth = 40;
	// 	this.spriteHeight = 87;
	// 	this.indexHeight = 87;
	// 	this.indexWidth = 672;
		

	// 	this.getSpriteCoordinates = function getSpriteCoordinates(){
	// 		var spriteCoordinates = [];

	// 		for(var i=0;i<8;i++){
	// 			var xIndex = that.spriteWidth * [i];
	// 			//console.log(xIndex + 'xindex');

	// 			var temp = Math.floor(xIndex/that.indexWidth);
	// 			//console.log(temp + 'temp');

	// 			var yIndex = temp * that.spriteHeight;
	// 			//console.log(yIndex + 'yindex');

	// 			if(xIndex >= that.indexWidth){
	// 				xIndex = xIndex -(temp*that.indexWidth);
	// 				//console.log(xIndex +'final xindex');
	// 			}
	// 			spriteCoordinates.push({xCord:xIndex , yCord:yIndex});
	// 		}	

	// 		return spriteCoordinates;

	// 	};
	// };	

	function Villain(){
		this.villainDiv=document.createElement('div');


		this.villainDirection=0;
		this.height=40;
		this.width=40;

		this.x=0;
		this.y=0;

		this.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-up.png) no-repeat';
		this.villainDiv.style.position='absolute';		
		this.villainDiv.setAttribute("id","villain-id");

		var that=this;	

		this.villainSetup=function(){
			
			that.villainDiv.style.left=that.x+'px';
			that.villainDiv.style.top=that.y+'px';
			

			that.villainDiv.style.width = that.width + 'px';
			that.villainDiv.style.height = that.height + 'px';

		};

	};

	function mainVillain(){
		this.mainVillainDiv=document.createElement('div');
		this.height=200;
		this.width=200;
		this.mainvillainDirection=0;

		this.x=0;
		this.y=0;

		this.mainVillainDiv.style.background='red';
		this.mainVillainDiv.style.position='absolute';		
		this.mainVillainDiv.setAttribute("id","main-villain");
		
		var that=this;

		this.mainVillainSetup=function(){
			that.mainVillainDiv.style.left=that.x+'px';
			that.mainVillainDiv.style.top=that.y+'px';			

			that.mainVillainDiv.style.width = that.width + 'px';
			that.mainVillainDiv.style.height = that.height + 'px';

		};
	};
	function villainShield(){
		this.shieldDiv=document.createElement('div');
		this.height=20;
		this.width=200;			//Shield's width is equal to width of main-villain to prevent the bullet hitting main villain
		this.mainvillainDirection=0;

		this.x=0;
		this.y=0;

		this.shieldDiv.style.background='url(../TankWars/images/shield.png) repeat-x';
		this.shieldDiv.style.position='absolute';		
		this.shieldDiv.setAttribute("id","shield-id");
		
		var that=this;

		this.shieldSetup=function(){
			that.shieldDiv.style.left=that.x+'px';
			that.shieldDiv.style.top=that.y+'px';			

			that.shieldDiv.style.width = that.width + 'px';
			that.shieldDiv.style.height = that.height + 'px';

		};
	};
	function Bullet(){
		this.heroBulletId=0;
		this.villainBulletId=0;
		var that=this;
		this.bulletDirection=0;
		this.bulletY=0;
		this.bulletX=0;
		this.height=10;
		this.width=10;
		this.bulletDelete=false;
		this.whoseBullet=0;	//!->hero 2->villain 3->mainvillain
		this.bulletid=0;
		this.bulletDiv=document.createElement('div');
			// var bulletY=hero.y;
			// var bulletX=(hero.x+(hero.width/2));
		this.createBullet=function(x,y){
			this.bulletY=y;
			this.bulletX=x;

			this.bulletDiv.setAttribute("id", "bullet-id");
			that.bulletDiv.style.width=that.width+'px';
			that.bulletDiv.style.height=that.height+'px';
			//that.bulletDiv.style.radius='10px';
			that.bulletDiv.style.background='url(../TankWars/images/bullet.png) no-repeat';
			that.bulletDiv.style.position='absolute';

			that.bulletDiv.style.top=that.bulletY+'px';
			that.bulletDiv.style.left=that.bulletX+'px';					
		};

		// this.shootBullet=function(position){
		// 		if(position==1){			
					
		// 			that.bulletY-=40;

		// 			}
		// 		else if(position==2){					
		// 			that.bulletX+=40;

		// 			}
		// 		else if(position==3){
		// 			that.bulletY+=40;

		// 			}
		// 		else if(position==4){

		// 			that.bulletX-=40;
	
		// 			}
		// };	
					
	};	

	function clearDiv(getDiv_){
    	while(getDiv_.hasChildNodes()) {
  			getDiv_.removeChild(getDiv_.firstChild);
		}

	 };
	 function suicidialTanks(){
	 	this.suicideDiv=document.createElement('div');


		this.villainDirection=0;
		this.height=40;
		this.width=40;

		this.x=0;
		this.y=0;

		this.suicideDiv.style.background='url(../TankWars/images/suicide-tank-pointing-up.png) no-repeat';
		this.suicideDiv.style.position='absolute';		
		this.suicideDiv.setAttribute("id","suicide-id");

		var that=this;

		this.suicideSetup=function(){
			that.suicideDiv.style.left=that.x+'px';
			that.suicideDiv.style.top=that.y+'px';
			

			that.suicideDiv.style.width = that.width + 'px';
			that.suicideDiv.style.height = that.height + 'px';

		};
	 };

	 function Wall(){
	 	this.wallDiv=document.createElement('div');
		this.height=40;
		this.width=40;	

		this.x=0;
		this.y=0;

		this.wallDiv.style.background='url(../TankWars/images/wall.gif) repeat';
		this.wallDiv.style.position='absolute';		
		this.wallDiv.setAttribute("id","wall-id");
		
		var that=this;

		this.wallSetup=function(){
			that.wallDiv.style.left=that.x+'px';
			that.wallDiv.style.top=that.y+'px';			

			that.wallDiv.style.width = that.width + 'px';
			that.wallDiv.style.height = that.height + 'px';

		};
		this.wallRemove=function(){
			div.removeChild(wallDiv);
		}

	 };
	  function Steel(){
	 	this.steelDiv=document.createElement('div');
		this.height=40;
		this.width=40;	

		this.x=0;
		this.y=0;

		this.steelDiv.style.background='url(../TankWars/images/shield.png) repeat';
		this.steelDiv.style.position='absolute';		
		this.steelDiv.setAttribute("id","steel-id");
		
		var that=this;

		this.steelSetup=function(){
			that.steelDiv.style.left=that.x+'px';
			that.steelDiv.style.top=that.y+'px';			

			that.steelDiv.style.width = that.width + 'px';
			that.steelDiv.style.height = that.height + 'px';

		};

	 };

	   function Tunnel(){
	 	this.tunnelDiv=document.createElement('div');
		this.height=40;
		this.width=40;	

		this.x=0;
		this.y=0;

		this.tunnelDiv.style.background='url(../TankWars/images/tunnel.png) no-repeat';
		this.tunnelDiv.style.position='absolute';		
		this.tunnelDiv.setAttribute("id","tunnel-id");

		// var elem = document.createElement("img");
		// elem.src = '../TankWars/images/tunnel.png';
		// elem.setAttribute("height", "40px");
		// elem.setAttribute("width", "40px");
		// elem.setAttribute("alt", "tunnel");
		// this.tunnelDiv.appendChild("elem");
		
		var that=this;

		this.tunnelSetup=function(){
			that.tunnelDiv.style.left=that.x+'px';
			that.tunnelDiv.style.top=that.y+'px';			

			that.tunnelDiv.style.width = that.width + 'px';
			that.tunnelDiv.style.height = that.height + 'px';

		};

	 };
	 function Award(){
	 	this.awardDiv=document.createElement('div');
		this.height=40;
		this.width=40;	

		this.x=0;
		this.y=0;

		this.awardDiv.style.background='url(../TankWars/images/award1.png) no-repeat';
		this.awardDiv.style.position='absolute';		
		this.awardDiv.setAttribute("id","award-id");
		
		var that=this;

		this.awardSetup=function(){
			that.awardDiv.style.left=that.x+'px';
			that.awardDiv.style.top=that.y+'px';			

			that.awardDiv.style.width = that.width + 'px';
			that.awardDiv.style.height = that.height + 'px';

		};

	 };
	function Gameplay(getDiv_){
		var gameStart=false;
		this.gameDiv=getDiv_;
		var background=new Background();
		var hero=new Hero();
		var heroDirection=1;				//Default is up		
		var interval=30;

		var bulletFlag=0;
		var heroBullets=[];
		var villainBullets=[];
		var villains=[];
		var suicidialtanks=[];

		var reachLevel2=0;	//Set it 1 to go to level 2
		var fightmainvillainFlag=false;	//Set true to start
		var mainvillain=new mainVillain();

		var shield=new villainShield();
		var shieldcount=1;

		var heroFired=false;
		var mainvillainFired=false;
		var villainFired=false;

		var suicidecount=0;		
		var suicidetankFlag=false;

		//var walls={y:0,x:0,obj:0};
		var walls=[];

		var that=this;
		//function delElement=new deleteElement(parent,child);			//So that one has to press again to shoot again
		var gameProps = {
			width: 600,
			height: 600
		};

		//1->hero 2->villain 3->suicide tanks 0->empty 5->steel 6->wallid 7->wormhole 8->award
		var map=[
				[0 ,0 ,0 , 0, 6, 0, 0, 0, 0, 6, 0, 6, 0, 0, 0],
				[0 ,6 ,6 , 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0 ,6 ,7 , 6, 5, 0, 0, 6, 5, 0, 0, 5, 0, 6, 5],
				[0 ,6 ,0 , 0, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0],
				[0 ,6 ,6 , 5, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0],
				[0, 0 ,0 , 0, 0, 0, 5, 6, 0, 0, 0, 6, 0, 6, 6],
				[0 ,0 ,0 , 0, 0, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0],
				[6 ,6 ,6 , 5, 0, 0, 0, 0, 6, 0, 5, 0, 6, 5, 0],
				[0 ,0 ,0 , 0, 0, 6, 0, 6, 0, 7, 6, 0, 0, 6, 0],
				[0 ,0 ,0 , 0, 6, 0, 0, 6, 6, 6, 6, 0, 0, 0, 0],
				[0 ,5 ,6 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 0],
				[0 ,6 ,0 , 5, 0, 6, 0, 0, 0, 6, 0, 5, 0, 0, 6],
				[0 ,5 ,6 , 0, 6, 0, 0, 1, 0, 0, 6, 0, 0, 0, 5],
				[0 ,6 ,0 , 6, 0, 0, 6, 6, 6, 0, 0, 5, 6, 0, 0],
				[6 ,0 ,0 , 0, 6, 0, 6, 8, 6, 0, 0, 0, 0, 6, 6],
				
				];		


				//Set numbers respective to objets on array after creation of any objects

		// var grid = new Grid(map);
		// var finder = new BreadthFirstFinder();
		// var path;	
		// var gridBackup = grid.clone();	

		var notallowedtoMove=[];
		
		mainvillain.mainvillainDirection=2;
		var hits=0;

		function level2(){
			villainBullets=[];
			var timer=0;
			var interval1=30;

			// var randstart=(Math.floor(Math.random()*2+1))%2;
			// if(randstart===0){
			// 	mainvillain.mainvillainDirection==2;
			// }else{
			// 	mainvillain.mainvillainDirection==4;
			// }
			var move=function(){
				var rand=(Math.random()*2);
				if(rand>=0 && rand<1){
					mainvillainFired=false;

				}else{
					mainvillainFired=true;
				}
				if(mainvillain.mainvillainDirection==2&&(mainvillain.x<(gameProps.width-mainvillain.width))){
					moveRight(11);
					shield.shieldSetup();
					if(mainvillain.x>=(gameProps.width-mainvillain.width)){
						mainvillain.mainvillainDirection=4;
						if(timer==5){
							timer=0;
						}else{
							timer++;
						}
					}
					if(mainvillainFired){
						if(timer<5){
							fireBullet();
						}
					}
				}					
				else if(mainvillain.mainvillainDirection==4&&mainvillain.x>0){
					moveLeft(11);
					shield.shieldSetup();
					if(mainvillain.x<=0){
						mainvillain.mainvillainDirection=2;						
						if(timer==5){
							timer=0;
						}else{
							timer++;
						}
					}
					if(mainvillainFired){
						if(timer<5){
							fireBullet();
						}
					}
				}
				
				//window.requestAnimationFrame(move);
							
			};	

			var repeater=function(){		
					if(shieldcount==1){
						interval1=30;
						console.log("404040404040400440")				
					}
					else if(shieldcount==0){
						//clearInterval(movemainVillain);
						interval1=interval1-20;
						console.log("202020202020202020200202020202");
						if(hits>2){
							//clearInterval(movemainVillain);
							interval1=interval1-10;

							console.log("10101010010101010101");

						}
					}

				var movemainVillain=setInterval(move,interval1);
			
				//window.requestAnimationFrame(move);

			}();

			
		};
	
		function GenerateBulletId(flag){
			var max = 0;
			if(flag==1){
					for (var i=0; i<heroBullets.length; i++) {
					if (heroBullets[i].id > max)
						max = heroBullets[i].id;
				}
				return max + 1;
			}else if(flag==2||flag==3){
				for (var i=0; i<villainBullets.length; i++) {
					if (villainBullets[i].id > max)
						max = villainBullets[i].id;
				}
				return max + 1;
			}
			
		};
		var findBulletById = function(arrayobj,id) {
			for (var i=0; i<arrayobj.length; i++) {
				if (arrayobj[i].id === id)
					return i;
			}
		};

		function createShield(){			
			mainvillain.mainVillainDiv.appendChild(shield.shieldDiv);
			function renderShield(){
				shield.y = mainvillain.height;
				shield.x = 0;			
			};	
			renderShield();
		};

		function createWall(x,y){
			var wall=new Wall();		
			that.gameDiv.appendChild(wall.wallDiv);

			//walls.push(wall);

			//walls[wallCounter++]=[{y:y,x:x,obj:wall}];
			walls.push(wall);

			function renderWall(){
				wall.x = x*40;	
				wall.y = y*40;
						
			};

			renderWall();
			wall.wallSetup();
		};
		function createSteel(x,y){
			var steel=new Steel();		
			that.gameDiv.appendChild(steel.steelDiv);

			notallowedtoMove.push(steel);

			function renderSteel(){
				steel.x = x*40;
				steel.y = y*40;
							
			};	

			renderSteel();
			steel.steelSetup();
		};
		function createTunnel(x,y){
			var tunnel=new Tunnel();		

			that.gameDiv.appendChild(tunnel.tunnelDiv);

			function rendertunnel(){
				tunnel.x = x*40;
				tunnel.y = y*40;
							
			};	

			rendertunnel();
			tunnel.tunnelSetup();
		};
		function createaward(x,y){		

			var award=new Award();		
			that.gameDiv.appendChild(award.awardDiv);
			notallowedtoMove.push(award);

			function renderaward(){
				award.x = x*40;
				award.y = y*40;
							
			};	

			renderaward();
			award.awardSetup();
		};

		var wallCounter=0;

		function gameSetup(){	
			if(!fightmainvillainFlag){	
				that.gameDiv.style.width=gameProps.width+'px';
				that.gameDiv.style.height=gameProps.height+'px';
				that.gameDiv.style.position='relative';
				that.gameDiv.style.overflow='hidden';
			
				hero.y = 480;
				hero.x = 280;

				var getX=(hero.x/40);
				var getY=(hero.y/40);

				

				for(var i=0;i<map.length;i++){
					for(var j=0;j<map.length;j++){
						if(map[i][j]==8){
							createaward(j,i);

						}
						if(map[i][j]===6){
							createWall(j,i);
						}
						if(map[i][j]===5){
							createSteel(j,i);
						}						
						if(map[i][j]===7){
							createTunnel(j,i);
						}

					}

				}
				that.gameDiv.appendChild(background.element);
				that.gameDiv.appendChild(hero.heroDiv);
			}else{
				that.gameDiv.style.width=gameProps.width+'px';
				that.gameDiv.style.height=gameProps.height+'px';
				that.gameDiv.style.position='relative';
				that.gameDiv.style.overflow='hidden';

				hero.y = 560;
				hero.x = 280;

				var getX=(hero.x/40);
				var getY=(hero.y/40);

				map[getY][getX]=1;

				that.gameDiv.appendChild(background.element);
				that.gameDiv.appendChild(hero.heroDiv);
			}	
			
		};

		function createmainVillain(){
			that.gameDiv.appendChild(mainvillain.mainVillainDiv);
			function rendermainVillain(){
				mainvillain.y = 0;
				mainvillain.x =gameProps.width-mainvillain.width;				
			};	
			rendermainVillain();
		};

		function createVillain(){
			var villain=new Villain();

			villaincount++;	
			
			that.gameDiv.appendChild(villain.villainDiv);

			var renderVillain=function(){
				var rand=Math.random()*5;
				if(rand>=0 && rand<1){
					if(map[0][0]==0){
						villain.x=0;
						villain.y=0;
						villain.villainDirection=3;	
						villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-down.png) no-repeat';			
						console.log("1.1");
						map[0][0]=2;
					}else{
						villain.x=0;
						villain.y=320;
						villain.villainDirection=2;	
						villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-right.png) no-repeat';			
						console.log("1.1");
						map[8][0]=2;
					}
				}else if(rand>=1 && rand<2){
					if(map[6][0]==0){
						villain.x=0;
						villain.y=240;
						villain.villainDirection=2;	
						villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-right.png) no-repeat';			
						console.log("1.1");
						map[6][0]=2;
					}else{
						villain.x=0;
						villain.y=320;
						villain.villainDirection=2;	
						villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-right.png) no-repeat';			
						console.log("1.1");
						map[8][0]=2;
					}

				}else if(rand>=2 && rand<3){
					if(map[6][0]==0){
						villain.x=0;
						villain.y=240;
						villain.villainDirection=2;	
						villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-right.png) no-repeat';			
						console.log("1.1");
						map[6][0]=2;
					}else{
						villain.x=0;
						villain.y=320;
						villain.villainDirection=2;	
						villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-right.png) no-repeat';			
						console.log("1.1");
						map[8][0]=2;
					}

				}else if(rand>=3 && rand<4){
					if(map[0][7]==0){
						villain.x=280;
						villain.y=0;
						villain.villainDirection=3;	
						villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-down.png) no-repeat';			
						console.log("1.1");
						map[0][7]=2;
					}else  if(map[0][8]==0){
						villain.x=320;
						villain.y=0;
						villain.villainDirection=4;	
						villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-left.png) no-repeat';			
						console.log("1.1");
						map[0][8]=2;
					}else{
						villain.x=240;
						villain.y=0;
						villain.villainDirection=4;	
						villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-left.png) no-repeat';			
						console.log("1.1");
						map[0][6]=2;
					}

				}else if(rand>=4 && rand<5){
					if(map[6][14]==0){
						villain.x=560;
						villain.y=240;
						villain.villainDirection=4;	
						villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-left.png) no-repeat';			
						console.log("1.1");
						map[6][14]=2;
					}else{
						villain.x=560;
						villain.y=320;
						villain.villainDirection=4;	
						villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-left.png) no-repeat';			
						console.log("1.1");
						map[8][14]=2;
					}

				}



				// if(hero.x>0 && !(hero.x==gameProps.width-hero.width)){
				// 	if(map[0][7]==0){
				// 		villain.x=280;
				// 		// villain.y=-40;
				// 		villain.y=0;
				// 		villain.villainDirection=3;	
				// 		villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-down.png) no-repeat';			
				// 		console.log("1.1");
				// 		map[0][7]=2;
				// 	}
				// 	else if(map[0][8]==0){
				// 		villain.x=320;
				// 		// villain.y=-40;
				// 		villain.y=0;
				// 		villain.villainDirection=3;	
				// 		villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-down.png) no-repeat';			
				// 		console.log("1.2");
				// 		map[0][8]=2;
				// 	}else if(map[0][6]==0){
				// 		villain.x=240;
				// 		//villain.y=-40;
				// 		villain.y=0;
				// 		villain.villainDirection=3;	
				// 		villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-down.png) no-repeat';			
				// 		console.log("1.3");
				// 		map[0][6]=2;
				// 	}else{
				// 		//villain.x=-40;
				// 		villain.x=0;
				// 		villain.y=240;
				// 		villain.villainDirection=2;	
				// 		villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-right.png) no-repeat';			
				// 		console.log("1.4");
				// 		map[6][0]=2;
				// 	}

				// }else if(hero.x==0){
				// 	var rand=Math.floor(Math.random()*2+1);
				// 	if(rand==1){
				// 		if(map[0][14]==0){
				// 			//villain.x=gameProps.width;
				// 			villain.x=gameProps.width-villain.width;
				// 			villain.y=0;
				// 			villain.villainDirection=4;	
				// 			villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-left.png) no-repeat';			
				// 			console.log("2.1");
				// 			map[0][14]=2;
				// 		}else if(map[8][14]==0){
				// 			// villain.x=gameProps.width;
				// 			villain.x=gameProps.width-villain.width;
				// 			villain.y=320;
				// 			villain.villainDirection=4;	
				// 			villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-left.png) no-repeat';			
				// 			console.log("2.2");
				// 			map[8][14]=2;
				// 		}else{
				// 			// villain.x=-40;
				// 			villain.x=0;
				// 			villain.y=240;
				// 			villain.villainDirection=2;	
				// 			villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-right.png) no-repeat';			
				// 			console.log("2.3");
				// 			map[6][0]=2;
				// 		}
				// 	}else{
				// 		if(map[8][14]==0){
				// 			// villain.x=gameProps.width;
				// 			villain.x=gameProps.width-villain.width;
				// 			villain.y=320;
				// 			villain.villainDirection=4;	
				// 			villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-left.png) no-repeat';			
				// 			console.log("2.2");
				// 			map[8][14]=2;
				// 		}else if(map[0][14]==0){
				// 			//villain.x=gameProps.width;
				// 			villain.x=gameProps.width-villain.width;
				// 			villain.y=0;
				// 			villain.villainDirection=4;	
				// 			villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-left.png) no-repeat';			
				// 			console.log("2.1");
				// 			map[0][14]=2;
				// 		}else{
				// 			//villain.x=-40;
				// 			villain.x=0;
				// 			villain.y=240;
				// 			villain.villainDirection=2;	
				// 			villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-right.png) no-repeat';			
				// 			console.log("2.3");
				// 			map[6][0]=2;
				// 		}
				// 	}				
				// }else if(hero.x==gameProps.width-hero.width){
				// 	var rand=Math.floor(Math.random()*2+1);
				// 	if(rand==1){
				// 		if(map[0][0]==0){
				// 			//villain.x=-40;
				// 			villain.x=0;
				// 			villain.y=0;
				// 			villain.villainDirection=2;	
				// 			villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-right.png) no-repeat';			
				// 			console.log("3.1");
				// 			map[0][0]=2;
				// 		}else if(map[8][0]==0){
				// 			//villain.x=-40;
				// 			villain.x=0;
				// 			villain.y=320;
				// 			villain.villainDirection=2;	
				// 			villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-right.png) no-repeat';			
				// 			console.log("3.2");
				// 			map[0][8]=2;
				// 		}else{
				// 			//villain.x=-40;
				// 			villain.x=0;
				// 			villain.y=240;
				// 			villain.villainDirection=2;	
				// 			villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-right.png) no-repeat';			
				// 			console.log("3.3");
				// 			map[6][0]=2;
				// 		}
				// 	}else{
				// 		if(map[0][8]==0){
				// 			//villain.x=-40;
				// 			villain.x=0;
				// 			villain.y=320;
				// 			villain.villainDirection=4;	
				// 			villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-left.png) no-repeat';			
				// 			console.log("2.2");
				// 			map[0][8]=2;
				// 		}else if(map[0][0]==0){
				// 			// villain.x=-40;
				// 			villain.x=0;
				// 			villain.y=0;
				// 			villain.villainDirection=4;	
				// 			villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-left.png) no-repeat';			
				// 			console.log("2.1");
				// 			map[0][0]=2;
				// 		}else{
				// 			// villain.x=-40;
				// 			villain.x=0;
				// 			villain.y=240;
				// 			villain.villainDirection=2;	
				// 			villain.villainDiv.style.background='url(..//TankWars/images/enemy-tank-pointing-right.png) no-repeat';			
				// 			console.log("2.3");
				// 			map[6][0]=2;
				// 		}
				// 	}
				// }
				
			};				
			var moveInit=function(){
				//Statements to move the villain inside the gameProps				
				if((villain.x==0&&villain.y>=0)||(villain.x==(gameProps.width-villain.width)&&(villain.y>=0))||(villain.y==0&&villain.x>0&&villain.x<(gameProps.width-villain.height))){
					console.log(map);
					clearInterval(intervaltoInit);
				}else{

					if(villain.x<0&&(villain.y>=0)){
						villain.x+=10;
					}
					else if(villain.x>(gameProps.width-villain.width)&&(villain.y>=0)){
						villain.x-=10;
					}
					else if(villain.x>0&&villain.x<(gameProps.width-villain.width)&&villain.y<0){
						villain.y+=10;
						console.log(villain.y);
					}	
				}	

				villain.villainSetup();			
							
							
			};	

			// var dir_decider=Math.floor(Math.random()*4)+1;
			// 	switch(dir_decider){
			// 		case 1:turnUp(1);
			// 				break;
			// 		case 2:turnRight(1);
			// 				break;
			// 		case 3:turnDown(1);
			// 				break;
			// 		case 4:turnLeft(1);
			// 				break;

			// 	}
			// 	villain.villainDirection=1;	

			

			renderVillain();

			var intervaltoInit=setInterval(moveInit,100);	
				
			villains.push(villain);

		};
		

		function createSuicide(position){
			var suicide=new suicidialTanks();

			that.gameDiv.appendChild(suicide.suicideDiv);						

			function renderSuicide(){
				if(position==1){
					suicide.x=(gameProps.width-suicide.width);
					suicide.y=0;
				
					var getX=(suicide.x/40);
					var getY=(suicide.y/40);

					map[getX][getY]=3;
				
				}else if (position==2){
					suicide.x=0;
					suicide.y=0;
				
					var getX=(suicide.x/40);
					var getY=(suicide.y/40);

					map[getX][getY]=3;
				}
			};


			suicidialtanks.push(suicide);						
			renderSuicide();

			suicide.suicideSetup();
		};

		var SuicideTankMove=function(obj,tankNo){				
			var suicide=obj;

			if(suicide.x<hero.x){
				if(suicide.y<hero.y){

				}else if(suicide.y==hero.y){

				}else if(suicide.y>hero.y){

				}
			}else if(suicide.x==hero.x){
				if(suicide.y<hero.y){

				}else if(suicide.y==hero.y){

				}else if(suicide.y>hero.y){
					
				}
			}else if(suicide.x>hero.x){
				if(suicide.y<hero.y){

				}else if(suicide.y==hero.y){

				}else if(suicide.y>hero.y){
					
				}
			}





		};


		function moveVillains(){

		// 	this.updatePosition = function(path) {
		// 	var coordinate = [];
		// 	coordinate = path[that.pathCounter];
		// 	//debugger;
			
		// 	if (that.pathCounter < path.length) {
		// 		var newPositionX = coordinate[0]*30;
		// 		var newPositionY = coordinate[1]*30;
		// 		console.log(newPositionX, newPositionY);

		// 		if(that.pathCounter > 0) {
		// 			var oldPosition = path[that.pathCounter - 1];
		// 			var oldPositionX = oldPosition[0] * 30;
		// 			var oldPositionY = oldPosition[1] * 30;
		// 			//if x does not change, change y
		// 			if(newPositionX === oldPositionX) {
		// 				if(newPositionY > oldPositionY) {
		// 					that.y += that.velocity;
		// 				}else if(newPositionY < oldPositionY) {
		// 					that.y -= that.velocity;
		// 				}
		// 			}
		// 			//if y does not change, change x
		// 			if(newPositionY === oldPositionY) {
		// 				if(newPositionX > oldPositionX) {
		// 					that.x += that.velocity;
		// 				}else if(newPositionX < oldPositionX) {
		// 					that.x -= that.velocity;
		// 				}
		// 			}
		// 		}else {
		// 			that.pathCounter++;
		// 		}
		// 	}

		// 	that.element.style.left = that.x + 'px';
		// 	that.element.style.top = that.y + 'px';

			
		// };

			var counter=0;


			var move=function(){			
				
				for(var i=0;i<villains.length;i++){	
					RandomMovement(villains[i]);			
				}
			};

			
			var nextInterval=setInterval(move,1000);
		};

		var RandomMovement = function(obj) {
			var villain=obj;
			var random = Math.random() * 4;
			if ((random >= 0) && random < 1) {
				turnRight(11,villain);
				if(obj.x<gameProps.width-obj.width){
					moveRight(11,obj);					
					var rand=Math.random()*2;
					if(rand>=0 && rand<1){	
						villainFired=true;				
						fireBullet(villain);
						villainFired=false;
					}
				}
				
			}
			if ((random >= 1) && random < 2) {
				turnLeft(11,villain);
				if(obj.x>0){

					moveLeft(11,obj);
				
					var rand=Math.random()*2;
					if(rand>=0 && rand<1){
						villainFired=true;
						fireBullet(villain);
						villainFired=false;
					}
				}
			}
			if ((random >= 2) && random < 3) {
				turnUp(11,villain);
				if(obj.y>0){
					moveUp(11,obj);
					var rand=Math.random()*2;
					if(rand>=0 && rand<1){
						villainFired=true;
						fireBullet(villain);
						villainFired=false;
				}
				}				
				
			}
			if ((random >= 3) && random < 4) {
				turnDown(11,villain);
				if(obj.y<gameProps.height-obj.height){
					moveDown(11,obj);
					var rand=Math.random()*2;
					if(rand>=0 && rand<1){
						villainFired=true;
						fireBullet(villain);
						villainFired=false;
					}	
				}				
				
			}
		};

		var moveBullets=function(position,obj){
			var bullet=obj;
			if(position==1){			
				moveUp(5,bullet);					
				}
			else if(position==2){
				moveRight(5,bullet);
				}
			else if(position==3){
				moveDown(5,bullet);
			}
			else if(position==4){
				moveLeft(5,bullet);
			}
		
		
		};

		
		var gameLoopCount=0;
		var villaincount=0;
		var villainkills=0;

		var  gameLoop=function(){
			if(!fightmainvillainFlag){
				gameLoopCount++;

				//background.updateFrame();
				hero.heroSetup();

				if(gameLoopCount % 100==0&&villaincount<=4){			
					if(villainkills%5==0){
						suicidetankFlag=true;								
					}		

					createVillain();
					moveVillains();
					



													
					// if(suicidetankFlag){
					// 	createSuicide(1);
					// 	createSuicide(2);
					// 	for(var i=0;i<suicidialtanks.length;i++){
					// 		var obj=suicidialtanks[i];

					// 		obj.suicideSetup();

					// 		SuicideTankMove(obj,i);

							

					// 		if(suicidialtanks.length==0){
					// 			clearInterval(attacktiming);
					// 		}
					// 	}

					// 	suicidetankFlag=false;

					// 	var attacktiming=setInterval(suicideAttack,50);	

					//  }


					for (var i=0; i<villains.length; i++){
						var villain = villains[i];
						villain.villainSetup();					
					}
					
					
				}
			}else{
				gameSetup();
				hero.heroSetup();
				createmainVillain();
				createShield();
				shield.shieldSetup();				
				mainvillain.mainVillainSetup();				
				level2();				

			}
			//detectBombBlasts();
		};

			
		 //1-up 2-right 3-down 4-left

		var turnUp=function(villainFlag,obj){
			if(!(villainFlag==11)){
				if(!(heroDirection==1)){					
					heroDirection=1;
					hero.height=40;
					hero.width=40;
					console.log(hero.x+'    '+hero.y);
					hero.heroDiv.style.background='url(../TankWars/images/tank-pointing-up.png) no-repeat';
				}
				hero.heroSetup();
			}
			else{
					var villain=obj;

					if(!(villain.villainDirection==1)){
						villain.villainDirection=1;
						villain.height=40;
						villain.width=40;
						villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-up.png) no-repeat';
					}
						villain.villainSetup();
					}
			
		};

		//11-indicates villain's movement 7-indicates hero's movement
		var moveUp=function(numchk,obj){
			if(numchk==7){	

				if(hero.y>0){
						if((map[Math.floor((hero.y-40)/40)][Math.floor((hero.x)/40)])==0){
						var getX=Math.floor((hero.x/40));
						var getY=Math.floor((hero.y/40));

						map[getY][getX]=0;

						hero.y-=40;

						map[2][2]=7;
						map[8][9]=7;

						getX=(hero.x/40);
						getY=(hero.y/40);

						map[getY][getX]=1;
						hero.heroSetup();
					}else if(map[Math.floor((hero.y-40)/40)][Math.floor((hero.x)/40)]==7){
						var getX=Math.floor((hero.x/40));
						var getY=Math.floor((hero.y/40));

						console.log(getX,"  ",getY);

						if(getX==9){
							map[getY][getX]=0;


							hero.y=80;
							hero.x=80;

							getX=(hero.x/40);
							getY=(hero.y/40);

							map[getY][getX]=1;
						}else if(getX==2){
							map[getY][getX]=0;

							hero.y=320;
							hero.x=360;

							getX=(hero.x/40);
							getY=(hero.y/40);

							map[getY][getX]=1;
						}

						
						hero.heroSetup();
					}else if(map[Math.floor((hero.y-40)/40)][Math.floor((hero.x)/40)]==2){
						alert("Tank-Tank collision");
						window.location.reload();
					}
				}	
			}
			else if(numchk==11){
				//villain's movement
				var villain=obj;
				if(villain.villainDirection==1){
					if(villain.x>0){
						if((map[Math.floor((villain.y-40)/40)][Math.floor((villain.x)/40)]==0)&&(!map[Math.floor((villain.y)/40)][Math.floor((villain.x)/40)])){
						console.log("moved up");
						var getX=(villain.x/40);
						var getY=(villain.y/40);

						map[getY][getX]=0;

						villain.y-=40;

						getX=(villain.x/40);
						getY=(villain.y/40);

						map[getY][getX]=2;
						villain.villainSetup();
										
						}else if(map[Math.floor((villain.y-40)/40)][Math.floor((villain.x)/40)]==1){
								alert("tank-tank collision");
								window.location.reload();
						}	
					}	
				}
			}else if(numchk==5){
				var bullet=obj;

					if(map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]==0){
						if(bullet.bulletDirection==1){
							bullet.bulletY-=40;
						}
					}else if(map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]==6){					
						//deleteElement(that.gameDiv,bullet.bulletDiv);

						for(var i=0;i<walls.length;i++){	

							if(((walls[i].x+walls[i].width)>=(bullet.bulletX+bullet.width))&&(bullet.bulletX>=walls[i].x)){
								if(((bullet.bulletY+bullet.height)<=walls[i].y)||((walls[i].y+walls[i].height)>=bullet.bulletY)){
									
									//deleteElement(that.gameDiv,walls[i].wallDiv);
									that.gameDiv.removeChild(walls[i].wallDiv);

									map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]=0;

									walls.splice(i,1);

									that.gameDiv.removeChild(bullet.bulletDiv);
									 // delete bullet.height;
									 // delete bullet.width;

									// bullet.height=null;
									// bullet.width=null;

									if(bullet.whoseBullet==1){
										var j=findBulletById(heroBullets,bullet.id);									
										heroBullets.splice(j,1);
										delete bullet.height;
									 	delete bullet.width;
									}else if(bullet.whoseBullet==2){
										var j=findBulletById(villainBullets,bullet.id);									
										villainBullets.splice(j,1);
										delete bullet.height;
									 	delete bullet.width;
									}
									break;
									
									
								}
							}		
						}
						

					}else if(((map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)])==2)&&(bullet.whoseBullet==1)){
						//deleteElement(that.gameDiv,bullet.bulletDiv);	
						for(var i=0;i<villains.length;i++){	

								if(((villains[i].x+villains[i].width)>=(bullet.bulletX+bullet.width))&&(bullet.bulletX>=villains[i].x)){
									if(((bullet.bulletY+bullet.height)<=villains[i].y)||((villains[i].y+villains[i].height)>=bullet.bulletY)){
										
										that.gameDiv.removeChild(villains[i].villainDiv);
										
										//delete villains[i].height;
										
										map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]=0;
										villains.splice(i,1);

										villaincount--;

										villainkills++;

										that.gameDiv.removeChild(bullet.bulletDiv);
										//deleteElement(that.gameDiv,bullet.bulletDiv);
										// delete bullet.height;
										// delete bullet.width;
										if(bullet.whoseBullet==1){
											var j=findBulletById(heroBullets,bullet.id);									
											heroBullets.splice(j,1);
											delete bullet.height;
										 	delete bullet.width;
										}else if(bullet.whoseBullet==2){
											var j=findBulletById(villainBullets,bullet.id);									
											villainBullets.splice(j,1);
											delete bullet.height;
										 	delete bullet.width;
										}
										break;
										
										
									}
							}	
						}	
						bullet.bulletDelete=true;			
						//deletevillain
					}else if(map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]==5){					
						//deleteElement(that.gameDiv,bullet.bulletDiv);
						bullet.bulletDelete=true;
					}else if(((map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)])==2)&&(bullet.whoseBullet==2)){
						//deleteElement(that.gameDiv,bullet.bulletDiv);	
						bullet.bulletDelete=true;				
						//do nothing villain shooting villain
					}else if(((map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)])==1)&&(bullet.whoseBullet==1)){
						bullet.bulletDelete=true;
					}else if(((map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)])==1)&&(bullet.whoseBullet==2)){
						that.gameDiv.removeChild(hero.heroDiv);	
							bullet.bulletDelete=true;	
							alert("Game Over!!Press Ok to play again");
							window.location.reload();				
						//do nothing villain shooting villain
					}else if(((map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)])==8)){
						//deleteElement(that.gameDiv,bullet.bulletDiv);					
						//do nothing villain shooting villain
						alert("Game Over!!Press Ok to play again");
						window.location.reload();

					}else if((map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)])==7){
						bullet.bulletDelete=true;
					}

			}	
		};
		
		var  turnDown=function(villainFlag,obj){
			if(!(villainFlag==11)){

				if(!(heroDirection==3)){
						
						heroDirection=3;
						hero.height=40;
						hero.width=40;
						console.log(hero.x+'    '+hero.y);
						hero.heroDiv.style.background='url(../TankWars/images/tank-pointing-down.png) no-repeat';
					}
					hero.heroSetup();
				}
				else{
					var villain=obj;
					if(!(villain.villainDirection==3)){
							console.log("hello");
							villain.villainDirection=3;
							villain.height=40;
							villain.width=40;
							villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-down.png) no-repeat';
						}
						villain.villainSetup();
					}
							
		};
		var moveDown=function(numchk,obj){
			if(numchk==7){
				if(hero.y<(gameProps.height-hero.height)){
						if((map[Math.floor((hero.y+40)/40)][Math.floor((hero.x)/40)])==0){
						var getX=(hero.x/40);
						var getY=(hero.y/40);

						map[getY][getX]=0;

						hero.y+=40;		

						map[2][2]=7;
						map[8][9]=7;			

						getX=(hero.x/40);
						getY=(hero.y/40);

						map[getY][getX]=1;


						hero.heroSetup();			
							
					}else if((map[Math.floor((hero.y+40)/40)][Math.floor((hero.x)/40)])==7){
						var getX=Math.floor((hero.x/40));
						var getY=Math.floor((hero.y/40));

						if(getX==9){
							map[getY][getX]=0;


							hero.y=80;
							hero.x=80;

							getX=(hero.x/40);
							getY=(hero.y/40);

							map[getY][getX]=1;
						}else if(getX==2){
							map[getY][getX]=0;

							hero.y=320;
							hero.x=360;

							getX=(hero.x/40);
							getY=(hero.y/40);

							map[getY][getX]=1;
						}
						hero.heroSetup();
					}else if(map[Math.floor((hero.y+40)/40)][Math.floor((hero.x)/40)]==2){
						alert("Tank-Tank collision");
						window.location.reload();
					}
				}
			}else if(numchk==11){
				//villain's movement
				var villain=obj;
				if(villain.villainDirection==3){
							if(villain.x<(gameProps.villain-villain.width)){ 
								if(map[Math.floor((villain.y+40)/40)][Math.floor((villain.x)/40)]==0){
								
								var getX=(villain.x/40);
								var getY=(villain.y/40);

								map[getY][getX]=0;

								villain.y+=40;

								getX=(villain.x/40);
								getY=(villain.y/40);

								map[getY][getX]=2;

								villain.villainSetup();

								console.log("moved down");
											
								}else if(map[Math.floor((villain.y+40)/40)][Math.floor((villain.x)/40)]==1){
									alert("tank-tank collision");
									window.location.reload();
								}
							}		
					}
			}else if(numchk==5){
				var bullet=obj;
				if(bullet.bulletY<=gameProps.height){
					if(map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)]==0 ){
						if(bullet.bulletDirection==3){
							bullet.bulletY+=40;
						}
					}else if(map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)]==6){					
						//	deleteElement(that.gameDiv,bullet.bulletDiv);
						for(var i=0;i<walls.length;i++){	

							if(((walls[i].x+walls[i].width)>=(bullet.bulletX+bullet.width))&&(bullet.bulletX>=walls[i].x)){								
								if(((bullet.bulletY+bullet.height)<=walls[i].y)||((walls[i].y+walls[i].height)>=bullet.bulletY)){
									that.gameDiv.removeChild(walls[i].wallDiv);
									map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)]=0;
									walls.splice(i,1);
									that.gameDiv.removeChild(bullet.bulletDiv);
									// delete bullet.height;
									// delete bullet.width;
									if(bullet.whoseBullet==1){

										var j=findBulletById(heroBullets,bullet.id);
										heroBullets.splice(j,1);
										delete bullet.height;
										delete bullet.width;
										// delete bullet.bulletY;
										// delete bullet.bulletX;
										
									}else if(bullet.whoseBullet==2){
										var j=findBulletById(villainBullets,bullet.id);									
										villainBullets.splice(j,1);
										delete bullet.height;
										delete bullet.width;
										// delete bullet.bulletY;
										// delete bullet.bulletX;	
																	
									}
									break;								
								}
							}

						}
						//bullet.bulletDelete=true;

					}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==2)&&(bullet.whoseBullet==1)){
						//deleteElement(that.gameDiv,bullet.bulletDiv);					
						//deletevillain
						for(var i=0;i<villains.length;i++){	

							if(((villains[i].x+villains[i].width)>=(bullet.bulletX+bullet.width))&&(bullet.bulletX>=villains[i].x)){								
								if(((bullet.bulletY+bullet.height)>=(villains[i].y))&&(villains[i].y>bullet.bulletY)){
									//deleteElement(that.gameDiv,villains[i].wallDiv);
									alert("enemy tank hit");
									that.gameDiv.removeChild(villains[i].villainDiv);
									//villains[i].wallDiv.parentNode.removeChild(villains[i].wallDiv);
									//alert("villain collision");
									//delete villains[i].height;
									map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)]=0;
									villains.splice(i,1);
									villaincount--;

									villainkills++;

									that.gameDiv.removeChild(bullet.bulletDiv);
									//deleteElement(that.gameDiv,bullet.bulletDiv);
									// delete bullet.height;
									// delete bullet.width;
									if(bullet.whoseBullet==1){
										var j=findBulletById(heroBullets,bullet.id);									
										heroBullets.splice(j,1);
										delete bullet.height;
										delete bullet.width;
									}else if(bullet.whoseBullet==2){
										var j=findBulletById(villainBullets,bullet.id);									
										villainBullets.splice(j,1);
										delete bullet.height;
										delete bullet.width;		
									}
									break;
																	
								}
							}	
						}
						bullet.bulletDelete=true;
					}else if(map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)]==5){					
						//deleteElement(that.gameDiv,bullet.bulletDiv);
						bullet.bulletDelete=true;

					}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==2)&&(bullet.whoseBullet==2)){
						//deleteElement(that.gameDiv,bullet.bulletDiv);					
						bullet.bulletDelete=true;
						//do nothing villain shooting villain
					}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==1)&&(bullet.whoseBullet==1)){					
						bullet.bulletDelete=true;
					}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==1)&&(bullet.whoseBullet==2)){
						that.gameDiv.removeChild(hero.heroDiv);	
							bullet.bulletDelete=true;		
							alert("Game Over!!Press Ok to play again");
							window.location.reload();			
						//do nothing villain shooting villain
					}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==8)){
						//deleteElement(that.gameDiv,bullet.bulletDiv);					
						//do nothing villain shooting villain
						alert("Game Over!!Press Ok to play again");
						window.location.reload();

					}else if((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==7){
						bullet.bulletDelete=true;	

					}
				}else{
					
					that.gameDiv.removeChild(bullet.bulletDiv);
					
					if(bullet.whoseBullet==1){
						var j=findBulletById(heroBullets,bullet.id);									
						heroBullets.splice(j,1);
						delete bullet.height;
						delete bullet.width;
					}else if(bullet.whoseBullet==2){
						var j=findBulletById(villainBullets,bullet.id);									
						villainBullets.splice(j,1);
						delete bullet.height;
						delete bullet.width;		
					}
				}	
			}	

		};
		
		var  turnLeft=function(villainFlag,obj){
			if(!(villainFlag==11))	{
					if(!(heroDirection==4)){
						heroDirection=4;					
						hero.height=40;
						hero.width=40;
						//hero.y=hero.y+13;		//After rotation to fix the hero.y
						console.log(hero.x+'    '+hero.y);
						hero.heroDiv.style.background='url(../TankWars/images/tank-pointing-left.png) no-repeat';
					}
					hero.heroSetup();
			}
			else{	
					var villain=obj;
					if(!(villain.villainDirection==4)){
						villain.villainDirection=4;
						villain.height=40;
						villain.width=40;
						villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-left.png) no-repeat';
					}				
					villain.villainSetup();
				}
			
				
		};
		var  moveLeft=function(numchk,obj){
			if(numchk==7){
				if(hero.x>0){

					  if(map[Math.floor(hero.y/40)][Math.floor((hero.x-40)/40)]==0){
						console.log("moved left");
						var getX=(hero.x/40);
						var getY=(hero.y/40);

						map[getY][getX]=0;

						hero.x-=40;
						map[2][2]=7;
						map[8][9]=7;


						getX=(hero.x/40);
						getY=(hero.y/40);

						map[getY][getX]=1;
						hero.heroSetup();
									
					}else if(map[Math.floor(hero.y/40)][Math.floor((hero.x-40)/40)]==7){
						var getX=Math.floor((hero.x/40));
						var getY=Math.floor((hero.y/40));

						if(getY==8){
							map[getY][getX]=0;


							hero.y=80;
							hero.x=80;

							getX=(hero.x/40);
							getY=(hero.y/40);

							map[getY][getX]=1;
						}else if(getY==2){
							map[getY][getX]=0;

							hero.y=320;
							hero.x=360;

							getX=(hero.x/40);
							getY=(hero.y/40);

							map[getY][getX]=1;
						}
						hero.heroSetup();
					}else if(map[Math.floor(hero.y/40)][Math.floor((hero.x-40)/40)]==0){
						alert("tank-tank collision");
						window.location.reload();
					}
				}					
			}
			else if(numchk==11){
				if(fightmainvillainFlag){	
					if(mainvillain.x>0){
						mainvillain.x-=40;
						mainvillain.mainVillainSetup();
						
						console.log("move -left")	;
					}
				}
				else{
					var villain=obj;
					if(villain.villainDirection==4){
							if(villain.x>0){
								 if(map[Math.floor(villain.y/40)][Math.floor((villain.x-40)/40)]==0){
									console.log("moved left");
									var getX=(villain.x/40);
									var getY=(villain.y/40);

									map[getY][getX]=0;

									villain.x-=40;

									getX=(villain.x/40);
									getY=(villain.y/40);

									map[getY][getX]=2;
									villain.villainSetup();
												
									}else if(map[Math.floor(villain.y/40)][Math.floor((villain.x-40)/40)]==1){
										alert("tank-tank collision");
										window.location.reload();
									}	
							}		
					}		
					//villain's movement if not level2
				}
			}else if(numchk==5){
				var bullet=obj;
				// if((bullet.bulletX+bullet.width)==(bullet.width)||bullet.bulletX==(gameProps.width-bullet.width)){
				// 			deleteElement(that.gameDiv,bullet.bulletDiv);
				// 			delete bullet.height;
				// 			delete bullet.width;
				// 			delete bullet.bulletY;
				// 			delete bullet.bulletX;
				// 			//window.cancelAnimationFrame(myReq);
							
				// }
					if(map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)]==0){	
						if(bullet.bulletDirection==4){
							bullet.bulletX-=40;
						}
					}else if(map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)]==6){					
						
						for(var i=0;i<walls.length;i++){	
							if((walls[i].y <= bullet.bulletY) && ((walls[i].y+walls[i].height) > bullet.bulletY)){
								if((bullet.bulletX <= (walls[i].x+walls[i].width))){

									that.gameDiv.removeChild(walls[i].wallDiv);
									
									map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)]=0;

									walls.splice(i,1);

									that.gameDiv.removeChild(bullet.bulletDiv);
									
									if(bullet.whoseBullet==1){
										var j=findBulletById(heroBullets,bullet.id);									
										heroBullets.splice(j,1);
										delete bullet.height;
										delete bullet.width;
									}else if(bullet.whoseBullet==2){
										var j=findBulletById(villainBullets,bullet.id);									
										villainBullets.splice(j,1);
										delete bullet.height;
										delete bullet.width;
									}
										break;		
														


								}	
							}			
						}	

						//bullet.bulletDelete=true;
					}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)])==2)&&(bullet.whoseBullet==1)){
						//deleteElement(that.gameDiv,bullet.bulletDiv);					
						//deletevillain
						for(var i=0;i<villains.length;i++){	
							if((villains[i].y <= bullet.bulletY) && ((villains[i].y+villains[i].height) > bullet.bulletY)){									
								if((bullet.bulletX == (villains[i].x+villains[i].width))&&(bullet.bulletX>villains[i].x)){
									//deleteElement(that.gameDiv,villains[i].wallDiv);
									that.gameDiv.removeChild(villains[i].villainDiv);
									//villains[i].wallDiv.parentNode.removeChild(villains[i].wallDiv);
									//alert("villain collision");
									// delete villains[i].height;
									map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)]=0;
									villains.splice(i,1);
									villaincount--;

									villainkills++;

									that.gameDiv.removeChild(bullet.bulletDiv);
									//deleteElement(that.gameDiv,bullet.bulletDiv);
									// delete bullet.height;
									// delete bullet.width;
									if(bullet.whoseBullet==1){
										var j=findBulletById(heroBullets,bullet.id);									
										heroBullets.splice(j,1);
										delete bullet.height;
										delete bullet.width;
									}else if(bullet.whoseBullet==2){
										var j=findBulletById(villainBullets,bullet.id);									
										villainBullets.splice(j,1);
										delete bullet.height;
										delete bullet.width;
									}
									break;
								}
							}	
						}
					}else if(map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)]==5){					
						//deleteElement(that.gameDiv,bullet.bulletDiv);
						bullet.bulletDelete=true;
					}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)])==2)&&(bullet.whoseBullet==2)){
						//deleteElement(that.gameDiv,bullet.bulletDiv);					
						//do nothing villain shooting villain
						bullet.bulletDelete=true;
					}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)])==1)&&(bullet.whoseBullet==1)){
						
						bullet.bulletDelete=true;
					}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)])==1)&&(bullet.whoseBullet==2)){
						that.gameDiv.removeChild(hero.heroDiv);	
						bullet.bulletDelete=true;		
						alert("Game Over!!Press Ok to play again");
						window.location.reload();			
					//do nothing villain shooting villain
					}else if((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)])==7){						
						bullet.bulletDelete=true;			
						//bullets can't penetrate tunnel
					}
					else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)])==8)){
					//deleteElement(that.gameDiv,bullet.bulletDiv);					
					//do nothing villain shooting villain
					alert("Game Over!!Press Ok to play again");
					window.location.reload();

				}

			}		
				
		};
		var turnRight=function (villainFlag,obj){
			if(!(villainFlag==11)){	
				if(!(heroDirection==2)){
						heroDirection=2;
						hero.height=40;
						hero.width=40;
						//hero.y=hero.y+13;	
						console.log(hero.x+'    '+hero.y);
						hero.heroDiv.style.background='url(../TankWars/images/tank-pointing-right.png) no-repeat';
					}
				hero.heroSetup();
			}
			else{
					var villain=obj;
					if(!(villain.villainDirection==2)){
						villain.villainDirection=2;
						villain.height=40;
						villain.width=40;
						villain.villainDiv.style.background='url(../TankWars/images/enemy-tank-pointing-right.png) no-repeat';
					}
					villain.villainSetup();
				}
							
		};
		var moveRight=function (numchk,obj){
			if(numchk==7){
				if(hero.x<(gameProps.width-hero.width)){
					if(map[Math.floor(hero.y/40)][Math.floor((hero.x+40)/40)]==0){

						var getX=(hero.x/40);
						var getY=(hero.y/40);

						map[getY][getX]=0;

						hero.x+=40;

						map[2][2]=7;
						map[8][9]=7;

						getX=(hero.x/40);
						getY=(hero.y/40);

						map[getY][getX]=1;
						hero.heroSetup();
					}else if(map[Math.floor(hero.y/40)][Math.floor((hero.x+40)/40)]==7){
						var getX=Math.floor((hero.x/40));
						var getY=Math.floor((hero.y/40));

						if(getY==8){
							map[getY][getX]=0;

							hero.y=80;
							hero.x=80;

							getX=(hero.x/40);
							getY=(hero.y/40);

							map[getY][getX]=1;
						}else if(getY==2){
							map[getY][getX]=0;

							hero.y=320;
							hero.x=360;

							getX=(hero.x/40);
							getY=(hero.y/40);

							map[getY][getX]=1;
						}
						hero.heroSetup();
						console.log(map);
					}else if(map[Math.floor(hero.y/40)][Math.floor((hero.x+40)/40)]==0){
						alert("tank-tank collision");
						window.location.reload();
					}
				}
			}
			else if(numchk==11){
				if(fightmainvillainFlag){
					if(mainvillain.x<(gameProps.width-mainvillain.width)){
							mainvillain.x+=40;
							mainvillain.mainVillainSetup();							
					}	
				}else{
					var villain=obj;
					
					//villain's movement if not level-2
					if(villain.villainDirection==2){
							if(villain.x>0){

								if(map[Math.floor(villain.y/40)][Math.floor((villain.x+40)/40)]==0){
								console.log("moved right");
								var getX=(villain.x/40);
								var getY=(villain.y/40);

								map[getY][getX]=0;

								villain.x+=40;

								getX=(villain.x/40);
								getY=(villain.y/40);

								map[getY][getX]=2;
								villain.villainSetup();									
								}else if(map[Math.floor(villain.y/40)][Math.floor((villain.x+40)/40)]==1){
									alert("tank-tank collision");
									window.location.reload();
								}
							}		
						}
				}	
			}else if(numchk==5){
				var bullet=obj;
				// if((bullet.bulletX+bullet.width)==(bullet.width)||bullet.bulletX==(gameProps.width-bullet.width)){
				// 			deleteElement(that.gameDiv,bullet.bulletDiv);
				// 			delete bullet.height;
				// 			delete bullet.width;
				// 			delete bullet.bulletY;
				// 			delete bullet.bulletX;
				// 			//window.cancelAnimationFrame(myReq);
							
				// }

				if(map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)]==0){	//No need to add 40 to bulletX as its added while fixing height and width during rotation
					if(bullet.bulletDirection==2){
						bullet.bulletX+=40;
					}
				}else if(map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)]==6){					
					//deleteElement(that.gameDiv,bullet.bulletDiv);
					for(var i=0;i<walls.length;i++){	
						if((walls[i].y <= bullet.bulletY) && ((walls[i].y+walls[i].height) > bullet.bulletY)){
								if(((bullet.bulletX+bullet.width) >= (walls[i].x))&&(bullet.bulletX<=walls[i].x)){
							
									that.gameDiv.removeChild(walls[i].wallDiv);
									map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)]=0;
									walls.splice(i,1);

									that.gameDiv.removeChild(bullet.bulletDiv);
									// delete bullet.height;
									// delete bullet.width;
									if(bullet.whoseBullet==1){
										var j=findBulletById(heroBullets,bullet.id);									
										heroBullets.splice(j,1);
										console.log(j);
										delete bullet.height;
										delete bullet.width;
									}else if(bullet.whoseBullet==2){
										var j=findBulletById(villainBullets,bullet.id);									
										villainBullets.splice(j,1);
										console.log(j);
										delete bullet.height;
										delete bullet.width;
									}
										break;
										
								}
						}	
					}
					//bullet.bulletDelete=true;
				}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==2)&&(bullet.whoseBullet==1)){
					//deleteElement(that.gameDiv,bullet.bulletDiv);
					for(var i=0;i<villains.length;i++){	
						if(((villains[i].x+villains[i].width)>=(bullet.bulletX+bullet.width))&&(bullet.bulletX>=villains[i].x)){
							if(((bullet.bulletY+bullet.height)<=villains[i].y)||((villains[i].y+villains[i].height)>=bullet.bulletY)){
								//deleteElement(that.gameDiv,villains[i].wallDiv);
								that.gameDiv.removeChild(villains[i].villainDiv);
								//villains[i].wallDiv.parentNode.removeChild(villains[i].wallDiv);
								//alert("villain collision");
								// delete villains[i].height;
								map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]=0;
								villains.splice(i,1);
								villaincount--;

								villainkills++;

								that.gameDiv.removeChild(bullet.bulletDiv);
								//deleteElement(that.gameDiv,bullet.bulletDiv);
								// delete bullet.height;
								// delete bullet.width;
								if(bullet.whoseBullet==1){
									var j=findBulletById(heroBullets,bullet.id);									
									heroBullets.splice(j,1);
									delete bullet.height;
									delete bullet.width;
								}else if(bullet.whoseBullet==2){
									var j=findBulletById(villainBullets,bullet.id);									
									villainBullets.splice(j,1);
									delete bullet.height;
									delete bullet.width;
								}
								break;
									
							}
						}	
					}
					
					bullet.bulletDelete=true;
				}else if(map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)]==5){					
					//deleteElement(that.gameDiv,bullet.bulletDiv);
					bullet.bulletDelete=true;

				}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==2)&&(bullet.whoseBullet==2)){
					//deleteElement(that.gameDiv,bullet.bulletDiv);					
					//do nothing villain shooting villain
					bullet.bulletDelete=true;
				}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==1)&&(bullet.whoseBullet==1)){
					bullet.bulletDelete=true;
				}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==1)&&(bullet.whoseBullet==2)){
						
						that.gameDiv.removeChild(hero.heroDiv);	
						bullet.bulletDelete=true;		
						alert("Game Over!!Press Ok to play again");
						window.location.reload();		
					//do nothing villain shooting villain
				}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==8)){
					//deleteElement(that.gameDiv,bullet.bulletDiv);					
					//do nothing villain shooting villain
					alert("Game Over!!Press Ok to play again");
					window.location.reload();

				}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==7)){
					bullet.bulletDelete=true;

				}

			}	
					
		};

		var fireBullet=function(obj){
			if(heroFired){
				if(bulletFlag==0){
					console.log("A pressed to shoot a bullet");
					var bullet=new Bullet();				
					bullet.bulletDirection=heroDirection;
					var x=0;
					var y=0;

					bullet.whoseBullet=1;

					var getvalues=function(){
						if(heroDirection==1){
							y=hero.y;
							x=(hero.x+hero.width/2);	
							//x=(hero.x+(hero.width/2));	
						}else if(heroDirection==2){
							y=hero.y+hero.height/2;	
							x=(hero.x+hero.width);
						}else if(heroDirection==3){
							y=hero.y+hero.height;
							x=(hero.x+hero.width/2);	
							//x=(hero.x+(hero.width/2));
						}else if(heroDirection==4){
							y=hero.y+hero.height/2;
							x=hero.x;
						}
					}();					

					bullet.createBullet(x,y);

					var k=GenerateBulletId(bullet.whoseBullet);
					bullet.id=k;

					that.gameDiv.appendChild(bullet.bulletDiv);

					heroBullets.push(bullet);

					var render=function(){													

						// for(var i=0;i<heroBullets.length;i++){	
						// 	var bullet=heroBullets[i];
							//index=i;
								if(bullet.bulletY<=0 || (bullet.bulletY>=(gameProps.height-bullet.height)) || (bullet.bulletDelete)){
									that.gameDiv.removeChild(bullet.bulletDiv);
									var j=findBulletById(heroBullets,bullet.id);									
									heroBullets.splice(j,1);
									delete bullet.height;
									delete bullet.width;
									delete bullet.bulletX;
									delete bullet.bulletY;
								//clearInterval(movebullet);

							}else if(bullet.bulletX<=0 || (bullet.bulletX>=(gameProps.width-bullet.width))||(bullet.bulletDelete)){
								that.gameDiv.removeChild(bullet.bulletDiv);
								var j=findBulletById(heroBullets,bullet.id);									
								heroBullets.splice(j,1);
								delete bullet.height;
								delete bullet.width;
								delete bullet.bulletX;
								delete bullet.bulletY;
								//clearInterval(movebullet);
							}else{
								moveBullets(bullet.bulletDirection,bullet);
							}
					
							bullet.bulletDiv.style.left=bullet.bulletX+'px';	
							bullet.bulletDiv.style.top=bullet.bulletY+'px';

							
							
							// requestAnimationFrame(render);
						//}	

					};

					// window.requestAnimFrame = (function(){
					//   		return  window.requestAnimationFrame       ||
					//           window.webkitRequestAnimationFrame ||
					//           window.mozRequestAnimationFrame    ||
					//           function( callback ){
					//             window.setTimeout(callback, 1000 / 50);
					//           };
					// })();

					

					//var myReq=window.requestAnimationFrame(render);

					var movebullet=setInterval(render,100);

					bulletFlag=1;
					}

				}else if(mainvillainFired){
					var bullet=new Bullet();				
					bullet.bulletDirection=heroDirection;
					var x=0;
					var y=0;

					bullet.whoseBullet=3;

					var setmainvillainBullet=function(){
						x=mainvillain.x+95;
						y=mainvillain.height;						
					}();

					bullet.createBullet(x,y);
					var k=GenerateBulletId(bullet.whoseBullet);
					bullet.id=k;
						
					that.gameDiv.appendChild(bullet.bulletDiv);
					villainBullets.push(bullet);

					var render=function(){
						//bullet.shootBullet(3);	
						// for(var i=0;i<villainBullets.length;i++){	
						// 	var bullet=villainBullets[i];

						// 	index=i;
							moveBullets(bullet.bulletDirection,bullet);

							
							if((bullet.bulletY+bullet.height)==(bullet.height)||(bullet.bulletY==(gameProps.height-bullet.height))||(bullet.bulletDelete)){
								that.gameDiv.removeChild(bullet.bulletDiv);
								var j=findBulletById(villainBullets,bullet.id);									
								villainBullets.splice(j,1);
								delete bullet.height;
								delete bullet.width;
								//break;
							}else if((bullet.bulletX+bullet.width)==(bullet.width)||(bullet.bulletX==(gameProps.width-bullet.width))||(bullet.bulletDelete)){
								that.gameDiv.removeChild(bullet.bulletDiv);
								var j=findBulletById(villainBullets,bullet.id);									
								villainBullets.splice(j,1);
								delete bullet.height;
								delete bullet.width;
								//break;
							}	
							bullet.bulletDiv.style.left=bullet.bulletX+'px';	
							bullet.bulletDiv.style.top=bullet.bulletY+'px';
						//}	

					};

					var movebullet=setInterval(render,50);

				}
				else if(villainFired){
					var villain=obj;
					var bullet=new Bullet();				
					bullet.bulletDirection=villain.villainDirection;
					var x=0;
					var y=0;

					bullet.whoseBullet=2;
					
					var getvalues=function(){
						if(villain.villainDirection==1){
							y=villain.y;
							x=(villain.x+villain.width/2);	
						}else if(villain.villainDirection==2){
							y=villain.y+villain.height/2;	
							x=(villain.x+villain.height);
						}else if(villain.villainDirection==3){
							y=villain.y+hero.height;
							x=(villain.x+villain.width/2);	
						}else if(villain.villainDirection==4){
							y=villain.y+villain.height/2;
							x=villain.x;
						}
					}();

					bullet.createBullet(x,y);

					var k=GenerateBulletId(bullet.whoseBullet);
					bullet.id=k;
						
					that.gameDiv.appendChild(bullet.bulletDiv);
					villainBullets.push(bullet);

					var render=function(){
						//bullet.shootBullet(3);
						// for(var i=0;i<villainBullets.length;i++){	
						// 	var bullet=villainBullets[i];

							moveBullets(bullet.bulletDirection,bullet);

							if((bullet.bulletY+bullet.height)==(bullet.height)||(bullet.bulletY==(gameProps.height-bullet.height))||(bullet.bulletDelete)){
								that.gameDiv.removeChild(bullet.bulletDiv);
								var j=findBulletById(villainBullets,bullet.id);									
								villainBullets.splice(j,1);
								delete bullet.height;
								delete bullet.width;
								//break;
							}else if((bullet.bulletX+bullet.width)==(bullet.width)||(bullet.bulletX==(gameProps.width-bullet.width))||(bullet.bulletDelete)){
								that.gameDiv.removeChild(bullet.bulletDiv);
								var j=findBulletById(villainBullets,bullet.id);									
								villainBullets.splice(j,1);
								delete bullet.height;
								delete bullet.width;
								//break;
							}	
							bullet.bulletDiv.style.left=bullet.bulletX+'px';	
							bullet.bulletDiv.style.top=bullet.bulletY+'px';
						//}	
					};
					var movebullet=setInterval(render,50);	
				}	
		};

		var keytracker=[];
		keytracker[37]=false;
		keytracker[38]=false;
		keytracker[39]=false;		
		keytracker[40]=false;
		keytracker[65]=false;	

		window.onkeydown=function(event){	
		if(gameStart==false){
			if(event.which==13||event.which==32){
				gameStart=true;
				GameStarter();
			}
		}else{
				keytracker[event.which]=true;
				performkeyAction();
			}		
			
		}
		
		function performkeyAction(){	
			console.log(keytracker.length);
			console.log(keytracker[65]+"--------"+keytracker[37]);
			if(keytracker[40]&&keytracker[65]){
				if(!fightmainvillainFlag){
						if(!(heroDirection==3)){
						console.log("down key and bullet");
						turnDown(7,hero);
						heroFired=true;
						fireBullet();
					}
					else{
						moveDown(7,hero);
						fireBullet();
					}			
				}
			}	
			else if(keytracker[37]&&keytracker[65]){
					if(fightmainvillainFlag){
						console.log("4444444444444");
						moveLeft(7,hero);
						heroFired=true;
						fireBullet();							
					}
					else{
						if(!(heroDirection==4)){							
							console.log("left turn and bullet");
							turnLeft(7,hero);
							heroFired=true;
							fireBullet();
						}
						else{						
							console.log("moving left and bullet");
							moveLeft(7,hero);
							heroFired=true;
							fireBullet();
						}
					}					
				
			}
			else if(keytracker[39]&&keytracker[65]){
				if(fightmainvillainFlag){
					console.log("222222222222");
					moveRight(7,hero);
					heroFired=true;
					fireBullet();
				}
				else{	
					if(!(heroDirection==2)){
						if((!keytracker[65])||(!keytracker[39])){
								performkeyAction();
						}
						console.log("right turn and bullet");
						turnRight(7,hero);
						heroFired=true;
						fireBullet();
					}
					else{
						if((!keytracker[65])||(!keytracker[39])){
								performkeyAction();
						}
						console.log("moving right and bullet");
						moveRight(7,hero);
						heroFired=true;
						fireBullet();
					}
				}	
			}
			else if(keytracker[38]&&keytracker[65]){
				if(!fightmainvillainFlag){
					if(!(heroDirection==1)){
						console.log("up turn and bullet");
						turnUp(7,hero);
						heroFired=true;
						fireBullet();
					}else{
						console.log("moving up and bullet");
						moveUp(7,hero);
						heroFired=true;
						fireBullet();
					}
				}
			}
			else if(keytracker[38]){
				if(!fightmainvillainFlag){
					if(!(heroDirection==1)){
						console.log("up turn");
						turnUp(7,hero);
					}else{						
							moveUp(7,hero);							
						}	
					
				}	
			}
			else if(keytracker[39]){
				if(fightmainvillainFlag){
					moveRight(7,hero);
					console.log("22");
				}
				else{	
					if(!(heroDirection==2)){
						console.log("right turn");
						turnRight(7,hero);
					}else{
						moveRight(7,hero);
					}
				}	
			}
			else if(keytracker[37]){
				if(fightmainvillainFlag){
					moveLeft(7,hero);
					console.log("44");
				}
				else{
					if(!(heroDirection==4)){
						console.log("left turn");
						turnLeft(7,hero);
					}else{
						moveLeft(7,hero);
					}
				}	
			}
			else if(keytracker[40]){
				if(!fightmainvillainFlag){
					if(!(heroDirection==3)){
						console.log("down turn");
						turnDown(7,hero);
					}else{
						moveDown(7,hero);
					}
				}	
			}
			else if(keytracker[65]){
				heroFired=true;
				fireBullet();
				console.log("firing bullets");
			}

			
		};
		window.onkeyup=function(event){
			if(event.which==37){
				//keytracker.splice(37,1);
				console.log("left key unpressed");
				//performkeyAction();
				//keytracker[37]=false;
				keytracker=[];
			}
			else if(event.which==38){
				keytracker.splice(38,1);
				//keytracker[38]=false;
				console.log("up key unpressed");
				//performkeyAction();
				keytracker=[];
			}
			else if(event.which==39){
				keytracker.splice(39,1);
				//keytracker[39]=false;
				console.log("right key unpressed");
				//performkeyAction();
				keytracker=[];
			}
			else if(event.which==40){
				keytracker.splice(40,1);
				//keytracker[40]=false;
				console.log("down key unpressed");
				//performkeyAction();
				keytracker=[];
			}			
			else if(event.which==65){
				//keytracker.splice(65,1);
				console.log("fire key unpressed");
				keytracker[65]=false;
				bulletFlag=0;
				heroFired=false;
				performkeyAction();
				//keytracker=[];	
				keytracker=[];	
			}

		};


		
		//var gameinterval=setInterval(gameLoop,interval);
		gameSetup();

		function GameStarter(){
			if(reachLevel2==1){			
				fightmainvillainFlag=true;			
				clearDiv(that.gameDiv);	//Clears the div for next level
				gameLoop();			
			}
			else{
				
				console.log(gameStart);
				if(gameStart){
					var gameinterval=setInterval(gameLoop,interval);
				}

								
		     }	
		};
		
		// window.onerror = function(){
		//    return true;
		// };
	};

	window.Gameplay=Gameplay;
	window.GameStart=GameStart;

})();