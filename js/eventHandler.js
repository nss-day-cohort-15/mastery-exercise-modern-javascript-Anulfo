

console.log ("Java Running");

$(".selectionView").show();
$(".battleView").hide();
var inputName1 = "";
var inputName2 = "";
var player;
var enemy;
var playerVessel;
var enemyVessel;

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
            inputName2 = $("#robotName2").val();
        };
    });
} 

getEnemyName();

function playerRobotSelect() {
    $("input:radio").on("change", function(evt) {
        if (evt.currentTarget.name === "playerRadioBut"){
            // console.log(evt.currentTarget.name);
            playerVessel = evt.currentTarget.id;
            // console.log(playerVessel);
            player = new Robot[playerVessel]();
            console.log(player);            
        } else if (evt.currentTarget.name === "selectRobot") {
            // console.log(evt.currentTarget)
            enemyVessel = evt.currentTarget.id;
            enemy = new Robot[enemyVessel]();
            console.log(enemy);
        }
    });
};

playerRobotSelect();

function letsFight() {

    $("#fight").click(function () {
        console.log("Let's Fight");
        $(".selectionView").hide();
        $(".battleView").show();
        console.log(inputName1);
        $(".playerName").html(inputName1);
        $(".enemyName").html(inputName2);
        printStats();
        damageDealer();
    })
}

function printStats() {
    $(".playerStats").html(
        `<h2>${playerVessel}</h2>
        <h2>Health: ${player.health}</h2>
        <h2>Damage: ${player.damage}</h2>
        <h2>Speed: ${player.speed}</h2>`);

    $(".playerImg").html(
        `<img src="images/${playerVessel}.jpg">`)
    $(".enemyImg").html(
        `<img src="images/${enemyVessel}.jpg" width= 600px height= 500px>`)
    $(".enemyStats").html(
        `<h2>${enemyVessel}</h2>
        <h2>Health: ${enemy.health}</h2>
        <h2>Damage: ${enemy.damage}</h2>
        <h2>Speed: ${enemy.speed}</h2>`);
}

function damageDealer () {
    $("#dealDamage").click( function() {
        console.log("been touched");
        player.health = player.health - enemy.damage;
        enemy.health = enemy.health - player.damage;
        printStats();

        if (player.health <= 0) {
            enemyGameOver();
        }else if (enemy.health <= 0) {
            playerGameOver();
        }
    })
}

function playerGameOver () {
    console.log("gameOver");
    $(".gameOver").html(
        `<h1>${inputName1} won using ${playerVessel}</h1>`);
}

function enemyGameOver () {
    console.log("gameOver");
    $(".gameOver").html(
        `<h1>${inputName2} won using ${enemyVessel}</h1>`);
}


letsFight()



