import { useAppSelector } from '@/store'

function useAuth() {
    const { token, signedIn } = useAppSelector((state) => state.auth.session)

    const signOut = async () => {
        console.log('signing out')
    }

    return {
        authenticated: token && signedIn,

        signOut,
    }
}

export default useAuth
