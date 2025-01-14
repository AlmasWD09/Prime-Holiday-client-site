"use client"

const LoginPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, '-------', password)
        e.target.reset()
      };
    return (
        <section className="bg-[#FFFFFF]">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                
                <form   onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-100 px-10 py-16 rounded-md">
                    <div className="text-center">
                    <h1 className="text-[36px] font-semibold font-Roboto text-[#272727]">Welcome back!</h1>
                    <p>Please enter email & password to continue</p>
                    </div>

                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>

                        <input required type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" placeholder="william047@gmail.com" />
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>

                        <input required type="password" name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" placeholder="********" />
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-[#FFFFF0] capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primborder-primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default LoginPage


