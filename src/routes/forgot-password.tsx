import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button, Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset password — ToolHive" },
      { name: "description", content: "Reset your ToolHive account password." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      setSent(true);
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
        <h1 className="text-2xl font-bold tracking-tight">Forgot your password?</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Enter your email and we'll send a reset link.
        </p>
        {sent ? (
          <div className="mt-5 space-y-4">
            <p className="rounded-md border border-border bg-secondary px-3 py-2 text-sm text-secondary-foreground">
              If an account exists for <strong>{email}</strong>, a reset link is on its way. Check your inbox.
            </p>
            <Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground">← Back to sign in</Link>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-5 space-y-4">
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
            <Button type="submit" disabled={loading} className="w-full">
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Send reset link
            </Button>
            <Link to="/auth" className="block text-sm text-muted-foreground hover:text-foreground">← Back to sign in</Link>
          </form>
        )}
      </div>
    </div>
  );
}