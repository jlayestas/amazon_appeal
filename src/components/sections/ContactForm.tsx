"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, ChevronDown, Globe2, Loader2 } from "lucide-react";
import { Label, FieldError, FieldHint } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const CONTACT_ENDPOINT = "/api/contact";

interface IssueTypeOption {
  value: string;
  label: string;
}

interface FormStrings {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phoneCountryLabel: string;
  phonePlaceholder: string;
  phoneHint: string;
  issueTypeLabel: string;
  issueTypeHint: string;
  summaryLabel: string;
  summaryPlaceholder: string;
  summaryHint: string;
  submitButton: string;
  submitting: string;
  repliesNote: string;
  required: string;
  optional: string;
}

interface ValidationStrings {
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  phoneRequired: string;
  issueTypeRequired: string;
  summaryRequired: string;
  summaryTooShort: string;
}

interface SuccessStrings {
  headline: string;
  body: string;
  note: string;
}

interface AfterSubmitStrings {
  headline: string;
  steps: readonly string[];
}

interface ContactFormProps {
  form: FormStrings;
  validation: ValidationStrings;
  issueTypes: readonly IssueTypeOption[];
  success: SuccessStrings;
  afterSubmit: AfterSubmitStrings;
}

interface FormValues {
  name: string;
  email: string;
  phoneCountryCode: string;
  phone: string;
  issueType: string;
  summary: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  issueType?: string;
  summary?: string;
}

const INITIAL: FormValues = {
  name: "",
  email: "",
  phoneCountryCode: "+1",
  phone: "",
  issueType: "",
  summary: "",
};

const COUNTRY_CODES: IssueTypeOption[] = [
  { value: "+1", label: "United States / Canada (+1)" },
  { value: "+52", label: "Mexico (+52)" },
  { value: "+502", label: "Guatemala (+502)" },
  { value: "+503", label: "El Salvador (+503)" },
  { value: "+504", label: "Honduras (+504)" },
  { value: "+505", label: "Nicaragua (+505)" },
  { value: "+506", label: "Costa Rica (+506)" },
  { value: "+507", label: "Panama (+507)" },
  { value: "+57", label: "Colombia (+57)" },
  { value: "+58", label: "Venezuela (+58)" },
  { value: "+51", label: "Peru (+51)" },
  { value: "+593", label: "Ecuador (+593)" },
  { value: "+54", label: "Argentina (+54)" },
  { value: "+56", label: "Chile (+56)" },
  { value: "+34", label: "Spain (+34)" },
];

function SuccessState({ success, afterSubmit }: { success: SuccessStrings; afterSubmit: AfterSubmitStrings }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-sm">
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a2e4a]/8"
        aria-hidden="true"
      >
        <CheckCircle size={28} className="text-[#1a2e4a]" />
      </div>
      <h2 className="mb-3 text-xl font-bold text-[#1a2e4a]">{success.headline}</h2>
      <p className="mb-8 max-w-sm text-sm leading-relaxed text-slate-500">{success.body}</p>

      <div className="w-full max-w-sm rounded-xl border border-slate-100 bg-[#f9f7f4] p-5 text-left">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#8a7560]">
          {afterSubmit.headline}
        </p>
        <ol className="space-y-3">
          {afterSubmit.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a2e4a] text-[10px] font-bold text-white"
              >
                {i + 1}
              </span>
              <span className="text-xs leading-relaxed text-slate-600">{step}</span>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-5 text-xs text-slate-400">{success.note}</p>
    </div>
  );
}

