import React from 'react'
import SearchForm from '../components/SearchForm'
import StartupCard from '../components/StartupCard'

const Home = () => {
  const StartupList = [
    {
      id: '1',
      createdAt: '20 May, 2023',
      viewed: '232',
      author: 'Steven Smith',
      title: 'EcoTrack',
      avatar: 'https://github.com/shadcn.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      thumbnail: 'https://www.wpbeginner.com/wp-content/uploads/2020/04/featuredimageswp-og.png',
      level: 'Senior level',
    },
    {
      id: '2',
      createdAt: '20 May, 2024',
      viewed: '233',
      author: 'Steven Smith',
      title: 'EcoTrack',
      avatar: 'https://github.com/shadcn.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      thumbnail: 'https://www.wpbeginner.com/wp-content/uploads/2020/04/featuredimageswp-og.png',
      level: 'Senior level',
    }
  ]
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
        <div className='flex flex-row gap-7 flex-wrap'>
          {StartupList.map((item, index) => {
            return (
              <StartupCard key={item.id} data={item} />
            )
          })}
        </div>
      </section>
    </>

  )
}

export default Home