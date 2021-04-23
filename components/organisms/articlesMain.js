import { Row, Col, Divider, Space } from 'antd';
import Typography, {setConfig} from '@namia/typography';
import Image from 'next/image'
import ArticleItem_01 from '../molecules/articleItem_01.js';
import ArticleItem_03 from '../molecules/articleItem_03.js';
import ArticleItem_04 from '../molecules/articleItem_04.js';

function ArticlesMain() {

  const imgstyle = { background: '#F9F0FF'};
    return (

<Row justify="center" gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>

{/* two */}
<Col xs={{span: 20, order: 2 }} lg={{span: 5, order: 1 }}>
  <Space direction="vertical" style={{ width: '100%'}}>
    <ArticleItem_01 category="covid" headline="headline 1"/>
    <ArticleItem_01 category="war" headline="headline 1" />
  </Space>
</Col>

{/* big */}
<Col xs={{span: 24, order: 1}} lg={{span: 10, order: 3 }}>
  <Space direction="vertical" style={{ width: '100%'}}>
    <Image alt="Road" src="https://source.unsplash.com/random/570x320" layout="responsive" width={700} height={475} />
    <Row>
      <Col xs={{span: 22, offset:2}} lg={{span: 8, offset:0 }}>
        <Typography elementType="h1" size="6" type="basic">Main headline</Typography>
        <Typography elementType="p" size="1" type="basic">22.4.2021 | News</Typography>
      </Col>
    </Row>
  </Space>
</Col>

{/* list */}
<Col xs={{span: 20, order: 3}} lg={{span: 5, order: 5 }}>
  <Space direction="vertical" style={{ width: '100%'}}>
    <ArticleItem_03 category="nature" headline="headline 1"/>
    <Divider type="vertical" />
    <ArticleItem_03 category="business" headline="headline 1" />
    <Divider type="vertical" />
    <ArticleItem_03 category="architecture" headline="headline 1" />
    <Divider type="vertical" />
    <ArticleItem_03 category="fashion" headline="headline 1" />
    <Divider type="vertical" />
    <ArticleItem_03 category="film" headline="headline 1" />
  </Space>
</Col>
</Row>

    );
  }

  export default ArticlesMain