export function ContactForm({
  form,
  validation,
  issueTypes,
  success,
  afterSubmit,
}: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  // Honeypot — should stay empty; if a bot fills it we silently drop the submission
  const [honeypot, setHoneypot] = useState("");

  function validate(vals: FormValues): FormErrors {
    const errs: FormErrors = {};
    if (!vals.name.trim()) errs.name = validation.nameRequired;
    if (!vals.email.trim()) {
      errs.email = validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email)) {
      errs.email = validation.emailInvalid;
    }
    if (!vals.phone.trim()) errs.phone = validation.phoneRequired;
    if (!vals.issueType) errs.issueType = validation.issueTypeRequired;
    if (!vals.summary.trim()) {
      errs.summary = validation.summaryRequired;
    } else if (vals.summary.trim().length < 30) {
      errs.summary = validation.summaryTooShort;
    }
    return errs;
  }

  function set<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    const newValues = { ...values, [field]: value };
    setValues(newValues);
    if (touched[field]) {
      setErrors(validate(newValues));
    }
  }

  function blur(field: keyof FormValues) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Silently discard bot submissions that filled the honeypot
    if (honeypot) {
      setStatus("success");
      return;
    }

    const allTouched = Object.keys(INITIAL).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {} as typeof touched
    );
    setTouched(allTouched);
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: `${values.phoneCountryCode} ${values.phone}`,
          issueType: values.issueType,
          summary: values.summary,
          honey: honeypot,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success === true) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") return <SuccessState success={success} afterSubmit={afterSubmit} />;

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Case review intake form" className="space-y-6">
      {/* Honeypot — hidden from real users, traps bots that auto-fill all fields */}
      <input
        type="text"
        name="_honey"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" required>{form.nameLabel}</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={form.namePlaceholder}
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            onBlur={() => blur("name")}
            error={!!(touched.name && errors.name)}
            aria-describedby={touched.name && errors.name ? "name-error" : undefined}
            aria-invalid={!!(touched.name && errors.name)}
            autoComplete="name"
          />
          {touched.name && <FieldError id="name-error" message={errors.name} />}
        </div>
        <div>
          <Label htmlFor="email" required>{form.emailLabel}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={form.emailPlaceholder}
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            onBlur={() => blur("email")}
            error={!!(touched.email && errors.email)}
            aria-describedby={touched.email && errors.email ? "email-error" : undefined}
            aria-invalid={!!(touched.email && errors.email)}
            autoComplete="email"
          />
          {touched.email && <FieldError id="email-error" message={errors.email} />}
        </div>
      </div>

      <div>
        <Label htmlFor="phone" required>{form.phoneLabel}</Label>
        <div className="grid gap-3 sm:grid-cols-[minmax(210px,240px)_1fr]">
          <div>
            <label htmlFor="phoneCountryCode" className="sr-only">
              {form.phoneCountryLabel}
            </label>
            <div className="relative">
              <Globe2
                size={16}
                aria-hidden="true"
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a7560]"
              />
              <select
                id="phoneCountryCode"
                name="phone_country_code"
                value={values.phoneCountryCode}
                onChange={(e) => set("phoneCountryCode", e.target.value)}
                aria-label={form.phoneCountryLabel}
                className="block h-[46px] w-full appearance-none rounded-lg border border-slate-200 bg-[#f9f7f4] py-3 pl-10 pr-9 text-sm font-semibold text-[#1a2e4a] shadow-sm outline-none transition-colors hover:border-slate-300 focus:border-[#1a2e4a] focus:ring-2 focus:ring-[#1a2e4a]/20"
              >
                {COUNTRY_CODES.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                aria-hidden="true"
                className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder={form.phonePlaceholder}
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            onBlur={() => blur("phone")}
            error={!!(touched.phone && errors.phone)}
            aria-describedby={touched.phone && errors.phone ? "phone-error" : "phone-hint"}
            aria-invalid={!!(touched.phone && errors.phone)}
            autoComplete="tel-national"
          />
        </div>
        {touched.phone
          ? <FieldError id="phone-error" message={errors.phone} />
          : <FieldHint id="phone-hint">{form.phoneHint}</FieldHint>
        }
      </div>

      {/* Issue Type */}
      <div>
        <Label htmlFor="issueType" required>{form.issueTypeLabel}</Label>
        <Select
          id="issueType"
          name="issue_type"
          options={issueTypes as { value: string; label: string }[]}
          value={values.issueType}
          onChange={(e) => set("issueType", e.target.value)}
          onBlur={() => blur("issueType")}
          error={!!(touched.issueType && errors.issueType)}
          aria-describedby={
            touched.issueType && errors.issueType ? "issueType-error" : "issueType-hint"
          }
          aria-invalid={!!(touched.issueType && errors.issueType)}
        />
        {touched.issueType
          ? <FieldError id="issueType-error" message={errors.issueType} />
          : <FieldHint id="issueType-hint">{form.issueTypeHint}</FieldHint>
        }
      </div>

      {/* Summary */}
      <div>
        <Label htmlFor="summary" required>{form.summaryLabel}</Label>
        <Textarea
          id="summary"
          name="message"
          rows={5}
          placeholder={form.summaryPlaceholder}
          value={values.summary}
          onChange={(e) => set("summary", e.target.value)}
          onBlur={() => blur("summary")}
          error={!!(touched.summary && errors.summary)}
          aria-describedby={
            touched.summary && errors.summary ? "summary-error" : "summary-hint"
          }
          aria-invalid={!!(touched.summary && errors.summary)}
        />
        {touched.summary
          ? <FieldError id="summary-error" message={errors.summary} />
          : <FieldHint id="summary-hint">{form.summaryHint}</FieldHint>
        }
      </div>

      {/* Network error notice */}
      {status === "error" && (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
          Something went wrong sending your message. Please try again or email us directly.
        </p>
      )}

      {/* Submit */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#1a2e4a] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#243d60] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a2e4a] sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              <span>{form.submitting}</span>
            </>
          ) : (
            <>
              <span>{form.submitButton}</span>
              <ArrowRight size={15} aria-hidden="true" />
            </>
          )}
        </button>
        <p className="mt-3 text-xs text-slate-400">{form.repliesNote}</p>
      </div>
    </form>
  );
}
