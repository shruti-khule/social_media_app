import React from 'react'
import '../Posts/Posts.scss'
import draco from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Draco.jpeg'
import { Link } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';



export const Posts = () => {
    const liked=false;

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
                    <div className='userInfo'>
                        <div className='profilePic'>
                            <img src={post.profilePic} className='profile' alt=""></img>
                        </div>
                        <div className='details'>
                            <Link>
                                <span>{post.name}</span>

                            </Link>

                            <span>1 min ago</span>
                        </div>

                    </div>
                    <MoreHorizIcon/>

                </div>
                <div className='postInfo'>
                    <img src={post.image} alt=""></img>
                    <p>{post.description}</p>
                    
                </div>
                <div className='buttons'>
                        <FavoriteBorderIcon/>
                        <ModeCommentOutlinedIcon/>
                        <ShareOutlinedIcon/>
                </div>

            </div>

        ))}
        
        </div>
  )
}
