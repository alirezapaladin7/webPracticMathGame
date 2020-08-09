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
        gameFlag=false
        clearInterval(t)
        clearTimeout(timer)
        timecounter=60
        document.getElementById('timeRemain').innerHTML='0'
    }
}

window.console.log(randomAnswer())


function randomAnswer() {
    var quesAnswer= new Array(2)
    for (i=0;i<4;i++) {
        var num1 = Math.floor(Math.random() * 10)
        var num2 = Math.floor(Math.random() * 10)
        quesAnswer[i]=new Array(2)
        quesAnswer[i][0]=num1
        quesAnswer[i][1]=num2
        quesAnswer[i][2]=num1*num2
    }
    var choiser=Math.floor(Math.random()*4)



     document.getElementById('answer1').innerHTML=quesAnswer[0][2]
     document.getElementById('answer2').innerHTML=quesAnswer[1][2]
     document.getElementById('answer3').innerHTML=quesAnswer[2][2]
     document.getElementById('answer4').innerHTML=quesAnswer[3][2]

    document.getElementById('question').innerHTML=quesAnswer[choiser][0]+' x '+quesAnswer[choiser][1]
    return choiser
}



function gameover() {
    document.getElementById('gameOver').style.display='block'
    document.getElementById('gameOver').innerHTML='GAME OVER & Your score is '
    document.getElementById('commandButton').innerHTML='Start Game'



}
function timeShow() {
    timecounter-=1
    document.getElementById('timeRemain').innerHTML=timecounter
    if (gameFlag===false || timecounter<=0 ){
        clearInterval(t)
        timecounter=60
        gameover()
    }

}


