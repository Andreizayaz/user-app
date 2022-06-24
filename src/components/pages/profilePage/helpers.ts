import { currentUserType } from 'src/store/CurrentUser';
import { userContactsTypes, userCompanyContactsTypes } from './types';

export const getUserContacts = (
  currentUser: currentUserType
): userContactsTypes[] => [
  {
    headingText: 'Email',
    href: currentUser && `mailto:${currentUser.email}`,
    linkText: currentUser?.email
  },
  {
    headingText: 'Address',
    href:
      currentUser &&
      `https://maps.google.com/?ll=${currentUser.address.geo.lat},${currentUser.address.geo.lng}`,
    linkText:
      currentUser &&
      Object.entries(currentUser.address)
        .filter((item) => item[0] !== 'geo')
        .map((item) => item[1])
        .join(', ')
  },
  {
    headingText: 'Phone',
    href: currentUser && `tel:${currentUser.phone}`,
    linkText: currentUser?.phone
  },
  {
    headingText: 'Website',
    href: currentUser && `http://${currentUser.website}`,
    linkText: currentUser?.website
  }
];

export const getUserCompanyContacts = (
  currentUser: currentUserType
): userCompanyContactsTypes[] => [
  {
    headingText: 'Name',
    infoText: currentUser.company.name
  },
  {
    headingText: 'Destination',
    infoText: currentUser.company.catchPhrase
  },
  {
    headingText: 'BS',
    infoText: currentUser.company.bs
  }
];
