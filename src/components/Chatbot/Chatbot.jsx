import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  Heart, 
  Stethoscope, 
  Activity,
  MessageCircle,
  Sparkles,
  Clock,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Phone,
  PhoneOff,
  Zap,
  Shield,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';


function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Arogyam. I'm here to help you with health-related questions and provide general medical information. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isVoiceCall, setIsVoiceCall] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;

    const userMessage = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const responses = [
        "Thank you for your question. While I can provide general health information, please remember that this is not a substitute for professional medical advice. For specific health concerns, always consult with a qualified healthcare provider.",
        "I understand your concern. Based on general medical knowledge, I can provide some insights. However, for personalized medical advice, please consult with a healthcare professional.",
        "That's a great question about health and wellness. Let me provide you with some general information that might be helpful. Remember to always verify with your doctor for specific medical guidance.",
        "I'm here to help with health-related information. While I can share general medical knowledge, it's important to consult with qualified healthcare providers for diagnosis and treatment."
      ];
      
      const aiResponse = {
        id: Date.now() + 1,
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate voice recording
      setTimeout(() => {
        setIsRecording(false);
        const voiceMessage = {
          id: Date.now(),
          text: "Voice message: How can I manage stress and anxiety naturally?",
          isUser: true,
          timestamp: new Date(),
          isVoice: true
        };
        setMessages(prev => [...prev, voiceMessage]);
        
        // AI response to voice
        setTimeout(() => {
          const aiResponse = {
            id: Date.now() + 1,
            text: "Great question about stress management! Natural ways to manage stress include regular exercise, deep breathing techniques, meditation, adequate sleep, and maintaining a balanced diet. Consider yoga, mindfulness practices, or talking to friends and family. If stress persists, please consult a healthcare professional.",
            isUser: false,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, aiResponse]);
        }, 1000);
      }, 3000);
    }
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const quickActions = [
    { icon: Activity, text: "Symptoms Check", color: "from-blue-600 to-teal-600" },
    { icon: Heart, text: "Heart Health", color: "from-red-500 to-pink-600" },
    { icon: Shield, text: "Prevention Tips", color: "from-teal-600 to-blue-600" },
    { icon: Zap, text: "Emergency Info", color: "from-orange-500 to-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 px-4 py-3 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-teal-600 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Arogyam
              </h1>
              <p className="text-sm text-gray-600">Your AI Medical Assistant</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-teal-600/10 to-blue-600/10 rounded-xl">
              <div className="w-3 h-3 bg-teal-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Online</span>
            </div>
          </div>
        </div>
      </header>

      {/* Voice Call Overlay */}
    

      <div className="flex-1 flex">
        {/* Sidebar - Quick Actions */}
        <aside className="hidden lg:block w-80 bg-white/50 backdrop-blur-sm border-r border-gray-200/50 p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-200 hover:shadow-md group"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">{action.text}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-semibold text-gray-800 mb-3">Health Stats</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Consultations</span>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-teal-600" />
                    <span className="font-semibold text-gray-800">896</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Satisfaction</span>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4 text-purple-600" />
                    <span className="font-semibold text-gray-800">91.5%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Active Users</span>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-gray-800">546</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="max-w-4xl mx-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${
                    message.isUser ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  {/* Avatar */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                    message.isUser 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
                      : 'bg-gradient-to-r from-blue-600 to-teal-600'
                  }`}>
                    {message.isUser ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-white" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div className={`flex-1 max-w-2xl ${message.isUser ? 'text-right' : 'text-left'}`}>
                    <div
                      className={`inline-block px-5 py-3 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg ${
                        message.isUser
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-br-md'
                          : 'bg-white border border-gray-100 text-gray-800 rounded-bl-md'
                      }`}
                    >
                      {message.isVoice && (
                        <div className="flex items-center space-x-2 mb-2">
                          <Mic className="w-4 h-4" />
                          <span className="text-xs opacity-75">Voice message</span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    <div className={`flex items-center mt-1 space-x-2 text-xs text-gray-500 ${
                      message.isUser ? 'justify-end' : 'justify-start'
                    }`}>
                      <Clock className="w-3 h-3" />
                      <span>{formatTime(message.timestamp)}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-5 py-3 shadow-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <footer className="bg-white/90 backdrop-blur-md border-t border-gray-200/50 px-4 py-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-2xl border border-gray-200 focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50 transition-all duration-200">
                  <div className="flex items-center space-x-2 pl-2">
                    <MessageCircle className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about your health concerns..."
                    className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 py-2 text-sm"
                    disabled={isTyping}
                  />
                  
                  {/* Voice Record Button */}
                  <button
                    onClick={handleVoiceRecord}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                      isRecording 
                        ? 'bg-gradient-to-r from-red-500 to-pink-600 animate-pulse' 
                        : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700'
                    }`}
                  >
                    {isRecording ? <MicOff className="w-4 h-4 text-white" /> : <Mic className="w-4 h-4 text-white" />}
                  </button>
                  
                  <button
                    onClick={handleSendMessage}
                    disabled={inputText.trim() === '' || isTyping}
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              
              {/* Recording Indicator */}
              {isRecording && (
                <div className="mt-3 flex items-center justify-center space-x-2 text-red-600">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Recording... Speak now</span>
                </div>
              )}
              
              {/* Medical Disclaimer */}
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500 flex items-center justify-center space-x-1">
                  <Heart className="w-3 h-3 text-red-500" />
                  <span>This AI assistant provides general health information only. Always consult healthcare professionals for medical advice.</span>
                </p>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Mobile Quick Actions */}
      <div className="lg:hidden fixed bottom-20 right-4">
        <div className="flex flex-col space-y-2">
          {quickActions.slice(0, 2).map((action, index) => (
            <button
              key={index}
              className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
            >
              <action.icon className="w-5 h-5 text-white" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chatbot;