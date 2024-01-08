import React from 'react'
import '../Home/Home.scss'
import Stories from '../../components/Stories/Stories'
import { Posts } from '../../components/Posts/Posts'

const Home = () => {
  return (<>
  <div className='home column'>
    <Stories/>
    <Posts/>
    

    </div>

    </>


  )
}

export default Home