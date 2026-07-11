import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button, Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — ToolHive" },
      { name: "description", content: "Sign in or create a free ToolHive account. Signing in is optional." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");

  // If already signed in, bounce home.
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/" });
    });
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setNotice("");
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: { display_name: displayName.trim() || email.split("@")[0] },
          },
        });
        if (error) throw error;
        setNotice(
          "Check your inbox to confirm your email. Once confirmed, sign in here.",
        );
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });
        if (error) throw error;
        toast.success("Signed in");
        navigate({ to: "/" });
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">
          {mode === "signup" ? "Create your account" : "Welcome back"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Signing in is optional — every tool works without an account.
        </p>

        <div className="mt-5 grid grid-cols-2 rounded-lg border border-border p-1 text-sm">
          <button
            type="button"
            onClick={() => { setMode("signin"); setNotice(""); }}
            className={`rounded-md py-1.5 font-medium transition-colors ${mode === "signin" ? "bg-secondary text-foreground" : "text-muted-foreground"}`}
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => { setMode("signup"); setNotice(""); }}
            className={`rounded-md py-1.5 font-medium transition-colors ${mode === "signup" ? "bg-secondary text-foreground" : "text-muted-foreground"}`}
          >
            Sign up
          </button>
        </div>

        {notice && (
          <p className="mt-4 rounded-md border border-border bg-secondary px-3 py-2 text-sm text-secondary-foreground">
            {notice}
          </p>
        )}

        <form onSubmit={submit} className="mt-5 space-y-4">
          {mode === "signup" && (
            <div>
              <Label htmlFor="displayName">Display name (optional)</Label>
              <Input
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g. Alex"
                maxLength={80}
              />
            </div>
          )}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              maxLength={255}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
            />
            {mode === "signup" && (
              <p className="mt-1 text-xs text-muted-foreground">At least 8 characters.</p>
            )}
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {mode === "signup" ? "Create account" : "Sign in"}
          </Button>
        </form>

        <div className="mt-4 flex items-center justify-between text-sm">
          <Link to="/forgot-password" className="text-muted-foreground hover:text-foreground">
            Forgot password?
          </Link>
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Back to tools
          </Link>
        </div>
      </div>
    </div>
  );
}