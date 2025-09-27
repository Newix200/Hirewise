import { useEffect, useState } from "react";

function App() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/templates")
      .then((res) => res.json())
      .then((data) => setTemplates(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        🚀 Interview Templates
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {template.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {template.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

