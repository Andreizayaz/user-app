import { FC, ReactElement } from 'react';

import './Footer.scss';

const Footer: FC = (): ReactElement => (
  <footer className='footer'>
    <div className='footer__container container'>
      <div className='footer__info'>info</div>
    </div>
  </footer>
);

export default Footer;
Footer.displayName = 'Footer';
