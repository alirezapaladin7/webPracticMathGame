alert('hello')
var gameFlag=false
var timecounter=60
function startGame() {
    if (gameFlag===false){
        gameFlag=true
        document.getElementById('commandButton').innerHTML='restart game'
        timer=setTimeout(function () {gameFlag=false},60000)
        t=setInterval(function () {timeShow()},1000)


        }



    else {
        document.getElementById('commandButton').innerHTML='Start Game'
    }


}
function gameover() {
    document.getElementById('gameOver').style.display='block'
    document.getElementById('gameOver').innerHTML='GAME OVER & Your score is '
    document.getElementById('commandButton').innerHTML='Start Game'



}
function timeShow() {
    timecounter-=1
    document.getElementById('testResult').innerHTML=timecounter
    if (gameFlag===false || timecounter<=0 ){
        clearInterval(t)
        timecounter=60
        gameover()
    }

}


