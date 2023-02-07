import { Link } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai";
import Sidenav from "../pages/sidenav";
const Nav = () => {
    const handleNav = () => {
        const showNav = () => {
            document.getElementById('sidenav').classList.toggle('active')
        }
        showNav()
    }
    return (

        <div className="nav-bar">
            <div className="nav">
                <h1 className="logo" >Global Crypto Stats</h1>
                <AiOutlineMenu className="toggle" onClick={handleNav} />
                <div className="nav-link">
                    <Link className="link" to="/" >Home
                    </Link>
                    <Link className="link" to="exchange" >Exchange
                    </Link>
                    <Link className="link" to="news" >News
                    </Link>
                    <Link className="link" to="crypto" >Cryptocurrencies
                    </Link>
                    <Link className="link" to="about" >About
                    </Link>
                </div>
            </div>
            <Sidenav />
        </div>
    )
}
export default Nav