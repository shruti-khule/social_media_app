import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'

export const Likes = ({post_id}) => {

    const { isLoading, error, data } = useQuery({
        queryKey: ["likes"],
        queryFn: async ()=>{
             const response= await makeRequest.get("/likes?post_id="+post_id);
             console.log("This is post id",post_id)
             console.log("this is response from likes",response.data)
             return response.data;
    
            }
    
        })


  return (
    <div>Likes</div>
  )
}



