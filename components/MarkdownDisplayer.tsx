import ReactMarkdown from "react-markdown";
import { Table, Code, Blockquote, Image } from "@mantine/core";
import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface MarkdownDisplayerProps {
    value: string
}

export default function MarkdownDisplayer({ value }: MarkdownDisplayerProps) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex,]}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline ? (
                        <div>
                            <SyntaxHighlighter
                                style={materialDark}
                                language={match ? match[1] : ''}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        </div>
                    ) : (
                        <Code className={className} {...props}>
                            {children}
                        </Code>
                    )
                },
                table: Table,
                blockquote: Blockquote,
                img: Image
            }}
        >{value}</ReactMarkdown>
    )
}
