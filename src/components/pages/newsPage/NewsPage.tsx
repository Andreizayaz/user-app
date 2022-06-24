import { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { Loader, Card } from 'src/components/common';

import { newsType } from 'src/store/News';

import './NewsPage.scss';

type NewsPagePropsType = {
  news: newsType[] | null;
  isLoading: boolean;
};

const NewsPage: FC<NewsPagePropsType> = ({ news, isLoading }): ReactElement => (
  <>
    <Helmet>
      <title>News Page</title>
    </Helmet>
    <main className='news'>
      <div className='news__container'>
        <h3 className='news__heading'>News:</h3>
        {isLoading ? (
          <Loader />
        ) : (
          news && (
            <ul className='news__news-list'>
              {news?.map((item) => (
                <li key={item.id} className='news-list__item list-item'>
                  <Card
                    card={item}
                    classes={{
                      headingClasses: 'list-item__title',
                      cardNumberClasses: 'news-number',
                      titleClasses: 'news-title',
                      bodyClasses: 'list-item__body'
                    }}
                    cardNumber={item.id}
                    cardType='News'
                  />
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    </main>
  </>
);

export default NewsPage;
NewsPage.displayName = 'NewsPage';
