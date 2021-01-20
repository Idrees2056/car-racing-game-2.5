class Form {

  constructor() {         //default things 
    this.input = createInput("Name"); // textbox
    this.button = createButton('Play'); 
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset= createButton('Reset')

  }
  hide(){       //function definition
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value(); // value entered by player for name, will be stored in firebase--->player--->name
      playerCount+=1; // then playercount will increase by 1
      player.index = playerCount; // address of player is equal to player count[car1,car2,car3,car4]
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });


    this.reset.mousePressed(()=>{
      player.updateCount(0)
    game.update(0)
    })
  }
}
