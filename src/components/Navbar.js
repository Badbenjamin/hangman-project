import { NavLink } from "react-router-dom"
import './ComponentStyles.css'

function Navbar() {
    return (
        <div className="nav_bar">
            <NavLink className="selected" to="/">PLAY : </NavLink>
            <NavLink className="selected" to="/add_word">ADD WORD : </NavLink>
            <NavLink className="selected" to="/history">ABOUT</NavLink>
        </div>

    )
}

export default Navbar