/**
 * Page: Quote / Intake
 * Route: /quote
 * File: app/quote/page.tsx
 */

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "ok" | "error">(
    "idle"
  );
  const [submitError, setSubmitError] = useState<string>("");

  async function submitIntake() {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitError("");

    try {
      const payload = {
        productLine,
        state,
        needTiming,
        firstName,
        lastName,
        email,
        phone,
        company,
        bestTime,
        contactMethod,
        hasPriorDenial,
        claimsHistory,
        notes,
        summary,
        submittedAt: new Date().toISOString(),
      };

      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Submission failed");
      }

      setSubmitStatus("ok");
    } catch (e: any) {
      setSubmitStatus("error");
      setSubmitError(e?.message || "Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  }
