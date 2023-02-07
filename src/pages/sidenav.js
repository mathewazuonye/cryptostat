import { Link } from "react-router-dom"
const Sidenav = () => {
    return (
        <div className="sidenav" id="sidenav">
            <div className="side-card">
                <Link className="side-link" to="news">News</Link>
                <Link className="side-link" to="/">Home</Link>
                <Link className="side-link" to="about">About</Link>
                <Link className="side-link" to="Exchange">Exchange</Link>
                <Link className="side-link" to="cryptocurrencies">Cryptocurrencies</Link>
            </div>
        </div>
    )
}
export default Sidenav