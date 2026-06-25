import { useState, useRef } from 'react'
import { toast } from 'sonner'
import { ChevronDown, Check } from 'lucide-react'

import { cn } from '@/lib/cn'
import { FileDropzone } from '@/components/ui/FileDropzone'
import content from '@/data/content.sr'

interface FormState {
  name: string
  phone: string
  email: string
  productType: string
  location: string
  message: string
  files: File[]
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  message?: string
}

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  productType: '',
  location: '',
  message: '',
  files: [],
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) errors.name = 'Ovo polje je obavezno'
  if (!form.phone.trim()) errors.phone = 'Ovo polje je obavezno'
  else if (!/^[\d\s/+()-]{6,}$/.test(form.phone.trim()))
    errors.phone = 'Unesite važeći broj telefona'
  if (!form.email.trim()) errors.email = 'Ovo polje je obavezno'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = 'Unesite važeću email adresu'
  if (!form.message.trim() || form.message.trim().length < 10)
    errors.message = 'Poruka mora imati najmanje 10 karaktera'
  return errors
}

interface ContactFormProps {
  onSubmit?: (data: FormState) => Promise<void>
}

export function ContactForm({ onSubmit: externalSubmit }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectOpen, setSelectOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setIsSubmitting(true)
    try {
      if (externalSubmit) {
        await externalSubmit(form)
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }
      setIsSuccess(true)
      toast.success(content.contact.form.success)
      setTimeout(() => {
        setIsSuccess(false)
        setForm(initialForm)
      }, 3000)
    } catch {
      toast.error(content.contact.form.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-card)] px-4 py-3 text-sm text-white placeholder-[var(--text-tertiary)] transition-all duration-200 focus:border-[var(--accent-primary)] focus:shadow-[0_0_0_3px_var(--accent-glow)] focus:outline-none'

  const inputErrorClass =
    'border-[var(--error)] focus:border-[var(--error)] focus:shadow-[0_0_0_3px_rgba(248,113,113,0.2)]'

  const labelClass =
    'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[
        { id: 'name' as const, label: content.contact.form.name, type: 'text', required: true },
        { id: 'phone' as const, label: content.contact.form.phone, type: 'tel', required: true },
        { id: 'email' as const, label: content.contact.form.email, type: 'email', required: true },
      ].map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id} className={labelClass}>
            {field.label}
            {field.required && <span className="ml-1 text-[var(--error)]">*</span>}
          </label>
          <input
            id={field.id}
            type={field.type}
            value={form[field.id]}
            onChange={set(field.id)}
            className={cn(inputClass, errors[field.id] && inputErrorClass)}
          />
          {errors[field.id] && (
            <p className="mt-1 text-xs text-[var(--error)]">{errors[field.id]}</p>
          )}
        </div>
      ))}

      <div>
        <label className={labelClass}>{content.contact.form.productType}</label>
        <div className="relative" ref={selectRef}>
          <button
            type="button"
            onClick={() => setSelectOpen((o) => !o)}
            className={cn(
              inputClass,
              'flex w-full items-center justify-between text-left',
              !form.productType && 'text-[var(--text-tertiary)]',
            )}
          >
            <span>{form.productType || 'Izaberite...'}</span>
            <ChevronDown
              className={cn(
                'h-4 w-4 text-[var(--text-secondary)] transition-transform duration-200',
                selectOpen && 'rotate-180',
              )}
            />
          </button>

          {selectOpen && (
            <div className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-card)] shadow-lg">
              {content.contact.form.products.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    setForm((prev) => ({ ...prev, productType: opt.label }))
                    setSelectOpen(false)
                  }}
                  className={cn(
                    'w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-[var(--bg-secondary)]',
                    form.productType === opt.label
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-secondary)]',
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="location" className={labelClass}>
          {content.contact.form.location}
        </label>
        <input
          id="location"
          type="text"
          value={form.location}
          onChange={set('location')}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {content.contact.form.message}
          <span className="ml-1 text-[var(--error)]">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => {
            setForm((prev) => ({ ...prev, message: e.target.value }))
            if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }))
            e.target.style.height = 'auto'
            e.target.style.height = `${e.target.scrollHeight}px`
          }}
          className={cn(
            inputClass,
            'resize-none overflow-hidden',
            errors.message && inputErrorClass,
          )}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-[var(--error)]">{errors.message}</p>
        )}
      </div>

      <div>
        <label className={labelClass}>{content.contact.form.files}</label>
        <FileDropzone
          files={form.files}
          onFilesChange={(files) => setForm((prev) => ({ ...prev, files }))}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className={cn(
          'flex h-12 w-full items-center justify-center rounded-lg text-base font-semibold transition-all duration-200',
          isSuccess
            ? 'bg-[var(--success)] text-black'
            : 'bg-[var(--accent-primary)] text-white hover:opacity-90',
          'disabled:cursor-not-allowed disabled:opacity-50',
        )}
      >
        {isSubmitting && (
          <svg
            className="-ml-1 mr-2 h-4 w-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {isSuccess && <Check className="mr-2 h-5 w-5" />}
        {isSubmitting
          ? content.contact.form.sending
          : isSuccess
            ? content.contact.form.success
            : content.contact.form.submit}
      </button>
    </form>
  )
}
