var wins=0;
for (var tries=0;tries<1000;tries++){ //the amount of games played
var doors = ["lose", "lose", "lose"]; //3 doors

var winningdoors=Math.floor(Math.random() * 3);
doors[winningdoors]="win";//randomly choosing one to have the prize
var player=Math.floor(Math.random() * 3);// player randomly picks one door

for (var i=0;i<doors.length;i++){
    if(doors[i]=="lose"&&player!=i){

        doors.splice(i,1);//removing one losing option
        i=3;
    }

}

if(doors[player]==undefined){
    player--; //if player chose the third option, which is currently undefined we have to lower it by one
}

if(player==0){
    player=1;
}
else{
    player=0;
}//changes his option


if(doors[player]=="win"){
    wins++;
}
}
console.log("Won:"+wins);
console.log("Lost"+(tries-wins));
console.log("Win rate:"+Math.round((wins/tries)*100)+"%")
