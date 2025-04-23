import ReactIcon from '../assets/react.svg'
import './Header.css'

export default function Header() {
    return(
        <div className="Container">
            <img src={ReactIcon} alt='ReactLogo'/>
            <h1>React Essentials</h1>
            <p className='details'>4 fundamental concepts every React developer must understand</p>
        </div>
        
    )
}