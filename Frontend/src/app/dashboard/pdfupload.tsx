'use client';

import React, { useState } from 'react';

export default function PdfUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [courseId, setCourseId] = useState<number>(1); // Default value for courseId
  const [lessonTitle, setLessonTitle] = useState<string>('Lesson 1'); // Default value for lessonTitle

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/pdf') {
        setError('Please upload a valid PDF file');
        setFile(null);
        setFileName('');
        return;
      }

      setFile(selectedFile);
      setFileName(selectedFile.name);
      setError('');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile.type !== 'application/pdf') {
      setError('Please upload a valid PDF file');
      setFile(null);
      setFileName('');
      return;
    }

    setFile(droppedFile);
    setFileName(droppedFile.name);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('No file selected!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('courseId', courseId.toString());
    formData.append('lessonTitle', lessonTitle);

    try {
      // Upload the file to the backend
      const response = await fetch('http://localhost:3000/pdf/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`, // Optional: Add token if necessary
        },
        body: formData,
      });

      if (!response.ok) {
        const { message } = await response.json();
        setError(message || 'Error uploading file');
        return;
      }

      const result = await response.json();
      alert(`${result.message} Lesson ID: ${result.lessonId}, Questions Created: ${result.questionCount}`);
      setFile(null);
      setFileName('');
      setError('');
    } catch (error) {
      setError('Error uploading file');
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <form onSubmit={handleSubmit} className="w-full">
        {/* Course ID and Lesson Title input fields */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col">
            <label htmlFor="courseId" className="text-sm font-medium text-gray-700">Course ID</label>
            <input
              id="courseId"
              type="number"
              value={courseId}
              onChange={(e) => setCourseId(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded-md mt-1"
              placeholder="Enter course ID"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lessonTitle" className="text-sm font-medium text-gray-700">Lesson Title</label>
            <input
              id="lessonTitle"
              type="text"
              value={lessonTitle}
              onChange={(e) => setLessonTitle(e.target.value)}
              className="p-2 border border-gray-300 rounded-md mt-1"
              placeholder="Enter lesson title"
            />
          </div>
        </div>

        {/* Dropzone for PDF file upload */}
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PDF files only (MAX. 10MB)</p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </label>

        {/* File Name Display */}
        {fileName && (
          <div className="mt-4 flex justify-center">
            <p className="text-gray-700">File Selected: {fileName}</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-2 text-red-600">{error}</div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 w-48 text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-150"
          >
            Upload PDF
          </button>
        </div>
      </form>
    </div>
  );
}
