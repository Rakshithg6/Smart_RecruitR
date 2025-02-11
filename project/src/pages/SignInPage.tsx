import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

interface LoginFormData {
  id: string;
  password: string;
}

export default function SignInPage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<'hr' | 'candidate' | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({ id: '', password: '' });
  const [error, setError] = useState<string>('');

  const validateHrId = (id: string) => {
    const hrPattern = /^hr-\d{4}$/;
    return hrPattern.test(id.toLowerCase());
  };

  const validateCandidateId = (id: string) => {
    const candidatePattern = /^\d{10}$/;
    return candidatePattern.test(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (selectedRole === 'hr' && !validateHrId(formData.id)) {
      setError('HR ID must be in format: hr-XXXX (where X is a digit)');
      return;
    }

    if (selectedRole === 'candidate' && !validateCandidateId(formData.id)) {
      setError('Candidate ID must be exactly 10 digits');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // If validation passes
    localStorage.setItem('userRole', selectedRole!);
    navigate(selectedRole === 'hr' ? '/dashboard' : '/resume-screening');
  };

  const renderLoginForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {selectedRole === 'hr' ? 'HR ID' : 'Candidate ID'}
        </label>
        <input
          type="text"
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          placeholder={selectedRole === 'hr' ? 'hr-XXXX' : '10 digit ID'}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <button
        type="submit"
        className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors ${
          selectedRole === 'hr' 
            ? 'bg-blue-600 hover:bg-blue-700' 
            : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        Sign In
      </button>

      <button
        type="button"
        onClick={() => setSelectedRole(null)}
        className="w-full py-2 text-sm text-gray-600 hover:text-gray-800"
      >
        ← Back to role selection
      </button>
    </form>
  );

  const renderRoleSelection = () => (
    <div className="space-y-4">
      <button
        onClick={() => setSelectedRole('hr')}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
      >
        <span>Sign in as HR Professional</span>
      </button>

      <button
        onClick={() => setSelectedRole('candidate')}
        className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
      >
        <span>Sign in as Candidate</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            {selectedRole ? `Sign In as ${selectedRole === 'hr' ? 'HR Professional' : 'Candidate'}` : 'Sign In to Smart RecruitR'}
          </h2>
          
          {selectedRole ? renderLoginForm() : renderRoleSelection()}

          <p className="mt-6 text-center text-sm text-gray-600">
            This is a demo version. In a real application, this would include secure authentication.
          </p>
        </div>
      </div>
    </div>
  );
} 