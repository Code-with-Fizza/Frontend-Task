import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import TmqCard from './TmqCard'

const Tmq = () => {
  return (
    <>
          <div className="list">
              <Sidebar />
              <div className="listContainer">
                  <Navbar />
                 
                  <TmqCard/>
              </div>
          </div>
    </>
  )
}

export default Tmq