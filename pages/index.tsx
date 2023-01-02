import { LayoutConfigWithNextPage } from '../configs/layout.config';
import React, { useEffect, useState } from 'react';
import { getAnimeSearchTypes } from '../types/services/getAnimeSearchTypes';
import { getAnimeGenres, getAnimeSearch } from '../services/root';
import { debounce } from 'lodash';
import { Button, Card, Col, Grid, Image, Input, Row, Select } from 'antd';
import { FastBackwardFilled, SearchOutlined } from '@ant-design/icons';
import { Resources } from '../types/types';
import { useRouter } from 'next/router';

const { useBreakpoint } = Grid;
const genreList = [
  'Action',
  'Adventure',
  'Cars',
  'Comedy',
  'Dementia',
  'Demons',
  'Drama',
  'Ecchi',
  'Fantasy',
  'Game',
  'Harem',
];
const Home: LayoutConfigWithNextPage = () => {
  const { xs } = useBreakpoint();
  const router = useRouter();
  const [animeList, setAnimeList] = useState<Resources.animeResources[]>([]);
  const [genreList, setGenreList] = useState<Resources.animeGenres[]>([]);
  const [pagination, setPagination] = useState<Resources.pagination | null>(null);
  const [filter, setFilter] = useState<getAnimeSearchTypes.request>({
    page: 1,
    limit: 12,
    q: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingGenres, setLoadingGenres] = useState<boolean>(false);
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
  const loadAnimeGenres = () => {
    getAnimeGenres({
      filter: 'genres',
    })
      .then((res) => {
        setGenreList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingGenres(false);
      });
  };
  const handleNextPage = () => {
    if (pagination?.has_next_page) {
      setFilter((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };
  const handlePrevPage = () => {
    if (pagination?.current_page) {
      if (pagination.current_page > 0) {
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
  const orderBy = (e: string) => {
    setFilter((prev) => ({ ...prev, order_by: e }));
  };
  const filterByGenre = (e: any) => {
    setFilter((prev) => ({ ...prev, genres: e.join(',') }));
  };
  const showDetail = (id: number) => {
    router.push(`/anime/${id}`);
  };
  useEffect(() => {
    loadAnimeList();
  }, [filter]);
  useEffect(() => {
    loadAnimeGenres();
  }, []);
  return (
    <Row gutter={[10, 10]}>
      <Col xs={24}>
        <Row gutter={[10, 10]} justify={'space-between'}>
          <Col>
            <Row gutter={[5, 5]} justify={'space-between'}>
              <Col>
                <Input
                  placeholder={'Search'}
                  onChange={handleSearchWithDebounce}
                  suffix={<SearchOutlined />}
                />
              </Col>
              <Col>
                <Select
                  loading={loadingGenres}
                  mode={'multiple'}
                  style={{
                    width: 180,
                  }}
                  placeholder={'Filter by Genre'}
                  options={genreList.map((e) => ({
                    label: e.name,
                    value: e.mal_id,
                  }))}
                  allowClear
                  onChange={filterByGenre}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row gutter={[10, 10]}>
              <Col xs={12}>
                <Button
                  onClick={handlePrevPage}
                  disabled={pagination?.current_page === 1}
                  icon={<FastBackwardFilled />}
                />
              </Col>
              <Col xs={12}>
                <Button
                  onClick={handleNextPage}
                  disabled={!pagination?.has_next_page}
                  icon={<FastBackwardFilled rotate={180} />}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      {loading && (
        <Col xs={24}>
          <Card loading />
        </Col>
      )}
      {!loading &&
        animeList.map((item) => (
          <Col xs={24} md={8} lg={6} xl={4} key={item.mal_id}>
            <Card
              hoverable
              onClick={() => showDetail(item.mal_id)}
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
