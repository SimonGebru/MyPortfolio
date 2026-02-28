import { motion, AnimatePresence } from "framer-motion";

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
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 flex justify-center items-center z-50 px-6"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-xl w-full max-w-4xl max-h-[80vh] overflow-y-auto p-8 relative">

              <button
                onClick={onClose}
                className="absolute top-4 right-5 text-slate-400 hover:text-white text-xl"
              >
                ×
              </button>

              <h2 className="text-2xl font-bold mb-6 text-sky-400">
                Program Curriculum
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="border border-slate-800 rounded-lg p-4 bg-slate-900/40 hover:border-sky-500/30 transition-colors"
                  >
                    <h3 className="text-sm font-medium text-slate-200 mb-1">
                      {course.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {course.weeks} · {course.points}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EducationModal;