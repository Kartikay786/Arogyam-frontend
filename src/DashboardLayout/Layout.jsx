import { useState } from 'react';
import { Sidebar } from './Sidebar';
import TopBar  from './Topbar';
import { Outlet } from 'react-router-dom';

export function DashboardLayout() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <TopBar />

      <main className="ml-64 pt-20 p-8">

        <Outlet/>
       
      </main>
    </div>
  );
}
