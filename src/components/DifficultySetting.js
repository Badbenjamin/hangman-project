

function DifficultySetting({onDifficultyChange}){

    // console.log(onDifficultyChange)

    function onChange(event){
        console.log(event.target.value)
        onDifficultyChange(event.target.value)
    }
    return(
        <div>
            <label form="difficultySetting">DIFFICULTY</label>
                <select onChange={onChange} id="difficultySetting" name="difficulty">
                    <option value="mix">MIX</option>
                    <option value="easy">EASY</option>
                    <option value="medium">MEDIUM</option>
                    <option value="hard">HARD</option>
                </select>
        </div>
    )
}

export default DifficultySetting