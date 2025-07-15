'use client';

import React, { useEffect, useState } from 'react';

type Course = {
  id: number;
  title: string;
  description: string;
};

type Lesson = {
  id: number;
  title: string;
  content: string;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [lessonLoading, setLessonLoading] = useState<boolean>(false); // For loading lessons
  const [error, setError] = useState<string>('');
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

  // Fetch courses on initial load
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
        setCourses(data);
      } catch (error: any) {
        setError(error.message || 'An error occurred while fetching courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Fetch lessons when a course is selected
  useEffect(() => {
    if (selectedCourseId === null) return;

    const fetchLessons = async () => {
      setLessonLoading(true);
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          throw new Error('No authentication token found');
        }

        // Updated URL here
        const response = await fetch(`http://localhost:3000/lessons/${selectedCourseId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch lessons');
        }

        const data = await response.json();
        setLessons(data);
      } catch (error: any) {
        setError(error.message || 'An error occurred while fetching lessons');
      } finally {
        setLessonLoading(false);
      }
    };

    fetchLessons();
  }, [selectedCourseId]);

  if (loading) {
    return <div>Loading courses...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleCourseClick = (courseId: number) => {
    setSelectedCourseId(courseId); // Set the course ID when a course is clicked
  };

  return (
    <div>
      {/* Show course list if no course is selected */}
      {selectedCourseId === null ? (
        <div>
          <h2 className="text-lg font-bold mb-4">Your Courses</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {courses.map((course, i) => (
              <div
                key={i}
                className="bg-white rounded shadow p-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCourseClick(course.id)} // Handle course click
              >
                <div className="w-full h-28 bg-gray-200 rounded mb-2"></div>
                <h3 className="font-semibold text-sm">{course.title}</h3>
                <p className="text-xs text-gray-500">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Show lessons if a course is selected
        <div>
          {lessonLoading && <div>Loading lessons...</div>}
          {lessons.length > 0 ? (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">
                Lessons for {courses.find(course => course.id === selectedCourseId)?.title}
              </h3>
              <div className="space-y-4">
                {lessons.map((lesson) => (
                  <div key={lesson.id} className="p-4 border rounded shadow">
                    <h4 className="font-semibold">{lesson.title}</h4>
                    <p>{lesson.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>No lessons available for this course.</div>
          )}
        </div>
      )}
    </div>
  );
}
