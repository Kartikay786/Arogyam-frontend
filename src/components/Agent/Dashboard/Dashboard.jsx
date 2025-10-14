import React from 'react'
import { Sparkles, TrendingUp, TrendingDown, Minus,Filter, FileText, Calendar, Activity,Download, Plus , Award, Microscope, Pill, Scan, ClipboardList, Syringe, User, Building2  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

  const healthMetrics = [
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', trend: 'stable', status: 'good' },
    { label: 'Heart Rate', value: '72', unit: 'bpm', trend: 'stable', status: 'good' },
    { label: 'Blood Sugar', value: '95', unit: 'mg/dL', trend: 'down', status: 'good' },
    { label: 'Cholesterol', value: '185', unit: 'mg/dL', trend: 'up', status: 'warning' },
  ];

  const recentRecords = [
    // {
    //   id: '1',
    //   title: 'Annual Blood Work Results',
    //   category: 'lab',
    //   date: '2025-10-10',
    //   doctor: 'Dr. Sarah Johnson',
    //   facility: 'City Medical Center',
    //   status: 'normal',
    //   summary: 'Complete blood count, lipid panel, and metabolic panel showing normal ranges across all markers.',
    // },
    // {
    //   id: '2',
    //   title: 'Prescription - Blood Pressure Medication',
    //   category: 'prescription',
    //   date: '2025-10-08',
    //   doctor: 'Dr. Michael Chen',
    //   facility: 'Arogyam Clinic',
    //   status: 'normal',
    //   summary: 'Lisinopril 10mg once daily for hypertension management. Refills available.',
    // },
    {
      id: '3',
      title: 'Chest X-Ray Report',
      category: 'scan',
      date: '2025-10-05',
      doctor: 'Dr. Emily Rodriguez',
      facility: 'Advanced Diagnostics',
      status: 'normal',
      summary: 'Routine chest radiograph showing clear lung fields with no acute findings.',
    },
    {
      id: '4',
      title: 'COVID-19 Vaccination Booster',
      category: 'vaccination',
      date: '2025-09-28',
      facility: 'Arogyam Vaccination Center',
      status: 'normal',
      summary: 'Updated COVID-19 booster dose administered. No adverse reactions reported.',
    },
    {
      id: '5',
      title: 'Cardiology Consultation Report',
      category: 'report',
      date: '2025-09-20',
      doctor: 'Dr. Robert Anderson',
      facility: 'Heart Care Institute',
      status: 'attention',
      summary: 'Follow-up consultation for cardiac health. Mild irregularities noted, recommended lifestyle modifications.',
    },
    {
      id: '6',
      title: 'Allergy Test Results',
      category: 'lab',
      date: '2025-09-15',
      doctor: 'Dr. Lisa Martinez',
      facility: 'Allergy & Immunology Center',
      status: 'attention',
      summary: 'Skin prick test revealing sensitivity to dust mites and certain pollens.',
    },
  ];


  return (
    <div className='mt-8'>
        <WelcomeSection />
        {/* <QuickStats /> */}

        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Health Vitals</h2>
              <p className="text-gray-600">Your latest health measurements</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthMetrics.map((metric, index) => (
              <HealthMetricCard key={metric.label} metric={metric} delay={index * 100} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6 mt-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Recent Health Records</h2>
              <p className="text-gray-600">Access your complete medical history</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:scale-105">
                <Filter className="w-4 h-4" />
                <span className="font-medium">Filter</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:scale-105">
                <Download className="w-4 h-4" />
                <span className="font-medium">Export</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-700 text-white rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105">
                <Plus className="w-4 h-4" />
                <span className="font-medium">Add Record</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            {recentRecords.map((record, index) => (
              <RecordCard key={record.id} record={record} delay={index * 100} />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="px-8 py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
            Load More Records
          </button>
        </div>
    </div>
  )
}

export default Dashboard


function WelcomeSection() {
     const navigate = useNavigate();
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good Morning' : currentHour < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden mb-8">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-6 h-6 animate-pulse" />
          <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            {greeting}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-2">Welcome back, Riya! 👋</h1>
        <p className="text-blue-100 text-lg mb-6">
          Your health journey is looking great. Here's your overview for today.
        </p>

        <div className="flex gap-4">
          <button onClick={()=>navigate('/dashboard/chatbot')} className="bg-white cursor-pointer text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105 shadow-lg">
            Consult with Chatbot
          </button>
          <button onClick={()=>navigate('/dashboard/records')}  className="bg-white/20 cursor-pointer backdrop-blur-sm border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 hover:scale-105">
            Upload Records
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 right-8 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20C100 20 140 50 140 80C140 95.464 127.464 108 112 108C96.536 108 84 95.464 84 80C84 64.536 96.536 52 112 52C127.464 52 140 64.536 140 80" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="4" strokeDasharray="8 8"/>
          <path d="M100 60V100L120 120" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}


function QuickStats() {
  const stats = [
    { label: 'Total Records', value: '247', icon: FileText, color: 'from-blue-500 to-cyan-600' },
    { label: 'Appointments', value: '12', icon: Calendar, color: 'from-purple-500 to-pink-600' },
    { label: 'Active Plans', value: '3', icon: Activity, color: 'from-green-500 to-teal-600' },
    { label: 'Health Score', value: '94', icon: Award, color: 'from-orange-500 to-red-600' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-12`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out group-hover:w-full`}
                style={{ width: '70%' }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}


export function RecordCard({ record, delay }) {
  const iconMap = {
    lab: Microscope,
    prescription: Pill,
    scan: Scan,
    report: ClipboardList,
    vaccination: Syringe,
  };

  const colorMap = {
    lab: 'from-blue-500 to-cyan-600',
    prescription: 'from-purple-500 to-pink-600',
    scan: 'from-indigo-500 to-blue-600',
    report: 'from-green-500 to-teal-600',
    vaccination: 'from-orange-500 to-red-600',
  };

  const statusColors = {
    normal: 'bg-green-100 text-green-700',
    attention: 'bg-yellow-100 text-yellow-700',
    critical: 'bg-red-100 text-red-700',
  };

  const Icon = iconMap[record.category];

  return (
    <div
      className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 hover:scale-102 cursor-pointer group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 bg-gradient-to-br ${colorMap[record.category]} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-200">
              {record.title}
            </h3>
            {record.status && (
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[record.status]}`}>
                {record.status.toUpperCase()}
              </span>
            )}
          </div>

          {record.summary && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {record.summary}
            </p>
          )}

          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(record.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}</span>
            </div>

            {record.doctor && (
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{record.doctor}</span>
              </div>
            )}

            {record.facility && (
              <div className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                <span>{record.facility}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          {record.category.replace('_', ' ')}
        </span>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
          View Details
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
}

export function HealthMetricCard({ metric, delay }) {
  const TrendIcon = metric.trend === 'up' ? TrendingUp : metric.trend === 'down' ? TrendingDown : Minus;

  const statusColors = {
    good: 'from-green-500 to-emerald-600',
    warning: 'from-yellow-500 to-orange-600',
    critical: 'from-red-500 to-pink-600',
  };

  const bgColors = {
    good: 'bg-green-50 hover:bg-green-100',
    warning: 'bg-yellow-50 hover:bg-yellow-100',
    critical: 'bg-red-50 hover:bg-red-100',
  };

  return (
    <div
      className={`${bgColors[metric.status]} rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${statusColors[metric.status]} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-12`}>
          <TrendIcon className="w-6 h-6 text-white" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          metric.status === 'good' ? 'bg-green-200 text-green-800' :
          metric.status === 'warning' ? 'bg-yellow-200 text-yellow-800' :
          'bg-red-200 text-red-800'
        }`}>
          {metric.status.toUpperCase()}
        </span>
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-2">{metric.label}</h3>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-gray-900">{metric.value}</span>
        <span className="text-gray-500 text-sm mb-1">{metric.unit}</span>
      </div>
    </div>
  );
}
