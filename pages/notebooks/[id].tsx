import { GetServerSidePropsContext } from 'next'
import React from 'react'
import Layout from '../../components/Layout'
import NotebookCard from '../../components/NotebookCard'
import { Note } from '../../types/Notebook'

interface NotebookPageProps {
    title: string,
    notes: Note[]
}

export default function notebook({ title, notes = [] }: NotebookPageProps) {
    return (
        <Layout>
            <div className="p-4">
                <h1 className="text-3xl font-bold mb-8">{title}</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {notes.map(note => (
                        <li key={note.id}>
                            <NotebookCard {...note} />
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query: { id } } = context

    const title = `Notebook ${id}`
    const notes: Note[] = [...Array(10)].map((_, index) => ({
        id: index.toString(),
        title: `Note ${index}`,
        image: `https://www.hyperui.dev/photos/man-${index}.jpeg`,
        content: '# Hello world',
        description: `This is a description for note ${index}`,
        notebookId: id as string,
        publishedDate: `${index} Jan 2022`,
    }))

    return {
        props: {
            id,
            title,
            notes
        }
    }
}
