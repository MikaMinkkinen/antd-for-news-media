import { Row, Col, Divider, Space } from 'antd';
import Typography, {setConfig} from '@namia/typography';
import Image from 'next/image'
import ArticleItem_01 from '../molecules/articleItem_01.js';
import ArticleItem_02 from '../molecules/articleItem_02.js';
import ArticleItem_03 from '../molecules/articleItem_03.js';
import ArticleItem_04 from '../molecules/articleItem_04.js';
import ArticleItem_05 from '../molecules/articleItem_05.js';

function Lists() {

return (

<Row justify="center" gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>

<Col xs={{span: 20}} lg={{span: 5 }}>
  <Space direction="vertical" style={{ width: '100%'}}>
  <Typography elementType="h3" size="5" type="basic">Writers</Typography>
  <Divider />

    <ArticleItem_05 category="face"headline="headline 1" />
    <Divider />
    <ArticleItem_05 category="woman"headline="headline 1" />
    <Divider />
    <ArticleItem_05 category="men"headline="headline 1" />
    <Divider />
    <ArticleItem_05 category="professional"headline="headline 1" />
    <Divider />
    <ArticleItem_05 category="journalist"headline="headline 1"/>
    <Divider />
    <ArticleItem_05 category="profile"headline="headline 1"/>
    <Divider />
    <ArticleItem_05 category="human"headline="headline 1"/>
    <Divider />
    <ArticleItem_05 category="boy"headline="headline 1"/>
    <Divider />
    <ArticleItem_05 category="girl"headline="headline 1"/>
    <Divider />
    <ArticleItem_05 category="old"headline="headline 1"/>
  </Space>
</Col>

<Col className="gutter-row" xs={{span: 20}} lg={{span: 10 }}>
  <Space direction="vertical" style={{ width: '100%'}}>
  <Typography elementType="h3" size="5" type="basic">News</Typography>
  <Divider />
    <ArticleItem_02 category="architecture" headline="Placeholder headline 1" />
    <Divider />
    <ArticleItem_02 category="space" headline="Placeholder headline 2" />
    <Divider />
    <ArticleItem_02 category="fashion" headline="Placeholder headline 3" />
    <Divider />
    <ArticleItem_02 category="winter" headline="Placeholder headline 4" />
    <Divider />
    <ArticleItem_02 category="frozen" headline="Placeholder headline 5" />
    <Divider />
    <ArticleItem_02 category="dark" headline="Placeholder headline 6" />
    <Divider />
    <ArticleItem_02 category="scary" headline="Placeholder headline 7" />
    <Divider />
    <ArticleItem_02 category="profesional" headline="Placeholder headline 8" />
    <Divider />
    <ArticleItem_02 category="enterprice" headline="Placeholder headline 9" />
    <Divider />
    <ArticleItem_02 category="quality" headline="Placeholder headline 10" />
  </Space>
</Col>

{/* //list short */}
<Col xs={{span: 20}} lg={{span: 5 }}>

  <Space direction="vertical" style={{ width: '100%'}}>
  <Typography elementType="h3" size="5" type="basic">Most read</Typography>
  <Divider />
    <ArticleItem_03 category="sport" headline="headline 1" />
    <Divider/>
    <ArticleItem_03 category="football" headline="headline 1" />
    <Divider/>
    <ArticleItem_03 category="baseball" headline="headline 1" />
    <Divider/>
    <ArticleItem_03 category="tennis" headline="headline 1" />
    <Divider/>
    <ArticleItem_03 category="surf" headline="headline 1" />
  </Space>
</Col>

</Row>
    );
  }

  export default Lists