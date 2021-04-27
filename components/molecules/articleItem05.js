import { Row, Col, Divider, Space } from 'antd';
import Typography from '@namia/typography';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

function ArticleItem05(props) {
  return (
    <Row>
      <Col flex="48px">
        <Image
          className={styles.itemimage}
          alt="Randon placeholder from Unsplash"
          src={`https://source.unsplash.com/random/${props.category}`}
          layout="responsive"
          width={48}
          height={48}
        />
      </Col>
      <Col>
        <Divider type="vertical" />
      </Col>

      <Col flex="auto">
        <Space direction="vertical">
          <Typography elementType="h3" size="2" type="basic">
            {props.headline}
          </Typography>
          <Typography elementType="p" size="1" type="basic">
            22.4.2021 | News
          </Typography>
        </Space>
      </Col>
    </Row>
  );
}

export default ArticleItem05;
