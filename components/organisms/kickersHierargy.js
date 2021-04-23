import { Row, Col, Divider, Space } from 'antd';
import ArticleItem02 from '../molecules/articleItem02';
import ArticleItem03 from '../molecules/articleItem03';

function KickersHierargy() {
  return (
    <Row
      justify="center"
      gutter={[
        { xs: 8, sm: 16, md: 24, lg: 32 },
        { xs: 8, sm: 16, md: 24, lg: 32 },
      ]}
    >
      <Col xs={{ span: 20 }} lg={{ span: 10 }}>
        <ArticleItem02 category="water" headline="headline 1" />
      </Col>

      <Col xs={{ span: 20 }} lg={{ span: 5 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <ArticleItem03 category="music" headline="headline 1" />
          <Divider type="horizontal" />
          <ArticleItem03 category="band" headline="headline 1" />
        </Space>
      </Col>

      <Col xs={{ span: 20 }} lg={{ span: 5 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <ArticleItem03 category="guitar" headline="headline 1" />
          <Divider type="horizontal" />
          <ArticleItem03 category="radio" headline="headline 1" />
        </Space>
      </Col>
    </Row>
  );
}

export default KickersHierargy;
