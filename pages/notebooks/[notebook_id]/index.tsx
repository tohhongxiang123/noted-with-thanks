import { GetServerSidePropsContext } from 'next'
import React, { useState } from 'react'
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
                <ul>
                    {notes.map((note, index) => <li key={index}><RecursiveChapter {...note} /></li>)}
                </ul>
                <pre>{JSON.stringify(notes, null, 2)}</pre>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query: { notebook_id } } = context

    const title = `Notebook ${notebook_id}`
    const notes: Note[] = [...Array(29)].map(() => generateNote())

    return {
        props: {
            notebookId: notebook_id,
            title,
            notes
        }
    }
}

function generateNote(depth = 0): Note {
    const index = Math.floor(Math.random() * 1000000)

    return {
        id: index.toString(),
        title: `Note ${index}`,
        content: '# Hello world',
        description: `This is a description for note ${index}`,
        notebookId: "1",
        publishedDate: `${index} Jan 2022`,
        parentId: null,
        children: depth >= 4 ? [] : [...Array(Math.floor(Math.random() * 5))].map(() => generateNote(depth + 1))
    }
}

interface RecursiveChapterProps extends Note {

}

function RecursiveChapter({ id, title, children, ...props }: RecursiveChapterProps) {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className="p-4">
            <div className="flex space-between gap-x-4">
                <p>{title}</p>
                {children.length > 0 && <button onClick={() => setIsOpen(c => !c)}> {isOpen ? `x` : `>`} </button>}
            </div>
            {(children.length > 0 && isOpen) && <ul className={"pl-4"}>
                {children.map(child => <RecursiveChapter {...child} key={child.id} />)}
            </ul>}
        </div>
    )
}
