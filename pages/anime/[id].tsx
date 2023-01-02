import { LayoutConfigWithNextPage } from '../../configs/layout.config';
import { useRouter } from 'next/router';

const Index: LayoutConfigWithNextPage = () => {
  const { id } = useRouter().query;
  return (
    <>
      <div>{id}</div>
    </>
  );
};

export default Index;
