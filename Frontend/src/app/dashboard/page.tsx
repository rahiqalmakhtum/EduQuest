'use client';

import React, { useState, useEffect } from 'react';
import { FiBarChart2, FiUsers, FiBookOpen } from 'react-icons/fi';
import { FaChalkboardTeacher, FaSignOutAlt, FaUpload  } from 'react-icons/fa';
import MenuItem from './MenuItem';  // Import MenuItem component
import DashboardPage from './DashboardPage';  // Import DashboardPage
import StudentsPage from './StudentsPage';    // Import StudentsPage
import CoursesPage from './CoursesPage';      // Import CoursesPage
import PdfUpload from './pdfupload';          // Import PdfUpload component
import { useRouter } from 'next/navigation'; // Import Router for navigation

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState<string>('Dashboard');
  const [userFirstName, setUserFirstName] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter(); // Use router to navigate

  // Check if user is logged in and fetch user data
  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve JWT token from localStorage
    if (token) {
      fetch('http://localhost:3000/users/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => response.json())
      .then(data => {
        if (data && data.firstName) {
          setUserFirstName(data.firstName);  // Set first name
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
    } else {
      setLoading(false);  // No token, stop loading
    }
  }, []);

  // Function to handle menu click
  const handleMenuChange = (label: string) => {
    setActiveMenu(label);
    
    // Logout condition
    if (label === 'Logout') {
      handleLogout();
    }
  };

  // Logout function to remove token and redirect
  const handleLogout = () => {
    // Remove token and user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Redirect to login page
    router.push('/login'); // Redirect to the login page
  };

  // If loading user data, show loading screen
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 flex flex-col justify-between">
        <div>
          <div className="mb-6 text-center">
            <h1 className="pt-2 text-3xl font-bold text-global-4 font-inter">EduQuest</h1>
          </div>

          <button className="w-full text-center text-global-7 bg-global-2 hover:bg-button-1 py-2 rounded mb-6">+ Create</button>

          <nav className="space-y-4">
            <MenuItem label="Dashboard" icon={<FiBarChart2 />} active={activeMenu} onClick={handleMenuChange} />
            <MenuItem label="Students" icon={<FiUsers />} active={activeMenu} onClick={handleMenuChange} />
            <MenuItem label="Courses" icon={<FaChalkboardTeacher />} active={activeMenu} onClick={handleMenuChange} />
            <MenuItem label="Create Quiz" icon={<FiBookOpen />} active={activeMenu} onClick={handleMenuChange} />
            <MenuItem label="Upload PDF" icon={<FaUpload />} active={activeMenu} onClick={handleMenuChange} /> {/* New MenuItem for Upload PDF */}
            <MenuItem label="Logout" icon={<FaSignOutAlt />} active={activeMenu} onClick={handleMenuChange} /> {/* Logout item */}
          </nav>
        </div>

        <div className="text-center text-xs text-gray-500">
          <p>0/20 activities created</p>
          <button className="bg-yellow-400 text-black py-1 px-3 rounded mt-2">Upgrade</button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-gray-50 flex flex-col">
        {/* Top Bar */}
        <header className="p-4 flex items-center justify-between bg-white shadow-sm">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search for any topic"
            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
          <div className="flex items-center gap-4">
            <h2>Welcome back {userFirstName}</h2>
            <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">
              {userFirstName?.charAt(0).toUpperCase() || 'U'}
            </div>
          </div>
        </header>

        {/* Content */}
        <section className="p-6">
          {activeMenu === 'Dashboard' && <DashboardPage />}
          {activeMenu === 'Students' && <StudentsPage />}
          {activeMenu === 'Courses' && <CoursesPage />}
          {activeMenu === 'Upload PDF' && <PdfUpload />} {/* Render PDF upload when active menu is 'Upload PDF' */}
        </section>
      </main>
    </div>
  );
}
