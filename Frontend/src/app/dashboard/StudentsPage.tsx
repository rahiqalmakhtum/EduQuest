'use client';

import React from 'react';

const studentsData = [
  { name: 'John Doe', email: 'john.doe@example.com', course: 'Math 101', completion: 85 },
  { name: 'Jane Smith', email: 'jane.smith@example.com', course: 'History 101', completion: 92 },
  { name: 'Emily Davis', email: 'emily.davis@example.com', course: 'Science 101', completion: 78 },
  { name: 'Michael Johnson', email: 'michael.johnson@example.com', course: 'English 101', completion: 88 },
  { name: 'Sarah Lee', email: 'sarah.lee@example.com', course: 'Geography 101', completion: 91 },
  { name: 'David Brown', email: 'david.brown@example.com', course: 'Math 101', completion: 76 },
  { name: 'Linda Wilson', email: 'linda.wilson@example.com', course: 'History 101', completion: 95 },
  { name: 'James Miller', email: 'james.miller@example.com', course: 'Science 101', completion: 84 },
  { name: 'Alice Taylor', email: 'alice.taylor@example.com', course: 'English 101', completion: 87 },
  { name: 'Robert Anderson', email: 'robert.anderson@example.com', course: 'Geography 101', completion: 80 },
];

export default function StudentsPage() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">Student Name</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Enrolled Course</th>
            <th scope="col" className="px-6 py-3">Completion Percentage</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student, i) => (
            <tr
              key={i}
              className="odd:bg-white even:bg-gray-50 border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{student.name}</td>
              <td className="px-6 py-4">{student.email}</td>
              <td className="px-6 py-4">{student.course}</td>
              <td className="px-6 py-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${student.completion}%` }}
                  ></div>
                </div>
                <div className="text-xs text-center mt-1">{student.completion}%</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
