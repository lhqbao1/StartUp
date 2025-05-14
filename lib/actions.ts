'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { client } from "@/sanity/lib/client";
import { USER_EXISTING_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { Author } from "@/types/author";
import { CreateStartup } from "@/types/startup";
import { getServerSession } from "next-auth";

export async function createStartup(formData: CreateStartup, pitch: string, author: Author) {    
    //Check if user is login or not
    const session = await getServerSession(authOptions);
    if(!session) return

    const date = new Date()

    const startup = {
        _type: 'startup',
        title: formData.title,
        slug: formData.title,
        author: author,
        views: 0,
        description: formData.description,
        category: formData.category,
        image: formData.image,
        pitch: pitch,
        _createdAt: date,
    }

    try {
        const result = await writeClient.create(startup);
        return result;
    } catch (error) {
        console.error("Error creating startup:", error);
        throw new Error("Failed to create startup");
    }
}

export async function getAuthorById(authorId: number){
    try {
        const author = await client.fetch(USER_EXISTING_QUERY, {id: authorId})
        return author
    } catch (error) {
        console.error("Error fetching author", error);
        throw new Error("Error fetching author")
    }
}