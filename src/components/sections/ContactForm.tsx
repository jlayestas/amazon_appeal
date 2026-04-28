"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2, Info } from "lucide-react";
import { Label, FieldError, FieldHint } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox } from "@/components/ui/Checkbox";
import { FileUpload } from "@/components/ui/FileUpload";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/jlayestas@gmail.com";

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
  phonePlaceholder: string;
  phoneHint: string;
  companyLabel: string;
  companyPlaceholder: string;
  merchantIdLabel: string;
  merchantIdPlaceholder: string;
  merchantIdHint: string;
  sellingPlanLabel: string;
  businessModelLabel: string;
  suspensionDateLabel: string;
  suspensionDateHint: string;
  priorAppealsLabel: string;
  issueTypeLabel: string;
  issueTypeHint: string;
  summaryLabel: string;
  summaryPlaceholder: string;
  summaryHint: string;
  fileLabel: string;
  fileHint: string;
  consentText: string;
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
  issueTypeRequired: string;
  summaryRequired: string;
  summaryTooShort: string;
  consentRequired: string;
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
  formNote: string;
  form: FormStrings;
  validation: ValidationStrings;
  issueTypes: readonly IssueTypeOption[];
  sellingPlanOptions: readonly IssueTypeOption[];
  businessModelOptions: readonly IssueTypeOption[];
  priorAppealsOptions: readonly IssueTypeOption[];
  success: SuccessStrings;
  afterSubmit: AfterSubmitStrings;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  merchantId: string;
  sellingPlan: string;
  businessModel: string;
  suspensionDate: string;
  priorAppeals: string;
  issueType: string;
  summary: string;
  file: File | null;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  issueType?: string;
  summary?: string;
  consent?: string;
}

const INITIAL: FormValues = {
  name: "", email: "", phone: "", company: "", merchantId: "",
  sellingPlan: "", businessModel: "", suspensionDate: "", priorAppeals: "",
  issueType: "", summary: "", file: null, consent: false,
};

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
  formNote,
  form,
  validation,
  issueTypes,
  sellingPlanOptions,
  businessModelOptions,
  priorAppealsOptions,
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
    if (!vals.issueType) errs.issueType = validation.issueTypeRequired;
    if (!vals.summary.trim()) {
      errs.summary = validation.summaryRequired;
    } else if (vals.summary.trim().length < 100) {
      errs.summary = validation.summaryTooShort;
    }
    if (!vals.consent) errs.consent = validation.consentRequired;
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
      const data = new FormData();
      data.append("name", values.name);
      data.append("email", values.email);
      if (values.phone) data.append("phone", values.phone);
      if (values.company) data.append("company", values.company);
      if (values.merchantId) data.append("merchant_id", values.merchantId);
      if (values.sellingPlan) data.append("selling_plan", values.sellingPlan);
      if (values.businessModel) data.append("business_model", values.businessModel);
      if (values.suspensionDate) data.append("suspension_date", values.suspensionDate);
      if (values.priorAppeals) data.append("prior_appeals", values.priorAppeals);
      data.append("issue_type", values.issueType);
      data.append("message", values.summary);
      if (values.file) data.append("attachment", values.file);

      // FormSubmit configuration fields
      data.append("_subject", "New Case Review Request — Amazon Appeal Pro");
      data.append("_template", "table");
      data.append("_captcha", "false");
      data.append("_replyto", values.email);
      // Honeypot must be included as empty so FormSubmit also checks server-side
      data.append("_honey", "");

      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      const json = await res.json();
      if (json.success === "true" || json.success === true) {
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

      {/* Service note */}
      <div
        role="note"
        className="flex items-start gap-3 rounded-lg border border-[#1a2e4a]/10 bg-[#f0f4fa] px-4 py-3.5"
      >
        <Info size={15} className="mt-0.5 shrink-0 text-[#1a2e4a]" aria-hidden="true" />
        <p className="text-xs leading-relaxed text-slate-600">{formNote}</p>
      </div>

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

      {/* Phone + Company */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone" optional>{form.phoneLabel}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder={form.phonePlaceholder}
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-describedby="phone-hint"
            autoComplete="tel"
          />
          <FieldHint id="phone-hint">{form.phoneHint}</FieldHint>
        </div>
        <div>
          <Label htmlFor="company" optional>{form.companyLabel}</Label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder={form.companyPlaceholder}
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
            autoComplete="organization"
          />
        </div>
      </div>

      {/* Merchant ID */}
      <div>
        <Label htmlFor="merchantId" optional>{form.merchantIdLabel}</Label>
        <Input
          id="merchantId"
          name="merchant_id"
          type="text"
          placeholder={form.merchantIdPlaceholder}
          value={values.merchantId}
          onChange={(e) => set("merchantId", e.target.value)}
          aria-describedby="merchantId-hint"
          autoComplete="off"
        />
        <FieldHint id="merchantId-hint">{form.merchantIdHint}</FieldHint>
      </div>

      {/* Selling Plan + Business Model */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="sellingPlan" optional>{form.sellingPlanLabel}</Label>
          <Select
            id="sellingPlan"
            name="selling_plan"
            options={sellingPlanOptions as { value: string; label: string }[]}
            value={values.sellingPlan}
            onChange={(e) => set("sellingPlan", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="businessModel" optional>{form.businessModelLabel}</Label>
          <Select
            id="businessModel"
            name="business_model"
            options={businessModelOptions as { value: string; label: string }[]}
            value={values.businessModel}
            onChange={(e) => set("businessModel", e.target.value)}
          />
        </div>
      </div>

      {/* Suspension Date + Prior Appeals */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="suspensionDate" optional>{form.suspensionDateLabel}</Label>
          <Input
            id="suspensionDate"
            name="suspension_date"
            type="date"
            value={values.suspensionDate}
            onChange={(e) => set("suspensionDate", e.target.value)}
            aria-describedby="suspensionDate-hint"
          />
          <FieldHint id="suspensionDate-hint">{form.suspensionDateHint}</FieldHint>
        </div>
        <div>
          <Label htmlFor="priorAppeals" optional>{form.priorAppealsLabel}</Label>
          <Select
            id="priorAppeals"
            name="prior_appeals"
            options={priorAppealsOptions as { value: string; label: string }[]}
            value={values.priorAppeals}
            onChange={(e) => set("priorAppeals", e.target.value)}
          />
        </div>
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

      {/* File */}
      <div>
        <Label htmlFor="file" optional>{form.fileLabel}</Label>
        <FileUpload id="file" onChange={(f) => set("file", f)} />
        <FieldHint>{form.fileHint}</FieldHint>
      </div>

      {/* Consent */}
      <div>
        <Checkbox
          id="consent"
          checked={values.consent}
          onChange={(v) => set("consent", v)}
          error={!!(touched.consent && errors.consent)}
        >
          {form.consentText}
        </Checkbox>
        {touched.consent && <FieldError id="consent-error" message={errors.consent} />}
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
