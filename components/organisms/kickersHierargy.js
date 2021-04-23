import { Row, Col, Divider, Space } from 'antd';
import Typography, {setConfig} from '@namia/typography';
import Image from 'next/image'
import ArticleItem_01 from '../molecules/articleItem_01.js';
import ArticleItem_02 from '../molecules/articleItem_02.js';
import ArticleItem_03 from '../molecules/articleItem_03.js';
import ArticleItem_04 from '../molecules/articleItem_04.js';

function KickersHierargy() {

return (

<Row justify="center" gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col xs={{span: 20}} lg={{span: 10 }}>
          <ArticleItem_02 category="water" headline="headline 1" />
        </Col>

        <Col xs={{span: 20}} lg={{span: 5 }}>
          <Space direction="vertical" style={{ width: '100%'}}>
            <ArticleItem_03 category="music" headline="headline 1" />
            <Divider type="horizontal" />
            <ArticleItem_03 category="band" headline="headline 1" />
          </Space>
        </Col>

        <Col xs={{span: 20}} lg={{span: 5 }}>
        <Space direction="vertical" style={{ width: '100%'}}>
            <ArticleItem_03 category="guitar" headline="headline 1" />
            <Divider type="horizontal" />
            <ArticleItem_03 category="radio" headline="headline 1" />
          </Space>
        </Col>
</Row>

    );
  }

  export default KickersHierargy