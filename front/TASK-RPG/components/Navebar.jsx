import React from 'react'
import '../styles/Navebar.css'
import { HeartIcon } from '@heroicons/react/24/outline'



const Navebar = () => {
  return (
    <div>
      <div className='stats'>
        <h2>STATUS</h2>
      </div>
      <div className='dados'>
        <div>
          <h1>18</h1>
          <h3>Level</h3>

        </div>
        <div>
          <h5>Nome: David</h5>
          <h5>Apelido: Correia</h5>
        </div>
      </div>
    </div>
  )
}

export default Navebar
