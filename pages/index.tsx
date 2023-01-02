import { LayoutConfigWithNextPage } from '../configs/layout.config';
import React, { useEffect, useState } from 'react';
import { getAnimeSearchTypes } from '../types/services/getAnimeSearchTypes';
import { getAnimeSearch } from '../services/root';
import { debounce } from 'lodash';
import { Card, Col, Grid, Image, Row } from 'antd';

const { useBreakpoint } = Grid;

const Home: LayoutConfigWithNextPage = () => {
  const { xs } = useBreakpoint();
  const [animeList, setAnimeList] = useState<getAnimeSearchTypes.data[]>([]);
  const [pagination, setPagination] = useState<getAnimeSearchTypes.pagination | null>(null);
  const [filter, setFilter] = useState<getAnimeSearchTypes.request>({
    page: 1,
    limit: 10,
    q: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const loadAnimeList = () => {
    setLoading(true);
    getAnimeSearch(filter)
      .then((res) => {
        setAnimeList(res.data);
        setPagination(res.pagination);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleNextPage = () => {
    if (pagination?.has_next_page) {
      setFilter((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };
  const handlePrevPage = () => {
    if (pagination?.last_visible_page) {
      if (pagination.last_visible_page > 0) {
        setFilter((prev) => ({ ...prev, page: prev.page - 1 }));
      }
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({ ...prev, q: e.target.value }));
  };
  const handleSearchWithDebounce = debounce(handleSearch, 500);
  const limitSynopsys = (synopsys: string) => {
    return synopsys.length > 100 ? synopsys.substring(0, 100) + '...' : synopsys;
  };
  useEffect(() => {
    loadAnimeList();
  }, [filter]);
  return (
    <Row gutter={[10, 10]}>
      {animeList.map((item) => (
        <Col xs={24} md={8} lg={6} xl={4} key={item.mal_id}>
          <Card
            hoverable
            cover={
              <Image
                alt={`image-${item.mal_id}`}
                src={xs ? item.images.jpg.large_image_url : item.images.jpg.image_url}
                height={300}
              />
            }>
            <Card.Meta
              title={item.titles.map((e) => e.title)[0]}
              description={limitSynopsys(item.synopsis ?? '')}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};
Home.layout = 'base';
Home.title = 'AnimeList';
Home.description = 'Search your favorite anime, manga, and characters';

export default Home;
