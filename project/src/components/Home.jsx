import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Home = () => {
    return (
      <>
        <Title level={2} className="heading">Statistiques mondiales sur les crypto-monnaies</Title>
        <Row>
          <Col span={12}><Statistic title="Total des crypto-monnaies" value="5"/></Col>
          <Col span={12}><Statistic title="Total des échanges" value="5"/></Col>
          <Col span={12}><Statistic title="Capitalisation boursière totale" value="5"/></Col>
          <Col span={12}><Statistic title="Volume total sur 24h" value="5"/></Col>
          <Col span={12}><Statistic title="Total des marchés" value="5"/></Col>
        </Row>
      </>
    )
}

export default Home
