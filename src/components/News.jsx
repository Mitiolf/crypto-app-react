import React from 'react';
import moment from 'moment';
import { Card, Row, Col, Select, Typography, Avatar } from 'antd';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {

  const [newsCategory, setNewsCategory] = React.useState('Cryptocurrency')
  const { data: cryptoNews} = useGetCryptoNewsQuery({ newsCategory , count: simplified ? 6 : 12})
  const {data} = useGetCryptosQuery(100);
  const demoImage = "https://yt3.ggpht.com/ISuAwLelO4AcxyP2vG2NbtgR_WrNLcxpo_QDc4PqkNuZqmEucFk1Juos9aXTDyRox1Q2EtW6wFU=s176-c-k-c0x00ffffff-no-rj"

  if(!cryptoNews?.value) return "Loading..."
  
  return (
    <Row gutter={[24,24]}>

{!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
        </Select>
        </Col>
      )}

      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                <img style={{maxWidth: "12em", maxHeight:"6em"}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
              </div>
              <p>
                {news?.description.length > 100 ? `${news.description.substring(0, 100)} ...` : news.description}
              </p>
              <div className="provider-container">
                <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}  
    </Row>
  )
}

export default News