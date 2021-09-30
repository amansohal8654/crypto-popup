import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input} from 'antd';
import Loader from './Loader';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100;
    const {data: cryptosList, isFetching } = useGetCryptosQuery( count );
    const [cryptos, setCryptos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((coins) => coins.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setCryptos(filteredData);
    },[searchQuery, cryptosList]);

    
    if(isFetching) return <Loader />;

    return (
        <div>
            {!simplified &&
                <div className="search-crypto">
                    <Input placeholder = "Search Cryptocurrencies" onChange={(e) => setSearchQuery(e.target.value)}/>
                </div>
            }
            
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card 
                                title = {`${currency.rank}. ${currency.name}`}
                                extra = {<img className="crypto-image" src={currency.iconUrl} alt = ""/>}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Cryptocurrencies;