import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectNews, fetchNews } from 'src/store/News';

import NewsPage from './NewsPage';

const NewsPageContainer: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  return <NewsPage news={news} />;
};

export default NewsPageContainer;
NewsPageContainer.displayName = 'NewsPageContainer';
