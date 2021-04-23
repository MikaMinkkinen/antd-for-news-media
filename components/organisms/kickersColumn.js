import { Row, Col } from 'antd';
import ArticleItem01 from '../molecules/articleItem01';

function KickersColumn() {
  return (
    <Row
      justify="center"
      gutter={[
        { xs: 8, sm: 16, md: 24, lg: 32 },
        { xs: 8, sm: 16, md: 24, lg: 32 },
      ]}
    >
      <Col className="gutter-row" xs={{ span: 10, order: 1 }} lg={{ span: 5 }}>
        <ArticleItem01 category="interiors" headline="headline 1" />
      </Col>

      <Col className="gutter-row" xs={{ span: 10, order: 1 }} lg={{ span: 5 }}>
        <ArticleItem01 category="travel" headline="headline 1" />
      </Col>

      <Col className="gutter-row" xs={{ span: 10, order: 1 }} lg={{ span: 5 }}>
        <ArticleItem01 category="technology" headline="headline 1" />
      </Col>

      <Col className="gutter-row" xs={{ span: 10, order: 1 }} lg={{ span: 5 }}>
        <ArticleItem01 category="animals" headline="headline 1" />
      </Col>
    </Row>
  );
}

export default KickersColumn;
