import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

interface LayoutProps {
    children: ReactNode | ReactNode[],
    title?: string,
    description?: string,
}

export default function Layout({ children, title = 'Noted With Thanks', description = '' }: LayoutProps) {
    return (
        <div className="h-screen overflow-y-hidden flex flex-col relative">
            <Head>
                <title>{title}</title>
                {description && <meta name="description" content={description} />}
            </Head>
            <Navbar links={[
                { name: 'About', link: '/about' },
                { name: 'Edit', link: '/edit', isPrivate: true },
                { name: 'Help', link: '/help' }
            ]}/>
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}
