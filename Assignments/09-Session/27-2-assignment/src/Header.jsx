import './Header.css'
import logo from './assets/dlogo.svg';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import insta from './assets/instagram.png';


function Header(){
    return (
        <div className="header">
            <ul>
                <div>
                <li><a href=""><img src={logo} alt="" className='logo'/></a></li>
                </div>
                <div>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Author</a></li>
                    <li><a href="">About this Project</a></li>
                </div>
            </ul>
            <ul className='contact'>
                <li className='con'><a href=""><img src={github} alt="" /></a></li>
                <li className='con'><a href=""><img src={linkedin} alt="" /></a></li>
                <li className='con'><a href=""><img src={insta} alt="" /></a></li>
            </ul>
        </div>
    )
}
export default Header;