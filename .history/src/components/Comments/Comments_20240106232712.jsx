import React, { useContext } from 'react'
import '../Comments/Comments.scss'
import ron from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Ron.jpeg'
import luna from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Luna.jpeg'
import { authContext } from '../../context/authContext'

const Comments = () => {
    const {currentUser}=useContext(authContext)
    const comments=[
        {id:1,
         userId:1,
         name:"Ron Weasley",
         profilePic:ron,
         description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"

        },
        {id:2,
            userId:2,
            name:"Luna Lovegood",
            profilePic:luna,
            description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
   
           },

    ]
  return (
    <div className='comments'>
        <div className='write'>
            <img src={luna} alt="" />
            <span>Luna Lovegood</span>

        </div>
        {comments.map(comment=>(
            <div className='comment'>
                <div className='profilePic'>
                    <img src={comment.profilePic} alt="" />
                </div>
                <div className='info'>
                    <span>{comment.name}</span>
                    <p>{comment.description}</p>

                </div>
                <div className='time'>
                    <span>3 hours ago</span>

                </div>

            </div>
        ))}

    </div>
  )
}
export default Comments