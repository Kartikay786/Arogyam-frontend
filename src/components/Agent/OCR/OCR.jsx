import { useState } from "react";
import { Upload, FileText } from "lucide-react";

export default function OCRPage() {
  const [file, setFile] = useState(null);
  const [ocrText, setOcrText] = useState("");

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) setFile(uploadedFile);
  };

  const handleOCRProcess = () => {
    // Mock OCR processing (replace with real API integration)
    if (!file) return alert("Please upload a medical report first!");
    setOcrText("Extracted text from the medical report will appear here...");
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-purple-700 mb-10 text-center">
        Medical Report OCR
      </h1>

      {/* Upload Area */}
      <div
        className="max-w-lg mx-auto p-10 border-2 border-dashed border-blue-500 rounded-xl text-center cursor-pointer hover:border-purple-700 transition relative group"
        onClick={() => document.getElementById("fileInput").click()}
      >
        <Upload className="w-12 h-12 mx-auto text-blue-500 group-hover:text-purple-700 transition mb-4 animate-bounce-slow" />
        <p className="text-gray-500 mb-2">
          Drag & Drop your report here or click to upload
        </p>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileUpload}
          accept=".pdf,.jpg,.png"
        />
        {file && (
          <div className="mt-4 flex items-center justify-center gap-2">
            <FileText className="w-5 h-5 text-gray-700" />
            <span className="text-gray-700 font-medium">{file.name}</span>
          </div>
        )}
      </div>

      {/* Process Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleOCRProcess}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
        >
          Process OCR
        </button>
      </div>

      {/* OCR Result */}
      {ocrText && (
        <div className="max-w-3xl mx-auto mt-10 p-6 border rounded-xl shadow-md bg-blue-50">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            Extracted Text:
          </h2>
          <div className="overflow-y-auto max-h-64 text-gray-700 whitespace-pre-wrap">
            {ocrText}
          </div>
        </div>
      )}
    </div>
  );
}
