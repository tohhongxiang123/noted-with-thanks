import React from 'react'
import Link from 'next/link'
import { Notebook } from '../types/Notebook'

interface NotebookCardProps extends Notebook {
    
}

export default function NotebookCard({ id, title, image, description, publishedDate }: NotebookCardProps) {
    return (
        <Link href={`/notebooks/${id}`}>
            <a
                className="relative bg-gray-900 block p-8 overflow-hidden border border-gray-100 rounded-lg"
                href=""
            >
                <div className="justify-between sm:flex">
                    <div>
                        <h5 className="text-xl font-bold text-gray-100">
                            {title}
                        </h5>
                        <p className="mt-1 text-xs font-medium text-gray-400">{publishedDate}</p>
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
                    <p className="text-sm text-gray-200 line-clamp-4">
                        {description}
                    </p>
                </div>
            </a>
        </Link>
    )
}
