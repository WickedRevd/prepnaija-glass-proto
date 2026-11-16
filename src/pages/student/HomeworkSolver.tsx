import { useState } from "react";
import { Camera, Upload, Send, Sparkles, CheckCircle2, ChevronRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function HomeworkSolver() {
  const [step, setStep] = useState<"upload" | "processing" | "solution">("upload");
  const [image, setImage] = useState<string | null>(null);

  const handleUpload = () => {
    setStep("processing");
    setTimeout(() => setStep("solution"), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">AI Homework Solver</h1>
        <p className="text-muted-foreground">Snap a photo of any problem, and I'll teach you how to solve it.</p>
      </div>

      <AnimatePresence mode="wait">
        {step === "upload" && (
          <motion.div
            key="upload"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-white border-2 border-dashed border-primary/20 rounded-3xl p-12 flex flex-col items-center justify-center text-center space-y-4 hover:border-primary/50 transition-colors cursor-pointer group" onClick={handleUpload}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Camera size={40} />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-xl">Take a Picture</h3>
                <p className="text-sm text-muted-foreground">Use your camera to capture the question</p>
              </div>
            </div>

            <div className="bg-white border-2 border-dashed border-primary/20 rounded-3xl p-12 flex flex-col items-center justify-center text-center space-y-4 hover:border-primary/50 transition-colors cursor-pointer group" onClick={handleUpload}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Upload size={40} />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-xl">Upload File</h3>
                <p className="text-sm text-muted-foreground">Upload an image from your device</p>
              </div>
            </div>
          </motion.div>
        )}

        {step === "processing" && (
          <motion.div
            key="processing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 space-y-6"
          >
            <div className="relative">
               <div className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
               <Brain className="absolute inset-0 m-auto text-primary animate-pulse" size={32} />
            </div>
            <div className="text-center space-y-1">
               <h3 className="text-xl font-bold">Analyzing Question...</h3>
               <p className="text-sm text-muted-foreground italic">Reading handwriting & detecting diagrams</p>
            </div>
            <div className="w-full max-w-xs space-y-2">
               {["Detecting characters...", "Analyzing mathematical structure...", "Generating step-by-step tutorial..."].map((s, i) => (
                 <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 size={12} className="text-primary" /> {s}
                 </div>
               ))}
            </div>
          </motion.div>
        )}

        {step === "solution" && (
          <motion.div
            key="solution"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white border rounded-3xl p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                 <h3 className="font-bold flex items-center gap-2">
                   <Sparkles className="text-primary" size={18} />
                   Step-by-Step Solution
                 </h3>
                 <span className="text-xs px-2 py-1 bg-primary/10 text-primary font-bold rounded">Mathematics</span>
              </div>

              <div className="space-y-8">
                {[
                  { step: 1, title: "Identify the knowns", content: "From the image, we have a quadratic equation: 2x² + 5x - 3 = 0. Here, a=2, b=5, and c=-3." },
                  { step: 2, title: "Apply the formula", content: "Using the quadratic formula x = [-b ± √(b² - 4ac)] / 2a, we substitute our values." },
                  { step: 3, title: "Calculate the discriminant", content: "D = b² - 4ac = (5)² - 4(2)(-3) = 25 + 24 = 49." },
                  { step: 4, title: "Solve for x", content: "x = [-5 ± √49] / 2(2) = [-5 ± 7] / 4. Thus x = 0.5 or x = -3." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {s.step}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold">{s.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 space-y-2">
                <h4 className="font-bold text-primary flex items-center gap-2">
                  <Brain size={16} /> Teacher's Tip
                </h4>
                <p className="text-sm text-primary/80 italic">
                  Always check if the equation can be factored first. In this case, (2x - 1)(x + 3) = 0 also gives the same result much faster!
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 rounded-2xl" onClick={() => setStep("upload")}>Solve Another</Button>
              <Button className="flex-1 rounded-2xl">Ask AI to Explain Further</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
