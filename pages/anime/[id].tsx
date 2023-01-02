import { LayoutConfigWithNextPage } from '../../configs/layout.config';
import { useRouter } from 'next/router';
import { Button, Col, Row } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

const Index: LayoutConfigWithNextPage = () => {
  const { query, push } = useRouter();
  const { id } = query;
  const backToList = () => {
    push('/');
  };
  return (
    <Row gutter={[10, 10]}>
      <Col xs={24}>
        <Button type={'link'} onClick={backToList} icon={<LeftOutlined />}>
          Back to Anime List
        </Button>
      </Col>
    </Row>
  );
};

Index.title = 'Detail Anime';
Index.layout = 'base';
export default Index;
