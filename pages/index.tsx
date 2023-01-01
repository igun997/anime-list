import { LayoutConfigWithNextPage } from '../configs/layout.config';

const Home: LayoutConfigWithNextPage = () => {
  return <>Hello</>;
};
Home.layout = 'base';
Home.title = 'AnimeList';
Home.description = 'Search your favorite anime, manga, and characters';

export default Home;
