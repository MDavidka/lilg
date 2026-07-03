import { Link } from 'react-router-dom'
import { ArrowRight, Shield, RotateCcw, Truck, Smartphone } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'
import { getFeaturedPhones } from '../data/products'

export default function Home() {
  const featured = getFeaturedPhones()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-400">
              <Smartphone className="h-3 w-3" />
              New arrivals — iPhone 15 Pro & Galaxy S24 Ultra
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
              Upgrade your phone.{' '}
              <span className="text-gray-400 dark:text-gray-500">Not your wallet.</span>
            </h1>
            <p className="mt-6 text-balance text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
              The best phones at honest prices. Trade in your old device and get a
              fair quote instantly — no haggling, no hassle.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link to="/shop">
                <Button size="lg">
                  Browse Phones
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/buyback">
                <Button variant="outline" size="lg">
                  <RotateCcw className="h-4 w-4" />
                  Sell Your Phone
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle gradient */}
        <div className="absolute -inset-x-20 -bottom-20 h-60 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-900/30" />
      </section>

      {/* Features */}
      <section className="border-y border-gray-100 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: RotateCcw, title: 'Instant Buyback', desc: 'Get a fair price for your old phone in minutes. Free shipping.' },
              { icon: Shield, title: '1-Year Warranty', desc: 'Every phone comes with a full year of coverage, no extra cost.' },
              { icon: Truck, title: 'Free Shipping', desc: 'Fast, free delivery on all orders. 30-day no-questions returns.' },
            ].map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  <feature.icon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured phones */}
      <section className="bg-white py-16 dark:bg-gray-950 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
                Featured phones
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Carefully selected for performance and value.
              </p>
            </div>
            <Link
              to="/shop"
              className="hidden items-center gap-1 text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400 sm:flex"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((phone, i) => (
              <ProductCard key={phone.id} phone={phone} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/shop">
              <Button variant="outline">
                View all phones
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Buyback promo */}
      <section className="bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 dark:border-gray-800 dark:bg-gray-900 sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <RotateCcw className="h-3.5 w-3.5" />
                Trade-In Program
              </div>
              <h2 className="text-balance text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
                Got an old phone?
              </h2>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                Get an instant quote, ship it free, and get paid — or use the value
                toward your next upgrade.
              </p>
              <div className="mt-6 flex flex-col items-center gap-2">
                <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">iPhone</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">Samsung</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">Google</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">OnePlus</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">More</span>
                </div>
                <Link to="/buyback" className="mt-4">
                  <Button size="lg">
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}