// Common
import React from 'react'

// Styles
import classes from './Home.module.scss'

export default function Home(){
  const style = (name) => classes[`home-${name}`]

  return(
    <section id="home" className={classes.home}>
      <div className={style('title')}>
        <h3> TRAVELS </h3>
      </div>
      <div className={style('text')}>
        <p>
          Most people like <b> a change </b>.
          If they live in the country they like to go to a big town and
          spend their time looking at <b> the shop windows and visiting cinemas,
          theatres and museums</b>.
        </p>
        <p>
          If they live in the city, they like to go <b>the some quiet place in the hills or by the sea</b>,
          do nothing but <b>walking, swimming or lying in the sun</b>.
        </p>
      </div>
      <button
        className={style('button')}
        type="submit"
      >
        CHOOSE PLACE
      </button>
    </section>
  )
}
