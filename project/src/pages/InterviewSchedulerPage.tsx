import React from 'react';
import { Calendar as CalendarIcon, Clock, Video, Users } from 'lucide-react';

export default function InterviewSchedulerPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Interview Scheduler</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Schedule Interview
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Calendar</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm rounded border hover:bg-gray-50">Today</button>
              <button className="px-3 py-1 text-sm rounded border hover:bg-gray-50">Week</button>
              <button className="px-3 py-1 text-sm rounded border hover:bg-gray-50">Month</button>
            </div>
          </div>
          
          <div className="border rounded-lg">
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="bg-gray-50 p-2 text-center text-sm font-medium">
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white p-2 h-24 hover:bg-gray-50 cursor-pointer"
                >
                  <span className="text-sm text-gray-500">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Today's Interviews</h2>
          <div className="space-y-6">
            {[
              {
                candidate: 'John Smith',
                position: 'Frontend Developer',
                time: '10:00 AM',
                type: 'Video Call',
              },
              {
                candidate: 'Sarah Wilson',
                position: 'UX Designer',
                time: '2:30 PM',
                type: 'In Person',
              },
              {
                candidate: 'Mike Johnson',
                position: 'Product Manager',
                time: '4:00 PM',
                type: 'Video Call',
              },
            ].map((interview, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{interview.candidate}</h3>
                    <p className="text-sm text-gray-500">{interview.position}</p>
                  </div>
                  <span className="text-sm text-gray-500">{interview.time}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  {interview.type === 'Video Call' ? (
                    <div className="flex items-center">
                      <Video className="w-4 h-4 mr-1" />
                      Video Call
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      In Person
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Interview Form */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6">Schedule New Interview</h2>
        <form className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Candidate Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Position
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <div className="relative">
              <input
                type="time"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Clock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interview Type
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Video Call</option>
              <option>In Person</option>
              <option>Phone Call</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Interview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}