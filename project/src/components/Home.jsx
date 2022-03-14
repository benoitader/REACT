import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptomonnaies, Actualites } from '../components';

const { Title } = Typography;

const Home = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return 'Loading ...';

    return (
      <>
        <Title level={2} className="heading">Statistiques mondiales sur les crypto-monnaies</Title>
        <Row>
          <Col span={12}><Statistic title="Total des crypto-monnaies" value={globalStats.total}/></Col>
          <Col span={12}><Statistic title="Total des échanges" value={millify(globalStats.totalExchanges)}/></Col>
          <Col span={12}><Statistic title="Capitalisation boursière totale" value={millify(globalStats.totalMarketCap)}/></Col>
          <Col span={12}><Statistic title="Volume total sur 24h" value={millify(globalStats.total24hVolume)}/></Col>
          <Col span={12}><Statistic title="Total des marchés" value={millify(globalStats.totalMarkets)}/></Col>
        </Row>
        <div className="home-heading-container">
          <Title level={2} className="home-title">Les 10 premières crypto-monnaies du monde</Title>
          <Title level={3} className="show-more"><Link to="/cryptomonnaies">Voir plus</Link></Title>
        </div>
        <Cryptomonnaies simplified />
        <div className="home-heading-container">
          <Title level={2} className="home-title">Dernières nouvelles sur les crypto-monnaies</Title>
          <Title level={3} className="show-more"><Link to="/actualites">Voir plus</Link></Title>
        </div>
        <Actualites simplified />
      </>
    )
}

export default Home
