import React from 'react'
import '../Home/Home.scss'
import Stories from '../../components/Stories/Stories'

const Home = () => {
  return (<>
  <div className='home'>
    <Stories/>
    <Posts/>
    

    </div>

    </>


  )
}

export default Home