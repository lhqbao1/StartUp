import React from 'react'
import Ping from './ping'
import { sanityFetch } from '@/sanity/lib/live'
import { STARTUP_QUERY_VIEW } from '@/sanity/lib/queries'
import { writeClient } from '@/sanity/lib/write-client'

const View = async ({ id }: { id: string }) => {
    const viewsCount = await sanityFetch({
        query: STARTUP_QUERY_VIEW,
        params: {
            id: id
        }
    })

    await writeClient
        .patch(id)
        .set({ views: viewsCount.data.views + 1 })
        .commit()

    return (
        <div className=''>
            <div className='fixed bottom-4 right-4'>
                <div className='bg-[#FFE8F0] px-6 py-2 rounded-xl text-center text-base uppercase font-bold'>
                    {viewsCount.data.views} views
                    <div className='absolute -top-2 -right-2'>
                        <Ping />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default View