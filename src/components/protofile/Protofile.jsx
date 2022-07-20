import './protofile.css'
import React from 'react'


const Protofile = () => {
  return (
    <section id='protofile'>
      <h5>My Recent Work</h5>
      <h2>Protofile</h2>
      <div className="container protofile__container">
        <article className='protofile__item'>
          <div className="protofile__image">
            <img src={'./assets/portfolio1.jpg'} alt="" />
            asd
          </div>
          <h3>title</h3>
          <a className='btn' href="https://github.com" target={'_blank'} rel="noopener noreferrer">GitHub</a>
          <a className='btn btn-primary' href="https://github.com" target={'_blank'} rel="noopener noreferrer">live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Protofile