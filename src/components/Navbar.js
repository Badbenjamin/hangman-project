import { NavLink } from "react-router-dom"
import './ComponentStyles.css'

function Navbar(){
    return(
        <div className="nav_bar">
            <NavLink to="/">PLAY </NavLink>
            <NavLink to="/add_word">ADD WORD </NavLink>
            <NavLink to="/history">ABOUT</NavLink>
        </div>

    )
}

export default Navbar