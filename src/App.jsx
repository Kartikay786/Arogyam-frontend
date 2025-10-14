import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Chatbot from './components/Agent/Chatbot/Chatbot.jsx';
import { DashboardLayout } from './DashboardLayout/Layout.jsx';
import Dashboard from './components/Agent/Dashboard/Dashboard.jsx';
import HealthRecordsPage from './components/Agent/Records/Records.jsx';
import OCRPage from './components/Agent/OCR/OCR.jsx';
import ScanAnalysisPage from './components/Agent/ScanAnalysis/ScanAnalysis.jsx';
import ConsultationPage from './components/Agent/Consultation/Consultation.jsx';
import ProfilePage from './components/Agent/Profile/Profile.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        

        <Route path='/dashboard' element={<DashboardLayout />} > 
          <Route path='d' element={<Dashboard />} />
          <Route path='chatbot' element={<Chatbot />} />
          <Route path='records' element={<HealthRecordsPage />} />
          <Route path='ocr' element={<OCRPage />} />
          <Route path='scan' element={<ScanAnalysisPage />} />
          
          <Route path='consult' element={<ConsultationPage />} />
          <Route path='profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;