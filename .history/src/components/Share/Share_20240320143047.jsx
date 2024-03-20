import React , {useContext, useState} from 'react'
import { AuthContext } from '../../context/authContext'
import '../Share/Share.scss'
import image from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/post_image.png'
import map from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/tag_location.png'
import friends from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/tag_friends.png'

import { useMutation,useQueryClient } from '@tanstack/react-query'
import { makeRequest } from '../../axios'

export const Share = () => {
    const {currentUser}=useContext(AuthContext)
    const[desc,setDesc]=useState("")
    const[file,setFile]=useState(null)

    const upload=async ()=>{
        try{
            const formData=new FormData()
            formData.append("file",file)
            const res = await makeRequest.post("/upload",formData)

            return res.data

        }catch(error) {
            console.error("Upload error:", error);
          }

    }

    const queryClient = useQueryClient();

    const mutation = useMutation((newPost)=>{

        return makeRequest.post("/posts",newPost)
        },
        {
        onSuccess : ()=> {
          queryClient.invalidateQueries(["posts"]);
        }
    })

    const handleClick= async (e)=>{
        e.preventDefault();
        let imgUrl=""
        if (file) 
            imgUrl=await upload()
        mutation.mutate({desc, image:imgUrl})
        setDesc("");
        setFile(null)

    }
   


  return (
    <div className='share'>
     <div className='container'>
        <div className='top'>
            <div className='left'>
            <div className='userinfo'>
                <img src={"/upload/"+currentUser.profile_pic} alt="" />
                <span>What's on your mind {currentUser.name}?</span>
            </div>
            <input type="text" placeholder='' 
                onChange={(e)=>setDesc(e.target.value)}
                value={desc}
                name='file'/>
            </div>
            <div className='right'>
                {file && <img alt="" className='file' src={URL.createObjectURL(file)}/>}
            </div>
        </div>
        <div className='bottom'>
            <div className='options'>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />

                <label htmlFor="file">
                <div className='option'>
                    <img src={image} alt="" />
                    <span>Add Image</span>
                </div>
                </label>
                <label htmlFor="file">
                <div className='option'>
                    <img src={map} alt="" />
                    <span>Add Location</span>
                </div>
                </label>
                <label htmlFor="file">
                <div className='option'>
                    <img src={friends} alt="" />
                    <span>Tag Friends</span>
                </div>
                </label>
            </div>
            <button onClick={handleClick}>Share</button>
        </div>
        </div>   
    </div>
  )
  }
