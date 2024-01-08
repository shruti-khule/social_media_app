import React from 'react'
import '../Comments/Comments.scss'
import ron from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Ron.jpeg'
import luna from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Luna.jpeg'

const Comments = () => {
    const comments=[
        {id:1,
         userId:1,
         name:"Ron Weasley",
         profilePic:ron,
         desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"

        },
        {id:2,
            userId:2,
            name:"Luna Lovegood",
            profilePic:luna,
            desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
   
           },

    ]
  return (
    <div className='comments'>
        {comments.map(comment=>(
            <div className='comment'>
                <div className='profilePic'>
                    <img src={ron} alt="" />
                    

                </div>

            </div>
        ))}

    </div>
  )
}
export default Comments