import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <div>
        <NavLink to="/">Play!</NavLink>
        <NavLink to="/add_word">Add Word</NavLink>
        {/* <NavLink to="/history">Game History</NavLink> */}
        </div>

    )
}

export default Navbar