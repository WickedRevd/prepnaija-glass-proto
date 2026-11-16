import { Users, FileText, Settings, Shield, BarChart3, Database, MessageSquare, Bell, LogOut, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 hidden lg:flex flex-col p-6">
        <div className="flex items-center gap-2 text-white mb-10">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Shield size={18} />
          </div>
          <span className="font-bold text-lg tracking-tight">PrepNaija <span className="text-primary">Admin</span></span>
        </div>

        <nav className="flex-1 space-y-1">
          {[
            { label: "Overview", icon: BarChart3, active: true },
            { label: "User Management", icon: Users },
            { label: "Content Bank", icon: Database },
            { label: "Exam Editor", icon: FileText },
            { label: "Community", icon: MessageSquare },
            { label: "Settings", icon: Settings },
          ].map((item, i) => (
            <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active ? "bg-primary text-white" : "hover:bg-slate-800 hover:text-white"}`}>
               <item.icon size={20} />
               <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 hover:text-red-500 transition-all text-sm font-medium mt-auto">
           <LogOut size={20} /> Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        <header className="h-16 bg-white border-b px-8 flex items-center justify-between sticky top-0 z-10">
           <h2 className="font-bold text-lg">System Overview</h2>
           <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full"><Bell size={20} /></Button>
              <div className="flex items-center gap-3 pl-4 border-l">
                 <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold">Admin User</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest text-primary">Super Admin</p>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-slate-200" />
              </div>
           </div>
        </header>

        <div className="p-8 space-y-8">
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Active Users", value: "24,512", change: "+12.5%", icon: Users, color: "text-blue-600" },
                { label: "Course Enrollments", value: "84,203", change: "+5.2%", icon: BookOpen, color: "text-emerald-600" },
                { label: "Exam Submissions", value: "156,042", change: "+18.1%", icon: FileText, color: "text-violet-600" },
                { label: "Revenue (NGN)", value: "₦12.4M", change: "+8.4%", icon: BarChart3, color: "text-primary" },
              ].map((stat, i) => (
                <Card key={i} className="rounded-3xl border-none shadow-sm overflow-hidden">
                   <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                         <div className={`p-3 rounded-2xl bg-muted/50 ${stat.color}`}>
                            <stat.icon size={24} />
                         </div>
                         <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">{stat.change}</span>
                      </div>
                      <div>
                         <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                         <h3 className="text-2xl font-black">{stat.value}</h3>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>

           <div className="grid lg:grid-cols-[1fr_400px] gap-8">
              <Card className="rounded-3xl border-none shadow-sm overflow-hidden bg-white">
                 <CardHeader className="border-b px-8 py-6 flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Recent User Activity</CardTitle>
                    <Button variant="outline" className="rounded-xl font-bold">Export Logs</Button>
                 </CardHeader>
                 <CardContent className="p-8">
                    <div className="space-y-6">
                       {[
                         { user: "Bola Ahmed", action: "Signed up via Google", time: "2 minutes ago", role: "Student" },
                         { user: "Professor Okeke", action: "Uploaded New Physics Module", time: "15 minutes ago", role: "Teacher" },
                         { user: "Sarah Williams", action: "Completed WAEC Mock Exam", time: "45 minutes ago", role: "Student" },
                         { user: "System Admin", action: "Updated DB Schema", time: "1 hour ago", role: "Admin" },
                         { user: "David Mark", action: "Subscribed to Premium", time: "2 hours ago", role: "Parent" },
                       ].map((log, i) => (
                         <div key={i} className="flex items-center justify-between pb-6 border-b last:border-0 last:pb-0">
                            <div className="flex items-center gap-4">
                               <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                                  {log.user.charAt(0)}
                               </div>
                               <div>
                                  <h4 className="font-bold text-sm">{log.user}</h4>
                                  <p className="text-xs text-muted-foreground">{log.action}</p>
                               </div>
                            </div>
                            <div className="text-right">
                               <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase mb-1 inline-block ${
                                 log.role === "Student" ? "bg-blue-100 text-blue-600" :
                                 log.role === "Teacher" ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-600"
                               }`}>
                                 {log.role}
                               </span>
                               <p className="text-[10px] text-muted-foreground">{log.time}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </CardContent>
              </Card>

              <div className="space-y-8">
                 <Card className="rounded-3xl border-none shadow-sm bg-slate-900 text-white p-8 space-y-6">
                    <h3 className="text-xl font-bold">Server Health</h3>
                    <div className="space-y-6">
                       {[
                         { label: "CPU Usage", value: 42, color: "bg-primary" },
                         { label: "Memory Usage", value: 68, color: "bg-blue-400" },
                         { label: "Storage", value: 15, color: "bg-emerald-400" },
                       ].map((s, i) => (
                         <div key={i} className="space-y-2">
                            <div className="flex justify-between text-xs font-bold">
                               <span>{s.label}</span>
                               <span className="opacity-60">{s.value}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                               <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.value}%` }} />
                            </div>
                         </div>
                       ))}
                    </div>
                    <div className="pt-4 flex items-center gap-2 text-emerald-400 text-xs font-bold">
                       <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                       All systems operational
                    </div>
                 </Card>

                 <div className="bg-primary/10 border-2 border-dashed border-primary/30 rounded-3xl p-8 text-center space-y-4">
                    <Shield className="mx-auto text-primary" size={32} />
                    <div className="space-y-1">
                       <h4 className="font-bold">Security Audit</h4>
                       <p className="text-xs text-muted-foreground">Last audit performed 12 hours ago. No threats detected.</p>
                    </div>
                    <Button className="w-full rounded-xl font-bold">Run Deep Scan</Button>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
