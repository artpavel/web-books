import cl from './MenuNav.module.css'
import {NavLink} from "react-router-dom";
import MenuItem from "./MenuItem/MenuItem";


const MenuNav = (props) => {

    let menus = props.menuNav.map(
        item => <MenuItem path = { item.path } text = { item.text } />
    )


    return (

        <ul className={cl.menu}>
            { menus }
        </ul>

    )
}

export default MenuNav