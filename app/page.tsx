'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  FileCheck2,
  LockKeyhole,
  Menu,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

const steps = ['Personal information', 'Rental history', 'Employment & income', 'Identity verification']

export default function Page() {
  const [showWizard, setShowWizard] = useState(false)
  const [step, setStep] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7fa] text-[#132238]">
      <header className="relative z-10 border-b border-[#e4e9ef] bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-[1180px] items-center justify-between px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="RentVerify home">
            <span className="grid size-9 place-items-center rounded-xl bg-[#16375b] text-white shadow-sm">
              <ShieldCheck className="size-5" strokeWidth={2.2} />
            </span>
            <span className="text-[17px] font-semibold tracking-[-0.03em]">Rent<span className="text-[#179a87]">Verify</span></span>
          </a>
          <nav className="hidden items-center gap-9 text-[13px] font-medium text-[#617084] md:flex">
            <a href="#how-it-works" className="transition hover:text-[#132238]">How it works</a>
            <a href="#security" className="transition hover:text-[#132238]">Security</a>
            <a href="#help" className="transition hover:text-[#132238]">Help</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setShowWizard(true)} className="hidden rounded-lg border border-[#d9e1e9] px-4 py-2 text-[13px] font-semibold text-[#31435a] transition hover:border-[#9fb0c2] sm:block">Applicant sign in</button>
            <button onClick={() => setShowWizard(true)} className="rounded-lg bg-[#16375b] px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_5px_14px_rgba(22,55,91,.15)] transition hover:bg-[#102d4b]">Start application</button>
            <button aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-[#52647a] md:hidden"><Menu className="size-5" /></button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-[#e4e9ef] bg-white px-6 py-4 text-sm font-medium text-[#617084] md:hidden"><div className="flex flex-col gap-4"><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a><a href="#security" onClick={() => setMenuOpen(false)}>Security</a><a href="#help" onClick={() => setMenuOpen(false)}>Help</a></div></nav>}
      </header>

      <section id="top" className="relative mx-auto max-w-[1180px] px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute -right-40 -top-32 size-[600px] rounded-full bg-[#dff3ed] opacity-70 blur-3xl" />
        <div className="relative grid items-center gap-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-12">
          <div className="max-w-[560px]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#bce5db] bg-[#eaf8f4] px-3.5 py-2 text-[12px] font-semibold tracking-[.02em] text-[#177d70]"><Sparkles className="size-3.5" /> A simpler way to apply</div>
            <h1 className="max-w-[620px] text-[48px] font-semibold leading-[1.06] tracking-[-0.055em] text-[#132238] sm:text-[64px]">Rental screening,<br /><span className="text-[#179a87]">made simple.</span></h1>
            <p className="mt-7 max-w-[475px] text-[17px] leading-8 text-[#64748b]">Securely submit your rental application and complete your screening online — all in one clear, guided experience.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><button onClick={() => setShowWizard(true)} className="group inline-flex items-center gap-3 rounded-lg bg-[#16375b] px-5 py-3.5 text-[14px] font-semibold text-white shadow-[0_9px_20px_rgba(22,55,91,.18)] transition hover:-translate-y-0.5 hover:bg-[#102d4b]">Start your application <ArrowRight className="size-4 transition group-hover:translate-x-0.5" /></button><a href="#how-it-works" className="inline-flex items-center gap-2 px-2 py-3 text-[14px] font-semibold text-[#42546a] hover:text-[#16375b]">See how it works <ChevronRight className="size-4" /></a></div>
            <div className="mt-10 flex items-center gap-5 text-[12px] font-medium text-[#718096]"><span className="flex items-center gap-2"><LockKeyhole className="size-4 text-[#179a87]" /> Secure & encrypted</span><span className="h-4 w-px bg-[#d8e0e8]" /><span>No hidden fees</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -inset-5 rounded-[32px] bg-white/70 shadow-[0_20px_60px_rgba(34,58,80,.06)]" />
            <div className="relative rounded-2xl border border-[#e0e7ed] bg-white p-6 shadow-[0_24px_55px_rgba(28,50,71,.1)] sm:p-8">
              <div className="flex items-start justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[.13em] text-[#8290a1]">Application preview</p><h2 className="mt-2 text-[22px] font-semibold tracking-[-.03em] text-[#19304a]">Your application, at a glance</h2></div><span className="rounded-full bg-[#eaf8f4] px-2.5 py-1 text-[11px] font-semibold text-[#177d70]">Draft</span></div>
              <div className="mt-8 space-y-3">{steps.map((item, index) => <div key={item} className="flex items-center gap-3 rounded-xl border border-[#edf0f3] px-4 py-3.5"><span className={`grid size-7 place-items-center rounded-full ${index === 0 ? 'bg-[#16375b] text-white' : 'bg-[#f2f5f7] text-[#9aa8b7]'}`}>{index === 0 ? <Check className="size-4" /> : <span className="text-[11px] font-bold">0{index + 1}</span>}</span><span className="flex-1 text-[13px] font-semibold text-[#41546a]">{item}</span><ChevronRight className="size-4 text-[#b1bdc9]" /></div>)}</div>
              <div className="mt-7 flex items-center justify-between border-t border-[#edf0f3] pt-6"><div><p className="text-[11px] text-[#8492a2]">Estimated time</p><p className="mt-1 text-[14px] font-semibold text-[#32465c]">8–10 minutes</p></div><button onClick={() => setShowWizard(true)} className="rounded-lg bg-[#eaf8f4] px-4 py-2.5 text-[13px] font-semibold text-[#177d70] transition hover:bg-[#d9f1ea]">Continue application</button></div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-[#e4e9ef] bg-white px-6 py-20 lg:px-8"><div className="mx-auto max-w-[1180px]"><div className="max-w-[500px]"><p className="text-[12px] font-bold uppercase tracking-[.15em] text-[#179a87]">A better way forward</p><h2 className="mt-3 text-[34px] font-semibold tracking-[-.045em] text-[#132238]">Everything you need.<br />Nothing you don&apos;t.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-3"><Feature icon={FileCheck2} title="Secure application" text="Complete your application with confidence. Your information is protected using modern security practices." /><Feature icon={CircleDollarSign} title="Simple, upfront fee" text="A one-time $50 screening fee covers the processing of your application. No surprises." /><Feature icon={Users} title="Clear communication" text="Know where your application stands with an easy-to-follow status and timeline." /></div></div></section>
      <section id="security" className="bg-[#16375b] px-6 py-16 text-white lg:px-8"><div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-8 md:flex-row md:items-center"><div><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-white/10"><LockKeyhole className="size-4 text-[#8ee0cd]" /></span><p className="text-[12px] font-bold uppercase tracking-[.15em] text-[#8ee0cd]">Built with care</p></div><h2 className="mt-4 max-w-[530px] text-[29px] font-semibold tracking-[-.04em]">Your privacy and security<br className="hidden sm:block" /> are part of the process.</h2></div><p className="max-w-[400px] text-[14px] leading-7 text-[#bfd0df]">Sensitive information is encrypted in transit and handled using secure storage practices. We only collect what&apos;s needed to process your application.</p></div></section>
      <footer id="help" className="bg-white px-6 py-9 lg:px-8"><div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-5 text-[12px] text-[#8390a0] sm:flex-row sm:items-center"><div className="flex items-center gap-2 font-semibold text-[#52647a]"><span className="grid size-6 place-items-center rounded-md bg-[#16375b] text-white"><ShieldCheck className="size-3.5" /></span>RentVerify</div><div className="flex flex-wrap gap-5"><a href="#security" className="hover:text-[#16375b]">Privacy</a><a href="#security" className="hover:text-[#16375b]">Terms</a><a href="#security" className="hover:text-[#16375b]">Applicant authorization</a><a href="mailto:help@rentverify.example" className="hover:text-[#16375b]">Contact</a></div></div></footer>

      {showWizard && <Wizard step={step} setStep={setStep} onClose={() => setShowWizard(false)} />}
    </main>
  )
}

function Feature({ icon: Icon, title, text }: { icon: typeof ShieldCheck; title: string; text: string }) { return <article className="rounded-2xl border border-[#e5ebf0] bg-[#fbfcfd] p-6"><span className="grid size-10 place-items-center rounded-xl bg-[#eaf8f4] text-[#179a87]"><Icon className="size-5" /></span><h3 className="mt-6 text-[16px] font-semibold text-[#1d344d]">{title}</h3><p className="mt-3 text-[13px] leading-6 text-[#718096]">{text}</p></article> }

function Wizard({ step, setStep, onClose }: { step: number; setStep: (step: number) => void; onClose: () => void }) {
  const labels = ['Personal information', 'Rental history', 'Employment & income', 'Identity verification', 'Review & payment']
  const [isPaying, setIsPaying] = useState(false)
  const [paymentError, setPaymentError] = useState('')

  async function startPayment() {
    setIsPaying(true)
    setPaymentError('')
    try {
      const response = await fetch('/api/checkout', { method: 'POST' })
      const data = await response.json()
      if (!response.ok || !data.url) throw new Error(data.error || 'Unable to start payment.')
      // Stripe hosted checkout cannot render inside the embedded v0 preview frame.
      // Open it in a separate tab there, while keeping normal navigation for a deployed app.
      if (window.self !== window.top) {
        window.open(data.url, '_blank', 'noopener,noreferrer')
      } else {
        window.location.assign(data.url)
      }
    } catch (error) {
      setPaymentError(error instanceof Error ? error.message : 'Unable to start payment.')
      setIsPaying(false)
    }
  }

  return <div className="fixed inset-0 z-50 overflow-y-auto bg-[#10253d]/55 p-4 backdrop-blur-sm sm:p-8"><div className="mx-auto min-h-full max-w-[720px] py-4 sm:py-10"><div className="rounded-2xl bg-white shadow-2xl"><div className="flex items-center justify-between border-b border-[#e8edf1] px-6 py-5 sm:px-8"><div><p className="text-[11px] font-bold uppercase tracking-[.13em] text-[#179a87]">Rental application</p><h2 className="mt-1 text-[20px] font-semibold tracking-[-.03em] text-[#19304a]">Let&apos;s get started</h2></div><button onClick={onClose} aria-label="Close application" className="rounded-lg p-2 text-[#8290a1] hover:bg-[#f3f6f8] hover:text-[#19304a]"><X className="size-5" /></button></div><div className="px-6 pt-6 sm:px-8"><div className="flex gap-1.5">{labels.map((label, index) => <div key={label} className="h-1.5 flex-1 rounded-full bg-[#edf1f4]"><div className={`h-full rounded-full bg-[#179a87] transition-all ${index <= step ? 'w-full' : 'w-0'}`} /></div>)}</div><p className="mt-3 text-[12px] font-medium text-[#8794a3]">Step {step + 1} of {labels.length} · {labels[step]}</p></div><div className="px-6 py-8 sm:px-8"><WizardContent step={step} /></div>{paymentError && <p role="alert" className="px-6 pb-4 text-sm text-red-600 sm:px-8">{paymentError}</p>}<div className="flex justify-between border-t border-[#e8edf1] px-6 py-5 sm:px-8"><button onClick={() => step > 0 && setStep(step - 1)} disabled={step === 0 || isPaying} className="rounded-lg px-4 py-2.5 text-[13px] font-semibold text-[#627286] disabled:opacity-30">Back</button><button onClick={() => step < labels.length - 1 ? setStep(step + 1) : startPayment()} disabled={isPaying} className="inline-flex items-center gap-2 rounded-lg bg-[#16375b] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#102d4b] disabled:cursor-wait disabled:opacity-70">{isPaying ? 'Opening secure payment…' : step === labels.length - 1 ? 'Pay $50.00' : 'Continue'} <ArrowRight className="size-4" /></button></div></div></div></div>
}

function WizardContent({ step }: { step: number }) {
  if (step === 0) return <div><h3 className="text-[24px] font-semibold tracking-[-.035em] text-[#19304a]">Tell us about yourself</h3><p className="mt-2 text-[14px] text-[#718096]">We&apos;ll use this information to create your application.</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="First name" placeholder="Jordan" /><Field label="Last name" placeholder="Lee" /><Field label="Email address" placeholder="jordan@example.com" type="email" /><Field label="Phone number" placeholder="(555) 000-0000" type="tel" /><Field label="Current address" placeholder="123 Main Street" wide /><Field label="City" placeholder="Austin" /><Field label="State" placeholder="TX" /><Field label="ZIP code" placeholder="78701" /></div></div>
  if (step === 1) return <div><h3 className="text-[24px] font-semibold tracking-[-.035em] text-[#19304a]">Your rental history</h3><p className="mt-2 text-[14px] text-[#718096]">Share details about your current or previous home.</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="Landlord or property manager" placeholder="Alex Morgan" /><Field label="Monthly rent" placeholder="$2,100" /><Field label="Landlord email" placeholder="alex@example.com" type="email" /><Field label="Landlord phone" placeholder="(555) 000-0000" type="tel" /><Field label="Previous rental address" placeholder="456 Oak Avenue" wide /><Field label="Reason for leaving" placeholder="Relocating for work" wide /></div><label className="mt-7 flex items-start gap-3 text-[13px] leading-5 text-[#52647a]"><input type="checkbox" className="mt-0.5 size-4 accent-[#179a87]" />I authorize RentVerify and the property manager to verify the rental information provided.</label></div>
  if (step === 2) return <div><h3 className="text-[24px] font-semibold tracking-[-.035em] text-[#19304a]">Employment & income</h3><p className="mt-2 text-[14px] text-[#718096]">Help us understand your current financial picture.</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="Employment status" placeholder="Employed" /><Field label="Employer name" placeholder="Acme Inc." /><Field label="Job title" placeholder="Product designer" /><Field label="Monthly gross income" placeholder="$8,500" /><Field label="Employment start date" placeholder="MM / DD / YYYY" /><Field label="Additional income (optional)" placeholder="$0" /></div><div className="mt-7 rounded-xl border border-dashed border-[#c9d5df] bg-[#fbfcfd] p-5"><p className="text-[13px] font-semibold text-[#3d536a]">Upload income documents <span className="font-normal text-[#91a0ae]">(optional)</span></p><p className="mt-1 text-[12px] text-[#8593a2]">Pay stubs, offer letters, or bank statements · PDF, JPG or PNG up to 10MB</p><button className="mt-4 rounded-lg border border-[#d9e2e9] bg-white px-3.5 py-2 text-[12px] font-semibold text-[#52647a]">Choose files</button></div></div>
  if (step === 3) return <div><h3 className="text-[24px] font-semibold tracking-[-.035em] text-[#19304a]">Verify your identity</h3><p className="mt-2 text-[14px] text-[#718096]">Your information is encrypted and protected using secure storage practices.</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="Social Security number" placeholder="••• – •• – ••••" type="password" wide /><Field label="Government ID type" placeholder="Driver&apos;s license" /><Field label="Government ID number" placeholder="Enter ID number" /></div><div className="mt-7 rounded-xl border border-[#bce5db] bg-[#f1fbf8] p-4"><div className="flex gap-3"><LockKeyhole className="mt-0.5 size-4 shrink-0 text-[#179a87]" /><p className="text-[12px] leading-5 text-[#39766f]">We never display your complete SSN after you leave this field. It will not be included in your application URL or shared with third parties without your authorization.</p></div></div><label className="mt-6 flex items-start gap-3 text-[13px] leading-5 text-[#52647a]"><input type="checkbox" className="mt-0.5 size-4 accent-[#179a87]" />I authorize the screening described in this application and agree to the Applicant Authorization.</label></div>
  return <div><h3 className="text-[24px] font-semibold tracking-[-.035em] text-[#19304a]">Review & payment</h3><p className="mt-2 text-[14px] text-[#718096]">Review your details, then complete the one-time screening fee.</p><div className="mt-7 divide-y divide-[#edf1f4] rounded-xl border border-[#e4ebf0]">{['Personal information', 'Rental history', 'Employment & income', 'Identity verification'].map((item, i) => <div className="flex items-center gap-4 p-4" key={item}><CheckCircle2 className="size-5 text-[#179a87]" /><span className="flex-1 text-[13px] font-semibold text-[#455970]">{item}</span><button className="text-[12px] font-semibold text-[#179a87]">Edit</button></div>)}</div><div className="mt-6 flex items-center justify-between rounded-xl bg-[#f4f8fb] p-5"><div><p className="text-[13px] font-semibold text-[#31465d]">Rental application screening</p><p className="mt-1 text-[12px] text-[#8290a1]">Secure payment processed by Stripe</p></div><p className="text-[22px] font-semibold tracking-[-.04em] text-[#19304a]">$50.00</p></div><label className="mt-6 flex items-start gap-3 text-[13px] leading-5 text-[#52647a]"><input type="checkbox" className="mt-0.5 size-4 accent-[#179a87]" />I certify the information provided is accurate and complete.</label></div>
}

function Field({ label, placeholder, type = 'text', wide = false }: { label: string; placeholder: string; type?: string; wide?: boolean }) { return <label className={wide ? 'sm:col-span-2' : ''}><span className="mb-2 block text-[12px] font-semibold text-[#52647a]">{label}</span><input type={type} placeholder={placeholder} className="h-11 w-full rounded-lg border border-[#dbe3e9] bg-white px-3.5 text-[13px] text-[#19304a] outline-none transition placeholder:text-[#a5b0bb] focus:border-[#179a87] focus:ring-2 focus:ring-[#179a87]/15" /></label> }

