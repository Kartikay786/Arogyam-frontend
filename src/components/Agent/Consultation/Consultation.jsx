import { useState } from "react";
import { Video, MessageCircle, Send, Mic, MicOff, PhoneCall } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Dr. Rajesh Verma",
    specialty: "Neurologist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Dr. Ananya Singh",
    specialty: "Dermatologist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function ConsultationChat() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [micOn, setMicOn] = useState(true);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: "patient", text: input }]);
    setInput("");
    // Mock doctor reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "doctor", text: "Thank you for the update!" },
      ]);
    }, 1000);
  };

  return (
    <div className="flex h-[85vh] mt-4 bg-white">
      {/* Left Sidebar - Doctors List */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        <h2 className="text-xl font-bold text-purple-700 p-4 border-b border-gray-200">
          Doctors
        </h2>
        <div className="flex-1 overflow-y-auto">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-blue-50 transition rounded-lg ${
                selectedDoctor?.id === doc.id ? "bg-blue-100" : ""
              }`}
              onClick={() => {
                setSelectedDoctor(doc);
                setMessages([
                  { id: 1, sender: "doctor", text: `Hello! I am ${doc.name}. How can I help you?` },
                ]);
              }}
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-12 h-12 rounded-full shadow-sm"
              />
              <div>
                <h3 className="font-semibold text-purple-700">{doc.name}</h3>
                <p className="text-gray-500 text-sm">{doc.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Chat / Video Interface */}
      <div className="flex-1 flex flex-col">
        {selectedDoctor ? (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-purple-700 text-white shadow-md">
              <div className="flex items-center gap-4">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-10 h-10 rounded-full shadow-sm"
                />
                <div>
                  <h2 className="font-semibold">{selectedDoctor.name}</h2>
                  <p className="text-sm opacity-80">{selectedDoctor.specialty}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setMicOn(!micOn)}
                  className="p-2 rounded-full bg-blue-500 hover:bg-purple-700 transition"
                >
                  {micOn ? <Mic className="w-5 h-5 text-white" /> : <MicOff className="w-5 h-5 text-white" />}
                </button>
                <button className="p-2 rounded-full bg-blue-500 hover:bg-purple-700 transition">
                  <Video className="w-5 h-5 text-white" />
                </button>
                <button className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition">
                  <PhoneCall className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-blue-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === "doctor" ? "bg-purple-100 self-start" : "bg-blue-500 text-white self-end"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="flex items-center p-4 border-t border-gray-200">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                className="ml-2 bg-blue-500 hover:bg-purple-700 text-white p-2 rounded-full transition-transform transform hover:scale-110"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400 text-lg">
            Select a doctor to start consultation
          </div>
        )}
      </div>
    </div>
  );
}
