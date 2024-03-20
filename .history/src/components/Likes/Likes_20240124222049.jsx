import React from 'react'

export const Likes = () => {

    const { isLoadingLikes, dataLikes } = useQuery({
        queryKey: ["likes"],
        queryFn: async ({queryKey})=>{
         //const post_id=queryKey[1];
         const likesPromises = postIds.map(async (post_id) => {
         const response = await makeRequest.get(`/likes?post_id=${post_id}`);
         console.log(post_id)
         //const response= await makeRequest.get(`/likes?post_id=${post_id}`);
         console.log("response from likes",response.data)
         return response.data;
        })
        const allLikes = await Promise.all(likesPromises);
        const mergedLikes = allLikes.flat();
        console.log("response from likes", mergedLikes);
        return mergedLikes;
    
        }
    })

  return (
    <div>Likes</div>
  )
}



