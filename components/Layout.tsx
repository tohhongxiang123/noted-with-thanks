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
        <div>
            <Head>
                <title>{title}</title>
                {description && <meta name="description" content={description} />}
            </Head>
            <Navbar links={[
                { name: 'About', link: '/about' },
                { name: 'Edit', link: '/edit', isPrivate: true },
                { name: 'Help', link: '/help' }
            ]}/>
            <main>
                {children}
            </main>
        </div>
    )
}
