import { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { Loader, Card, ContactCard } from 'src/components/common';

import { currentUserType } from 'src/store/CurrentUser';
import { newsType } from 'src/store/News';

import { getUserContacts, getUserCompanyContacts } from './helpers';

import './ProfilePage.scss';

type ProfilePagePropsType = {
  userData: currentUserType | null;
  posts: newsType[] | undefined;
  isLoading: boolean;
  handleClick: () => void;
  isShowUserContacts: boolean;
};

const ProfilePage: FC<ProfilePagePropsType> = ({
  userData,
  posts,
  isLoading,
  handleClick,
  isShowUserContacts
}): ReactElement => {
  return (
    <>
      <Helmet>
        <title>
          {isLoading ? 'Loading...' : userData?.name || ''} | Profile
        </title>
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
                  <button className='user__btn' onClick={handleClick}>
                    {isShowUserContacts ? 'Hide' : 'View'} User Contacts
                  </button>
                </div>
                <div className='user__inner-container'>
                  <div
                    className={
                      isShowUserContacts
                        ? 'user__contacts-and-company contacts-visible'
                        : 'user__contacts-and-company'
                    }
                  >
                    <div className='user__contacts contacts'>
                      <h3 className='contacts__header'>User Contacts:</h3>
                      {getUserContacts(userData).map((item) => (
                        <ContactCard
                          key={item.headingText}
                          classes={{
                            divClasses: 'contacts__group',
                            textClasses: 'contacts__heading'
                          }}
                          labelText={item.headingText}
                          link={{
                            linkAddress: item.href,
                            linkText: item.linkText
                          }}
                        />
                      ))}
                    </div>
                    <div className='user__company company'>
                      <h3 className='company__header'>User Company:</h3>
                      {getUserCompanyContacts(userData).map((item) => (
                        <ContactCard
                          key={item.infoText}
                          classes={{
                            divClasses: 'company__group',
                            textClasses: 'company__heading'
                          }}
                          labelText={item.headingText}
                          infoText={item.infoText}
                        />
                      ))}
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
                        <Card
                          classes={{
                            headingClasses: 'list-item__title',
                            cardNumberClasses: 'post-number',
                            titleClasses: 'post-title',
                            bodyClasses: 'list-item__body'
                          }}
                          cardType='Post'
                          cardNumber={index + 1}
                          card={item}
                        />
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
