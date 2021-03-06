import { Row, Col, Space } from 'antd';
import Typography from '@namia/typography';
import Image from 'next/image';

function ArticleItem02(props) {
  return (
    <Row
      gutter={[
        { xs: 8, sm: 16, md: 24, lg: 32 },
        { xs: 8, sm: 16, md: 24, lg: 32 },
      ]}
    >
      <Col xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography elementType="h3" size="4" type="basic">
            {props.headline}
          </Typography>
          <Typography elementType="p" size="1" type="basic">
            22.4.2021 | News
          </Typography>
        </Space>
      </Col>

      <Col xs={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }}>
        <Image
          className="itemimage"
          alt="Random placeholder from Unsplash"
          src={`https://source.unsplash.com/random/${props.category}`}
          layout="responsive"
          width={1000}
          height={530}
        />
      </Col>
    </Row>
  );
}

export default ArticleItem02;
