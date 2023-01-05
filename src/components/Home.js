import React from 'react'
import img from '../assets/1.png'

const Home = () => {
  return (
    <div className="home">
      <h2 className="Welcome" data-text="Welcome...">
        Welcome...
      </h2>
      {/* background image */}
      <img src={img} alt="Graphics" />
    </div>
  )
}

export default Home
