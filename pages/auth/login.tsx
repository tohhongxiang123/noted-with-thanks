import { GetServerSidePropsContext } from "next"
import { BuiltInProviderType } from "next-auth/providers"
import Image from 'next/image'
import { ClientSafeProvider, getProviders, getSession, LiteralUnion, signIn } from "next-auth/react"
import Layout from "../../components/Layout"

interface SignInProps {
    providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
}

export default function SignIn({ providers }: SignInProps) {
    return (
        <Layout title="Sign In">
            <div className="flex flex-col p-4 items-center justify-center gap-4">
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button onClick={() => signIn(provider.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-x-4">
                            <Image src={`/auth-provider-icons/${provider.name}.svg`} alt={provider.name} width={32} height={32} />
                            <span>Sign in with {provider.name}</span>
                        </button>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req, res } = context
    const session = await (getSession({ req }))

    if (session && res) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    
    const providers = await getProviders()
    return {
        props: { providers },
    }
}