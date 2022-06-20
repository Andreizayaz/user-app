import { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import { newsType } from 'src/store/News';

import './NewsPage.scss';

type NewsPagePropsType = {
  news: newsType[];
};

const NewsPage: FC<NewsPagePropsType> = ({ news }): ReactElement => (
  <>
    <Helmet>
      <title>News Page</title>
    </Helmet>
    <main className='news'>
      <div className='news__container'>
        <h3 className='news__heading'>News:</h3>
        <ul className='news__news-list'>
          {news.map((item) => (
            <li key={item.id} className='news-list__item list-item'>
              <h4 className='list-item__title'>
                <span className='news-number'>News #{item.id}</span>
                <span className='news-title'>{item.title}</span>
              </h4>
              <p className='list-item__body'>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  </>
);

export default NewsPage;
NewsPage.displayName = 'NewsPage';
