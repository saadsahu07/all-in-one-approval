import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact ToolsHive — Feedback & Complaints" },
    { name: "description", content: "Send feedback, report a bug, or file a complaint. The ToolsHive team replies within 2 business days." },
    { property: "og:title", content: "Contact ToolsHive" },
    { property: "og:description", content: "Feedback, complaints, and support requests for ToolsHive's free online tools." },
    { property: "og:url", content: "https://all-in-one-approval.lovable.app/contact" },
  ],
  links: [{ rel: "canonical", href: "https://all-in-one-approval.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const CONTACT_EMAIL = "empiremasteryai@gmail.com";

const TYPES = [
  { value: "feedback", label: "Feedback" },
  { value: "complaint", label: "Complaint" },
  { value: "bug_report", label: "Bug report" },
  { value: "other", label: "Other" },
] as const;

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Max 100 characters"),
  email: z.string().trim().email("Enter a valid email").max(255),
  type: z.enum(["feedback", "complaint", "bug_report", "other"]),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Max 5000 characters"),
});

type FormState = z.infer<typeof schema>;

function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    type: "feedback",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.from("feedback_submissions").insert({
        name: parsed.data.name,
        email: parsed.data.email,
        type: parsed.data.type,
        subject: parsed.data.subject,
        message: parsed.data.message,
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 500) : null,
      });
      if (error) throw error;
      toast.success("Thanks! Your message has been received. We'll reply within 2 business days.");
      setForm({ name: "", email: "", type: "feedback", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-serif text-4xl font-bold">Contact us</h1>
      <p className="mt-4 text-muted-foreground">
        Have feedback, a complaint, or found a bug? Fill out the form below and we'll reply within 2 business days.
      </p>

      <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-card p-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Mail className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Prefer email?</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-mono text-sm text-primary hover:underline">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5 rounded-xl border border-border bg-card p-6">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-medium">Your name</label>
            <input
              id="name"
              type="text"
              value={form.name}
              maxLength={100}
              onChange={(e) => update("name", e.target.value)}
              className={inputCls}
              placeholder="Jane Doe"
            />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              maxLength={255}
              onChange={(e) => update("email", e.target.value)}
              className={inputCls}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">What's this about?</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {TYPES.map((t) => {
              const active = form.type === t.value;
              return (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => update("type", t.value)}
                  className={
                    "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors " +
                    (active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground")
                  }
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="text-sm font-medium">Subject</label>
          <input
            id="subject"
            type="text"
            value={form.subject}
            maxLength={200}
            onChange={(e) => update("subject", e.target.value)}
            className={inputCls}
            placeholder="Short summary"
          />
          {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea
            id="message"
            rows={6}
            value={form.message}
            maxLength={5000}
            onChange={(e) => update("message", e.target.value)}
            className={inputCls + " resize-y"}
            placeholder="Tell us what happened, what you expected, and any steps to reproduce…"
          />
          <div className="mt-1 flex items-center justify-between">
            {errors.message ? (
              <p className="text-xs text-destructive">{errors.message}</p>
            ) : (
              <span className="text-xs text-muted-foreground">Include screenshots or links if helpful.</span>
            )}
            <span className="text-xs text-muted-foreground">{form.message.length}/5000</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">We never share your email with third parties.</p>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
            ) : (
              <><Send className="h-4 w-4" /> Send message</>
            )}
          </button>
        </div>
      </form>
    </article>
  );
}