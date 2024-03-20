import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import { AuthContext } from '../../context/authContext'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useQueryClient, useMutation } from '@tanstack/react-query';

export const Likes = ({post_id}) => {
    const {currentUser}=useContext(AuthContext)

    const { isLoading, error, data } = useQuery({
        queryKey: ["likes",post_id],
        queryFn: async ()=>{
             const response= await makeRequest.get("/likes?post_id="+post_id);
             return response.data;
    
            }
    
    })

    const queryClient = useQueryClient();

    const mutation = useMutation((liked)=>{
        if (liked)
            return makeRequest.delete("/likes?post_id="+post_id);
        return makeRequest.post("/likes",{post_id:post_id})

        },
        {
        onSuccess : ()=> {
          queryClient.invalidateQueries(["likes"]);
        }
    })

    const handleClick=()=>{
        mutation.mutate(data.includes(currentUser.user_id))

    }


  return (
    <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
        {data && data.includes(currentUser.user_id)? <FavoriteOutlinedIcon style={{color:"red"}} onClick={handleClick}/>
        :<FavoriteBorderIcon onClick={handleClick}/>

        }
        
        {data && data.length} Likes</div>
  )
}



