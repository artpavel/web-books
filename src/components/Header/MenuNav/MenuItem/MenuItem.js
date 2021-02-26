import {NavLink} from "react-router-dom";
import s from './MenuItem.module.css'


const MenuItem = (props) =>{
    return(
        <li className={`${s.item}`}><NavLink to={ props.path } activeClassName={s.activeLink}>
            { props.text }
        </NavLink></li>
    )
}

export default MenuItem