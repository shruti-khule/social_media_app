import React from 'react'
import profile from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/profile.jpeg'
import '../LeftPanel/LeftPanel.scss'
import friends from '../../assets/friends.png'
import groups from '../../assets/groups.png'
import marketplace from '../../assets/marketplace.png'
import memories from '../../assets/memories.png'




const LeftPanel = () => {
  return (
    <div className='LeftPanel'>
      <div className='container'>
        <div className='user'>
          <img src={profile} alt="" className='profile'/>
          <span>Hermione Granger</span>
        </div>
        <div className='menu_1'>
          <div className='items'>
            <img src={friends} alt="" />
            <span>Friends</span>

          </div>
          <div className='items'>
            <img src={groups} alt=""/>
            <span>Groups</span>

          </div>
          <div className='items'>
            <img src={marketplace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className='items'>
            <img src={memories} alt=""/>
            <span>Memories</span>
          </div>
          </div>
          <div className='menu_2'>
          <div className='items'>
            <img src={friends} alt="" />
            <span>Friends</span>

          </div>
          <div className='items'>
            <img src={groups} alt=""/>
            <span>Groups</span>

          </div>
          <div className='items'>
            <img src={marketplace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className='items'>
            <img src={memories} alt=""/>
            <span>Memories</span>
          </div>
          </div>
      </div>
    </div>
  )
}
export default LeftPanel;