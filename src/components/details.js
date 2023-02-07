import { useParams } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import Nav from "./nav"
const Details = () => {
    let { coinname } = useParams()
    let id = parseInt(useParams().id)
    const [list, setlist] = useState([])
    const getData = () => {

        const options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd',
            params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h' },
            headers: {
                'X-RapidAPI-Key': '1a03298b85msh39a69812cdc9afdp1c3244jsn3de5118653fd',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setlist(response.data.data.coins)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        getData()
    })
    return (

        <div className="detail-page">
            <Nav />
            <h1>{coinname}</h1>

        </div>
    )
}
export default Details