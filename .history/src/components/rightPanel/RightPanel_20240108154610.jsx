import React from 'react'
import '../RightPanel/RightPanel.scss'
import harry from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/harry.jpeg'
import ron from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Ron.jpeg'
import luna from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Luna.jpeg'
import draco from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Draco.jpeg'


const rightPanel = () => {
  return (
    <div className='rightPanel'> 
     <div className='container'>
      <div className='item'>
        <span className='title'>Suggestions For You</span>
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
          <img src={ron} alt="" className='profile' />
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
          <img src={ron} alt="" className='profile' />
          <p>
          <span>Ron Weasly</span> liked your photo.
          </p>
        </div>
        <span className='notification'>2 min ago</span>
        </div>

        <div className='user'>
        <div className='userInfo'>
          <img src={ron} alt="" className='profile' />
          <p>
          <span>Ron Weasly</span> changed his profile picture.
          </p>
        </div>
        <span className='notification'>2 min ago</span>

        </div>
        <div className='user'>
        <div className='userInfo'>
          <img src={luna} alt="" className='profile' />
          <p>
          <span>Luna Lovegood</span> commented on your profile picture.
          </p>
        </div>
        <span className='notification'>5 min ago</span>

        </div>
        <div className='user'>
        <div className='userInfo'>
          <img src={draco} alt="" className='profile' />
          <p>
          <span>Draco Malfoy</span> started following you.
          </p>
        </div>
        <span className='notification'>10 min ago</span>

        </div>
      </div>
      <div className='item'>
        <span className='title'>Online Friends</span>
        <div className='user'>
        <div className='userInfo'>
          <img src={harry} alt="" className='profile' />
          <div className='online' />
          <span>Harry Potter</span>
        </div>
        </div>
        <div className='user'>
        <div className='userInfo'>
          <img src={ron} alt="" className='profile' />
          <div className='online' />
          <span>Ron Weasly</span>
        </div>
        </div>
        <div className='user'>
        <div className='userInfo'>
          <img src={luna} alt="" className='profile' />
          <div className='online' />
          <span>Luna Lovegood</span>
        </div>
        </div>
        <div className='user'>
        <div className='userInfo'>
          <img src={draco} alt="" className='profile' />
          <div className='online' />
          <span>Draco Malfoy</span>
        </div>
        </div>


      </div>


    </div>
    </div>
  )
}

export default rightPanel
