'use client'
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    // FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

const SearchForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })
    function onSubmit(data: z.infer<typeof formSchema>) {

        console.log('Search submitted with:', data)
        // TODO: Add actual search logic here
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} // Prevent default submit
                className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className='relative'>
                                    <Input
                                        placeholder="Search startup"
                                        className='border-black border-[5px] w-[600px] h-[70px] rounded-[80px] px-6 bg-white text-black text-xl! font-medium capitalize 
                                placeholder:text-black placeholder:text-xl placeholder:uppercase placeholder:font-semibold
                                focus:outline-none focus:border-black! focus:border-[5px] focus:shadow-none focus:ring-0! focus:px-6'
                                        {...field}
                                    />
                                    {/* Using inset-y-0 to put the icon inside the input */}
                                    <button className='absolute inset-y-0 right-6 flex items-center cursor-pointer' type='submit'>
                                        <div className='bg-black p-2 rounded-full'>
                                            <svg
                                                className="w-5 h-5 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

export default SearchForm