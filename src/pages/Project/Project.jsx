import React from 'react'
import Portfolio from '../../components/Portfolio/Portfolio'

const description = "За час моєї карєри в Front End було зроблено багато проектів, на цій сторінці наймаштабніші та найкрасивіші."

const Project = () => {
  return (
    <section className='section'>
      <div className="container container__project">
        <Portfolio desc={description} />
      </div>
    </section>
  )
}

export default Project