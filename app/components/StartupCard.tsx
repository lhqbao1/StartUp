'use client'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/formatDate'
import { StartupCardProps } from '@/types/startup'
import { Eye } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'


const StartupCard: React.FC<StartupCardProps> = ({ data }) => {
    const router = useRouter()
    return (
        <div className='flex flex-col gap-4 p-4 bg-white border-t-[5px] border-l-[5px] border-r-[10px] border-b-[10px] border-black rounded-4xl w-[320px]'>
            {/* Created at and views section */}
            <div className='flex flex-row justify-between items-center'>
                <div className='bg-[#FFE8F0] rounded-[50px] px-4 py-2 text-sm'>{formatDate(data._createdAt)}</div>
                <div className='flex flex-row gap-2 items-center'>
                    <Eye />
                    <p className='text-sm font-normal'>{data.views}</p>
                </div>
            </div>
            {/* Author,Title and Avatar section */}
            <div className='flex flex-row justify-between'>
                {/* Author,Title section */}
                <div className='flex flex-col'>
                    <div className='text-sm'>{data.author.name}</div>
                    <div className='text-2xl font-semibold'>{data.title}</div>
                </div>
                {/* Author,Title section */}
                <Avatar className='w-9 h-9'>
                    <AvatarImage src={data.avatar} alt={data.author.name} sizes='30' />
                </Avatar>
            </div>
            {/* Description section */}
            <div className='text-sm leading-6 line-clamp-2 font-normal text-[#333333]'>{data.description}</div>
            {/* Thumbnail section */}
            <div className='relative w-full h-40'>
                <Image
                    src={data.image}
                    fill
                    alt="Picture of the author"
                    className="object-cover rounded-md"
                />
            </div>
            {/* Level and see details section */}
            <div className='flex flex-row justify-between items-center'>
                <div className='text-sm'>{data.level}</div>
                <Button
                    className='bg-black px-4 rounded-full'
                    onClick={() => router.push(`/startup/${data._id}`)}
                >Details</Button>
            </div>

        </div>
    )
}

export default StartupCard