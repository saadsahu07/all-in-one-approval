-- Explicitly deny SELECT on feedback_submissions to anon and authenticated.
-- Reads should only happen via service_role (server-side admin).
REVOKE SELECT ON public.feedback_submissions FROM anon, authenticated;

CREATE POLICY "No client reads on feedback_submissions"
  ON public.feedback_submissions
  FOR SELECT
  TO anon, authenticated
  USING (false);