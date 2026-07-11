CREATE TYPE public.submission_type AS ENUM ('feedback', 'complaint', 'bug_report', 'other');

CREATE TABLE public.feedback_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  type public.submission_type NOT NULL DEFAULT 'feedback',
  subject text NOT NULL,
  message text NOT NULL,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.feedback_submissions TO anon, authenticated;
GRANT ALL ON public.feedback_submissions TO service_role;

ALTER TABLE public.feedback_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit the form
CREATE POLICY "Anyone can submit feedback"
  ON public.feedback_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 100
    AND length(email) BETWEEN 3 AND 255
    AND length(subject) BETWEEN 1 AND 200
    AND length(message) BETWEEN 1 AND 5000
  );
-- No SELECT policy: submissions are only readable via service_role (admin/backend).