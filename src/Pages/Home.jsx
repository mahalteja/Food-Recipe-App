import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import HomeFoodCards from '../components/HomeFoodCards'

const Home = () => {
  return (
    <div className='outlet'>
      <Header/>
      <SearchBar/>
      <HomeFoodCards/>
    </div>
  )
}

export default Home