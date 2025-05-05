'use client'
import Image from 'next/image'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const NavBar = () => {
    const { data: session } = useSession();

    const handleLogin = () => {
        signIn("github")
    }

    const handleLogOut = () => {
        signOut()
    }

    return (
        <div className='bg-white px-4 h-[80px] shadow-xl sticky top-0 z-50'>
            <div className='flex justify-between max-w-7xl mx-auto items-center h-full'>
                <div>
                    <Image
                        src="/nav-logo.png"
                        width={142}
                        height={200}
                        alt="Picture of the author"
                    />
                </div>
                <div>
                    {!session ?
                        <Button
                            onClick={handleLogin}
                            className='text-white text-sm px-4 bg-[#EF4444] cursor-pointer'
                        >Login</Button>
                        :
                        <div className='flex gap-8 items-center'>
                            <Button
                                className=' text-base font-semibold px-0 text-black bg-white border-none shadow-none font-sans cursor-pointer hover:shadow-xl hover:px-4 hover:bg-white'
                            >Create
                            </Button>
                            <Button
                                onClick={handleLogOut}
                                className='text-base font-semibold text-[#EF4444] px-0 bg-white shadow-none border-none font-sans cursor-pointer hover:shadow-xl hover:px-4 hover:bg-white'
                            >Logout</Button>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default NavBar