import ReactMarkdown from "react-markdown";
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
            className="prose prose-pre:bg-transparent"
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline ? (
                        <SyntaxHighlighter
                            style={materialDark}
                            language={match ? match[1] : ''}
                            {...props}
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                },
            }}
        >{value}</ReactMarkdown>
    )
}
