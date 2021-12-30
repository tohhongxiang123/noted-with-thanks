import { GetServerSidePropsContext } from 'next'
import Layout from '../components/Layout'
import NotebookCard from '../components/NotebookCard'
import { Notebook } from '../types/Notebook'

interface HomeProps {
	notebooks: Notebook[]
}

export default function Home({ notebooks = [] } : HomeProps) {
	return (
		<Layout>
			<>
				<ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4">
					{notebooks.map(notebook => <li key={notebook.id}><NotebookCard {...notebook} /></li>)}
				</ul>
			</>
		</Layout>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	return {
		props: {
			notebooks: [
				{
					id: "123",
					title: "Chinese",
					description: "Small snippets from the physics textbook",
					author: "Toh Hong Xiang",
					image: "https://www.hyperui.dev/photos/man-2.jpeg",
					publishedDate: "21 Nov 2021"
				},
				{
					id: "234",
					title: "Math",
					description: "Lorem Ipsum dolor selat",
					author: "Toh Hong Xiang",
					image: "https://www.hyperui.dev/photos/man-4.jpeg",
					publishedDate: "14 Dec 2021"
				},
			]
		}
	}
}
