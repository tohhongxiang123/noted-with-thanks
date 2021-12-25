import Editor from "../components/Editor";
import React, { useState } from 'react';
import { Group } from "@mantine/core";

import MarkdownDisplayer from "../components/MarkdownDisplayer";

export default function Edit() {
	const [value, setValue] = useState('')

	return (
		<div style={{ height: '100vh', overflowY: 'hidden', position: 'relative' }}>
			<Group position="apart" grow style={{ height: '100%', alignItems: 'start' }}>
				<div style={{ width: '50%', height: '100%' }}>
					<Editor value={value} onChange={setValue} />
				</div>
				<div style={{ overflowY: 'auto', height: '100%', padding: '8px 16px' }}>
					<MarkdownDisplayer value={value} />
				</div>
			</Group>
		</div>
	)
}
