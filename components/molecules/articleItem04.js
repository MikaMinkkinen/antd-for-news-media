import { Row, Col, Divider, Space } from 'antd';
import Typography, { setConfig } from '@namia/typography';
import Image from 'next/image';

function ArticleItem04(props) {
  const imgstyle = { background: '#F9F0FF' };
  return (
    <Row>
      <Col flex="auto">
        <Space direction="vertical">
          <Typography elementType="h3" size="4" type="basic">
            {props.headline}
          </Typography>
          <Typography elementType="p" size="1" type="basic">
            22.4.2021 | News
          </Typography>
        </Space>
      </Col>
      <Col flex="262px">
        <Image
          className="itemimage"
          alt="Random placeholder from Unsplash"
          src={`https://source.unsplash.com/random/${props.category}`}
          layout="responsive"
          width={1000}
          height={520}
        />
      </Col>
    </Row>
  );
}

export default ArticleItem04;
