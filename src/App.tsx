import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import StudentDashboard from "./pages/student/Dashboard";
import AITutor from "./pages/student/AITutor";
import CBTModule from "./pages/student/CBT";
import HomeworkSolver from "./pages/student/HomeworkSolver";
import StudyPlanner from "./pages/student/StudyPlanner";
import SmartLearning from "./pages/student/SmartLearning";
import TeacherDashboard from "./pages/teacher/Dashboard";
import ParentDashboard from "./pages/parent/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import StudentLayout from "./components/layout/StudentLayout";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState<{ role: string; name: string } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("prepnaija_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login onLogin={(u) => setUser(u)} />} />
          
          {/* Student Routes */}
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<StudentDashboard />} />
            <Route path="ai-tutor" element={<AITutor />} />
            <Route path="homework-solver" element={<HomeworkSolver />} />
            <Route path="study-planner" element={<StudyPlanner />} />
            <Route path="learn" element={<SmartLearning />} />
            <Route path="cbt" element={<CBTModule />} />
          </Route>

          {/* Other Role Dashboards */}
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/parent" element={<ParentDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}

export default App;
