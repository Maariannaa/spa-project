// Common
import React from 'react';

// Styles
import classes from './Header.module.scss';

// Icons
import Logo from '../../assets/images/logo.svg';

export default function Header(){
  const links = [
    {
      href: '#home',
      title: 'Home',
    },
    {
      href: '#tour',
      title: 'Tour',
    },
    {
      href: '#gallery',
      title: 'Gallery',
    },
    {
      href: '#blog',
      title: 'Blog',
    },
    {
      href: '#contact',
      title: 'Contact us',
    }
  ];

  const style = (name) => classes[`header-${name}`]

  return(
    <div className={classes.header}>
      <img
        className={style('logo')}
        src={Logo}
        alt="logo"
      />
      <div className={style('links')}>
        {links.map(link =>
          <a
            href={link.href}
            key={link.title}
            className={style('links-link')}
          >
            {link.title}
          </a>
        )}
      </div>
    </div>
  );
};
