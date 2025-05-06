import React from 'react'
import SearchForm from '../components/SearchForm'
import StartupCard from '../components/StartupCard'
// import { client } from '@/sanity/lib/client'
import { STARTUP_QUERY } from '@/sanity/lib/queries'
import { Startup } from '@/types/startup'
import { sanityFetch, SanityLive } from '@/sanity/lib/live'

const Home = async () => {
  // const StartupList = await client.fetch(STARTUP_QUERY);
  const { data: StartupList } = await sanityFetch({ query: STARTUP_QUERY, params: {} })


  return (
    <>
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
      <section className='startup-card-container flex flex-col gap-8 py-6 px-12'>
        <h2 className='font-semibold text-3xl'>Recommended startups</h2>
        <div className='flex flex-row flex-wrap justify-between gap-y-6'>
          {StartupList.map((item: Startup, index: number) => {
            return (
              <StartupCard key={item._id} data={item} />
            )
          })}
        </div>
      </section>
      <SanityLive />
    </>

  )
}

export default Home