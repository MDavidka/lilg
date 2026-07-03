import { useState } from 'react'
import { Smartphone, ChevronRight, ArrowLeft, Check, DollarSign, Shield, Truck } from 'lucide-react'
import Button from '../components/Button'
import { phones, brands } from '../data/products'
import { cn } from '../../lib/utils'

type Step = 'select' | 'condition' | 'quote'

const conditions = [
  { id: 'mint', label: 'Mint', desc: 'Like new — no scratches, all accessories included' },
  { id: 'good', label: 'Good', desc: 'Minor wear, fully functional' },
  { id: 'fair', label: 'Fair', desc: 'Visible scratches or dents, works perfectly' },
  { id: 'broken', label: 'Broken', desc: 'Cracked screen or other damage, powers on' },
]

const conditionMultipliers: Record<string, number> = {
  mint: 0.85,
  good: 0.7,
  fair: 0.5,
  broken: 0.25,
}

// Base prices for buyback estimation
const buybackBasePrices: Record<string, number> = {
  'iphone-15-pro': 600,
  'galaxy-s24': 500,
  'pixel-8-pro': 450,
  'iphone-15': 400,
  'galaxy-a54': 200,
  'nothing-phone-2': 300,
  'oneplus-12': 350,
  'moto-g84': 120,
}

export default function Buyback() {
  const [step, setStep] = useState<Step>('select')
  const [selectedPhone, setSelectedPhone] = useState<string>('')
  const [selectedCondition, setSelectedCondition] = useState<string>('')
  const [submitted, setSubmitted] = useState(false)

  const selectedPhoneData = phones.find((p) => p.id === selectedPhone)

  const calculateQuote = () => {
    if (!selectedPhone || !selectedCondition) return 0
    const base = buybackBasePrices[selectedPhone] || 100
    const multiplier = conditionMultipliers[selectedCondition] || 0.5
    return Math.round(base * multiplier)
  }

  const quote = calculateQuote()

  const handleReset = () => {
    setStep('select')
    setSelectedPhone('')
    setSelectedCondition('')
    setSubmitted(false)
  }

  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            <Smartphone className="h-3.5 w-3.5" />
            Trade-In Program
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Sell your phone
          </h1>
          <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
            Get a fair price. Free shipping. Fast payment.
          </p>
        </div>

        {/* Progress steps */}
        <div className="mb-10 flex items-center justify-center gap-2">
          {(['select', 'condition', 'quote'] as Step[]).map((s, i) => {
            const current = step === s
            const done =
              (step === 'condition' && s === 'select') ||
              (step === 'quote' && (s === 'select' || s === 'condition'))
            return (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-all',
                    current
                      ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                      : done
                      ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                      : 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500'
                  )}
                >
                  {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
                </div>
                <span
                  className={cn(
                    'text-xs font-medium',
                    current || done
                      ? 'text-gray-900 dark:text-gray-100'
                      : 'text-gray-400 dark:text-gray-500'
                  )}
                >
                  {s === 'select' ? 'Device' : s === 'condition' ? 'Condition' : 'Quote'}
                </span>
                {i < 2 && (
                  <ChevronRight className="mx-1 h-4 w-4 text-gray-300 dark:text-gray-600" />
                )}
              </div>
            )
          })}
        </div>

        {/* Step 1: Select device */}
        {step === 'select' && (
          <div>
            <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Select your device
            </h2>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Choose the phone you want to sell.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {phones.map((phone) => (
                <button
                  key={phone.id}
                  onClick={() => {
                    setSelectedPhone(phone.id)
                    setStep('condition')
                  }}
                  className={cn(
                    'flex items-center gap-4 rounded-2xl border p-4 text-left transition-all hover:shadow-md',
                    selectedPhone === phone.id
                      ? 'border-gray-900 bg-gray-50 dark:border-gray-100 dark:bg-gray-800'
                      : 'border-gray-100 bg-white hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800/50'
                  )}
                >
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800">
                    <img
                      src={phone.image}
                      alt={phone.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      {phone.brand}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {phone.name}
                    </div>
                    <div className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">
                      Est. value up to ${buybackBasePrices[phone.id] || 100}
                    </div>
                  </div>
                  <ChevronRight className="ml-auto h-4 w-4 flex-shrink-0 text-gray-300 dark:text-gray-600" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Condition */}
        {step === 'condition' && (
          <div>
            <button
              onClick={() => setStep('select')}
              className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Change device
            </button>
            <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
              What condition is your {selectedPhoneData?.name} in?
            </h2>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Be honest — we verify the condition upon arrival.
            </p>
            <div className="space-y-3">
              {conditions.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedCondition(c.id)
                    setStep('quote')
                  }}
                  className={cn(
                    'flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all',
                    selectedCondition === c.id
                      ? 'border-gray-900 bg-gray-50 dark:border-gray-100 dark:bg-gray-800'
                      : 'border-gray-100 bg-white hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800/50'
                  )}
                >
                  <div
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold',
                      selectedCondition === c.id
                        ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                        : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                    )}
                  >
                    {c.label[0].toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {c.label}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {c.desc}
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-300 dark:text-gray-600" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Quote */}
        {step === 'quote' && !submitted && (
          <div className="text-center">
            <button
              onClick={() => setStep('condition')}
              className="mb-6 inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Change condition
            </button>

            <div className="mx-auto max-w-md rounded-3xl border border-gray-100 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  <DollarSign className="h-8 w-8 text-gray-900 dark:text-gray-100" />
                </div>
              </div>
              <div className="mb-1 text-xs font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Your estimated quote
              </div>
              <div className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                ${quote}
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                for {selectedPhoneData?.name} ({conditions.find((c) => c.id === selectedCondition)?.label})
              </p>

              <div className="mt-8 space-y-3">
                <Button size="lg" className="w-full" onClick={() => setSubmitted(true)}>
                  Accept Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => setStep('condition')}
                >
                  Re-evaluate
                </Button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Free shipping
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Price locked for 14 days
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                Fast payment
              </div>
            </div>
          </div>
        )}

        {/* Success */}
        {submitted && (
          <div className="text-center">
            <div className="mx-auto max-w-md rounded-3xl border border-gray-100 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Quote accepted!
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                We've sent instructions to your email. Ship your{` `}
                {selectedPhoneData?.name} within 14 days and we'll pay you ${quote}.
              </p>
              <div className="mt-8 space-y-3">
                <Button size="lg" className="w-full" onClick={handleReset}>
                  Sell Another Phone
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}