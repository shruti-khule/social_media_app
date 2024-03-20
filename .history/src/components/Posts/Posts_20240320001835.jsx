import React, { useState } from 'react'
import '../Posts/Posts.scss'
import draco from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Draco.jpeg'
import { Link } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Comments from '../Comments/Comments';
import {useQuery} from '@tanstack/react-query'
import { makeRequest } from '../../axios';
import moment from 'moment';
import { Likes } from '../Likes/Likes';


export const Posts = ({user_id,totalComments}) => {
    const [commentOpen,setCommentOpen]=useState(false)

    const { isLoading, error, data } = useQuery({
        queryKey: ["posts"],
        queryFn: async ()=>{
         const response= await makeRequest.get("/posts?user_id="+user_id);
         console.log("data for posts",data)
         return response.data;

        }

    })

    

        
   
  return (
    <div className='posts'>
        { error? "Something went wrong!" :(isLoading? "Loading":
        data.map( (post)=>
        <div className='post' key={post.posts_id}>
                <div className='user'>
                    <div className='userInfo'>
                        <div className='profilePic'>
                            <img src={"/upload/"+post.profile_pic} className='profile' alt=""></img>
                        </div>
                        <div className='details'>
                            <Link className='name' to={`/profile/${post.user_id}`}>
                                <span>{post.name}</span>

                            </Link>

                            <span>{moment(post.created_at).fromNow()}</span>
                        </div>

                    </div>
                    <MoreHorizIcon/>

                </div>
                <div className='postInfo'>
                     <img src={"/upload/" + post.image} alt=""/>

                    <p>{post.desc}</p>
                    
                </div>
                <div className='buttons'>
                    <div className='item'>
                        <Likes post_id={post.posts_id}/>
                       
                    </div>
                    <div className='item' onClick={()=>setCommentOpen(!commentOpen)}>                        
                        <ModeCommentOutlinedIcon/>
                        10 Comments{totalComments} 
                    </div>
                    <div className='item'>
                        <ShareOutlinedIcon/> Share
                    </div>

                </div>
                {commentOpen && <Comments post_id={post.posts_id}/>}

            </div>


        ))
        
        
        
        }
        
        </div>
  )
}
