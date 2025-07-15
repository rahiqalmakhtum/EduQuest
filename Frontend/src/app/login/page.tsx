'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const { message } = await res.json();
        setErrorMsg(message || 'Login failed');
        return;
      }

      const data = await res.json();
      console.log('Login success:', data);

      // Store JWT token and user data
      localStorage.setItem('access_token', data.access_token); // Store the token in localStorage
      localStorage.setItem('user', JSON.stringify(data.user)); // Store user info in localStorage

      // Redirect to the dashboard
      router.push('/dashboard'); // Use `router.push` for navigation to the dashboard
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  // Check if the user is already logged in on component mount
  useEffect(() => {
    // Only redirect to dashboard if token is present, meaning the user is logged in
    const token = localStorage.getItem('access_token');
  }, [router]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h2 className="pb-2 text-3xl font-bold text-global-4 font-inter">EduQuest</h2>
        <div className="w-full bg-white rounded-xl shadow-md dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-global-4 font-bold leading-tight tracking-tight text md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-center">
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-global-7 bg-global-2 hover:bg-button-1 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-global-2 cursor-pointer font-inter"
              >
                Sign in
              </button>

              <p className="text-sm font-light text-center text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up
                </a>
              </p>
            </form>
            {errorMsg && (
              <p className="text-red-600 text-sm text-center">{errorMsg}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
