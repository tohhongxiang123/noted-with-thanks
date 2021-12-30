export type Notebook = {
    id: string,
    title: string,
    image: string,
    description: string,
    publishedDate: string
}

export type Note = {
    id: string,
    title: string,
    image: string,
    description: string,
    publishedDate: string,
    content: string
    notebookId: string
}