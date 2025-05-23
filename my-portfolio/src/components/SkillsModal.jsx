const SkillsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-[#1e1f25] border border-lime-500 rounded-xl p-6 max-w-lg w-full shadow-lg text-white relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-4 text-lime-400 text-xl hover:text-lime-200"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold mb-4 text-lime-500 text-center">Mina färdigheter</h2>
          <ul className="space-y-3 text-sm text-left">
            <li>📐 <strong>Frontend:</strong> HTML, CSS, React</li>
            <li>⚙️ <strong>Backend:</strong> Node.js, MongoDB</li>
            <li>🔧 <strong>Verktyg & Metodik:</strong> Git, Postman, Agile/Scrum</li>
            <li>☁️ <strong>Deployment:</strong> Firebase, Vercel</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default SkillsModal;