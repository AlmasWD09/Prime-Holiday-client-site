import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }) => {
  const [isClient, setIsClient] = useState(false); // To track client-side rendering
  const router = useRouter();
  const token = Cookies.get('token'); // Get token from cookies

  useEffect(() => {
    setIsClient(true); // Set to true once we're client-side

    // If no token, redirect to dashboard
    if (token) {
      router.push('/admin/dashboard');
    }else{
        router.push('/login');

    }
  }, [token, router]);

  // If we're not on the client side yet (i.e., during SSR), return null to avoid errors
  if (!isClient) {
    return null;
  }



  // If token exists, render the children (protected content)
  return <div>{children}</div>;
};

export default ProtectedRoute;
