import React from 'react';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';


const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {

 // Note: To access this endpoint you need premium plan
  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
          <Col span={24}>
            <Collapse>
              <Panel     
                showArrow={false}
                header={(
                  <Row   style={{width: '100%'}}>
                    <Col span={6}>
                      <Text><strong>1.</strong></Text>
                      <Avatar className="exchange-image" src={'https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png'} />
                      <Text><strong>Binance</strong></Text>
                    </Col>
                    <Col span={6}>$22.7B</Col>
                    <Col span={6}>1.2K</Col>
                    <Col span={6}>20%</Col>
                  </Row>
                  )}>
              <p>Note: To access this endpoint you need premium plan</p>
              <a href='https://www.binance.com/pl/nft/home'>Biance web</a>
              </Panel>
            </Collapse>
          </Col>
      </Row>
    </>
  );
};

export default Exchanges;