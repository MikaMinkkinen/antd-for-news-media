import { Row, Col, Space } from 'antd';
import Typography, { setConfig } from '@namia/typography';
import Image from 'next/image';

function ArticleItem03(props) {
  return (
    <Row>
      <Col flex="auto">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography elementType="h3" size="2" type="basic">
            {props.headline}
          </Typography>
          <Typography elementType="p" size="1" type="basic">
            22.4.2021 | News
          </Typography>
        </Space>
      </Col>
      <Col flex="62px">
        <Image
          className="itemimage"
          alt="Random placeholder from Unsplash"
          src={`https://source.unsplash.com/random/${props.category}`}
          layout="responsive"
          width={62}
          height={62}
        />
      </Col>
    </Row>
  );
}

export default ArticleItem03;
