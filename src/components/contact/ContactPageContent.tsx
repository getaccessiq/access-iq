"use client";

import React, { useState } from "react";
import AnimatedGradient from "../AnimatedGradient";
import ScrollReveal from "../ScrollReveal";

const helpCards = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.0006 4.66663C35.9718 4.66663 39.802 4.74961 43.4017 4.90361L43.5788 4.91143C46.6913 5.04447 49.259 5.15401 51.3574 5.57809C53.5993 6.03119 55.4462 6.86567 57.0734 8.50516C60.3118 11.7683 60.3468 15.8678 60.5606 21.9296C60.6297 23.8908 60.6673 25.9214 60.6673 28C60.6673 30.0786 60.6297 32.109 60.5606 34.0704C60.3468 40.132 60.3118 44.2317 57.0734 47.4946C55.4462 49.1344 53.5993 49.9688 51.3574 50.4218C49.2588 50.8458 46.6916 50.9554 43.5788 51.0885L43.4017 51.0962C41.4286 51.1808 39.3862 51.244 37.2897 51.2837C35.1641 51.3242 34.5961 51.3618 34.1308 51.5389C33.6644 51.7168 33.2313 52.0528 31.662 53.3984L25.8496 58.3829C25.1343 58.9962 24.2216 59.3333 23.2793 59.3333C21.1006 59.3328 19.3346 57.5666 19.334 55.388V51.0389C16.7052 50.9224 14.4928 50.7954 12.6439 50.4218C10.402 49.9688 8.555 49.1344 6.92774 47.4946C3.68948 44.2317 3.6546 40.132 3.44076 34.0704C3.37156 32.109 3.33398 30.0786 3.33398 28C3.33398 25.9214 3.37156 23.8908 3.44076 21.9296C3.6546 15.8679 3.68948 11.7683 6.92774 8.50516C8.555 6.86567 10.402 6.03119 12.6439 5.57809C14.7424 5.15401 17.3099 5.04447 20.4225 4.91143L20.5996 4.90361C24.1993 4.74961 28.0294 4.66663 32.0006 4.66663ZM21.3574 25.3333C19.885 25.3336 18.6908 26.5274 18.6908 28C18.6908 29.4725 19.885 30.6664 21.3574 30.6666H21.3809L21.6543 30.6536C22.9988 30.517 24.0475 29.3805 24.0475 28C24.0475 26.6193 22.9988 25.483 21.6543 25.3463L21.3809 25.3333H21.3574ZM32.011 25.3333C30.539 25.3341 29.3444 26.5277 29.3444 28C29.3444 29.4722 30.539 30.6658 32.011 30.6666H32.0372C33.5094 30.6661 34.7038 29.4722 34.7038 28C34.7038 26.5276 33.5094 25.3339 32.0372 25.3333H32.011ZM42.6673 25.3333C41.1948 25.3336 40.0006 26.5274 40.0006 28C40.0006 29.4725 41.1948 30.6664 42.6673 30.6666H42.6908C44.1636 30.6666 45.3574 29.4728 45.3574 28C45.3574 26.5272 44.1636 25.3333 42.6908 25.3333H42.6673Z" fill="url(#ctHelpGrad)" fillOpacity="0.8" />
        <defs>
          <linearGradient id="ctHelpGrad" x1="64.4576" y1="32" x2="3.33393" y2="32.0219" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD" />
            <stop offset="0.5" stopColor="#2FB8DC" />
            <stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Explore Our Help Center",
    description: "Browse our knowledge base, accessibility guides, and compliance resources.",
    cta: "Visit Help Center",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M21.6 3.33337C23.0359 3.33337 24.2 4.50015 24.2 5.93943V8.56761C25.7411 8.54545 27.4091 8.54545 29.2099 8.54548H34.7901C36.5909 8.54545 38.2589 8.54545 39.8 8.56761V5.93943C39.8 4.50015 40.964 3.33337 42.4 3.33337C43.836 3.33337 45 4.50015 45 5.93943V8.79863C45.4701 8.84153 45.9227 8.89169 46.3581 8.95039C49.4784 9.37089 52.1059 10.2705 54.1923 12.362C56.2789 14.4535 57.1765 17.0869 57.596 20.2146C58 23.2271 58 27.0574 58 31.8094V37.4027C58 42.1547 58 45.9851 57.596 48.9976C57.1765 52.1254 56.2789 54.7587 54.1923 56.8502C52.1059 58.9416 49.4784 59.8414 46.3581 60.2619C43.3525 60.6667 39.5312 60.6667 34.7901 60.6667H29.2099C24.4688 60.6667 20.6474 60.6667 17.6419 60.2619C14.5215 59.8414 11.8943 58.9416 9.80763 56.8502C7.72099 54.7587 6.82347 52.1254 6.40395 48.9976C5.99987 45.9851 5.99995 42.155 6 37.403V31.8094C5.99995 27.0574 5.99987 23.227 6.40395 20.2146C6.82347 17.0869 7.72099 14.4535 9.80763 12.362C11.8943 10.2705 14.5215 9.37089 17.6419 8.95039C18.0774 8.89169 18.53 8.84153 19 8.79863V5.93943C19 4.50015 20.1641 3.33337 21.6 3.33337ZM11.237 26C11.2012 27.7222 11.2 29.7008 11.2 32V37.212C11.2 42.1998 11.2055 45.6784 11.5576 48.3032C11.8996 50.8528 12.5251 52.203 13.4846 53.1646C14.4441 54.1264 15.7911 54.7534 18.3349 55.0963C20.9534 55.4491 24.4239 55.4547 29.4 55.4547H34.6C39.5763 55.4547 43.0467 55.4491 45.6653 55.0963C48.2091 54.7534 49.556 54.1264 50.5155 53.1646C51.4749 52.203 52.1005 50.8528 52.4424 48.3032C52.7944 45.6784 52.8 42.1998 52.8 37.212V32C52.8 29.7008 52.7989 27.7222 52.7632 26H11.237Z" fill="url(#ctDemoGrad1)" fillOpacity="0.8" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18.666 35.3958C18.666 33.9233 19.8599 32.7291 21.3327 32.7291H21.3566C22.8294 32.7291 24.0233 33.9233 24.0233 35.3958C24.0233 36.8686 22.8294 38.0625 21.3566 38.0625H21.3327C19.8599 38.0625 18.666 36.8686 18.666 35.3958ZM29.3207 35.3958C29.3207 33.9233 30.5145 32.7291 31.9873 32.7291H32.0114C33.4842 32.7291 34.678 33.9233 34.678 35.3958C34.678 36.8686 33.4842 38.0625 32.0114 38.0625H31.9873C30.5145 38.0625 29.3207 36.8686 29.3207 35.3958ZM39.9754 35.3958C39.9754 33.9233 41.1692 32.7291 42.642 32.7291H42.666C44.1388 32.7291 45.3327 33.9233 45.3327 35.3958C45.3327 36.8686 44.1388 38.0625 42.666 38.0625H42.642C41.1692 38.0625 39.9754 36.8686 39.9754 35.3958ZM18.666 46.0625C18.666 44.5899 19.8599 43.3958 21.3327 43.3958H21.3566C22.8294 43.3958 24.0233 44.5899 24.0233 46.0625C24.0233 47.5353 22.8294 48.7291 21.3566 48.7291H21.3327C19.8599 48.7291 18.666 47.5353 18.666 46.0625ZM29.3207 46.0625C29.3207 44.5899 30.5145 43.3958 31.9873 43.3958H32.0114C33.4842 43.3958 34.678 44.5899 34.678 46.0625C34.678 47.5353 33.4842 48.7291 32.0114 48.7291H31.9873C30.5145 48.7291 29.3207 47.5353 29.3207 46.0625Z" fill="url(#ctDemoGrad2)" fillOpacity="0.8" />
        <defs>
          <linearGradient id="ctDemoGrad1" x1="61.4377" y1="32" x2="5.99995" y2="32.0173" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD" />
            <stop offset="0.5" stopColor="#2FB8DC" />
            <stop offset="1" stopColor="#00E19A" />
          </linearGradient>
          <linearGradient id="ctDemoGrad2" x1="47.0956" y1="40.7291" x2="18.666" y2="40.7453" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD" />
            <stop offset="0.5" stopColor="#2FB8DC" />
            <stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Schedule a Personalized Demo",
    description: "See how AccessIQ helps organizations achieve WCAG and ADA compliance.",
    cta: "Book Your Demo",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.0006 4.66663C35.9718 4.66663 39.802 4.74961 43.4017 4.90361L43.5788 4.91143C46.6913 5.04447 49.259 5.15401 51.3574 5.57809C53.5993 6.03119 55.4462 6.86567 57.0734 8.50516C60.3118 11.7683 60.3468 15.8678 60.5606 21.9296C60.6297 23.8908 60.6673 25.9214 60.6673 28C60.6673 30.0786 60.6297 32.109 60.5606 34.0704C60.3468 40.132 60.3118 44.2317 57.0734 47.4946C55.4462 49.1344 53.5993 49.9688 51.3574 50.4218C49.2588 50.8458 46.6916 50.9554 43.5788 51.0885L43.4017 51.0962C41.4286 51.1808 39.3862 51.244 37.2897 51.2837C35.1641 51.3242 34.5961 51.3618 34.1308 51.5389C33.6644 51.7168 33.2313 52.0528 31.662 53.3984L25.8496 58.3829C25.1343 58.9962 24.2216 59.3333 23.2793 59.3333C21.1006 59.3328 19.3346 57.5666 19.334 55.388V51.0389C16.7052 50.9224 14.4928 50.7954 12.6439 50.4218C10.402 49.9688 8.555 49.1344 6.92774 47.4946C3.68948 44.2317 3.6546 40.132 3.44076 34.0704C3.37156 32.109 3.33398 30.0786 3.33398 28C3.33398 25.9214 3.37156 23.8908 3.44076 21.9296C3.6546 15.8679 3.68948 11.7683 6.92774 8.50516C8.555 6.86567 10.402 6.03119 12.6439 5.57809C14.7424 5.15401 17.3099 5.04447 20.4225 4.91143L20.5996 4.90361C24.1993 4.74961 28.0294 4.66663 32.0006 4.66663ZM21.3574 25.3333C19.885 25.3336 18.6908 26.5274 18.6908 28C18.6908 29.4725 19.885 30.6664 21.3574 30.6666H21.3809L21.6543 30.6536C22.9988 30.517 24.0475 29.3805 24.0475 28C24.0475 26.6193 22.9988 25.483 21.6543 25.3463L21.3809 25.3333H21.3574ZM32.011 25.3333C30.539 25.3341 29.3444 26.5277 29.3444 28C29.3444 29.4722 30.539 30.6658 32.011 30.6666H32.0372C33.5094 30.6661 34.7038 29.4722 34.7038 28C34.7038 26.5276 33.5094 25.3339 32.0372 25.3333H32.011ZM42.6673 25.3333C41.1948 25.3336 40.0006 26.5274 40.0006 28C40.0006 29.4725 41.1948 30.6664 42.6673 30.6666H42.6908C44.1636 30.6666 45.3574 29.4728 45.3574 28C45.3574 26.5272 44.1636 25.3333 42.6908 25.3333H42.6673Z" fill="url(#ctLiveChatGrad)" fillOpacity="0.8" />
        <defs>
          <linearGradient id="ctLiveChatGrad" x1="64.4576" y1="32" x2="3.33393" y2="32.0219" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD" />
            <stop offset="0.5" stopColor="#2FB8DC" />
            <stop offset="1" stopColor="#00E19A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Accessibility Support",
    description: "Get instant answers from our compliance experts. Connect with a specialist in real time.",
    cta: "Start Live Chat",
  },
];

type FormDataType = {
  firstName: string;
  email: string;
  businessName: string;
  service: string;
  message: string;
};

type FormErrors = {
  firstName?: string;
  email?: string;
  service?: string;
  message?: string;
};

const initialFormData: FormDataType = {
  firstName: "",
  email: "",
  businessName: "",
  service: "",
  message: "",
};

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "audit", label: "Accessibility Audit" },
  { value: "remediation", label: "Remediation" },
  { value: "monitoring", label: "Continuous Monitoring" },
  { value: "consultation", label: "Compliance Consultation" },
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const ContactPageContent = () => {
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (status) {
      setStatus("");
      setStatusType("");
    }
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!isValidEmail(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service.trim()) {
      nextErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please share a few details about your request.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please complete all required fields and correct any highlighted errors.");
      setStatusType("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("");
    setStatusType("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          email: formData.email.trim(),
          businessName: formData.businessName.trim(),
          service: formData.service.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Your inquiry has been sent successfully.");
        setStatusType("success");
        setFormData(initialFormData);
        setErrors({});
      } else {
        setStatus(result?.error || "Something went wrong. Please try again.");
        setStatusType("error");
        console.error(result);
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      setStatusType("error");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClass =
    "w-full rounded-2xl border bg-[#08111f]/90 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-cyan-300/50 focus:ring-4 focus:ring-cyan-400/10";
  const inputNormalClass = "border-white/10";
  const inputErrorClass = "border-red-400/60 ring-4 ring-red-400/10";

  return (
    <section className="relative overflow-hidden bg-[#07101d]">
      <AnimatedGradient />

      <div className="relative z-10">
        <section className="relative overflow-hidden pb-12 pt-[108px] md:pb-16 md:pt-[128px]">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-3xl" />
            <div className="absolute left-[8%] top-[12%] h-[280px] w-[280px] rounded-full bg-teal-400/8 blur-3xl" />
            <div className="absolute right-[10%] top-[16%] h-[320px] w-[320px] rounded-full bg-sky-500/8 blur-3xl" />
          </div>

          <div className="container mx-auto px-6 text-center lg:px-8">
            <ScrollReveal animation="fade-in-up" delay={120}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.05)] backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.95)]" />
                Accessibility Compliance Consultation
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={180}>
              <h1 className="mx-auto mt-7 max-w-5xl text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
                Speak With a{" "}
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  WCAG & ADA
                </span>{" "}
                Compliance Specialist
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={240}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg lg:text-[20px]">
                Get expert guidance on accessibility compliance, ADA risk, and practical
                next steps to improve your website and reduce legal exposure.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={290}>
              <p className="mt-8 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300/75 sm:text-xs">
                Standards we support
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={340}>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {["WCAG 2.2 AA", "ADA", "Section 508", "EN 301 549"].map((badge) => (
                  <div
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition duration-300 hover:border-cyan-300/25 hover:bg-white/[0.06] hover:text-white"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-cyan-300"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.057 1.75C14.248 1.75 15.969 1.75001 17.312 1.93101C18.689 2.11601 19.781 2.50301 20.639 3.36101C21.497 4.21901 21.884 5.31099 22.069 6.68799C22.25 8.03099 22.25 9.75199 22.25 11.943V12.057C22.25 14.248 22.25 15.969 22.069 17.312C21.884 18.689 21.497 19.781 20.639 20.639C19.781 21.497 18.689 21.884 17.312 22.069C15.969 22.25 14.248 22.25 12.057 22.25H11.943C9.75199 22.25 8.03099 22.25 6.68799 22.069C5.31099 21.884 4.21901 21.497 3.36101 20.639C2.50301 19.781 2.11601 18.689 1.93101 17.312C1.75001 15.969 1.75 14.248 1.75 12.057V11.943C1.75 9.75199 1.75001 8.03099 1.93101 6.68799C2.11601 5.31099 2.50301 4.21901 3.36101 3.36101C4.21901 2.50301 5.31099 2.11601 6.68799 1.93101C8.03099 1.75001 9.75199 1.75 11.943 1.75H12.057ZM16.676 8.26299C17.083 8.63599 17.11 9.269 16.737 9.676L11.237 15.676C11.053 15.877 10.794 15.994 10.522 16C10.249 16.006 9.98599 15.9 9.79299 15.707L7.29299 13.207C6.90199 12.817 6.90199 12.183 7.29299 11.793C7.68299 11.402 8.31701 11.402 8.70701 11.793L10.469 13.554L15.263 8.324C15.636 7.917 16.269 7.88999 16.676 8.26299Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="container mx-auto px-6 py-8 md:py-14 lg:px-8">
          <ScrollReveal animation="fade-in-up" delay={200} duration={800}>
            <div
              className="rounded-[28px] p-[1px] shadow-[0_0_60px_rgba(0,212,170,0.08)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,170,0.85), rgba(0,136,204,0.9), rgba(0,212,170,0.75))",
              }}
            >
              <div className="overflow-hidden rounded-[27px] bg-[linear-gradient(180deg,#111d2e_0%,#0c1622_100%)]">
                <div className="grid lg:grid-cols-[40%_60%]">
                  <div className="border-b border-white/8 p-7 md:p-9 lg:border-b-0 lg:border-r lg:border-white/8 xl:p-10">
                    <div className="max-w-md">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300/75">
                        Contact details
                      </p>
                      <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[30px]">
                        Contact AccessIQ
                      </h2>
                      <p className="mt-3 text-[15px] leading-7 text-slate-400">
                        Connect with our accessibility team to discuss audits, remediation,
                        compliance consultation, or ongoing monitoring.
                      </p>
                    </div>

                    <div className="mt-8 space-y-4">
                      {[
                        {
                          label: "Email",
                          value: "support@getaccessiq.com",
                          icon: (
                            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="24" cy="24" r="24" fill="#FAE9E9" fillOpacity="0.08" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M26.92 14.7868C24.967 14.7377 23.033 14.7377 21.08 14.7868L21.0218 14.7883C19.497 14.8265 18.27 14.8574 17.2867 15.0286C16.2572 15.2079 15.4205 15.5518 14.7136 16.2613C14.0097 16.9679 13.6676 17.7926 13.4918 18.8054C13.3243 19.7698 13.2988 20.9668 13.2672 22.4496L13.2659 22.5084C13.2447 23.5047 13.2447 24.4952 13.2659 25.4916L13.2672 25.5503C13.2988 27.0332 13.3243 28.2302 13.4918 29.1946C13.6676 30.2074 14.0097 31.0321 14.7136 31.7386C15.4205 32.4482 16.2572 32.7921 17.2867 32.9714C18.27 33.1426 19.497 33.1734 21.0218 33.2117L21.08 33.2132C23.033 33.2622 24.967 33.2622 26.92 33.2132L26.9782 33.2117C28.503 33.1734 29.73 33.1426 30.7133 32.9714C31.7428 32.7921 32.5795 32.4482 33.2864 31.7386C33.9903 31.0321 34.3324 30.2074 34.5082 29.1946C34.6757 28.2302 34.7012 27.0332 34.7328 25.5503L34.7341 25.4916C34.7553 24.4952 34.7553 23.5047 34.7341 22.5084L34.7328 22.4496C34.7012 20.9668 34.6757 19.7698 34.5082 18.8054C34.3324 17.7926 33.9903 16.9679 33.2864 16.2613C32.5795 15.5518 31.7428 15.2079 30.7133 15.0286C29.73 14.8574 28.503 14.8266 26.9782 14.7883L26.92 14.7868ZM19.3818 19.8545C19.0253 19.6437 18.5653 19.7619 18.3545 20.1184C18.1437 20.475 18.2619 20.9349 18.6184 21.1457L21.5604 22.8851C22.4313 23.4 23.1827 23.7501 24.0001 23.7501C24.8175 23.7501 25.569 23.4 26.4398 22.8851L29.3818 21.1457C29.7384 20.9349 29.8565 20.475 29.6457 20.1184C29.4349 19.7619 28.975 19.6437 28.6184 19.8545L25.6764 21.594C24.832 22.0931 24.3831 22.2501 24.0001 22.2501C23.6171 22.2501 23.1682 22.0931 22.3238 21.594L19.3818 19.8545Z" fill="url(#ctEmailGrad)" fillOpacity="0.8" />
                              <defs>
                                <linearGradient id="ctEmailGrad" x1="36.1714" y1="24" x2="13.25" y2="24.0091" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#3770FD" />
                                  <stop offset="0.5" stopColor="#2FB8DC" />
                                  <stop offset="1" stopColor="#00E19A" />
                                </linearGradient>
                              </defs>
                            </svg>
                          ),
                        },
                        {
                          label: "Phone Number",
                          value: "(833) 232-2730",
                          icon: (
                            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="24" cy="24" r="24" fill="#FAE9E9" fillOpacity="0.08" />
                              <path d="M29.6252 25.674L32.2682 27.25C32.8142 27.576 33.0961 28.21 32.9711 28.834C32.4601 31.393 29.8902 33.033 27.3732 32.342C21.4342 30.712 16.7951 26.087 15.1591 20.135C14.4671 17.617 16.1052 15.045 18.6652 14.533L18.682 14.53C19.307 14.405 19.9442 14.688 20.2692 15.237L21.8322 17.876C22.3882 18.815 22.112 20.024 21.203 20.628L19.5421 21.733C20.7141 24.54 22.9541 26.789 25.7531 27.959L26.8681 26.294C27.4771 25.387 28.6872 25.115 29.6252 25.674Z" fill="url(#ctPhoneGrad)" fillOpacity="0.8" />
                              <defs>
                                <linearGradient id="ctPhoneGrad" x1="34.1904" y1="23.5006" x2="15" y2="23.5072" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#3770FD" />
                                  <stop offset="0.5" stopColor="#2FB8DC" />
                                  <stop offset="1" stopColor="#00E19A" />
                                </linearGradient>
                              </defs>
                            </svg>
                          ),
                        },
                        {
                          label: "Address",
                          value: "15257 Amberly Dr Ste 367\nTampa, FL 33647, United States",
                          icon: (
                            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="24" cy="24" r="24" fill="#FAE9E9" fillOpacity="0.08" />
                              <path d="M25.1691 13.3828C19.9301 13.3828 15.668 17.6449 15.668 22.8839C15.668 28.4538 20.8422 31.8719 24.2659 34.1332L24.8583 34.5267C24.9522 34.5893 25.0607 34.6206 25.168 34.6206C25.2753 34.6206 25.3837 34.5893 25.4776 34.5267L26.07 34.1332C29.4938 31.8719 34.668 28.4538 34.668 22.8839C34.6702 17.6449 30.4081 13.3828 25.1691 13.3828ZM25.1691 25.6784C23.6254 25.6784 22.3746 24.4276 22.3746 22.8839C22.3746 21.3403 23.6254 20.0895 25.1691 20.0895C26.7127 20.0895 27.9635 21.3403 27.9635 22.8839C27.9635 24.4276 26.7127 25.6784 25.1691 25.6784Z" fill="url(#ctLocationGrad)" fillOpacity="0.8" />
                              <defs>
                                <linearGradient id="ctLocationGrad" x1="35.924" y1="24.0017" x2="15.668" y2="24.0079" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#3770FD" />
                                  <stop offset="0.5" stopColor="#2FB8DC" />
                                  <stop offset="1" stopColor="#00E19A" />
                                </linearGradient>
                              </defs>
                            </svg>
                          ),
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/8 bg-white/[0.04] p-5 backdrop-blur-xl"
                        >
                          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                            {item.label}
                          </div>
                          <div className="mt-3 flex items-start gap-3">
                            <div className="shrink-0">{item.icon}</div>
                            <div className="whitespace-pre-line text-[15px] leading-7 text-slate-200">
                              {item.value}
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5 backdrop-blur-xl">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                          Service Hours
                        </div>
                        <p className="mt-3 text-[15px] leading-7 text-slate-200">
                          Monday - Friday 9:00 AM - 5:00 PM EST
                          <br />
                          Saturday 9:00 AM - 2:00 PM EST
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5 backdrop-blur-xl">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                          Support Availability
                        </div>
                        <p className="mt-3 text-[15px] leading-7 text-slate-200">
                          Our accessibility specialists are available 24/7 via email and live chat.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 md:p-9 xl:p-10">
                    <div className="max-w-2xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300/75">
                        Consultation request
                      </p>
                      <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[30px]">
                        Request Your Consultation
                      </h2>
                      <p className="mt-3 text-[15px] leading-7 text-slate-400">
                        Tell us about your accessibility needs and our team will get back to you
                        with the right next steps.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                      <div className="grid gap-5 md:grid-cols-2">
                        <div className="md:col-span-1">
                          <label
                            htmlFor="firstName"
                            className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400"
                          >
                            First Name <span className="text-red-300">*</span>
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                            aria-invalid={!!errors.firstName}
                            aria-describedby={errors.firstName ? "firstName-error" : undefined}
                            className={`${inputBaseClass} ${errors.firstName ? inputErrorClass : inputNormalClass}`}
                          />
                          {errors.firstName && (
                            <p id="firstName-error" className="mt-2 text-sm text-red-300">
                              {errors.firstName}
                            </p>
                          )}
                        </div>

                        <div className="md:col-span-1">
                          <label
                            htmlFor="email"
                            className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400"
                          >
                            Email <span className="text-red-300">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className={`${inputBaseClass} ${errors.email ? inputErrorClass : inputNormalClass}`}
                          />
                          {errors.email && (
                            <p id="email-error" className="mt-2 text-sm text-red-300">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="businessName"
                          className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400"
                        >
                          Business Name
                        </label>
                        <input
                          id="businessName"
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className={`${inputBaseClass} ${inputNormalClass}`}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400"
                        >
                          What kind of service are you looking for? <span className="text-red-300">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          aria-invalid={!!errors.service}
                          aria-describedby={errors.service ? "service-error" : undefined}
                          className={`${inputBaseClass} ${errors.service ? inputErrorClass : inputNormalClass} appearance-none`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%2394a3b8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 16px center",
                          }}
                        >
                          {serviceOptions.map((option) => (
                            <option key={option.value || "empty"} value={option.value} className="bg-[#0b1120]">
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p id="service-error" className="mt-2 text-sm text-red-300">
                            {errors.service}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400"
                        >
                          Anything else you&apos;d like to share? <span className="text-red-300">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your website, goals, accessibility issues, or compliance concerns."
                          rows={5}
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                          className={`${inputBaseClass} ${errors.message ? inputErrorClass : inputNormalClass} min-h-[148px] resize-none`}
                        />
                        {errors.message && (
                          <p id="message-error" className="mt-2 text-sm text-red-300">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {status && (
                        <div
                          className={`rounded-2xl border px-4 py-3 text-sm ${
                            statusType === "success"
                              ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
                              : "border-red-400/30 bg-red-500/10 text-red-200"
                          }`}
                        >
                          {status}
                        </div>
                      )}

                      <div className="mt-2 border-t border-white/8 pt-5">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                          <p className="max-w-[540px] text-xs leading-6 text-slate-500">
                            Fields marked with <span className="text-red-300">*</span> are required.
                            Our team will respond within one business day with the most relevant next steps.
                          </p>

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex min-h-[54px] min-w-[220px] items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                            style={{
                              background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                              boxShadow: "0 10px 30px rgba(0, 136, 204, 0.22)",
                            }}
                          >
                            {isSubmitting ? "Sending..." : "Submit Inquiry"}
                          </button>
                        </div>

                        <div className="mt-4 flex flex-col gap-2 text-[12px] text-slate-500 sm:flex-row sm:flex-wrap sm:gap-4">
                          <span>✓ No-obligation consultation</span>
                          <span>✓ Reviewed by accessibility specialists</span>
                          <span>✓ Response within one business day</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="container mx-auto px-6 pb-24 md:pb-32 lg:px-8">
          <ScrollReveal animation="fade-in-up">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300/75">
                Additional support
              </p>
              <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[40px]">
                Have Questions? We&apos;re Here to Help.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-slate-400 md:text-base">
                Explore support resources, schedule a live walkthrough, or connect with a specialist.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={200} stagger>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {helpCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col rounded-[26px] border border-[#d9f5ef] bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.10)]"
                >
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ background: "rgba(0,212,170,0.10)" }}
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-[#0b0f1a]">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-7 text-slate-500">
                    {card.description}
                  </p>

                  <button
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                    }}
                  >
                    {card.cta}
                  </button>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      </div>
    </section>
  );
};

export default ContactPageContent;