

console.log ("Java Running");


var inputName1 = "";
var inputName2 = "";
var player;
var enemy;

function getPlayerName () {
    $("#robotName1").keypress(function (evt){
    // console.log(evt);
        if (evt.keyCode === 13) {
        inputName1 = $("#robotName1").val();
        }
    });
}
getPlayerName();

function getEnemyName() {
    $("#robotName2").keypress(function (evt){
        // console.log(evt);
        if (evt.keyCode === 13) {
            var inputName2 = $("#robotName2").val();
        }
    });
} 

getEnemyName();

function playerRobotSelect() {
    $("input:radio").on("change", function(evt) {
        console.log(evt.currentTarget.id);
        playerVessel = evt.currentTarget.id;
        console.log(playerVessel);
        player = new Robot[playerVessel]();
        console.log(player);
    });
};

playerRobotSelect();

function enemyRobotSelect() {
    $("input:radio").on("change", function(evt) {
        console.log(evt.currentTarget.id);
        enemyVessel = evt.currentTarget.id;
        console.log(enemyVessel);
        enemy = new Robot[enemyVessel]();
        console.log(player);
    });
};

// $('#WallE').click( () =>{
//  var walle1 = new Robot.WallE();
//  console.log(walle1);
// })



