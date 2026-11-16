import { Users, BookOpen, MessageSquare, Plus, Bell, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-muted/30 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Mr. Adebayo</p>
          </div>
          <div className="flex gap-2">
             <Button variant="outline" size="icon" className="rounded-xl bg-white"><Bell size={20} /></Button>
             <Button className="rounded-xl gap-2 font-bold"><Plus size={18} /> Create New Class</Button>
          </div>
        </header>

        <div className="grid md:grid-cols-4 gap-4">
           {[
             { label: "Total Students", value: "142", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
             { label: "Active Classes", value: "6", icon: BookOpen, color: "text-green-500", bg: "bg-green-50" },
             { label: "Unread Messages", value: "12", icon: MessageSquare, color: "text-orange-500", bg: "bg-orange-50" },
             { label: "Average Performance", value: "78%", icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-50" },
           ].map((stat, i) => (
             <Card key={i} className="rounded-3xl border-none shadow-sm">
                <CardContent className="p-6 flex items-center gap-4">
                   <div className={stat.bg + " p-3 rounded-2xl " + stat.color}>
                      <stat.icon size={24} />
                   </div>
                   <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
           <Card className="rounded-3xl border-none shadow-sm bg-white overflow-hidden">
              <CardHeader className="border-b px-6 py-4 flex flex-row items-center justify-between">
                 <CardTitle className="text-lg">Student Performance (SS3 Physics)</CardTitle>
                 <Button variant="ghost" size="sm" className="text-primary font-bold">View Detailed</Button>
              </CardHeader>
              <CardContent className="p-0">
                 <Table>
                    <TableHeader>
                       <TableRow className="bg-muted/30">
                          <TableHead className="px-6">Student Name</TableHead>
                          <TableHead>Mock Score</TableHead>
                          <TableHead>Progress</TableHead>
                          <TableHead className="text-right px-6">Status</TableHead>
                       </TableRow>
                    </TableHeader>
                    <TableBody>
                       {[
                         { name: "Chidi Okafor", score: "88%", progress: 92, status: "Excellent" },
                         { name: "Blessing Yusuf", score: "72%", progress: 65, status: "Improving" },
                         { name: "Oluwaseun Tobi", score: "45%", progress: 30, status: "Needs Help" },
                         { name: "Amina Bello", score: "94%", progress: 98, status: "Excellent" },
                         { name: "Ikechukwu Amadi", score: "68%", progress: 55, status: "Average" },
                       ].map((s, i) => (
                         <TableRow key={i} className="hover:bg-muted/20 transition-colors">
                            <TableCell className="px-6 font-medium">{s.name}</TableCell>
                            <TableCell className="font-bold">{s.score}</TableCell>
                            <TableCell>{s.progress}%</TableCell>
                            <TableCell className="text-right px-6">
                               <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                                 s.status === "Excellent" ? "bg-green-100 text-green-600" :
                                 s.status === "Needs Help" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"
                               }`}>
                                 {s.status}
                               </span>
                            </TableCell>
                         </TableRow>
                       ))}
                    </TableBody>
                 </Table>
              </CardContent>
           </Card>

           <div className="space-y-8">
              <Card className="rounded-3xl border-none shadow-sm bg-primary text-white p-6">
                 <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
                 <div className="grid grid-cols-2 gap-3">
                    <button className="flex flex-col items-center justify-center p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors text-xs font-bold gap-2">
                       <Plus size={20} /> Assign Homework
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors text-xs font-bold gap-2">
                       <BookOpen size={20} /> Upload Notes
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors text-xs font-bold gap-2">
                       <TrendingUp size={20} /> Performance
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors text-xs font-bold gap-2">
                       <MessageSquare size={20} /> Chat with Students
                    </button>
                 </div>
              </Card>

              <Card className="rounded-3xl border-none shadow-sm bg-white p-6">
                 <h3 className="font-bold text-lg mb-4">Upcoming Mock Exams</h3>
                 <div className="space-y-4">
                    {[
                      { title: "Final Term Mock", date: "May 12, 2024", time: "09:00 AM" },
                      { title: "WAEC Preparation", date: "June 05, 2024", time: "10:30 AM" }
                    ].map((exam, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 border rounded-2xl hover:border-primary transition-colors cursor-pointer group">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                           {i + 1}
                        </div>
                        <div>
                           <h4 className="font-bold text-sm">{exam.title}</h4>
                           <p className="text-xs text-muted-foreground">{exam.date} • {exam.time}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </Card>
           </div>
        </div>
      </div>
    </div>
  );
}
