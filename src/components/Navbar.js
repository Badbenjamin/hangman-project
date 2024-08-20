import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <div>
            <NavLink to="/">PLAY </NavLink>
            <NavLink to="/add_word">ADD WORD </NavLink>
            <NavLink to="/history">ABOUT</NavLink>
        </div>

    )
}

export default Navbar