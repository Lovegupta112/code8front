import React from 'react'
import './Aboutcode8.css'

const About2 = () => {
  return (
    <div className='Aboutcode8'>
      <div className='About-heading'
      style={{
          width: '70%',
          textAlign: 'center'
      }}>
        {/* Enabling community led peer to peer learning like never before.. */}
        Get the company like experiential learning right from your college and Hone your skills like never before
      </div>
      <div className='Aboutcode-Body'>
        {/* <div className='About-heading-2 aboutcode-right'>
          Code8 is an experiential learning platform driven by the energy of
          code and ideas to harness the power of innovation in learners.We are
          building a culture to work on projects while getting upskilled with
          industry relevant learnings and experience.
        </div> */}
        <div className='aboutcode-left'>
          <div className='About-List'>
            <div className='About-list-item'>
              
              <i className=' A1 fa-solid fa-magnifying-glass'> </i>
              <span>
                learn industry relevent skill live with mentors from industry
              </span>
            </div>
            <div className='About-list-item'>
              
              <i className=' A2 fa-solid fa-hammer'> </i>
              <span>Build value added projects and hone your skills.</span>
            </div>
            <div className='About-list-item'>
              
              <i className=' A3 fa-solid fa-people-roof'> </i>
              <span>
                interact with professionals and peers and build meaningful
                relations
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About2
