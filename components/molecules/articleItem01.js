import { Space } from 'antd';
import Typography, { setConfig } from '@namia/typography';
import Image from 'next/image';

function ArticleItem01(props) {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Image
        className="itemimage"
        alt="Random placeholder from Unsplash"
        src={`https://source.unsplash.com/random/${props.category}`}
        layout="responsive"
        width={1000}
        height={530}
      />
      <Typography elementType="h1" size="3" type="basic">
        {props.headline}
      </Typography>
      <Typography elementType="p" size="1" type="basic">
        22.4.2021 | News
      </Typography>
    </Space>
  );
}

export default ArticleItem01;
