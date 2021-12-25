import Editor from "../components/Editor";
import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import { Group, Table, Code, Blockquote, Image } from "@mantine/core";
import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import 'katex/dist/katex.min.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

function Home() {
	const [value, setValue] = useState('')

	return (
		<div style={{ height: '100vh', overflowY: 'hidden', position: 'relative' }}>
			<Group position="apart" grow style={{ height: '100%', alignItems: 'start' }}>
				<div style={{ width: '50%', height: '100%' }}>
					<Editor value={value} onChange={setValue} />
				</div>
				<div style={{ overflowY: 'auto', height: '100%', padding: '8px 16px' }}>
					<ReactMarkdown
						remarkPlugins={[remarkGfm, remarkMath]}
						rehypePlugins={[rehypeKatex,]}
						components={{
							code({ node, inline, className, children, ...props }) {
								console.log(children)
								const match = /language-(\w+)/.exec(className || '')
								return !inline && match ? (
									<SyntaxHighlighter
										style={materialDark}
										language={match[1]}
										PreTag="div"
										{...props}
									>
										{String(children).replace(/\n$/, '')}
									</SyntaxHighlighter>
								) : (
									<Code className={className} {...props}>
										{children}
									</Code>
								)
							},
							table: Table as any,
							blockquote: Blockquote,
							img: Image
						}}
					>{value}</ReactMarkdown>
				</div>
			</Group>
		</div>
	)
}

export default Home
