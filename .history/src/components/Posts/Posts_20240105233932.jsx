import React from 'react'
import '../Posts/Posts.scss'
import draco from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Draco.jpeg'


export const Posts = () => {
    const posts=[
        {
            id:1,
            name:"Draco Mlafoy",
            profilePic:draco,
            description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            image:draco

        },
        {
            id:2,
            name:"Draco Mlafoy",
            profilePic:draco,
            description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            image:draco

        }
    ]
  return (
    <div className='posts'>
        {posts.map(post=>(
            <div className='post'>
                <div className='user'>
                <img src={post.profilePic} className='profile' alt=""></img>
                <span>{post.name}</span>
                </div>
                <img src={post.image} alt=""></img>
                <p>{post.description}</p>

            </div>

        ))}
        
        </div>
  )
}
