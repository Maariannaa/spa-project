// Common
import React from 'react';

// Styles
import classes from './Footer.module.scss';

export default function Footer(){
  return(
    <div className={classes.footer}>
      Copyright {new Date().getFullYear()} | D3 | All Rights Reserved
    </div>
  );
};
