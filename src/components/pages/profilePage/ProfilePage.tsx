import { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import './ProfilePage.scss';

const ProfilePage: FC = (): ReactElement => (
  <>
    <Helmet>
      <title>Profile Page</title>
    </Helmet>
    <main className='profile'>
      <div className='profile__container'>
        <div className='profile__user user'>
          <div className='user__name'>
            <h2>Leanne Graham Bret</h2>
            <button className='user__btn'>View User Contacts</button>
          </div>
          <div className='user__inner-container'>
            <div className='user__contacts-and-company'>
              <div className='user__contacts contacts'>
                <h3 className='contacts__header'>User Contacts:</h3>
                <div className='contacts__group'>
                  <p className='contacts__heading'>Email:</p>
                  <a href='mailto:Sincere@april.biz'>Sincere@april.biz</a>
                </div>
                <div className='contacts__group'>
                  <p className='contacts__heading'>Address:</p>
                  <p>Gwenborough, Apt. 556, Kulas Light, 92998-3874</p>
                </div>
                <div className='contacts__group'>
                  <p className='contacts__heading'>Phone:</p>
                  <a href='tel:1-770-736-8031 x56442'>1-770-736-8031 x56442</a>
                </div>
                <div className='contacts__group'>
                  <p className='contacts__heading'>Website:</p>
                  <a
                    href='http://hildegard.org'
                    target='_blank'
                    rel='noreferrer'
                  >
                    hildegard.org
                  </a>
                </div>
              </div>
              <div className='user__company company'>
                <h3 className='company__header'>User Company:</h3>
                <div className='company__group'>
                  <p className='company__heading'>Name:</p>
                  <p>Romaguera-Crona</p>
                </div>
                <div className='company__group'>
                  <p className='company__heading'>Destination:</p>
                  <p>Multi-layered client-server neural-net</p>
                </div>
                <div className='company__group'>
                  <p className='company__heading'>BS:</p>
                  <p>harness real-time e-markets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='user__posts posts'>
          <h3 className='posts__heading'>User Posts:</h3>
          <ul className='posts__posts-list'>
            <li className='posts-list__item list-item'>
              <h4 className='list-item__title'>
                <span className='post-number'>Post #1</span>
                <span className='post-title'>
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
            <li className='posts-list__item list-item'>
              <h4 className='list-item__title'>
                <span>Post #1</span>
                <span>
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
            <li className='posts-list__item list-item'>
              <h4 className='list-item__title'>
                <span>Post #1</span>
                <span>
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
            <li className='posts-list__item list-item'>
              <h4 className='list-item__title'>
                <span>Post #1</span>
                <span>
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
            <li className='posts-list__item list-item'>
              <h4 className='list-item__title'>
                <span>Post #1</span>
                <span>
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
      </div>
    </main>
  </>
);

export default ProfilePage;
ProfilePage.displayName = 'ProfilePage';
