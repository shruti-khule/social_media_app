import React from 'react'

const LeftPanel = () => {
  return (
    <div>LeftPanel
      <div className='container'>
        <div className='user'>
          <img src={profile} alt="" className='profile'/>
          <span>Hermione Granger</span>
        </div>
      </div>
    </div>
  )
}
export default LeftPanel;
