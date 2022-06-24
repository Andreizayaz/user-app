import { FC, ReactElement } from 'react';

import { cardType, classesType } from './types';

type CardPropsTypes = {
  classes: classesType;
  cardType: string;
  cardNumber: number;
  card: cardType;
};

const Card: FC<CardPropsTypes> = ({
  classes: { cardNumberClasses, headingClasses, titleClasses, bodyClasses },
  cardType,
  cardNumber,
  card
}): ReactElement => (
  <div>
    <h4 className={headingClasses}>
      <span className={cardNumberClasses}>
        {cardType} #{cardNumber}
      </span>
      <span className={titleClasses}>{card.title}</span>
    </h4>
    <p className={bodyClasses}>{card.body}</p>
  </div>
);

export default Card;
Card.displayName = 'Card';
