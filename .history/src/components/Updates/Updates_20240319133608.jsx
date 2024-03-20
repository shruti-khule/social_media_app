import React, { useContext, useState } from 'react'
import '../Updates/Updates.scss'
import { makeRequest } from '../../axios'
import { useQueryClient,useMutation } from '@tanstack/react-query'
import { AuthContext } from '../../context/authContext'

const Updates = ({setUpdatesOpen,user}) => {
    const [profile,setProfile]=useState()
    const [cover,setCover]=useState()
    const [texts,setTexts]=useState({
        name:user.name || "",
        location:user.location || ""
    })

    const {updateCurrentUser}=useContext(AuthContext)

    const handleChange=(e)=>{
        setTexts((prev)=>
        ({...prev,[e.target.name]:[e.target.value]}))

    }
    const upload=async (file)=>{
        try{
            const formData=new FormData()
            formData.append("file",file)
            const res = await makeRequest.post("/upload",formData)
            console.log("This is response data",res.data)
            return res.data

        }catch(error) {
            console.error("Upload error:", error);
          }

    }

    const queryClient = useQueryClient();

    const mutation = useMutation(
          (user)=> { if (user)
             return makeRequest.put("/users",user)}
        ,
        {
        onSuccess : (response)=> {
          console.log("success")
          console.log(response.data)
          queryClient.invalidateQueries(["user"]);
          console.log("success")

          updateCurrentUser(responsedata)
          console.log("updated current user")

          setUpdatesOpen(false)
        },
        onError: (error) => {
          console.error("Error updating user info:", error);
        }
    })
    const handleClick= async (e)=>{
        e.preventDefault();
       let coverUrl=user.cover_pic
       let profileUrl=user.profile_pic

       coverUrl=cover ? await upload(cover):user.cover_pic
       profileUrl=profile ? await upload(profile):user.profile_pic

      const updatedInfo={...texts,cover_pic:coverUrl,profile_pic:profileUrl}
      console.log("updated information",updatedInfo)

          
        mutation.mutate(updatedInfo)
        setUpdatesOpen(false)



        
    }
    
  return (
    <div className='updates'>
      
      <div className='header'>

        <h2>Update</h2>
        <button className='close' onClick={()=>setUpdatesOpen(false)}>X</button>

     </div>

      <div className='wraper'>

     <form action="">
        <div className='option' >
          <p className='text'>Update Cover picture</p>
          <input type="file" className='inputs' onChange={(e)=> setCover(e.target.files[0])} />
        </div>
        <div className='option'>
          <p className='text'>Update Profile picture</p>
          <input type="file" className='inputs' onChange={(e)=> setProfile(e.target.files[0])}/>
        </div>
        <div className='option'>
          <p className='text'>Update Name</p>
          <input type="text" name='name' className='inputs' onChange={handleChange} />
        </div>
        <div className='option'>
          <p className='text'>Update Location</p>
          <input type="text" name='location' className='inputs' onChange={handleChange}/>
        </div>
        <button onClick={handleClick}>Update</button>

     </form>
     </div>
    </div>
  )
}

export default Updates