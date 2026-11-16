import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Mail, Lock, Phone } from "lucide-react";
import { toast } from "sonner";

export default function Login({ onLogin }: { onLogin: (user: any) => void }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (role: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const user = { role, name: "Student Demo" };
      localStorage.setItem("prepnaija_user", JSON.stringify(user));
      onLogin(user);
      toast.success(`Logged in as ${role}`);
      navigate(`/${role}`);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-primary/5 to-background">
      <Card className="w-full max-w-md glass border-none">
        <CardHeader className="text-center space-y-1">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Brain className="text-white w-7 h-7" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Enter your credentials to access PrepNaija AI</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 h-auto p-1 bg-muted/50 rounded-lg">
              {["student", "teacher", "parent", "admin"].map(role => (
                <TabsTrigger key={role} value={role} className="capitalize py-2 text-xs">
                  {role}
                </TabsTrigger>
              ))}
            </TabsList>
            {["student", "teacher", "parent", "admin"].map(role => (
              <TabsContent key={role} value={role} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor={`${role}-email`}>Email or Phone</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id={`${role}-email`} placeholder="name@example.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${role}-password`}>Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id={`${role}-password`} type="password" className="pl-10" />
                  </div>
                </div>
                <Button 
                  className="w-full h-12 rounded-xl" 
                  onClick={() => handleLogin(role)}
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : `Sign In as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
                </Button>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button variant="outline" className="rounded-xl">Google</Button>
            <Button variant="outline" className="rounded-xl">Apple</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
