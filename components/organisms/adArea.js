import { Row, Col, Divider, Space } from 'antd';
import Typography, { setConfig } from '@namia/typography';
import Image from 'next/image';
import ArticleItem01 from '../molecules/articleItem01';
import ArticleItem03 from '../molecules/articleItem03';
import ArticleItem04 from '../molecules/articleItem04';

function AdArea() {
  const ad = { background: '#fafafa' };
  return (
    <Row
      justify="center"
      gutter={[
        { xs: 8, sm: 16, md: 24, lg: 32 },
        { xs: 8, sm: 16, md: 24, lg: 32 },
      ]}
      style={ad}
    >
      <Col xs={{ span: 20 }} lg={{ span: 10 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography elementType="h1" size="1" type="basic">
            Ad
          </Typography>
          <Image
            alt="Product"
            src="https://source.unsplash.com/random/product"
            layout="responsive"
            width={100}
            height={53}
          />
        </Space>
      </Col>
    </Row>
  );
}

export default AdArea;
