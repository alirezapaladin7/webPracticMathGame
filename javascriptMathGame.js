var gameFlag=false
var defaultTimecounter=60
var timecounter=defaultTimecounter
var qu
var totalScore=0
document.getElementById('timeRemain').innerHTML=defaultTimecounter
function startGame() {
    if (gameFlag===false){
        gameFlag=true
        qu=randomAnswer()
        document.getElementById('gameOver').style.display='none'
        document.getElementById('commandButton').innerHTML='restart game'
        timer=setTimeout(function () {gameFlag=false},60000)
        t=setInterval(function () {timeShow()},1000)
        }
    else {
        document.getElementById('commandButton').innerHTML='Start Game'
        gameFlag=false
        clearInterval(t)
        clearTimeout(timer)
        timecounter=defaultTimecounter
        document.getElementById('timeRemain').innerHTML=defaultTimecounter
        document.getElementById('gameOver').style.display='none'
    }
}

// window.console.log(randomAnswer())




function answerChoise(e) {
    var elem, evt = e ? e:event;
    if (evt.srcElement)  elem = evt.srcElement;
    else if (evt.target) elem = evt.target;
    var ans=(elem.id.charAt(6));
    if (qu==ans){
        totalScore+=1
        document.getElementById('scoreUnder').innerHTML=totalScore
        document.getElementById('alertNote').style.display='block'
        document.getElementById('alertNote').style.backgroundColor='green'
        document.getElementById('alertNote').innerHTML='currect'
        qu=randomAnswer()
    }
    else {
        document.getElementById('alertNote').style.display='block'
        document.getElementById('alertNote').style.backgroundColor='red'
        document.getElementById('alertNote').innerHTML='Try again'
    }

}

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

    for (var i=0;i<4;i++) {
        if (choiser==i) {
            document.getElementById(('answer'+(i+1))).innerHTML = quesAnswer[i][2]
        }else if( quesAnswer[choiser][2] != quesAnswer[i][2]){
            document.getElementById(('answer'+(i+1))).innerHTML = quesAnswer[i][2]
        }else {
            document.getElementById(('answer'+(i+1))).innerHTML = quesAnswer[i][2]+Math.floor(Math.random()*10)

        }

    }
    document.getElementById('question').innerHTML=quesAnswer[choiser][0]+' x '+quesAnswer[choiser][1]
    return (eval(choiser)+1)
}



function gameover() {
    document.getElementById('gameOver').style.display='block'
    document.getElementById('gameOver').innerHTML='GAME OVER & Your score is '
    document.getElementById('commandButton').innerHTML='Start Game'
    document.getElementById('scoreGameover').innerHTML=totalScore
    document.getElementById('alertNote').style.display='none'




}
function timeShow() {
    timecounter-=1
    document.getElementById('timeRemain').innerHTML=timecounter
    if (gameFlag===false || timecounter<=0 ){
        clearInterval(t)
        timecounter=defaultTimecounter
        gameover()
    }

}


