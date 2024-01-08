import React from 'react'
import harry from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/harry.jpeg'
import '../Stories/Stories.scss'
import { authContext } from '../../context/authContext'


const Stories = () => {
    const stories=[
        {
            id:1,
            name: "Harry Potter",
            image:harry
        },
        {
            id:2,
            name: "Harry Potter",
            image:harry
        },
        {
            id:3,
            name: "Harry Potter",
            image:harry
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
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story=>(
            <div className='story'> 
                <img src={story.image} alt="" />
                <span>{story.name}</span>
                <button>+</button>
            </div>
        ))}</div>
  )
}

export default Stories