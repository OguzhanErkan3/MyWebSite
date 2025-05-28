"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  // Formspree form ID’nizi burada kullanın:
  const [state, handleSubmit] = useForm("mwpodzdr");

  // Gönderim başarılı olduğunda gösterilecek içerik:
  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 bg-[var(--background)]">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center text-2xl font-semibold mb-4">
            Thank You!
          </h2>
          <p className="text-center text-[var(--muted-foreground)] max-w-lg mx-auto">
            Your message has been sent successfully. I will get back to you shortly.
          </p>
        </div>
      </section>
    );
  }

  // Contact info array:
  const contactInfo = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Phone",
      details: "+90 551 629 34 98",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Email",
      details: "erkan.oguzhan99@gmail.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Location",
      details: "Bornova/İzmir",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact</h2>
        <p className="text-center text-[var(--muted-foreground)] max-w-2xl mx-auto mb-12">
          Feel free to fill out the form below or use the contact information to get in touch.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left column: contact details */}
          <div className="md:col-span-1 space-y-4">
            {contactInfo.map((info) => (
              <div key={info.title} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--primary-dark)] p-3 rounded-full text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{info.title}</h3>
                    <p className="text-[var(--muted-foreground)]">{info.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column: Formspree form */}
          <div className="md:col-span-2">
            <div className="card p-6">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot: hidden field to prevent spam */}
                <div style={{ display: "none" }}>
                  <label htmlFor="company">
                    Company
                    <input id="company" type="text" name="company" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      aria-required="true"
                      className="w-full p-2 border border-[var(--border)] rounded-md bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      aria-required="true"
                      className="w-full p-2 border border-[var(--border)] rounded-md bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Enter subject"
                    required
                    aria-required="true"
                    className="w-full p-2 border border-[var(--border)] rounded-md bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message"
                    rows={5}
                    required
                    aria-required="true"
                    className="w-full p-2 border border-[var(--border)] rounded-md bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
