import logo from '../../../images/image 13.jpg'
import cl from './Logo.module.css'


const Logo = (props) => {
    return (
        <div>
            <img src={logo} alt="logo" className={cl.img}/>
        </div>
    )
}

export default Logo