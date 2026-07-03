import { Link } from 'react-router-dom'
import { Phone } from '../data/products'
import { ArrowRight } from 'lucide-react'

interface ProductCardProps {
  phone: Phone
  index?: number
}

export default function ProductCard({ phone, index = 0 }: ProductCardProps) {
  return (
    <Link
      to={`/shop/${phone.id}`}
      className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:shadow-lg hover:shadow-gray-100/50 dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-black/20 sm:p-6"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="mb-4 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800/50">
        <img
          src={phone.image}
          alt={phone.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Brand & Color */}
      <div className="mb-1 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
        <span className="font-medium uppercase tracking-wider">{phone.brand}</span>
        <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
        <span>{phone.color}</span>
      </div>

      {/* Name */}
      <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-gray-100">
        {phone.name}
      </h3>

      {/* Tagline */}
      <p className="mb-3 text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
        {phone.tagline}
      </p>

      {/* Price */}
      <div className="mt-auto flex items-center gap-2">
        <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
          ${phone.price}
        </span>
        {phone.originalPrice && (
          <span className="text-sm text-gray-400 line-through dark:text-gray-500">
            ${phone.originalPrice}
          </span>
        )}
      </div>

      {/* Arrow */}
      <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white opacity-0 transition-all group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-900">
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  )
}