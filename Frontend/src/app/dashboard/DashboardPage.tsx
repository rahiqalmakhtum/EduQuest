'use client';

import React, { useState, useEffect } from 'react';

type Course = {
  id: number;
  title: string;
  description: string;  // Update this to use 'description' instead of 'activities'
};

export default function DashboardPage() {
  const [recentCourses, setRecentCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Fetch recently added courses from the backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          throw new Error('No authentication token found');
        }

        const response = await fetch('http://localhost:3000/courses/my-courses', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }

        const data = await response.json();
        setRecentCourses(data);
      } catch (error: any) {
        setError(error.message || 'An error occurred while fetching courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Teacher Dashboard</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-sm">Students</h3>
          <p className="text-xs">Manage students and download list</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-sm">Courses</h3>
          <p className="text-xs">Manage available courses</p>
        </div>
      </div>

      {/* Recently Added Section */}
      <h2 className="text-lg font-bold mb-4">Recently Added</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recentCourses.length > 0 ? (
          recentCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded shadow p-4 hover:bg-gray-100 cursor-pointer"
            >
              {/* Box Image */}
              <div className="w-full h-28 bg-gray-200 rounded mb-2"></div>
              {/* Title */}
              <h3 className="font-semibold text-sm">{course.title}</h3>
              {/* Course Description */}
              <p className="text-xs text-gray-500">{course.description}</p>
            </div>
          ))
        ) : (
          <div>No recently added courses</div>
        )}
      </div>
    </div>
  );
}
