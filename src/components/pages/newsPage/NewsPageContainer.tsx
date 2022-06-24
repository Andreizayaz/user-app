import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrorAlert, setAlert } from 'src/store/ErrorAlert';
import { selectIsLoading } from 'src/store/Loading';

import { selectNews, fetchNews } from 'src/store/News';

import NewsPage from './NewsPage';

const NewsPageContainer: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const { isVisibleAlert } = useSelector(selectErrorAlert);

  useEffect(() => {
    dispatch(fetchNews());
    return () => {
      isVisibleAlert &&
        dispatch(setAlert({ isVisibleAlert: false, alertMessage: null }));
    };
  }, []);
  return <NewsPage news={news} isLoading={isLoading} />;
};

export default NewsPageContainer;
NewsPageContainer.displayName = 'NewsPageContainer';
