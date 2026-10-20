"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "0800dad0-3624-4281-9ff8-ed73c80025c0";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitted(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

    if (!WEB3FORMS_ACCESS_KEY) {
      setError("Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your environment variables before submitting.");
      return;
    }

    payload.access_key = WEB3FORMS_ACCESS_KEY;
    payload.subject = "New project inquiry from consultweb website";
    payload.from_name = "ConsultWeb Website";

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || result.success !== true) {
        throw new Error(result.message ?? "Unable to submit the form right now.");
      }

      form.reset();
      setSubmitted(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Something went wrong while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="https://api.web3forms.com/submit"
      method="POST"
      className="space-y-5 rounded-[28px] border border-white/10 bg-[#0d221f]/90 p-5 sm:p-7"
    >
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value="New project inquiry from consultweb website" />
      <input type="hidden" name="from_name" value="ConsultWeb Website" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm text-slate-200" htmlFor="name">
            Name
          </label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-200" htmlFor="email">
            Email
          </label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm text-slate-200" htmlFor="service">
            Service required
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="flex h-12 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 text-sm text-white outline-none ring-0 focus-visible:ring-2 focus-visible:ring-lime-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071b18]"
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="mvp">Startup MVP & PoC</option>
            <option value="saas">SaaS app development</option>
            <option value="ecommerce">E-commerce website</option>
            <option value="booking">Booking system</option>
            <option value="dashboard">Custom dashboard / portal</option>
            <option value="automation">Automation / integration</option>
            <option value="website">Business website / landing page</option>
            <option value="marketplace">Marketplace / subscription platform</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-200" htmlFor="budget">
            Budget range
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="flex h-12 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 text-sm text-white outline-none ring-0 focus-visible:ring-2 focus-visible:ring-lime-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071b18]"
            required
          >
            <option value="" disabled>
              Select a budget
            </option>
            <option value="under-10k">Under 10k</option>
            <option value="10k-25k">10k - 25k</option>
            <option value="25k-50k">25k - 50k</option>
            <option value="50k-100k">50k - 100k</option>
            <option value="100k-plus">100k+</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-slate-200" htmlFor="timeline">
          Project timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          defaultValue=""
          className="flex h-12 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 text-sm text-white outline-none ring-0 focus-visible:ring-2 focus-visible:ring-lime-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071b18]"
          required
        >
          <option value="" disabled>
            Select a timeline
          </option>
          <option value="4-weeks">4 weeks</option>
          <option value="8-weeks">8 weeks</option>
          <option value="12-weeks">12 weeks</option>
          <option value="16-weeks">16 weeks</option>
          <option value="20-weeks">20 weeks</option>
          <option value="24-weeks">24 weeks</option>
          <option value="30-weeks">30 weeks</option>
          <option value="30-plus-weeks">30+ weeks</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-slate-200" htmlFor="description">
          Project description
        </label>
        <Textarea
          id="description"
          name="description"
          placeholder="Tell us about your business goals, current challenges, and what success looks like."
          required
        />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-slate-400">
          Connect the form to your Web3Forms access key to start receiving project inquiries by email.
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </div>

      {error ? (
        <div className="rounded-2xl border border-red-400/30 bg-red-500/8 px-4 py-3 text-sm text-red-100">
          {error}
        </div>
      ) : null}

      {submitted ? (
        <div className="rounded-2xl border border-lime-400/30 bg-lime-400/8 px-4 py-3 text-sm text-lime-100">
          Thanks! Your project inquiry has been submitted successfully.
        </div>
      ) : null}
    </form>
  );
}
