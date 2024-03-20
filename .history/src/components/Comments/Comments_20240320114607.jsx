import React, { useContext, useState } from 'react'
import '../Comments/Comments.scss'
import { AuthContext } from '../../context/authContext'
import { makeRequest } from '../../axios'
import { useQuery } from '@tanstack/react-query'
import { useMutation,useQueryClient } from '@tanstack/react-query'
import moment from 'moment';



const Comments = ({post_id,setCommentData}) => {
    const {currentUser}=useContext(AuthContext)
    const [desc,setDesc]=useState("");

    const queryClient = useQueryClient();

    const mutation = useMutation((newComment)=>{

        return makeRequest.post("/comments",newComment)
        },
        {
        onSuccess : ()=> {
          queryClient.invalidateQueries(["comments",post_id]);
        }
    })


    const { isLoading,error, data } = useQuery({
        queryKey: ["comments",post_id],
        queryFn: async ()=>{
         const response= await makeRequest.get("/comments?post_id="+post_id);
        console.log("comment data",response.data)

         setCommentData(response.data.length)

         return response.data;
        }

        })
        //const totalComments=data.length

    const handleClick=(e)=>{
        e.preventDefault()
        mutation.mutate({desc,post_id})
        setDesc("")


    }
    
  return (
    <div className='comments'>
        <div className='write'>
            <img src={"/upload/"+currentUser.profile_pic} alt="" />
            <input type="text" placeholder='Write a Comment...' 
            onChange={(e)=>setDesc(e.target.value)
            }
            value={desc}
            />
            <button onClick={handleClick}>Send</button>
            

        </div>
        {isLoading ? "Loading" :
         data.map(comment=>(
            <div className='comment' key={comment.comment_id}>
                <div className='profilePic'>
                    <img src={"/upload/"+comment.profile_pic} alt="" />
                </div>
                <div className='info'>
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>

                </div>
                <div className='time'>
                    <span>{moment(comment.createdAt).fromNow()}</span>

                </div>

            </div>
        ))}

    </div>
  )
}
export default Comments