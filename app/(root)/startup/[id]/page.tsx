import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { formatDate } from '@/lib/formatDate'
import { sanityFetch } from '@/sanity/lib/live'
import { STARTUP_QUERY_BY_ID } from '@/sanity/lib/queries'
import Image from 'next/image'
import React, { Suspense } from 'react'
import markdownit from 'markdown-it'
import SimilarStartup from './components/similarStartup'
import View from './components/view'
import { Skeleton } from '@/components/ui/skeleton'

const md = markdownit()

const StartUpDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    // const startupId = params.id ?? '';
    const startupId = (await params).id

    const data = await sanityFetch({
        query: STARTUP_QUERY_BY_ID,
        params: { id: startupId }
    })

    const result = md.render(data.data?.pitch || "");

    return (
        <div className='pb-10 relative'>
            {/*Pink container*/}
            <div className='pink_container'>
                <div className='quote rounded-md'>
                    <div className="relative w-fit py-1 px-3 bg-transparent ">
                        <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[12px] border-r-transparent border-t-[12px] border-t-black rotate-180"></div>
                        <div className="absolute top-0 left-0 w-0 h-0 border-l-[12px] border-b-transparent  border-b-[12px] border-l-black"></div>
                        {formatDate(data.data._createdAt)}
                    </div>
                </div>
                <div className='heading'>{data.data.title}</div>
                <p className='sub-heading text-center'>{data.data.description}</p>
            </div>

            {/*Startup details*/}
            <div className='flex flex-col items-center justify-center mt-10 gap-8'>
                {/*Startup cover image*/}
                <Image
                    src={data.data.image}
                    width={800}
                    height={500}
                    alt=''
                    className='rounded-xl w-3/4 object-cover'
                />
                <div className='w-1/2 gap-10 flex flex-col'>
                    {/*Startup author*/}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-4 items-center'>
                            <Avatar className='size-12'>
                                <AvatarImage src={data.data.author.image} className='p-4' />
                                <AvatarFallback>{data.data.author.name}</AvatarFallback>
                            </Avatar>
                            <div className='flex flex-col'>
                                <p className='font-extrabold text-2xl leading-8'>{data.data.author.name}</p>
                                <p className='font-medium text-xl leading-8'>{data.data.author.email}</p>
                            </div>
                        </div>
                        <div className='bg-[#FFE8F0] rounded-[70px] p-2.5'>{data.data.category}</div>
                    </div>

                    {/*Startup pitch*/}
                    <article className='flex flex-col gap-4 prose break-all' dangerouslySetInnerHTML={{ __html: result }} />

                    <hr></hr>

                    {/*Startup similar*/}
                    <SimilarStartup data={data.data} />

                    {/*Startup views count*/}
                    <Suspense fallback={<Skeleton className="w-[50px] h-[20px] rounded-full" />
                    }>
                        <View id={startupId} />
                    </Suspense>
                </div>

            </div>
        </div>
    )
}

export default StartUpDetails