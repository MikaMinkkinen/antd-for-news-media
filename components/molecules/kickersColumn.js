import { Row, Col, Divider, Space } from 'antd';
import Typography, {setConfig} from '@namia/typography';
import Image from 'next/image'
import ArticleItem_01 from '../atoms/articleItem_01.js';
import ArticleItem_03 from '../atoms/articleItem_03.js';
import ArticleItem_04 from '../atoms/articleItem_04.js';

function KickersColumn() {

return (

<Row justify="center" gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
  <Col className="gutter-row" xs={{span: 10, order: 1}} lg={{span: 5 }}>
    <ArticleItem_01 category="interiors" headline="headline 1" />
  </Col>

  <Col className="gutter-row" xs={{span: 10, order: 1}} lg={{span: 5 }}>
    <ArticleItem_01 category="travel" headline="headline 1" />
  </Col>

  <Col className="gutter-row" xs={{span: 10, order: 1}} lg={{span: 5 }}>
    <ArticleItem_01 category="technology" headline="headline 1" />
  </Col>

  <Col className="gutter-row" xs={{span: 10, order: 1}} lg={{span: 5 }}>
    <ArticleItem_01 category="animals" headline="headline 1" />
  </Col>
</Row>

    );
  }

  export default KickersColumn