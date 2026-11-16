import { Outlet, NavLink } from "react-router-dom";
import { Home, BookOpen, Brain, Clock, User, Bell, Camera, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StudentLayout() {
  const navItems = [
    { icon: Home, label: "Home", path: "/student" },
    { icon: BookOpen, label: "Learn", path: "/student/learn" },
    { icon: Brain, label: "AI Tutor", path: "/student/ai-tutor" },
    { icon: Camera, label: "Homework", path: "/student/homework-solver" },
    { icon: Calendar, label: "Planner", path: "/student/study-planner" },
    { icon: Clock, label: "CBT", path: "/student/cbt" },
    { icon: User, label: "Profile", path: "/student/profile" },
  ];

  return (
    <div className="min-h-screen bg-muted/30 pb-24 lg:pb-0 lg:pl-64">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-white border-r flex-col p-6 z-40">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <Brain size={18} />
          </div>
          <span className="font-bold text-lg text-primary">PrepNaija AI</span>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/student"}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                isActive ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
              )}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Header Desktop */}
      <header className="hidden lg:flex sticky top-0 h-16 bg-white/80 backdrop-blur-md border-b px-8 items-center justify-between z-30">
        <h2 className="font-semibold text-lg">Dashboard</h2>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-full relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 lg:p-8">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-20 bg-white border-t flex items-center justify-around px-2 z-50">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/student"}
            className={({ isActive }) => cn(
              "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            {({ isActive }) => (
              <>
                <item.icon size={24} className={isActive ? "fill-primary/20" : ""} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
