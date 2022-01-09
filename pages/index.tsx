import { GetServerSidePropsContext } from 'next'
import { NotebookCard, Layout } from '../components'
import { Notebook } from '../types/Notebook'

interface HomeProps {
	notebooks: Notebook[]
}

export default function Home({ notebooks = [] }: HomeProps) {
	return (
		<Layout>
			<>
				<ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4">
					{notebooks.map(notebook => <li key={notebook.id}><NotebookCard {...notebook} link={`/notebooks/${notebook.id}`} /></li>)}
				</ul>
			</>
		</Layout>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	return {
		props: {
			notebooks: [...Array(100)].map((_, index) => ({
				id: index.toString(),
				title: `Notebook ${index}`,
				description: `Description for ${index}`,
				author: 'Toh Hong Xiang',
				image: `https://www.hyperui.dev/photos/man-${index}.jpeg`,
				publishedDate: `${index % 30} Nov 2021`
			}))
		}
	}
}
