import cl from './Header.module.css'
import Logo from "./Logo/Logo";
import MenuNav from "./MenuNav/MenuNav";
import Quit from "./Quit/Quit";


const Header = (props) => {
    return (
        <header className={cl.header}>
            <div className={`${cl.container} ${cl.header} ${cl.flex}`}>
                <Logo/>
                <MenuNav menuNav = { props.state.menusNav }/>
                <Quit/>
                <div className="burger">
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header