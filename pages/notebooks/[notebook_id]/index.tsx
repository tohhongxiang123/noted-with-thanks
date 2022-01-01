import { GetServerSidePropsContext } from 'next'
import React from 'react'
import { Layout, NotebookCard } from '../../../components'
import { Note } from '../../../types/Notebook'

interface NotebookPageProps {
    notebookId: string,
    title: string,
    notes: Note[]
}

export default function notebook({ notebookId, title, notes = [] }: NotebookPageProps) {
    return (
        <Layout>
            <div className="p-4">
                <h1 className="text-3xl font-bold mb-8">{title}</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                    {notes.map(note => (
                        <li key={note.id}>
                            <NotebookCard {...note} link={`/notebooks/${notebookId}/notes/${note.id}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query: { notebook_id } } = context

    const title = `Notebook ${notebook_id}`
    const notes: Note[] = [...Array(109)].map((_, index) => ({
        id: index.toString(),
        title: `Note ${index}`,
        image: `https://www.hyperui.dev/photos/man-${index}.jpeg`,
        content: '# Hello world',
        description: `This is a description for note ${index}`,
        notebookId: notebook_id as string,
        publishedDate: `${index} Jan 2022`,
    }))

    return {
        props: {
            notebookId: notebook_id,
            title,
            notes
        }
    }
}
