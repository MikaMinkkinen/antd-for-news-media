import { Space } from 'antd';
import Typography, {setConfig} from '@namia/typography';
import Image from 'next/image'

function ArticleItem_01( props ) {

    return (

    <Space direction="vertical" style={{ width: '100%'}}>
      <Image
      className="itemimage"
      alt="Randon placeholder from Unsplash"
      src={ `https://source.unsplash.com/random/${props.category}` }
      layout="responsive"
      width={100}
      height={53}
      />
      <Typography elementType="h1" size="3" type="basic">{props.headline}</Typography>
      <Typography elementType="p" size="1" type="basic">22.4.2021 | News</Typography>
    </Space>

    );
  }

  export default ArticleItem_01