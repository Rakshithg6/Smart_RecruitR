import React from 'react';
import { Users, FileText, Calendar, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Total Candidates', value: '1,234', change: '+12%' },
  { icon: FileText, label: 'Resumes Screened', value: '856', change: '+8%' },
  { icon: Calendar, label: 'Interviews Scheduled', value: '142', change: '+15%' },
  { icon: TrendingUp, label: 'Success Rate', value: '68%', change: '+5%' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Export Report
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Icon className="text-blue-600" size={24} />
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'New candidate application', time: '2 minutes ago' },
              { action: 'Interview scheduled', time: '1 hour ago' },
              { action: 'Resume screening completed', time: '3 hours ago' },
            ].map((activity, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-700">{activity.action}</span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Upcoming Interviews</h2>
          <div className="space-y-4">
            {[
              { name: 'John Smith', position: 'Frontend Developer', time: '10:00 AM' },
              { name: 'Sarah Wilson', position: 'UX Designer', time: '2:30 PM' },
              { name: 'Mike Johnson', position: 'Product Manager', time: '4:00 PM' },
            ].map((interview, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{interview.name}</p>
                  <p className="text-sm text-gray-500">{interview.position}</p>
                </div>
                <span className="text-sm text-gray-600">{interview.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}