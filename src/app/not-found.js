"use client"
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      // style={{
      //   backgroundImage: 'url("https://i.ibb.co.com/DgYdC69/Group-290660.png")',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   textAlign: 'center',
      //   padding:'40px'
      // }}
      className='h-screen flex justify-center items-center text-center bg-[#fffff0]'
    >
      <div>
        <h2 className='text-[64px] text-primary font-semibold font-noto'>404 Not Found</h2>
        <p className='font-noto mb-6'>
        Your visited page not found. You may go home page.
        </p>
        <Link className='bg-primary px-4 py-2 rounded-xl text-[#fffff0]' href="/">
        Go home page
        </Link>
      </div>
    </div>
  );
}