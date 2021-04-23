import { Row, Col, Divider, Space } from 'antd';
import Typography, {setConfig} from '@namia/typography';
import Image from 'next/image'
import ArticleItem_01 from '../atoms/articleItem_01.js';
import ArticleItem_03 from '../atoms/articleItem_03.js';
import ArticleItem_04 from '../atoms/articleItem_04.js';

function Lists() {

return (

<Row justify="center" gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>

<Col xs={{span: 20}} lg={{span: 5 }}>
  <Space direction="vertical" style={{ width: '100%'}}>
  <Typography elementType="h3" size="5" type="basic">Writers</Typography>
  <Divider />

    <ArticleItem_03 category="face"headline="headline 1" />
    <Divider />
    <ArticleItem_03 category="woman"headline="headline 1" />
    <Divider />
    <ArticleItem_03 category="men"headline="headline 1" />
    <Divider />
    <ArticleItem_03 category="professional"headline="headline 1" />
    <Divider />
    <ArticleItem_03 category="journalist"headline="headline 1"/>
    <Divider />
    <ArticleItem_03 category="profile"headline="headline 1"/>
    <Divider />
    <ArticleItem_03 category="human"headline="headline 1"/>
    <Divider />
    <ArticleItem_03 category="boy"headline="headline 1"/>
    <Divider />
    <ArticleItem_03 category="girl"headline="headline 1"/>
    <Divider />
    <ArticleItem_03 category="old"headline="headline 1"/>
  </Space>
</Col>

<Col className="gutter-row" xs={{span: 20}} lg={{span: 10 }}>
  <Space direction="vertical" style={{ width: '100%'}}>
  <Typography elementType="h3" size="5" type="basic">News</Typography>
  <Divider />
    <ArticleItem_04 category="night" headline="headline 1"/>
    <Divider />
    <ArticleItem_04 category="day" headline="headline 1"/>
    <Divider />
    <ArticleItem_04 category="evening" headline="headline 1"/>
    <Divider />
    <ArticleItem_04 category="summer" headline="headline 1"/>
    <Divider />
    <ArticleItem_04 category="winter" headline="headline 1"/>
    <Divider />
    <ArticleItem_04 category="autum" headline="headline 1"/>
    <Divider />
    <ArticleItem_04 category="watercolour" headline="headline 1"/>
    <Divider />
    <ArticleItem_04 category="happiness" headline="headline 1"/>
    <Divider />
    <ArticleItem_04 category="thanksgiving" headline="headline 1"/>
    <Divider />
    <ArticleItem_04 category="buildings" headline="headline 1"/>
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