import React from 'react'
import MonacoEditor from "@monaco-editor/react";

interface EditorProps {
    value: string,
    onChange: (value: string) => void
}

export default function Editor({ value, onChange }: EditorProps) {
    return (
        <div style={{ height: '100%' }}>
            <MonacoEditor
                height="100%"
                defaultLanguage="markdown"
                defaultValue=""
                theme='vs-dark'
                value={value}
                onChange={(value, ev) => onChange(value ?? "")}
            />
        </div>
    )
}
