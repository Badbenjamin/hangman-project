function ScoreCard({winOrLoss}){

    let wins = winOrLoss.filter(wins => wins === true)
    let losses = winOrLoss.filter(losses => losses === false)

    return(
        <>
            <h1>WINS {wins.length}</h1>
            <h1>LOSSES {losses.length}</h1>
        </>
    )
}

export default ScoreCard