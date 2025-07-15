'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const educationOptions = ['High School', 'Bachelors', 'Masters', 'PhD'];
const majorOptions = ['Chemistry', 'Physics', 'Mathematics', 'Biology', 'Computer Science'];

const RegistrationForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    educationLevel: '',
    major: '',
  });

  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    setErrorMsg('Passwords do not match');
    return;
  }

  try {
    const res = await fetch('http://localhost:3000/users/register/teacher', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        gender: formData.gender,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        educationLevel: formData.educationLevel,
        major: formData.major,
      }),
    });

    if (!res.ok) {
      const { message } = await res.json();
      setErrorMsg(message || 'Registration failed');
      return;
    }

    const data = await res.json();
    console.log('Registration success:', data);
    router.push('/login');
  } catch (err) {
    console.error(err);
    setErrorMsg('Something went wrong. Please try again.');
  }
};

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-global-1">
      <div className="bg-white py-8 px-8 mx-auto max-w-xl lg:py-8 rounded-xl shadow-md">
        <h2 className="pb-2 text-3xl font-bold text-global-4 font-inter">EduQuest</h2>
        <h2 className="text-2xl pb-4 font-semibold text-global-3 font-inter">Create your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {['firstName', 'lastName', 'gender', 'email', 'password', 'confirmPassword'].map(field => (
              <div key={field} className="w-full">
                <label htmlFor={field} className="block mb-2 text-sm font-medium text-global-2 dark:text-global-7">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field.includes('password') ? 'password' : 'text'}
                  name={field}
                  id={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className="bg-global-3 border border-gray-300 text-global-2 text-sm rounded-lg block w-full p-2.5 dark:bg-global-1 dark:border-gray-600 dark:text-global-7"
                  placeholder={`Enter ${field}`}
                  required
                />
              </div>
            ))}

            <div>
              <label htmlFor="educationLevel" className="block mb-2 text-sm font-medium text-global-2 dark:text-global-7">
                Education Level
              </label>
              <select
                name="educationLevel"
                id="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                className="bg-global-3 border border-gray-300 text-global-2 text-sm rounded-lg block w-full p-2.5 dark:bg-global-1 dark:border-gray-600 dark:text-global-7"
                required
              >
                <option value="" disabled>Select education level</option>
                {educationOptions.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="major" className="block mb-2 text-sm font-medium text-global-2 dark:text-global-7">
                Major
              </label>
              <select
                name="major"
                id="major"
                value={formData.major}
                onChange={handleChange}
                className="bg-global-3 border border-gray-300 text-global-2 text-sm rounded-lg block w-full p-2.5 dark:bg-global-1 dark:border-gray-600 dark:text-global-7"
                required
              >
                <option value="" disabled>Select major</option>
                {majorOptions.map(major => (
                  <option key={major} value={major}>{major}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-global-7 bg-global-2 rounded-lg hover:bg-button-1 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-global-2 cursor-pointer font-inter"
          >
            Register
          </button>

          {errorMsg && <p className="text-red-600 text-sm text-center">{errorMsg}</p>}
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
