import { useState } from "react";
import { Calendar, Clock, Target, CheckCircle2, AlertCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function StudyPlanner() {
  const [hasPlan, setHasPlan] = useState(false);

  const handleGenerate = () => {
    toast.success("AI is generating your personalized study plan...");
    setTimeout(() => setHasPlan(true), 1500);
  };

  if (!hasPlan) {
    return (
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">AI Study Planner</h1>
          <p className="text-muted-foreground">Tell me your goals, and I'll create the perfect schedule for you.</p>
        </div>

        <Card className="rounded-3xl shadow-sm border-none bg-white p-4">
           <CardContent className="space-y-6 pt-6">
              <div className="space-y-2">
                <Label>What exam are you preparing for?</Label>
                <Select defaultValue="jamb">
                  <SelectTrigger className="rounded-xl h-12">
                    <SelectValue placeholder="Select Exam" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jamb">JAMB (UTME)</SelectItem>
                    <SelectItem value="waec">WAEC (WASSCE)</SelectItem>
                    <SelectItem value="neco">NECO</SelectItem>
                    <SelectItem value="post-utme">Post-UTME</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Target Score</Label>
                <Input placeholder="e.g. 320" className="rounded-xl h-12" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Daily Study Hours</Label>
                  <Input type="number" placeholder="e.g. 4" className="rounded-xl h-12" />
                </div>
                <div className="space-y-2">
                  <Label>Exam Date</Label>
                  <Input type="date" className="rounded-xl h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Your Subjects</Label>
                <div className="flex flex-wrap gap-2">
                  {["English", "Math", "Physics", "Chemistry"].map(s => (
                    <div key={s} className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                      {s}
                    </div>
                  ))}
                  <button className="px-3 py-1 border-2 border-dashed rounded-full text-xs font-bold text-muted-foreground hover:border-primary transition-colors">
                    + Add More
                  </button>
                </div>
              </div>

              <Button className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20" onClick={handleGenerate}>
                Generate My Plan
              </Button>
           </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Study Plan</h1>
          <p className="text-muted-foreground">Targeting 320+ for JAMB 2024</p>
        </div>
        <Button variant="outline" className="rounded-xl">Adjust Plan</Button>
      </div>

      <div className="grid lg:grid-cols-[1fr_350px] gap-8">
        <div className="space-y-6">
          <h3 className="font-bold text-xl flex items-center gap-2">
            <Calendar className="text-primary" /> This Week's Schedule
          </h3>
          <div className="space-y-4">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, i) => (
              <div key={day} className="bg-white border rounded-3xl p-6 shadow-sm flex items-start gap-6">
                <div className="text-center w-12">
                   <span className="text-xs font-bold text-muted-foreground uppercase">{day.slice(0, 3)}</span>
                   <div className="text-2xl font-black text-primary">{12 + i}</div>
                </div>
                <div className="flex-1 space-y-3">
                   <div className="flex items-center justify-between">
                      <h4 className="font-bold">{i % 2 === 0 ? "Mathematics & Physics" : "English & Chemistry"}</h4>
                      <span className="text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary rounded">4 Hours</span>
                   </div>
                   <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-2 rounded-lg">
                        <Clock size={12} /> 09:00 - 11:00 AM
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-2 rounded-lg">
                        <Clock size={12} /> 04:00 - 06:00 PM
                      </div>
                   </div>
                </div>
                <div className="flex items-center gap-2">
                   {i < 2 ? <CheckCircle2 className="text-green-500" /> : <div className="w-6 h-6 rounded-full border-2 border-muted" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card className="rounded-3xl border-none bg-primary text-white p-6 shadow-xl">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-lg">Weekly Goal</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
               <p className="text-sm text-white/80 italic">"Consistency is the key to mastering difficult subjects. You're doing great!"</p>
               <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span>Progress</span>
                    <span>40%</span>
                  </div>
                  <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[40%]" />
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4 pt-4">
                 <div className="text-center">
                    <div className="text-xl font-bold">12/30</div>
                    <div className="text-[10px] uppercase font-bold opacity-60">Topics Done</div>
                 </div>
                 <div className="text-center">
                    <div className="text-xl font-bold">18h</div>
                    <div className="text-[10px] uppercase font-bold opacity-60">Study Time</div>
                 </div>
               </div>
            </CardContent>
          </Card>

          <div className="bg-white border rounded-3xl p-6 shadow-sm space-y-4">
             <h4 className="font-bold flex items-center gap-2 text-red-500">
               <AlertCircle size={18} /> Missed Sessions
             </h4>
             <p className="text-sm text-muted-foreground">You missed your Physics session yesterday. AI has redistributed it across Wednesday and Friday.</p>
             <Button variant="secondary" className="w-full rounded-xl text-primary font-bold">Update Schedule</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
