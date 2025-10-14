import { useState } from "react";
import { Search, Upload } from "lucide-react";

const recordsData = [
  { id: 1, type: "Lab Report", date: "2025-09-21", status: "Completed" },
  { id: 2, type: "Prescription", date: "2025-09-18", status: "Pending" },
  { id: 3, type: "X-Ray Scan", date: "2025-09-12", status: "Completed" },
  { id: 4, type: "Consultation Note", date: "2025-09-10", status: "Completed" },
];

export default function HealthRecordsPage() {
  const [search, setSearch] = useState("");

  const filteredRecords = recordsData.filter((record) =>
    record.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-3xl font-bold text-purple-700">Your Health Records</h1>

        {/* Upload Button */}
        <button className="flex items-center gap-2 bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
          <Upload className="w-5 h-5" /> Upload New
        </button>
      </div>

      {/* Custom SVG Illustration */}
      <div className="flex justify-center mb-10">
        <svg
          className="w-80 h-60"
          viewBox="0 0 200 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="40" fill="#3B82F6" className="animate-bounce-slow" />
          <rect x="120" y="30" width="60" height="60" rx="15" fill="#6B21A8" className="animate-pulse-slow" />
          <circle cx="100" cy="120" r="25" fill="#3B82F6" className="opacity-70 animate-bounce-slow" />
        </svg>
      </div>

      {/* Search Bar */}
      <div className="flex items-center mb-8 max-w-md mx-auto border-b-2 border-blue-500 focus-within:border-purple-700 transition-colors">
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search records..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 py-2 outline-none text-gray-700"
        />
      </div>

      {/* Records Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecords.map((record) => (
          <div
            key={record.id}
            className="relative p-6 rounded-xl shadow-lg border border-gray-100 hover:scale-105 transform transition cursor-pointer overflow-hidden bg-gradient-to-t from-white to-blue-50"
          >
            {/* Background pulse */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-700 opacity-20 rounded-full animate-pulse-slow"></div>

            <h3 className="text-xl font-semibold text-purple-700 mb-2">{record.type}</h3>
            <p className="text-gray-500 mb-3">{record.date}</p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-white text-sm ${
                record.status === "Completed" ? "bg-blue-500" : "bg-purple-700"
              }`}
            >
              {record.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
