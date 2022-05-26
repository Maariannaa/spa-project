// Common
import React from 'react'

// Styles
import classes from './Tours.module.scss'

// Images
import Windsor from '../../assets/images/windsor.jpg'
import Vietnam from '../../assets/images/vietnam.jpg'
import Venezia from '../../assets/images/venezia.jpg'
import Jordan from '../../assets/images/jordan.jpg'

export default function Tours(){
  const style = (name) => classes[`tours-${name}`]

  const tours = [
    {
      title: 'Windsor, England | Windsor castle',
      image: Windsor,
    },
    {
      title: 'Petra, Jordan | Tree Family Shining',
      image: Jordan,
    },
    {
      title: 'Venezia, Italy | Rialto Bridge',
      image: Venezia,
    },
    {
      title: 'Hai Phong, Vietnam | Lan Ha Bay',
      image: Vietnam,
    },
  ]

  return(
    <section id="tours" className={classes.tours}>
      <div className={style('title')}>
        TOURS
      </div>
      <div className={style('gallery')}>
        {tours.map((tour) => {
          const { image, title } = tour
          return (
            <div
              key={title}
              className={style('gallery-slide')}>
              <img
                className={style('gallery-slide-images-director')}
                src={image}
                alt="director"
              />
              <h3>{title}</h3>
            </div>
          )
        })}
      </div>
      <div className={style('contact')}>
        <div>
          VISIT US
        </div>
        <i>
          travals-into-world.com
        </i>
      </div>
    </section>
  )
}
