import React from 'react'
import '../RightPanel/RightPanel.scss'
import harry from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/harry.jpeg'


const rightPanel = () => {
  return (
    <div className='rightPanel'> 
     <div className='container'>
      <div className='item'>
        <span>Suggestions For You</span>
        <div className='userInfo'>
          <img src={harry} alt="" />
          <span>Harry Potter</span>
        </div>



      </div>


    </div>
    </div>
  )
}

export default rightPanel
