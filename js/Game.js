class Game {
  constructor(){

  }

  getState(){   //read the value of gameState
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){          // update the gameState
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){            // the fuction will wait for results from server
    if(gameState === 0){        // get the player count and call the form
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage("car1",car1_img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2_img);
    car3 = createSprite(500,200);
    car3.addImage("car3",car3_img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4_img);
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();        // when function play is called then hide the form
    
    Player.getPlayerInfo(); // get the player name and distance(players/player)
    
    if(allPlayers !== undefined){       // if allplayers are defined
      background(rgb(198,135,103));   // brown color
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){     // for each player in allplayers
        //add 1 to the index for every loop
        index = index + 1 ;     // every time car index will increase by 1

        //distance between evary car is 200
        x = x + 200;
        //use data form the database to display the cars in y direction
        // complete height minus the distance covered
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){ //which car is active will be highlighted with red circle at bottom
          stroke(10)
          fill("red")
          ellipse(x,y,60,60)
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
