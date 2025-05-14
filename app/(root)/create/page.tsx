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
    FormLabel,
    // FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import MDEditor from '@uiw/react-md-editor';
import { Button } from '@/components/ui/button'
import { createStartup, getAuthorById } from '@/lib/actions'
import { useSession } from 'next-auth/react'


const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }).max(20, {
        message: "Title must be less than 20 characters.",
    }),
    description: z.string().max(300, {
        message: "Description must be less than 300 characters.",
    }),
    category: z.string(),
    image: z.string().min(1, {
        message: "Image is required.",
    }),
});

const SearchForm = () => {
    const [pitchData, setPitchData] = useState('Your pitch here')
    const { data: session, status } = useSession();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            category: "",
            image: "",
        },
    })
    async function onSubmit(data: z.infer<typeof formSchema>) {
        const authorId = Number(session?.user?.id)
        const authorData = await getAuthorById(authorId)
        console.log(authorId)
        console.log(authorData)
        // console.log('Search submitted with:', data)
        // console.log('pitch data', pitchData)
        // // TODO: Add actual search logic here
        // // const res = await createStartup(data, pitchData)
        // console.log(session)
    }

    return (
        <div>
            <div className='pink_container min-h-[310]!'>
                <div className='heading'>Submit Your Startup Pitch</div>
            </div>
            <div className='mt-12'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} // Prevent default submit
                        className="">
                        <div className='flex flex-col items-center justify-center gap-6'>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className='gap-3'>
                                        <FormLabel className='input-title'>Title</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your startup title"
                                                className='input border-3! placeholder:normal-case placeholder:text-gray-400 placeholder:text-base! pb-2'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className='gap-3'>
                                        <FormLabel className='input-title'>Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Short description of your startup idea"
                                                className='input border-3! rounded-[20px]! placeholder:normal-case placeholder:text-gray-400 min-h-[150px] px-4! placeholder:text-base!'
                                                {...field} />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem className='gap-3'>
                                        <FormLabel className='input-title'>Category</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Choose a category (e.g., Tech, Health, Education, etc.)"
                                                className='input border-3! placeholder:normal-case placeholder:text-gray-400 placeholder:text-base! pb-2'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => (
                                    <FormItem className='gap-3'>
                                        <FormLabel className='input-title'>Image</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Paste a link to your demo or promotional media"
                                                className='input border-3! placeholder:normal-case placeholder:text-gray-400 placeholder:text-base! pb-2'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div data-color-mode="light">
                                <MDEditor
                                    value={pitchData}
                                    onChange={(value) => setPitchData(value as string)}
                                />
                            </div>
                            {/* <MDEditor.Markdown source={pitchData} style={{ whiteSpace: 'pre-wrap' }} /> */}
                        </div>
                        <Button type='submit'>submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default SearchForm