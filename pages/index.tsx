import { useSession, signIn, signOut } from "next-auth/react"
import Layout from '../components/Layout'

export default function Home() {
	const { data: session } = useSession()

	return (
		<Layout>
			{session ? (
				<>
					Signed in as {session.user?.email} <br />
					<button onClick={() => signOut()}>Sign out</button>
				</>
			) : (
				<>
					Not signed in <br />
					<button onClick={() => signIn()}>Sign in</button>
				</>
			)}
		</Layout>
	)
}
