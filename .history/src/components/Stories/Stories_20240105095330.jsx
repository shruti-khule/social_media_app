import React from 'react'
import harry from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/harry.jpeg'


const Stories = () => {
    const stories=[
        {
            id:1,
            name: "Harry Potter",
            image:{harry}
        },
        {
            id:2,
            name: "Harry Potter",
            image:{harry}
        },
        {
            id:3,
            name: "Harry Potter",
            image:{harry}
        },
        {
            id:4,
            name: "Harry Potter",
            image:{harry}
        },

    ]
  return (
    <div className='stories'>
        {stories.map(story=>(
            <div>
                <img src={stories.image} alt="" />
                <span>{stories.name}</span>
            </div>
        ))}</div>
  )
}

export default Stories