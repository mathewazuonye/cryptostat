import millify from "millify"
import axios from "axios"
import Nav from "../components/nav"
import { useEffect, useState } from "react"
import Loader from "../components/loader"
// import { useNavigate } from "react-router"

const Crypto = () => {
    const [list, setlist] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [dataSearch, setdataSearch] = useState()
    // const navigation = useNavigate()
    const handleSearch = (value) => {
        if (value.length === 0) {
            setlist(dataSearch)
        }
        let filteredData = dataSearch.filter((item, index) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        if (filteredData.length === 0) {
            setlist(dataSearch);
        } else {
            setlist(filteredData);

        }
    };
    const getData = () => {

        const options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            params: {
                referenceCurrencyUuid: 'yhjMzLPhuIDl',
                timePeriod: '24h',
                'tiers[0]': '1',
                orderBy: 'marketCap',
                orderDirection: 'desc',
                limit: '50',
                offset: '0'
            },
            headers: {
                'X-RapidAPI-Key': '1a03298b85msh39a69812cdc9afdp1c3244jsn3de5118653fd',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data.data.coins);
            setisLoading(false)
            setlist(response.data.data.coins)
            setdataSearch(response.data.data.coins)
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        getData()
    }, [])


    return (

        <div className="crypto">
            <Nav />
            <input className="search" type="search" placeholder="Search Cryptocurrency"
                onChange={(e) => handleSearch(e.target.value)} />
            {
                isLoading ?
                    <Loader />
                    :

                    list?.map((item) => {
                        console.log(item)
                        return (
                            <div className="coins-cont">
                                <div className="coin-details">
                                    <h1 className="coins-header" key={item.name}>{item.rank}.{item.name}</h1>
                                    <img src={item?.iconUrl} alt="" className="icon" />
                                    <div className="price-card">
                                        <div className="cap">
                                            <p className="market-price">Price:</p>
                                            <p className="coin-price">${millify(item.price)}</p>
                                        </div>
                                        <div className="cap">
                                            <h1 className="market-cap">Market : </h1>
                                            <p className="item-market">{millify(item.marketCap)}</p>
                                        </div>
                                        <div className="cap">
                                            <h1 className="market-change">Daily Change:</h1>
                                            <p className="change">{item.change}</p>
                                        </div>
                                        {/* <button className="seemore-btn" onClick={() => navigation(`/cyptodetail/${item?.name}`)}>see more</button> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}
export default Crypto