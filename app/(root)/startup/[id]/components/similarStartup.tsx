import StartupCard from '@/app/components/StartupCard'
import { client } from '@/sanity/lib/client'
import { STARTUP_QUERY_SIMILAR } from '@/sanity/lib/queries'
import { StartupCardProps } from '@/types/startup'
import React from 'react'


const SimilarStartup: React.FC<StartupCardProps> = async ({ data }) => {
    const similarStartup = await client.fetch(STARTUP_QUERY_SIMILAR, {
        id: data._id,
        category: data.category,
    })

    return (
        <div>
            <h3>Similar Startup</h3>
            <div className='flex flex-row justify-between flex-wrap mt-10'>
                {similarStartup.map((item, index) => {
                    return (
                        <StartupCard key={index} data={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default SimilarStartup