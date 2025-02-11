import React from 'react';
import { Upload, FileText, Check, X } from 'lucide-react';

export default function ResumeScreeningPage() {
  const [isDragging, setIsDragging] = React.useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload logic here
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Resume Screening</h1>

      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-12 text-center ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-4 text-lg">Drag and drop resumes here, or click to browse</p>
        <p className="mt-2 text-sm text-gray-500">Supports PDF, DOC, DOCX (Max 10MB)</p>
        <input
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx"
          multiple
        />
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Upload Files
        </button>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Candidate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Key Skills
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Experience
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Match Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[
              {
                name: 'John Smith',
                skills: ['React', 'TypeScript', 'Node.js'],
                experience: '5 years',
                score: 85,
                status: 'Matched',
              },
              {
                name: 'Sarah Wilson',
                skills: ['UI/UX', 'Figma', 'Adobe XD'],
                experience: '3 years',
                score: 92,
                status: 'Matched',
              },
              {
                name: 'Mike Johnson',
                skills: ['Product Management', 'Agile', 'Scrum'],
                experience: '7 years',
                score: 78,
                status: 'Review',
              },
            ].map((candidate, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {candidate.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {candidate.experience}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      {candidate.score}%
                    </div>
                    <div
                      className={`ml-2 h-2 w-16 rounded-full ${
                        candidate.score >= 85
                          ? 'bg-green-500'
                          : candidate.score >= 70
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      candidate.status === 'Matched'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {candidate.status === 'Matched' ? (
                      <Check className="w-4 h-4 mr-1" />
                    ) : (
                      <X className="w-4 h-4 mr-1" />
                    )}
                    {candidate.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}