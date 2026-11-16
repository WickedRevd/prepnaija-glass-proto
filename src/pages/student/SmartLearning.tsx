import { useState } from "react";
import { Book, Play, FileText, CheckCircle, Search, ChevronRight, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";

const subjects = [
  { id: "math", name: "Mathematics", icon: "📐", lessons: 24, progress: 65 },
  { id: "eng", name: "English Language", icon: "📚", lessons: 18, progress: 40 },
  { id: "phys", name: "Physics", icon: "⚛️", lessons: 20, progress: 15 },
  { id: "chem", name: "Chemistry", icon: "🧪", lessons: 22, progress: 50 },
  { id: "bio", name: "Biology", icon: "🧬", lessons: 15, progress: 10 },
  { id: "govt", name: "Government", icon: "🏛️", lessons: 12, progress: 0 },
];

export default function SmartLearning() {
  const [selectedSubject, setSelectedSubject] = useState<typeof subjects[0] | null>(null);

  return (
    <div className="space-y-8">
      <AnimatePresence mode="wait">
        {!selectedSubject ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">Smart Learning</h1>
                <p className="text-muted-foreground">Master your curriculum with AI-powered lessons.</p>
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search subjects or topics..." className="pl-10 rounded-xl h-12" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((sub, i) => (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedSubject(sub)}
                  className="group bg-white border rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {sub.icon}
                    </div>
                    <div className="flex flex-col items-end">
                       <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Progress</span>
                       <span className="text-lg font-black text-primary">{sub.progress}%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{sub.name}</h3>
                      <p className="text-sm text-muted-foreground">{sub.lessons} Comprehensive Lessons</p>
                    </div>
                    <Progress value={sub.progress} className="h-2" />
                    <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white rounded-xl transition-all font-bold gap-2">
                      Resume Learning <ChevronRight size={16} />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <button 
              onClick={() => setSelectedSubject(null)}
              className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              <ChevronRight size={20} className="rotate-180" /> Back to Subjects
            </button>

            <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-primary rounded-3xl text-white shadow-xl shadow-primary/20">
               <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center text-5xl">
                 {selectedSubject.icon}
               </div>
               <div className="flex-1 text-center md:text-left space-y-2">
                 <h2 className="text-4xl font-bold">{selectedSubject.name}</h2>
                 <p className="text-white/80">Everything you need for JAMB, WAEC & NECO {selectedSubject.name}.</p>
               </div>
               <div className="flex gap-4">
                 <div className="text-center bg-white/10 px-6 py-3 rounded-2xl">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-[10px] uppercase font-bold opacity-60">Completed</div>
                 </div>
                 <div className="text-center bg-white/10 px-6 py-3 rounded-2xl">
                    <div className="text-2xl font-bold">XP</div>
                    <div className="text-[10px] uppercase font-bold opacity-60">450 Earned</div>
                 </div>
               </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_350px] gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Modules</h3>
                <div className="space-y-4">
                  {[
                    { title: "Algebra Basics", lessons: 4, type: "video" },
                    { title: "Quadratic Equations", lessons: 6, type: "video", active: true },
                    { title: "Trigonometry", lessons: 5, type: "text" },
                    { title: "Calculus Intro", lessons: 8, type: "video" },
                  ].map((module, i) => (
                    <div key={i} className={`bg-white border rounded-3xl p-6 shadow-sm transition-all ${module.active ? "ring-2 ring-primary border-transparent" : "hover:border-primary/20"}`}>
                       <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-2xl ${module.active ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                               {module.type === "video" ? <Play size={20} /> : <FileText size={20} />}
                            </div>
                            <div>
                               <h4 className="font-bold">{module.title}</h4>
                               <p className="text-xs text-muted-foreground">{module.lessons} Lessons • {i < 1 ? "Completed" : "In Progress"}</p>
                            </div>
                          </div>
                          {i < 1 ? (
                             <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                <CheckCircle size={20} />
                             </div>
                          ) : (
                             <Button size="sm" variant={module.active ? "default" : "outline"} className="rounded-xl">
                                {module.active ? "Continue" : "Start"}
                             </Button>
                          )}
                       </div>
                       {module.active && (
                         <div className="space-y-4 pt-4 border-t">
                            {[
                               "Introduction to Quadratics",
                               "Factoring Methods",
                               "Completing the Square",
                               "The Quadratic Formula"
                            ].map((lesson, j) => (
                               <div key={j} className="flex items-center gap-3 text-sm group cursor-pointer hover:text-primary transition-colors">
                                  <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary" />
                                  <span>{lesson}</span>
                                  {j === 0 && <span className="ml-auto text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold uppercase">Now Watching</span>}
                               </div>
                            ))}
                         </div>
                       )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                 <div className="bg-white border rounded-3xl p-6 shadow-sm space-y-6">
                    <h4 className="font-bold flex items-center gap-2">
                       <Award className="text-gold" /> Rewards & Stats
                    </h4>
                    <div className="space-y-4">
                       <div className="flex items-center justify-between p-3 bg-muted/50 rounded-2xl">
                          <div className="flex items-center gap-3">
                             <div className="p-2 bg-primary/10 rounded-xl text-primary"><Zap size={16} /></div>
                             <span className="text-sm font-medium">Daily Streak</span>
                          </div>
                          <span className="font-bold text-primary">5 Days</span>
                       </div>
                       <div className="flex items-center justify-between p-3 bg-muted/50 rounded-2xl">
                          <div className="flex items-center gap-3">
                             <div className="p-2 bg-blue-100 rounded-xl text-blue-600"><FileText size={16} /></div>
                             <span className="text-sm font-medium">Assignments</span>
                          </div>
                          <span className="font-bold">12/15</span>
                       </div>
                    </div>
                    <Button variant="outline" className="w-full rounded-xl gap-2 font-bold">
                       View Leaderboard <ChevronRight size={14} />
                    </Button>
                 </div>

                 <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white shadow-xl space-y-4">
                    <h4 className="font-bold text-lg">AI Performance Analytics</h4>
                    <p className="text-xs opacity-80 leading-relaxed">
                       Your understanding of Algebra has improved by 25% this week. Focus on "Completing the Square" next.
                    </p>
                    <div className="h-1 bg-white/20 rounded-full">
                       <div className="h-full bg-white w-3/4 rounded-full" />
                    </div>
                    <Button className="w-full bg-white text-indigo-600 hover:bg-white/90 rounded-xl font-bold">View Report</Button>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
