import { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { Loader } from 'src/components/common';

import { userType } from 'src/store/Friends';
import { newsType } from 'src/store/News';

import './ProfilePage.scss';

type ProfilePagePropsType = {
  userData: userType | null;
  posts: newsType[] | undefined;
  isLoading: boolean;
};

const ProfilePage: FC<ProfilePagePropsType> = ({
  userData,
  posts,
  isLoading
}): ReactElement => {
  return (
    <>
      <Helmet>
        <title>Profile Page</title>
      </Helmet>
      <main className='profile'>
        {isLoading ? (
          <Loader />
        ) : (
          userData && (
            <div className='profile__container'>
              <div className='profile__user user'>
                <div className='user__name'>
                  <h2>{userData.name}</h2>
                  <button className='user__btn'>View User Contacts</button>
                </div>
                <div className='user__inner-container'>
                  <div className='user__contacts-and-company'>
                    <div className='user__contacts contacts'>
                      <h3 className='contacts__header'>User Contacts:</h3>
                      <div className='contacts__group'>
                        <p className='contacts__heading'>Email:</p>
                        <a href='mailto:Sincere@april.biz'>{userData.email}</a>
                      </div>
                      <div className='contacts__group'>
                        <p className='contacts__heading'>Address:</p>
                        <p>
                          {Object.values(userData.address)
                            .map((item) => (item !== 'geo' ? item : ''))
                            .join(', ')}
                        </p>
                      </div>
                      <div className='contacts__group'>
                        <p className='contacts__heading'>Phone:</p>
                        <a href='tel:1-770-736-8031 x56442'>{userData.phone}</a>
                      </div>
                      <div className='contacts__group'>
                        <p className='contacts__heading'>Website:</p>
                        <a
                          href='http://hildegard.org'
                          target='_blank'
                          rel='noreferrer'
                        >
                          {userData.website}
                        </a>
                      </div>
                    </div>
                    <div className='user__company company'>
                      <h3 className='company__header'>User Company:</h3>
                      <div className='company__group'>
                        <p className='company__heading'>Name:</p>
                        <p>{userData.company.name}</p>
                      </div>
                      <div className='company__group'>
                        <p className='company__heading'>Destination:</p>
                        <p>{userData.company.catchPhrase}</p>
                      </div>
                      <div className='company__group'>
                        <p className='company__heading'>BS:</p>
                        <p>{userData.company.bs}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='user__posts posts'>
                <h3 className='posts__heading'>User Posts:</h3>
                <ul className='posts__posts-list'>
                  {posts &&
                    posts.map((item, index) => (
                      <li key={item.id} className='posts-list__item list-item'>
                        <h4 className='list-item__title'>
                          <span className='post-number'>Post #{index + 1}</span>
                          <span className='post-title'>{item.title}</span>
                        </h4>
                        <p className='list-item__body'>{item.body}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          )
        )}
      </main>
    </>
  );
};

export default ProfilePage;
ProfilePage.displayName = 'ProfilePage';
