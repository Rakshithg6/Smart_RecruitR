import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Calendar, Users, Settings, Menu } from 'lucide-react';

const hrNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: FileText, label: 'Resume Screening', path: '/resume-screening' },
  { icon: Calendar, label: 'Interview Scheduler', path: '/scheduler' },
  { icon: Users, label: 'Candidates', path: '/candidates' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const candidateNavItems = [
  { icon: FileText, label: 'Resume Screening', path: '/resume-screening' },
  { icon: Calendar, label: 'Interview Schedule', path: '/scheduler' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const userRole = localStorage.getItem('userRole') || 'candidate';
  
  const navItems = userRole === 'hr' ? hrNavItems : candidateNavItems;

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>
      
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0`}>
        <div className="flex flex-col h-full w-64 bg-white border-r shadow-sm">
          <div className="p-4">
            <Link to="/" className="block">
              <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">Smart RecruitR</h1>
            </Link>
          </div>
          
          <nav className="flex-1 p-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}