import React, { useContext } from 'react'
import harry from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/harry.jpeg'
import ron from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Ron.jpeg'
import luna from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Luna.jpeg'
import draco from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Draco.jpeg'
import Hermione from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Hermione.jpeg'

import '../Stories/Stories.scss'
import { AuthContext } from '../../context/authContext'


const Stories = () => {

    const {currentUser}=useContext(AuthContext)
    console.log({currentUser})

    const stories=[
        {
            id:1,
            name: "Ron Weasley",
            image:Hermione
        },
        {
            id:2,
            name: "Luna Lovegood",
            image:luna
        },
        {
            id:3,
            name: "Draco Malfoy",
            image:draco
        },
        {
            id:4,
            name: "Harry Potter",
            image:harry
        },

    ]
  return (
    <div className='stories'>
         <div className='story'> 
                <img src={currentUser.profile_pic} alt="" />
                <span>Your Story</span>
                <button>+</button>
            </div>
        {stories.map(story=>(
            <div key={story.id} className='story'> 
                <img src={story.image} alt="" />
                <span>{story.name}</span>
            </div>
        ))}</div>
  )
}

export default Stories