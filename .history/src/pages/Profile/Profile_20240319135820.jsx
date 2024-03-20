import React ,{useContext,useState} from 'react'
import '../Profile/Profile.scss'
import Hermione from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Hermione.jpeg'
import cover from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/cover.jpeg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Posts } from '../../components/Posts/Posts';
import { AuthContext } from '../../context/authContext';
import { makeRequest } from '../../axios';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import Updates from '../../components/Updates/Updates';

const Profile = () => {
  
  const {currentUser}=useContext(AuthContext)
  const [updatesOpen,setUpdatesOpen]=useState()
  const userId=parseInt(useLocation().pathname.split("/")[2])
  console.log("This is user id from profile",userId)

  const { isLoading, error, data} = useQuery({
    queryKey: ["user"],
    queryFn: async ()=>{
         const response= await makeRequest.get("/users/find/"+ userId);
         console.log("this is response from profile",response.data)
         return response.data;

        }

})

  const { data:relationdata } = useQuery({
    queryKey: ["relation"],
    queryFn: async ()=>{

        const response= await makeRequest.get("/relation?followed_userid="+ userId);
        return response.data;

        }

     })
        console.log("relation data",relationdata)
        
        const queryClient = useQueryClient();

        const mutation = useMutation((followed)=>{
            if (followed)
                return makeRequest.delete("/relation?userId="+ userId);
            return makeRequest.post("/relation",{userId})
    
            },
            {
            onSuccess : ()=> {
              queryClient.invalidateQueries(["relation"]);
            }
        })
    
        const handleFollow=()=>{
            mutation.mutate(relationdata.includes(currentUser.user_id))
    
        }
          
  

  return (
    <div className='profile'>
      
      {isLoading? "Loading":
      <>
      <div className='images'>
      <img src={"/upload/"+data.cover_pic} alt="" className='coverPic'/>

        <img src={"/upload/"+data.profile_pic} alt="" className='profilePic' />

      </div>
      <div className='container'>
        <div className='logos'>
          <a href="http://facebook.com">
            <FacebookOutlinedIcon fontSize='large'/>
          </a>
          <a href="http://instagram.com">

            <InstagramIcon fontSize='large'/>
          </a>
          <a href="http://twitter.com">

            <TwitterIcon fontSize='large'/>
          </a>


        </div>
        <div className='info'>
          <span>{data.name}</span>
          <div className='location'>
            <LocationOnIcon/>
            <span>{data.location}</span>
          </div> 
          {userId===currentUser.user_id ? (
          <div className='buttons'>
          <button onClick={()=>setUpdatesOpen(true)}>Update</button>
          <button>Logout</button>
          </div>
          ):
           (<button onClick={handleFollow}>{relationdata.includes(currentUser.user_id)? "Following":"Follow"}</button>)}
          
        </div>
        <div className='options'>
          <MessageIcon/>
          <MoreVertIcon/>

        </div>

      </div>
      {updatesOpen && <Updates setUpdatesOpen={setUpdatesOpen} user={data}/>}
      <Posts user_id={userId}/>

      </>
  }
    </div>
  )
  
}
export default Profile;
