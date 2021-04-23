import { Row, Col, Divider, Space } from 'antd';
import Typography, { setConfig } from '@namia/typography';
import ArticleItem02 from '../molecules/articleItem02';
import ArticleItem03 from '../molecules/articleItem03';
import ArticleItem05 from '../molecules/articleItem05';

function Lists() {
  return (
    <Row
      justify="center"
      gutter={[
        { xs: 8, sm: 16, md: 24, lg: 32 },
        { xs: 8, sm: 16, md: 24, lg: 32 },
      ]}
    >
      <Col xs={{ span: 20 }} lg={{ span: 5 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography elementType="h3" size="5" type="basic">
            Writers
          </Typography>
          <Divider />

          <ArticleItem05 category="face" headline="headline 1" />
          <Divider />
          <ArticleItem05 category="woman" headline="headline 1" />
          <Divider />
          <ArticleItem05 category="men" headline="headline 1" />
          <Divider />
          <ArticleItem05 category="professional" headline="headline 1" />
          <Divider />
          <ArticleItem05 category="journalist" headline="headline 1" />
          <Divider />
          <ArticleItem05 category="profile" headline="headline 1" />
          <Divider />
          <ArticleItem05 category="human" headline="headline 1" />
          <Divider />
          <ArticleItem05 category="boy" headline="headline 1" />
          <Divider />
          <ArticleItem05 category="girl" headline="headline 1" />
          <Divider />
          <ArticleItem05 category="old" headline="headline 1" />
        </Space>
      </Col>

      <Col className="gutter-row" xs={{ span: 20 }} lg={{ span: 10 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography elementType="h3" size="5" type="basic">
            News
          </Typography>
          <Divider />
          <ArticleItem02
            category="architecture"
            headline="Placeholder headline 1"
          />
          <Divider />
          <ArticleItem02 category="space" headline="Placeholder headline 2" />
          <Divider />
          <ArticleItem02 category="fashion" headline="Placeholder headline 3" />
          <Divider />
          <ArticleItem02 category="winter" headline="Placeholder headline 4" />
          <Divider />
          <ArticleItem02 category="frozen" headline="Placeholder headline 5" />
          <Divider />
          <ArticleItem02 category="dark" headline="Placeholder headline 6" />
          <Divider />
          <ArticleItem02 category="scary" headline="Placeholder headline 7" />
          <Divider />
          <ArticleItem02
            category="profesional"
            headline="Placeholder headline 8"
          />
          <Divider />
          <ArticleItem02
            category="enterprice"
            headline="Placeholder headline 9"
          />
          <Divider />
          <ArticleItem02
            category="quality"
            headline="Placeholder headline 10"
          />
        </Space>
      </Col>

      {/* //list short */}
      <Col xs={{ span: 20 }} lg={{ span: 5 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography elementType="h3" size="5" type="basic">
            Most read
          </Typography>
          <Divider />
          <ArticleItem03 category="sport" headline="headline 1" />
          <Divider />
          <ArticleItem03 category="football" headline="headline 1" />
          <Divider />
          <ArticleItem03 category="baseball" headline="headline 1" />
          <Divider />
          <ArticleItem03 category="tennis" headline="headline 1" />
          <Divider />
          <ArticleItem03 category="surf" headline="headline 1" />
        </Space>
      </Col>
    </Row>
  );
}

export default Lists;
