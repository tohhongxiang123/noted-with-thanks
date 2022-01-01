import React from 'react'
import Link from 'next/link'
import { Notebook } from '../types/Notebook'

interface NotebookCardProps extends Notebook {
    link: string
}

export default function NotebookCard({ id, title, image, description, publishedDate, link }: NotebookCardProps) {
    return (
        <Link href={link}>
            <a
                className="relative block p-8 overflow-hidden shadow hover:shadow-lg rounded-lg"
                href=""
            >
                <div className="justify-between sm:flex">
                    <div>
                        <h5 className="text-xl font-bold">
                            {title}
                        </h5>
                        <p className="mt-1 text-xs font-medium opacity-70">{publishedDate}</p>
                    </div>
                    <div className="flex-shrink-0 hidden ml-3 sm:block">
                        <img
                            className="object-cover w-16 h-16 rounded-lg shadow-sm"
                            src={image}
                            alt=""
                        />
                    </div>
                </div>
                <div className="mt-4 sm:pr-8">
                    <p className="text-sm line-clamp-4">
                        {description}
                    </p>
                </div>
            </a>
        </Link>
    )
}
