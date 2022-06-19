import { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import './NewsPage.scss';

const NewsPage: FC = (): ReactElement => (
  <>
    <Helmet>
      <title>News Page</title>
    </Helmet>
    <main className='news'>
      <div className='news__container'>
        <h3 className='news__heading'>News:</h3>
        <ul className='news__news-list'>
          <li className='news-list__item list-item'>
            <h4 className='list-item__title'>
              <span className='news-number'>News #1</span>
              <span className='news-title'>
                sunt aut facere repellat provident occaecati excepturi optio
                reprehenderit
              </span>
            </h4>
            <p className='list-item__body'>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </p>
          </li>
          <li className='news-list__item list-item'>
            <h4 className='list-item__title'>
              <span className='news-number'>News #1</span>
              <span className='news-title'>
                sunt aut facere repellat provident occaecati excepturi optio
                reprehenderit
              </span>
            </h4>
            <p className='list-item__body'>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </p>
          </li>
          <li className='news-list__item list-item'>
            <h4 className='list-item__title'>
              <span className='news-number'>News #1</span>
              <span className='news-title'>
                sunt aut facere repellat provident occaecati excepturi optio
                reprehenderit
              </span>
            </h4>
            <p className='list-item__body'>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </p>
          </li>
          <li className='news-list__item list-item'>
            <h4 className='list-item__title'>
              <span className='news-number'>News #1</span>
              <span className='news-title'>
                sunt aut facere repellat provident occaecati excepturi optio
                reprehenderit
              </span>
            </h4>
            <p className='list-item__body'>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </p>
          </li>
          <li className='news-list__item list-item'>
            <h4 className='list-item__title'>
              <span className='news-number'>News #1</span>
              <span className='news-title'>
                sunt aut facere repellat provident occaecati excepturi optio
                reprehenderit
              </span>
            </h4>
            <p className='list-item__body'>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </p>
          </li>
        </ul>
      </div>
    </main>
  </>
);

export default NewsPage;
NewsPage.displayName = 'NewsPage';
