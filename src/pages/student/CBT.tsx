import { useState } from "react";
import { Timer, Calculator, Flag, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const mockQuestions = [
  {
    id: 1,
    subject: "Mathematics",
    question: "If log 10 = 1 and log 2 = 0.3010, find the value of log 5.",
    options: ["0.4771", "0.6020", "0.6990", "0.7010"],
    correct: 2,
  },
  {
    id: 2,
    subject: "Mathematics",
    question: "Find the sum of the first 20 terms of the AP: 2, 5, 8, 11...",
    options: ["610", "590", "630", "570"],
    correct: 0,
  }
];

export default function CBTModule() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  const question = mockQuestions[currentIdx];

  const handleFinish = () => {
    setIsFinished(true);
    toast.success("Exam completed successfully!");
  };

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto space-y-8 py-8">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-3xl font-bold">Exam Completed!</h1>
          <p className="text-muted-foreground">Great job Chidi. Here's your performance breakdown.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-white border rounded-3xl text-center space-y-1 shadow-sm">
            <span className="text-4xl font-black text-primary">1/2</span>
            <p className="text-sm font-medium text-muted-foreground">Score</p>
          </div>
          <div className="p-6 bg-white border rounded-3xl text-center space-y-1 shadow-sm">
            <span className="text-4xl font-black text-blue-500">50%</span>
            <p className="text-sm font-medium text-muted-foreground">Accuracy</p>
          </div>
        </div>

        <div className="space-y-4 bg-white border rounded-3xl p-6 shadow-sm">
           <h3 className="font-bold">AI Insights</h3>
           <p className="text-sm leading-relaxed text-muted-foreground">
             You excelled in Logarithms but need to review Arithmetic Progressions. Your speed was 45 seconds per question, which is within the recommended JAMB limit of 50 seconds.
           </p>
           <Button className="w-full rounded-2xl">View Detailed Explanations</Button>
        </div>

        <Button variant="outline" className="w-full rounded-2xl h-12 font-bold" onClick={() => (setIsFinished(false), setAnswers({}))}>
          Retake Exam
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between glass p-4 rounded-2xl">
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-red-50 text-red-600 rounded-xl font-bold flex items-center gap-2">
            <Timer size={18} />
            01:45:22
          </div>
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-muted rounded-xl font-medium">
             Question {currentIdx + 1} of {mockQuestions.length}
          </div>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" size="icon" className="rounded-xl"><Calculator size={18} /></Button>
           <Button variant="destructive" className="rounded-xl font-bold" onClick={handleFinish}>Finish Exam</Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        {/* Question Area */}
        <div className="space-y-6">
          <div className="bg-white border rounded-3xl p-6 shadow-sm space-y-8 min-h-[400px] flex flex-col">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                {question.subject}
              </span>
              <Button variant="ghost" size="sm" className="text-orange-500 font-bold gap-2">
                <Flag size={14} /> Flag
              </Button>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold leading-relaxed">
              {question.question}
            </h2>

            <div className="grid gap-4 mt-auto">
              {question.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setAnswers({...answers, [question.id]: i})}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                    answers[question.id] === i 
                      ? "border-primary bg-primary/5 text-primary font-bold" 
                      : "border-muted hover:border-primary/20"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    answers[question.id] === i ? "border-primary bg-primary text-white" : "border-muted-foreground/30"
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span>{opt}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              className="rounded-xl px-8" 
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx(prev => prev - 1)}
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-xl">Skip</Button>
              <Button 
                className="rounded-xl px-8"
                onClick={() => currentIdx < mockQuestions.length - 1 ? setCurrentIdx(prev => prev + 1) : handleFinish()}
              >
                {currentIdx < mockQuestions.length - 1 ? "Next" : "Submit"} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Question Navigator */}
        <div className="hidden lg:block space-y-6">
           <div className="bg-white border rounded-3xl p-6 shadow-sm space-y-6">
              <h3 className="font-bold">Navigator</h3>
              <div className="grid grid-cols-4 gap-2">
                {mockQuestions.map((q, i) => (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIdx(i)}
                    className={`h-10 w-10 rounded-xl border-2 font-bold flex items-center justify-center transition-all ${
                      currentIdx === i ? "border-primary bg-primary text-white shadow-lg shadow-primary/20" : 
                      answers[q.id] !== undefined ? "border-primary/50 bg-primary/10 text-primary" : "border-muted text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <div className="pt-4 border-t space-y-3">
                 <div className="flex items-center gap-2 text-xs font-medium">
                    <div className="w-3 h-3 rounded-sm bg-primary" /> Answered
                 </div>
                 <div className="flex items-center gap-2 text-xs font-medium">
                    <div className="w-3 h-3 rounded-sm bg-muted border" /> Unanswered
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
