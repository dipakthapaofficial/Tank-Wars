;(function(){
	'use strict';



	function Background(){
		this.element = document.createElement('div');
		this.element.style.width = '800px';
		this.element.style.height = '800px';
		this.element.style.background ='url(../images/background-tank-game.png) repeat';

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

		//this.heroDiv.style.background='url(../images/tank-spritesheet.png) no-repeat';
		this.heroDiv.style.background='url(../images/tank-pointing-up.png) no-repeat';
		this.heroDiv.style.position='absolute';
		this.heroDiv.setAttribute("id","heroid");
		

		// var sprite../images=new spriteSheet();
		// var spriteCoordinates = sprite../images.getSpriteCoordinates();
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

		this.villainDiv.style.background='url(../images/enemy-tank-pointing-up.png) no-repeat';
		this.villainDiv.style.position='absolute';		
		this.villainDiv.setAttribute("id","villainid");
		
		

			//-ms-transform: rotate(90deg); /* IE 9 */
    		//-webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
    		//this.heroDiv.style.transform='rotate(90deg)';

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
		this.height=300;
		this.width=200;
		this.mainvillainDirection=0;

		this.x=0;
		this.y=0;

		this.mainVillainDiv.style.background='red';
		this.mainVillainDiv.style.position='absolute';		
		this.mainVillainDiv.setAttribute("id","mainvillain");
		
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
		this.width=200;			//Shield's width is equal to width of gameprops to prevent the bullet hitting main villain
		this.mainvillainDirection=0;

		this.x=0;
		this.y=0;

		this.shieldDiv.style.background='url(../images/shield.png) repeat-x';
		this.shieldDiv.style.position='absolute';		
		this.shieldDiv.setAttribute("id","shieldid");
		
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
		this.bulletDiv=document.createElement('div');
			// var bulletY=hero.y;
			// var bulletX=(hero.x+(hero.width/2));
		this.createBullet=function(x,y){
			this.bulletY=y;
			this.bulletX=x;

			this.bulletDiv.setAttribute("id", "bulletid");
			that.bulletDiv.style.width=that.width+'px';
			that.bulletDiv.style.height=that.height+'px';
			//that.bulletDiv.style.radius='10px';
			that.bulletDiv.style.background='url(../images/bullet.png) no-repeat';
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
	function deleteElement(parent1,child1){
	 	var parent2=parent1;
	 	var child2=child1;
	 	parent2.removeChild(child2);
	
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

		this.suicideDiv.style.background='url(../images/enemy-tank-pointing-up.png) no-repeat';
		this.suicideDiv.style.position='absolute';		
		this.suicideDiv.setAttribute("id","suicideid");

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

		this.wallDiv.style.background='url(../images/wall.gif) repeat';
		this.wallDiv.style.position='absolute';		
		this.wallDiv.setAttribute("id","wallid");
		
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

		this.steelDiv.style.background='url(../images/shield.png) repeat';
		this.steelDiv.style.position='absolute';		
		this.steelDiv.setAttribute("id","steelid");
		
		var that=this;

		this.steelSetup=function(){
			that.steelDiv.style.left=that.x+'px';
			that.steelDiv.style.top=that.y+'px';			

			that.steelDiv.style.width = that.width + 'px';
			that.steelDiv.style.height = that.height + 'px';

		};

	 };

	   function wormHole(){
	 	this.wormHoleDiv=document.createElement('div');
		this.height=40;
		this.width=40;	

		this.x=0;
		this.y=0;

		this.wormHoleDiv.style.background='url(../images/shield.png) repeat';
		this.wormHoleDiv.style.position='absolute';		
		this.wormHoleDiv.setAttribute("id","wormHoleid");
		this.wormHoleDiv.innerHTML="wormhole";
		
		var that=this;

		this.wormHoleSetup=function(){
			that.wormHoleDiv.style.left=that.x+'px';
			that.wormHoleDiv.style.top=that.y+'px';			

			that.wormHoleDiv.style.width = that.width + 'px';
			that.wormHoleDiv.style.height = that.height + 'px';

		};

	 };
	 function Award(){
	 	this.awardDiv=document.createElement('div');
		this.height=40;
		this.width=40;	

		this.x=0;
		this.y=0;

		this.awardDiv.style.background='url(../images/award1.png) no-repeat';
		this.awardDiv.style.position='absolute';		
		this.awardDiv.setAttribute("id","awardid");
		
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
		this.getDiv=getDiv_;
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
				[0 ,0 ,0 , 0, 6, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
				[0 ,5 ,6 , 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0 ,6 ,7 , 6, 5, 0, 0, 6, 5, 0, 0, 5, 0, 0, 5],
				[0 ,6 ,5 , 6, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
				[0 ,6 ,0 , 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0],
				[0, 0 ,6 , 0, 0, 0, 5, 0, 0, 0, 0, 6, 0, 0, 0],
				[0 ,0 ,0 , 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[6 ,6 ,6 , 5, 0, 0, 0, 6, 5, 6, 6, 0, 0, 0, 5],
				[0 ,0 ,6 , 0, 0, 0, 0, 0, 0, 7, 6, 0, 0, 6, 0],
				[6 ,0 ,0 , 0, 6, 0, 0, 0, 6, 5, 6, 0, 0, 0, 0],
				[0 ,5 ,6 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 0],
				[0 ,0 ,0 , 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 6],
				[5 ,0 ,6 , 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 5],
				[0 ,6 ,0 , 0, 0, 0, 6, 6, 6, 0, 0, 5, 6, 0, 0],
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
				var rand=(Math.floor(Math.random()*2+1))%2;
				if(rand==0){
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
				
				detectBombBlasts();				
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
			that.getDiv.appendChild(wall.wallDiv);

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
			that.getDiv.appendChild(steel.steelDiv);

			notallowedtoMove.push(steel);

			function renderSteel(){
				steel.x = x*40;
				steel.y = y*40;
							
			};	

			renderSteel();
			steel.steelSetup();
		};
		function createwormHole(x,y){

			var wormhole=new wormHole();		
			that.getDiv.appendChild(wormhole.wormHoleDiv);

			function renderwormhole(){
				wormhole.x = x*40;
				wormhole.y = y*40;
							
			};	

			renderwormhole();
			wormhole.wormHoleSetup();
		};
		function createaward(x,y){		

			var award=new Award();		
			that.getDiv.appendChild(award.awardDiv);
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
				that.getDiv.style.width=gameProps.width+'px';
				that.getDiv.style.height=gameProps.height+'px';
				that.getDiv.style.position='relative';
				that.getDiv.style.overflow='hidden';
			
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
							createwormHole(j,i);
						}

					}

				}
				that.getDiv.appendChild(background.element);
				that.getDiv.appendChild(hero.heroDiv);
			
		};

		function createmainVillain(){
			that.getDiv.appendChild(mainvillain.mainVillainDiv);
			function rendermainVillain(){
				mainvillain.y = 0;
				mainvillain.x =gameProps.width-mainvillain.width;				
			};	
			rendermainVillain();
		};

		function createVillain(){
			var villain=new Villain();

			villaincount++;	
			
			that.getDiv.appendChild(villain.villainDiv);

			var renderVillain=function(){
				if(hero.x>0 && !(hero.x==gameProps.width-hero.width)){
					if(map[0][7]==0){
						villain.x=280;
						// villain.y=-40;
						villain.y=0;
						villain.villainDirection=3;	
						villain.villainDiv.style.background='url(../images/enemy-tank-pointing-down.png) no-repeat';			
						console.log("1.1");
						map[0][7]=2;
					}
					else if(map[0][8]==0){
						villain.x=320;
						// villain.y=-40;
						villain.y=0;
						villain.villainDirection=3;	
						villain.villainDiv.style.background='url(../images/enemy-tank-pointing-down.png) no-repeat';			
						console.log("1.2");
						map[0][8]=2;
					}else if(map[0][6]==0){
						villain.x=240;
						//villain.y=-40;
						villain.y=0;
						villain.villainDirection=3;	
						villain.villainDiv.style.background='url(../images/enemy-tank-pointing-down.png) no-repeat';			
						console.log("1.3");
						map[0][6]=2;
					}else{
						//villain.x=-40;
						villain.x=0;
						villain.y=240;
						villain.villainDirection=2;	
						villain.villainDiv.style.background='url(../images/enemy-tank-pointing-right.png) no-repeat';			
						console.log("1.4");
						map[6][0]=2;
					}

				}	
				if(hero.x==0){
					var rand=Math.floor(Math.random()*2+1);
					if(rand==1){
						if(map[0][14]==0){
							//villain.x=gameProps.width;
							villain.x=gameProps.width-villain.width;
							villain.y=0;
							villain.villainDirection=4;	
							villain.villainDiv.style.background='url(../images/enemy-tank-pointing-left.png) no-repeat';			
							console.log("2.1");
							map[0][14]=2;
						}else if(map[8][14]==0){
							// villain.x=gameProps.width;
							villain.x=gameProps.width-villain.width;
							villain.y=320;
							villain.villainDirection=4;	
							villain.villainDiv.style.background='url(../images/enemy-tank-pointing-left.png) no-repeat';			
							console.log("2.2");
							map[8][14]=2;
						}else{
							// villain.x=-40;
							villain.x=0;
							villain.y=240;
							villain.villainDirection=2;	
							villain.villainDiv.style.background='url(../images/enemy-tank-pointing-right.png) no-repeat';			
							console.log("2.3");
							map[6][0]=2;
						}
					}else{
						if(map[8][14]==0){
							// villain.x=gameProps.width;
							villain.x=gameProps.width-villain.width;
							villain.y=320;
							villain.villainDirection=4;	
							villain.villainDiv.style.background='url(../images/enemy-tank-pointing-left.png) no-repeat';			
							console.log("2.2");
							map[8][14]=2;
						}else if(map[0][14]==0){
							//villain.x=gameProps.width;
							villain.x=gameProps.width-villain.width;
							villain.y=0;
							villain.villainDirection=4;	
							villain.villainDiv.style.background='url(../images/enemy-tank-pointing-left.png) no-repeat';			
							console.log("2.1");
							map[0][14]=2;
						}else{
							//villain.x=-40;
							villain.x=0;
							villain.y=240;
							villain.villainDirection=2;	
							villain.villainDiv.style.background='url(../images/enemy-tank-pointing-right.png) no-repeat';			
							console.log("2.3");
							map[6][0]=2;
						}
					}				
				}
				if(hero.x==gameProps.width-hero.width){
					var rand=Math.floor(Math.random()*2+1);
					if(rand==1){
						if(map[0][0]==0){
							//villain.x=-40;
							villain.x=0;
							villain.y=0;
							villain.villainDirection=2;	
							villain.villainDiv.style.background='url(../images/enemy-tank-pointing-right.png) no-repeat';			
							console.log("3.1");
							map[0][0]=2;
						}else if(map[8][0]==0){
							//villain.x=-40;
							villain.x=0;
							villain.y=320;
							villain.villainDirection=2;	
							villain.villainDiv.style.background='url(../images/enemy-tank-pointing-right.png) no-repeat';			
							console.log("3.2");
							map[0][8]=2;
						}else{
							//villain.x=-40;
							villain.x=0;
							villain.y=240;
							villain.villainDirection=2;	
							villain.villainDiv.style.background='url(../images/enemy-tank-pointing-right.png) no-repeat';			
							console.log("3.3");
							map[6][0]=2;
						}
					}else{
						if(map[0][8]==0){
							//villain.x=-40;
							villain.x=0;
							villain.y=320;
							villain.villainDirection=4;	
							villain.villainDiv.style.background='url(../images/enemy-tank-pointing-left.png) no-repeat';			
							console.log("2.2");
							map[0][8]=2;
						}else if(map[0][0]==0){
							// villain.x=-40;
							villain.x=0;
							villain.y=0;
							villain.villainDirection=4;	
							villain.villainDiv.style.background='url(../images/enemy-tank-pointing-left.png) no-repeat';			
							console.log("2.1");
							map[0][0]=2;
						}else{
							// villain.x=-40;
							villain.x=0;
							villain.y=240;
							villain.villainDirection=2;	
							villain.villainDiv.style.background='url(../images/enemy-tank-pointing-right.png) no-repeat';			
							console.log("2.3");
							map[6][0]=2;
						}
					}
				}
				
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
			
			that.getDiv.appendChild(suicide.suicideDiv);

						

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

			var suicideAttack=function(){
					
					var obj=suicidialtanks[0];
					obj.move(hero.x,hero.y,1);

					obj=suicidialtanks[1];
					obj.move(hero.x,hero.y,2);

					suicide.suicideSetup();	
					if(suicidialtanks.length==0){
						clearInterval(attacktiming);
					}
				
			};		
	

			suicidialtanks.push(suicide);						
			renderSuicide();
			suicide.suicideSetup();	

			var attacktiming=setInterval(suicideAttack,200);	

		};

		var SuicideTankMove=function(posX,posY,tankNo){				

			var diffX=posX-that.x;

			console.log("moving suicidialtanks");

			if(tankNo==1&&(!(that.y>540||that.y<0)&&!(that.x>540||that.x<0))){
				if(diffX==0){
					
					that.y+=10;
				}
				else if(diffX>0){
					that.x+=10;
				}
				else if(diffX<0){
					that.x-=10;
				}
			}
			else if(tankNo==2){
				if(diffX==0){
					that.y+=10;
				}
				else if(diffX>0){
					that.y+=10;
					if((that.y-posY)==0){
						that.x+=10;	
					}
				}
				else if(diffX<0){
					that.y+=10;
					if((that.y-posY)==0){
						that.x-=10;	
					}
					
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
				moveRight(11,obj);
				villainFired=true;
				fireBullet(villain);
			}
			if ((random >= 1) && random < 2) {
				turnLeft(11,villain);
				moveLeft(11,obj);
				fireBullet(villain);
			}
			if ((random >= 2) && random < 3) {
				turnUp(11,villain);
				moveUp(11,obj);
				fireBullet(villain);
			}
			if ((random >= 3) && random < 4) {
				turnDown(11,villain);
				moveDown(11,obj);
				fireBullet(villain);
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
		var villainkills=5;

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

					// 	var suicideAttack=function(){
								

					// 		for(var i=0;i<suicidialtanks.length;i++){
					// 			var obj=suicidialtanks[i];

					// 			obj.move(hero.x,hero.y,i);

					// 			obj.suicideSetup();



					// 			if(suicidialtanks.length==0){
					// 				clearInterval(attacktiming);
					// 			}
					// 		}

					// 	};

					// 	suicidetankFlag=false;
					// 	var attacktiming=setInterval(suicideAttack,50);	


					//  }


					// for (var i=0; i<villains.length; i++){
					// 	var villain = villains[i];
					// 	villain.villainSetup();					
					// }
					
					
				}

					

				detectBombBlasts();
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


		// var collisionDetection = function(obj1, obj2) {
		// 	if(((obj2.x+obj2.width)>=(obj1.x+obj1.width))&&(obj1.x>=obj2.x)){
		// 		if(((obj1.y+obj1.height)<=obj2.y)||((obj2.y+obj2.height)>=obj1.y)){	
		// 			console.log("true");
		// 			return true;
		// 		}else {
		// 			return false;
		// 		}
		// 	}
		// };
		
		var detectBombBlasts=function(){
			
			for(var i=0;i<villainBullets.length;i++){

			}


		}	


			
		 //1-up 2-right 3-down 4-left

		var turnUp=function(villainFlag,obj){
			if(!(villainFlag==11)){
				if(!(heroDirection==1)){					
					heroDirection=1;
					hero.height=40;
					hero.width=40;
					console.log(hero.x+'    '+hero.y);
					hero.heroDiv.style.background='url(../images/tank-pointing-up.png) no-repeat';
				}
				hero.heroSetup();
				fixHeightWidth(1);
			}
			else{
					var villain=obj;

					if(!(villain.villainDirection==1)){
						villain.villainDirection=1;
						villain.height=40;
						villain.width=40;
						villain.villainDiv.style.background='url(../images/enemy-tank-pointing-up.png) no-repeat';
					}
						villain.villainSetup();
						fixHeightWidth();
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

						getX=(hero.x/40);
						getY=(hero.y/40);

						map[getY][getX]=1;
						hero.heroSetup();
					}else if(map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]==7){
						var getX=Math.floor((hero.x/40));
						var getY=Math.floor((hero.y/40));

						map[getY][getX]=0;


						hero.y=80;
						hero.x=80;

						getX=(hero.x/40);
						getY=(hero.y/40);

						map[getY][getX]=1;
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
					console.log(Math.floor((villain.y-40)/40));
					if(villain.x>0){
						if(map[Math.floor((villain.y-40)/40)][Math.floor((villain.x)/40)]==0){
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

				// if((bullet.bulletY+bullet.height)==(bullet.height)||bullet.bulletY==(gameProps.height-bullet.height)){
				// 			deleteElement(that.getDiv,bullet.bulletDiv);
				// 			delete bullet.height;
				// 			delete bullet.width;
				// 			delete bullet.bulletY;
				// 			delete bullet.bulletX;
				// 			//window.cancelAnimationFrame(myReq);
							
				// }

				if(map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]==0){
					if(bullet.bulletDirection==1){
						bullet.bulletY-=40;
					}
				}else if(map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]==6){					
					//deleteElement(that.getDiv,bullet.bulletDiv);

					for(var i=0;i<walls.length;i++){	

						if(((walls[i].x+walls[i].width)>=(bullet.bulletX+bullet.width))&&(bullet.bulletX>=walls[i].x)){
							if(((bullet.bulletY+bullet.height)<=walls[i].y)||((walls[i].y+walls[i].height)>=bullet.bulletY)){
								deleteElement(that.getDiv,walls[i].wallDiv);
								map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]=0;
								walls.splice(i,1);
								deleteElement(that.getDiv,bullet.bulletDiv);
								delete bullet.height;
								delete bullet.width;
								delete bullet.bulletY;
								delete bullet.bulletX;
								break;
								
							}
						}		
					}
					

				}else if(((map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)])==2)&&(bullet.whoseBullet==1)){
					//deleteElement(that.getDiv,bullet.bulletDiv);	
					for(var i=0;i<villains.length;i++){	

							if(((villains[i].x+villains[i].width)>=(bullet.bulletX+bullet.width))&&(bullet.bulletX>=villains[i].x)){
								if(((bullet.bulletY+bullet.height)<=villains[i].y)||((villains[i].y+villains[i].height)>=bullet.bulletY)){
									//deleteElement(that.getDiv,villains[i].wallDiv);
									that.getDiv.removeChild(villains[i].villainDiv);
									//villains[i].wallDiv.parentNode.removeChild(villains[i].wallDiv);
									//alert("villain collision");
									delete villains[i].height;
									map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]=0;
									villains.splice(i,1);
									that.getDiv.removeChild(bullet.bulletDiv);
									//deleteElement(that.getDiv,bullet.bulletDiv);
									delete bullet.height;
									delete bullet.width;;
									break;
									
								}
						}	
					}	
					bullet.bulletDelete=true;			
					//deletevillain
				}else if(map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]==5){					
					//deleteElement(that.getDiv,bullet.bulletDiv);
					bullet.bulletDelete=true;
				}else if(((map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)])==2)&&(bullet.whoseBullet==2)){
					//deleteElement(that.getDiv,bullet.bulletDiv);	
					bullet.bulletDelete=true;				
					//do nothing villain shooting villain
				}else if(((map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)])==1)&&(bullet.whoseBullet==2)){
					deleteElement(that.getDiv,hero.heroDiv);	
						bullet.bulletDelete=true;	
						alert("Game Over!!Press Ok to play again");
						window.location.reload();				
					//do nothing villain shooting villain
				}

				else if(((map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)])==8)){
					//deleteElement(that.getDiv,bullet.bulletDiv);					
					//do nothing villain shooting villain
					alert("Game Over!!Press Ok to play again");
					window.location.reload();

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
						hero.heroDiv.style.background='url(../images/tank-pointing-down.png) no-repeat';
					}
					hero.heroSetup();
					fixHeightWidth(1);
				}
				else{
					var villain=obj;
					if(!(villain.villainDirection==3)){
							console.log("hello");
							villain.villainDirection=3;
							villain.height=40;
							villain.width=40;
							villain.villainDiv.style.background='url(../images/enemy-tank-pointing-down.png) no-repeat';
						}
						villain.villainSetup();
						fixHeightWidth();
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

						getX=(hero.x/40);
						getY=(hero.y/40);

						map[getY][getX]=1;


						hero.heroSetup();			
							
					}else if((map[Math.floor((hero.y+40)/40)][Math.floor((hero.x)/40)])==7){
						var getX=Math.floor((hero.x/40));
						var getY=Math.floor((hero.y/40));

						map[getY][getX]=0;


						hero.y=80;
						hero.x=80;

						getX=(hero.x/40);
						getY=(hero.y/40);

						map[getY][getX]=1;
						hero.heroSetup();
					}else if(map[Math.floor((hero.y+40)/40)][Math.floor((hero.x)/40)]==2){
						alert("Tank-Tank collision");
						window.location.reload();
					}
				}
			}
			else if(numchk==11){
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

				// if((bullet.bulletY+bullet.height)==(bullet.height)||bullet.bulletY==(gameProps.height-bullet.height)){
				// 			deleteElement(that.getDiv,bullet.bulletDiv);
				// 			delete bullet.height;
				// 			delete bullet.width;
				// 			delete bullet.bulletY;
				// 			delete bullet.bulletX;
				// 			//window.cancelAnimationFrame(myReq);
							
				// }

				
				console.log((bullet.bulletY+40)/40,"  ",bullet.bulletY);
				//console.log(map[Math.floor((bullet.bulletY+40)/40)][Math.floor((bullet.bulletX)/40)]);

				if(map[Math.floor((bullet.bulletY+40)/40)][Math.floor((bullet.bulletX)/40)]==0){
					if(bullet.bulletDirection==3){
						bullet.bulletY+=40;

						console.log(map[Math.floor((bullet.bulletY+40)/40)][Math.floor((bullet.bulletX)/40)]);
					}
				}else if(map[Math.floor((bullet.bulletY+40)/40)][Math.floor((bullet.bulletX)/40)]==6){					
					//	deleteElement(that.getDiv,bullet.bulletDiv);
					for(var i=0;i<walls.length;i++){	

						if(((walls[i].x+walls[i].width)>=(bullet.bulletX+bullet.width))&&(bullet.bulletX>=walls[i].x)){
							if(((bullet.bulletY+bullet.height)<=walls[i].y)||((walls[i].y+walls[i].height)>=bullet.bulletY)){
								deleteElement(that.getDiv,walls[i].wallDiv);
								map[Math.floor((bullet.bulletY+40)/40)][Math.floor((bullet.bulletX)/40)]=0;
								walls.splice(i,1);
								deleteElement(that.getDiv,bullet.bulletDiv);
								delete bullet.height;
								delete bullet.width;
								break;
								
							}
						}	
					}
					//bullet.bulletDelete=true;

				}else if(((map[Math.floor((bullet.bulletY+40)/40)][Math.floor((bullet.bulletX)/40)])==2)&&(bullet.whoseBullet==1)){
					//deleteElement(that.getDiv,bullet.bulletDiv);					
					//deletevillain
					for(var i=0;i<villains.length;i++){	

						if(((villains[i].x+villains[i].width)>=(bullet.bulletX+bullet.width))&&(bullet.bulletX>=villains[i].x)){
							if(((bullet.bulletY+bullet.height)==(villains[i].y+villains[i].height))&&(villains[i].y<bullet.bulletY)){
								//deleteElement(that.getDiv,villains[i].wallDiv);
								that.getDiv.removeChild(villains[i].villainDiv);
								//villains[i].wallDiv.parentNode.removeChild(villains[i].wallDiv);
								//alert("villain collision");
								//delete villains[i].height;
								map[Math.floor((bullet.bulletY+40)/40)][Math.floor((bullet.bulletX)/40)]=0;
								villains.splice(i,1);
								that.getDiv.removeChild(bullet.bulletDiv);
								//deleteElement(that.getDiv,bullet.bulletDiv);
								delete bullet.height;
								delete bullet.width;;
								break;
									
							}
						}	
					}
					bullet.bulletDelete=true;
				}else if(map[Math.floor((bullet.bulletY+40)/40)][Math.floor((bullet.bulletX)/40)]==5){					
					//deleteElement(that.getDiv,bullet.bulletDiv);
					bullet.bulletDelete=true;

				}else if(((map[Math.floor((bullet.bulletY+40)/40)][Math.floor((bullet.bulletX)/40)])==2)&&(bullet.whoseBullet==2)){
					//deleteElement(that.getDiv,bullet.bulletDiv);					
					bullet.bulletDelete=true;
					//do nothing villain shooting villain
				}else if(((map[Math.floor((bullet.bulletY+40)/40)][Math.floor((bullet.bulletX)/40)])==1)&&(bullet.whoseBullet==2)){
					deleteElement(that.getDiv,hero.heroDiv);	
						bullet.bulletDelete=true;		
						alert("Game Over!!Press Ok to play again");
						window.location.reload();			
					//do nothing villain shooting villain
				}else if(((map[Math.floor((bullet.bulletY+40)/40)][Math.floor((bullet.bulletX)/40)])==8)){
					//deleteElement(that.getDiv,bullet.bulletDiv);					
					//do nothing villain shooting villain
					alert("Game Over!!Press Ok to play again");
					window.location.reload();

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
						hero.heroDiv.style.background='url(../images/tank-pointing-left.png) no-repeat';
					}
					hero.heroSetup();
					fixHeightWidth(1);
			}
			else{	
					var villain=obj;
					if(!(villain.villainDirection==4)){
						villain.villainDirection=4;
						villain.height=40;
						villain.width=40;
						villain.villainDiv.style.background='url(../images/enemy-tank-pointing-left.png) no-repeat';
					}				
					villain.villainSetup();
					fixHeightWidth();
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

						getX=(hero.x/40);
						getY=(hero.y/40);

						map[getY][getX]=1;
						hero.heroSetup();
									
					}else if(map[Math.floor(hero.y/40)][Math.floor((hero.x-40)/40)]==7){
						var getX=Math.floor((hero.x/40));
						var getY=Math.floor((hero.y/40));

						map[getY][getX]=0;


						hero.y=80;
						hero.x=80;

						getX=(hero.x/40);
						getY=(hero.y/40);

						map[getY][getX]=1;
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
				// 			deleteElement(that.getDiv,bullet.bulletDiv);
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
						//deleteElement(that.getDiv,bullet.bulletDiv);
						for(var i=0;i<walls.length;i++){	

							if(((walls[i].x+walls[i].width)>=(bullet.bulletX+bullet.width))&&(bullet.bulletX>=walls[i].x)){
								if(((bullet.bulletY+bullet.height)<=walls[i].y)||((walls[i].y+walls[i].height)>=bullet.bulletY)){
									deleteElement(that.getDiv,walls[i].wallDiv);
									map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)]=0;
									walls.splice(i,1);
									deleteElement(that.getDiv,bullet.bulletDiv);
									delete bullet.height;
									delete bullet.width;
									break;
									
								}
							}	
						}	

						//bullet.bulletDelete=true;
					}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)])==2)&&(bullet.whoseBullet==1)){
						//deleteElement(that.getDiv,bullet.bulletDiv);					
						//deletevillain
						for(var i=0;i<villains.length;i++){	

							if(((villains[i].x+villains[i].width)>=(bullet.bulletX+bullet.width))&&(bullet.bulletX>=villains[i].x)){
								if(((bullet.bulletY+bullet.height)<=villains[i].y)||((villains[i].y+villains[i].height)>=bullet.bulletY)){
									//deleteElement(that.getDiv,villains[i].wallDiv);
								that.getDiv.removeChild(villains[i].villainDiv);
								//villains[i].wallDiv.parentNode.removeChild(villains[i].wallDiv);
								//alert("villain collision");
								delete villains[i].height;
								map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]=0;
								villains.splice(i,1);
								that.getDiv.removeChild(bullet.bulletDiv);
								//deleteElement(that.getDiv,bullet.bulletDiv);
								delete bullet.height;
								delete bullet.width;;
								break;
									
								}
						}	
					}
						bullet.bulletDelete=true;
					}else if(map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)]==5){					
						//deleteElement(that.getDiv,bullet.bulletDiv);
						bullet.bulletDelete=true;
					}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)])==2)&&(bullet.whoseBullet==2)){
						//deleteElement(that.getDiv,bullet.bulletDiv);					
						//do nothing villain shooting villain
						bullet.bulletDelete=true;
					}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)])==1)&&(bullet.whoseBullet==2)){
						deleteElement(that.getDiv,hero.heroDiv);	
						bullet.bulletDelete=true;		
						alert("Game Over!!Press Ok to play again");
						window.location.reload();			
					//do nothing villain shooting villain
					}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX-40)/40)])==8)){
					//deleteElement(that.getDiv,bullet.bulletDiv);					
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
						hero.heroDiv.style.background='url(../images/tank-pointing-right.png) no-repeat';
					}
				hero.heroSetup();
				fixHeightWidth(1);
			}
			else{
					var villain=obj;
					if(!(villain.villainDirection==2)){
						villain.villainDirection=2;
						villain.height=40;
						villain.width=40;
						villain.villainDiv.style.background='url(../images/enemy-tank-pointing-right.png) no-repeat';
					}
					villain.villainSetup();
					fixHeightWidth();
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

						getX=(hero.x/40);
						getY=(hero.y/40);

						map[getY][getX]=1;
						hero.heroSetup();
					}else if(map[Math.floor(hero.y/40)][Math.floor((hero.x+40)/40)]==7){
						var getX=Math.floor((hero.x/40));
						var getY=Math.floor((hero.y/40));

						map[getY][getX]=0;


						hero.y=80;
						hero.x=80;

						getX=(hero.x/40);
						getY=(hero.y/40);

						map[getY][getX]=1;
						hero.heroSetup();
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
				// 			deleteElement(that.getDiv,bullet.bulletDiv);
				// 			delete bullet.height;
				// 			delete bullet.width;
				// 			delete bullet.bulletY;
				// 			delete bullet.bulletX;
				// 			//window.cancelAnimationFrame(myReq);
							
				// }

				if(map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)]==0){
					if(bullet.bulletDirection==2){
						bullet.bulletX+=40;
					}
				}else if(map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)]==6){					
					//deleteElement(that.getDiv,bullet.bulletDiv);
					for(var i=0;i<walls.length;i++){	

							if(((walls[i].x+walls[i].width)>=(bullet.bulletX+bullet.width))&&(bullet.bulletX>=walls[i].x)){
								if(((bullet.bulletY+bullet.height)<=walls[i].y)||((walls[i].y+walls[i].height)>=bullet.bulletY)){
									deleteElement(that.getDiv,walls[i].wallDiv);
									map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]=0;
									walls.splice(i,1);
									deleteElement(that.getDiv,bullet.bulletDiv);
									delete bullet.height;
									delete bullet.width;;
									break;
									
								}
						}	
					}
					//bullet.bulletDelete=true;
				}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==2)&&(bullet.whoseBullet==1)){
					//deleteElement(that.getDiv,bullet.bulletDiv);
					for(var i=0;i<villains.length;i++){	

							if(((villains[i].x+villains[i].width)>=(bullet.bulletX+bullet.width))&&(bullet.bulletX>=villains[i].x)){
								if(((bullet.bulletY+bullet.height)<=villains[i].y)||((villains[i].y+villains[i].height)>=bullet.bulletY)){
									//deleteElement(that.getDiv,villains[i].wallDiv);
								that.getDiv.removeChild(villains[i].villainDiv);
								//villains[i].wallDiv.parentNode.removeChild(villains[i].wallDiv);
								//alert("villain collision");
								delete villains[i].height;
								map[Math.floor((bullet.bulletY-40)/40)][Math.floor((bullet.bulletX)/40)]=0;
								villains.splice(i,1);
								that.getDiv.removeChild(bullet.bulletDiv);
								//deleteElement(that.getDiv,bullet.bulletDiv);
								delete bullet.height;
								delete bullet.width;;
								break;
									
								}
						}	
					}
					
					bullet.bulletDelete=true;
				}else if(map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)]==5){					
					//deleteElement(that.getDiv,bullet.bulletDiv);
					bullet.bulletDelete=true;

				}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==2)&&(bullet.whoseBullet==2)){
					//deleteElement(that.getDiv,bullet.bulletDiv);					
					//do nothing villain shooting villain
					bullet.bulletDelete=true;
				}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==1)&&(bullet.whoseBullet==2)){
						
						deleteElement(that.getDiv,hero.heroDiv);	
						bullet.bulletDelete=true;		
						alert("Game Over!!Press Ok to play again");
						window.location.reload();		
					//do nothing villain shooting villain
				}else if(((map[Math.floor((bullet.bulletY)/40)][Math.floor((bullet.bulletX)/40)])==8)){
					//deleteElement(that.getDiv,bullet.bulletDiv);					
					//do nothing villain shooting villain
					alert("Game Over!!Press Ok to play again");
					window.location.reload();

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
							x=(hero.x+20);	
							//x=(hero.x+(hero.width/2));	
						}else if(heroDirection==2){
							y=hero.y+20;	
							x=(hero.x+40);
						}else if(heroDirection==3){
							y=hero.y+40;
							x=(hero.x+20);	
							//x=(hero.x+(hero.width/2));
						}else if(heroDirection==4){
							y=hero.y+20;
							x=hero.x;
						}
					}();					

					bullet.createBullet(x,y);
						
					that.getDiv.appendChild(bullet.bulletDiv);

					heroBullets.push(bullet);

					var render=function(){

						//bullet.shootBullet(bullet.bulletDirection);							

						
						if((bullet.bulletY+bullet.height)==(bullet.height)||(bullet.bulletY==(gameProps.height-bullet.height))||(bullet.bulletDelete)){
							deleteElement(that.getDiv,bullet.bulletDiv);
							delete bullet.height;
							delete bullet.width;
							//window.cancelAnimationFrame(myReq);
							clearInterval(movebullet);
						}else if((bullet.bulletX+bullet.width)==(bullet.width)||(bullet.bulletX==(gameProps.width-bullet.width))||(bullet.bulletDelete)){
							deleteElement(that.getDiv,bullet.bulletDiv);
							delete bullet.height;
							delete bullet.width;
							//window.cancelAnimationFrame(myReq);
							clearInterval(movebullet);
						}

						moveBullets(bullet.bulletDirection,bullet);

						bullet.bulletDiv.style.left=bullet.bulletX+'px';	
						bullet.bulletDiv.style.top=bullet.bulletY+'px';

						console.log(heroBullets.length);

					};

					
					//var myReq=window.requestAnimationFrame(render);

					var movebullet=setInterval(render,80);

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
						
					that.getDiv.appendChild(bullet.bulletDiv);
					villainBullets.push(bullet);

					var render=function(){
						//bullet.shootBullet(3);	
						moveBullets(bullet.bulletDirection,bullet);

						
						if((bullet.bulletY+bullet.height)==(bullet.height)||(bullet.bulletY==(gameProps.height-bullet.height))||(bullet.bulletDelete)){
							deleteElement(that.getDiv,bullet.bulletDiv);
							delete bullet.height;
							delete bullet.width;
							//window.cancelAnimationFrame(myReq);
							clearInterval(movebullet);
						}else if((bullet.bulletX+bullet.width)==(bullet.width)||(bullet.bulletX==(gameProps.width-bullet.width))||(bullet.bulletDelete)){
							deleteElement(that.getDiv,bullet.bulletDiv);
							delete bullet.height;
							delete bullet.width;
							//window.cancelAnimationFrame(myReq);
							clearInterval(movebullet);
						}	
						bullet.bulletDiv.style.left=bullet.bulletX+'px';	
						bullet.bulletDiv.style.top=bullet.bulletY+'px';


					};

					var movebullet=setInterval(render,30);

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
							x=(hero.x+20);	
						}else if(villain.villainDirection==2){
							y=villain.y+20;	
							x=(villain.x+villain.height);
						}else if(villain.villainDirection==3){
							y=villain.y+hero.height;
							x=(villain.x+20);	
						}else if(villain.villainDirection==4){
							y=villain.y+20;
							x=villain.x;
						}
					}();

					bullet.createBullet(x,y);
						
					that.getDiv.appendChild(bullet.bulletDiv);
					villainBullets.push(bullet);

					var render=function(){
						//bullet.shootBullet(3);
						
						moveBullets(bullet.bulletDirection,bullet);

						if((bullet.bulletY+bullet.height)==(bullet.height)||(bullet.bulletY==(gameProps.height-bullet.height))||(bullet.bulletDelete)){
							deleteElement(that.getDiv,bullet.bulletDiv);
							delete bullet.height;
							delete bullet.width;
							//window.cancelAnimationFrame(myReq);
							clearInterval(movebullet);
						}else if((bullet.bulletX+bullet.width)==(bullet.width)||(bullet.bulletX==(gameProps.width-bullet.width))||(bullet.bulletDelete)){
							deleteElement(that.getDiv,bullet.bulletDiv);
							delete bullet.height;
							delete bullet.width;
							//window.cancelAnimationFrame(myReq);
							clearInterval(movebullet);
						}	
						bullet.bulletDiv.style.left=bullet.bulletX+'px';	
						bullet.bulletDiv.style.top=bullet.bulletY+'px';
					};
					var movebullet=setInterval(render,30);	
				}	
		};	

		var fixHeightWidth=function(Flag){
			if(Flag==1){
				if(heroDirection==1){
					var bulletY=hero.y;
					var bulletX=(hero.x+(hero.width/2));

				}
				else if(heroDirection==2){
					var bulletY=(hero.width/2);
					var bulletX=(hero.x+hero.height);

				}
				else if(heroDirection==3){
					var bulletY=(hero.y+hero.width);
					var bulletX=(hero.x+(hero.width/2));
				}
				else if(heroDirection==4){
					var bulletY=hero.y;
					var bulletX=(hero.x+(hero.width/2));
				}
			}
			// else{
			// 	if(villain.villainDirection==1){
			// 		var bulletY=villain.y;
			// 		var bulletX=(villain.x+(hero.width/2));

			// 	}
			// 	else if(heroDirection==2){
			// 		var bulletY=(hero.width/2);
			// 		var bulletX=(hero.x+hero.height);

			// 	}
			// 	else if(heroDirection==3){
			// 		var bulletY=(hero.y+hero.width);
			// 		var bulletX=(hero.x+(hero.width/2));
			// 	}
			// 	else if(heroDirection==4){
			// 		var bulletY=hero.y;
			// 		var bulletX=(hero.x+(hero.width/2));
			// 	}
			// }	
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
			clearDiv(that.getDiv);	//Clears the div for next level
			gameLoop();			
			}
			else{
				
				console.log(gameStart);
				if(gameStart){
					var gameinterval=setInterval(gameLoop,interval);
				}

								
		     }	
		};
		
		window.onerror = function(){
		   return true;
		};
	};

	window.Gameplay=Gameplay;

})();