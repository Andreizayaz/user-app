import { FC, ReactElement } from 'react';
import { classesTypes, linkTypes } from './type';

type ContactCardPropsTypes = {
  classes: classesTypes;
  labelText: string;
  link?: linkTypes;
  infoText?: string;
};

const ContactCard: FC<ContactCardPropsTypes> = ({
  classes: { divClasses, textClasses },
  labelText,
  link,
  infoText
}): ReactElement => (
  <div className={divClasses}>
    <p className={textClasses}>{labelText}:</p>
    {link ? (
      <a href={link.linkAddress} target='_blank' rel='noreferrer'>
        {link.linkText}
      </a>
    ) : (
      <p>{infoText}</p>
    )}
  </div>
);

export default ContactCard;
ContactCard.displayName = 'ContactCard';
