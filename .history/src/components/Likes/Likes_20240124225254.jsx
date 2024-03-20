import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import { AuthContext } from '../../context/authContext'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


export const Likes = ({post_id}) => {
    const {currentUser}=useContext(AuthContext)

    const { isLoading, error, data } = useQuery({
        queryKey: ["likes",post_id],
        queryFn: async ()=>{
             const response= await makeRequest.get("/likes?post_id="+post_id);
             console.log("This is post id",post_id)
             console.log("this is response from likes",response.data)
             return response.data;
    
            }
    
        })


  return (
    <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
        {data.includes(currentUser.user_id)? <FavoriteOutlinedIcon/>:<FavoriteBorderIcon/>

        }
        
        
        {data && data.length} Likes</div>
  )
}



