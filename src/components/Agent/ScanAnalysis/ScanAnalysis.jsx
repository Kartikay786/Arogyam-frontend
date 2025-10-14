import { useState } from "react";
import { Upload, Activity } from "lucide-react";

export default function ScanAnalysisPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) setFile(URL.createObjectURL(uploadedFile));
  };

  const handleAnalyze = () => {
    if (!file) return alert("Please upload an X-ray or scan first!");
    setLoading(true);
    setResults(null);

    // Mock AI processing
    setTimeout(() => {
      setLoading(false);
      setResults([
        { label: "Pneumonia Detected", confidence: "92%" },
        { label: "No Fracture", confidence: "98%" },
        { label: "Normal Heart", confidence: "95%" },
      ]);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-purple-700 mb-10 text-center">
        AI X-ray & Scan Analysis
      </h1>

      {/* Upload Area */}
      <div
        className="max-w-lg mx-auto p-10 border-2 border-dashed border-blue-500 rounded-xl text-center cursor-pointer hover:border-purple-700 transition relative group"
        onClick={() => document.getElementById("fileInput").click()}
      >
        <Upload className="w-12 h-12 mx-auto text-blue-500 group-hover:text-purple-700 transition mb-4 animate-bounce-slow" />
        <p className="text-gray-500 mb-2">
          Drag & Drop your X-ray or scan here or click to upload
        </p>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileUpload}
          accept="image/*"
        />

        {file && (
          <div className="mt-4 flex flex-col items-center gap-2">
            {/* <ImageSquare className="w-10 h-10 text-gray-700" /> */}
            <img src={file} alt="uploaded scan" className="w-40 h-40 object-cover rounded-lg shadow-md mt-2" />
          </div>
        )}
      </div>

      {/* Analyze Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleAnalyze}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 flex items-center gap-2 justify-center mx-auto"
        >
          {loading && <Activity className="animate-spin w-5 h-5" />}
          Analyze Scan
        </button>
      </div>

      {/* AI Results */}
      {results && (
        <div className="max-w-3xl mx-auto mt-10 grid md:grid-cols-3 gap-6">
          {results.map((res, index) => (
            <div
              key={index}
              className="p-5 rounded-xl shadow-lg border border-gray-100 bg-gradient-to-t from-white to-blue-50 hover:scale-105 transform transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-purple-700 mb-2">{res.label}</h3>
              <span className="inline-block px-3 py-1 rounded-full text-white bg-blue-500 text-sm">{res.confidence}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
