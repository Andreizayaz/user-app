import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'src/store/Loading';

import { selectNews, fetchNews } from 'src/store/News';

import NewsPage from './NewsPage';

const NewsPageContainer: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  return <NewsPage news={news} isLoading={isLoading} />;
};

export default NewsPageContainer;
NewsPageContainer.displayName = 'NewsPageContainer';
