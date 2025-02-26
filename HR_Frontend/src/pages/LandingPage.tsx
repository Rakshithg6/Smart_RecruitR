import { Link } from 'react-router-dom';
import { Brain, FileSearch, Calendar, PieChart } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Screening',
    description: 'Advanced algorithms analyze resumes to find the perfect candidates',
  },
  {
    icon: FileSearch,
    title: 'Smart Resume Analysis',
    description: 'Automated skill matching and candidate scoring',
  },
  {
    icon: Calendar,
    title: 'Interview Management',
    description: 'Streamlined scheduling and candidate tracking',
  },
  {
    icon: PieChart,
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights into your recruitment process',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'HR Director',
    company: 'Tech Solutions Inc.',
    content: 'Smart RecruitR has transformed our hiring process. The AI-powered screening saves us countless hours.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    name: 'Michael Chen',
    role: 'Talent Acquisition Manager',
    company: 'Global Innovations',
    content: 'The analytics and insights provided by Smart RecruitR have helped us make better hiring decisions.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Smart RecruitR</h1>
          <Link
            to="/signin"
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Sign In
          </Link>
        </nav>
        
        <div className="container mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl font-bold mb-6">Revolutionizing Recruitment with AI</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your hiring process with AI-powered insights, automated screening, and intelligent candidate matching.
          </p>
          <Link
            to="/signin"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16">What HR Professionals Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <h3 className="text-3xl font-bold text-center mb-16">Get in Touch</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}