import { NavLink } from "react-router-dom"

const Chooseone = ({ children, to,className }) => {
    return (
        <NavLink to={to} className={className}>
            {children}
        </NavLink>
    )
}

export default Chooseone