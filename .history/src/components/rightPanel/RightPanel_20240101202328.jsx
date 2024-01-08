import React from 'react'
import '../RightPanel/RightPanel.scss'
import harry from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/harry.jpeg'


const rightPanel = () => {
  return (
    <div className='rightPanel'> 
     <div className='container'>
      <div className='item'>
        <span>Suggestions For You</span>
        <div className='user'>
        <div className='userInfo'>
          <img src={harry} alt="" className='profile' />
          <span>Harry Potter</span>
        </div>
        <div className='buttons'>
          <button className='button1'>Follow</button>
          <button className='button2'>Dismiss</button>
          </div>
        </div>
        <div className='user'>
        <div className='userInfo'>
          <img src={harry} alt="" className='profile' />
          <span>Ron Weasly</span>
        </div>
        <div className='buttons'>
          <button className='button1'>Follow</button>
          <button className='button2'>Dismiss</button>
          </div>
        </div>


      </div>
      <div className='item'>
        <span>Latest Activities</span>
        <div className='user'>
        <div className='userInfo'>
          <img src={harry} alt="" className='profile' />
          <p>
          <span>Ron Weasly</span> liked your photo.
          </p>
        </div>
        <span className='notification'>2 min ago</span>
        </div>

        <div className='user'>
        <div className='userInfo'>
          <img src={harry} alt="" className='profile' />
          <p>
          <span>Ron Weasly</span> changed his profile picture.
          </p>
        </div>
        <span className='notification'>2 min ago</span>

        </div>

      </div>


    </div>
    </div>
  )
}

export default rightPanel
