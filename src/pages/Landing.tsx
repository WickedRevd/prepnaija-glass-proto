import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Brain, Trophy, ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="px-4 lg:px-6 h-16 flex items-center glass fixed w-full z-50">
        <Link className="flex items-center justify-center gap-2" to="/">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Brain className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-primary">PrepNaija AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors mt-1.5" to="/login">
            Login
          </Link>
          <Button asChild size="sm" className="rounded-full px-6">
            <Link to="/login">Get Started</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
          <div className="container mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Master JAMB, WAEC & NECO with <span className="text-primary italic">AI Intelligence</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The #1 AI Tutor for Nigerian Students. Personalized study plans, instant homework help, and JAMB-standard CBT practice.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
                    Join PrepNaija AI <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8">
                    View Courses
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">
                        U{i}
                      </div>
                    ))}
                  </div>
                  <span>Joined by 10,000+ Nigerian Students</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center"
              >
                <div className="relative w-full aspect-square max-w-[500px]">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                  <div className="relative glass rounded-3xl p-8 border-primary/20 flex flex-col items-center justify-center text-center space-y-4">
                     <Brain className="w-24 h-24 text-primary" />
                     <div className="space-y-2">
                        <div className="h-2 w-32 bg-primary/20 rounded-full mx-auto" />
                        <div className="h-2 w-48 bg-primary/10 rounded-full mx-auto" />
                        <div className="h-2 w-40 bg-primary/5 rounded-full mx-auto" />
                     </div>
                     <p className="font-medium text-primary">"AI: How can I help you today?"</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tailored specifically for the Nigerian education system.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {[
                { title: "AI Tutor", desc: "Available 24/7 to explain complex topics in English or Pidgin.", icon: Brain },
                { title: "CBT Practice", desc: "Real JAMB/WAEC exam simulation with instant results.", icon: BookOpen },
                { title: "Gamification", desc: "Earn coins, badges, and compete on leaderboards.", icon: Trophy },
              ].map((f, i) => (
                <div key={i} className="flex flex-col items-center space-y-4 p-6 glass rounded-2xl">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{f.title}</h3>
                  <p className="text-center text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-center text-muted-foreground">
          © 2024 PrepNaija AI. All rights reserved. Made for Nigerian Excellence.
        </p>
      </footer>
    </div>
  );
}
