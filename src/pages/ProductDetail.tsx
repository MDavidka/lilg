import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, Check, RotateCcw, Shield, Truck, Smartphone } from 'lucide-react'
import Button from '../components/Button'
import { getPhoneById } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const phone = getPhoneById(id || '')

  if (!phone) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <Smartphone className="mb-4 h-12 w-12 text-gray-300 dark:text-gray-600" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Phone not found</h2>
        <Link to="/shop" className="mt-4 text-sm font-medium text-gray-500 underline underline-offset-4 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
          Back to shop
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="mb-6 inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl bg-gray-50 dark:bg-gray-800/50">
            <img
              src={phone.image}
              alt={phone.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-2 text-xs font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500">
              {phone.brand}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              {phone.name}
            </h1>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              {phone.tagline}
            </p>

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                ${phone.price}
              </span>
              {phone.originalPrice && (
                <span className="text-lg text-gray-400 line-through dark:text-gray-500">
                  ${phone.originalPrice}
                </span>
              )}
              {phone.originalPrice && (
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Save ${phone.originalPrice - phone.price}
                </span>
              )}
            </div>

            {/* Color */}
            <div className="mt-8">
              <span className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Color — {phone.color}
              </span>
              <div className="mt-2 flex gap-2">
                {phone.colors.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-gray-200 px-3.5 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:text-gray-400"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="mt-8">
              <span className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Specifications
              </span>
              <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3">
                {[
                  { label: 'Display', value: phone.specs.display },
                  { label: 'Chip', value: phone.specs.chip },
                  { label: 'Camera', value: phone.specs.camera },
                  { label: 'Battery', value: phone.specs.battery },
                  { label: 'Storage', value: phone.specs.storage },
                  { label: 'RAM', value: phone.specs.ram },
                ].map((spec) => (
                  <div key={spec.label}>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {spec.label}
                    </span>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 space-y-3">
              <Button size="lg" className="w-full">
                Add to Cart — ${phone.price}
              </Button>
              <Link to="/buyback">
                <Button variant="outline" size="lg" className="w-full">
                  <RotateCcw className="h-4 w-4" />
                  Trade in your old phone & save more
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-8 space-y-2 border-t border-gray-100 pt-6 dark:border-gray-800">
              {[
                { icon: Truck, text: 'Free shipping on all orders' },
                { icon: Shield, text: '1-year warranty included' },
                { icon: RotateCcw, text: '30-day no-questions returns' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400">
                  <Check className="h-4 w-4 text-gray-900 dark:text-gray-100" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}