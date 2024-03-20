import React, { useContext } from 'react'
import '../LeftPanel/LeftPanel.scss'
import friends from '../../assets/friends.png'
import groups from '../../assets/groups.png'
import marketplace from '../../assets/marketplace.png'
import memories from '../../assets/memories.png'
import events from '../../assets/events.png'
import photos from '../../assets/photos.png'
import watch from '../../assets/watch.png'
import message from '../../assets/message.png'
import gaming from '../../assets/gaming.png'
import fundraiser from '../../assets/fundraiser.png'
import settings from '../../assets/settings.png'
import legal from '../../assets/legal.png'
import {AuthContext} from '../../context/authContext'



const LeftPanel = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className='LeftPanel'>
      <div className='container'>
        <div className='user'>
          <img src={currentUser.profile_pic} alt="" className='profile'/>
          <span>{currentUser.name}</span>
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
          <div className='menu_1'>
            <h5>Your Shortcuts</h5>
          <div className='items'>
            <img src={events} alt="" />
            <span>Events</span>

          </div>
          <div className='items'>
            <img src={photos} alt=""/>
            <span>Photos</span>

          </div>
          <div className='items'>
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className='items'>
            <img src={message} alt="" />
            <span>Messages</span>
          </div>
       
          </div>
          <div className='menu_1'>
            <h5>Others</h5>
          <div className='items'>
            <img src={gaming} alt="" />
            <span>Gaming</span>

          </div>
          <div className='items'>
            <img src={fundraiser} alt=""/>
            <span>Fundraiser</span>

          </div>
          <div className='items'>
            <img src={settings} alt="" />
            <span>Settings</span>
          </div>
          <div className='items'>
            <img src={legal} alt="" />
            <span>Legal & Policies</span>
          </div>
       
          </div>
      </div>
    </div>
  )
}
export default LeftPanel;
