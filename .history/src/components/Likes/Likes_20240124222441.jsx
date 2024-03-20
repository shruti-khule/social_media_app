import React from 'react'
import { useQuery } from '@tanstack/react-query'

export const Likes = () => {

    const { isLoading, error, data } = useQuery({
        queryKey: ["likes"],
        queryFn: async ()=>{
             const response= await makeRequest.get("/likes");
             console.log("this is response from posts",response.data)
             return response.data;
    
            }
    
        })


  return (
    <div>Likes</div>
  )
}



