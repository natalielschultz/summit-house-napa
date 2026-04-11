"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

interface FormData {
  name: string;
  email: string;
  phone: string;
  months: string;
  guests: string;
  referral: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  months: "",
  guests: "",
  referral: "",
  message: "",
};

const referralOptions = [
  "Select one",
  "Search engine",
  "Social media",
  "Friend or family",
  "Travel publication",
  "Real estate agent",
  "Other",
];

const inputClasses =
  "w-full bg-transparent border border-charcoal px-4 py-3 font-sans text-sm text-text placeholder:text-text-muted/60 rounded-none focus:outline-none focus:border-sage transition-colors duration-400";

const labelClasses =
  "font-sans text-xs uppercase tracking-[0.15em] text-charcoal mb-2 block";

interface InquiryFormProps {
  selectedMonth?: string;
}

export default function InquiryForm({ selectedMonth }: InquiryFormProps) {
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    months: selectedMonth || "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (selectedMonth) {
      setFormData((prev) => ({ ...prev, months: selectedMonth }));
    }
  }, [selectedMonth]);
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.months.trim()) {
      newErrors.months = "Please specify your desired dates";
    }
    if (!formData.guests.trim()) {
      newErrors.guests = "Number of guests is required";
    } else if (isNaN(Number(formData.guests)) || Number(formData.guests) < 1) {
      newErrors.guests = "Please enter a valid number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const res = await fetch("https://formspree.io/f/maqloyrw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        trackEvent("inquiry_submitted", {
          dates: formData.months,
          guests: formData.guests,
          referral: formData.referral,
        });
      } else {
        setErrors({ form: "Something went wrong. Please try again or email us directly." });
      }
    } catch {
      setErrors({ form: "Something went wrong. Please try again or email us directly." });
    }
  }

  return (
    <section className="bg-parchment py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6 md:px-12">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-center py-16"
            >
              <h3 className="font-serif font-light uppercase tracking-[2px] text-xl md:text-2xl text-ink mb-4">
                Thank you.
              </h3>
              <p className="font-sans text-base text-text-muted">
                Your host will be in touch within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              noValidate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClasses}
                />
                {errors.name && (
                  <p className="font-sans text-xs text-red-700 mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p className="font-sans text-xs text-red-700 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(optional)"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="months" className={labelClasses}>
                    Desired Dates *
                  </label>
                  <input
                    id="months"
                    name="months"
                    type="text"
                    value={formData.months}
                    onChange={handleChange}
                    placeholder="e.g. June 15 – July 14, 2026"
                    className={inputClasses}
                  />
                  {errors.months && (
                    <p className="font-sans text-xs text-red-700 mt-1">
                      {errors.months}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="guests" className={labelClasses}>
                    Number of Guests *
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="e.g. 4"
                    className={inputClasses}
                  />
                  {errors.guests && (
                    <p className="font-sans text-xs text-red-700 mt-1">
                      {errors.guests}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="referral" className={labelClasses}>
                  How Did You Hear About Us?
                </label>
                <select
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2212%22%20height%3d%2212%22%20viewBox%3d%220%200%2012%2012%22%3e%3cpath%20fill%3d%22%234A4238%22%20d%3d%22M2%204l4%204%204-4%22%2f%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_1rem_center]`}
                >
                  {referralOptions.map((option) => (
                    <option key={option} value={option === "Select one" ? "" : option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your ideal stay..."
                  className={`${inputClasses} resize-none`}
                />
                {errors.message && (
                  <p className="font-sans text-xs text-red-700 mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {errors.form && (
                <p className="font-sans text-sm text-error">
                  {errors.form}
                </p>
              )}
              <div className="mt-2">
                <Button variant="primary" type="submit">
                  Send Inquiry
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
