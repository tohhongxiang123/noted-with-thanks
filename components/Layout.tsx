import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

interface LayoutProps {
    children: ReactNode | ReactNode[],
    title?: string
}

export default function Layout({ children, title = 'Noted With Thanks' }: LayoutProps) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}
