import Editor from "../components/Editor";
import React, { useState } from 'react';

import MarkdownDisplayer from "../components/MarkdownDisplayer";
import { Layout } from "../components";
import { GetServerSidePropsContext } from "next";

interface EditPageProps {
	value: string
}

export default function Edit({ value: defaultValue }: EditPageProps) {
	const [value, setValue] = useState(defaultValue)

	return (
		<Layout title="Edit">
			<div className="h-full overflow-y-hidden relative">
				<div className="flex w-full h-full">
					<div className="w-1/2 h-full">
						<Editor value={value} onChange={setValue} />
					</div>
					<div className="overflow-y-auto w-1/2 h-full px-4 py-8">
						<MarkdownDisplayer value={value} />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	return {
		props: {
			value: '# We wish you a merry christmas'
		}
	}
}
