import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, Smartphone } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { phones, categories, brands } from '../data/products'
import { cn } from '../../lib/utils'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'all'
  const activeBrand = searchParams.get('brand') || 'All'
  const [search, setSearch] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let result = [...phones]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (activeBrand !== 'All') {
      result = result.filter(
        (p) => p.brand.toLowerCase() === activeBrand.toLowerCase()
      )
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
      )
    }
    return result
  }, [activeCategory, activeBrand, search])

  const setFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all' || value === 'All') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            All Phones
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {filtered.length} phone{filtered.length !== 1 ? 's' : ''} available
          </p>
        </div>

        {/* Category tabs */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                activeCategory === cat.id
                  ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & filter bar */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search phones..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full rounded-full border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-gray-500"
            />
          </div>

          {/* Brand filter (mobile toggle + desktop chips) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex h-10 items-center gap-2 rounded-full border border-gray-200 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 sm:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Brand
            </button>

            <div className="hidden items-center gap-1.5 sm:flex">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setFilter('brand', brand)}
                  className={cn(
                    'rounded-full px-3.5 py-1.5 text-xs font-medium transition-all',
                    activeBrand === brand
                      ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
                  )}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile brand filter */}
        {showFilters && (
          <div className="mb-6 flex flex-wrap gap-1.5 sm:hidden">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => {
                  setFilter('brand', brand)
                  setShowFilters(false)
                }}
                className={cn(
                  'rounded-full px-3.5 py-1.5 text-xs font-medium transition-all',
                  activeBrand === brand
                    ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                )}
              >
                {brand}
              </button>
            ))}
          </div>
        )}

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((phone, i) => (
              <ProductCard key={phone.id} phone={phone} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
              <Smartphone className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              No phones found
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Try adjusting your filters or search.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}