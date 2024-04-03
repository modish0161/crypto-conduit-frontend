// hooks/useClerkAuth.ts
import { useUser, useClerk } from '@clerk/nextjs';
// Removed the incorrect import of 'Clerk'

const useClerkAuth = () => {
    const { isSignedIn, user } = useUser();
    const clerk = useClerk(); // This provides an instance to interact with Clerk features

    return { isSignedIn, user, clerk };
};

export default useClerkAuth;
