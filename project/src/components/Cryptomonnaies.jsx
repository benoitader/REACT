import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptomonnaies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    console.log(cryptos);

    useEffect(() => {
      const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

      setCryptos(filteredData);

    }, [cryptosList, searchTerm]);

    if(isFetching) return 'Chargement ...';

    return (
        <>
          {!simplified && (
            <div className="search-crypto">
              <Input placeholder="Rechercher une cryptomonnaies" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          )}
          <Row gutter={[32, 32]} className="crypto-card-container">
            {cryptos?.map((currency) => (
              <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
                <a href={currency.coinrankingUrl} target="_blank">
                  <Card title={`${currency.rank}. ${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} />} hoverable>
                    <p>Prix: {millify(currency.price)}</p>
                    <p>Capitalisation boursière: {millify(currency.marketCap)}</p>
                    <p>Changement quotidien: {millify(currency.change)}%</p>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </>
    )
}

export default Cryptomonnaies
