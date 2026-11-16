import { motion } from "framer-motion";
import { Calendar, Target, Zap, Play, ChevronRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome & Stats */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Welcome back, Chidi! 👋</h1>
        <p className="text-muted-foreground">You're on a 5-day streak. Keep it up!</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Daily Goal", value: "85%", icon: Target, color: "text-blue-500", bg: "bg-blue-50" },
          { label: "Streak", value: "5 Days", icon: Zap, color: "text-orange-500", bg: "bg-orange-50" },
          { label: "JAMB Prep", value: "12 Days", icon: Calendar, color: "text-green-500", bg: "bg-green-50" },
          { label: "XP Points", value: "1,240", icon: Brain, color: "text-purple-500", bg: "bg-purple-50" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-3xl bg-white border shadow-sm flex flex-col gap-2"
          >
            <div className={stat.bg + " p-2 w-fit rounded-xl " + stat.color}>
              <stat.icon size={18} />
            </div>
            <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
            <span className="text-lg font-bold">{stat.value}</span>
          </motion.div>
        ))}
      </div>

      {/* AI Tutor Shortcut */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative overflow-hidden p-6 rounded-3xl bg-primary text-white shadow-xl shadow-primary/20"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-2xl font-bold italic">Need help with Physics?</h2>
            <p className="text-white/80 max-w-sm">Ask your AI Tutor to explain complex concepts in Pidgin or English.</p>
            <Button asChild variant="secondary" className="rounded-full px-8 font-bold text-primary">
              <Link to="/student/ai-tutor">Launch AI Tutor</Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <Brain size={120} className="text-white/20" />
          </div>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Resume Learning */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">Resume Learning</h3>
            <Button variant="ghost" size="sm" className="text-primary font-bold">See All</Button>
          </div>
          <div className="space-y-4">
            {[
              { subject: "Mathematics", topic: "Quadratic Equations", progress: 65, icon: "📐" },
              { subject: "Chemistry", topic: "Organic Compounds", progress: 40, icon: "🧪" },
            ].map((course, i) => (
              <Card key={i} className="rounded-3xl border-none shadow-sm hover:shadow-md transition-all overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-2xl">
                      {course.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-bold">{course.topic}</h4>
                      <p className="text-xs text-muted-foreground">{course.subject}</p>
                    </div>
                    <Button size="icon" className="rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white">
                      <Play size={16} fill="currentColor" />
                    </Button>
                  </div>
                  <div className="px-4 pb-4">
                     <div className="flex justify-between text-[10px] mb-1 font-medium">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                     </div>
                     <Progress value={course.progress} className="h-1.5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Today's Tasks */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">Today's Tasks</h3>
          </div>
          <div className="bg-white rounded-3xl border p-2 space-y-1">
            {[
              "Complete Physics Assignment",
              "Practice 50 JAMB English Questions",
              "Watch Biology Lesson: Photosynthesis",
              "Take a Mock Biology Test"
            ].map((task, i) => (
              <div key={i} className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-2xl transition-colors cursor-pointer group">
                <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary transition-colors" />
                <span className="text-sm font-medium">{task}</span>
                <ChevronRight size={14} className="ml-auto text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
