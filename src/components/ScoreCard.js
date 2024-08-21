function ScoreCard({winOrLoss, gameOver}){

    let wins = winOrLoss.filter(wins => wins === true)
    let losses = winOrLoss.filter(losses => losses === false)

    function onNewGame(){
        // handleNewGame()
        window.location.reload()
    }

    return(
        <>
            <h1>WINS {wins.length}</h1>
            <h1>LOSSES {losses.length}</h1>
            {(gameOver === false) ? <></> : 
            <div>
                <h1>GAME OVER!</h1> 
                <button onClick={onNewGame}>NEW GAME</button>
            </div>
            }
            
        </>
    )
}

export default ScoreCard