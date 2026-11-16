import { Brain, TrendingUp, Clock, Book, Bell, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ParentDashboard() {
  return (
    <div className="min-h-screen bg-muted/30 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">Parent Dashboard</h1>
            <p className="text-muted-foreground">Monitoring progress for <span className="text-primary font-bold">Chidi Okafor</span></p>
          </div>
          <div className="flex gap-2">
             <Button variant="outline" size="icon" className="rounded-xl bg-white"><Bell size={20} /></Button>
             <Button variant="outline" className="rounded-xl font-bold bg-white">Switch Student</Button>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
           <Card className="rounded-3xl border-none shadow-xl bg-primary text-white p-8 md:col-span-2 overflow-hidden relative">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                 <div className="w-32 h-32 rounded-full border-4 border-white/30 p-1">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-full h-full rounded-full bg-white/20" />
                 </div>
                 <div className="text-center md:text-left space-y-3">
                    <h2 className="text-2xl font-bold">Excellent Progress!</h2>
                    <p className="text-white/80 max-w-md">Chidi has completed 85% of his JAMB goals for this month. He is currently ranked in the top 5% of Physics students.</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                       <div className="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold backdrop-blur-md">🏆 1,240 XP</div>
                       <div className="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold backdrop-blur-md">🔥 5 Day Streak</div>
                       <div className="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold backdrop-blur-md">⭐ Grade: A</div>
                    </div>
                 </div>
              </div>
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
           </Card>

           <Card className="rounded-3xl border-none shadow-sm bg-white p-6 space-y-6">
              <h3 className="font-bold flex items-center gap-2">
                 <TrendingUp className="text-primary" /> Overall Performance
              </h3>
              <div className="space-y-4">
                 {[
                   { label: "Academics", value: 82, color: "bg-blue-500" },
                   { label: "Consistency", value: 95, color: "bg-green-500" },
                   { label: "Accuracy", value: 74, color: "bg-orange-500" },
                 ].map((p, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                         <span>{p.label}</span>
                         <span>{p.value}%</span>
                      </div>
                      <Progress value={p.value} className="h-2" />
                   </div>
                 ))}
              </div>
              <Button className="w-full rounded-xl font-bold bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">View Full Report</Button>
           </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           <Card className="rounded-3xl border-none shadow-sm bg-white p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                 <Clock size={18} className="text-blue-500" /> Study Hours
              </h3>
              <div className="text-4xl font-black mb-1">24.5h</div>
              <p className="text-xs text-muted-foreground mb-6">Total study time this week</p>
              <div className="flex items-end gap-1 h-32">
                 {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                   <div key={i} className="flex-1 bg-blue-100 rounded-t-lg transition-all hover:bg-blue-500 group relative" style={{ height: `${h}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                         {h/10}h
                      </div>
                   </div>
                 ))}
              </div>
           </Card>

           <Card className="rounded-3xl border-none shadow-sm bg-white p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                 <Book size={18} className="text-green-500" /> Subjects Studied
              </h3>
              <div className="space-y-4">
                 {[
                   { name: "Physics", time: "8.2h", trend: "up" },
                   { name: "Mathematics", time: "6.5h", trend: "down" },
                   { name: "Chemistry", time: "5.4h", trend: "up" },
                   { name: "English", time: "4.4h", trend: "up" },
                 ].map((s, i) => (
                   <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-2xl">
                      <span className="text-sm font-medium">{s.name}</span>
                      <div className="flex items-center gap-3">
                         <span className="text-sm font-bold">{s.time}</span>
                         <TrendingUp size={14} className={s.trend === "up" ? "text-green-500" : "text-red-500 rotate-180"} />
                      </div>
                   </div>
                 ))}
              </div>
           </Card>

           <Card className="rounded-3xl border-none shadow-sm bg-white p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                 <Star size={18} className="text-gold" /> Teacher Comments
              </h3>
              <div className="space-y-4">
                 {[
                   { teacher: "Mr. Adebayo", comment: "Chidi is showing great aptitude for complex equations." },
                   { teacher: "Mrs. Okon", comment: "Needs to focus more on organic chemistry naming conventions." }
                 ].map((c, i) => (
                   <div key={i} className="p-4 border rounded-2xl space-y-2 relative">
                      <div className="flex items-center justify-between">
                         <h4 className="font-bold text-xs">{c.teacher}</h4>
                         <span className="text-[10px] text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed italic">"{c.comment}"</p>
                   </div>
                 ))}
                 <Button variant="ghost" className="w-full rounded-xl text-primary font-bold gap-2">
                    Message Teachers <ChevronRight size={14} />
                 </Button>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
}
