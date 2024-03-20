import React from 'react'
import '../Home/Home.scss'
import Stories from '../../components/Stories/Stories'
import { Posts } from '../../components/Posts/Posts'
import { Share } from '../../components/Share/Share'

const Home = () => {
  return (<>
  <div className='home'>
    <Share/>
    <Stories/>
    <Posts/>
    

    </div>

    </>


  )
}

export default Home