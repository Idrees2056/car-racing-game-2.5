class Player {
  constructor(){  // default values
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){       //read the playercount each time when it is called
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){     // playercount is updated
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){                 //In database the field players-->player1/2/3/4--->name,distance
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){         
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
