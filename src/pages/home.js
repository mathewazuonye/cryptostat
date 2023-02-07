import Nav from "../components/nav"
import { useNavigate, } from "react-router"


const Home = () => {
    const navigation = useNavigate()
    return (
        <div className="homepage">
            <Nav />
            
            <div className="section-one">
                <div className="card-one">
                    <div className="details">
                        <h1 className="details-header">Total Cryptocurrencies</h1>
                        <p className="details-number">22.7K</p>
                        <h1 className="details-header">Total marketCap</h1>
                        <p className="details-number">830.6B</p>
                        <h1 className="details-header">Total Market</h1>
                        <p className="details-number">34.6K</p>
                    </div>
                </div>
                <div className="card-two">
                    <div className="details">
                        <h1 className="details-header">Total Exchanges</h1>
                        <p className="details-number">184</p>
                        <h1 className="details-header">Total 24hours Volume</h1>
                        <p className="details-number">39.7B</p>
                        <button className="showmore-btn" onClick={() => navigation("crypto")} >Show More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home