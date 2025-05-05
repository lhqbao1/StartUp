import React from 'react'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <section className='pink_container'>
      <div className='quote rounded-md'>
        <div className="relative w-fit py-1 px-3 bg-transparent ">
          <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[12px] border-r-transparent border-t-[12px] border-t-black rotate-180"></div>
          <div className="absolute top-0 left-0 w-0 h-0 border-l-[12px] border-b-transparent  border-b-[12px] border-l-black"></div>
          Pitch, Vote, and Grow
        </div>
      </div>

      <h1 className='heading'>Pitch Your Startup,<br />
        Connect with Entrepreneurs</h1>
      <p className='sub-heading'>Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>
      <SearchForm />
    </section>
  )
}

export default Home