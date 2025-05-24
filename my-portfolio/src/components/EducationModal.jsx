import React from 'react';

const courses = [
  { name: "HTML & CSS", weeks: "36–41", points: "30 yhp" },
  { name: "JavaScript", weeks: "21–49", points: "40 yhp" },
  { name: "TypeScript", weeks: "50–1", points: "15 yhp" },
  { name: "Agile Methodologies", weeks: "2–4", points: "15 yhp" },
  { name: "Frontend Frameworks", weeks: "5–11", points: "35 yhp" },
  { name: "Backend Fundamentals", weeks: "12–18", points: "35 yhp" },
  { name: "Databases", weeks: "19–23", points: "25 yhp" },
  { name: "Backend Specialization", weeks: "35–40", points: "30 yhp" },
  { name: "CD/CI & Deployment", weeks: "41–50", points: "50 yhp" },
  { name: "Thesis Project Part 1", weeks: "50–1", points: "10 of 25 yhp" },
  { name: "Internship 1 (LIA 1)", weeks: "2–11", points: "50 yhp" },
  { name: "Thesis Project Part 2", weeks: "12–14", points: "15 of 25 yhp" },
  { name: "Internship 2 (LIA 2)", weeks: "14–23", points: "50 yhp" },
];

const EducationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end md:items-center z-50">
      <div className="bg-white max-w-4xl w-full rounded-t-lg md:rounded-lg p-6 relative overflow-y-auto max-h-[80vh] animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-lime-600 mb-4 text-center">
          Kurser i utbildningen
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg border border-lime-400 shadow"
            >
              <h3 className="font-semibold text-lg mb-1 text-gray-800">{course.name}</h3>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationModal;