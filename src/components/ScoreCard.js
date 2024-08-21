import './ComponentStyles.css'

function ScoreCard({winOrLoss, gameOver}){

    let wins = winOrLoss.filter(wins => wins === true)
    let losses = winOrLoss.filter(losses => losses === false)
    let winClass = ""
    let lossClass =""

    function onNewGame(){
        // handleNewGame()
        window.location.reload()
    }

    if (gameOver === true) {
        winClass = "win_score"
        lossClass = "loss_score"
    }

    return(
        <div>
            <h1 className={winClass}>WINS {wins.length}</h1>
            <h1 className={lossClass}>LOSSES {losses.length}</h1>
            {(gameOver === false) ? <></> : <h1>GAME OVER!</h1> }
            <button onClick={onNewGame}>NEW GAME</button>
        </div>
    )
}

export default ScoreCard