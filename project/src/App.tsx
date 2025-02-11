import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ResumeScreeningPage from './pages/ResumeScreeningPage';
import InterviewSchedulerPage from './pages/InterviewSchedulerPage';
import CandidatesPage from './pages/CandidatesPage';
import SettingsPage from './pages/SettingsPage';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <DashboardPage />
            </Layout>
          }
        />
        <Route
          path="/resume-screening"
          element={
            <Layout>
              <ResumeScreeningPage />
            </Layout>
          }
        />
        <Route
          path="/scheduler"
          element={
            <Layout>
              <InterviewSchedulerPage />
            </Layout>
          }
        />
        <Route
          path="/candidates"
          element={
            <Layout>
              <CandidatesPage />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout>
              <SettingsPage />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;