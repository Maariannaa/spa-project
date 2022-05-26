// Common
import React from 'react'

// Styles
import classes from './Contact.module.scss'

// Icons
import { HiOutlinePhone, HiLocationMarker, HiOutlineMail } from 'react-icons/hi';

export default function Contact(){
  const style = (name) => classes[`contact-${name}`];
  const items = [
    {
      image: <HiLocationMarker size="2rem" />,
      title: 'Location:',
      text: 'London, United Kingdom',
    },
    {
      image: <HiOutlineMail size="2rem" />,
      title: 'Email:',
      text: 'info-travles-word@gmail.com',
    },
    {
      image: <HiOutlinePhone size="2rem" />,
      title: 'Telephone number:',
      text: '+1 113 345 5678 4567',
    }
  ];

  return(
    <section id="contact" className={classes.contact}>
      <div className={style('title')}>
        Contact us
      </div>
      <div className={style('form')}>
        {items.map((item, index) => {
          const { image, title, text } = item;
          return(
            <div
              key={index}
              className={style('form-row')}
            >
              {image}
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
};
