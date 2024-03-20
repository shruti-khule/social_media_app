import React, { useContext, useState } from 'react'
import '../Comments/Comments.scss'
import { AuthContext } from '../../context/authContext'
import { makeRequest } from '../../axios'
import { useQuery } from '@tanstack/react-query'
import { useMutation,useQueryClient } from '@tanstack/react-query'
import moment from 'moment';



const Comments = ({post_id}) => {
    const {currentUser}=useContext(AuthContext)
    const [desc,setDesc]=useState("")
    const queryClient = useQueryClient();

    const mutation = useMutation((newComment)=>{

        return makeRequest.post("/comments",newComment)
        },
        {
        onSuccess : ()=> {
          queryClient.invalidateQueries(["comments"]);
        }
    })


    const { isLoading,error, data } = useQuery({
        queryKey: ["comments"],
        queryFn: async ()=>{
         const response= await makeRequest.get("/comments?post_id="+post_id);
        console.log("comment data",data)

         return response.data;
        }

        })

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
            <div className='comment'>
                <div className='profilePic'>
                    <img src={"/upload/"+comment.profilePic} alt="" />
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