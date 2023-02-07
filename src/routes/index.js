import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "../pages/about"
import Home from "../pages/home"
import News from "../pages/news"
import Crypto from "../pages/crypto"
import Exchange from "../pages/exchange"
// import Details from "../components/details"
const Routerpage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="news" element={<News />} />
                <Route path="about" element={<About />} />
                <Route path="crypto" element={<Crypto />} />
                <Route path="exchange" element={<Exchange />} />
                {/* <Route path="cyptodetail/:coinname" element={<Details />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
export default Routerpage